import Link from 'next/link'

const ProgramCard = ({ program }) => {
  const truncate = (text, limit = 100) => {
    return text.length > limit ? text.slice(0, limit) + "..." : text;
  }
  return (
    <div className="card h-full">
      <div className="h-48 bg-gray-300 flex items-center justify-center">
        {/* Placeholder image - replace with actual image */}
        <div className="text-gray-500">
          <div className="h-10 w-10 mx-auto bg-gray-400 rounded-full mb-2"></div>
          Program Image
        </div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold">{program.title}</h3>
          <span className="bg-primary-100 text-primary-800 text-xs font-semibold px-3 py-1 rounded-full">
            {program.category}
          </span>
        </div>
        <p className="text-gray-600 mb-4">{truncate(program.description, 100)}</p>
        <Link
          href={`/programs/${program.id}`}
          className="text-primary-600 hover:text-primary-800 font-medium inline-flex items-center"
        >
          Learn More →
        </Link>
      </div>
    </div>
  )
}

export default ProgramCard