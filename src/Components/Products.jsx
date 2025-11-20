import { useContext, useEffect, useRef } from "react";
import { ImgContext } from "../Context/ImgContext";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Cards from "./Cards";

export default function Products() {
  const assets = useContext(ImgContext);
  const productRef = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: productRef.current,
        start: "top 80%",
        markers: false,
      },
    });

    // Animate main product text
    tl.fromTo(
      productRef.current.querySelectorAll(".tb-products__anime"),
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.5,
        duration: 1,
        ease: "power3.out",
      }
    );

    // Animate product card items after text animation completes
    tl.fromTo(
      productRef.current.querySelectorAll(".tb-products__crd"),
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
    <section className="tb-products">
      <div className="container">
        <div className="row">
          <div className="col-12" ref={productRef}>
            <span className="tb-products__anime">Innovative</span>
            <h3 className="tb-products__anime">PRODUCTS</h3>

            <div className="tb__products__card">
              <Cards cardType="product" headTxt="dwallet" bodyTxt="A secure, intuitive crypto wallet for managing your digital assets" iconImg={assets.icon1} mainImg={assets.prod1}></Cards>
              <Cards cardType="product" headTxt="DBANK" bodyTxt="A secure staking platform for earning rewards on your digital assets" iconImg={assets.icon2} mainImg={assets.prod2}></Cards>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
