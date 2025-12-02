function ResumeSection() {
  try {
    const [showResume, setShowResume] = React.useState(false);

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
          
          <div style={{"paddingTop":"32px","paddingRight":"32px","paddingBottom":"32px","paddingLeft":"32px","marginTop":"0px","marginRight":"0px","marginBottom":"0px","marginLeft":"0px","fontSize":"16px","color":"#0c083a","backgroundColor":"rgba(255, 255, 255, 0.05)","textAlign":"start","fontWeight":"400","objectFit":"fill","display":"block","position":"static","top":"auto","left":"auto","right":"auto","bottom":"auto"}} className="bg-white bg-opacity-5 rounded-xl p-8 backdrop-filter backdrop-blur-lg border border-[var(--accent-color)] border-opacity-20 fade-in observed visible">
            <div className="text-center mb-8">
             <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
               Review my resume below as a quick guide to my background, capabilities, and the value I bring to data-driven and tech-focused roles.
              </p>
              <button 
                onClick={handleViewResume}
                className="inline-flex items-center px-8 py-4 cosmic-gradient text-white rounded-lg font-semibold hover:opacity-90 transition-all transform hover:scale-105"
              >
                <div className="icon-eye text-xl mr-3"></div>
                View Resume
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
                Last updated: December 2025 • 
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
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Lebohang Ratau</h1>
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
          An IT Management graduate by education and a data analyst by training, with practical experience working on real data projects. I apply a structured, accurate, and solution-driven approach, strengthened by modern analytics and AI techniques. 
          Passionate about driving analytical excellence and eager to contribute to productivity and innovation in tech or data-focused roles.
          </p>
        </div>


        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3 border-b border-gray-300 pb-1">EXPERIENCE</h3>
          <div className="mb-4">
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-semibold">Digital Associate: Data Analyst</h4>
              <span className="text-sm text-gray-600">July 2025 - Present</span>
            </div>
            <p style={{"paddingTop":"0px","paddingRight":"0px","paddingBottom":"0px","paddingLeft":"0px","marginTop":"0px","marginRight":"0px","marginBottom":"8px","marginLeft":"0px","fontSize":"14px","color":"#050505","backgroundColor":"rgba(0, 0, 0, 0)","textAlign":"start","fontWeight":"400","objectFit":"fill","display":"block","position":"static","top":"auto","left":"auto","right":"auto","bottom":"auto"}} className="text-sm text-blue-600 mb-2">CAPACITI, Johannesburg</p>
            <ul className="text-sm list-disc list-inside space-y-1">

              <li>Completed practical projects and assessments in Data Analytics and AI, gaining real-world, hands-on experience.</li>
              <li>Developed strong proficiency in Python, SQL and Power BI, delivering insights that support data-driven decisions.</li>
              <li>Demonstrated professionalism, accountability, and effective time management in collaborative team projects.</li>
            </ul>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3 border-b border-gray-300 pb-1">EDUCATION</h3>
          <div className="mb-4">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-semibold">Diploma in Information Technology Management</h4>
                <p style={{"paddingTop":"0px","paddingRight":"0px","paddingBottom":"0px","paddingLeft":"0px","marginTop":"0px","marginRight":"0px","marginBottom":"0px","marginLeft":"0px","fontSize":"14px","color":"#0a0a0a","backgroundColor":"rgba(0, 0, 0, 0)","textAlign":"start","fontWeight":"400","objectFit":"fill","display":"block","position":"static","top":"auto","left":"auto","right":"auto","bottom":"auto"}} className="text-sm text-blue-600">IIE Rosebank College • Johannesburg</p>
              </div>
              <span className="text-sm text-gray-600">2024</span>
            </div>
          </div>
          <div>
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-semibold">National Senior Certificate</h4>
                <p style={{"paddingTop":"0px","paddingRight":"0px","paddingBottom":"0px","paddingLeft":"0px","marginTop":"0px","marginRight":"0px","marginBottom":"0px","marginLeft":"0px","fontSize":"14px","color":"#080808","backgroundColor":"rgba(0, 0, 0, 0)","textAlign":"start","fontWeight":"400","objectFit":"fill","display":"block","position":"static","top":"auto","left":"auto","right":"auto","bottom":"auto"}} className="text-sm text-blue-600">Katlehong High School</p>
              </div>
              <span className="text-sm text-gray-600">2020</span>
            </div>
          </div>
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


        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3 border-b border-gray-300 pb-1">CERTIFICATIONS</h3>
          <ul className="text-sm space-y-2">
             <li>• <a href="https://coursera.org/share/3360fb583070d73c3ccc1bd57b55cc2c" target="_blank" className="text-blue-600 underline hover:text-blue-800">Data Analysis and Visualization with Power BI</a></li>
             <li>• <a href="https://www.coursera.org/account/accomplishments/professional-cert/97E6GP3NL9LZ?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=prof" target="_blank" className="text-blue-600 underline hover:text-blue-800">IBM Data Science (Extended Learning Path)</a></li>
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




