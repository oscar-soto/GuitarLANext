import Layout from '@/components/layout';
import Guitar from '@/components/guitar';

const Tienda = ({ guitars }) => {
  return (
    <Layout
      title={'Tienda Virtual'}
      description={'Tienda Virtual, venta de guitaras, instrumentos, GuitarLA'}
    >
      <main className="container">
        <h1 className="heading">Nuestra Colección</h1>

        {guitars?.map((guitar) => (
          <Guitar guitar={guitar.attributes} key={guitar.id} />
        ))}
      </main>
    </Layout>
  );
};

export default Tienda;

// Show in the server
// export const getStaticProps = async () => {
//   const answer = await fetch(`${process.env.API_URL}/guitars?populate=guitar_imagen`)
//   const {data: guitars} = await answer.json()

//   return {
//     props: {
//       guitars
//     }
//   }
// }

export const getServerSideProps = async () => {
  const answer = await fetch(
    `${process.env.API_URL}/guitars?populate=guitar_imagen`
  );
  const { data: guitars } = await answer.json();

  return {
    props: {
      guitars,
    },
  };
};
