import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Slider from "react-slick";
import sliderData from "../assets/data/sliderData.json";
export default function Technologies() {
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
  const technologies = sliderData.technologies;
  const techRef = useRef(null);
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

    // Animate tech items after text animation completes
    tl.fromTo(
      techRef.current.querySelectorAll(".tb-tech__animeSlide"),
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.5,
        duration: 0.5,
        ease: "power3.out",
      }
    );
  }, []);
  return (
    <section className="tb-technologies">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12" ref={techRef}>
            <h5 className="tb-tech__anime">Technologies</h5>
            <div className="tb-tech__slide tb-tech__animeSlide">
              <Slider className="tb-tech__slide-items" {...techsettings}>
                {technologies.map((tech) => (
                  <div key={tech.id}>
                    <img src={tech.image} alt={tech.title} />
                  </div>
                ))}
              </Slider>
            </div>
            <div className="tb-tech__slide tb-tech__animeSlide">
              <Slider className="tb-tech__slide-items" {...techsecsettings}>
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
