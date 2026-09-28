const animatedElements = document.querySelectorAll('.scroll-animate-left');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Screen par aate hi left se slide hoke dikhega
      entry.target.classList.add('show');
    } else {
      // Scroll out hote hi wapis left slide karke gayab ho jayega
      entry.target.classList.remove('show');
    }
  });
}, {
  threshold: 0.2 // Element 20% dikhte hi animation trigger hogi
});

animatedElements.forEach(el => observer.observe(el));