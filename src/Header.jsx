import "./Header.css";

function Header() {
  return (
    <header className="header">
      {/* LEFT */}
      <div className="header-left">
        <a href="https://about.google/" target="_blank" rel="noreferrer">
          About
        </a>
        <a href="https://store.google.com/" target="_blank" rel="noreferrer">
          Store
        </a>
      </div>

      {/* RIGHT */}
      <div className="header-right">
        <a href="https://mail.google.com/" target="_blank" rel="noreferrer">
          Gmail
        </a>
        <a href="https://www.google.com/imghp" target="_blank" rel="noreferrer">
          Images
        </a>

        {/* Apps */}
        <a
          href="https://www.google.com/intl/en/about/products"
          target="_blank"
          rel="noreferrer"
          className="apps-icon"
        >
          <span></span><span></span><span></span>
          <span></span><span></span><span></span>
          <span></span><span></span><span></span>
        </a>

        {/* Profile */}
        <a
          href="https://myaccount.google.com/"
          target="_blank"
          rel="noreferrer"
          className="profile"
        >
          
          <div className="profile-flip">
  <div className="profile-inner">
    {/* Front side */}
    <div className="profile-front">V</div>

    {/* Back side */}
    <div className="profile-back">
      <img src="/mypic.jpeg" alt="Profile" />
    </div>
  </div>
</div>
        </a>
      </div>

      
    </header>
  );
}

export default Header;
