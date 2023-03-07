import Layout from "@/components/layout";
import Link from "next/link";

const Page404 = () => {
  return (
    <Layout
      title="Página no encontrada"
    >
      <p className="error">Página no encontrada</p>
      
      <Link href='/' className="error-enlace">
        Ir a inicio
      </Link>
    </Layout>
  )
}

export default Page404;