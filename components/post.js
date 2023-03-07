import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/blog.module.css';
import { fomartDate } from '@/utils/helpers';

const Post = ({ post }) => {
  const { content, imagen, title, url, publishedAt } = post;
  return (
    <article>
      <Image
        src={imagen.data.attributes.formats.medium.url}
        alt={`Imagen blog ${title}`}
        width={600}
        height={300}
      />

      <div className={styles.contenido}>
        <h3>{title}</h3>

        <p className={styles.fecha}>{fomartDate(publishedAt)}</p>

        <p className={styles.resumen}>{content}</p>

        <Link href={`/blog/${url}`} className={styles.enlace}>
          Leer Post
        </Link>
      </div>
    </article>
  );
};

export default Post;
