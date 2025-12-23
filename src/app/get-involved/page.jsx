'use client'

import { useState } from 'react'
import Link from 'next/link'

const volunteerRoles = [
  {
    id: 1,
    title: 'Mentorship Program',
    description: 'Guide and support scholarship recipients through their academic journey',
    timeCommitment: '2-4 hours/week',
    location: 'Remote or Local',
    skills: ['Education', 'Counseling', 'Academic Advising'],
    commitment: '1 year minimum',
    isOpen: true, // if the role availabe or not, to display role card to applicable or not
  },
  {
    id: 2,
    title: 'Application Reviewer',
    description: 'Evaluate scholarship applications and help select deserving candidates',
    timeCommitment: '10-15 hours/month',
    location: 'Remote',
    skills: ['Evaluation', 'Critical Thinking', 'Fair Judgment'],
    commitment: 'Seasonal (3-4 months)',
    isOpen: true,
  },
  {
    id: 3,
    title: 'Event Volunteer',
    description: 'Help organize and run our scholarship award ceremonies and fundraising events',
    timeCommitment: 'Variable, event-based',
    location: 'Local (various cities)',
    skills: ['Event Planning', 'Logistics', 'Teamwork'],
    commitment: 'Per event',
    isOpen: false,
  },
  {
    id: 4,
    title: 'Social Media Ambassador',
    description: 'Share our mission and amplify student success stories on social media',
    timeCommitment: '3-5 hours/week',
    location: 'Remote',
    skills: ['Social Media', 'Content Creation', 'Marketing'],
    commitment: '6 months minimum',
    isOpen: true,
  },
  {
    id: 5,
    title: 'Fundraising Coordinator',
    description: 'Help organize local fundraising campaigns and donor outreach',
    timeCommitment: '5-10 hours/week',
    location: 'Remote or Local',
    skills: ['Fundraising', 'Communication', 'Networking'],
    commitment: '1 year minimum',
    isOpen: true,
  },
  {
    id: 6,
    title: 'Career Workshop Facilitator',
    description: 'Conduct workshops on resume building, interview skills, and career planning',
    timeCommitment: '4-8 hours/month',
    location: 'Remote or Local',
    skills: ['Career Counseling', 'Public Speaking', 'Workshop Facilitation'],
    commitment: '6 months minimum',
    isOpen: false,
  }
]

const partnershipTypes = [
  {
    type: 'Corporate Partnership',
    description: 'Sponsor scholarships, provide internships, or support through matching gifts',
    benefits: [
      'Tax benefits',
      'Employee engagement opportunities',
      'Brand association with education',
      'Impact reports'
    ]
  },
  {
    type: 'University Partnership',
    description: 'Collaborate on research, host student events, or create joint programs',
    benefits: [
      'Access to talented students',
      'Research collaboration',
      'Community outreach',
      'Recruitment opportunities'
    ]
  },
  {
    type: 'Community Organization',
    description: 'Co-host events, share resources, or collaborate on local initiatives',
    benefits: [
      'Expanded reach',
      'Shared resources',
      'Community impact',
      'Networking opportunities'
    ]
  }
]

export default function GetInvolvedPage() {
  const [volunteerForm, setVolunteerForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    role: '',
    experience: '',
    availability: '',
    motivation: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setVolunteerForm(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmitVolunteer = (e) => {
  e.preventDefault();
  const { firstName, lastName, email, phone, role, experience, availability, motivation } = volunteerForm;

  const subject = encodeURIComponent(`Volunteer Application: ${role}`);
  const body = encodeURIComponent(
    `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\nRole: ${role}\nAvailability: ${availability}\nExperience: ${experience}\nMotivation: ${motivation}`
  );

  window.location.href = `mailto:ashmrk262@gmail.com?subject=${subject}&body=${body}`;

  // Optionally reset form
  setVolunteerForm({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    role: '',
    experience: '',
    availability: '',
    motivation: ''
  });
};

  return (
    <div className="section-padding">
      <div className="container-custom max-w-6xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="mb-6">Get Involved</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our mission to make higher education accessible to all. Whether you volunteer, partner with us, or spread the word, your contribution makes a difference.
          </p>
        </div>

        {/* Ways to Get Involved */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Ways to Get Involved</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Volunteer Card */}
            <div className="card text-center p-8 hover:shadow-xl transition duration-300">
              <div className="h-16 w-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Volunteer</h3>
              <p className="text-gray-600 mb-6">
                Share your skills and time to support our scholars and programs
              </p>
              <ul className="text-left space-y-2 mb-8">
                <li className="flex items-center">
                  <span className="text-primary-600 mr-2">✓</span>
                  <span>Flexible time commitments</span>
                </li>
                <li className="flex items-center">
                  <span className="text-primary-600 mr-2">✓</span>
                  <span>Remote and in-person opportunities</span>
                </li>
                <li className="flex items-center">
                  <span className="text-primary-600 mr-2">✓</span>
                  <span>Training and support provided</span>
                </li>
              </ul>
              <a href="#volunteer" className="btn-primary block text-center">
                Become a Volunteer
              </a>
            </div>

            {/* Partner Card */}
            <div className="card text-center p-8 hover:shadow-xl transition duration-300">
              <div className="h-16 w-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Partner With Us</h3>
              <p className="text-gray-600 mb-6">
                Collaborate with us as a corporate, university, or community partner
              </p>
              <ul className="text-left space-y-2 mb-8">
                <li className="flex items-center">
                  <span className="text-primary-600 mr-2">✓</span>
                  <span>Corporate sponsorship opportunities</span>
                </li>
                <li className="flex items-center">
                  <span className="text-primary-600 mr-2">✓</span>
                  <span>University collaborations</span>
                </li>
                <li className="flex items-center">
                  <span className="text-primary-600 mr-2">✓</span>
                  <span>Community organization partnerships</span>
                </li>
              </ul>
              <a href="#partnership" className="btn-primary block text-center">
                Explore Partnerships
              </a>
            </div>

            {/* Advocate Card */}
            <div className="card text-center p-8 hover:shadow-xl transition duration-300">
              <div className="h-16 w-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">📢</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Become an Advocate</h3>
              <p className="text-gray-600 mb-6">
                Help spread awareness about educational equity and our mission
              </p>
              <ul className="text-left space-y-2 mb-8">
                <li className="flex items-center">
                  <span className="text-primary-600 mr-2">✓</span>
                  <span>Share on social media</span>
                </li>
                <li className="flex items-center">
                  <span className="text-primary-600 mr-2">✓</span>
                  <span>Host awareness events</span>
                </li>
                <li className="flex items-center">
                  <span className="text-primary-600 mr-2">✓</span>
                  <span>Connect us with your network</span>
                </li>
              </ul>
              <a href="#advocate" className="btn-primary block text-center">
                Join as Advocate
              </a>
            </div>
          </div>
        </div>

        {/* Volunteer Opportunities Section */}
        <section id="volunteer" className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Volunteer Opportunities</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We offer various volunteer roles that match different skills, interests, and time commitments. Join our community of passionate individuals making a difference.
            </p>
          </div>

          {/* Volunteer Roles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {volunteerRoles.map((role) => (
              <div key={role.id} className="card p-6">
                <h3 className="text-xl font-bold mb-3">{role.title}</h3>
                <p className="text-gray-600 mb-4">{role.description}</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <span className="text-gray-500 w-32">Time:</span>
                    <span className="font-medium">{role.timeCommitment}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-500 w-32">Location:</span>
                    <span className="font-medium">{role.location}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-500 w-32">Commitment:</span>
                    <span className="font-medium">{role.commitment}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Desired Skills:</h4>
                  <div className="flex flex-wrap gap-2">
                    {role.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <button
  onClick={() => {
    const subject = encodeURIComponent(`Volunteer Application: ${role.title}`);
    const body = encodeURIComponent(
      `Hello,\n\nI am interested in applying for the role of "${role.title}".\n\nPlease let me know the next steps.\n\nThank you.`
    );
    window.location.href = `mailto:ashmrk262@gmail.com?subject=${subject}&body=${body}`;
  }}
  className="btn-primary w-full"
>
  Apply for This Role
</button>
              </div>
            ))}
          </div>

          {/* Volunteer Application Form */}
          <div className="card p-8">
            <h3 className="text-2xl font-bold mb-6">Volunteer Application Form</h3>
            
            <form onSubmit={handleSubmitVolunteer}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={volunteerForm.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={volunteerForm.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={volunteerForm.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={volunteerForm.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Volunteer Role *
                </label>
                <select
                  name="role"
                  value={volunteerForm.role}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="">Select a role</option>
                  {volunteerRoles.map((role) => (
                    <option key={role.id} value={role.title}>
                      {role.title}
                    </option>
                  ))}
                  <option value="other">Other (specify in motivation)</option>
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Relevant Experience *
                </label>
                <textarea
                  name="experience"
                  value={volunteerForm.experience}
                  onChange={handleInputChange}
                  required
                  rows="3"
                  placeholder="Describe your relevant experience, skills, or background..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                ></textarea>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Weekly Availability *
                </label>
                <input
                  type="text"
                  name="availability"
                  value={volunteerForm.availability}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g., 5-10 hours/week, evenings only, weekends, etc."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>

              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Why do you want to volunteer with Aurbina Scholars Hub? *
                </label>
                <textarea
                  name="motivation"
                  value={volunteerForm.motivation}
                  onChange={handleInputChange}
                  required
                  rows="4"
                  placeholder="Tell us what motivates you and why you'd be a good fit..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                ></textarea>
              </div>

              <button type="submit" className="btn-primary w-full py-3 text-lg">
                Submit Application
              </button>
              
              <p className="text-sm text-gray-500 mt-4 text-center">
                We'll contact you within 5-7 business days after reviewing your application.
              </p>
            </form>
          </div>
        </section>

        {/* Partnership Section */}
        <section id="partnership" className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Partnership Opportunities</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Join forces with us to create greater impact. We collaborate with corporations, universities, and community organizations to expand educational opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {partnershipTypes.map((partnership, index) => (
              <div key={index} className="card p-8">
                <h3 className="text-xl font-bold mb-4">{partnership.type}</h3>
                <p className="text-gray-600 mb-6">{partnership.description}</p>
                
                <h4 className="font-semibold mb-3">Benefits Include:</h4>
                <ul className="space-y-2 mb-8">
                  {partnership.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-primary-600 mr-2 mt-1">✓</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  href="/contact"
                  className="btn-secondary w-full block text-center"
                >
                  Discuss Partnership
                </Link>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-primary-500 to-primary-700 rounded-2xl p-8 text-white">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-2xl font-bold mb-4">Corporate Matching Gifts</h3>
              <p className="mb-6 opacity-90">
                Many companies match employee donations to educational nonprofits. Check if your employer has a matching gift program and double your impact!
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="/donate"
                  className="bg-white text-primary-700 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition duration-300"
                >
                  Make a Donation
                </a>
                <a
                  href="/contact"
                  className="bg-transparent border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-primary-700 transition duration-300"
                >
                  Learn About Matching
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Advocate Section */}
        <section id="advocate" className="mb-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Become an Advocate</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              You don't need to volunteer time or donate money to make a difference. Help us spread the word about educational equity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card p-8">
              <h3 className="text-xl font-bold mb-4">Social Media Toolkit</h3>
              <p className="text-gray-600 mb-6">
                Download our social media toolkit with pre-written posts, graphics, and hashtags to share our mission with your network.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <span className="text-primary-600 mr-3">📱</span>
                  <span>Instagram stories and posts</span>
                </div>
                <div className="flex items-center">
                  <span className="text-primary-600 mr-3">🐦</span>
                  <span>Twitter/X posts and threads</span>
                </div>
                <div className="flex items-center">
                  <span className="text-primary-600 mr-3">💼</span>
                  <span>LinkedIn articles and posts</span>
                </div>
                <div className="flex items-center">
                  <span className="text-primary-600 mr-3">📧</span>
                  <span>Email templates for your network</span>
                </div>
              </div>
              <button className="btn-primary w-full">
                Download Toolkit
              </button>
            </div>

            <div className="card p-8">
              <h3 className="text-xl font-bold mb-4">Host an Awareness Event</h3>
              <p className="text-gray-600 mb-6">
                Organize a virtual or in-person event to raise awareness about educational equity and our scholarship programs.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <span className="text-primary-600 mr-3">🎓</span>
                  <span>Information sessions at schools/colleges</span>
                </div>
                <div className="flex items-center">
                  <span className="text-primary-600 mr-3">💻</span>
                  <span>Virtual webinars and panels</span>
                </div>
                <div className="flex items-center">
                  <span className="text-primary-600 mr-3">🏢</span>
                  <span>Workplace giving presentations</span>
                </div>
                <div className="flex items-center">
                  <span className="text-primary-600 mr-3">🤝</span>
                  <span>Community organization meetings</span>
                </div>
              </div>
              <Link
                href="/contact"
                className="btn-secondary w-full block text-center"
              >
                Request Event Support
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Preview */}
        <div className="mt-16 p-8 bg-gray-50 rounded-2xl">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Have Questions About Getting Involved?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Check our FAQ section or contact our volunteer coordinator for more information.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/faq"
                className="btn-primary"
              >
                Visit FAQ
              </Link>
              <Link
                href="/contact"
                className="btn-secondary"
              >
                Contact Volunteer Coordinator
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}