import { useState } from "react";
import { submitLead } from "./api";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    if (!name || !email) {
      setMessage("Please fill out all fields.");
      return;
    }

    try {
      const result = await submitLead(name, email);
      setMessage(result.message);

      // GA tracking
      if (typeof window.gtag === "function") {
        window.gtag("event", "lead_form_submission", {
          event_category: "Lead Capture",
          event_label: "React Lead Form",
        });
      }
    } catch (error) {
      setMessage(error.message || "An error occurred.");
    }
  };

  const handleBlogClick = () => {
    if (typeof window.gtag === "function") {
      window.gtag("event", "click", {
        event_category: "Navigation",
        event_label: "Blog Link",
      });
    }
  };

  return (
    <div className="App">
      <header className="mb-4">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <a className="navbar-brand" href="/">
              Ogbet
            </a>
            <div className="navbar-nav">
              <a className="nav-link" href="/">
                Home
              </a>
              <a
                className="nav-link"
                href="http://ogbet-blog.local/blog"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleBlogClick}
              >
                Blog
              </a>
            </div>
          </div>
        </nav>
      </header>

      <main className="container">
        <div className="p-5 mb-4 bg-light rounded-3 text-center">
          <h1 className="display-4">Claim 50 Free Spins!</h1>
          <p className="lead">
            Sign up now and start winning with top-rated slots and live tables.
          </p>
          <ul className="list-unstyled">
            <li>✔ No deposit needed</li>
            <li>✔ Instant payouts</li>
            <li>✔ Trusted by thousands of players</li>
          </ul>
          <button
            className="btn btn-success btn-lg mt-3"
            onClick={() => {
              if (typeof window.gtag === "function") {
                window.gtag("event", "click", {
                  event_category: "CTA",
                  event_label: "Play Now Button",
                });
              }
              // Redirect user or open a modal, etc.
              window.location.href = "/play";
            }}
          >
            Play Now
          </button>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-6">
            <form onSubmit={handleSubmit} className="card p-4 shadow-sm">
              <div className="mb-3">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control"
                />
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Submit
              </button>
              {message && <p className="mt-3 text-center">{message}</p>}
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
