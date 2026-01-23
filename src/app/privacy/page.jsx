export default function PrivacyPage() {
  const effectiveDate = "January 1, 2024";
  const lastUpdated = "December 19, 2025";

  return (
    <div className="section-padding">
      <div className="container-custom max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="mb-4">Privacy Policy</h1>
          <div className="text-gray-600">
            <p>Effective Date: {effectiveDate}</p>
            <p>Last Updated: {lastUpdated}</p>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="mb-8 p-6 bg-gray-50 rounded-lg">
            <p className="font-semibold text-gray-700">
              Aurbina Scholars Hub ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how your personal information is collected, used, and disclosed by Aurbina Scholars Hub.
            </p>
          </div>

          <div className="space-y-8">
            {/* Information We Collect */}
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold mb-3">Personal Information</h3>
              <p>We collect personal information that you voluntarily provide to us when you:</p>
              <ul className="list-disc pl-6 mt-2 mb-4 space-y-2">
                <li>Register for an account</li>
                <li>Apply for scholarships</li>
                <li>Sign up for our newsletter</li>
                <li>Contact us through forms or email</li>
                <li>Participate in surveys or research</li>
              </ul>
              <div id="container-09d618d3a8b88d28db262ff3ab0bd4da"></div>
              
              <h3 className="text-xl font-semibold mb-3 mt-6">Types of Information Collected</h3>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li><strong>Identity Data:</strong> Name, date of birth, gender</li>
                <li><strong>Contact Data:</strong> Email address, phone number, mailing address</li>
                <li><strong>Academic Data:</strong> School/college information, GPA, test scores, transcripts</li>
                <li><strong>Financial Data:</strong> Financial aid information, family income data (for need-based scholarships)</li>
                <li><strong>Demographic Data:</strong> Race/ethnicity (voluntary, for diversity initiatives)</li>
                <li><strong>Application Materials:</strong> Essays, recommendation letters, resumes</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6">Automatically Collected Information</h3>
              <p>When you visit our website, we automatically collect certain information about your device, including:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Pages you view and links you click</li>
                <li>Time and date of visits</li>
              </ul>
            </section>

            {/* How We Use Your Information */}
            <section>
              <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
              <p>We use the information we collect for various purposes, including to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Process and evaluate scholarship applications</li>
                <li>Communicate with you about your application status</li>
                <li>Administer scholarship awards and disbursements</li>
                <li>Improve our website and services</li>
                <li>Send newsletters and updates (with your consent)</li>
                <li>Conduct research and analysis (anonymized)</li>
                <li>Comply with legal obligations</li>
                <li>Prevent fraud and ensure security</li>
              </ul>
            </section>

            {/* Sharing Your Information */}
            <section>
              <h2 className="text-2xl font-bold mb-4">3. Sharing Your Information</h2>
              <p>We may share your information in the following situations:</p>
              
              <h3 className="text-xl font-semibold mb-3 mt-4">With Scholarship Review Committees</h3>
              <p>Your application materials may be shared with our selection committees, which may include:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Board members</li>
                <li>Academic advisors</li>
                <li>External reviewers (under confidentiality agreements)</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6">With Educational Institutions</h3>
              <p>If you receive a scholarship, we may share necessary information with your school for:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Verification of enrollment</li>
                <li>Disbursement of funds</li>
                <li>Academic progress monitoring</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6">Legal Requirements</h3>
              <p>We may disclose your information where required to do so by law or in response to valid requests by public authorities.</p>

              <h3 className="text-xl font-semibold mb-3 mt-6">Service Providers</h3>
              <p>We may employ third-party companies and individuals to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Facilitate our Service</li>
                <li>Provide the Service on our behalf</li>
                <li>Perform Service-related services</li>
                <li>Assist us in analyzing how our Service is used</li>
              </ul>
            </section>

            {/* Data Security */}
            <section>
              <h2 className="text-2xl font-bold mb-4">4. Data Security</h2>
              <p>
                We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
              <p className="mt-4">Our security measures include:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Encryption of sensitive data</li>
                <li>Secure servers and firewalls</li>
                <li>Regular security audits</li>
                <li>Limited access to personal information</li>
                <li>Employee training on data protection</li>
              </ul>
            </section>

            {/* Your Rights */}
            <section>
              <h2 className="text-2xl font-bold mb-4">5. Your Privacy Rights</h2>
              <p>Depending on your location, you may have the following rights regarding your personal information:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li><strong>Right to Access:</strong> Request copies of your personal information</li>
                <li><strong>Right to Rectification:</strong> Request correction of inaccurate information</li>
                <li><strong>Right to Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Right to Restrict Processing:</strong> Request restriction of processing your information</li>
                <li><strong>Right to Data Portability:</strong> Request transfer of your data to another organization</li>
                <li><strong>Right to Object:</strong> Object to processing of your personal information</li>
              </ul>
              <p className="mt-4">
                To exercise these rights, please contact us using the information in the "Contact Us" section below.
              </p>
            </section>

            {/* Children's Privacy */}
            <section>
              <h2 className="text-2xl font-bold mb-4">6. Children's Privacy</h2>
              <p>
                Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13. If you are a parent or guardian and you are aware that your child has provided us with Personal Data, please contact us.
              </p>
              <p className="mt-4">
                For applicants under 18, we require parental consent for scholarship applications. Parents or guardians may contact us to review, modify, or delete their child's information.
              </p>
            </section>

            {/* Cookies */}
            <section>
              <h2 className="text-2xl font-bold mb-4">7. Cookies and Tracking Technologies</h2>
              <p>
                We use cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies are files with small amount of data which may include an anonymous unique identifier.
              </p>
              <p className="mt-4">You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.</p>
            </section>

            {/* Changes to Privacy Policy */}
            <section>
              <h2 className="text-2xl font-bold mb-4">8. Changes to This Privacy Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
              </p>
              <p className="mt-4">
                You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
              </p>
            </section>

            {/* Contact Information */}
            <section className="mt-12 p-6 bg-gray-50 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy or our data practices, please contact our Data Protection Officer at:
              </p>
              <div className="mt-4 space-y-2">
                <p><strong>Email:</strong> ashmrk262@gmail.com</p>
                <p><strong>Address:</strong> Aurbina Scholars Hub<br />456 Education Avenue<br />Kuala Lumpur Malaysia</p>
                <p><strong>Phone:</strong> +601160740897 • (Sun-Thu, 9am-5pm)</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}