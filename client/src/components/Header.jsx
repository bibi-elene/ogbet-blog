import PropTypes from "prop-types";

const Header = ({ onBlogClick }) => (
  <header className="mb-4">
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm fixed-top mb-5">
      <div className="container">
        <a className="navbar-brand" href="/">
          Ogbet
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="/" onClick={onBlogClick}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="http://ogbet-blog.local/blog/ogbet-details/"
                onClick={onBlogClick}
              >
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="http://ogbet-blog.local/blog"
                onClick={onBlogClick}
              >
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="http://ogbet-blog.local/blog/contacts"
                target="_blank"
                rel="noopener noreferrer"
                onClick={onBlogClick}
              >
                Contacts
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
);

Header.propTypes = {
  onBlogClick: PropTypes.func.isRequired,
};

export default Header;
