import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header>
    <div className="navbar">
      <div className="logo">
        {/* <svg
        aria-hidden="true"
        focusable="false"
        viewBox="0 0 24 24"
        role="img"
        width="6rem"
        height="6rem"
        fill="none"
      >
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M21 8.719L7.836 14.303C6.74 14.768 5.818 15 5.075 15c-.836 0-1.445-.295-1.819-.884-.485-.76-.273-1.982.559-3.272.494-.754 1.122-1.446 1.734-2.108-.144.234-1.415 2.349-.025 3.345.275.2.666.298 1.147.298.386 0 .829-.063 1.316-.19L21 8.719z"
          clipRule="evenodd"
        ></path>
      </svg> */}
        <Link to={"/"}>
          {" "}
          <img src="images/brand_logo.png" alt="logo" />
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/features">Features</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
