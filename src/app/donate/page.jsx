'use client'

import { useState } from 'react'
import Image from 'next/image'
import ewallet from '@/data/eWallet.jpg';

const donationAmounts = [25, 50, 100, 250, 500]

const DonatePage = () => {
  const [amount, setAmount] = useState(100);
  const [frequency, setFrequency] = useState('once');
  const [showBank, setShowBank] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">Support Our Mission</h1>
      <p className="text-gray-600 mb-10">
        Your generous donation helps us continue our work in communities around the world.
      </p>
      <div id="container-09d618d3a8b88d28db262ff3ab0bd4da"></div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Donation Form */}
        <div>
          <h2 className="text-xl font-semibold mb-6">Make a Donation</h2>
          
        {/*Donor Appreciation*/}
        <div className="mt-6 mb-4 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
  <div className="flex items-start gap-4">
    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary text-xl">
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
                  className={`py-3 rounded-lg border-2 font-medium transition ${
                    amount === donationAmount
                      ? 'border-primary-600 bg-primary-50 text-primary-700'
                      : 'border-gray-300 hover:border-primary-500'
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
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                    RM
                  </span>
                  <input
                    type="number"
                    min="1"
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                    className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500"
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
                  className={`py-3 rounded-lg border-2 font-medium capitalize ${
                    frequency === item
                      ? 'border-primary-600 bg-primary-50 text-primary-700'
                      : 'border-gray-300 hover:border-primary-500'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Summary */}
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
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
          {/*<button
            onClick={() => setShowBank(true)}
            className="w-full bg-primary-600 hover:bg-primary-700 text-white py-3 rounded-lg text-lg font-medium"
          >
            Continue to Bank Transfer
          </button>
          */}
          <a href="https://www.paypal.me/MohammedRofik218" target='_blank'
            className="w-full bg-primary-600 block text-center hover:bg-primary-700 text-white py-3 rounded-lg text-lg font-medium mb-6">
            Continue to PayPal
          </a>

          {/*<p className="text-xs text-gray-500 mt-4 text-center">
            Donations via bank transfer are verified manually.
          </p>*/}

          {/* Bank Details */}
          {showBank ? (
            <div className="mt-8 border border-gray-200 rounded-lg p-6 bg-white">
              <h3 className="text-lg font-semibold mb-4">
                Bank Transfer Details
              </h3>

              <div className="space-y-2 text-sm">
                <p><strong>Account Name:</strong> Community Support Foundation</p>
                <p><strong>Bank Name:</strong> ABC Bank Ltd</p>
                <p><strong>Account Number:</strong> 1234567890</p>
                <p><strong>Branch:</strong> Dhaka Main Branch</p>
                <p><strong>SWIFT Code:</strong> ABCDBDDH</p>
              </div>

              <p className="text-xs text-gray-500 mt-4">
                Please include your name or email in the reference.
                After payment, send the transaction ID to
                <span className="font-medium"> ashmrk262@gmail.com</span>.
              </p>
            </div> ) : (<Image src={ewallet} alt='payment qr code' width={200} height={400}
            className='w-full md:w-1/2 mx-auto rounded-lg border border-gray-200'/>)}
        </div>

        {/* Impact Section */}
        <div>
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
                className="flex items-center p-4 bg-white border rounded-lg"
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
    </div>
  )
}

export default DonatePage