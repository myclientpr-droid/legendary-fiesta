import Link from 'next/link'

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-primary-700 to-primary-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container-custom relative z-10 section-padding">
        <div className="max-w-3xl">
          <h1 className="mb-6">
            Making a Difference in Communities Worldwide
          </h1>
          <p className="text-xl mb-8 opacity-90">
            We are a non-profit organization dedicated to creating lasting change through education, healthcare, and community development initiatives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/donate" className="btn-primary bg-white text-primary-700 hover:bg-gray-100">
              Donate Now
            </Link>
            <Link href="/about" className="btn-secondary bg-transparent border-2 border-white hover:bg-white hover:text-primary-700">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero