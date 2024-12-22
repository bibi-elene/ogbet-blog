const FAQ = () => (
    <div className="faq py-5">
      <h2 className="text-center mb-4">Frequently Asked Questions</h2>
      <div className="accordion" id="faqAccordion">
        <div className="accordion-item">
          <h3 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#faq1"
              aria-expanded="false"
              aria-controls="faq1"
            >
              How do I claim my free spins?
            </button>
          </h3>
          <div id="faq1" className="accordion-collapse collapse">
            <div className="accordion-body">
              Sign up using your email and claim your free spins in your account dashboard.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h3 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#faq2"
              aria-expanded="false"
              aria-controls="faq2"
            >
              Can I play games for free?
            </button>
          </h3>
          <div id="faq2" className="accordion-collapse collapse">
            <div className="accordion-body">
              Yes, many of our games offer demo modes where you can play for free without wagering real money.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h3 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#faq3"
              aria-expanded="false"
              aria-controls="faq3"
            >
              How secure is my personal information?
            </button>
          </h3>
          <div id="faq3" className="accordion-collapse collapse">
            <div className="accordion-body">
              We use advanced encryption technology to ensure your personal and financial information is completely secure.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h3 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#faq4"
              aria-expanded="false"
              aria-controls="faq4"
            >
              What payment methods do you accept?
            </button>
          </h3>
          <div id="faq4" className="accordion-collapse collapse">
            <div className="accordion-body">
              We accept a variety of payment methods, including credit/debit cards, e-wallets, and bank transfers.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h3 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#faq5"
              aria-expanded="false"
              aria-controls="faq5"
            >
              How can I contact customer support?
            </button>
          </h3>
          <div id="faq5" className="accordion-collapse collapse">
            <div className="accordion-body">
              You can contact our support team via live chat, email, or phone. Our team is available 24/7 to assist you.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
  export default FAQ;
  