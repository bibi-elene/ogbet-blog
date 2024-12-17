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
      <header className="header">
        <nav className="nav">
          <a href="/" className="link">
            Home
          </a>
          <a
            href="http://ogbet-blog.local/blog"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
            onClick={handleBlogClick}
          >
            Blog
          </a>
        </nav>
      </header>

      <main className="main">
        <h1 className="title">Claim 50 Free Spins!</h1>
        <p className="description">Sign up now and start winning.</p>

        <form onSubmit={handleSubmit} className="form">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input"
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input"
          />
          <button type="submit" className="button">
            Submit
          </button>
        </form>

        {message && <p className="message">{message}</p>}
      </main>
    </div>
  );
}

export default App;
