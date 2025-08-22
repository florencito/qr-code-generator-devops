import './index.css'
import { createHeader, initHeaderAnimations } from './components/header.js'
import { createQRGenerator, initQRGeneratorFunctions } from './components/qrGenerator.js'
import { createFooter, initFooterFunctions } from './components/footer.js'

// Main app initialization
class QRGeneratorApp {
  constructor() {
    this.isLoaded = false;
    this.init();
  }

  async init() {
    // Show loading state
    this.showLoading();

    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.render());
    } else {
      this.render();
    }
  }

  showLoading() {
    const loading = document.getElementById('loading');
    if (loading) {
      loading.style.display = 'flex';
    }
  }

  hideLoading() {
    const loading = document.getElementById('loading');
    if (loading) {
      loading.style.opacity = '0';
      setTimeout(() => {
        loading.style.display = 'none';
      }, 300);
    }
  }

  async render() {
    try {
      // Initialize component functions
      initQRGeneratorFunctions();
      initFooterFunctions();
      
      // Render components
      this.renderHeader();
      this.renderMain();
      this.renderFooter();

      // Initialize animations and interactions
      setTimeout(() => {
        this.initAnimations();
        this.hideLoading();
        this.showContent();
      }, 500); // Small delay for smoother loading

      // Track page view
      this.trackPageView();

    } catch (error) {
      console.error('Error rendering app:', error);
      this.showError();
    }
  }

  renderHeader() {
    const headerElement = document.getElementById('header');
    if (headerElement) {
      headerElement.innerHTML = createHeader();
    }
  }

  renderMain() {
    const mainElement = document.getElementById('main');
    if (mainElement) {
      mainElement.innerHTML = createQRGenerator();
    }
  }

  renderFooter() {
    const footerElement = document.getElementById('footer');
    if (footerElement) {
      footerElement.innerHTML = createFooter();
    }
  }

  showContent() {
    const elements = ['header', 'main', 'footer'];
    elements.forEach((id, index) => {
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.style.opacity = '1';
          element.classList.add('animate-fade-in');
        }, index * 200);
      }
    });
  }

  initAnimations() {
    // Initialize header animations
    initHeaderAnimations();

    // Add scroll-based animations
    this.initScrollAnimations();

    // Add keyboard shortcuts
    this.initKeyboardShortcuts();
  }

  initScrollAnimations() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-up');
        }
      });
    }, observerOptions);

    // Observe elements that should animate on scroll
    document.querySelectorAll('.card, .qr-result').forEach(el => {
      observer.observe(el);
    });
  }

  initKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
      // Ctrl/Cmd + Enter to generate QR code
      if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        e.preventDefault();
        if (window.generateQR) {
          window.generateQR();
        }
      }

      // Escape to clear/reset
      if (e.key === 'Escape') {
        const resultContainer = document.getElementById('qr-result-container');
        if (resultContainer && !resultContainer.classList.contains('hidden')) {
          e.preventDefault();
          if (window.generateNew) {
            window.generateNew();
          }
        }
      }
    });
  }

  trackPageView() {
    // Track page view with Vercel Analytics
    if (window.va) {
      window.va('track', 'Page View', { page: 'QR Generator' });
    }
  }

  showError() {
    const mainElement = document.getElementById('main');
    if (mainElement) {
      mainElement.innerHTML = `
        <div class="container mx-auto px-4 py-12 text-center">
          <div class="max-w-md mx-auto">
            <div class="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-800 mb-2">Something went wrong</h3>
            <p class="text-gray-600 mb-4">
              We couldn't load the QR generator. Please refresh the page and try again.
            </p>
            <button 
              onclick="window.location.reload()" 
              class="btn-primary focus-ring"
            >
              Refresh Page
            </button>
          </div>
        </div>
      `;
    }

    this.hideLoading();
    this.showContent();
  }
}

// Initialize app when the script loads
new QRGeneratorApp();

// Add global utility functions
window.toggleTheme = () => {
  // Future: implement dark mode toggle
  console.log('Theme toggle not yet implemented');
};

// Add PWA-like features
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    // Future: implement service worker for offline functionality
  });
}

// Add performance tracking
window.addEventListener('load', () => {
  // Track load time
  const loadTime = performance.now();
  if (window.va) {
    window.va('track', 'App Load Time', { 
      time: Math.round(loadTime),
      timeRange: loadTime < 1000 ? 'Fast' : loadTime < 3000 ? 'Medium' : 'Slow'
    });
  }
});
