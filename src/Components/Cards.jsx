import Button from "./Button";
export default function Cards({ brandImg, cardType, headTxt, bodyTxt, mainImg, iconImg, web, linkedIn, insta, twitter, youtube }) {
  const viewClick = (clicked) => {
    console.log(`View clicked for: ${clicked}`);
  };

  // ---------------------------
  // PRODUCT CARD LAYOUT
  // ---------------------------
  if (cardType === "product") {
    return (
      <div className="tb-card--product tb-products__crd">
        <div className="tb-product__head ">
          <div className="tb-product__img">
            <img src={mainImg} alt="main img" className="tb-product__img--main" />
            <img src={iconImg} alt="icon" className="tb-product__img--icon" />
          </div>
        </div>
        <div className="tb-product__body">
          <div className="tb-product__txt">
            <h4>{headTxt}</h4>
            <p>{bodyTxt}</p>
          </div>
          <Button tb__btn="tb-view__btn" contactClk={() => viewClick(headTxt)} tb__img={true}>
            View
          </Button>
        </div>
      </div>
    );
  }

  // ---------------------------
  // BRAND CARD LAYOUT
  // ---------------------------
  else if (cardType === "brand") {
    return (
      <div className="tb-card--brand">
        <div className="tb-brand__head">
          <h4>{headTxt}</h4>
          <p>{bodyTxt}</p>
          <ul className="tb-brand__icons">
            {web && (
              <li>
                <img src={web} alt="web" />
              </li>
            )}

            <li>
              <img src={linkedIn} alt="linkedIn" />
            </li>
            <li>
              <img src={insta} alt="insta" />
            </li>
            <li>
              <img src={twitter} alt="twitter" />
            </li>
            <li>
              <img src={youtube} alt="youtube" />
            </li>
          </ul>
        </div>
        <div className="tb-brand__body">
          <img src={brandImg} alt="brandImg" />
        </div>
      </div>
    );
  }

  // ---------------------------
  // DEFAULT BLOG CARD LAYOUT
  // ---------------------------
  else {
    return (
      <div className="tb-blog--card">
        <div className="tb-blog__head">
          <img src={mainImg} alt="main img" />
        </div>
        <div className="tb-blog__body">
          <h4>{headTxt}</h4>
          <p>{bodyTxt}</p>
        </div>
      </div>
    );
  }
}
