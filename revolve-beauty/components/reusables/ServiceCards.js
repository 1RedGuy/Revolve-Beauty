const Card = ({ title, description, price }) => {
  return (
    <div className="mr-24">
      <div className="h-[2px] w-32 bg-pink-500"></div>
      <h3 className="mb-2 w-34 pt-4 text-xl font-semibold text-gray-800">
        {title}
      </h3>
      <p className="mb-4 text-sm text-gray-600">{description}</p>
    </div>
  );
};

export default Card;
