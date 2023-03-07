import Layout from '@/components/layout';
import Guitar from '@/components/guitar';
import Course from '@/components/course';
import Post from '@/components/post';
import styles from '../styles/grid.module.css';

export default function Home({ guitars, posts, course }) {
  return (
    <>
      <Layout
        title={'Inicio'}
        description={'Blog de música, venta de guitarra y más'}
      >
        <main className="container">
          <h1 className="heading">Nuestra colección</h1>

          <div className={styles.grid}>
            {guitars?.map((guitar) => (
              <Guitar guitar={guitar.attributes} key={guitar.id} />
            ))}
          </div>
        </main>

        <Course course={course.attributes} />

        <section className="container">
          <h2 className="heading">Blog</h2>

          <div className={styles.grid}>
            {posts.map((post) => (
              <Post key={post.id} post={post.attributes} />
            ))}
          </div>
        </section>
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const urlGuitars = `${process.env.API_URL}/guitars?populate=guitar_imagen`;
  const urlPosts = `${process.env.API_URL}/posts?populate=imagen`;
  const urlCourse = `${process.env.API_URL}/course?populate=imagen`;

  const [resGuitars, resPosts, resCourse] = await Promise.all([
    fetch(urlGuitars),
    fetch(urlPosts),
    fetch(urlCourse),
  ]);

  const [{ data: guitars }, { data: posts }, { data: course }] =
    await Promise.all([resGuitars.json(), resPosts.json(), resCourse.json()]);

  return {
    props: {
      guitars,
      posts,
      course,
    },
  };
};
