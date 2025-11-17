import MainLayout from "../components/layouts/MainLayout";

const SettingsPage = () => {
  return (
    <MainLayout>
      <h1>Загальні налаштування салону та програми.</h1>
      
      <ul>
        <li>Інформація про салон: Адреса, телефон, години роботи.</li>
        <li>Управління користувачами: Хто має доступ до адмін-панелі (наприклад, Адміністратор, Власник, Майстер — з різними правами).</li>
        <li>Налаштування сповіщень: Шаблони SMS або email-нагадувань для клієнтів.</li>
      </ul>
    </MainLayout>
  );
};

export default SettingsPage;
