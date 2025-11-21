import { useContext, useEffect, useRef } from "react";
import { ImgContext } from "../Context/ImgContext";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Slider from "react-slick";

export default function Technologies() {
  const assets = useContext(ImgContext);
  const techRef = useRef(null);
  const techSlideRef = useRef(null);
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
      techRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.5,
        duration: 1,
        ease: "power3.out",
      }
    );

    tl.fromTo(
      techSlideRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      }
    );
  }, []);
  const sliderOneSettings = {
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
        breakpoint: 1400,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
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

  const sliderTwoSettings = {
    ...sliderOneSettings,
    rtl: true,
  };
  return (
    <section className="tb-technologies">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <h5 ref={techRef}>Technologies</h5>
            <div ref={techSlideRef}>
              <div className="tb-tech__slide">
                <div className="tb-tech__slide-items">
                  <Slider {...sliderOneSettings}>
                    <div>
                      <img src={assets.Logo1} />
                    </div>
                    <div>
                      <img src={assets.Logo2} />
                    </div>
                    <div>
                      <img src={assets.Logo3} />
                    </div>
                    <div>
                      <img src={assets.Logo4} />
                    </div>
                    <div>
                      <img src={assets.Logo5} />
                    </div>
                    <div>
                      <img src={assets.Logo6} />
                    </div>{" "}
                    <div>
                      <img src={assets.Logo1} />
                    </div>
                    <div>
                      <img src={assets.Logo2} />
                    </div>
                    <div>
                      <img src={assets.Logo3} />
                    </div>
                    <div>
                      <img src={assets.Logo4} />
                    </div>
                    <div>
                      <img src={assets.Logo5} />
                    </div>
                    <div>
                      <img src={assets.Logo6} />
                    </div>
                  </Slider>
                </div>

                <div className="tb-tech__slide-items">
                  <Slider {...sliderTwoSettings}>
                    <div>
                      <img src={assets.Logo1} />
                    </div>
                    <div>
                      <img src={assets.Logo2} />
                    </div>
                    <div>
                      <img src={assets.Logo3} />
                    </div>
                    <div>
                      <img src={assets.Logo4} />
                    </div>
                    <div>
                      <img src={assets.Logo5} />
                    </div>
                    <div>
                      <img src={assets.Logo6} />
                    </div>{" "}
                    <div>
                      <img src={assets.Logo1} />
                    </div>
                    <div>
                      <img src={assets.Logo2} />
                    </div>
                    <div>
                      <img src={assets.Logo3} />
                    </div>
                    <div>
                      <img src={assets.Logo4} />
                    </div>
                    <div>
                      <img src={assets.Logo5} />
                    </div>
                    <div>
                      <img src={assets.Logo6} />
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
