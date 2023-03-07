import styles from '@/styles/curso.module.css';

const Course = ({ course }) => {
  const { content, title, imagen } = course;

  return (
    <section className={`${styles.curso} curso`}>
      <style jsx>
        {`
          .curso {
            background-image: linear-gradient(
                to right,
                rgb(0 0 0 / 0.65),
                rgb(0 0 0 / 0.7)
              ),
              url(${imagen.data.attributes.url});
          }
        `}
      </style>
      <div className={`container ${styles.grid}`}>
        <div className={styles.contenido}>
          <h2 className="heading">{title}</h2>
          <p>{content}</p>
        </div>
      </div>
    </section>
  );
};

export default Course;
