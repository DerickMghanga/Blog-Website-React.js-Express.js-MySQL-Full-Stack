import React from 'react'
import Logo from "../img/blog-icon.png";

const Footer = () => {
  return (
    <footer>
      <img src={Logo} alt="logo-img" />
      <span>
        Made with ❤️ and <b>React.js</b>
      </span>
    </footer>
  )
}

export default Footer