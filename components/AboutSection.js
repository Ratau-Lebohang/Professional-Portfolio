function AboutSection() {
  try {
    return (
      <section id="about" className="py-20 bg-[var(--bg-color)]" data-name="about-section" data-file="components/AboutSection.js">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-[var(--accent-color)]">Me</span>
            </h2>
            <div className="w-20 h-1 cosmic-gradient mx-auto"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="fade-in">
              <h3 className="text-2xl font-semibold mb-6 text-[var(--accent-color)]">
              
              </h3>
              
              <p className="text-lg mb-6 text-gray-300 leading-relaxed">
                I'm Lebohang Ratau, an IT Management graduate by education and a data analyst by training, with practical experience working on real data projects,
                 and I’m working toward building a strong career in  Data Science, Business Intelligence, and Data Visualization. 
           
              </p>

                 <p className="text-lg mb-6 text-gray-300 leading-relaxed">
                  My approach is grounded in structure, accuracy, and problem-solving, supported by modern analytics and AI techniques.
              </p>
              
              <p className="text-lg mb-6 text-gray-300 leading-relaxed">
                My work includes hands-on projects in SQL, Python, Power BI, Tableau, and predictive analytics, showcasing my ability to clean data, 
                analyse trends, build visual stories, and deliver solutions that add measurable value.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                <strong>Career Goal:</strong> To grow within the technology and data space, apply analytical thinking and innovative problem-solving, 
                add value through data-driven solutions, and use emerging technologies to make a lasting difference.
              </p>

            </div>

          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('AboutSection component error:', error);
    return null;
  }
}