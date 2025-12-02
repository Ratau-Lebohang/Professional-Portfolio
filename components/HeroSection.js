function HeroSection() {
  try {
    return (
      <section id="home" className="min-h-screen flex items-center justify-center galaxy-gradient relative overflow-hidden" data-name="hero-section" data-file="components/HeroSection.js">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-2 h-2 bg-white rounded-full floating"></div>
          <div className="absolute top-40 right-32 w-1 h-1 bg-[var(--accent-color)] rounded-full floating" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-32 left-1/4 w-1 h-1 bg-[var(--secondary-color)] rounded-full floating" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-white rounded-full floating" style={{animationDelay: '0.5s'}}></div>
        </div>
        
        <div className="text-center z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-shadow fade-in">
            <span className="block">Welcome to my</span>
            <span className="block text-[var(--accent-color)]">Portfolio</span>
          </h1>
          

          <p className="text-xl md:text-2xl mb-8 text-gray-300 fade-in">
            
          </p>
          
          <p className="text-lg mb-10 text-gray-400 max-w-2xl mx-auto fade-in">
         Where I highlight my projects, skills, certificates & badges and experience, targeting roles in Data Analytics, BI, Data Science, and Data Visualization.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in">
            <button 
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 hero-button rounded-lg"
            >
              View My Work
            </button>
            <button 
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 hero-button rounded-lg"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('HeroSection component error:', error);
    return null;
  }
}
