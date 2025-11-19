import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthLayout from '../components/layouts/AuthLayout';
import { useAppDispatch } from '../storage/hooks';
import { setAlertAC } from '../storage/alertSlice';
import Input from '../components/UI/Input';
import { register } from '../api/auth';
import { setUserAC } from '../storage/adminSlice';
import Button from '../components/UI/Button';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid';

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isConfirmedPasswordShown, setIsConfirmedPasswordShown] = useState(false);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      dispatch(setAlertAC({
        text: 'Паролі не співпадають',
        mode: 'error'
      }));
      return;
    }

    if (password.length < 6) {
      dispatch(setAlertAC({
        text: 'Пароль має бути не менше 6 символів',
        mode: 'warning'
      }));
      return;
    }

    setIsLoading(true);

    try {
      const response = await register({ email, password });
      const { accessToken, admin } = response;

      localStorage.setItem('token', accessToken);
      dispatch(setUserAC(admin));

      dispatch(setAlertAC({
        text: 'Реєстрація успішна! Ласкаво просимо.',
        mode: 'success'
      }));

      navigate('/');
    } catch (error: any) {
      const message = error.response?.data?.message || 'Помилка при реєстрації. Можливо, такий email вже існує.';
      dispatch(setAlertAC({
        text: message,
        mode: 'error'
      }));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout>
      <div className="flex min-h-[calc(100vh-160px)] items-center justify-center">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Створити акаунт</h1>
            <p className="text-gray-500">Приєднуйтесь до управління Beauty Salon</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <Input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@example.com"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Пароль
              </label>
              <div className="relative">
                <Input
                  id="password"
                  type={isPasswordShown ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setIsPasswordShown(!isPasswordShown)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none transition-colors duration-300"
                >
                  {isPasswordShown ? (
                    <EyeSlashIcon className="h-5 w-5" />
                  ) : (
                    <EyeIcon className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                Підтвердіть пароль
              </label>
              <div className="relative">
                <Input
                  id="confirmPassword"
                  type={isConfirmedPasswordShown ? "text" : "password"}
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className={`${confirmPassword && password !== confirmPassword
                      ? 'border-red-300 focus:ring-red-200 focus:border-red-500'
                      : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'
                    }`}
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setIsConfirmedPasswordShown(!isConfirmedPasswordShown)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none transition-colors duration-300"
                >
                  {isConfirmedPasswordShown ? (
                    <EyeSlashIcon className="h-5 w-5" />
                  ) : (
                    <EyeIcon className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            <Button
              type="submit"
              mode='primary'
              full
              disabled={isLoading}
            >
              {isLoading ? (
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : (
                'Зареєструватися'
              )}
            </Button>
          </form>

          <div className="mt-8 pt-6 border-t border-gray-100 text-center">
            <p className="text-sm text-gray-500">
              Вже є акаунт?{' '}
              <Link to="/login" className="text-blue-600 hover:text-blue-500 font-semibold transition-colors">
                Увійти
              </Link>
            </p>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default RegisterPage;
