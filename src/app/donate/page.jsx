'use client'

import { useState } from 'react'
import Image from 'next/image'
import PageHeader from '@/components/PageHeader'
import { DONATION, ORGANIZATION } from '@/lib/config/site'
import ewallet from '@/data/eWallet.jpeg'
import duitNow from '@/data/quitnow.jpeg'

const donationAmounts = [25, 50, 100, 250, 500]

// QR slips handed out by Touch 'n Go and DuitNow; the same two images are the
// only place the account details are published.
const DONATION_METHODS = [
  {
    name: "Touch 'n Go eWallet",
    image: ewallet,
    width: 698,
    height: 1080,
    note: 'Scan with the Touch \'n Go eWallet app',
  },
  {
    name: 'DuitNow QR',
    image: duitNow,
    width: 1018,
    height: 1280,
    note: 'Accepted by participating banks and e-wallets',
  },
]

const DonatePage = () => {
  const [amount, setAmount] = useState(100);
  const [frequency, setFrequency] = useState('once');

  return (
    <>
      <PageHeader
        eyebrow="Make a difference"
        title="Support Our Mission"
        description="Your generous donation helps us continue our work in communities around the world."
      />

      <div className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Donation Form */}
        <div className="glass p-6 sm:p-8">
          <h2 className="text-xl font-semibold mb-6">Make a Donation</h2>
          
        {/*Donor Appreciation*/}
        <div className="mt-6 mb-6 rounded-xl border border-white/60 bg-white/60 p-5 backdrop-blur">
  <div className="flex items-start gap-4">
    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-xl text-primary-700">
      🎁
    </div>

    <div>
      <h2 className="text-xl font-semibold text-gray-900">
        Monthly Donor Gift
      </h2>

      <p className="mt-2 text-sm text-gray-600 leading-relaxed">
        Support our mission with a monthly donation, and as a token of gratitude,
        you’ll receive an exclusive <span className="font-medium text-gray-800">
        Aurbina Scholars Hub T-shirt
        </span> as a gift.
      </p>

      <p className="mt-3 text-xs text-gray-500 italic">
        *Available for active monthly donors only.
      </p>
    </div>
  </div>
</div>

          {/* Amount Selection */}
          <div className="mb-8">
            <h3 className="mb-4 font-medium">Select Amount</h3>

            <div className="grid grid-cols-3 gap-4">
              {donationAmounts.map((donationAmount) => (
                <button
                  key={donationAmount}
                  onClick={() => setAmount(donationAmount)}
                  className={`rounded-xl border-2 py-3 font-medium transition ${
                    amount === donationAmount
                      ? 'border-primary-600 bg-primary-50 text-primary-700 shadow-sm'
                      : 'border-slate-200 bg-white/60 text-slate-700 hover:border-primary-300'
                  }`}
                >
                  RM{donationAmount}
                </button>
              ))}

              <div className="col-span-3">
                <label className="block text-sm font-medium mb-2">
                  Or enter custom amount
                </label>

                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">
                    RM
                  </span>
                  <input
                    type="number"
                    min="1"
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                    className="input-field pl-10"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Frequency */}
          <div className="mb-8">
            <h3 className="mb-4 font-medium">Donation Frequency</h3>

            <div className="grid grid-cols-2 gap-4">
              {['once', 'monthly'].map((item) => (
                <button
                  key={item}
                  onClick={() => setFrequency(item)}
                  className={`rounded-xl border-2 py-3 font-medium capitalize transition ${
                    frequency === item
                      ? 'border-primary-600 bg-primary-50 text-primary-700 shadow-sm'
                      : 'border-slate-200 bg-white/60 text-slate-700 hover:border-primary-300'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Summary */}
          <div className="mb-8 rounded-xl border border-white/60 bg-white/60 p-5 backdrop-blur">
            <div className="flex justify-between mb-2">
              <span>Donation Amount</span>
              <span className="font-semibold">RM{amount}</span>
            </div>

            <div className="flex justify-between mb-2">
              <span>Frequency</span>
              <span className="capitalize font-semibold">{frequency}</span>
            </div>

            <div className="border-t pt-3 mt-3 flex justify-between">
              <span>Total</span>
              <span className="text-lg font-bold text-primary-600">
                {frequency === 'monthly' ? `RM${amount} / month` : `RM${amount}`}
              </span>
            </div>
          </div>

          {/* Button */}
          <a href={DONATION.paypal} target="_blank" rel="noopener noreferrer"
            className="btn-donate mb-6 w-full py-3 text-base">
            Continue to PayPal
          </a>

          <p className="text-center text-sm text-slate-600">
            Prefer a bank transfer or e-wallet? The DuitNow QR codes are in
            {' '}
            <a href="#donation-information" className="font-semibold text-primary-700 underline-offset-4 hover:underline">
              Donation Information
            </a>
            {' '}below.
          </p>
        </div>

        {/* Impact Section */}
        <div className="glass p-6 sm:p-8">
          <h2 className="text-xl font-semibold mb-6">Your Impact</h2>

          <div className="space-y-4">
            {[
              { amount: 25, text: 'Provides learning materials for one child' },
              { amount: 50, text: 'Supports a basic medical checkup for a family' },
              { amount: 100, text: 'Supports a community training workshop' },
              { amount: 250, text: 'Funds a clean water project for a village' },
              { amount: 500, text: 'Supports long-term education and protection for vulnerable children.' },
            ].map((item) => (
              <div
                key={item.amount}
                className="flex items-center rounded-xl border border-white/60 bg-white/60 p-4 backdrop-blur"
              >
                <div className="h-16 w-16 whitespace-nowrap rounded-full bg-primary-100 text-primary-700 flex items-center text-sm justify-center font-bold mr-4">
                  RM {" "} {item.amount}
                </div>
                <p className="font-medium">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
          </div>

          {/* Donation Information */}
          <div id="donation-information" className="glass mt-8 scroll-mt-24 p-6 sm:p-8">
            <h2 className="text-2xl text-slate-900">Donation Information</h2>

            <div className="mt-4 space-y-4 text-sm leading-relaxed text-slate-600">
              <p>
                Aurbina Scholars Hub (ASH) is currently operating as a refugee-led grassroots
                initiative and is not yet formally registered. Therefore, we are temporarily
                receiving donations through a personal bank account or e-wallet designated for
                ASH activities.
              </p>
              <p>
                We maintain transparency regarding this arrangement, and all contributions are
                intended to support our educational programmes and community initiatives.
              </p>
              <p>Thank you for your understanding, trust, and support.</p>
            </div>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {DONATION_METHODS.map((method) => (
                <div
                  key={method.name}
                  className="rounded-2xl border border-white/60 bg-white/70 p-5 backdrop-blur"
                >
                  <h3 className="text-base font-semibold text-slate-900">{method.name}</h3>
                  <p className="mt-1 text-xs text-slate-500">{method.note}</p>

                  {/* Fixed-height frame keeps both QR slips the same size on the grid */}
                  <div className="mt-4 flex h-72 items-center justify-center overflow-hidden rounded-xl bg-white p-3 ring-1 ring-slate-200">
                    <Image
                      src={method.image}
                      alt={`${method.name} QR code for donating to ${ORGANIZATION.name}`}
                      width={method.width}
                      height={method.height}
                      sizes="240px"
                      className="h-full w-auto object-contain"
                    />
                  </div>

                  <dl className="mt-4 space-y-2 text-sm">
                    <div className="flex flex-wrap justify-between gap-x-4 gap-y-1">
                      <dt className="text-slate-500">Account name</dt>
                      <dd className="font-semibold text-slate-900">{DONATION.accountName}</dd>
                    </div>
                    <div className="flex flex-wrap justify-between gap-x-4 gap-y-1">
                      <dt className="text-slate-500">DuitNow ID</dt>
                      <dd className="font-semibold text-slate-900">{DONATION.duitNowId}</dd>
                    </div>
                  </dl>
                </div>
              ))}
            </div>

            <p className="mt-6 text-sm text-slate-600">
              After sending your donation, please share the transfer reference with us at
              {' '}
              <a
                href={`mailto:${ORGANIZATION.emails[0]}`}
                className="font-semibold break-words text-primary-700 underline-offset-4 hover:underline"
              >
                {ORGANIZATION.emails[0]}
              </a>
              {' '}so we can acknowledge your gift.
            </p>

            <div className="mt-8 border-t border-white/60 pt-6">
              <p className="font-semibold text-slate-900">{ORGANIZATION.name} ({ORGANIZATION.shortName})</p>
              <p className="mt-1 text-sm text-slate-600">{DONATION.tagline}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DonatePage