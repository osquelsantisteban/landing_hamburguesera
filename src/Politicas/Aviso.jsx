/* import logo from './logo.svg'; */

import React from 'react';
import Header from 'components/Header/Header';
import Background from 'components/Background/Background';
import Footer from 'components/Footer';
import './Politicas.css';


function Aviso() {
  const isMobile = (window.innerWidth <= 648)
  return (
    <>
        <Header buttonType="2"/>
        <Background />
      
        <article className='mt-40 my-20 z-20 w-10/12 mx-auto flex flex-col'>
          <h2 className='politicasH2'>Aviso Legal</h2>
          <br/>
          <p className='politicasP'>En cumplimiento de la Ley 34/2002, de 11 de julio, de servicios de la sociedad de la información y de comercio electrónico (LSSI), le informamos de que:</p>
          
          <p className='politicasP'>Javier Paris , en adelante IMPASTO. Su NIF es ……………. y tiene su domicilio en ………………………..</p>
          <p className='politicasP'>Datos de contacto:<br/>
              Teléfono: …………<br/>
              E-mail: ………………<br/>
          </p>

          <div className='politicasDiv'>
            <h5 className='politicasH5'>Condiciones generales de uso del sitio web IMASTO</h5>
            <p className='politicasP'>El nombre de dominio ………….. es titularidad de IMPASTO y su uso exclusivo está reservado a éste. El portal oficial de (nombre de dominio) tiene por objeto facilitar al público en general el conocimiento de las actividades que esta Organización realiza y de los productos y servicios que presta en materia de RESTURANTE. El uso de este sitio Web implica la expresa y plena aceptación de las condiciones aquí expuestas, sin perjuicio de aquellas particulares que pudieran aplicarse a algunos de los productos o servicios concretos ofrecidos a través del sitio Web. IMPASTO se reserva la facultad de efectuar, en cualquier momento y sin necesidad de previo aviso, modificaciones y actualizaciones de la información contenida en su Web o en la configuración y presentación de ésta. Con objeto de mantener actualizada la información publicada en el portal, los contenidos del mismo podrán ser modificados, corregidos, eliminados o añadidos en cualquier momento, por lo que será conveniente comprobar la vigencia o exactitud de los mismos acudiendo a las fuentes oficiales.</p>
          </div>

          <div className='politicasDiv'>
            <h5 className='politicasH5'>Propiedad intelectual, industrial y frames</h5>
            <p className='politicasP'>Todos los elementos que forman el sitio Web, así como su estructura, diseño, código fuente, así como los logos, marcas y demás signos distintivos que aparecen en la misma, son titularidad de IMPASTO o de sus colaboradores y están protegidos por los correspondientes derechos de propiedad intelectual e industrial. Igualmente están protegidos por los correspondientes derechos de propiedad intelectual e industrial las imágenes y otros elementos gráficos contenidos en los portales. IMPASTO prohíbe expresamente la realización de “framings” o la utilización por parte de terceros de cualesquiera otros mecanismos que alteren el diseño, configuración original o contenidos de nuestros portales.</p>
            <p className='politicasP'>El uso de los contenidos deberá respetar su licenciamiento particular. De tal modo su uso, reproducción, distribución, comunicación pública, transformación o cualquier otra actividad similar o análoga, queda totalmente prohibida salvo que medie previa y expresa autorización de IMPASTO. Respecto a las citas de noticias, productos y servicios de terceros, que puedan aparecer en la Web, IMPASTO reconoce a favor de sus titulares los correspondientes derechos de propiedad industrial e intelectual, no implicando su sola mención o aparición en la Web la existencia de derechos ni de responsabilidad alguna sobre los mismos, como tampoco respaldo, patrocinio o recomendación. IMPASTO declara su respeto a los derechos de propiedad intelectual e industrial de terceros; por ello, si considera que nuestros portales pudieran estar violando sus derechos, rogamos se ponga en contacto con IMPASTO.</p>
          </div>

          <div className='politicasDiv'>
            <h5 className='politicasH5'>Responsabilidad</h5>
            <p className='politicasP'>IMPASTO no garantiza la inexistencia de errores en el acceso a la Web, en su contenido, ni que éste se encuentre actualizado, aunque IMPASTO desarrollará sus mejores esfuerzos para, en su caso, evitarlos, subsanarlos o actualizarlos.</p>
            <p className='politicasP'>Tanto el acceso a los portales de IMPASTO como el uso que pueda hacerse de la información contenida en los mismos es de la exclusiva responsabilidad de quien lo realiza. IMPASTO no se hace responsable de los posibles errores de seguridad que se puedan producir ni de los posibles daños que puedan causarse al sistema informático del Usuario (hardware y software), los ficheros o documentos almacenados en el mismo, como consecuencia de la presencia de virus en el ordenador del Usuario utilizado para la conexión a los servicios y contenidos de la Web, de un mal funcionamiento del navegador o del uso de versiones no actualizadas del mismo.</p>
            <p className='politicasP'>IMPASTO no se hace responsable de la información y contenidos almacenados, a título enunciativo pero no limitativo, en foros, chats, blogs, comentarios, redes sociales o cualesquiera otro medio que permita a terceros publicar contenidos de forma independiente en la página web de IMPASTO.</p>
            <p className='politicasP'>No obstante y en cumplimiento de lo dispuesto en la LSSI, IMPASTO se pone a disposición de todos los usuarios, autoridades y fuerzas de seguridad, y colaborando de forma activa en la retirada o en su caso bloqueo de todos aquellos contenidos que pudieran afectar o contravenir la legislación nacional, o internacional, derechos de terceros o la moral y el orden público. En caso de que el usuario considere que existe en el sitio web algún contenido que pudiera ser susceptible de esta clasificación, rogamos se ponga en contacto con IMPASTO.</p>
          </div>

          <div className='politicasDiv'>
            <h5 className='politicasH5'>Links o hiperenlaces</h5>
            <p className='politicasP'>La Web puede contener enlaces a contenidos que dirijan a contenidos Web de terceros. El objetivo de dichos enlaces es únicamente facilitarle la búsqueda de los recursos que le puedan interesar a través de Internet. No obstante, dichas páginas no pertenecen a IMPASTO, ni hace una revisión de sus contenidos y, por ello, IMPASTO no asume ninguna responsabilidad por el contenido, informaciones o servicios que pudieran aparecer en dichos sitios, que tendrán exclusivamente carácter informativo y que en ningún caso implican relación alguna entre IMPASTO y a las personas o entidades titulares de tales contenidos o titulares de los sitios donde se encuentren. IMPASTO tampoco puede hacerse responsable del funcionamiento de la página enlazada o de los posibles daños que puedan derivarse del acceso o uso de la misma. Los enlaces a la web de IMPASTO deberán respetar las siguientes condiciones:</p>
            <ol className='politicasOl'>
              <li>El establecimiento del enlace no supondrá per se ningún tipo de acuerdo, contrato, patrocinio ni recomendación por parte de IMPASTO de la página que realiza el enlace.</li>
              <li>La página web en la que se establezca el hiperenlace no contendrá informaciones con contenidos que sean ilícitos, discriminatorios, contrarios a los principios éticos comúnmente aceptados o atenten contra el orden público, así como tampoco contendrá contenidos contrarios a cualesquiera derechos de terceros.</li>
              <li>IMPASTO podrá solicitar que se retire un enlace a su web, sin necesidad de alegar causa alguna. En tal caso, la página que haya realizado el enlace deberá proceder a su inmediata supresión, tan pronto como reciba la notificación.</li>
              <li>IMPASTO no se responsabiliza en modo alguno ni garantiza la calidad, exactitud, fiabilidad, corrección o moralidad de contenidos o servicios que el establecimiento del hiperenlace puedaofrecer. El usuario asume bajo su exclusiva responsabilidad las consecuencias, daños o acciones que pudieran derivarse del acceso a la página web del hiperenlace.</li>
            </ol>
          </div>

          <div className='politicasDiv'>
            <h5 className='politicasH5'>Protección de Datos Personales</h5>
            <p className='politicasP'>IMPASTO se encuentra profundamente comprometido con el cumplimiento de la normativa de protección de datos de carácter personal, y garantiza el cumplimiento íntegro de las obligaciones dispuestas, así como la implementación de las medidas de seguridad apropiadas para garantizar un nivel de seguridad adecuado al riesgo. IMPASTO pone a disposición de los usuarios su Política de Privacidad y le ofrece información ampliada del tratamiento de datos realizado por la Entidad:</p>
          </div>

          <div className='politicaContainer'>
            <div className='politicasDiv'>
                <h5 className='politicasH5'>INFORMACIÓN ADICIONAL SOBRE PROTECCIÓN DE DATOS</h5>
                <p className='politicasP'>¿Quién es el responsable del tratamiento de sus datos?<br/>
                Identidad:<br/>
                Dirección postal:<br/>
                Teléfono:<br/>
                Correo electrónico:<br/>
                </p>
            </div>
          
            <div className='politicasDiv'>
              <p className='politicasP'>¿Con qué finalidad tratamos sus datos personales?</p>
              <p className='politicasP'>En IMPASTO tratamos la información que nos facilitan nuestros grupos de interés para los siguientes tratamientos:</p>
            </div>
          
            <div className='politicasDiv'>
              <h5 className='politicasH5'>Tratamiento datos:</h5>
              <p className='politicasP'>Clientes</p>
            </div>

            <div className='politicasDiv'>
              <h6 className='politicasH6'>Finalidad del tratamiento:</h6>
              <p className='politicasP'>GESTIÓN DE CLIENTES, CONTABLE, FISCAL Y ADMINISTRATIVA (No se tomarán decisiones automatizadas en base a dicho perfil).</p>
            </div>

            <div className='politicasDiv'>
              <h6 className='politicasH6'>Plazo conservación datos:</h6>
              <p className='politicasP'>Los datos personales tratados se conservarán en todo caso mientras sean necesarios para la finalidad del tratamiento, y se suprimirán a solicitud del interesado, o una vez finalizado el tratamiento sin perjuicio de su conservación por los plazos establecidos en normativa de aplicación para atender posibles responsabilidades.</p>
            </div>

            <div className='politicasDiv'>
              <h5 className='politicasH5'>¿Cuál es la legitimación para el tratamiento de los mismos?</h5>
              <p className='politicasP'>Las bases legales para el tratamiento de datos personales en IMPASTO son las siguientes:</p>
            </div>

            <div className='politicasDiv'>
              <h5 className='politicasH5'>Legitimación tratamiento:</h5>
              <p className='politicasP'>Consentimiento del interesado que podrá retirar en cualquier momento sin que ello afecte a la licitud del tratamiento basado en el consentimiento previo a su retirada.</p>
            </div>

            <div className='politicasDiv'>
              <h5 className='politicasH5'>¿A qué destinatarios se comunicarán sus datos?</h5>
              <p className='politicasP'>La realización de estos tratamientos puede implicar la conexión de sus datos con tratamientos realizados por terceros. Le informamos a continuación de las previsiones en relación a la cesión de sus datos.</p>
            </div>

            <div className='politicasDiv'>
              <h5 className='politicasH5'>Previsión de cesiones</h5>
              <p className='politicasP'>ADMINISTRACIÓN PÚBLICA CON COMPETENCIA EN LA MATERIA, ENTIDADES BANCARIAS O FINANCIERAS</p>
            </div>

            <div className='politicasDiv'>
              <h5 className='politicasH5'>Transferencias internacionales:</h5>
              <p className='politicasP'>No se transferirán datos fuera de la UE.</p>
            </div>

            <div className='politicasDiv'>
              <h5 className='politicasH5'>¿Cuáles son sus derechos cuando nos facilita sus datos?</h5>
              <p className='politicasP'>Cualquier persona tiene derecho a obtener confirmación sobre si en IMPASTO estamos tratando datos personales que le conciernan, o no.</p>
              <p className='politicasP'>Las personas interesadas tienen derecho a acceder a sus datos personales, así como a solicitar la rectificación de los datos inexactos o, en su caso, solicitar su supresión cuando, entre otros motivos, los datos ya no sean necesarios para los fines para los que fueron recogidos.</p>
              <p className='politicasP'>En determinadas circunstancias, los interesados podrán solicitar la limitación del tratamiento de sus datos, en cuyo caso únicamente los conservaremos para el ejercicio o defensa de reclamaciones.</p>
              <p className='politicasP'>En determinadas circunstancias y por motivos relacionados con su situación particular, los interesados podrán oponerse al tratamiento de sus datos. IMPASTO dejará de tratar los datos, salvo por motivos legítimos e imperiosos, o el ejercicio o la defensa de posibles reclamaciones.</p>
              <p className='politicasP'>Asimismo, en determinadas circunstancias y cuando sea técnicamente posible, los interesados tienen derecho a que los datos personales se transmitan directamente a otro responsable a solicitud suya. Para el ejercicio de estos derechos, póngase en contacto con nosotros dirigiendo un escrito a:</p>
              <p className='politicasP'>IMPASTO, CALLE ……., o bien por e-mail a …………… acompañado de copia de su DNI.</p>
              <p className='politicasP'>De igual modo, puede ponerse en contacto con la Agencia Española de Protección de Datos, para formular una reclamación, especialmente cuando no haya obtenido satisfacción en el ejercicio de sus derechos.</p>
            </div>

            <div className='politicasDiv'>
              <h5 className='politicasH5'>Ley aplicable y jurisdicción</h5>
              <p className='politicasP'>La ley aplicable en caso de disputa o conflicto de interpretación de los términos que conforman este Aviso Legal, así como cualquier cuestión relacionada con los servicios del presente Portal, será la ley española.</p>
              <p className='politicasP'>Para la resolución de cualquier conflicto que pueda surgir con ocasión de la visita al Portal o del uso de los servicios que en él se puedan ofertar, IMPASTO y el Usuario acuerdan someterse a los Jueces y Tribunales de domicilio de IMPASTO.</p>
            </div>

          </div>

        </article>
    
      <Footer />
    </>
  );
}

export default Aviso;
