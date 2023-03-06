import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/guitarras.module.css';

const Guitar = ({ guitar }) => {
  const { description, guitar_imagen, name, price, url } = guitar;

  return (
    <div className={styles.guitarra}>
      <Image
        src={guitar_imagen.data.attributes.formats.medium.url}
        alt={`Imagen de la guitarra ${name}`}
        width={600}
        height={400}
      />

      <div className={styles.contenido}>
        <h3>{name}</h3>
        <p className={styles.descripcion}>{description}</p>
        <p className={styles.precio}>${price}</p>
        <Link href={`/guitarras/${url}`} className={styles.enlace}>
          Ver producto
        </Link>
      </div>
    </div>
  );
};

export default Guitar;
