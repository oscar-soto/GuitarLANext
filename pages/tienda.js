import Layout from '@/components/layout';
import ListGuitar from '@/components/list-guitar';

const Tienda = () => {
  return (
    <Layout
      title={'Tienda Virtual'}
      description={'Tienda Virtual, venta de guitaras, instrumentos, GuitarLA'}
    >
      <main className="container">
        <h1 className="heading">Nuestra Colección</h1>

        <ListGuitar 
          
        />
      </main>
    </Layout>
  );
};

export default Tienda;
