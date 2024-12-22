import PropTypes from "prop-types";

const SignupForm = ({
  onSubmit,
  name,
  setName,
  email,
  setEmail,
  message,
  isSuccess,
}) => (
    <div className="d-flex flex-column justify-content-center h-100 w-100">
    <h2 className="mb-3">Sign Up Now</h2>
    <form onSubmit={onSubmit}>
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
        className={`alert mt-3 ${isSuccess ? "alert-success" : "alert-danger"}`}
        role="alert"
      >
        {message}
      </div>
    )}
  </div>
);

SignupForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  setName: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  setEmail: PropTypes.func.isRequired,
  message: PropTypes.string,
  isSuccess: PropTypes.bool,
};

export default SignupForm;
