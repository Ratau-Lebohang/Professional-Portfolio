function HeroSection() {
  try {
    React.useEffect(() => {
      const fireflyColors = ['firefly-gold', 'firefly-cyan', 'firefly-pink', 'firefly-green', 'firefly-purple', 'firefly-orange'];
      const heroFireflies = [];
      
      const createHeroFirefly = () => {
        const firefly = document.createElement('div');
        const colorClass = fireflyColors[Math.floor(Math.random() * fireflyColors.length)];
        firefly.className = `firefly ${colorClass}`;
        
        // Position within hero section bounds
        const heroSection = document.getElementById('home');
        if (heroSection) {
          const rect = heroSection.getBoundingClientRect();
          firefly.style.left = (Math.random() * 90 + 5) + '%';
          firefly.style.top = (window.scrollY + rect.top + Math.random() * rect.height) + 'px';
          firefly.style.animationDelay = Math.random() * 3 + 's';
          
          document.body.appendChild(firefly);
          heroFireflies.push(firefly);
        }
      };
      
      // Create 10 additional fireflies for hero section
      for (let i = 0; i < 10; i++) {
        setTimeout(() => {
          createHeroFirefly();
        }, i * 150);
      }
      
      return () => {
        heroFireflies.forEach(firefly => {
          if (document.body.contains(firefly)) {
            document.body.removeChild(firefly);
          }
        });
      };
    }, []);

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
            AI & Data Analytics Enthusiast
          </p>
          
          <p className="text-lg mb-10 text-gray-400 max-w-2xl mx-auto fade-in">
            Turning complex data into actionable insights with AI.
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