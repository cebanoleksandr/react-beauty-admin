import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthLayout from '../components/layouts/AuthLayout';
import { useAppDispatch } from '../storage/hooks';
import { setAlertAC } from '../storage/alertSlice';
import Input from '../components/UI/Input';
import { login } from '../api/auth';
import { setUserAC } from '../storage/adminSlice';
import Button from '../components/UI/Button';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await login({ email, password });
      const { accessToken, admin } = response;

      localStorage.setItem('token-admin', accessToken);
      dispatch(setUserAC(admin));

      dispatch(setAlertAC({
        text: `Вітаємо, ${admin.firstName || 'Адміністратор'}!`,
        mode: 'success'
      }));

      navigate('/');
    } catch (error: any) {
      const message = error.response?.data?.message || 'Невірний логін або пароль';
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
            <h1 className="text-3xl font-bold text-gray-900 mb-2">З поверненням!</h1>
            <p className="text-gray-500">Введіть свої дані для входу в Beauty Admin</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
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
              <div className="flex items-center justify-between mb-1">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Пароль
                </label>
                
                <Link to="#" className="text-sm text-blue-600 hover:text-blue-500">Забули пароль?</Link>
              </div>
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
                'Увійти'
              )}
            </Button>
          </form>

          <div className="mt-8 pt-6 border-t border-gray-100 text-center">
            <p className="text-sm text-gray-500">
              Ще немає акаунту?{' '}
              <Link to="/register" className="text-blue-600 hover:text-blue-500 font-semibold transition-colors">
                Зареєструватися
              </Link>
            </p>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default LoginPage;
