export default function FAQPage() {
  const faqCategories = [
    {
      title: "Scholarship Applications",
      questions: [
        {
          q: "Who is eligible to apply for Aurbina Scholarships?",
          a: "We welcome applications from high school seniors, undergraduate, and graduate students who demonstrate academic excellence, leadership potential, and financial need. Specific eligibility criteria vary by scholarship program."
        },
        {
          q: "What documents do I need for my application?",
          a: "Typically required documents include: academic transcripts, standardized test scores (if applicable), two letters of recommendation, a personal statement, financial information, and proof of enrollment/acceptance at an accredited institution."
        },
        {
          q: "When is the application deadline?",
          a: "Application deadlines vary by program. The main scholarship cycle opens January 1st and closes March 31st annually. Some specialized scholarships have different deadlines - please check individual program pages for specific dates."
        },
        {
          q: "Can I apply for multiple scholarships?",
          a: "Yes, students are encouraged to apply for all scholarships they qualify for. However, you will need to submit separate applications for each program if they have different requirements."
        }
      ]
    },
    {
      title: "Selection Process",
      questions: [
        {
          q: "How are scholarship recipients selected?",
          a: "Our selection committee evaluates applicants based on academic achievement, leadership qualities, community involvement, financial need, and the quality of their personal statement. The process includes multiple rounds of review."
        },
        {
          q: "When will I be notified about my application status?",
          a: "All applicants will receive notification by June 15th for the main scholarship cycle. Notification timelines for other programs are specified on their respective application pages."
        },
        {
          q: "What happens if I'm selected as a finalist?",
          a: "Finalists may be invited for an interview (in-person or virtual) and asked to provide additional documentation. Final decisions are typically made within 2-3 weeks after interviews."
        },
        {
          q: "Are scholarships renewable?",
          a: "Many of our scholarships are renewable for up to 4 years, provided recipients maintain a minimum GPA (usually 3.0) and remain enrolled full-time in good standing."
        }
      ]
    },
    {
      title: "Funding & Disbursement",
      questions: [
        {
          q: "How much funding do scholarships provide?",
          a: "Scholarship amounts range from $1,000 to $20,000 annually, depending on the program and demonstrated financial need. Some scholarships cover full tuition and living expenses."
        },
        {
          q: "How are scholarship funds disbursed?",
          a: "Funds are typically sent directly to your educational institution at the beginning of each academic term. The scholarship award letter will specify the disbursement schedule and process."
        },
        {
          q: "Can I use the scholarship for any college or university?",
          a: "Yes, our scholarships can be used at any accredited college, university, or technical school in the United States. Some international programs are also eligible - please check specific program guidelines."
        },
        {
          q: "What expenses are covered by the scholarship?",
          a: "Funds can be applied to tuition, fees, books, supplies, and other education-related expenses. Some scholarships also provide stipends for housing, meals, and transportation."
        }
      ]
    },
    {
      title: "General Questions",
      questions: [
        {
          q: "Is there an application fee?",
          a: "No, applying for Aurbina Scholarships is completely free. We never charge application fees."
        },
        {
          q: "Can international students apply?",
          a: "Some of our scholarships are open to international students studying at U.S. institutions. Please check individual program eligibility requirements."
        },
        {
          q: "How can I check my application status?",
          a: "You can log into your applicant portal anytime to check your application status. We also send email updates at key stages of the review process."
        },
        {
          q: "What if I have technical issues with my application?",
          a: "Contact our technical support team at techsupport@aurbinahub.org or call (555) 789-0123. For best results, use Chrome or Firefox browsers and submit applications well before deadlines."
        }
      ]
    }
  ];

  return (
    <div className="section-padding">
      <div className="container-custom max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about Aurbina Scholars Hub programs, applications, and requirements.
          </p>
        </div>
        <div id="container-09d618d3a8b88d28db262ff3ab0bd4da"></div>

        {/* Search Bar */}
        <div className="mb-12 max-w-2xl mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search FAQs..."
              className="w-full px-6 py-4 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-lg"
            />
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
              🔍
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-2 text-center">
            Can't find what you're looking for? <a href="/contact" className="text-primary-600 hover:underline">Contact us</a>
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-12">
          {faqCategories.map((category, index) => (
            <div key={index}>
              <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200">
                {category.title}
              </h2>
              <div className="space-y-4">
                {category.questions.map((faq, faqIndex) => (
                  <div key={faqIndex} className="card">
                    <details className="group">
                      <summary className="flex justify-between items-center cursor-pointer list-none p-6">
                        <span className="text-lg font-semibold text-gray-800 group-open:text-primary-700">
                          {faq.q}
                        </span>
                        <span className="ml-4 flex-shrink-0 text-primary-600 group-open:hidden">+</span>
                        <span className="ml-4 flex-shrink-0 text-primary-600 hidden group-open:inline">−</span>
                      </summary>
                      <div className="px-6 pb-6 pt-2 text-gray-600">
                        <p>{faq.a}</p>
                      </div>
                    </details>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Still Have Questions */}
        <div className="mt-16 text-center">
          <div className="bg-primary-50 border border-primary-200 rounded-xl p-8 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-gray-600 mb-6">
              Our support team is here to help you with any additional questions about scholarships, applications, or our programs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="/contact" className="btn-primary">
                Contact Support
              </a>
              <a href="tel:+601160740897" className="btn-secondary">
                Call: +601160740897
              </a>
              <a href="mailto:ashmrk262@gmail.com" className="btn-secondary bg-transparent border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white">
                Email Us
              </a>
            </div>
            <p className="text-sm text-gray-500 mt-6">
              Response time: Within 24-48 hours during business days
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}