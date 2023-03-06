import Image from 'next/image';
import Link from 'next/link';

const Guitar = ({ guitar }) => {
  const { description, guitar_imagen, name, price, url } = guitar;

  return (
    <div>
      <Image
        src={guitar_imagen.data.attributes.formats.medium.url}
        alt={`Imagen de la guitarra ${name}`}
        width={600}
        height={400}
      />

      <div>
        <h3>{name}</h3>
        <p>{description}</p>
        <p>${price}</p>
        <Link href={`/guitarras/${url}`}>
          Ver producto
        </Link>
      </div>
    </div>
  );
};

export default Guitar;
