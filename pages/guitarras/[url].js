import Layout from '@/components/layout';
import Image from 'next/image';
import styles from '@/styles/guitarras.module.css';

const Product = ({ guitar }) => {
  const { name, description, guitar_imagen, price } = guitar[0].attributes;
  return (
    <Layout
      title={`Guitar ${name}`}
    >
      <div className={styles.guitarra}>
        <Image
          src={guitar_imagen.data.attributes.url}
          alt={`Imagen de la guitarra ${name}`}
          width={600}
          height={400}
        />

        <div className={styles.contenido}>
          <h3>{name}</h3>
          <p className={styles.descripcion}>{description}</p>
          <p className={styles.precio}>${price}</p>
        </div>
      </div>
    </Layout>
  );
};

export default Product;

// is obligatory if you have dynamic path
export const getStaticPaths = async () => {
  const answer = await fetch(`${process.env.API_URL}/guitars`);
  const { data } = await answer.json();

  const paths = data.map((guitar) => ({
    params: {
      url: guitar.attributes.url,
    },
  }));

  return {
    paths,
    fallback: false, // Generate page 404
  };
};

export const getStaticProps = async ({ params: { url } }) => {
  const answer = await fetch(
    `${process.env.API_URL}/guitars?filters[url]=${url}&populate=guitar_imagen`
  );
  const { data: guitar } = await answer.json();

  return {
    props: {
      guitar,
    },
  };
};

// export const getServerSideProps = async ({query: {url}}) => {
//   const answer = await fetch(
//     `${process.env.API_URL}/guitars?filters[url]=${url}&populate=guitar_imagen`
//   );
//   const { data: guitar } = await answer.json();

//   return {
//     props: {
//       guitar
//     },
//   };
// };
