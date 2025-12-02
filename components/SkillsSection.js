function SkillsSection() {
  try {
    const [isVisible, setIsVisible] = React.useState(false);
    
    React.useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        },
        { threshold: 0.3 }
      );
      
      const section = document.getElementById('skills');
      if (section) {
        observer.observe(section);
      }
      
      return () => observer.disconnect();
    }, []);

    const skillCategories = [
      {
        category: "Programming Languages",
        skills: [
          { name: "SQL", level: 75 },
          { name: "Python", level: 60 },
          { name: "JavaScript", level: 75 },
          { name: "HTML/CSS", level: 75 },
          { name: "DAX (Power BI language)", level: 88 }
        ]
      },
      {
        category: "Tools & Platforms",
        skills: [
          { name: "Excel (Advanced: PivotTables, Power Query)", level: 98 },
          { name: "GitHub", level: 90 },
          { name: "Jupyter Notebook", level: 70 },
          { name: "Power BI", level: 85 },
          { name: "Tableau", level: 70 }
        ]
      },
      {
        category: "Core Concepts",
        skills: [
          { name: "AI Fundamentals", level: 88 },
          { name: "Data Analysis", level: 85 },
          { name: "Statistical Analysis", level: 60 },
          { name: "Dashboard Development", level: 80 },
          { name: "Data Storytelling", level: 80 }
        ]
      }



    ];

    return (

      <section id="skills" className="py-20 bg-[var(--bg-color)]" data-name="skills-section" data-file="components/SkillsSection.js">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Technical <span className="text-[var(--accent-color)]">Skills</span>
            </h2>
            <div className="w-20 h-1 cosmic-gradient mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="fade-in">
                <h3 className="text-xl font-semibold mb-6 text-[var(--secondary-color)]">
                  {category.category}
                </h3>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300">{skill.name}</span>
                        <span className="text-[var(--accent-color)] text-sm font-semibold">
                          {skill.level}%
                        </span>
                      </div>
                      
                      <div className="skill-bar h-2">
                        <div 
                          className="skill-progress"
                          style={{
                            width: isVisible ? `${skill.level}%` : '0%'
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('SkillsSection component error:', error);
    return null;
  }
}