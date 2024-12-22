const PlayNowSection = () => {
  const handlePlayNowClick = () => {
    if (typeof window.gtag === "function") {
      window.gtag("event", "click", {
        event_category: "CTA",
        event_label: "Play Now Button",
      });
    }
  };

  return (
    <div className="justify-content-center align-content-center w-100 h-100 text-center p-4 light-shadow">
      <h2 className="mb-3 fs-3">Claim 50 Free Spins!</h2>
      <p className="fs-5">
        Start winning with top-rated slots and live tables today.
      </p>
      <ul className="list-unstyled">
        <li className="fs-5">✔ No deposit needed</li>
        <li className="fs-5">✔ Instant payouts</li>
        <li className="fs-5">✔ Trusted by thousands of players</li>
      </ul>
      <button className="btn btn-success btn-lg" onClick={handlePlayNowClick}>
        Play Now
      </button>
    </div>
  );
};

export default PlayNowSection;
