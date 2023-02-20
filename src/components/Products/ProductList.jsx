import React from 'react';
import Product from './Product';
import Modal from "components/Modals/Modal";
import { useModal } from "components/Modals/useModal";
import ProductImg from './assets/product.png'



function ProductsList() {
    const isMobile = (window.innerWidth <= 648)

    const [isOpenM1,openM1,closeM1] = useModal(false);
    const [isOpenM2,openM2,closeM2] = useModal(false);
    const [isOpenM3,openM3,closeM3] = useModal(false);
    const [isOpenM4,openM4,closeM4] = useModal(false);

    return ( 
        <>
            {/* Modal 1 */}
            <Modal isOpen={isOpenM1} closeModal={closeM1}>                
                <img src={ProductImg} alt="" />
            </Modal>

            {/* Modal 2 */}
            <Modal isOpen={isOpenM2} closeModal={closeM2}>
                <img src={ProductImg} alt="" />
            </Modal>

            {/* Modal 3 */}
            <Modal isOpen={isOpenM3} closeModal={closeM3}>
                <img src={ProductImg} alt="" />
            </Modal>
            
            {/* Modal 4 */}
            <Modal isOpen={isOpenM4} closeModal={closeM4}>
                <img src={ProductImg} alt="" />
            </Modal>
            
            <section className='relative grid md:grid-cols-4 grid-cols-2 gap-6 z-20'>
                <button className='' onClick={openM1}>
                    <Product pos={1} />
                </button>
                <button className='' onClick={openM2}>
                    <Product pos={2} />
                </button>                
                                

                {/* x */}
                {
                    isMobile &&
                    <svg className="absolute top-[47%] left-[47%]" xmlns="http://www.w3.org/2000/svg" width="16.867" height="16.85" viewBox="179.067 2306.883 16.867 16.85">
                        <g data-name="Grupo 29">
                            <path d="m180.5 2308.31 14 14" strokeLinejoin="round" strokeLinecap="round" strokeWidth="3" stroke="#e6332a" fill="transparent" data-name="Línea 4"/>
                            <path d="m194.5 2308.31-14 14" strokeLinejoin="round" strokeLinecap="round" strokeWidth="3" stroke="#e6332a" fill="transparent" data-name="Línea 5"/>
                        </g>
                    </svg>
                }

                <button className='' onClick={openM3}>
                    <Product pos={3} />
                </button>
                <button className='' onClick={openM4}>
                    <Product pos={4} />
                </button>
            </section>
        </>
     );
}

export default ProductsList;