export const refreshAccessToken = async () => {
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
  