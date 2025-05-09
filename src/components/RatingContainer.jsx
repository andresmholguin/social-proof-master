import RatingCard from "./RatingCard";

const ratings = [
  "Rated 5 Stars in Reviews",
  "Rated 5 Stars in Report Guru",
  "Rated 5 Stars in BestTech",
];

const positionClass = [
  "xl:place-self-start",
  "xl:place-self-center",
  "xl:place-self-end",
];

const RatingContainer = () => {
  return (
    <section className=" mb-12 xl:w-[550px]">
      {ratings.map((rating, index) => {
        return (
          <RatingCard
            key={rating}
            text={rating}
            positionClass={positionClass[index]}
          />
        );
      })}
    </section>
  );
};

export default RatingContainer;
