const Footer = () => (
    <footer className="text-white py-4 mt-5">
      <div className="container text-center">
        <p>&copy; {new Date().getFullYear()} Ogbet. All rights reserved.</p>
        <ul className="list-inline">
          <li className="list-inline-item mx-2">
            <a href="/privacy-policy" className="text-white text-decoration-none">
              Privacy Policy
            </a>
          </li>
          <li className="list-inline-item mx-2">
            <a href="/terms-of-service" className="text-white text-decoration-none">
              Terms of Service
            </a>
          </li>
          <li className="list-inline-item mx-2">
            <a href="/contact-us" className="text-white text-decoration-none">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
  
  export default Footer;
  