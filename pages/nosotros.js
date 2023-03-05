import Link from "next/link";

import Layout from "@/components/layout";

const Nosotros = () => {
  return (
    <Layout
      title={'Nosotros'}
      description={'Dobre nosotros, GuitarLA, tienda de música'}
    >
      <Link href="/">Ir al inicio</Link>
    </Layout>
  )
}

export default Nosotros;