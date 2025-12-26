import Link from "next/link";
import Image from "next/image";

const ProgramCard = ({ program }) => {
  const truncated = (text, limit = 100) => {
    return text?.length > limit ? text?.slice(0, limit) + "..." : text;
  }
  return (
    <div className="group bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col">
      
      {/* Image */}
      <div className="relative w-full h-52 overflow-hidden bg-gray-100">
        <Image
          src={program.image}
          alt={program.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        
        {/* Category */}
        <span className="inline-block mb-2 text-xs font-semibold text-primary-700 bg-primary-100 px-3 py-1 rounded-full w-fit">
          {program.category}
        </span>

        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-900 leading-snug mb-2">
          {program.title}
        </h3>

        {/* Short description */}
        <p className="text-sm text-gray-600 line-clamp-3 mb-4">
          {truncated(program.shortDescription)}
        </p>

        {/* CTA */}
        <Link
          href={`/programs/${program.slug}`}
          className="mt-auto inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-800 transition"
        >
          Learn more →
        </Link>
      </div>
    </div>
  );
};

export default ProgramCard;