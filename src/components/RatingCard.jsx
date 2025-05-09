import IconStart from "../assets/images/icon-star.svg";

const RatingCard = ({ text, positionClass }) => {
  console.log(positionClass);
  return (
    <div
      className={` bg-Light-Grayish-Magenta flex flex-col items-center  mb-4 rounded-lg py-4 xl:flex-row xl: xl:w-[440px] xl:gap-4 justify-center ${positionClass} `}
    >
      <div className="flex items-center justify-center gap-3 mb-2 xl:mb-0">
        <img src={IconStart} alt="Icon Start" />
        <img src={IconStart} alt="Icon Start" />
        <img src={IconStart} alt="Icon Start" />
        <img src={IconStart} alt="Icon Start" />
        <img src={IconStart} alt="Icon Start" />
      </div>
      <p className="text-center font-bold text-Very-Dark-Magenta">{text}</p>
    </div>
  );
};

export default RatingCard;
