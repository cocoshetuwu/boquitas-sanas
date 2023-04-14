import { useEffect, useState } from 'react';
import Layout from '../components/layout'

export default function Home() {
  const [imagesOpacities, setImagesOpacities] = useState({
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
  })

  useEffect(() => {
    Object.keys(imagesOpacities).forEach((key) => {
      setTimeout(() => {
        setImagesOpacities((prev) => ({
          ...prev,
          [key]: 1,
        }))
      }, 700 * key)
    });

  }, [])

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
              className='imageFit imageAppear'
              style={{
                opacity: imagesOpacities[1],
              }}
            />
            </div>
            <div className='inicioBottomLeft'>
            <img
              src="/inicio/inicio_04.jpg"
              alt="Inicio 04"
              className='imageFit imageAppear'
              style={{
                opacity: imagesOpacities[2],
              }}
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
              className='imageFit imageAppear'
              style={{
                opacity: imagesOpacities[3],
              }}
            />
            </div>
            <div className='inicioBottomCenter'>
            <img
              src="/inicio/inicio_02.jpg"
              alt="Inicio 02"
              className='imageFit imageAppear'
              style={{
                opacity: imagesOpacities[4],
              }}
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
              className='imageFit imageAppear'
              style={{
                opacity: imagesOpacities[5],
              }}
            />
            </div>
            <div className='inicioBottomRight'>
            <img
              src="/inicio/inicio_06.jpg"
              alt="Inicio 06"
              className='imageFit imageAppear'
              style={{
                opacity: imagesOpacities[6],
              }}
            />
            </div>
          </div>
        </div>
      </div>
      </Layout>
    </div>
  )
}
