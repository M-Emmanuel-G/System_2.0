import { useRouter } from 'next/navigation';
import { FC, useEffect } from 'react';

interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  path: string;
  text?:string
}

const ModalAlert: FC<ModalProps> = ({ isOpen, onClose, path, text }) => {

    const router = useRouter()

    useEffect(()=>{
        setTimeout(()=>{
            // router.push(path)
            onClose()
        }, 4000)
    },[])

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="bg-white p-6 rounded-lg z-10">
        <span
          className="absolute top-0 right-0 m-3 text-gray-500 cursor-pointer"
          onClick={onClose}
        >
        </span>
        <p className='text-black text-2xl'>{text}</p>
      </div>
    </div>
  );
};

export default ModalAlert;