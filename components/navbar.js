import Link from 'next/link'

export default function Navbar({
  selected_tab,
}) {

  const menuKeys = [
    'Inicio',
    '¿Quienes Somos?',
    'Servicios',
    'Contacto',
  ]

  const menuRoutes = {
    'Inicio': '/',
    '¿Quienes Somos?': '/quienes-somos',
    'Servicios': '/servicios',
    'Contacto': '/contacto',
  }

  return (
    <div className='navbar'>
      <ul style={{
        // display: 'inline-block',
      }}> 
        {menuKeys.map((key) => {
          if (key === selected_tab) {
            return <li href={menuRoutes[key]} key={key} className={`tab selected`}>
              <Link className='selected' href={menuRoutes[key]}>{key.toUpperCase()}</Link>
            </li>
            } else {
            return <li href={menuRoutes[key]} key={key} className={`tab`}>
              <Link href={menuRoutes[key]}>{key.toUpperCase()}</Link>
            </li>
            }
        })}
      </ul>
      {/* <div className='selectedBottom'></div> */}
    </div>
      )
}
