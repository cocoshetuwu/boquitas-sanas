import Layout from '../components/layout'
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Layout head_title='Inicio' selected_tab='Inicio'>
      <div>
        <div className='row'>
        <div className='column' style={{
            alignItems: 'flex-end'
          }}>
          <div className='inicioTopLeft'>
          <img
              src="/inicio/inicio_03.jpg"
              alt="Inicio 03"
              className='imageFit'
            />
            </div>
            <div className='inicioBottomLeft'>
            <img
              src="/inicio/inicio_04.jpg"
              alt="Inicio 04"
              className='imageFit'
            />
            </div>
          </div>
          <div className='column' style={{
            alignItems: 'center',
          }}>
            <div className='inicioTopCenter'>
            <img
              src="/inicio/inicio_05.jpg"
              alt="Inicio 05"
              className='imageFit'
            />
            </div>
            <div className='inicioBottomCenter'>
            <img
              src="/inicio/inicio_02.jpg"
              alt="Inicio 02"
              className='imageFit'
            />
            </div>
          </div>
          <div className='column' style={{
            alignItems: 'flex-start',
          }}>
            <div className='inicioTopRight'>
          <img
              src="/inicio/inicio_01.jpg"
              alt="Inicio 01"
              className='imageFit'
            />
            </div>
            <div className='inicioBottomRight'>
            <img
              src="/inicio/inicio_06.jpg"
              alt="Inicio 06"
              className='imageFit'
            />
            </div>
          </div>
        </div>
      </div>
      </Layout>
    </div>
  )
}
