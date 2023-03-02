/* import logo from './logo.svg'; */

import React from 'react';
import Header from 'components/Header/Header';
import {Background, BackFood } from 'components/Background/Background';
import Footer from 'components/Footer';
import './Politicas.css';


function Cookies() {
  const isMobile = (window.innerWidth <= 648)
  return (
    <>
        <Header buttonType="2"/>
        <Background />
      
        <article className='mt-40 my-20 z-20 w-10/12 mx-auto flex flex-col justify-center items-center'>
          <div className='politicaContainer'>
            
            <div>
              <h2>Políticas de Cookies</h2>
              <p>Nuestra política de cookies explica qué son las cookies y como le damos uso. Se debería leer esta política para entender qué son las cookies, como le damos uso, los tipos de cookies que usamos, la información que recogemos usando dichas cookies y como esa información es usada y como controlar sus preferencias. Para más información de como usamos, recogemos y guardamos tus datos personales, vista nuestra política de privacidad. En cualquier momento, puedes cambiar o retirar tu consentimiento de la declaración de Cookies en nuestro sitio web. Aprende más sobre quiénes somos, cómo puedes contactarnos y como manejamos tus datos personales en nuestra política de privacidad. Tu consentimiento se aplica a los siguientes dominios: ……</p>
            </div>

            <div>
              <h6>¿Qué son las cookies?</h6>
              <p>Las cookies son pequeños archivos de texto que son usados para almacenar la información. Las cookies son almacenadas en tu dispositivo cuando el sitio web se carga en tu navegador. Estas cookies nos ayudan a mejorar el funcionamiento de nuestra web, hacen que nuestro sitio web sea más seguro, mejoran la experiencia del usuario y nos ayudan a entender cómo trabaja el sitio web y a analizar que funciona y que necesita una mejora.</p>
            </div>

            <div>
              <h6>¿Cómo usamos las Cookies?</h6>
              <p>Como la mayoría de servicios online, nuestra web usa cookies propias y cookies de terceros por varias razones. Las propias son mayormente necesarias para que la web funcione, y estas no almacenan ninguno de tus datos personales .Las cookies de terceros usadas en nuestro sitio web son usadas mayormente para entender cómo funciona la web, como interaccionas con nuestro sitio web, para mantener nuestros servicios seguros, proporcionando anuncios que son relevantes para el usuario y sobre todo, proporcionando una mejor experiencia de usuario que ayuda a mejorar la rapidez de tus futuras interacciones con nuestro sitio web.</p>
            </div>

            <div>
              <h6>¿Qué tipos de cookies usamos?</h6>
              <p>Cookies de sesión: diseñadas para recabar y almacenar datos mientras el usuario accede a una página web. Se suelen emplear para almacenar información que solo interesa conservar para la prestación del servicio solicitado por el usuario en una sola ocasión (Ejemplo: una lista de productos adquiridos). Cookies persistentes: los datos siguen almacenados en el terminal y pueden ser accedidos y tratados durante un periodo definido por el responsable de la cookie, y que puede ir de unos minutos a varios años. Por último, existe otra clasificación con cinco tipos de cookies según la finalidad para la que se traten los datos obtenidos: Cookies técnicas: aquellas que permiten al usuario la navegación a través de una página web, plataforma o aplicación y la utilización de las diferentes opciones o servicios que en ella existan como, por ejemplo, controlar el tráfico y la comunicación de datos, identificar la sesión, acceder a partes de acceso restringido, recordar los elementos que integran un pedido, realizar el proceso de compra de un pedido, realizar la solicitud de inscripción o participación en un evento, utilizar elementos de seguridad durante la navegación, almacenar contenidos para la difusión de vídeos o sonido o compartir contenidos a través de redes sociales. Cookies de personalización: permiten al usuario acceder al servicio con algunas características de carácter general predefinidas en función de una serie de criterios en el terminal del usuario como por ejemplo serian el idioma, el tipo de navegador a través del cual accede al servicio, la configuración regional desde donde accede al servicio, etc. Cookies de análisis: permiten al responsable de las mismas, el seguimiento y análisis del comportamiento de los usuarios de los sitios web a los que están vinculadas. La información recogida mediante este tipo de cookies se utiliza en la medición de la actividad de los sitios web, aplicación o plataforma y para la elaboración de perfiles de navegación de los usuarios de dichos sitios, aplicaciones y plataformas, con el fin de introducir mejoras en función del análisis de los datos de uso que hacen los usuarios del servicio. Cookies publicitarias: permiten la gestión, de la forma más eficaz posible, de los espacios publicitarios. Cookies de publicidad comportamental: almacenan información del comportamiento de los usuarios obtenida a través de la observación continuada de sus hábitos de navegación, lo que permite desarrollar un perfil específico para mostrar publicidad en función del mismo. Cookies de redes sociales externas: se utilizan para que los visitantes puedan interactuar con el contenido de diferentes plataformas sociales (facebook, youtube, twitter, linkedIn, etc..) y que se generen únicamente para los usuarios de dichas redes sociales. Las condiciones de utilización de estas cookies y la información recopilada se regulan por la política de privacidad de la plataforma social correspondiente.</p>
            </div>

          </div>


        </article>
    
      <Footer />
    </>
  );
}

export default Cookies;
