import Layout from '../../components/layout'

export default function Home() {
  return (
    <Layout head_title='Contacto' selected_tab='Contacto'>
        <h1 className='sectionTitle' style={{
          marginTop: '0',
        }}>CONTACTO</h1>
        <div>
        <div className='row'>
          <div className='column' style={{
            alignItems: 'flex-end',
            marginRight: '2.5vw',
          }}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3358.6995636533297!2d-115.46140708461317!3d32.66743819687124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d7701a91ca6a15%3A0xa2d37b00f9e5814e!2sDra.%20Hebe%20Ng%20odontopediatra!5e0!3m2!1ses!2smx!4v1678941101197!5m2!1ses!2smx" width="600" height="450" style={{
              border: 0,
              borderRadius: '10px',
              width: '27.5vw',
              height: '30.74vh',
          }}allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div className='column'>
          <p style={{
            color: 'black',
            fontSize: '1.5rem',
          }}>
            Cristóbal Colón 1882, Nueva, 21100<br/>
            Mexicali, B.C.<br/>
            686 554 9166<br/>
            Lunes a viernes 9-7<br/>
            Sábados 9-1
          </p>
          </div>
        </div>
      </div>
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
              className='imageFit'
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
              className='imageFit'
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
              className='imageFit'
            />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
