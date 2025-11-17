import MainLayout from "../components/layouts/MainLayout";

const ServicesPage = () => {
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
