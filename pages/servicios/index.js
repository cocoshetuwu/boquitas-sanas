import {useState, useEffect} from 'react';
import Layout from '../../components/layout';

export default function Servicios() {
  const [selectedPage, setSelectedPage] = useState('servicios');
  const [slideOpacity, setSlideOpacity] = useState(1);
  const [imageIndex, setImageIndex] = useState(1);
  const [imageOpacity, setImageOpacity] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageOpacity(0);
      setTimeout(() => {
        setImageIndex((prev) => {
          if (prev === 3) {
            return 1;
          }
          return prev + 1;
        })
      }, 600);
      setTimeout(() => {
        setImageOpacity(1);
      }, 700);
    }, 5000);
    return () => clearInterval(interval);
  }, [imageIndex]);


  return (
    <Layout head_title='Servicios' selected_tab='Servicios'>
      <div className='slider'>
        <a className={selectedPage === 'servicios' ? 'selectedSlider' : ''} onClick={() => {
          if (selectedPage !== 'servicios') {
            setSlideOpacity(0);
          setTimeout(() => {
            setSelectedPage('servicios')
            setImageIndex(1);
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
          setImageIndex(1);
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
            marginLeft: '16.67vw',
            marginRight: '12.5vw',
          }}>
            Nosotros le brindaremos la atención necesaria a sus pequeños de modo de hacer de la salud bucal un proyecto de vida; Al proveerle a sus hijos las herramientas necesarias para que aprendan a cuidar de su boca de acuerdo a su edad.
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
              src={`/servicios/servicios_0${imageIndex}.png`}
              alt={`Sevicios 0${imageIndex}`}
              className='imageCover imageAppear'
              style={{
                opacity: imageOpacity,
              }}
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
            marginLeft: '16.67vw',
            marginRight: '12.5vw',
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
        <div className='otrosServicios'>
        <img
              src={`/servicios/otros_servicios_0${imageIndex}.jpg`}
              alt={`Otros Sevicios 0${imageIndex}`}
              className='imageCover imageAppear'
              style={{
                opacity: imageOpacity,
              }}
            />
            </div>
      </div>
    </div>}
            
    </Layout>
  )
}
