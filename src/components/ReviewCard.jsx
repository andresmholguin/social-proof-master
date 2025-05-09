const ReviewCard = ({ name, imgUrl, Type, review }) => {
  return (
    <div>
      <div className="mb-4 flex items-center">
        <img src={imgUrl} alt={name} className="mr-4 h-12 w-12 rounded-full" />
        <div>
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-sm text-gray-500">{Type}</p>
        </div>
      </div>
      <p className="text-gray-700">{review}</p>
    </div>
  );
};

export default ReviewCard;
