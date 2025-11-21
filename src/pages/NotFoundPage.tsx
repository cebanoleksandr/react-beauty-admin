import { useNavigate } from 'react-router-dom';
import MainLayout from '../components/layouts/MainLayout';
import Button from '../components/UI/Button';


const NotFoundPage = () => {
  const navigate = useNavigate(); 
  
  const onBackHome = () => {
    navigate('/');
  };

  return (
    <MainLayout>
      <div className="flex flex-col items-center justify-center h-[75vh]">
        <div className="text-center p-8">
          <h1 className="text-9xl font-bold text-red-800">404</h1>
          <h2 className="mt-4 text-3xl font-semibold text-red-700">Сторінка не знайдена</h2>
          <p className="mt-2 text-gray-500 max-w-md">
            На жаль, сторінки, яку ви шукаєте, не існує. Можливо, ви ввели неправильну адресу або сторінку було видалено.
          </p>
          <div className="mt-6">
            <Button mode="success" onClick={onBackHome}>
              На головну
            </Button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default NotFoundPage;
