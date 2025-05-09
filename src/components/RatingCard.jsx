import IconStart from "../assets/images/icon-star.svg";

const RatingCard = ({ text }) => {
  return (
    <div>
      <div>
        <img src={IconStart} alt="Icon Start" />
        <img src={IconStart} alt="Icon Start" />
        <img src={IconStart} alt="Icon Start" />
        <img src={IconStart} alt="Icon Start" />
        <img src={IconStart} alt="Icon Start" />
      </div>
      <p>{text}</p>
    </div>
  );
};

export default RatingCard;
