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
              I’m Lebohang Ratau, a data enthusiast with a strong interest in AI and machine learning. 
              My background in IT gave me a solid technical foundation, but it was my curiosity about how data can solve real-world problems that shaped my career path.   </p>

              
              <p className="text-lg mb-6 text-gray-300 leading-relaxed">
              Through certifications and hands-on projects, I’ve applied analytics tools and AI frameworks to turn raw data into insights that drive smarter decisions. </p>
              


              <p className="text-lg text-gray-300 leading-relaxed">
                Career Goal: To grow as a Data Analyst, add value through data-driven solutions, and use emerging technologies to make a lasting difference.
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