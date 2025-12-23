import Link from 'next/link'

const CallToAction = () => {
  return (
    <section className="section-padding bg-primary-700 text-white">
      <div className="container-custom text-center">
        <h2 className="mb-6">Join Us in Making a Difference</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
          Your support can help transform lives and create lasting change in communities around the world.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link href="/donate" className="btn-primary bg-white text-primary-700 hover:bg-gray-100">
            Make a Donation
          </Link>
          <Link href="/get-involved" className="btn-secondary bg-transparent border-2 border-white hover:bg-white hover:text-primary-700">
            Volunteer Now
          </Link>
          <Link href="/contact" className="btn-secondary bg-transparent border-2 border-white hover:bg-white hover:text-primary-700">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CallToAction