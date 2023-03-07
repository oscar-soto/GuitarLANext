import Image from 'next/image';
import Link from 'next/link';

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

      <div>
        <h3>{title}</h3>
        <p>{publishedAt}</p>
        <p>{content}</p>
        <Link href={url}>Leer Post</Link>
      </div>
    </article>
  );
};

export default Post;
