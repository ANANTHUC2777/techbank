import { useContext, useState, useEffect } from "react";
import { ImgContext } from "../Context/ImgContext";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "../Components/Button";

export default function Header() {
  const navigate = useNavigate();
  const assets = useContext(ImgContext);
  const [toggler, setToggler] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const contactClick = () => {
    navigate("/Contact");
  };
  const navToggle = () => {
    setToggler(!toggler);
  };
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header className={`tb-header ${scrolled && "effect"}`}>
      <nav className="navbar navbar-expand-lg tb-nav py-0">
        <div className="container">
          <div className="tb-wrap">
            <div className="tb-logo">
              <NavLink className="navbar-brand  me-0 " to="/">
                <img src={assets.logo} className="logo" alt="logo" />
              </NavLink>
            </div>
            <div className="tb-menu">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <div className={`custom-ham ${toggler ? "change" : "active"}`} onClick={navToggle}>
                  <div className="bar1"></div>
                  <div className="bar2"></div>
                  <div className="bar3"></div>
                </div>
              </button>
              <div className="tb-menu__links collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mx-lg-auto">
                  <li className="nav-item">
                    <NavLink className="navbar-brand" to="/">
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="navbar-brand" to="/Contact">
                      Products
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="navbar-brand" to="/Contact">
                      Teams
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="navbar-brand" to="/Contact">
                      Career
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="navbar-brand" to="/Contact">
                      Blog
                    </NavLink>
                  </li>
                </ul>
                <div className="tb-menu__contact">
                  <Button tb__btn="tb-contact__btn" contactClk={contactClick}>
                    Contact Us
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
