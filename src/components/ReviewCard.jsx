const ReviewCard = ({ name, imgUrl, Type, review }) => {
  return (
    <div className="p-6 mb-6 bg-Very-Dark-Magenta rounded-lg">
      <div className="mb-4 flex items-center">
        <img src={imgUrl} alt={name} className="mr-4 h-12 w-12 rounded-full" />
        <div>
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-lg -mt-2 font-light text-Soft-Pink">{Type}</p>
        </div>
      </div>
      <p className="text-base tracking-[0.08em] leading-5">{review}</p>
    </div>
  );
};

export default ReviewCard;
