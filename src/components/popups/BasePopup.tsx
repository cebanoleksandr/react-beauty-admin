import ReactDOM from 'react-dom';
import { motion } from 'framer-motion';
import type { FC, ReactNode } from 'react';

interface IProps {
  isVisible: boolean;
  onClose: () => void;
  children: ReactNode;
}

const BasePopup: FC<IProps> = ({ isVisible, onClose, children }) => {
  if (!isVisible) {
    return null;
  }

  const backdropPortal = ReactDOM.createPortal(
    <motion.div
      className="fixed inset-0 bg-zinc-900/40 z-10"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    />,
    document.body
  );

  const modalPortal = ReactDOM.createPortal(
    <motion.dialog
      open={isVisible}
      className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-120 m-0
                 rounded-xl p-4 bg-white z-50 border-none shadow-lg"
      initial={{ opacity: 0, scale: 0.5, y: -100 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.5, y: 100 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.dialog>,
    document.body
  );

  return (
    <>
      {backdropPortal}
      {modalPortal}
    </>
  );
};

export default BasePopup;
