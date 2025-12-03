import { useEffect, useState } from "react";
import MainLayout from "../components/layouts/MainLayout";
import type { IService } from "../utils/interfaces";
import { useAppDispatch } from "../storage/hooks";
import { getAllServices } from "../api/service";
import { setAlertAC } from "../storage/alertSlice";
import ServicesList from "../components/business/services/ServicesList";
import Loader from "../components/UI/Loader/Loader";

const ServicesPage = () => {
  const [services, setServices] = useState<IService[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  const getServices = async () => {
    setIsLoading(true);
    try {
      const response = await getAllServices({});
      console.log('Services fetched:', response);
      setServices(response);
    } catch (error) {
      dispatch(setAlertAC({ mode: 'error', text: 'Failed to load services.' }));
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getServices();
  }, []);

  return (
    <MainLayout>
      <h1 className="text-gray-800 text-2xl font-semibold mb-3">Послуги</h1>
      
      {isLoading ? (
        <Loader />
      ) : (
        <ServicesList services={services} />
      )}
    </MainLayout>
  );
};

export default ServicesPage;
