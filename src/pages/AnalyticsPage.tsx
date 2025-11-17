import MainLayout from "../components/layouts/MainLayout";

const AnalyticsPage = () => {
  return (
    <MainLayout>
      <h1>Допомагає зрозуміти, як працює бізнес.</h1>

      <ul>
        <li>Звіт по фінансах: Дохід за день, тиждень, місяць.</li>
        <li>Звіт по послугах: Які послуги найпопулярніші.</li>
        <li>Звіт по майстрах: Хто з майстрів приносить найбільше доходу, у кого найбільша завантаженість.</li>
        <li>Звіт по клієнтах: LTV (життєва цінність клієнта), коефіцієнт утримання.</li>
      </ul>
    </MainLayout>
  );
};

export default AnalyticsPage;
