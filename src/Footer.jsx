import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">India</div>

      <div className="footer-bottom">
        <div>
          <a href="#">Advertising</a>
          <a href="#">Business</a>
          {/* <a href="#">How Search works</a> */}
        </div>

        <div>
          {/* <a href="#">Privacy</a> */}
          <a href="#">Terms</a>
          <a href="#">Settings</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
