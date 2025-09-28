# Rakib's Portfolio

A modern, interactive portfolio website showcasing Rakib Hossen's work as a React Native Developer. The portfolio features a tablet-style interface with smooth animations and a comprehensive display of professional experience, projects, and technical skills.

## 🚀 Features

- **Interactive Tablet Interface**: Unique tablet-style design with smooth animations
- **Responsive Design**: Optimized for all device sizes
- **Project Showcase**: Detailed view of mobile app projects with descriptions and links
- **Professional Timeline**: Comprehensive work experience and education history
- **Technical Skills**: Organized display of programming languages, frameworks, and tools
- **Contact Information**: Direct links to professional profiles and contact details
- **Modern UI**: Clean, professional design with purple accent colors

## 🛠️ Tech Stack

### Frontend
- **Next.js 14** - React framework for production
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **React** - Component-based UI library

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Git** - Version control

## 📋 Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/za-rakib/new_portfolio.git
   cd new_portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to view the portfolio.

## 📱 Usage

The portfolio features a tablet interface with multiple sections:

- **Home**: Overview of featured projects
- **About**: Detailed professional background, work experience, and technical skills
- **Projects**: Comprehensive list of mobile app projects
- **Contact**: Contact information and professional links
- **Settings**: Additional configuration options

Navigate between sections using the bottom navigation bar.

## 🏗️ Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css          # Global styles and animations
│   │   ├── layout.tsx           # Root layout component
│   │   ├── page.tsx             # Main page component
│   │   └── types.ts             # TypeScript type definitions
│   └── components/
│       ├── About.tsx            # About section with resume details
│       ├── AppDetail.tsx        # Individual project detail view
│       ├── AppIcon.tsx          # Project icon component
│       ├── BottomNav.tsx        # Bottom navigation component
│       ├── Contact.tsx          # Contact information section
│       ├── HomeScreen.tsx       # Home screen with project grid
│       ├── Notification.tsx     # Notification component
│       ├── Projects.tsx         # Projects listing page
│       ├── Settings.tsx         # Settings page
│       └── TabletFrame.tsx      # Main tablet container component
├── public/                      # Static assets
├── package.json                 # Project dependencies and scripts
├── tailwind.config.js          # Tailwind CSS configuration
├── next.config.js              # Next.js configuration
├── tsconfig.json               # TypeScript configuration
└── README.md                   # Project documentation
```

## 🎨 Customization

### Colors and Styling
The portfolio uses a purple/blue color scheme. To customize colors:
1. Update the Tailwind configuration in `tailwind.config.js`
2. Modify CSS variables in `src/app/globals.css`

### Content Updates
- Update project information in `src/app/page.tsx`
- Modify personal details in `src/components/About.tsx`
- Add new projects to the projects array

### Tablet Dimensions
Adjust tablet size in `src/components/TabletFrame.tsx`:
```typescript
style={{ width: 'min(922px, 100vw)', height: 'min(1024px, 100vh)' }}
```

## 📦 Build & Deployment

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

### Deploy to Vercel
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 About the Developer

**Rakib Hossen** is a skilled React Native Developer with 4+ years of experience in mobile app development. Specializing in cross-platform applications for Android and iOS, with expertise in OTT platforms, IoT integration, and performance optimization.

### Professional Highlights
- 4+ years of React Native development experience
- Expertise in Android and iOS app development
- Experience with OTT platforms, IoT devices, and enterprise applications
- Strong background in performance optimization and offline data handling

### Connect
- **Email**: rakib.dev70@gmail.com
- **Phone**: +8801716665606
- **Location**: Dhaka, Bangladesh
- **Portfolio**: [View Live](https://your-portfolio-url.vercel.app)
- **LinkedIn**: [Connect](https://linkedin.com/in/rakib-hossen)
- **GitHub**: [Follow](https://github.com/za-rakib)
- **Codeforces**: [Profile](https://codeforces.com/profile/rakib)

---

Built with ❤️ using Next.js and TypeScript