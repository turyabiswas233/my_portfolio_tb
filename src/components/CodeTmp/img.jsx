export default function Img({ src, title }) {
  return (
    <img
      className="aspect-video mx-auto rounded-md mb-5 scale-100 transition-transform duration-700 group-hover:scale-105 "
      src={src}
      alt={title}
      width={500}
    />
  );
}
