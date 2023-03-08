import Layout from '@/components/layout';
import Image from 'next/image';
import styles from '@/styles/guitarras.module.css';
import { useState } from 'react';

const Product = ({ guitar, addCart }) => {
  const { name, description, guitar_imagen, price } = guitar[0].attributes;

  const [qty, setQty] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (qty < 1) {
      alert('Cantidad no valida');
      return;
    }

    // Built a object
    const guitarSelected = {
      id: guitar[0].id,
      image: guitar_imagen.data.attributes.url,
      name,
      price,
      qty
    }

    // passing the information to context
    addCart(guitarSelected)
  };

  return (
    <Layout title={`Guitar ${name}`}>
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

          <form onSubmit={handleSubmit} className={styles.formulario}>
            <label htmlFor="qty">Cantidad:</label>

            <select onChange={(e) => setQty(Number(e.target.value))} id="qty">
              <option value="0">-- Seleccione --</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>

            <input type="submit" value="Agregar al carrito" />
          </form>
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
