import Button from "./Button";

const Card = ({ text, img, goal, target }) => {
  return (
    <div className="p-4 bg-white rounded-md">
      <img src={img} className="rounded-md h-48 w-full object-cover" alt="" />
      <p className="text-sm py-2 capitalize">{text}</p>

      <div className="py-3">
        <div className="flex justify-between mb-2">
          <p className="text-xs">${goal}</p>
          <p className="text-xs text-[#989898]">${target}</p>
        </div>
        <div className="progress-container">
          <div className="progress-bar" />
        </div>
      </div>

      <div className="flex justify-between">
        <Button text={"Donate now"} />
        <button className="text-sm py-3 px-4 text-[#1AD0D1]">See detail</button>
      </div>
    </div>
  );
};
export default Card;
