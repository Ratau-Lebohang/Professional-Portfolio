function ProjectsSection() {
  try {
    const projects = [
      {
        title: "Sentiment Analysis Dashboard",
        description: "NLP-powered web application analyzing social media sentiment for brand monitoring and insights.",
        techStack: ["JavaScript", "HTML", "TailwindCSS", "React 18"],
        focusArea: ["Real-Time Sentiment Analysis", "Batch Processing", "Keyword Extraction"],
        demoLink: "https://github.com/Ratau-Lebohang/Sentimate-Analysis-System"
      },
      {
        title: "Data Cleaner",
        description: "Data Cleaner is a lightweight yet powerful tool designed to streamline the process of cleaning, profiling, and preparing datasets for analysis and machine learning.",
        techStack: ["JavaScript", "HTML", "TailwindCSS", "React 18"],
        focusArea: ["Data Quality Assessment", "Data Cleaning & Standardization:", "Outlier & Categorical Handling"],
        demoLink: "https://github.com/Ratau-Lebohang/Data-Cleaner"
      },
      {

        title: "Bias & Fairness Audit",
        description: "This project audits a credit card approval dataset for bias against Gender, Ethnicity, and Citizenship. It evaluates fairness, applies mitigation strategies, and provides recommendations for ethical AI in financial decision-making.",
        techStack: ["Python (Pandas, NumPy, Scikit-learn)", "Fairness libraries (AIF360, Fairlearn)", "Data Visualization (Matplotlib, Seaborn)"],
        focusArea: ["Bias Detection", "Fairness Evaluation", "Bias Mitigation"],
        demoLink: "https://github.com/Ratau-Lebohang/Bias-Audit"
      },
      {
        title: "AI Chatbot",
        description: "This project explores employee attrition patterns using an HR dataset sourced from Kaggle. The analysis uncovers key factors driving employee turnover.",
        techStack: ["Python", "TensorFlow", "Apache Kafka", "PostgreSQL"],
        focusArea: ["Real-time processing", "Anomaly detection", "Model deployment"],
        demoLink: "https://github.com/Ratau-Lebohang/AI-Chatbot"
      },
      {
        title: "Alert Rider",
        description: "Alert Rider is a web application that allows users to report hazards, study road signs, and learn safe road practices. It integrates AI (OpenAI API) to rewrite hazard descriptions clearly and professionally, and can translate hazard reports into South African languages.",
        techStack: ["Backend: Node.js, Express.js", "Frontend: HTML, CSS, JavaScript, Leaflet.js", "Deployment: Render / Vercel"],
        focusArea: ["Hazard Reports", "Road Sign Study Tool", " GPS + Map Detection"],
        demoLink: "https://github.com/Capaciti-Tech-Team/Alert_Rider_App"
      },
      {
        title: "Customer Churn Analysis",
        description: "This project utilizes a simulated dataset to mirror real-world customer behavior and service usage patterns. The objective is to identify key churn triggers, understand customer behavior, and provide data-driven strategic recommendations to reduce churn and improve retention.",
        techStack: ["Excel", "SQL", "Power BI"],
       focusArea: ["Understanding churn patterns", "Identifying key churn drivers", "Customer segmentation"],
        demoLink: "https://github.com/Ratau-Lebohang/Lebohang-Analytics-Portfolio/tree/bf214889af8077bf2b48b3ed6a7151768d43ddca/MTN%20Nigeria%20Customer%20Churn%20Analysis"
      }
 
    ];

    return (
      <section id="projects" className="py-20 bg-[var(--primary-color)] bg-opacity-20" data-name="projects-section" data-file="components/ProjectsSection.js">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Featured <span className="text-[var(--accent-color)]">Projects</span>
            </h2>
            <div className="w-20 h-1 cosmic-gradient mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className={`project-card p-6 rounded-xl fade-in ${index < 3 ? 'lg:col-span-1' : index === 3 ? 'lg:col-span-1' : 'lg:col-span-1'}`}>
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
                
                <a 
                  href={project.demoLink}
                  className="inline-flex items-center text-[var(--accent-color)] hover:text-white transition-colors"
                >
                  <span>View Project</span>
                  <div className="icon-external-link text-sm ml-2"></div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('ProjectsSection component error:', error);
    return null;
  }
}
