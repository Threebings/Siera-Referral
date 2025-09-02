# Siera Referral Companion

A modern, intuitive medical referral system built with React and TypeScript, designed to streamline the referral process between healthcare providers and allied health services.

## ✨ Features

- **Clean, Professional Interface** - Intuitive form design optimized for healthcare workflows
- **Comprehensive Referral Management** - Complete referrer and patient information capture
- **Allied Health Services** - Extensive dropdown of physiotherapy and allied health options
- **Real-time Validation** - Form validation with immediate feedback
- **Responsive Design** - Works seamlessly across desktop, tablet, and mobile devices
- **Accessibility Focused** - Built with accessibility best practices in mind

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Threebings/Siera-Referral.git
cd Siera-Referral
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🛠️ Built With

- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe development experience
- **Tailwind CSS** - Utility-first CSS framework for rapid styling
- **Vite** - Fast build tool and development server
- **Lucide React** - Beautiful, customizable icons

## 📋 Form Sections

### Referrer Information
- Referrer name and provider number
- Contact details (phone, email, address)
- Practice location and country

### Patient Information  
- Patient demographics (name, DOB, gender)
- Contact information
- Clinical particulars and reason for referral

### Clinic Selection
- Postcode-based clinic search
- Allied health clinic selection
- Service type specification

## 🎨 Design Philosophy

This application follows modern design principles with:
- Clean, minimalist interface
- Consistent spacing using 8px grid system
- Professional color palette optimized for healthcare
- Smooth transitions and hover states
- Mobile-first responsive design

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: 1024px+

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Project Structure

```
src/
├── components/          # React components
│   └── ReferralForm.tsx # Main referral form component
├── App.tsx             # Root application component
├── main.tsx            # Application entry point
└── index.css           # Global styles and Tailwind imports
```

## 🚀 Deployment

The application can be deployed to any static hosting service:

### Netlify
```bash
npm run build
# Deploy the dist/ folder
```

### Vercel
```bash
npm run build
# Deploy the dist/ folder
```

### GitHub Pages
```bash
npm run build
# Deploy the dist/ folder to gh-pages branch
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🏥 About Siera

Siera Referral Companion is designed to improve healthcare coordination by providing a seamless digital referral experience. Our mission is to connect healthcare providers with allied health services efficiently and effectively.

## 📞 Support

For support or questions about this project, please open an issue on GitHub or contact the development team.

---

**Made with ❤️ for better healthcare coordination**
