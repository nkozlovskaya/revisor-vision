import { ReactNode } from 'react';
import  './modal.css'

interface ModalProps { 
    active: boolean;
    setActive: React.Dispatch<React.SetStateAction<boolean>>;
    children: ReactNode;
}

export const Modal = ({active, setActive,children}:ModalProps) => {
    return (
        <div
            className={active ?
                'modal active' :
                'modal'}
            onClick={() => setActive(false)}
        >
            <div
                className='modal_content'
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    )
}