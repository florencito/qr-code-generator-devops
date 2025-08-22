# QR Code Generator

A modern, privacy-friendly QR code generator built with Vite, Tailwind CSS, and vanilla JavaScript. Part of the [florenApps](https://florenapps.com) ecosystem.

## ✨ Features

- **Multiple QR Types**: URL, Text, WiFi, Email, and more
- **Customizable Options**: Size, error correction, and format (PNG/SVG)
- **Modern Design**: Beautiful UI with glassmorphism effects and animations
- **Privacy-First**: Client-side processing when possible
- **Mobile-Friendly**: Responsive design that works on all devices
- **Fast & Lightweight**: Built with modern web technologies
- **Keyboard Shortcuts**: Ctrl+Enter to generate, Esc to reset
- **Download & Share**: Easy file downloads and sharing capabilities

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Development

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start development server**
   ```bash
   npm run dev
   ```

3. **Open in browser**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 🎨 Design System

This app uses the same design system as the florenApps hub:

- **Colors**: Primary blue (#0ea5e9) with semantic variants
- **Typography**: Inter font family
- **Components**: Consistent cards, buttons, and form elements
- **Animations**: Smooth transitions and micro-interactions
- **Effects**: Glassmorphism and gradient backgrounds

## 🛠 Tech Stack

- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Vanilla JavaScript** - No framework dependencies
- **PostCSS** - CSS processing
- **Inter Font** - Modern typography

## 📱 QR Code Types

### URL
Generate QR codes for websites and links

### Text
Encode any plain text content

### WiFi
Create QR codes for WiFi network access with:
- Network name (SSID)
- Security type (WPA/WEP/Open)
- Password
- Hidden network support

### Email
Generate mailto QR codes with:
- Email address
- Subject line
- Message body

## 🔧 Customization Options

- **Size**: 200px to 500px
- **Error Correction**: Low to High (7% to 30%)
- **Format**: PNG or SVG download

## ⌨️ Keyboard Shortcuts

- **Ctrl/Cmd + Enter**: Generate QR code
- **Escape**: Reset form and clear results

## 🔗 Integration

This app integrates with the florenApps ecosystem:
- Consistent design and branding
- Shared analytics (Vercel Analytics)
- Cross-linking to other mini apps

## 🏗 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── header.js       # App header with branding
│   ├── qrGenerator.js  # Main QR generation interface
│   └── footer.js       # App footer with links
├── index.css          # Global styles and Tailwind imports
└── main.js           # Main application entry point
```

## 🌐 Backend Integration

The app connects to a Python Flask backend for QR code generation:
- **Endpoint**: `https://qr-backend-83wg.onrender.com/generate`
- **Method**: POST
- **Payload**: `{ url, size, error_correction, format }`

## 📄 License

MIT License - see LICENSE file for details

## 🤝 Contributing

This is part of the florenApps ecosystem. Contributions welcome!

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 🔮 Future Enhancements

- [ ] Dark mode support
- [ ] More QR code types (vCard, SMS, Phone)
- [ ] Color customization
- [ ] Logo embedding
- [ ] Batch generation
- [ ] Progressive Web App features
- [ ] Offline functionality

---

Made with ❤️ by [Floren](https://github.com/florencito) | Part of [florenApps](https://florenapps.com)
