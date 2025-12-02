function ProjectsSection() {
  try {
    const scrollContainerRef = React.useRef(null);
    
    const projects = [
      {
        title: "Data Cleaner",
        description: "Data Cleaner is a lightweight yet powerful tool designed to streamline the process of cleaning, profiling, and preparing datasets for analysis and machine learning.",
        techStack: ["JavaScript", "HTML", "TailwindCSS", "React 18"],
        focusArea: ["Data Quality Assessment", "Data Cleaning & Standardization", "Outlier & Categorical Handling"],
        repoLink: "https://github.com/Ratau-Lebohang/Data-Cleaner",
        demoLink: "https://ratau-lebohang.github.io/Data-Cleaner/"
      },
      {
        title: "AI Chatbot",
        description: "An interactive, single-page web interface that integrates a Voiceflow-powered chatbot. The assistant helps users learn AI fundamentals, machine learning concepts, and artificial intelligence principles.",
        techStack: ["React 18", "TailwindCSS", "Voiceflow"],
        focusArea: ["AI learning and education", "Educational chatbot interface"],
        repoLink: "https://github.com/Ratau-Lebohang/AI-Chatbot",
        demoLink: "https://ratau-lebohang.github.io/AI-Chatbot/"
      },
       {
        title: "Alert Rider",
        description: "Alert Rider is a web application that allows users to report hazards, study road signs, and learn safe road practices. It integrates AI (OpenAI API) to rewrite hazard descriptions clearly and professionally, and can translate hazard reports into South African languages.",
        techStack: ["Node.js", "Express.js", "Leaflet.js"],
        focusArea: ["Hazard Reports", "Road Sign Study Tool", "GPS + Map Detection"],
        repoLink: "https://github.com/Capaciti-Tech-Team/Alert_Rider_App",
        demoLink: "https://alerttriderapp.onrender.com/"
      },
      {
        title: "Bias & Fairness Audit",
        description: "This project audits a credit card approval dataset for bias against Gender, Ethnicity, and Citizenship. It evaluates fairness and applies mitigation strategies.",
        techStack: ["Python", "Pandas", "Scikit-learn", "AIF360"],
        focusArea: ["Bias Detection", "Fairness Evaluation", "Bias Mitigation"],
        repoLink: "https://github.com/Ratau-Lebohang/Bias-Audit",
        demoLink: "https://github.com/Ratau-Lebohang/Bias-Audit?tab=readme-ov-file"
      },
      
      {
        title: "Sentiment Analysis Dashboard",
        description: "NLP-powered web application analyzing social media sentiment for brand monitoring and insights with real-time processing capabilities.",
        techStack: ["JavaScript", "React 18", "NLP Libraries"],
        focusArea: ["Real-Time Sentiment Analysis", "Batch Processing", "Keyword Extraction"],
        repoLink: "https://github.com/Ratau-Lebohang/Sentiment-Analysis",
        demoLink: "https://b27twzkhwqor.trickle.host"
      }
      
    ];

    
    const scroll = (direction) => {
      if (scrollContainerRef.current) {
        const scrollAmount = 400;
        const newPosition = scrollContainerRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
        scrollContainerRef.current.scrollTo({
          left: newPosition,
          behavior: 'smooth'
        });
      }
    };

    return (
      <section id="projects" className="py-20 bg-[var(--primary-color)] bg-opacity-20" data-name="projects-section" data-file="components/ProjectsSection.js">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Featured <span className="text-[var(--accent-color)]">Projects</span>
            </h2>
            <div className="w-20 h-1 cosmic-gradient mx-auto"></div>
          </div>
          
          <div className="relative">
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-[var(--accent-color)] rounded-full flex items-center justify-center hover:bg-[var(--secondary-color)] transition-all shadow-lg"
              aria-label="Scroll left"
            >
              <div className="icon-chevron-left text-xl text-white"></div>
            </button>
            
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-[var(--accent-color)] rounded-full flex items-center justify-center hover:bg-[var(--secondary-color)] transition-all shadow-lg"
              aria-label="Scroll right"
            >
              <div className="icon-chevron-right text-xl text-white"></div>
            </button>
            
            <div 
              ref={scrollContainerRef}
              className="flex gap-8 overflow-x-auto scroll-smooth px-12 py-4 scrollbar-hide"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {projects.map((project, index) => (
                <div key={index} className="project-card p-6 rounded-xl fade-in flex-shrink-0 w-96">
                <h3 className="text-xl font-semibold mb-3 text-[var(--accent-color)]">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-[var(--secondary-color)] mb-2">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-[var(--accent-color)] text-white text-sm rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-[var(--secondary-color)] mb-2">Focus Areas:</h4>
                  <ul className="text-gray-400 text-sm space-y-1">
                    {project.focusArea.map((area, areaIndex) => (
                      <li key={areaIndex} className="flex items-start">
                        <span className="text-[var(--accent-color)] mr-2">•</span>
                        {area}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3 mt-2">
                  {project.demoLink && (
                    <a 
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 border-2 border-[var(--accent-color)] text-[var(--accent-color)] rounded-lg font-semibold hover:bg-[var(--accent-color)] hover:text-white transition-all transform hover:scale-105"
                    >
                      <div className="icon-external-link text-lg mr-2"></div>
                      <span>View Demo</span>
                    </a>
                  )}
                  <a 
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-4 py-2 border-2 border-[var(--accent-color)] text-[var(--accent-color)] rounded-lg font-semibold hover:bg-[var(--accent-color)] hover:text-white transition-all transform hover:scale-105"
                  >
                    <div className="icon-github text-lg mr-2"></div>
                    <span>View Project</span>
                  </a>
                </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('ProjectsSection component error:', error);
    return null;
  }
}


