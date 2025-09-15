function FireflyEffects() {
  try {
    React.useEffect(() => {
      const fireflyColors = ['firefly-gold', 'firefly-cyan', 'firefly-pink', 'firefly-green', 'firefly-purple', 'firefly-orange'];
      const fireflies = [];
      
      const createFirefly = () => {
        const firefly = document.createElement('div');
        const colorClass = fireflyColors[Math.floor(Math.random() * fireflyColors.length)];
        firefly.className = `firefly ${colorClass}`;
        
        // Random position
        firefly.style.left = Math.random() * 100 + '%';
        firefly.style.top = Math.random() * 100 + '%';
        
        // Random animation delay for natural effect
        firefly.style.animationDelay = Math.random() * 3 + 's';
        
        document.body.appendChild(firefly);
        fireflies.push(firefly);
        
        return firefly;
      };
      
      // Create 12-15 fireflies
      const fireflyCount = 12 + Math.floor(Math.random() * 4);
      for (let i = 0; i < fireflyCount; i++) {
        setTimeout(() => {
          createFirefly();
        }, i * 200); // Stagger creation
      }
      
      return () => {
        fireflies.forEach(firefly => {
          if (document.body.contains(firefly)) {
            document.body.removeChild(firefly);
          }
        });
      };
    }, []);

    return null;
  } catch (error) {
    console.error('FireflyEffects component error:', error);
    return null;
  }
}
