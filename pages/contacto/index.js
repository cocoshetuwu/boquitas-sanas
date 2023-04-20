import { useState } from 'react';
import Layout from '../../components/layout'

export default function Contacto() {
  const [selectedPage, setSelectedPage] = useState('contacto');
  const [slideOpacity, setSlideOpacity] = useState(1);

  return (
    <Layout head_title='Contacto' selected_tab='Contacto'>
      <div className='slider'>
        <a className={selectedPage === 'contacto' ? 'selectedSlider' : ''} onClick={() => {
          if (selectedPage !== 'contacto') {
            setSlideOpacity(0);
          setTimeout(() => {
            setSelectedPage('contacto')
          }, 300);
          setTimeout(() => {
            setSlideOpacity(1);
          }, 500);
          }
        }}>1</a>
      <a className={selectedPage === 'instalaciones' ? 'selectedSlider' : ''} onClick={() => {
        if (selectedPage !== 'instalaciones') {
          setSlideOpacity(0);
        setTimeout(() => {
          setSelectedPage('instalaciones')
        }, 300);
        setTimeout(() => {
          setSlideOpacity(1);
        }, 500);
        }
      }}>2</a>
      </div>
      {selectedPage === 'contacto' && <div id="slide-1" style ={{
      opacity: slideOpacity,
    }} className='slide'>
      <h1 className='sectionTitle' style={{
          marginTop: '0',
        }}>CONTACTO</h1>
        <div>
        <div className='row'>
          <div className='column' style={{
            alignItems: 'center',
          }}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3358.6995636533297!2d-115.46140708461317!3d32.66743819687124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d7701a91ca6a15%3A0xa2d37b00f9e5814e!2sDra.%20Hebe%20Ng%20odontopediatra!5e0!3m2!1ses!2smx!4v1678941101197!5m2!1ses!2smx" style={{
              border: 0,
              borderRadius: '10px',
              width: '60vw',
              height: '40vh',
          }}allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          </div>
          <div className='row' style={{
          }}>
          <div className='column' style={{
            alignItems: 'flex-end',
          }}>
          <p style={{
            color: 'black',
            fontSize: '1.5rem',
          }}>
            Cristóbal Colón 1882 <br/>
            Nueva, 21100, Mexicali, B.C.<br/>
            686 554 9166<br/>
          </p>
          </div>
          <div className='column' style={{
            alignItems: 'flex-start',
            marginLeft: '2vw',
          }}>
          <p style={{
            color: 'black',
            fontSize: '1.5rem',
          }}>
            Horario de atención:<br/>
            Lunes a viernes 9-7<br/>
            Sábados 9-1
          </p>
          </div>
        </div>
      </div>
    </div>}
    {selectedPage === 'instalaciones' && <div id="slide-2" style ={{
      opacity: slideOpacity,
    }} className='slide'>
      <h1 className='sectionTitle'>NUESTRAS INSTALACIONES</h1>
        <div>
        <div className='row'>
        <div className='column' style={{
            alignItems: 'flex-end'
          }}>
          <div className='contacto'>
          <img
              src="/contacto/instalaciones_03.jpeg"
              alt="Instalaciones 03"
              className='imageCover'
            />
          </div>
          </div>
          <div className='column' style={{
            alignItems: 'center',
          }}>
            <div className='contacto'>
            <img
              src="/contacto/instalaciones_01.jpeg"
              alt="Instalaciones 01"
              className='imageCover'
            />
            </div>
          </div>
          <div className='column' style={{
            alignItems: 'flex-start',
          }}>
            <div className='contacto'>
          <img
              src="/contacto/instalaciones_02.jpeg"
              alt="Instalaciones 02"
              className='imageCover'
            />
            </div>
          </div>
        </div>
      </div>
      </div>}
    </Layout>
  )
}
