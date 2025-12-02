function ContactSection() {
  try {
    const [formData, setFormData] = React.useState({
      name: '',
      email: '',
      message: ''
    });
    const [isSubmitted, setIsSubmitted] = React.useState(false);

    const handleInputChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      
      // Create email body with form data
      const emailBody = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
      
      // Open default email client with pre-filled data
      window.location.href = `mailto:rataulebohang8@gmail.com?subject=Portfolio Contact Form Submission&body=${emailBody}`;
      
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', message: '' });
      }, 3000);
    };

    return (
      <section data-name="contact-section" data-file="components/ContactSection.js" style={{"paddingTop":"80px","paddingRight":"0px","paddingBottom":"80px","paddingLeft":"0px","marginTop":"0px","marginRight":"0px","marginBottom":"0px","marginLeft":"0px","fontSize":"16px","color":"rgb(255, 255, 255)","backgroundColor":"#06081e","textAlign":"start","fontWeight":"400","objectFit":"fill","display":"block","position":"static","top":"auto","left":"auto","right":"auto","bottom":"auto"}} id="contact" className="py-20 bg-[var(--bg-color)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Get In <span className="text-[var(--accent-color)]">Touch</span>
            </h2>
            <div className="w-20 h-1 cosmic-gradient mx-auto"></div>
            <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
              Ready to collaborate or have a question? I'd love to hear from you. 
              Let's connect and explore how we can work together.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="fade-in">
              <h3 className="text-2xl font-semibold mb-6 text-[var(--accent-color)]">
                Let's Connect
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-[var(--accent-color)] bg-opacity-20 flex items-center justify-center">
                    <div style={{"paddingTop":"0px","paddingRight":"0px","paddingBottom":"0px","paddingLeft":"0px","marginTop":"0px","marginRight":"0px","marginBottom":"0px","marginLeft":"0px","fontSize":"20px","color":"#ffffff","backgroundColor":"rgba(0, 0, 0, 0)","textAlign":"start","fontWeight":"400","objectFit":"fill","display":"block","position":"static","top":"auto","left":"auto","right":"auto","bottom":"auto"}} className="icon-mail text-xl text-[var(--accent-color)]"></div>
                  </div>
                  <div>
                    <p className="text-gray-300">Email</p>
                    <div className="flex items-center">
                      <div className="icon-mail text-[var(--accent-color)] mr-2"></div>
                      <a 
                        href="mailto:rataulebohang8@gmail.com" 
                        className="text-[var(--accent-color)] hover:text-white hover:underline transition-colors"
                      >
                        rataulebohang8@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-gray-600 bg-opacity-20 flex items-center justify-center">
                    <div className="icon-github text-xl text-white"></div>
                  </div>
                  <div>
                    <p className="text-gray-300">GitHub</p>
                    <div className="flex items-center">
                      <div className="icon-github text-white mr-2"></div>
                      <a href="https://github.com/Ratau-Lebohang" target="_blank" className="text-[var(--accent-color)] hover:text-white hover:underline transition-colors">
                        github.com/Ratau-Lebohang
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-600 bg-opacity-20 flex items-center justify-center">
                    <div className="icon-linkedin text-xl text-blue-400"></div>
                  </div>
                  <div>
                    <p className="text-gray-300">LinkedIn</p>
                    <div className="flex items-center">
                      <div className="icon-linkedin text-blue-400 mr-2"></div>
                      <a href="https://linkedin.com/in/lebohang-r-16067124b" target="_blank" className="text-[var(--accent-color)] hover:text-white hover:underline transition-colors">
                        Lebohang Ratau 
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-orange-600 bg-opacity-20 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-6 h-6">
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
                  </div>
                  <div>
                    <p className="text-gray-300">Tableau Public</p>
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-4 h-4 mr-2">
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
                      <a href="https://public.tableau.com/app/profile/lebohang.ratau/vizzes" target="_blank" className="text-[var(--accent-color)] hover:text-white hover:underline transition-colors">
                        View Visualizations
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="fade-in">
              <form onSubmit={handleSubmit} style={{"paddingTop":"32px","paddingRight":"32px","paddingBottom":"32px","paddingLeft":"32px","marginTop":"0px","marginRight":"0px","marginBottom":"16px","marginLeft":"0px","fontSize":"16px","color":"rgb(255, 255, 255)","backgroundColor":"#073464","textAlign":"start","fontWeight":"400","objectFit":"fill","display":"block","position":"static","top":"auto","left":"auto","right":"auto","bottom":"auto"}} className="p-8 rounded-xl bg-[var(--secondary-color)] bg-opacity-10 backdrop-filter backdrop-blur-lg border border-[var(--secondary-color)] border-opacity-30">
                <div className="mb-6">
                  <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-[var(--bg-color)] border border-[var(--accent-color)] border-opacity-30 rounded-lg text-white focus:border-[var(--accent-color)] focus:outline-none transition-colors"
                    placeholder="Your Name"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-[var(--bg-color)] border border-[var(--accent-color)] border-opacity-30 rounded-lg text-white focus:border-[var(--accent-color)] focus:outline-none transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-[var(--bg-color)] border border-[var(--accent-color)] border-opacity-30 rounded-lg text-white focus:border-[var(--accent-color)] focus:outline-none transition-colors resize-none"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitted}
                  className="w-full py-4 cosmic-gradient text-white rounded-lg font-semibold hover:opacity-90 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitted ? 'Message Sent!' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
          
          <div className="text-center mt-16 fade-in">
            <p className="text-gray-400">
              © 2025 Portfolio. All rights reserved. • Built with passion for AI & Data Science
            </p>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('ContactSection component error:', error);
    return null;
  }
}
