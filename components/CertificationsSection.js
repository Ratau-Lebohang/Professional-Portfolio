function CertificationsSection() {
  try {
    const [showCertifications, setShowCertifications] = React.useState(false);
    const [showBadges, setShowBadges] = React.useState(false);
    const [badgeLoading, setBadgeLoading] = React.useState(true);

    const handleViewCertifications = () => {
      setShowCertifications(true);
      setShowBadges(false);
    };

    const handleCloseCertifications = () => {
      setShowCertifications(false);
    };

    const handleViewBadges = () => {
      setBadgeLoading(true);
      setShowBadges(true);
      setShowCertifications(false);
    };

    const handleCloseBadges = () => {
      setShowBadges(false);
    };

    return (
      <section id="certifications" className="py-20 bg-[var(--primary-color)] bg-opacity-10" data-name="certifications-section" data-file="components/CertificationsSection.js">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              My <span className="text-[var(--accent-color)]">Certifications</span>
            </h2>
            <div className="w-20 h-1 cosmic-gradient mx-auto"></div>
          </div>
          
          <div className="bg-white bg-opacity-5 rounded-xl p-8 backdrop-filter backdrop-blur-lg border border-[var(--accent-color)] border-opacity-20 fade-in">
            <div className="text-center mb-8">
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
               Review my commitment to continuous learning through a collection of
                verified professional certifications and badges that validate my skills in Data Analytics, Data Science, AI, and specialized technical/soft skills.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={handleViewCertifications}
                  className="inline-flex items-center px-8 py-4 cosmic-gradient text-white rounded-lg font-semibold hover:opacity-90 transition-all transform hover:scale-105"
                >
                  <div className="icon-award text-xl mr-3"></div>
                  View Certifications
                </button>
                <button 
                  onClick={handleViewBadges}
                  className="inline-flex items-center px-8 py-4 cosmic-gradient text-white rounded-lg font-semibold hover:opacity-90 transition-all transform hover:scale-105"
                >
                  <div className="icon-shield text-xl mr-3"></div>
                  View Badges
                </button>
              </div>
            </div>
            
            {showCertifications && (
              <div className="bg-white rounded-lg overflow-hidden shadow-2xl mb-8 relative">
                <button
                  onClick={handleCloseCertifications}
                  className="absolute top-4 right-4 z-10 w-8 h-8 bg-gray-600 hover:bg-gray-700 text-white rounded-full flex items-center justify-center transition-colors"
                >
                  <div className="icon-x text-sm"></div>
                </button>
                <CertificationsContent />
              </div>
            )}
            
            {showBadges && (
              <div className="bg-white rounded-lg overflow-hidden shadow-2xl mb-8 relative">
                <button
                  onClick={handleCloseBadges}
                  className="absolute top-4 right-4 z-10 w-8 h-8 bg-gray-600 hover:bg-gray-700 text-white rounded-full flex items-center justify-center transition-colors"
                >
                  <div className="icon-x text-sm"></div>
                </button>
                {badgeLoading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-white z-5">
                    <div className="text-center">
                      <div className="inline-block w-12 h-12 border-4 border-[var(--accent-color)] border-t-transparent rounded-full animate-spin mb-4"></div>
                      <p className="text-gray-600 font-medium">Loading badges...</p>
                    </div>
                  </div>
                )}
                <div className="w-full h-[600px]">
                  <iframe
                    src="https://1drv.ms/b/c/89926764a8a616fc/EY1n-Q1Y4kFOgx4ZAJjCDEAB3H6LVVOv6Vfp6DyCpL-OcA?e=rtXuGG&embed=true"
                    className="w-full h-full border-0"
                    title="Professional Badges Document"
                    onLoad={() => setBadgeLoading(false)}
                  />
                </div>
              </div>
            )}
            
            <div className="text-center">
              <p className="text-gray-400">
                Continuously growing • 
                <span className="text-[var(--accent-color)]"> Committed to lifelong learning</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('CertificationsSection component error:', error);
    return null;
  }
}

function CertificationsContent() {
  try {
    const certifications = [
      // 🤖 Artificial Intelligence & Machine Learning
      { name: "AI Essentials", link: "https://coursera.org/share/069be9a8b68fb2e6ea6207d05c592092", category: "🤖 Artificial Intelligence & Machine Learning" },
      { name: "AI for Everyone", link: "https://coursera.org/share/bbfcf927933b7cfb9201e9dae5d86b6a", category: "🤖 Artificial Intelligence & Machine Learning" },
      { name: "AI Foundations: Prompt Engineering with ChatGPT", link: "https://coursera.org/share/8248ec4776c80ce1eeb8fb0a54a2b106", category: "🤖 Artificial Intelligence & Machine Learning" },
      { name: "Artificial Intelligence on Microsoft Azure", link: "https://coursera.org/share/d2dbdb6dbaf40f5ce096439b86a58c15", category: "🤖 Artificial Intelligence & Machine Learning" },
      { name: "Building AI Powered Chatbots Without Programming", link: "https://www.coursera.org/account/accomplishments/verify/3P8TUAKF0PPT?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course", category: "🤖 Artificial Intelligence & Machine Learning" },
      { name: "Generative AI with Large Language Models", link: "https://coursera.org/share/8194a843a6819ca961972cd9e40a06d8", category: "🤖 Artificial Intelligence & Machine Learning" },
      { name: "Introduction to Artificial Intelligence (AI)", link: "https://coursera.org/share/408e0c44c9af683e1e2b4d2775d334cc", category: "🤖 Artificial Intelligence & Machine Learning" },
      { name: "Introduction to Generative AI", link: "https://coursera.org/share/7bc3144efdbe5ebdae04be9a7f69a1d6", category: "🤖 Artificial Intelligence & Machine Learning" },
      { name: "Introduction to Responsible AI", link: "https://coursera.org/share/fcc649cb57f9564e25b3f590f58984b2", category: "🤖 Artificial Intelligence & Machine Learning" },
      { name: "Trustworthy AI: Managing Bias Ethics and Accountability", link: "https://coursera.org/share/a004e725212d8e6410f4bd2a1606b2fe", category: "🤖 Artificial Intelligence & Machine Learning" },
      
      // 📊 Data Analytics, Data Science & Data Engineering
      { name: "Creative Designing in Power BI", link: "https://coursera.org/share/1cd9a74027faee63d0b50920f02e9bac", category: "📊 Data Analytics, Data Science & Data Engineering" },
      { name: "Data Analysis and Visualization with Power BI", link: "https://coursera.org/share/3360fb583070d73c3ccc1bd57b55cc2c", category: "📊 Data Analytics, Data Science & Data Engineering" },
      { name: "Data Modeling in Power BI", link: "https://coursera.org/share/26cbefa7988d3d095c63f26c225730db", category: "📊 Data Analytics, Data Science & Data Engineering" },
      { name: "Data Science Foundations Specialization", link: "https://coursera.org/share/d2f669264462ca5465ed99a77dd8d5ae", category: "📊 Data Analytics, Data Science & Data Engineering" },
      { name: "Deploy and Maintain Power BI Assets and Capstone Project", link: "https://coursera.org/share/9d975c7df532fcb08b011a3ab031738e", category: "📊 Data Analytics, Data Science & Data Engineering" },
      { name: "Extract Transform and Load Data in Power BI", link: "https://coursera.org/share/adc98815746ef1edb4bca9ac7481994c", category: "📊 Data Analytics, Data Science & Data Engineering" },
      { name: "Google Business Intelligence", link: "https://coursera.org/share/fbce4f0a4d0a97a197621d859826d0a0", category: "📊 Data Analytics, Data Science & Data Engineering" },
      { name: "Google Data Analytics", link: "https://coursera.org/share/e0e0ce738f9582c121dfdfb1952b149f", category: "📊 Data Analytics, Data Science & Data Engineering" },
      { name: "Harnessing the Power of Data with Power BI", link: "https://coursera.org/share/e5a23a99e4ea111f824bb6f237cff641", category: "📊 Data Analytics, Data Science & Data Engineering" },
      { name: "IBM Data Science (Extended Learning Path)", link: "https://www.coursera.org/account/accomplishments/professional-cert/97E6GP3NL9LZ?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=prof", category: "📊 Data Analytics, Data Science & Data Engineering" },
      { name: "Introduction to Data Analytics", link: "https://coursera.org/share/14f93057068e104ee390527d39bb2512", category: "📊 Data Analytics, Data Science & Data Engineering" },
      { name: "Introduction to Data Engineering", link: "https://coursera.org/share/c450733a205212d31f30848832a777dd", category: "📊 Data Analytics, Data Science & Data Engineering" },
      { name: "Microsoft PL-300 Exam Preparation and Practice", link: "https://coursera.org/share/522dec9da685832fde6c2a43b21f74ca", category: "📊 Data Analytics, Data Science & Data Engineering" },
      
      // 💼 Professional Development & Workplace Skills
      { name: "Active Listening: Enhancing Communication Skills", link: "https://coursera.org/share/b58ff3aac5a0b8aa81fc5e11e3152ef6", category: "💼 Professional Development & Workplace Skills" },
      { name: "Developing Interpersonal Skills", link: "https://coursera.org/share/b765fe1c2d6d2938e60ab02ef682c90c", category: "💼 Professional Development & Workplace Skills" },
      { name: "Emotional Intelligence", link: "https://coursera.org/share/f073d5019e8b68700c83333e8976c6f7", category: "💼 Professional Development & Workplace Skills" },
      { name: "Financial Planning for Young Adults", link: "https://coursera.org/share/fdafa6e06fb1f736ec95250797cbafee", category: "💼 Professional Development & Workplace Skills" },
      { name: "Finding Your Professional Voice: Confidence & Impact", link: "https://coursera.org/share/47c228d80bd604d15264993f97ecaa52", category: "💼 Professional Development & Workplace Skills" },
      { name: "Grit and Growth Mindset", link: "https://www.coursera.org/account/accomplishments/verify/B4T272OSM3Y9?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course", category: "💼 Professional Development & Workplace Skills" },
      { name: "Introduction to Personal Branding", link: "https://www.coursera.org/account/accomplishments/verify/P3PQ972VFAL6?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course", category: "💼 Professional Development & Workplace Skills" },
      { name: "Leading with Impact: Team Dynamics, Strategy and Ethics", link: "https://coursera.org/share/b22df79d7974b757e6488843eff11a14", category: "💼 Professional Development & Workplace Skills" },
      { name: "Managing Conflicts with Cultural and Emotional Intelligence", link: "https://coursera.org/share/29754d56e97a44240c8043343ae68d62", category: "💼 Professional Development & Workplace Skills" },
      { name: "Negotiation skills: Negotiate and resolve conflict", link: "https://coursera.org/share/e8d0fbde107ffa9cde05b2f5534ac855", category: "💼 Professional Development & Workplace Skills" },
      { name: "Positive Psychology: Resilience Skills", link: "https://coursera.org/share/bd3da0133cf10dc842a3f92c98294348", category: "💼 Professional Development & Workplace Skills" },
      { name: "Psychology of the Self", link: "https://coursera.org/share/6d565635f451171795b3b9dfdad7bf8b", category: "💼 Professional Development & Workplace Skills" },
      { name: "Solving Problems with Creative and Critical Thinking", link: "https://coursera.org/share/77613f0afc47d130c08ec293ede4ef5c", category: "💼 Professional Development & Workplace Skills" },
      { name: "Verbal Communications and Presentation Skills", link: "https://coursera.org/share/ec0b6f722134a3cfb74dd04885539866", category: "💼 Professional Development & Workplace Skills" },
      { name: "Work Smarter, Not Harder: Time Management for Personal & Professional Productivity", link: "https://coursera.org/share/13f83b5651b9826ca733a5eb97c8923e", category: "💼 Professional Development & Workplace Skills" },
      { name: "Write Professional Emails in English", link: "https://coursera.org/share/37cfebdf84573f4b41b2e07d18756dbe", category: "💼 Professional Development & Workplace Skills" }
    ];

    const categories = [...new Set(certifications.map(cert => cert.category))];

    return (
      <div className="bg-white text-gray-900 p-8 max-w-4xl mx-auto h-[600px] overflow-y-auto">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Professional Certifications</h1>
          <p className="text-sm text-gray-600 mb-4">Complete list of 39 earned certifications organized by category</p>
        </div>

        {categories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-3 border-b border-gray-300 pb-1">
              {category}
            </h3>
            <div className="space-y-2">
              {certifications.filter(cert => cert.category === category).map((cert, certIndex) => (
                <div key={certIndex} className="flex items-center justify-between py-2 pl-4 border-l-2 border-blue-200">
                  <span className="text-sm font-medium text-gray-800">{cert.name}</span>
                  <a 
                    href={cert.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium underline ml-4 flex-shrink-0"
                  >
                    View Certificate
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  } catch (error) {
    console.error('CertificationsContent component error:', error);
    return null;
  }
}
