import Link from "next/link";

import Layout from "@/components/layout";

export default function Home() {
  return (
    <>
      <Layout
        title={'Inicio'}
        description={'Blog de música, venta de guitarra y más'}
      >
        <h1>Hola mundo desde Next.js</h1>
        <Link href="/nosotros">Nosotros</Link>
      </Layout>
    </>
  );
}
