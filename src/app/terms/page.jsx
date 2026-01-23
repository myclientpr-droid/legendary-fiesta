export default function TermsPage() {
  const effectiveDate = "January 1, 2024";
  const lastUpdated = "December 19, 2025";

  return (
    <div className="section-padding">
      <div className="container-custom max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="mb-4">Terms of Service</h1>
          <div className="text-gray-600">
            <p>Effective Date: {effectiveDate}</p>
            <p>Last Updated: {lastUpdated}</p>
          </div>
        </div>
        <div id="container-09d618d3a8b88d28db262ff3ab0bd4da"></div>

        <div className="prose prose-lg max-w-none">
          <div className="mb-8 p-6 bg-gray-50 rounded-lg">
            <p className="font-semibold text-gray-700">
              By accessing or using the Aurbina Scholars Hub (ASH) website, programs, or services, you agree to be bound by these Terms of Service. If you do not agree, please refrain from using the website or services.
            </p>
          </div>

          <div className="space-y-8">
            {/* Agreement to Terms */}
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Agreement to Terms</h2>
              <p>
                These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Aurbina Scholars Hub ("we," "us," or "our"), concerning your access to and use of the <a href="https://www.aurbinahub.org" className="text-primary-600 hover:underline">www.aurbinahub.org</a> website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the "Site").
              </p>
              <p className="mt-4">
                You agree that by accessing the Site, you have read, understood, and agree to be bound by all of these Terms of Service. If you do not agree with all of these Terms of Service, then you are expressly prohibited from using the Site and you must discontinue use immediately.
              </p>
            </section>

            {/* Intellectual Property Rights */}
            <section>
              <h2 className="text-2xl font-bold mb-4">2. Intellectual Property Rights</h2>
              <p>
                All content on this website, including text, logos, images, designs, and training materials, is the intellectual property of ASH unless otherwise stated. Unauthorized use, reproduction, or distribution is strictly prohibited.
              </p>
            </section>

            {/* User Representations */}
            <section>
              <h2 className="text-2xl font-bold mb-4">3. User Representations</h2>
              <p>By using the Site, you represent and warrant that:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Will use the website for lawful purposes only</li>
                <li>Provide accurate and complete information</li>
                <li>Will uphold the values, mission, and standards of ASH</li>
              </ul>
            </section>

            {/* Scholarship Applications */}
            <section>
              <h2 className="text-2xl font-bold mb-4">4. Scholarship Applications</h2>
              <p>
               Submission of scholarship or program applications does not guarantee selection. ASH reserves the right to review, approve, reject, or modify applications at its sole discretion.
              </p>
            </section>

            {/* Prohibited Activities */}
            <section>
              <h2 className="text-2xl font-bold mb-4">5. Prohibited Activities</h2>
              <p className="mt-4">Users must not:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Engage in illegal, harmful, or misleading activities</li>
                <li>Attempt unauthorized access to systems or data</li>
                <li>Harass, exploit, or abuse others</li>
                <li>Misrepresent affiliation with ASH</li>
              </ul>
            </section>

            {/* Termination */}
            <section>
              <h2 className="text-2xl font-bold mb-4">6. Termination</h2>
              <p>
                ASH reserves the right to suspend or terminate access to the website or services without notice for violations of these Terms.
              </p>
            </section>

            {/* Governing Law */}
            <section>
              <h2 className="text-2xl font-bold mb-4">7. Governing Law</h2>
              <p>These Terms shall be governed by and construed in accordance with the laws of Malaysia.
              </p>
            </section>

            {/* Disclaimer */}
            <section>
              <h2 className="text-2xl font-bold mb-4">8. Disclaimer</h2>
              <p>
                All services and content are provided on an “as is” and “as available” basis. ASH makes no representations or warranties regarding the accuracy, completeness, or reliability of content.
              </p>
            </section>

            {/* Limitation of Liability */}
            <section>
              <h2 className="text-2xl font-bold mb-4">9. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, ASH shall not be liable for any direct, indirect, incidental, or consequential damages arising from use of the website or participation in its programs.
              </p>
            </section>
            
            {/* code of conduct*/}
            <section>
              <h2 className="text-2xl font-bold mb-4">10. Code of Conduct</h2>
              <p className="mt-4">All staff, volunteers, trainers, and participants are expected to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Act with integrity, professionalism, and respect</li>
                <li>Promote equality, inclusion, and non-discrimination</li>
                <li>Avoid harassment, abuse, or exploitation</li>
                <li>Respect cultural, religious, and social differences</li>
              </ul>
            </section>

            {/* Contact Information */}
            <section className="mt-12 p-6 bg-gray-50 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <p>
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <div className="mt-4 space-y-2">
                <p><strong>Email:</strong> ashmrk262@gmail.com </p>
                <p><strong>Address:</strong> Aurbina Scholars Hub 456 Education Avenue
                    Kuala Lumpur Malaysia</p>
                <p><strong>Phone:</strong> +601160740897 • (Sun-Thu, 9am-5pm)</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}