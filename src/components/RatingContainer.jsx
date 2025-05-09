import RatingCard from "./RatingCard";

const ratings = [
  "Rated 5 Stars in Reviews",
  "Rated 5 Stars in Report Guru",
  "Rated 5 Stars in BestTech",
];

const RatingContainer = () => {
  return (
    <section>
      {ratings.map((rating) => {
        return <RatingCard text={rating} />;
      })}
    </section>
  );
};

export default RatingContainer;
