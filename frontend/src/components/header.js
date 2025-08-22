export function createHeader() {
  return `
    <div class="container mx-auto px-4 py-8 lg:py-12">
      <div class="text-center">
        <!-- Logo and Brand -->
        <div class="flex justify-center items-center mb-6 animate-slide-up">
          <div class="flex items-center space-x-3">
            <div class="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-primary-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg shadow-primary-500/25 animate-glow">
              <span class="text-white font-bold text-xl md:text-2xl">📱</span>
            </div>
            <div class="text-left">
              <h1 class="heading-primary animate-fade-in">QR Generator</h1>
              <div class="w-24 h-1 bg-gradient-to-r from-primary-500 to-indigo-500 rounded-full animate-slide-up stagger-delay-1"></div>
            </div>
          </div>
        </div>

        <!-- Tagline -->
        <div class="max-w-3xl mx-auto mb-8 animate-slide-up stagger-delay-2">
          <h2 class="heading-secondary mb-4">
            Create custom QR codes in seconds
          </h2>
          <p class="text-lg text-gray-600 leading-relaxed">
            Generate QR codes for URLs, text, WiFi, contacts and more. Download as PNG or SVG. Part of the florenApps ecosystem.
          </p>
        </div>

        <!-- Feature Pills -->
        <div class="flex flex-wrap justify-center gap-3 mb-8 animate-slide-up stagger-delay-3">
          <span class="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-green-100 text-green-800 border border-green-200">
            <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
            </svg>
            Instant Generation
          </span>
          <span class="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-800 border border-blue-200">
            <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clip-rule="evenodd"></path>
            </svg>
            Multiple Formats
          </span>
          <span class="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-purple-100 text-purple-800 border border-purple-200">
            <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd"></path>
            </svg>
            Download Ready
          </span>
        </div>

        <!-- Back to Hub Link -->
        <div class="animate-slide-up stagger-delay-4 mb-4">
          <a 
            href="https://florenapps.com" 
            class="inline-flex items-center text-sm text-gray-500 hover:text-primary-600 transition-colors duration-200"
          >
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
            </svg>
            Back to florenApps
          </a>
        </div>

        <!-- CTA Section -->
        <div class="animate-slide-up stagger-delay-4">
          <p class="text-gray-500 mb-6">Enter your content below to generate a QR code</p>
          <div class="w-16 h-0.5 bg-gradient-to-r from-transparent via-primary-300 to-transparent mx-auto"></div>
        </div>
      </div>
    </div>
  `;
}

// Add animation utilities
export function initHeaderAnimations() {
  // Add intersection observer for scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-slide-up');
      }
    });
  }, observerOptions);

  // Observe elements that should animate
  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
  });
}
