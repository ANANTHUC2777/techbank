import { useContext, useState, useEffect } from "react";
import { ImgContext } from "../Context/ImgContext";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "../Components/Button";

export default function Footer() {
  const assets = useContext(ImgContext);
  const navigate = useNavigate();
  const contactClick = () => {
    navigate("/Contact");
  };
  const [visible, setVisible] = useState(false);
  const handleScroll = () => {
    if (window.scrollY >= 50) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <footer>
      <section className="tb-footer">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="tb-footer__head">
                <img src={assets.logo} className="logo" alt="logo" />
                <p>hi@techbank.com</p>
              </div>
              <div className="tb-footer__body">
                <div className="tb-footer__left">
                  <h2>Engineering the Future</h2>
                  <Button tb__btn="tb-contact__btn" contactClk={contactClick}>
                    Contact Us
                  </Button>
                </div>
                <div className="tb-footer__right">
                  <ul>
                    <li>
                      <NavLink className="tb-footer__link" to="/">
                        Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="tb-footer__link" to="/Work">
                        Work
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="tb-footer__link" to="/Agency">
                        Agency
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="tb-footer__link" to="/Process">
                        Process
                      </NavLink>
                    </li>
                  </ul>
                  <ul>
                    <li className="tb-footer__adres">Offices</li>
                    <li className="tb-footer__adres">Infopark</li>
                    <li className="tb-footer__adres">Kochi - Kerala</li>
                  </ul>
                </div>
              </div>
              <div className="tb-footer__foot">
                <ul>
                  <li>
                    <img src={assets.LinkedinLogo} alt="LinkedinLogo" />
                  </li>
                  <li>
                    <img src={assets.InstagramLogo} alt="InstagramLogo" />
                  </li>
                  <li>
                    <img src={assets.XLogo} alt="XLogo" />
                  </li>
                  <li>
                    <img src={assets.YoutubeLogo} alt="YoutubeLogo" />
                  </li>
                </ul>
                <ul className="position-relative">
                  <div className="mob--line--one d-block d-sm-none"></div>
                  <div className="mob--line--two d-block d-sm-none"></div>
                  <li>© 2025 Techbank</li>
                  <li>Privacy Policy</li>
                  <li> Terms of Use</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="tb-footer__bg">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 px-0">
              <img src={assets.footerLogo} alt="footerLogo" className="w-100 d-none d-sm-block" />
              <img src={assets.footerLogoMob} alt="footerLogoMob" className="w-100 d-block d-sm-none" />
            </div>
          </div>
        </div>
      </section>
      {visible && (
        <div id="return-to-top" onClick={scrollToTop}>
          <div className="return__img">
            <img src={assets.bkTopArr} alt="back top" />
          </div>
        </div>
      )}
    </footer>
  );
}
