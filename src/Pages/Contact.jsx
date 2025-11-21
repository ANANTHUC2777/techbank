import { useContext, useState, useEffect, useRef } from "react";
import { ImgContext } from "../Context/ImgContext";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ReactFlagsSelect from "react-flags-select";
import Button from "../Components/Button";

export default function Contact() {
  const assets = useContext(ImgContext);
  const [select, setSelect] = useState("IN");
  const msgClick = () => {
    console.log("send message clicked");
  };
  const contactRef = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: contactRef.current,
        start: "top 20%",
        markers: false,
      },
    });

    // Animate main tech  text
    tl.fromTo(
      contactRef.current.querySelectorAll(".tb-contact__animeImg"),
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
      contactRef.current.querySelectorAll(".tb-contact__anime"),
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
      contactRef.current.querySelectorAll(".tb-contact__field"),
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power3.out",
        stagger: 0.5,
      }
    );

    tl.fromTo(
      contactRef.current.querySelectorAll(".tb-product__btn"),
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power3.out",
        stagger: 0.5,
      }
    );
  }, []);
  return (
    <section className="tb-contact">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="tb-contact__wrap" ref={contactRef}>
              <div className="tb-contact__head d-block d-sm-none">
                <span className="tb-contact__anime">BUILD THE FUTURE WITH US</span>
                <h1 className="tb-contact__anime">Contact Us</h1>
              </div>
              <div className="tb-contact__img">
                <img src={assets.contact} alt="contact-banner" className="tb-contact__animeImg" />
                <h2 className="tb-contact__anime">Let’s connect and create the next big thing in tech</h2>
              </div>
              <div className="tb-contact__form">
                <span className="d-none d-sm-block tb-contact__anime">BUILD THE FUTURE WITH US</span>
                <h1 className="d-none d-sm-block tb-contact__anime">Contact Us</h1>
                <form>
                  <div className="tb-contact__field">
                    <label htmlFor="name">Name *</label>
                    <input type="text" id="name" name="name" placeholder="Enter Your Name " />
                  </div>

                  <div className="tb-contact__field">
                    <label htmlFor="email">Email *</label>
                    <input type="email" id="email" name="email" placeholder="Enter Email" />
                  </div>

                  <div className="tb-contact__field">
                    <label htmlFor="phone">Phone Number *</label>
                    <div className="tb-contact__phone">
                      <ReactFlagsSelect
                        className="tb-contact__flag-select"
                        selected={select}
                        onSelect={setSelect}
                        countries={["IN", "FI", "GB", "IE", "IT", "NL", "SE"]}
                        showSelectedLabel={false}
                        showOptionLabel={false}
                        selectedSize={20}
                        optionsSize={20}
                      />
                      <input type="tel" id="phone" name="phone" placeholder="Enter Your Phone Number" />
                    </div>
                  </div>

                  <div className="tb-contact__field tb-contact--phone">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" rows="5" placeholder="Write your message"></textarea>
                  </div>

                  <Button tb__btn="tb-product__btn" contactClk={msgClick} tb__roundImg={true}>
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
