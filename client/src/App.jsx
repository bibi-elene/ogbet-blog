import { useState } from "react";
import { submitLead } from "./script";
import "./style.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setIsSuccess(false);

    if (!name || !email) {
      setMessage("Please fill out all fields.");
      setIsSuccess(false);
      return;
    }

    try {
      const result = await submitLead(name, email);
      setMessage(result.message);
      setIsSuccess(true);

      if (typeof window.gtag === "function") {
        window.gtag("event", "lead_form_submission", {
          event_category: "Lead Capture",
          event_label: "React Lead Form",
        });
      }
    } catch (error) {
      setMessage(error.message || "An error occurred.");
      setIsSuccess(false);
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
        <div className="position-relative rounded overflow-hidden bg-image text-white text-center p-5 mb-4">
          <div className="overlay"></div>
          <div className="position-relative z-2">
            <h1 className="display-4 fw-bold text-shadow">Claim 50 Free Spins!</h1>
            <p className="lead text-shadow">
              Sign up now and start winning with top-rated slots and live tables.
            </p>
            <ul className="list-unstyled mb-4 text-shadow">
              <li>✔ No deposit needed</li>
              <li>✔ Instant payouts</li>
              <li>✔ Trusted by thousands of players</li>
            </ul>
            <button
              className="btn btn-success btn-lg"
              onClick={() => {
                if (typeof window.gtag === "function") {
                  window.gtag("event", "click", {
                    event_category: "CTA",
                    event_label: "Play Now Button",
                  });
                }
              }}
            >
              Play Now
            </button>
          </div>
          <img
            src="/aiWallpaper.webp"
            alt="casino-background"
            loading="lazy"
            className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
          />
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
            </form>
            {message && (
              <div
                className={`alert mt-3 ${
                  isSuccess ? "alert-success" : "alert-danger"
                }`}
                role="alert"
              >
                {message}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
