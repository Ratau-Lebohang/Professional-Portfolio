function ResumeSection() {
  try {
    const [showResume, setShowResume] = React.useState(false);

    const handleDownload = () => {
      // Download the actual PDF resume file
      const link = document.createElement('a');
      link.href = 'assets/lebohang_ratau_resume_2025.pdf';
      link.download = 'Lebohang_Ratau_Resume_2025.pdf';
      link.target = '_blank';
      document.body.appendChild(link);

      link.click();
      document.body.removeChild(link);
    };

    const handleViewResume = () => {
      setShowResume(true);
    };

    const handleCloseResume = () => {
      setShowResume(false);
    };

    return (
      <section id="resume" className="py-20 bg-[var(--primary-color)] bg-opacity-10" data-name="resume-section" data-file="components/ResumeSection.js">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              My <span className="text-[var(--accent-color)]">Resume</span>
            </h2>
            <div className="w-20 h-1 cosmic-gradient mx-auto"></div>
          </div>
          
          <div className="bg-white bg-opacity-5 rounded-xl p-8 backdrop-filter backdrop-blur-lg border border-[var(--accent-color)] border-opacity-20 fade-in">
            <div className="text-center mb-8 space-x-4">
              <button 
                onClick={handleViewResume}
                className="inline-flex items-center px-8 py-4 border-2 border-[var(--accent-color)] text-[var(--accent-color)] rounded-lg font-semibold hover:bg-[var(--accent-color)] hover:text-white transition-all transform hover:scale-105"
              >
                <div className="icon-eye text-xl mr-3"></div>
                View Resume
              </button>
              <button 
                onClick={handleDownload}
                className="inline-flex items-center px-8 py-4 cosmic-gradient text-white rounded-lg font-semibold hover:opacity-90 transition-all transform hover:scale-105"
              >
                <div className="icon-download text-xl mr-3"></div>
                Download Resume
              </button>
            </div>
            
            {showResume && (
              <div className="bg-white rounded-lg overflow-hidden shadow-2xl mb-8 relative">
                <button
                  onClick={handleCloseResume}
                  className="absolute top-4 right-4 z-10 w-8 h-8 bg-gray-600 hover:bg-gray-700 text-white rounded-full flex items-center justify-center transition-colors"
                >
                  <div className="icon-x text-sm"></div>
                </button>
                <ResumeContent />
              </div>
            )}
            
            <div className="text-center">
              <p className="text-gray-400">
                Last updated: September 2025 • 
                <span className="text-[var(--accent-color)]"> Always open to new opportunities</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('ResumeSection component error:', error);
    return null;
  }
}

function ResumeContent() {
  try {
    return (
      <div className="bg-white text-gray-900 p-8 max-w-4xl mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Ratau Lebohang</h1>
          <div className="text-sm mb-4">
            <span>Klippoortjie, Johannesburg | 071 165 8377 | rataulebohang8@gmail.com | </span>
            <a href="https://linkedin.com/in/lebohang-r-16067124b" target="_blank" className="text-blue-600 underline hover:text-blue-800">LinkedIn</a>
            <span> | </span>
            <a href="https://github.com/Ratau-Lebohang" target="_blank" className="text-blue-600 underline hover:text-blue-800">GitHub</a>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3 border-b border-gray-300 pb-1">PROFESSIONAL SUMMARY</h3>
          <p className="text-sm leading-relaxed">
            Highly analytical Data Analyst with a solid foundation in AI and machine learning principles. Skilled in SQL, Python, Excel, Tableau, and Power BI, with a passion for transforming complex data into actionable insights, with practical experience applying machine learning to turn data into actionable insights.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3 border-b border-gray-300 pb-1">SKILLS</h3>
          <ul className="text-sm space-y-1">
            <li>• <strong>Programming Languages:</strong> Python, SQL, HTML/CSS, JavaScript</li>
            <li>• <strong>Tools & Platforms:</strong> Excel, Jupyter Notebook, VS Code, Git/GitHub</li>
            <li>• <strong>Data Visualization:</strong> Tableau, Power BI, Matplotlib, Plotly</li>
            <li>• <strong>Other:</strong> Documentation, Project Planning</li>
            <li>• <strong>Soft Skills:</strong> Problem-Solving, Communication, Critical Thinking, Time Management, Collaboration</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3 border-b border-gray-300 pb-1">EXPERIENCE</h3>
          <div className="mb-4">
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-semibold">Digital Associate: Data Analyst</h4>
              <span className="text-sm text-gray-600">July 2025 - Present</span>
            </div>
            <p className="text-sm text-blue-600 mb-2">CAPACITI, Johannesburg</p>
            <ul className="text-sm list-disc list-inside space-y-1">
              <li>Completed bootcamp and hands-on training in AI fundamentals and data analytics</li>
              <li>Collaborated on team projects, enhancing communication, accountability, and project delivery skills</li>
            </ul>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3 border-b border-gray-300 pb-1">EDUCATION</h3>
          <div className="mb-4">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-semibold">Diploma in Information Technology Management</h4>
                <p className="text-sm text-blue-600">IIE Rosebank College • Johannesburg</p>
              </div>
              <span className="text-sm text-gray-600">2024</span>
            </div>
          </div>
          <div>
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-semibold">National Senior Certificate</h4>
                <p className="text-sm text-blue-600">Katlehong High School</p>
              </div>
              <span className="text-sm text-gray-600">2020</span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3 border-b border-gray-300 pb-1">CERTIFICATIONS</h3>
          <ul className="text-sm space-y-2">
            <li>• <a href="https://coursera.org/share/823b1543a47d3be09a2fe1f8f83628fb" target="_blank" className="text-blue-600 underline hover:text-blue-800">Google Data Analytics Certificate</a></li>
            <li>• <a href="https://coursera.org/share/494a873ec8eb08aecc428b94edbdac66" target="_blank" className="text-blue-600 underline hover:text-blue-800">Google Business Intelligence Certificate</a></li>
            <li>• <a href="https://coursera.org/share/471b435f3debe219ed44c857301be849" target="_blank" className="text-blue-600 underline hover:text-blue-800">Artificial Intelligence Bootcamp Badge</a></li>
            <li>• <a href="https://coursera.org/share/ed8ef6a4ad47619cc23d1576f831d092" target="_blank" className="text-blue-600 underline hover:text-blue-800">Professional Development Badge</a></li>
          </ul>
        </div>
      </div>
    );
  } catch (error) {
    console.error('ResumeContent component error:', error);
    return null;
  }
}


