export default function ProjectCard({ image, title, description, link }) {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 mb-5">
      <img
        src={image}
        alt={title}
        className="w-full h-60 object-cover rounded-2xl mt-7 mx-auto px-7"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-yellow-200 hover:underline"
        >
          View Project
        </a>
      </div>
    </div>
  );
}
