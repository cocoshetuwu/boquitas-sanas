import {useState} from 'react';
import Layout from '../../components/layout';

export default function Home() {
  const [selectedPage, setSelectedPage] = useState('servicios');
  const [slideOpacity, setSlideOpacity] = useState(1);

  return (
    <Layout head_title='Servicios' selected_tab='Servicios'>
      <div className='slider'>
        <a className={selectedPage === 'servicios' ? 'selectedSlider' : ''} onClick={() => {
          if (selectedPage !== 'servicios') {
            setSlideOpacity(0);
          setTimeout(() => {
            setSelectedPage('servicios')
          }, 300);
          setTimeout(() => {
            setSlideOpacity(1);
          }, 500);
          }
        }}>1</a>
      <a className={selectedPage === 'otros_servicios' ? 'selectedSlider' : ''} onClick={() => {
        if (selectedPage !== 'otros_servicios') {
          setSlideOpacity(0);
        setTimeout(() => {
          setSelectedPage('otros_servicios')
        }, 300);
        setTimeout(() => {
          setSlideOpacity(1);
        }, 500);
        }
      }}>2</a>
      </div>
    {selectedPage === 'servicios' && <div id="slide-1" style ={{
      opacity: slideOpacity,
    }} className='slide'>
    <h1 className='sectionTitle' style={{
          marginTop: '0',
        }}>SERVICIOS</h1>
      
        <div className='row'>
          <div className='column'>
          <p style={{
            color: 'black',
            fontSize: '1.5rem',
            alignItems: 'center',
            marginLeft: '20rem',
            marginRight: '15rem',
          }}>
            Nosotros le brindaremos la atención necesaria a sus pequeños de modo de hacer de la salud bucal un proyecto de vida; Al Proveerle a sus hijos las herramientas necesarias para que aprendan a cuidar de su boca.
          </p>
          </div>
        </div>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '0',
          // marginLeft: '10rem',
          marginRight: '3rem',
      }}>
        <div className='serviciosPicContainer1'>
        <img
              src="/servicios/servicios_01.png"
              alt="Sevicios 01"
              className='imageFit'
            />
            </div>
            <div className='serviciosPicContainer3'>
            <img
              src="/servicios/servicios_03.png"
              alt="Servicios 03"
              className='imageFit'
            />
            </div>
            <div className='serviciosPicContainer2'>
          <img
              src="/servicios/servicios_02.png"
              alt="Servicios 02"
              className='imageFit'
            />
      </div>
      </div>
    </div>}
    {selectedPage === 'otros_servicios' && <div id="slide-2" style ={{
      opacity: slideOpacity,
    }} className='slide'>
    <h1 className='sectionTitle' style={{
          marginTop: '0',
        }}>OTROS SERVICIOS</h1>
      
        <div className='row'>
          <div className='column'>
          <p style={{
            color: 'black',
            fontSize: '1.5rem',
            alignItems: 'center',
            marginLeft: '20rem',
            marginRight: '15rem',
          }}>
            Contamos también con servicio de odontología general y especializada para adulto y adulto mayor y/o adultos con necesidades especiales. Los mejores especialistas de cada área de la salud bucal para brindarle apoyo a todas sus necesidades.
          </p>
          </div>
        </div>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '0',
          // marginLeft: '10rem',
          marginRight: '3rem',
      }}>
        <div className='otrosServiciosBorderLeft'>
            <img
              src="/servicios/otros_servicios_03.jpg"
              alt="Otros Servicios 03"
              className='imageFit'
            />
            </div>
        <div className='otrosServicios'>
        <img
              src="/servicios/otros_servicios_01.jpg"
              alt="Otros Sevicios 01"
              className='imageFit'
            />
            </div>
            <div className='otrosServiciosBorderRight'>
          <img
              src="/servicios/otros_servicios_02.jpg"
              alt="Otros Servicios 02"
              className='imageFit'
            />
      </div>
      </div>
    </div>}
            
    </Layout>
  )
}
