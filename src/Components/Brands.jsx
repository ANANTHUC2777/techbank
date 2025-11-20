import { useContext, useEffect, useRef } from "react";
import { ImgContext } from "../Context/ImgContext";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Cards from "./Cards";
import Slider from "react-slick";
export default function Brands() {
  const assets = useContext(ImgContext);
  const brandsettings = {
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          arrows: true,
          swipeToSlide: true,
          touchThreshold: 8,
          verticalSwiping: false,
          centerMode: true,
          centerPadding: "40px",
          dots: true,
        },
      },
    ],
  };
  const brandRef = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: brandRef.current,
        start: "top 80%",
        markers: false,
      },
    });

    // Animate main tech  text
    tl.fromTo(
      brandRef.current.querySelectorAll(".tb-brand__anime"),
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.5,
        duration: 1,
        ease: "power3.out",
      }
    );

    // Animate tech slide items after text animation completes
    tl.fromTo(
      brandRef.current.querySelectorAll(".tb-brand__animeSlide"),
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power3.out",
      }
    );
  }, []);
  return (
    <section className="tb-brands">
      <div className="container">
        <div className="row">
          <div className="col-12" ref={brandRef}>
            <span className="tb-brands__subTxt tb-brand__anime">From One Root, Many Branches</span>
            <h5 className="tb-brands__headTxt tb-brand__anime">Our Connected Brands</h5>
            <div className="tb-brands__crd d-lg-flex d-none  tb-brand__animeSlide">
              <Cards
                cardType="brand"
                headTxt="BLUE TIGERS"
                bodyTxt="Fueling the Future of Film, Sports, and Technology."
                brandImg={assets.brd1}
                linkedIn={assets.LinkedinLogo}
                insta={assets.InstagramLogo}
                twitter={assets.XLogo}
                youtube={assets.YoutubeLogo1}
              ></Cards>
              <Cards
                cardType="brand"
                headTxt="KOCHI BLUE TIGERS"
                bodyTxt="A dynamic cricket team redefining the game with passion and power."
                brandImg={assets.brd2}
                web={assets.YoutubeLogo}
                linkedIn={assets.LinkedinLogo}
                insta={assets.InstagramLogo}
                twitter={assets.XLogo}
                youtube={assets.YoutubeLogo1}
              ></Cards>
              <Cards
                cardType="brand"
                headTxt="BLUE TIGERS lONDON"
                bodyTxt="A creative production house bringing bold stories to life"
                brandImg={assets.brd3}
                linkedIn={assets.LinkedinLogo}
                insta={assets.InstagramLogo}
                twitter={assets.XLogo}
                youtube={assets.YoutubeLogo1}
              ></Cards>
            </div>
            <div className="tb-brands__slide d-lg-none d-block tb-brand__animeSlide">
              <Slider className="tb-brands__slide-items" {...brandsettings}>
                <Cards
                  cardType="brand"
                  headTxt="BLUE TIGERS"
                  bodyTxt="Fueling the Future of Film, Sports, and Technology."
                  brandImg={assets.brd1}
                  linkedIn={assets.LinkedinLogo}
                  insta={assets.InstagramLogo}
                  twitter={assets.XLogo}
                  youtube={assets.YoutubeLogo1}
                ></Cards>
                <Cards
                  cardType="brand"
                  headTxt="KOCHI BLUE TIGERS"
                  bodyTxt="A dynamic cricket team redefining the game with passion and power."
                  brandImg={assets.brd2}
                  web={assets.YoutubeLogo}
                  linkedIn={assets.LinkedinLogo}
                  insta={assets.InstagramLogo}
                  twitter={assets.XLogo}
                  youtube={assets.YoutubeLogo1}
                ></Cards>
                <Cards
                  cardType="brand"
                  headTxt="BLUE TIGERS lONDON"
                  bodyTxt="A creative production house bringing bold stories to life"
                  brandImg={assets.brd3}
                  linkedIn={assets.LinkedinLogo}
                  insta={assets.InstagramLogo}
                  twitter={assets.XLogo}
                  youtube={assets.YoutubeLogo1}
                ></Cards>
                <Cards
                  cardType="brand"
                  headTxt="KOCHI BLUE TIGERS"
                  bodyTxt="A dynamic cricket team redefining the game with passion and power."
                  brandImg={assets.brd2}
                  web={assets.YoutubeLogo}
                  linkedIn={assets.LinkedinLogo}
                  insta={assets.InstagramLogo}
                  twitter={assets.XLogo}
                  youtube={assets.YoutubeLogo1}
                ></Cards>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
