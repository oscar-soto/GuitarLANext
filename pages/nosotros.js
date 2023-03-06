import Layout from '@/components/layout';
import styles from '../styles/nosotros.module.css';
import Image from 'next/image';

const Nosotros = () => {
  return (
    <Layout
      title={'Nosotros'}
      description={'Sobre nosotros, GuitarLA, tienda de música'}
    >
      <main className="container">
        <h1 className="heading">Nosotros</h1>

        <div className={styles.content}>
          <Image
            src="/img/nosotros.jpg"
            alt="Imagen sobre nosotros"
            width={1000}
            height={800}
          />

          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo amet
              rem, sed perferendis nostrum consectetur fugit voluptatem repellat
              esse, molestiae facere reprehenderit dolore odit pariatur.
              Perferendis error veniam iure officia quidem, nobis autem nisi
              quas beatae. Id praesentium molestiae numquam atque nemo, magnam
              eveniet totam est, ipsam nesciunt nisi nulla.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo amet
              rem, sed perferendis nostrum consectetur fugit voluptatem repellat
              esse, molestiae facere reprehenderit dolore odit pariatur.
              Perferendis error veniam iure officia quidem, nobis autem nisi
              quas beatae. Id praesentium molestiae numquam atque nemo, magnam
              eveniet totam est, ipsam nesciunt nisi nulla.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Nosotros;
