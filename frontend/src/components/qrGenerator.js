export function createQRGenerator() {
  return `
    <div class="container mx-auto px-4 pb-12">
      <!-- Main Generator Card -->
      <div class="max-w-2xl mx-auto">
        <div class="card p-8 animate-slide-up">
          <!-- QR Type Selector -->
          <div class="mb-6">
            <label class="block text-sm font-medium text-gray-700 mb-3">QR Code Type</label>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-2">
              <button 
                onclick="selectQRType('url')" 
                class="qr-type-btn active" 
                data-type="url"
              >
                <svg class="w-4 h-4 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
                </svg>
                <span class="text-xs font-medium">URL</span>
              </button>
              <button 
                onclick="selectQRType('text')" 
                class="qr-type-btn" 
                data-type="text"
              >
                <svg class="w-4 h-4 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
                <span class="text-xs font-medium">Text</span>
              </button>
              <button 
                onclick="selectQRType('wifi')" 
                class="qr-type-btn" 
                data-type="wifi"
              >
                <svg class="w-4 h-4 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"></path>
                </svg>
                <span class="text-xs font-medium">WiFi</span>
              </button>
              <button 
                onclick="selectQRType('email')" 
                class="qr-type-btn" 
                data-type="email"
              >
                <svg class="w-4 h-4 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <span class="text-xs font-medium">Email</span>
              </button>
            </div>
          </div>

          <!-- Input Forms -->
          <div id="input-forms">
            <!-- URL Form -->
            <div id="url-form" class="qr-form active">
              <label class="block text-sm font-medium text-gray-700 mb-2">Enter URL</label>
              <input 
                type="url" 
                id="url-input" 
                class="input-field" 
                placeholder="https://example.com"
                onkeypress="handleEnterKey(event)"
              />
            </div>

            <!-- Text Form -->
            <div id="text-form" class="qr-form">
              <label class="block text-sm font-medium text-gray-700 mb-2">Enter Text</label>
              <textarea 
                id="text-input" 
                class="input-field min-h-[100px] resize-none" 
                placeholder="Enter any text you want to encode..."
              ></textarea>
            </div>

            <!-- WiFi Form -->
            <div id="wifi-form" class="qr-form">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Network Name (SSID)</label>
                  <input 
                    type="text" 
                    id="wifi-ssid" 
                    class="input-field" 
                    placeholder="MyWiFiNetwork"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Security Type</label>
                  <select id="wifi-security" class="input-field">
                    <option value="WPA">WPA/WPA2</option>
                    <option value="WEP">WEP</option>
                    <option value="nopass">Open Network</option>
                  </select>
                </div>
              </div>
              <div class="mt-4">
                <label class="block text-sm font-medium text-gray-700 mb-2">Password</label>
                <input 
                  type="password" 
                  id="wifi-password" 
                  class="input-field" 
                  placeholder="WiFi password"
                />
              </div>
              <div class="mt-4 flex items-center">
                <input 
                  type="checkbox" 
                  id="wifi-hidden" 
                  class="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 rounded focus:ring-primary-500"
                />
                <label for="wifi-hidden" class="ml-2 text-sm text-gray-600">Hidden Network</label>
              </div>
            </div>

            <!-- Email Form -->
            <div id="email-form" class="qr-form">
              <div class="space-y-4">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email-address" 
                    class="input-field" 
                    placeholder="contact@example.com"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Subject (Optional)</label>
                  <input 
                    type="text" 
                    id="email-subject" 
                    class="input-field" 
                    placeholder="Email subject"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Message (Optional)</label>
                  <textarea 
                    id="email-body" 
                    class="input-field min-h-[80px] resize-none" 
                    placeholder="Email message..."
                  ></textarea>
                </div>
              </div>
            </div>
          </div>

          <!-- Customization Options -->
          <div class="mt-6 border-t border-gray-100 pt-6">
            <h3 class="text-sm font-medium text-gray-700 mb-4">Customization</h3>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div>
                <label class="block text-xs font-medium text-gray-600 mb-2">Size</label>
                <select id="qr-size" class="input-field text-sm py-2">
                  <option value="200">Small (200px)</option>
                  <option value="300" selected>Medium (300px)</option>
                  <option value="400">Large (400px)</option>
                  <option value="500">X-Large (500px)</option>
                </select>
              </div>
              <div>
                <label class="block text-xs font-medium text-gray-600 mb-2">Error Correction</label>
                <select id="qr-error-correction" class="input-field text-sm py-2">
                  <option value="L">Low (~7%)</option>
                  <option value="M" selected>Medium (~15%)</option>
                  <option value="Q">Quartile (~25%)</option>
                  <option value="H">High (~30%)</option>
                </select>
              </div>
              <div>
                <label class="block text-xs font-medium text-gray-600 mb-2">Format</label>
                <select id="qr-format" class="input-field text-sm py-2">
                  <option value="png" selected>PNG</option>
                  <option value="svg">SVG</option>
                </select>
              </div>
            </div>
          </div>

          <!-- Generate Button -->
          <div class="mt-8">
            <button 
              onclick="generateQR()" 
              class="btn-primary w-full justify-center focus-ring"
              id="generate-btn"
            >
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
              </svg>
              Generate QR Code
            </button>
          </div>
        </div>

        <!-- Result Section -->
        <div id="qr-result-container" class="mt-8 hidden">
          <div class="card p-8 text-center animate-fade-in">
            <h3 class="text-lg font-semibold text-gray-800 mb-4">Your QR Code</h3>
            <div id="qr-result" class="qr-result mb-6"></div>
            <div class="flex flex-col sm:flex-row gap-3 justify-center">
              <button 
                onclick="downloadQR()" 
                class="btn-primary focus-ring"
                id="download-btn"
              >
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-4-4m4 4l4-4m-6 4H6a2 2 0 01-2-2V7a2 2 0 012-2h8a2 2 0 012 2v1"></path>
                </svg>
                Download
              </button>
              <button 
                onclick="shareQR()" 
                class="btn-secondary focus-ring"
              >
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"></path>
                </svg>
                Share
              </button>
              <button 
                onclick="generateNew()" 
                class="btn-secondary focus-ring"
              >
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                </svg>
                Generate New
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Initialize QR Generator functionality
export function initQRGeneratorFunctions() {
  let currentQRType = 'url';
  let currentQRData = null;

  // Make functions globally available
  window.selectQRType = (type) => {
    currentQRType = type;
    
    // Update button states
    document.querySelectorAll('.qr-type-btn').forEach(btn => {
      btn.classList.remove('active');
    });
    document.querySelector(`[data-type="${type}"]`).classList.add('active');

    // Show corresponding form
    document.querySelectorAll('.qr-form').forEach(form => {
      form.classList.remove('active');
    });
    document.getElementById(`${type}-form`).classList.add('active');
  };

  window.handleEnterKey = (event) => {
    if (event.key === 'Enter') {
      generateQR();
    }
  };

  window.generateQR = async () => {
    const generateBtn = document.getElementById('generate-btn');
    const originalText = generateBtn.innerHTML;
    
    try {
      // Show loading state
      generateBtn.innerHTML = `
        <svg class="w-4 h-4 mr-2 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
        </svg>
        Generating...
      `;
      generateBtn.disabled = true;

      // Get QR data based on type
      const qrData = getQRData();
      if (!qrData) {
        showToast('Please fill in all required fields', 'error');
        return;
      }

      // Get customization options
      const size = document.getElementById('qr-size').value;
      const errorCorrection = document.getElementById('qr-error-correction').value;
      const format = document.getElementById('qr-format').value;

      // Make API request
      const response = await fetch('https://qr-backend-83wg.onrender.com/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
          url: qrData,
          size: parseInt(size),
          error_correction: errorCorrection,
          format: format
        })
      });

      if (!response.ok) {
        throw new Error('Failed to generate QR code');
      }

      const data = await response.json();
      currentQRData = data;

      // Display result
      const resultContainer = document.getElementById('qr-result-container');
      const resultDiv = document.getElementById('qr-result');
      
      if (format === 'svg') {
        resultDiv.innerHTML = data.qr_code;
      } else {
        resultDiv.innerHTML = `<img src="data:image/png;base64,${data.qr_code}" alt="QR Code" class="max-w-full h-auto" />`;
      }

      resultContainer.classList.remove('hidden');
      
      // Smooth scroll to result
      resultContainer.scrollIntoView({ behavior: 'smooth' });

      showToast('QR Code generated successfully! 🎉', 'success');

    } catch (error) {
      console.error('Error generating QR:', error);
      showToast('Failed to generate QR code. Please try again.', 'error');
    } finally {
      // Restore button
      generateBtn.innerHTML = originalText;
      generateBtn.disabled = false;
    }
  };

  window.downloadQR = () => {
    if (!currentQRData) return;

    const format = document.getElementById('qr-format').value;
    const size = document.getElementById('qr-size').value;
    
    let blob, filename;
    
    if (format === 'svg') {
      blob = new Blob([currentQRData.qr_code], { type: 'image/svg+xml' });
      filename = `qr-code-${Date.now()}.svg`;
    } else {
      const byteCharacters = atob(currentQRData.qr_code);
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      blob = new Blob([byteArray], { type: 'image/png' });
      filename = `qr-code-${size}px-${Date.now()}.png`;
    }

    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);

    showToast('QR Code downloaded! 📁', 'success');
  };

  window.shareQR = async () => {
    if (!currentQRData) return;

    const format = document.getElementById('qr-format').value;
    
    try {
      if (navigator.share && format === 'png') {
        const byteCharacters = atob(currentQRData.qr_code);
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
          byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        const blob = new Blob([byteArray], { type: 'image/png' });
        const file = new File([blob], 'qr-code.png', { type: 'image/png' });

        await navigator.share({
          title: 'QR Code',
          text: 'Generated with florenApps QR Generator',
          files: [file]
        });
      } else {
        // Fallback: copy to clipboard
        const qrData = getQRData();
        await navigator.clipboard.writeText(qrData);
        showToast('QR code content copied to clipboard! 📋', 'success');
      }
    } catch (error) {
      console.error('Error sharing:', error);
      showToast('Unable to share. Try downloading instead.', 'error');
    }
  };

  window.generateNew = () => {
    // Clear forms
    document.querySelectorAll('input, textarea, select').forEach(input => {
      if (input.type !== 'checkbox' && input.id !== 'qr-size' && input.id !== 'qr-error-correction' && input.id !== 'qr-format') {
        input.value = '';
      }
    });
    document.getElementById('wifi-hidden').checked = false;

    // Hide result
    document.getElementById('qr-result-container').classList.add('hidden');

    // Reset to URL type
    selectQRType('url');

    // Focus first input
    document.getElementById('url-input').focus();

    showToast('Ready for new QR code! ✨', 'success');
  };

  function getQRData() {
    switch(currentQRType) {
      case 'url':
        return document.getElementById('url-input').value.trim();
        
      case 'text':
        return document.getElementById('text-input').value.trim();
        
      case 'wifi':
        const ssid = document.getElementById('wifi-ssid').value.trim();
        const security = document.getElementById('wifi-security').value;
        const password = document.getElementById('wifi-password').value;
        const hidden = document.getElementById('wifi-hidden').checked;
        
        if (!ssid) return null;
        
        return `WIFI:T:${security};S:${ssid};P:${password};H:${hidden};`;
        
      case 'email':
        const email = document.getElementById('email-address').value.trim();
        const subject = document.getElementById('email-subject').value.trim();
        const body = document.getElementById('email-body').value.trim();
        
        if (!email) return null;
        
        let mailto = `mailto:${email}`;
        const params = [];
        if (subject) params.push(`subject=${encodeURIComponent(subject)}`);
        if (body) params.push(`body=${encodeURIComponent(body)}`);
        if (params.length > 0) mailto += '?' + params.join('&');
        
        return mailto;
        
      default:
        return null;
    }
  }
}

// Toast notification system (reused from hub)
function showToast(message, type = 'info') {
  const toast = document.createElement('div');
  toast.className = `fixed top-4 right-4 z-50 px-6 py-3 rounded-xl shadow-lg transition-all duration-300 transform translate-x-full ${
    type === 'success' ? 'bg-green-500 text-white' : 
    type === 'error' ? 'bg-red-500 text-white' : 
    'bg-gray-800 text-white'
  }`;
  
  toast.textContent = message;
  document.body.appendChild(toast);
  
  // Animate in
  setTimeout(() => {
    toast.classList.remove('translate-x-full');
  }, 100);
  
  // Remove after delay
  setTimeout(() => {
    toast.classList.add('translate-x-full');
    setTimeout(() => {
      document.body.removeChild(toast);
    }, 300);
  }, 3000);
}
