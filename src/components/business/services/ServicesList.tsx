import { useState, type FC } from "react";
import type { IService } from "../../../utils/interfaces";
import ServiceItem from "./ServiceItem";
import EmptyServices from "./EmptyServices";
import type { CreateServiceDTO } from "../../../utils/types";
import Button from "../../UI/Button";
import CreateServicePopup from "../../popups/CreateServicePopup";

interface IProps {
  services: IService[];
  onCreate: (data: CreateServiceDTO) => void;
}

const ServicesList: FC<IProps> = ({ services, onCreate }) => {
  const [isCreateServicePopupVisible, setIsCreateServicePopupVisible] = useState(false);

  const handleCreateService = (serviceData: CreateServiceDTO) => {
    onCreate(serviceData);
    setIsCreateServicePopupVisible(false);
  };

  return (
    <div>
      <Button mode="primary" onClick={() => setIsCreateServicePopupVisible(true)}>Додати послугу</Button>
      <CreateServicePopup
        isVisible={isCreateServicePopupVisible}
        onClose={() => setIsCreateServicePopupVisible(false)}
        onCreate={handleCreateService}
      />
      {services.length === 0 ? (
        <EmptyServices onCreate={onCreate} />
      ) : (
        services.map(service => (
          <ServiceItem key={service.id} service={service} />
        ))
      )}
    </div>
  );
}

export default ServicesList;
