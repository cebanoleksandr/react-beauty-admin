import type { FC } from "react";
import type { IService } from "../../../utils/interfaces";

interface IProps {
  service: IService;
}

const ServiceItem: FC<IProps> = ({ service }) => {
  return (
    <div>
      <h2>{service.title}</h2>
      <p>Duration: {service.duration_minutes} minutes</p>
      <p>Price: ${service.price}</p>
    </div>
  );
}

export default ServiceItem;
