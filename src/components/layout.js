import Head from 'next/head'
import Navbar from './navbar'
import Footer from './footer'
import Header from './header'
import Image from 'next/image'

export default function Layout({
  head_title,
  selected_tab,
  children,
}) {
  return (
    <div>
      <Head>
        <title>Dra. Hebe Ng{head_title ? ` - ${head_title}` : ''}</title>
        <meta name="description" content="boquitas sanas... niños felices®" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <div className='layoutBackground'>
    <Image
              src="/fondo.jpg"
              alt="fondo"
              fill
            />
      </div>
      <div style={{
      overflow: 'scroll'
    }}className='layout body'>
      <Navbar selected_tab={selected_tab}/>
      <Header style={{
          position: 'fixed',
          top: '0',
        }}/>
      <div className='children'>
        {children}
      </div>
      <div className='bottom-right'>
      <a href='tel:6865549166'>
      <Image
          src="/telefono.png"
          alt="Logo"
          width={70}
          height={70}/>
      </a>
      </div>
      <Footer/>
    </div>
    </div>
  )
}
