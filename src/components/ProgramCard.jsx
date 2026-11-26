import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const ProgramCard = ({ program }) => {
  const truncated = (text, limit = 100) => {
    return text?.length > limit ? text?.slice(0, limit) + "..." : text;
  }
  return (
    <div className="group card flex h-full flex-col">

      {/* Image */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
        <Image
          src={program.image}
          alt={program.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
        {program.category && (
          <span className="badge absolute left-4 top-4 bg-white/85 text-primary-700 shadow-sm">
            {program.category}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">

        {/* Title */}
        <h3 className="text-lg font-semibold text-slate-900 leading-snug">
          {program.title}
        </h3>

        {/* Short description */}
        <div className="mt-2 mb-4 text-sm text-slate-600 line-clamp-3">
          {truncated(program.shortDescription)}
        </div>

        {/* CTA */}
        <Link
          href={`/programs/${program.slug}`}
          className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-primary-600 transition hover:text-primary-700"
        >
          Learn more
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
        </Link>
      </div>
    </div>
  );
};

export default ProgramCard;
