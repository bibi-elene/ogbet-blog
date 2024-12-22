const Testimonials = () => (
  <div
    className="testimonials py-5 mb-5"
  >
    <h2 className="text-center mb-4">Why Players Love Us</h2>
    <div className="row">
      <div className="col-md-4">
        <blockquote className="blockquote text-center shadow-sm p-3">
          <p>
            &quot;Best online casino I&apos;ve ever played at! The payouts are
            super fast.&quot;
          </p>
          <footer className="blockquote-footer">
            John D., Verified Player
          </footer>
        </blockquote>
      </div>
      <div className="col-md-4">
        <blockquote className="blockquote text-center shadow-sm p-3">
          <p>&quot;Great selection of games and amazing bonuses!&quot;</p>
          <footer className="blockquote-footer">
            Maria S., Casino Enthusiast
          </footer>
        </blockquote>
      </div>
      <div className="col-md-4">
        <blockquote className="blockquote text-center shadow-sm p-3">
          <p>
            &quot;Trustworthy platform with excellent customer service.&quot;
          </p>
          <footer className="blockquote-footer">
            Alex R., Frequent Player
          </footer>
        </blockquote>
      </div>
    </div>
  </div>
);

export default Testimonials;
