import { useEffect, useState } from "react";
import MainLayout from "../components/layouts/MainLayout";
import type { IService } from "../utils/interfaces";
import { useAppDispatch } from "../storage/hooks";
import { getAllServices } from "../api/service";
import { setAlertAC } from "../storage/alertSlice";

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
      <h1>Ваш прайс-лист.</h1>
      <ul>
        <li>Список всіх послуг: Згрупований за категоріями (напр., "Манікюр", "Стрижки", "Косметологія").</li>
        <li>Налаштування послуги:</li>
        <ul>
          <li>Назва та опис.</li>
          <li>Ціна (може бути фіксована або діапазон).</li>
          <li>Тривалість (дуже важливо для календаря).</li>
          <li>Які майстри можуть виконувати цю послугу.</li>
        </ul>
      </ul>
    </MainLayout>
  );
};

export default ServicesPage;
