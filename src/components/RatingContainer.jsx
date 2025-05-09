import RatingCard from "./RatingCard";

const ratings = [
  "Rated 5 Stars in Reviews",
  "Rated 5 Stars in Report Guru",
  "Rated 5 Stars in BestTech",
];

const RatingContainer = () => {
  return (
    <section className="mb-12">
      {ratings.map((rating) => {
        return <RatingCard key={rating} text={rating} />;
      })}
    </section>
  );
};

export default RatingContainer;
