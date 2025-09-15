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
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <div className="w-96 h-96 mx-auto rounded-2xl galaxy-gradient p-2">
                <div className="w-full h-full rounded-xl bg-[var(--bg-color)] overflow-hidden">
                  <img 
                    src="https://app.trickle.so/storage/public/images/usr_139d0944e8000001/16cbb6c5-3ee5-4aae-a9de-253a2e20aa0a.png"
                    alt="Lebohang Ratau - Profile Photo"
                    className="w-full h-full object-cover object-center"
                    loading="eager"
                    style={{
                      imageRendering: 'high-quality',
                      filter: 'contrast(1.05) brightness(1.02)'
                    }}
                  />
                </div>
              </div>
            </div>
            
            <div className="fade-in">
              <h3 className="text-2xl font-semibold mb-6 text-[var(--accent-color)]">
                AI/ML & Data Analyst Enthusiast
              </h3>
              

              <p className="text-lg mb-6 text-gray-300 leading-relaxed">
                I’m Lebohang Ratau, a Data Analyst and AI/ML Enthusiast with a strong focus on transforming data into actionable insights. 
                I’ve strengthened my expertise through certifications and hands-on projects using data analytics tools and AI/ML frameworks.
              </p>
              
              <p className="text-lg mb-6 text-gray-300 leading-relaxed">
                I’m passionate about solving real-world problems with data and AI, always eager to learn new technologies,
                 and applying automation and visualization to create meaningful impact.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                Career Goal: To grow as a Data Analyst and contribute value through data and emerging technologies.
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