'use client'

import { useState } from 'react'
import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import PageHeader from '@/components/PageHeader'
import { OFFICES, ORGANIZATION } from '@/lib/config/site'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
  e.preventDefault();

  const { name, email, subject, message } = formData;

  // Construct mailto link
  const mailtoLink = `mailto:${ORGANIZATION.emails[0]}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\n\n${message}`
  )}`;

  // Open default email client
  window.location.href = mailtoLink;

  // Optionally reset form
  setFormData({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
};

  return (
    <>
      <PageHeader
        eyebrow="We're here to help"
        title="Contact Us"
        description="Questions about our programs, volunteering, partnerships or donations? Send us a message and our team will get back to you."
      />

      <div className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Contact Form */}
            <div className="glass p-6 sm:p-8">
              <h2 className="mb-6 text-2xl text-slate-900">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-700">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="input-field"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="input-field"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="mb-2 block text-sm font-medium text-slate-700">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="input-field"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="donation">Donation Question</option>
                    <option value="volunteer">Volunteer Opportunity</option>
                    <option value="partnership">Partnership Inquiry</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-700">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="input-field"
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary w-full py-3">
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="glass p-6 sm:p-8">
              <h2 className="mb-6 text-2xl text-slate-900">Get in touch</h2>

              <ul className="space-y-6">
                <li className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-700 ring-1 ring-primary-100">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-slate-900">Our Location</h3>
                    <div className="mt-1 space-y-1 text-slate-600">
                      {OFFICES.map((office) => (
                        <p key={office.country}>{office.lines.join(', ')}</p>
                      ))}
                    </div>
                  </div>
                </li>

                <li className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-700 ring-1 ring-primary-100">
                    <Phone className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-slate-900">Phone Number</h3>
                    <a
                      href={`tel:${ORGANIZATION.phone}`}
                      className="mt-1 block text-slate-600 transition hover:text-primary-700"
                    >
                      {ORGANIZATION.phone}
                    </a>
                    <p className="text-sm text-slate-500">Sun–Thu, 9am–5pm</p>
                  </div>
                </li>

                <li className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-700 ring-1 ring-primary-100">
                    <Mail className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-slate-900">Email Address</h3>
                    <div className="mt-1 space-y-1 text-slate-600">
                      {ORGANIZATION.emails.map((email) => (
                        <a
                          key={email}
                          href={`mailto:${email}`}
                          className="block break-all transition hover:text-primary-700"
                        >
                          {email}
                        </a>
                      ))}
                    </div>
                  </div>
                </li>

                <li className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-700 ring-1 ring-primary-100">
                    <Clock className="h-5 w-5" />
                  </span>
                  <div className="w-full">
                    <h3 className="text-base font-semibold text-slate-900">Office Hours</h3>
                    <dl className="mt-2 space-y-2 text-sm text-slate-600">
                      <div className="flex justify-between gap-4">
                        <dt>Sunday – Thursday</dt>
                        <dd className="font-medium text-slate-800">9:00 AM – 5:00 PM</dd>
                      </div>
                      <div className="flex justify-between gap-4">
                        <dt>Friday – Saturday</dt>
                        <dd className="font-medium text-slate-800">Closed</dd>
                      </div>
                    </dl>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
