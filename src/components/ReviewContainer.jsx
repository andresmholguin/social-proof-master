import ReviewCard from "./ReviewCard";

import ColtonSmith from "../assets/images/image-colton.jpg";
import IreneRoberts from "../assets/images/image-irene.jpg";
import AnneWallace from "../assets/images/image-anne.jpg";

const reviews = [
  {
    id: 1,
    name: "Colton Smith",
    imgUrl: ColtonSmith,
    buyerType: "Verified Buyer",
    review:
      "We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!",
  },
  {
    id: 2,
    name: "Irene Roberts",
    imgUrl: IreneRoberts,
    buyerType: "Verified Buyer",
    review:
      "Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery.",
  },
  {
    id: 3,
    name: "Anne Wallace",
    imgUrl: AnneWallace,
    buyerType: "Verified Buyer",
    review:
      "Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!",
  },
];

const positionClass = [
  "xl:place-self-start",
  "xl:place-self-center",
  "xl:place-self-end",
];

const ReviewContainer = () => {
  return (
    <div className=" text-Light-Grayish-Magenta xl:flex xl:flex-row xl:justify-center xl:gap-8 xl:h-[246px]">
      {reviews.map(({ id, name, imgUrl, buyerType, review }, index) => {
        return (
          <ReviewCard
            key={id}
            name={name}
            imgUrl={imgUrl}
            Type={buyerType}
            review={review}
            positionClass={positionClass[index]}
          />
        );
      })}
    </div>
  );
};

export default ReviewContainer;
