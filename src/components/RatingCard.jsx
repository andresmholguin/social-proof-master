import IconStart from "../assets/images/icon-star.svg";

const RatingCard = ({ text }) => {
  return (
    <div className="bg-Light-Grayish-Magenta flex flex-col items-center  mb-4 rounded-lg py-4">
      <div className="flex items-center justify-center gap-3 mb-2">
        <img className="" src={IconStart} alt="Icon Start" />
        <img className="" src={IconStart} alt="Icon Start" />
        <img className="" src={IconStart} alt="Icon Start" />
        <img className="" src={IconStart} alt="Icon Start" />
        <img className="" src={IconStart} alt="Icon Start" />
      </div>
      <p className="text-center font-bold text-Very-Dark-Magenta">{text}</p>
    </div>
  );
};

export default RatingCard;
