import Guitar from '@/components/guitar';
import Layout from '@/components/layout';
import Post from '@/components/post';
import styles from '../styles/grid.module.css';

export default function Home({ guitars, posts }) {
  return (
    <>
      <Layout
        title={'Inicio'}
        description={'Blog de música, venta de guitarra y más'}
      >
        <main>
          <section className="container">
            <h1 className="heading">Nuestra colección</h1>

            <div className={styles.grid}>
              {guitars?.map((guitar) => (
                <Guitar guitar={guitar.attributes} key={guitar.id} />
              ))}
            </div>
          </section>

          <section className="container">
            <h2 className="heading">Blog</h2>

            <div className={styles.grid}>
              {posts.map((post) => (
                <Post key={post.id} post={post.attributes} />
              ))}
            </div>
          </section>
        </main>
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const urlGuitars = `${process.env.API_URL}/guitars?populate=guitar_imagen`;
  const urlPosts = `${process.env.API_URL}/posts?populate=imagen`;

  const [resGuitars, resPosts] = await Promise.all([
    fetch(urlGuitars),
    fetch(urlPosts),
  ]);

  const [{ data: guitars }, { data: posts }] = await Promise.all([
    resGuitars.json(),
    resPosts.json(),
  ]);

  return {
    props: {
      guitars,
      posts,
    },
  };
};
