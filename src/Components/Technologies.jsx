import { useEffect, useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Slider from "react-slick";
import sliderData from "../assets/data/sliderData.json";
export default function Technologies() {
  const technologies = sliderData.technologies;
  const techRef = useRef(null);
  const techsliderRef = useRef(null);

  const techsettings = {
    infinite: true,
    speed: 7000,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 1399,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const techsecsettings = {
    infinite: true,
    speed: 7000,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
    rtl: true,
    responsive: [
      {
        breakpoint: 1399,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 575,
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
        trigger: techRef.current,
        start: "top 80%",
        markers: false,
      },
    });

    // Animate main tech  text
    tl.fromTo(
      techRef.current.querySelectorAll(".tb-tech__anime"),
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
    console.log("Slider ref:", techsliderRef.current);
    if (techsliderRef.current) {
      console.log("InnerSlider:", techsliderRef.current.innerSlider);
      techsliderRef.current.slickGoTo(0);
      techsliderRef.current.innerSlider.onWindowResized();
    }
  }, []);
  return (
    <section className="tb-technologies">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12" ref={techRef}>
            <h5 className="tb-tech__anime">Technologies</h5>

            <div className="tb-tech__slide">
              <Slider className="tb-tech__slide-items" ref={techsliderRef} {...techsettings}>
                {technologies.map((tech) => (
                  <div key={tech.id}>
                    <img src={tech.image} alt={tech.title} />
                  </div>
                ))}
              </Slider>
            </div>

            <div className="tb-tech__slide">
              <Slider className="tb-tech__slide-items" ref={techsliderRef} {...techsecsettings}>
                {technologies.map((tech) => (
                  <div key={tech.id}>
                    <img src={tech.image} alt={tech.title} />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
