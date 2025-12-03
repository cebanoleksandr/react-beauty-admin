import emptyImg from "../../../assets/images/questionImage.svg";
import Button from "../../UI/Button";

const EmptyServices = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <img src={emptyImg} alt="No Services" />
      <h2 className="text-lg font-medium mb-2">Немає доступних послуг</h2>
      <p className="text-gray-500 mb-3">Будь ласка, додайте послуги, щоб побачити їх тут.</p>
      <Button mode="primary">Додати послугу</Button>
    </div>
  );
};

export default EmptyServices;
