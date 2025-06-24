const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white py-32">
      <div className="proactis-container max-w-4xl">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-proactis-dark mb-4">
            Privacy Policy
          </h1>
          <p className="text-proactis-gray-600 text-lg">
            Last updated:{" "}
            {new Date().toLocaleDateString("en-EU", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-proactis-dark mb-4">
              1. Introduction
            </h2>
            <p className="text-proactis-gray-600 mb-4">
              Pro-Actis ("we," "our," or "us") is committed to protecting your
              privacy and personal data. This Privacy Policy explains how we
              collect, use, process, and protect your information when you visit
              our website or use our AI consulting services for legal
              professionals.
            </p>
            <p className="text-proactis-gray-600 mb-4">
              This policy complies with the General Data Protection Regulation
              (GDPR) and other applicable European data protection laws.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-proactis-dark mb-4">
              2. Data Controller
            </h2>
            <div className="bg-proactis-gray-50 rounded-lg p-6 mb-4">
              <p className="text-proactis-dark font-medium mb-2">Pro-Actis</p>
              <p className="text-proactis-gray-600">
                Address: [Your Business Address]
                <br />
                Email: privacy@pro-actis.eu
                <br />
                Phone: +33 1 XX XX XX XX
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-proactis-dark mb-4">
              3. Information We Collect
            </h2>

            <h3 className="text-xl font-semibold text-proactis-dark mb-3">
              3.1 Information You Provide
            </h3>
            <ul className="list-disc list-inside text-proactis-gray-600 mb-6 space-y-2">
              <li>Contact information (name, email, phone number)</li>
              <li>
                Professional information (law firm name, position, firm size)
              </li>
              <li>Location data (country, preferred service location)</li>
              <li>Communication preferences and inquiries</li>
              <li>Workshop attendance and feedback</li>
            </ul>

            <h3 className="text-xl font-semibold text-proactis-dark mb-3">
              3.2 Information Collected Automatically
            </h3>
            <ul className="list-disc list-inside text-proactis-gray-600 mb-6 space-y-2">
              <li>Website usage data (pages visited, time spent, clicks)</li>
              <li>
                Device information (browser type, operating system, IP address)
              </li>
              <li>Cookies and similar tracking technologies</li>
              <li>Performance and analytics data</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-proactis-dark mb-4">
              4. How We Use Your Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-proactis-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-proactis-dark mb-3">
                  Service Delivery
                </h3>
                <ul className="text-sm text-proactis-gray-600 space-y-1">
                  <li>• Provide AI consulting services</li>
                  <li>• Schedule and conduct workshops</li>
                  <li>• Deliver custom solutions</li>
                  <li>• Provide ongoing support</li>
                </ul>
              </div>
              <div className="border border-proactis-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-proactis-dark mb-3">
                  Communication
                </h3>
                <ul className="text-sm text-proactis-gray-600 space-y-1">
                  <li>• Respond to inquiries</li>
                  <li>• Send service updates</li>
                  <li>• Provide technical support</li>
                  <li>• Share industry insights</li>
                </ul>
              </div>
              <div className="border border-proactis-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-proactis-dark mb-3">
                  Legal Compliance
                </h3>
                <ul className="text-sm text-proactis-gray-600 space-y-1">
                  <li>• GDPR compliance</li>
                  <li>• Contract management</li>
                  <li>• Tax and accounting</li>
                  <li>• Legal obligations</li>
                </ul>
              </div>
              <div className="border border-proactis-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-proactis-dark mb-3">
                  Improvement
                </h3>
                <ul className="text-sm text-proactis-gray-600 space-y-1">
                  <li>• Website optimization</li>
                  <li>• Service enhancement</li>
                  <li>• User experience</li>
                  <li>• Content personalization</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-proactis-dark mb-4">
              5. Legal Basis for Processing
            </h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-proactis-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg
                    className="w-3 h-3 text-proactis-primary"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-proactis-dark">Consent</h3>
                  <p className="text-proactis-gray-600 text-sm">
                    For marketing communications and non-essential cookies
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-proactis-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg
                    className="w-3 h-3 text-proactis-primary"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-proactis-dark">
                    Contract Performance
                  </h3>
                  <p className="text-proactis-gray-600 text-sm">
                    To deliver consulting services and workshops
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-proactis-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg
                    className="w-3 h-3 text-proactis-primary"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-proactis-dark">
                    Legitimate Interests
                  </h3>
                  <p className="text-proactis-gray-600 text-sm">
                    Website analytics and service improvement
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-proactis-dark mb-4">
              6. Your Rights Under GDPR
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  title: "Right to Access",
                  desc: "Request copies of your personal data",
                },
                {
                  title: "Right to Rectification",
                  desc: "Request correction of inaccurate data",
                },
                {
                  title: "Right to Erasure",
                  desc: "Request deletion of your data",
                },
                {
                  title: "Right to Restrict",
                  desc: "Limit how we use your data",
                },
                {
                  title: "Right to Portability",
                  desc: "Receive your data in a usable format",
                },
                {
                  title: "Right to Object",
                  desc: "Object to processing based on legitimate interests",
                },
              ].map((right, index) => (
                <div key={index} className="bg-proactis-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-proactis-dark text-sm mb-1">
                    {right.title}
                  </h3>
                  <p className="text-proactis-gray-600 text-xs">{right.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-proactis-light/20 rounded-lg">
              <p className="text-proactis-dark text-sm">
                <strong>To exercise your rights:</strong> Contact us at
                privacy@pro-actis.eu or use our contact form. We'll respond
                within 30 days as required by GDPR.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-proactis-dark mb-4">
              7. Data Sharing and Transfers
            </h2>
            <p className="text-proactis-gray-600 mb-4">
              We do not sell or rent your personal information. We may share
              data with:
            </p>
            <ul className="list-disc list-inside text-proactis-gray-600 mb-6 space-y-2">
              <li>
                <strong>Service Providers:</strong> Trusted partners who assist
                in delivering our services
              </li>
              <li>
                <strong>Legal Requirements:</strong> When required by law or to
                protect our rights
              </li>
              <li>
                <strong>Business Transfers:</strong> In case of merger,
                acquisition, or sale of assets
              </li>
            </ul>
            <p className="text-proactis-gray-600">
              All international data transfers are protected by appropriate
              safeguards such as Standard Contractual Clauses.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-proactis-dark mb-4">
              8. Data Security
            </h2>
            <div className="bg-proactis-gray-50 rounded-lg p-6">
              <p className="text-proactis-gray-600 mb-4">
                We implement appropriate technical and organizational measures
                to protect your data:
              </p>
              <ul className="list-disc list-inside text-proactis-gray-600 space-y-1">
                <li>SSL encryption for data transmission</li>
                <li>Secure data storage and access controls</li>
                <li>Regular security assessments</li>
                <li>Staff training on data protection</li>
                <li>Incident response procedures</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-proactis-dark mb-4">
              9. Contact Information
            </h2>
            <div className="border border-proactis-gray-200 rounded-lg p-6">
              <p className="text-proactis-gray-600 mb-4">
                For any privacy-related questions or to exercise your rights:
              </p>
              <div className="space-y-2 text-proactis-gray-600">
                <p>
                  <strong>Email:</strong> privacy@pro-actis.eu
                </p>
                <p>
                  <strong>Phone:</strong> +33 1 XX XX XX XX
                </p>
                <p>
                  <strong>Address:</strong> [Your Business Address]
                </p>
                <p>
                  <strong>DPO:</strong> dpo@pro-actis.eu (if applicable)
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-proactis-dark mb-4">
              10. Updates to This Policy
            </h2>
            <p className="text-proactis-gray-600">
              We may update this Privacy Policy from time to time. We will
              notify you of any material changes by posting the new policy on
              our website and updating the "Last updated" date. Your continued
              use of our services after any changes constitutes acceptance of
              the updated policy.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
