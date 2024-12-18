require("dotenv").config();

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const fetch = require("node-fetch");
const querystring = require("querystring");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

const HUBSPOT_CLIENT_ID = process.env.HUBSPOT_CLIENT_ID;
const HUBSPOT_CLIENT_SECRET = process.env.HUBSPOT_CLIENT_SECRET;
const REDIRECT_URI = "http://localhost:3001/oauth-callback";
console.log(HUBSPOT_CLIENT_ID, "the id");
// OAuth Redirect URL
app.get("/oauth", (req, res) => {
  const authUrl = `https://app.hubspot.com/oauth/authorize?client_id=${HUBSPOT_CLIENT_ID}&redirect_uri=${encodeURIComponent(
    REDIRECT_URI
  )}&scope=crm.objects.contacts.write`;
  res.redirect(authUrl);
});

let accessToken = null;
let refreshToken = null;

app.get("/oauth-callback", async (req, res) => {
  const { code } = req.query;

  try {
    const response = await fetch("https://api.hubapi.com/oauth/v1/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: querystring.stringify({
        grant_type: "authorization_code",
        client_id: HUBSPOT_CLIENT_ID,
        client_secret: HUBSPOT_CLIENT_SECRET,
        redirect_uri: REDIRECT_URI,
        code,
      }),
    });

    const data = await response.json();

    if (data.access_token) {
      accessToken = data.access_token;
      refreshToken = data.refresh_token;
      console.log("Access Token:", accessToken);
      console.log("Refresh Token:", refreshToken);
      res.send("OAuth Successful! Access and refresh tokens acquired.");
    } else {
      res.status(500).send("Failed to get tokens from HubSpot.");
    }
  } catch (error) {
    console.error("OAuth Error:", error);
    res.status(500).send("OAuth Failed");
  }
});

const refreshAccessToken = async () => {
  try {
    const response = await fetch("https://api.hubapi.com/oauth/v1/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: querystring.stringify({
        grant_type: "refresh_token",
        client_id: HUBSPOT_CLIENT_ID,
        client_secret: HUBSPOT_CLIENT_SECRET,
        refresh_token: refreshToken,
      }),
    });

    const data = await response.json();
    if (data.access_token) {
      accessToken = data.access_token; // Update the access token
      console.log("Access token refreshed:", accessToken);
    } else {
      throw new Error("Failed to refresh access token");
    }
  } catch (error) {
    console.error("Token Refresh Error:", error);
  }
};

app.post("/api/submit-lead", async (req, res) => {
  const { name, email } = req.body;

  if (!accessToken) {
    return res.status(401).json({ message: "Not authenticated with HubSpot." });
  }

  await refreshAccessToken();

  const data = {
    properties: {
      email: email,
      firstname: name,
    },
  };

  try {
    const response = await fetch(
      "https://api.hubapi.com/crm/v3/objects/contacts",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(data),
      }
    );

    const responseData = await response.json();

    if (response.ok) {
      res
        .status(200)
        .json({ message: "Lead submitted successfully!", data: responseData });
    } else {
      console.error("HubSpot API Error:", responseData);
      res.status(500).json({
        message: `HubSpot API submission failed - ${responseData.message}`,
        details: responseData,
      });
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Error submitting lead to CRM" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  console.log(`Start OAuth Flow: http://localhost:${PORT}/oauth`);
});
