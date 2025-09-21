function CertificationsSection() {
  try {
    const [showCertifications, setShowCertifications] = React.useState(false);

    const handleViewCertifications = () => {
      setShowCertifications(true);
    };

    const handleCloseCertifications = () => {
      setShowCertifications(false);
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
                Explore my comprehensive collection of professional certifications and achievements in AI, data analytics, and technology.
              </p>
              <button 
                onClick={handleViewCertifications}
                className="inline-flex items-center px-8 py-4 cosmic-gradient text-white rounded-lg font-semibold hover:opacity-90 transition-all transform hover:scale-105"
              >
                <div className="icon-award text-xl mr-3"></div>
                View Certifications
              </button>
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
      // 🧠 Artificial Intelligence & Data
      { name: "AI Essentials", link: "https://coursera.org/share/069be9a8b68fb2e6ea6207d05c592092", category: "🧠 Artificial Intelligence & Data" },
      { name: "AI Foundations: Prompt Engineering with ChatGPT", link: "https://coursera.org/share/8248ec4776c80ce1eeb8fb0a54a2b106", category: "🧠 Artificial Intelligence & Data" },
      { name: "AI For Everyone", link: "https://coursera.org/share/bbfcf927933b7cfb9201e9dae5d86b6a", category: "🧠 Artificial Intelligence & Data" },
      { name: "Artificial Intelligence on Microsoft Azure", link: "https://coursera.org/share/d2dbdb6dbaf40f5ce096439b86a58c15", category: "🧠 Artificial Intelligence & Data" },
      { name: "Building AI Powered Chatbots Without Programming", link: "https://www.coursera.org/account/accomplishments/verify/3P8TUAKF0PPT?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course", category: "🧠 Artificial Intelligence & Data" },
      { name: "Generative AI with Large Language Models", link: "https://coursera.org/share/8194a843a6819ca961972cd9e40a06d8", category: "🧠 Artificial Intelligence & Data" },
      { name: "Google Business Intelligence", link: "https://coursera.org/share/fbce4f0a4d0a97a197621d859826d0a0", category: "🧠 Artificial Intelligence & Data" },
      { name: "Google Data Analytics", link: "https://coursera.org/share/e0e0ce738f9582c121dfdfb1952b149f", category: "🧠 Artificial Intelligence & Data" },
      { name: "Introduction to Artificial Intelligence (AI)", link: "https://coursera.org/share/408e0c44c9af683e1e2b4d2775d334cc", category: "🧠 Artificial Intelligence & Data" },
      { name: "Introduction to Generative AI", link: "https://coursera.org/share/7bc3144efdbe5ebdae04be9a7f69a1d6", category: "🧠 Artificial Intelligence & Data" },
      { name: "Introduction to Responsible AI", link: "https://coursera.org/share/fcc649cb57f9564e25b3f590f58984b2", category: "🧠 Artificial Intelligence & Data" },
      { name: "Python for Data Science, AI & Development", link: "https://coursera.org/share/e32fe5cae8e7df250c0bdaf2bcf05eb1", category: "🧠 Artificial Intelligence & Data" },
      { name: "Trustworthy AI: Managing Bias, Ethics, and Accountability", link: "https://coursera.org/share/a004e725212d8e6410f4bd2a1606b2fe", category: "🧠 Artificial Intelligence & Data" },
      
      // 💼 Business, Leadership & Management
      { name: "Financial Planning for Young Adults", link: "https://coursera.org/share/fdafa6e06fb1f736ec95250797cbafee", category: "💼 Business, Leadership & Management" },
      { name: "Leading with Impact: Team Dynamics, Strategy and Ethics", link: "https://coursera.org/share/b22df79d7974b757e6488843eff11a14", category: "💼 Business, Leadership & Management" },
      { name: "Negotiation skills: Negotiate and resolve conflict", link: "https://coursera.org/share/e8d0fbde107ffa9cde05b2f5534ac855", category: "💼 Business, Leadership & Management" },
      { name: "Work Smarter, Not Harder: Time Management for Personal & Professional Productivity", link: "https://coursera.org/share/13f83b5651b9826ca733a5eb97c8923e", category: "💼 Business, Leadership & Management" },
      
      // 🗣️ Communication & Interpersonal Skills
      { name: "Active Listening: Enhancing Communication Skills", link: "https://coursera.org/share/b58ff3aac5a0b8aa81fc5e11e3152ef6", category: "🗣️ Communication & Interpersonal Skills" },
      { name: "Developing Interpersonal Skills", link: "https://coursera.org/share/b765fe1c2d6d2938e60ab02ef682c90c", category: "🗣️ Communication & Interpersonal Skills" },
      { name: "Finding Your Professional Voice: Confidence & Impact", link: "https://coursera.org/share/47c228d80bd604d15264993f97ecaa52", category: "🗣️ Communication & Interpersonal Skills" },
      { name: "Managing Conflicts with Cultural and Emotional Intelligence", link: "https://coursera.org/share/29754d56e97a44240c8043343ae68d62", category: "🗣️ Communication & Interpersonal Skills" },
      { name: "Verbal Communications and Presentation Skills", link: "https://coursera.org/share/ec0b6f722134a3cfb74dd04885539866", category: "🗣️ Communication & Interpersonal Skills" },
      { name: "Write Professional Emails in English", link: "https://coursera.org/share/37cfebdf84573f4b41b2e07d18756dbe", category: "🗣️ Communication & Interpersonal Skills" },
      
      // 🌱 Personal Development & Psychology
      { name: "Emotional Intelligence", link: "https://coursera.org/share/f073d5019e8b68700c83333e8976c6f7", category: "🌱 Personal Development & Psychology" },
      { name: "Grit and Growth Mindset", link: "https://www.coursera.org/account/accomplishments/verify/B4T272OSM3Y9?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course", category: "🌱 Personal Development & Psychology" },
      { name: "Introduction to Personal Branding", link: "https://www.coursera.org/account/accomplishments/verify/P3PQ972VFAL6?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course", category: "🌱 Personal Development & Psychology" },
      { name: "Positive Psychology: Resilience Skills", link: "https://coursera.org/share/bd3da0133cf10dc842a3f92c98294348", category: "🌱 Personal Development & Psychology" },
      { name: "Psychology of the Self", link: "https://coursera.org/share/6d565635f451171795b3b9dfdad7bf8b", category: "🌱 Personal Development & Psychology" },
      { name: "Solving Problems with Creative and Critical Thinking", link: "https://coursera.org/share/77613f0afc47d130c08ec293ede4ef5c", category: "🌱 Personal Development & Psychology" }
    ];

    const categories = [...new Set(certifications.map(cert => cert.category))];

    return (
      <div className="bg-white text-gray-900 p-8 max-w-4xl mx-auto max-h-96 overflow-y-auto">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Professional Certifications</h1>
          <p className="text-sm text-gray-600 mb-4">Complete list of 26 earned certifications organized by category</p>
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