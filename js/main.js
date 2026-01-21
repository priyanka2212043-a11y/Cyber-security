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
      const submitBtn = this.querySelector('button[type="submit"]');
      
      if (input && input.value) {
        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(input.value)) {
          alert('Please enter a valid email address.');
          return;
        }
        
        // Show loading state
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '⏳ Subscribing...';
        submitBtn.disabled = true;
        
        // Simulate API call
        setTimeout(() => {
          alert('✅ Thank you for subscribing to Green Truth updates!\\n\\nYou will receive weekly updates about our campaigns and actions.');
          input.value = '';
          submitBtn.innerHTML = originalText;
          submitBtn.disabled = false;
        }, 500);
      }
    });
  });
  
  // Add click tracking for all buttons (optional analytics)
  const allButtons = document.querySelectorAll('.btn, button, a[class*="btn"]');
  allButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      const buttonText = this.innerText || this.getAttribute('aria-label') || 'Unknown Button';
      console.log('Button clicked:', buttonText);
      
      // Check if link is external
      const href = this.getAttribute('href');
      if (href && (href.startsWith('http') || href.startsWith('https')) && !href.includes(window.location.hostname)) {
        // External link - could track analytics here
        console.log('External link clicked:', href);
      }
    });
  });
  
  // Smooth scroll enhancement for internal anchor links within pages
  window.addEventListener('load', function() {
    if (window.location.hash) {
      const target = document.querySelector(window.location.hash);
      if (target) {
        setTimeout(() => {
          const headerOffset = 80;
          const elementPosition = target.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });
  
  // Add ripple effect to buttons on click (visual feedback)
  document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
      const ripple = document.createElement('span');
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;
      
      ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.5);
        left: ${x}px;
        top: ${y}px;
        pointer-events: none;
        transform: scale(0);
        animation: ripple 0.6s ease-out;
      `;
      
      this.style.position = 'relative';
      this.style.overflow = 'hidden';
      this.appendChild(ripple);
      
      setTimeout(() => ripple.remove(), 600);
    });
  });
});
