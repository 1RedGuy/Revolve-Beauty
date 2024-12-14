const Card = ({ title, description, price }) => {
  return (
    <div className="bg-opacity-0 mr-24">
      <div className="w-28 h-[2px] bg-pink-500"></div>
      <h3 className="text-xl w-28 font-semibold text-gray-800 pt-4 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      <p className="text-pink-500 font-bold text-xl">$ {price}</p>
    </div>
  );
};

  export default Card;
  