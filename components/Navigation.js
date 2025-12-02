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
      { id: 'certifications', label: 'Certifications' },
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
                <a href="https://public.tableau.com/app/profile/lebohang.ratau/vizzes" target="_blank" className="social-link">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-4 h-4">
                    <rect width="1.5" height="9" x="22.75" y="1" fill="#78909c"></rect>
                    <rect width="9" height="1.5" x="19" y="4.75" fill="#78909c"></rect>
                    <rect width="1.5" height="9" x="40.75" y="19" fill="#5c6bc0"></rect>
                    <rect width="9" height="1.5" x="37" y="22.75" fill="#5c6bc0"></rect>
                    <rect width="1.5" height="9" x="4.75" y="19" fill="#78909c"></rect>
                    <rect width="9" height="1.5" x="1" y="22.75" fill="#78909c"></rect>
                    <rect width="1.5" height="9" x="22.75" y="37" fill="#5c6bc0"></rect>
                    <rect width="9" height="1.5" x="19" y="40.75" fill="#5c6bc0"></rect>
                    <rect width="17" height="3" x="15" y="22" fill="#e8762d"></rect>
                    <rect width="3" height="17" x="22" y="15" fill="#e8762d"></rect>
                    <rect width="2" height="14" x="11" y="6" fill="#ffa000"></rect>
                    <rect width="14" height="2" x="5" y="12" fill="#ffa000"></rect>
                    <rect width="2" height="14" x="34" y="6" fill="#607d8b"></rect>
                    <rect width="14" height="2" x="28" y="12" fill="#607d8b"></rect>
                    <rect width="2" height="14" x="11" y="27" fill="#c62828"></rect>
                    <rect width="14" height="2" x="5" y="33" fill="#c62828"></rect>
                    <rect width="2" height="14" x="34" y="27" fill="#0d47a1"></rect>
                    <rect width="14" height="2" x="28" y="33" fill="#0d47a1"></rect>
                  </svg>
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
