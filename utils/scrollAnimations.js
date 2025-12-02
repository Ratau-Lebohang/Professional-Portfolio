// Scroll animations utility
function initScrollAnimations() {
  try {
    // Create intersection observer for fade-in animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observe all elements with fade-in class
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => {
      observer.observe(el);
    });

    // Add smooth scroll behavior to all internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });

    // Add scroll progress indicator
    const createScrollProgress = () => {
      const progressBar = document.createElement('div');
      progressBar.className = 'fixed top-0 left-0 w-full h-1 z-50 bg-gradient-to-r from-blue-500 to-purple-500 transform origin-left scale-x-0 transition-transform';
      progressBar.style.background = 'linear-gradient(90deg, var(--accent-color), var(--secondary-color))';
      document.body.appendChild(progressBar);

      window.addEventListener('scroll', () => {
        const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        progressBar.style.transform = `scaleX(${scrolled / 100})`;
      });
    };

    // Initialize scroll progress
    createScrollProgress();

    console.log('Scroll animations initialized successfully');
  } catch (error) {
    console.error('Error initializing scroll animations:', error);
  }
}

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', initScrollAnimations);

// Re-initialize when React components mount
if (window.React) {
  const originalUseEffect = React.useEffect;
  React.useEffect = function(effect, deps) {
    return originalUseEffect(() => {
      const result = effect();
      // Re-observe new fade-in elements after component updates
      setTimeout(() => {
        const newFadeElements = document.querySelectorAll('.fade-in:not(.observed)');
        if (newFadeElements.length > 0) {
          initScrollAnimations();
          newFadeElements.forEach(el => el.classList.add('observed'));
        }
      }, 100);
      return result;
    }, deps);
  };
}