export function createFooter() {
  return `
    <div class="bg-white/50 backdrop-blur-sm border-t border-white/20">
      <div class="container mx-auto px-4 py-8">
        <div class="text-center">
          <!-- QR Generator Info -->
          <div class="mb-6">
            <h3 class="text-lg font-semibold text-gray-800 mb-2">QR Code Generator</h3>
            <p class="text-gray-600 max-w-2xl mx-auto">
              Create custom QR codes instantly. Part of the florenApps ecosystem - 
              privacy-friendly mini apps that solve boring tasks fast.
            </p>
          </div>

          <!-- Feature highlights -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div class="flex flex-col items-center text-center">
              <div class="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center mb-3">
                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
              </div>
              <h4 class="font-medium text-gray-800 mb-1">Instant Generation</h4>
              <p class="text-sm text-gray-600">Create QR codes in seconds</p>
            </div>

            <div class="flex flex-col items-center text-center">
              <div class="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center mb-3">
                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"></path>
                </svg>
              </div>
              <h4 class="font-medium text-gray-800 mb-1">Multiple Types</h4>
              <p class="text-sm text-gray-600">URL, Text, WiFi, Email & more</p>
            </div>

            <div class="flex flex-col items-center text-center">
              <div class="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center mb-3">
                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                </svg>
              </div>
              <h4 class="font-medium text-gray-800 mb-1">Download Ready</h4>
              <p class="text-sm text-gray-600">PNG & SVG formats available</p>
            </div>
          </div>

          <!-- Links -->
          <div class="flex flex-wrap justify-center items-center gap-6 mb-6 text-sm">
            <a href="https://florenapps.com" class="text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200">
              🏠 florenApps Hub
            </a>
            <a href="https://unfollow.florenapps.online" class="text-gray-600 hover:text-primary-600 transition-colors duration-200">
              📊 Instagram Unfollow
            </a>
            <a href="https://drinkmaster.florenapps.online" class="text-gray-600 hover:text-primary-600 transition-colors duration-200">
              🍻 DrinkMaster
            </a>
            <a href="https://github.com/floren/florenapps-hub/issues" class="text-gray-600 hover:text-primary-600 transition-colors duration-200">
              💡 Suggest Feature
            </a>
          </div>

          <!-- Stats -->
          <div class="flex justify-center items-center gap-8 mb-6 text-xs text-gray-500">
            <span class="flex items-center">
              <svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              100% Client-Side
            </span>
            <span class="flex items-center">
              <svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd"></path>
              </svg>
              Lightning Fast
            </span>
            <span class="flex items-center">
              <svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
              </svg>
              No Account Required
            </span>
          </div>

          <!-- Copyright -->
          <div class="border-t border-gray-200/50 pt-6">
            <p class="text-xs text-gray-500">
              © 2024 florenApps. Made with ❤️ by 
              <a href="https://github.com/floren" class="text-primary-600 hover:text-primary-700 font-medium">
                Floren
              </a>
              . Privacy-friendly mini apps.
            </p>
            <div class="mt-2 flex justify-center items-center gap-4 text-xs text-gray-400">
              <span>Open Source</span>
              <span>•</span>
              <span>Privacy First</span>
              <span>•</span>
              <span>No Tracking</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Footer functions
export function initFooterFunctions() {
  // Add any footer-specific interactions here
  // For now, just basic link analytics tracking
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a');
    if (link && link.href && window.va) {
      const linkText = link.textContent.trim();
      if (linkText && !linkText.includes('github.com')) {
        window.va('track', 'Footer Link Click', { link: linkText });
      }
    }
  });
}
