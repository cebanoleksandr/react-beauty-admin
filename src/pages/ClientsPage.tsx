import MainLayout from "../components/layouts/MainLayout";

const ClientsPage = () => {
  return (
    <MainLayout>
      <p>Ваша клієнтська база (CRM).</p>

      <ul>
        <li>Список всіх клієнтів: З можливістю пошуку та сортування.</li>
        <li>Сторінка (картка) клієнта:</li>
        <ul>
          <li>Контактна інформація (телефон, ім'я).</li>
          <li>Історія візитів: Які послуги, коли, у якого майстра, скільки заплатив.</li>
          <li>Нотатки: Важлива інформація (напр., "алергія на латекс", "завжди пропонувати каву").</li>
        </ul>
      </ul>
    </MainLayout>
  );
};

export default ClientsPage;
