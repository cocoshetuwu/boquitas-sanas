import Image from 'next/image'

export default function Footer() {
    return (
    <div style={{
        display: 'flex',
        margin: '.3em 0 0 1em'
    }}>
        <Image
        src="/logo.png"
        alt="Logo"
        width={100}
        height={120}/>
        <div>
            <p style={{
                marginBottom: 0,
            color: 'black',
        }}>Dra. Hebe Ng</p>
            <p style={{
                margin: 0,
            color: 'red',
        }}>boquitas sanas... niños felices®</p>
        </div>
    </div>
    )
}
