import Head from 'next/head'
import Navbar from './navbar'
import Footer from './footer'
import Header from './header'

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
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <div className='layoutBackground'>
    {/* <img
              src="/fondo.jpg"
              alt="fondo"
              className='background'
            /> */}
      </div>
      <div style={{
      overflowY: 'scroll',
      overflowX: 'scroll'
    }}className='layout body'>
      <Navbar selected_tab={selected_tab}/>
      <Header style={{
          position: 'fixed',
          top: '0',
        }}/>
      <div className='children'>
        {children}
      </div>
      <Footer/>
    </div>
    </div>
  )
}
