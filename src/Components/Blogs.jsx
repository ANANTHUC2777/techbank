import Slider from "react-slick";
import { useContext, useEffect, useRef, useLayoutEffect } from "react";
import { ImgContext } from "../Context/ImgContext";
import Cards from "./Cards";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
export default function Blogs() {
  const assets = useContext(ImgContext);
  const blogRef = useRef(null);
  const sliderRef = useRef(null);

  const blogsettings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: blogRef.current,
        start: "top 80%",
        markers: false,
      },
    });

    // Animate main tech  text
    tl.fromTo(
      blogRef.current.querySelectorAll(".tb-blog__anime"),
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.5,
        duration: 1,
        ease: "power3.out",
      }
    );
  }, []);

  useLayoutEffect(() => {
    console.log("Slider ref:", sliderRef.current);
    if (sliderRef.current) {
      console.log("InnerSlider:", sliderRef.current.innerSlider);
      sliderRef.current.slickGoTo(0);
      sliderRef.current.innerSlider.onWindowResized();
    }
  }, []);
  return (
    <section className="tb-blog">
      <div className="container">
        <div className="row">
          <div className="col-12" ref={blogRef}>
            <span className="tb-blog__anime">Techbank</span>
            <h6 className="tb-blog__anime">Blogs</h6>
            <div className="tb-blog__slide">
              <Slider className="tb-blog__slide-items" {...blogsettings} ref={sliderRef}>
                <Cards headTxt="Smart AI Chatbot" bodyTxt="Enhance customer engagement with personalized, AI-driven interactions." mainImg={assets.blog1}></Cards>
                <Cards headTxt="Smart AI Chatbot" bodyTxt="Enhance customer engagement with personalized, AI-driven interactions." mainImg={assets.blog2}></Cards>
                <Cards headTxt="Smart AI Chatbot" bodyTxt="Enhance customer engagement with personalized, AI-driven interactions." mainImg={assets.blog3}></Cards>
                <Cards headTxt="Smart AI Chatbot" bodyTxt="Enhance customer engagement with personalized, AI-driven interactions." mainImg={assets.blog2}></Cards>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
