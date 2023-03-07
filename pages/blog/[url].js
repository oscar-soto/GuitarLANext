import Layout from '@/components/layout';
import Image from 'next/image';
import styles from '@/styles/blog.module.css';
import { fomartDate } from '@/utils/helpers';

const Post = ({ post }) => {
  const { title, content, imagen, publishedAt } = post[0].attributes;
  return (
    <Layout title={title}>
      <article className={`${styles.post} ${styles['mt-3']}`}>
        <Image
          src={imagen.data.attributes.url}
          alt={`Imagen blog ${title}`}
          width={1000}
          height={300}
        />

        <div className={styles.contenido}>
          <h3>{title}</h3>

          <p className={styles.fecha}>{fomartDate(publishedAt)}</p>

          <p className={styles.resumen}>{content}</p>
        </div>
      </article>
    </Layout>
  );
};

export default Post;

export const getServerSideProps = async ({ query: { url } }) => {
  const answer = await fetch(
    `${process.env.API_URL}/posts?filters[url]=${url}&populate=imagen`
  );
  const { data: post } = await answer.json();

  return {
    props: {
      post,
    },
  };
};
