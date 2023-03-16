import React from 'react';
import { arrow, position } from 'components/config';
import Spaces from 'components/Spaces/Spaces';
import Diferente_Hamburguesa from './assets/Diferente_Hamburguesa.svg';


export default function Section2() {
    return (
        <>
            <section className='flex flex-col my-10 mb-20'>

                <div className='mb-20 z-20'>
                    <img src={Diferente_Hamburguesa} alt="" className='w-10/12 lg:w-7/12'/>
                </div>

                <div className='flex flex-row items-center lg:mt-20'>
                    
                    <Spaces clas="w-1/12 md:w-2/4" space={300} hasArrow={true} arrow={arrow.ARROW_LEFTT} position={position.left} />

                    <div className='w-11/12 md:w-2/4 z-20'>
                        <h3 className='text-base lg:text-2xl'>¿Te acuerdas de aquella hamburguesa que te llevaban a comer tus padres cuando eras chico? ¡Pues sorpresa, en IMPASTO hemos revolucionado el concepto de la burguer! Reinterpretando la receta tradicional en una hamburguesa gourmet cerrada, que es el resultado la combinación de la mejor carne de Txuleta de vaca, envuelta en masa artesanal, que te ofrece una formula innovadora y llena de sabor.</h3>
                    </div>
                </div>

            </section>
        </>
    );
}