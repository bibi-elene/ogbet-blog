import { useState } from "react";
import PropTypes from "prop-types";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const Sidebar = ({ pages }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSidebar = () => setIsExpanded(!isExpanded);

  return (
    <div className={`sidebar ${isExpanded ? "expanded" : "collapsed"}`}>
      <button className="toggle-btn" onClick={toggleSidebar}>
        {isExpanded ? <FaChevronLeft /> : <FaChevronRight />}
      </button>
      <nav className="nav flex-column mt-5">
        {pages.map((page, index) => (
          <a key={index} href={page.href} className="nav-link d-flex align-items-center">
            {page.icon && <span className="me-2">{page.icon}</span>}
            {isExpanded && <span>{page.name}</span>}
          </a>
        ))}
      </nav>
    </div>
  );
};

Sidebar.propTypes = {
  pages: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
      icon: PropTypes.element,
    })
  ).isRequired,
};

export default Sidebar;
