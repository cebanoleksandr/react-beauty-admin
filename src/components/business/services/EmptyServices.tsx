import { useState, type FC } from "react";
import emptyImg from "../../../assets/images/questionImage.svg";
import Button from "../../UI/Button";
import CreateServicePopup from "../../popups/CreateServicePopup";
import type { CreateServiceDTO } from "../../../utils/types";

interface IProps {
  onCreate: (serviceData: CreateServiceDTO) => void;
}

const EmptyServices: FC<IProps> = ({ onCreate }) => {
  const [isCreateServicePopupVisible, setIsCreateServicePopupVisible] = useState(false);

  const handleCreateService = (serviceData: CreateServiceDTO) => {
    onCreate(serviceData);
    setIsCreateServicePopupVisible(false);
  };

  return (
    <div className="flex items-center justify-center flex-col">
      <img src={emptyImg} alt="No Services" />
      <h2 className="text-lg font-medium mb-2">Немає доступних послуг</h2>
      <p className="text-gray-500 mb-3">Будь ласка, додайте послуги, щоб побачити їх тут.</p>
      <Button mode="primary" onClick={() => setIsCreateServicePopupVisible(true)}>Додати послугу</Button>
      <CreateServicePopup
        isVisible={isCreateServicePopupVisible}
        onClose={() => setIsCreateServicePopupVisible(false)}
        onCreate={handleCreateService}
      />
    </div>
  );
};

export default EmptyServices;
