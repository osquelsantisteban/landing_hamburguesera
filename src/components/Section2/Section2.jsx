import React from 'react';
import { arrow, position } from 'components/config';
import Spaces from 'components/Spaces/Spaces';
import Diferente_Hamburguesa from './assets/Diferente_Hamburguesa.svg';


export default function Section2() {
    return (
        <>
            <section className='flex flex-col my-10 mb-20'>

                <div className='mb-20 z-20'>
                    {/* <div className='relative z-0'>
                        <div className='absolute z-0 w-20 h-12 lg:w-60 lg:h-36'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="10.983 71 237.567 148.367"><path d="M237.16 83.519c0 2.123-1.365 4.854-4.096 8.19a87.8 87.8 0 0 1-8.987 9.443c-3.261 2.958-6.257 6.333-8.987 10.125-2.73 3.792-4.096 7.205-4.096 10.238 0 1.669 1.972 3.337 5.916 5.006a854.99 854.99 0 0 1 12.855 5.574c4.627 2.048 8.912 6.144 12.855 12.287 3.944 6.143 5.916 13.84 5.916 23.093 0 15.472-5.157 27.986-15.472 37.542-10.314 9.556-23.814 14.334-40.5 14.334-15.774 0-29.16-5.233-40.157-15.7-10.997-10.465-16.496-23.282-16.496-38.45 0-9.102 2.351-19.15 7.053-30.148 4.703-10.997 10.808-21.235 18.316-30.716 7.508-9.48 16.42-17.405 26.734-23.776 10.315-6.37 20.478-9.556 30.489-9.556 5.612 0 10.125 1.29 13.537 3.868 3.413 2.578 5.12 5.46 5.12 8.646Zm-124.911 0c0 2.73-2.2 6.333-6.599 10.807a338.049 338.049 0 0 0-13.082 14.107c-4.323 4.93-6.485 9.29-6.485 13.082 0 1.669 1.972 3.337 5.916 5.006a854.881 854.881 0 0 1 12.855 5.574c4.626 2.048 8.911 6.144 12.855 12.287 3.944 6.143 5.916 13.84 5.916 23.093 0 15.472-5.157 27.986-15.472 37.542-10.314 9.556-23.814 14.334-40.5 14.334-15.774 0-29.16-5.233-40.157-15.7C16.499 193.187 11 180.37 11 165.202c0-9.102 2.351-19.15 7.053-30.148 4.702-10.997 10.808-21.235 18.316-30.716 7.508-9.48 16.42-17.405 26.734-23.776 10.315-6.37 20.477-9.556 30.489-9.556 5.612 0 10.124 1.29 13.537 3.868 3.413 2.578 5.12 5.46 5.12 8.646Z" fill="#d5c4a7" fillRule="evenodd" data-name="InicioComilla" /></svg>
                        </div>
                    </div>
                    <div className='z-30 flex px-2 py-4 lg:px-3 lg:py-14'>
                        <h1 className='z-30 lg:text-7xl text-red-strong'>Diferente<br /> hamburguesa,<br />diferente<br /> experiencia</h1>
                    </div>
                    <div className='relative flex flex-row-reverse'>
                        <div className='absolute z-0 w-20 h-12 -top-10 right-10 lg:-top-24 lg:right-96 lg:w-60 lg:h-36'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="517.433 449.75 237.583 148.383"><path d="M528.84 585.59c0-2.123 1.366-4.854 4.096-8.19a87.803 87.803 0 0 1 8.987-9.443c3.261-2.958 6.257-6.333 8.987-10.125 2.73-3.792 4.096-7.205 4.096-10.238 0-1.669-1.972-3.337-5.916-5.006a855.003 855.003 0 0 1-12.855-5.574c-4.626-2.048-8.911-6.144-12.855-12.287-3.944-6.143-5.916-13.84-5.916-23.093 0-15.472 5.157-27.986 15.472-37.542 10.314-9.556 23.814-14.334 40.5-14.334 15.774 0 29.16 5.233 40.157 15.7 10.997 10.465 16.496 23.282 16.496 38.45 0 9.102-2.351 19.15-7.053 30.148-4.703 10.997-10.808 21.235-18.316 30.716-7.508 9.48-16.42 17.405-26.734 23.776-10.315 6.37-20.478 9.556-30.489 9.556-5.612 0-10.124-1.29-13.537-3.868-3.413-2.578-5.12-5.46-5.12-8.646Zm124.912 0c0-2.73 2.199-6.333 6.598-10.807a338.064 338.064 0 0 0 13.082-14.107c4.323-4.93 6.485-9.29 6.485-13.082 0-1.669-1.972-3.337-5.916-5.006a854.944 854.944 0 0 1-12.855-5.574c-4.626-2.048-8.911-6.144-12.855-12.287-3.944-6.143-5.916-13.84-5.916-23.093 0-15.472 5.157-27.986 15.472-37.542 10.314-9.556 23.814-14.334 40.5-14.334 15.774 0 29.16 5.233 40.158 15.7C749.502 475.922 755 488.74 755 503.907c0 9.102-2.351 19.15-7.053 30.148-4.702 10.997-10.808 21.235-18.316 30.716-7.508 9.48-16.42 17.405-26.734 23.776-10.315 6.37-20.477 9.556-30.488 9.556-5.613 0-10.125-1.29-13.538-3.868-3.413-2.578-5.12-5.46-5.12-8.646Z" fill="#d5c4a7" fillRule="evenodd" data-name="FinComilla" /></svg>
                        </div>
                    </div> */}
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