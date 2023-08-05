const Navigation = () => {
  return (
    <div>
      <nav className="container">
        <div className="logo">
          <img src="./src/assets/images/brand_logo.png" />
        </div>
        <ul>
          <li href="#">Menu</li>
          <li href="#">LOCATION</li>
          <li href="#">ABOUT</li>
          <li href="#">CONTACT</li>
        </ul>
        <button>Login</button>
      </nav>
    </div>
  );
};

export default Navigation;
