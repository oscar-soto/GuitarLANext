import Image from 'next/image';
import Link from 'next/link';
// import logo from '../public/img/logo.svg'

const Header = () => {
  return (
    <header>
      <div className="container">
        {/* <Image src={logo.src}  width={300} height={40} alt='Logo del GuitarLA'/> */}
        <Image src="/img/logo.svg"  width={300} height={40} alt='Logo del GuitarLA'/>
        <nav>
          <Link href="/">
            Inicio
          </Link>
          <Link href="/nosotros">
            Nosotros
          </Link>
          <Link href="/blog">
            Blog
          </Link>
          <Link href="/tienda">
            Tienda
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header;