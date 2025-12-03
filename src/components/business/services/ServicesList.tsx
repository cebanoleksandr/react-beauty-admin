import type { FC } from "react";
import type { IService } from "../../../utils/interfaces";
import ServiceItem from "./ServiceItem";
import EmptyServices from "./EmptyServices";

interface IProps {
  services: IService[];
}

const ServicesList: FC<IProps> = ({ services }) => {
  return (
    <div>
      {services.length === 0 ? (
        <EmptyServices />
      ) : (
        services.map(service => (
          <ServiceItem key={service.id} service={service} />
        ))
      )}
    </div>
  );
}

export default ServicesList;
