import './Modal.css';
import { useModal } from './useModal';

const Modal = ({children,isOpen,closeModal}) => {

    return (
        <article className={`modal ${isOpen && 'is-open'}`} onClick={closeModal}>
            <div className='modal-container text-gray-900'>
                <button className="modal-close text-white py-2 p-4 bg-slate-900/95 rounded-full" onClick={closeModal}>x</button>
                {children}
            </div>
        </article>
    )
}


export default Modal;