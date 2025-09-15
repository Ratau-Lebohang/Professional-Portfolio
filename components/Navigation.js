function Navigation({ activeSection }) {
  try {
    const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

    const navItems = [
      { id: 'home', label: 'Home' },
      { id: 'about', label: 'About' },
      { id: 'projects', label: 'Projects' },
      { id: 'skills', label: 'Skills' },
      { id: 'resume', label: 'Resume' },
      { id: 'contact', label: 'Contact' }
    ];

    return (
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--bg-color)] bg-opacity-95 backdrop-filter backdrop-blur-lg border-b border-[var(--accent-color)] border-opacity-20" data-name="navigation" data-file="components/Navigation.js">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="logo-circle">LR</div>
              <span className="text-xl font-bold text-[var(--text-color)]">Lebohang Ratau</span>
            </div>
            
            <div className="hidden lg:flex space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="hidden md:flex items-center space-x-2">
                <a href="mailto:rataulebohang8@gmail.com" className="social-link">
                  <div className="icon-mail text-sm text-[var(--accent-color)]"></div>
                </a>
                <a href="https://github.com/Ratau-Lebohang" target="_blank" className="social-link">
                  <div className="icon-github text-sm text-[var(--text-color)]"></div>
                </a>
                <a href="https://linkedin.com/in/lebohang-r-16067124b" target="_blank" className="social-link">
                  <div className="icon-linkedin text-sm text-blue-400"></div>
                </a>
              </div>
              
              <div className="lg:hidden">
                <div className="icon-menu text-xl text-[var(--text-color)]"></div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  } catch (error) {
    console.error('Navigation component error:', error);
    return null;
  }
}
