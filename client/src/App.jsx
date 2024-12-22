import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./style.css";
import { useState } from "react";
import { submitLead } from "./script";
import Header from "./components/Header";
import SignupForm from "./components/SignUpForm";
import PlayNowSection from "./components/PlayNowSection";
import Testimonials from "./components/Testimonials";
import Features from "./components/Features";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import { PageOptions } from "./utils/pageOptions";

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

      // GA event
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

  return (
    <div className="App">
      <Sidebar pages={PageOptions} />
      <Header />
      <main className="container main-container">
        <div className="hero-container position-relative rounded shadow p-4 mb-4">
          <img
            src="/blackjack.jpg"
            alt="A blackjack table showcasing the excitement of online gaming"
            className="position-absolute top-0 start-0 w-100 h-100"
          />
          <div className="row align-items-center position-relative">
            <div className="col-md-6 my-4">
              <SignupForm
                onSubmit={handleSubmit}
                name={name}
                setName={setName}
                email={email}
                setEmail={setEmail}
                message={message}
                isSuccess={isSuccess}
              />
            </div>
            <div className="col-md-6 my-4">
              <PlayNowSection />
            </div>
          </div>
        </div>

        <Testimonials />
        <Features />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;
