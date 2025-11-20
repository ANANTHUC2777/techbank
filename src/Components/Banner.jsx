import { useContext, useEffect, useRef } from "react";
import { ImgContext } from "../Context/ImgContext";
import { gsap } from "gsap";
import Button from "./Button";
export default function Banner() {
  const assets = useContext(ImgContext);
  const holo = useRef(null);
  const holoTxt = useRef(null);
  const bannerRef = useRef(null);
  const bannerImgRef = useRef(null);
  const productClick = () => {
    console.log("view more products clicked");
  };

  //Animations
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    // Holo image + text animation
    tl.fromTo(holo.current, { opacity: 0, scale: 0.8, y: 40, rotate: -5 }, { opacity: 1, scale: 1, y: 0, rotate: 0, duration: 1.2, ease: "back.out(1.2)" }).fromTo(
      holoTxt.current,
      { opacity: 0, y: 30, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: "back.out(1.2)" },
      "-=0.8"
    );

    // Scroll indicator animation
    gsap.fromTo(
      ".tb__scroll",
      { y: 0, opacity: 0.8 },
      {
        y: 10,
        opacity: 1,
        duration: 1,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
      }
    );

    gsap.fromTo(
      ".tb__scroll-plus",
      { scale: 1, opacity: 0.8 },
      {
        scale: 1.2,
        opacity: 1,
        duration: 0.8,
        yoyo: true,
        repeat: -1,
        stagger: 0.2,
        ease: "power1.inOut",
      }
    );

    // Banner text animation (fade in + slide up, staggered)
    gsap.fromTo(
      bannerRef.current.querySelectorAll(".tb-banner__anime"),
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.25,
        duration: 1,
        ease: "power3.out",
        delay: 0.8,
      }
    );

    // Banner img animation (fade + scale for depth)
    gsap.fromTo(
      bannerImgRef.current.querySelectorAll(".tb-banner__imgAnim"),
      { opacity: 0, y: 60, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
        delay: 1.2,
        stagger: 0.25,
      }
    );
  }, []);

  return (
    <section className="tb-banner">
      <div className="container">
        <div className="row h-100">
          <div className="col-12 position-relative">
            <div className="tb-banner__top">
              <img src={assets.holo} alt="holo image" ref={holo} />
              <p ref={holoTxt}>At TechBank, we’re pioneering the technologies of tomorrow. From blockchain to AI, we’re building the digital landscape of the future, today.</p>
            </div>
            <div className="tb-banner__center" ref={bannerImgRef}>
              <img src={assets.comp} alt="banner gif" className="tb-banner__gif tb-banner__imgAnim" />
              <img src={assets.bannerBadge} alt="banner badge" className="tb-banner__badge tb-banner__imgAnim" />
            </div>
            <div className="tb-banner__bottom" ref={bannerRef}>
              <h1 className="tb-banner__anime">
                Engineering the F<span>u</span>ture
              </h1>
              <div className="tb-banner__bottom-content">
                <p className="tb-banner__anime">Empowering Businesses, Enabling Growth TechBank’s Products for Success</p>
                <Button tb__btn="tb-product__btn tb-banner__anime" contactClk={productClick} tb__roundImg={true}>
                  View Products
                </Button>
              </div>
            </div>
          </div>
          <div className="col-12">
            <p className="tb__scroll">
              <span className="tb__scroll-plus">+</span>
              <span className="tb__scroll-txt">SCROLL TO EXPLORE</span>
              <span className="tb__scroll-plus">+</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
