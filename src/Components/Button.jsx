import roundBtnArr from "../assets/img/round-btn-arr.svg";
import btnArr from "../assets/img/btn-arr.svg";

export default function Button({ children, contactClk, tb__btn, tb__roundImg = false, tb__img = false }) {
  const iconSrc = tb__roundImg ? roundBtnArr : tb__img ? btnArr : null;
  return (
    <button onClick={contactClk} className={tb__btn} type="button">
      <span>{children}</span>

      {iconSrc && <img src={iconSrc} alt="button-icon" />}
    </button>
  );
}
