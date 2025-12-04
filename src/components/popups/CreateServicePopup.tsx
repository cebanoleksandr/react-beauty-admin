import { useEffect, useMemo, useState, type FC } from 'react';
import BasePopup from './BasePopup';
import { XMarkIcon } from '@heroicons/react/24/solid';
import Button from '../UI/Button';
import Input from '../UI/Input';
import { MultiSelect, type Option } from '../UI/MultiSelect';
import ImagePicker from '../UI/ImagePicker';
import type { CreateServiceDTO } from '../../utils/types';
import { getPhotoLink } from '../../utils/photo';
import { useAppDispatch } from '../../storage/hooks';
import { setAlertAC } from '../../storage/alertSlice';
import type { IUser } from '../../utils/interfaces';
import { getAllAdmins } from '../../api/admin';

interface IProps {
  isVisible: boolean;
  onClose: () => void;
  onCreate: (data: CreateServiceDTO) => void;
}

const CreateServicePopup: FC<IProps> = ({ isVisible, onClose, onCreate }) => {
  const [selectedMasters, setSelectedMasters] = useState<Option[]>([]);
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState<number | null>(null);
  const [duration, setDuration] = useState<number | null>(null);
  const [image, setImage] = useState<File | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [isDirty, setIsDirty] = useState(false);
  const [masters, setMasters] = useState<IUser[]>([]);

  const dispatch = useAppDispatch();

  const getMasters = async () => {
    try {
      const response = await getAllAdmins({});
      setMasters(response);
    } catch (error) {
      dispatch(setAlertAC({ mode: 'error', text: 'Failed to load masters' }));
    }
  }

  useEffect(() => {
    getMasters();
  }, []);

  const options = useMemo(() => {
    return masters.map(master => ({
      value: master.id,
      label: `${!master.firstName && !master.lastName ? master.email : master?.firstName + ' ' + master?.lastName}`
    }))
  }, [masters]);

  const handleCreateService = async () => {
    setIsDirty(true);

    if (!title || !price || !duration) {
      return;
    }

    setIsCreating(true);

    try {
      const imageUrl = !!image ? await getPhotoLink(image) : null;
      const masterIds = selectedMasters.map(m => m.value)

      const newServiceData: CreateServiceDTO = {
        title,
        price,
        imageUrl,
        duration_minutes: duration,
        masterIds,
      }

      onCreate(newServiceData);
    } catch (error) {
      dispatch(setAlertAC({ mode: 'error', text: 'Something went wrong' }));
    } finally {
      setIsCreating(false);
    }
  }

  return (
    <BasePopup isVisible={isVisible} onClose={onClose}>
      <div className="flex flex-col">
        <div className='flex justify-end'>
          <XMarkIcon
            className='w-6 h-6 text-gray-800 hover:text-gray-600 transition duration-300 cursor-pointer'
            onClick={onClose}
          />
        </div>

        <h2 className='text-center text-gray-800 text-2xl font-semibold mb-4'>
          Створити послугу
        </h2>

        <div className='mb-10'>
          <div className='mb-2'>
            <label htmlFor="serviceName" className='mb-1 font-semibold text-gray-600'>Назва послуги</label>
            <Input
              id="serviceName"
              placeholder="Введiть назву послуги"
              value={title}
              onChange={e => setTitle(e.target.value)}
              error={isDirty && !title}
            />
          </div>

          <div className='mb-2'>
            <label htmlFor="servicePrice" className='mb-1 font-semibold text-gray-600'>Цiна</label>
            <Input
              id="servicePrice"
              type="number"
              placeholder="Введiть цiну послуги"
              value={price?.toString()}
              onChange={e => setPrice(+e.target.value)}
              error={isDirty && !price}
            />
          </div>

          <div className='mb-2'>
            <label htmlFor="serviceDuration" className='mb-1 font-semibold text-gray-600'>Тривалiсть (хвилини)</label>
            <Input
              id="serviceDuration"
              type="number"
              placeholder="Введіть тривалість послуги в хвилинах"
              value={duration?.toString()}
              onChange={e => setDuration(+e.target.value)}
              error={isDirty && !duration}
            />
          </div>

          <div className='mb-2'>
            <label htmlFor="serviceMasters" className='mb-1 font-semibold text-gray-600'>Призначити майстрів</label>
            <MultiSelect
              options={options}
              value={selectedMasters}
              onChange={setSelectedMasters}
              placeholder="Вибери майстра..."
            />
          </div>

          <div className='mb-2'>
            <label htmlFor="serviceImageUrl" className='mb-1 font-semibold text-gray-600'>Виберiть фото</label>
            <ImagePicker onChange={setImage} />
          </div>
        </div>

        <div className='flex justify-end items-center gap-2'>
          <Button onClick={onClose}>
            Вiдхилити
          </Button>

          <Button onClick={handleCreateService} mode="primary">
            {isCreating ? 'Створення...' : 'Створити' }
          </Button>
        </div>
      </div>
    </BasePopup>
  );
};

export default CreateServicePopup;
