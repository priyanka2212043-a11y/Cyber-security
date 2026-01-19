/**
 * Green Truth - Interactive Components
 * Mobile navigation and smooth scroll behavior
 */

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  
  if (menuToggle && mobileNav) {
    menuToggle.addEventListener('click', function() {
      this.classList.toggle('active');
      mobileNav.classList.toggle('active');
    });
    
    // Close mobile menu when clicking a link
    const mobileLinks = mobileNav.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', function() {
        menuToggle.classList.remove('active');
        mobileNav.classList.remove('active');
      });
    });
  }
  
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#' && document.querySelector(href)) {
        e.preventDefault();
        const target = document.querySelector(href);
        const headerOffset = 70;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Active navigation highlighting
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-menu a, .mobile-nav a');
  
  navLinks.forEach(link => {
    const linkPage = link.getAttribute('href');
    if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
      link.classList.add('active');
    }
  });
  
  // Stats counter animation (optional - activates on scroll)
  const counters = document.querySelectorAll('.stat-number');
  const speed = 200;
  let hasAnimated = false;
  
  const animateCounters = () => {
    if (hasAnimated) return;
    
    counters.forEach(counter => {
      const target = counter.getAttribute('data-target');
      if (!target) return;
      
      const updateCount = () => {
        const count = +counter.innerText.replace(/[^0-9]/g, '');
        const increment = target / speed;
        
        if (count < target) {
          counter.innerText = Math.ceil(count + increment).toLocaleString();
          setTimeout(updateCount, 1);
        } else {
          counter.innerText = parseInt(target).toLocaleString();
        }
      };
      
      updateCount();
    });
    
    hasAnimated = true;
  };
  
  // Trigger counter animation when stats section is visible
  const statsSection = document.querySelector('.stats');
  if (statsSection) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounters();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    
    observer.observe(statsSection);
  }
  
  // Newsletter form handler (static - shows confirmation)
  const newsletterForms = document.querySelectorAll('.newsletter-form');
  newsletterForms.forEach(form => {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const input = this.querySelector('.newsletter-input');
      if (input && input.value) {
        alert('Thank you for subscribing to Green Truth updates!');
        input.value = '';
      }
    });
  });
});
