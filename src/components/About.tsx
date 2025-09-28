import React from 'react';

const About: React.FC = () => (
  <div className="p-6 max-h-full overflow-y-auto">
    {/* Header Section */}
    <div className="text-center mb-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">RAKIB HOSSEN</h1>
      <p className="text-xl text-purple-600 mb-4">React Native Developer</p>
      <div className="text-gray-600 space-y-1 mb-4">
        <p>Dhaka, Bangladesh</p>
        <p>rakib.dev70@gmail.com | +8801716665606</p>
        <p>Portfolio | LinkedIn | GitHub | Codeforces</p>
      </div>
    </div>

    {/* Professional Summary */}
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-purple-500 pb-2">PROFESSIONAL SUMMARY</h2>
      <p className="text-gray-700 leading-relaxed">
        Detail-oriented React Native Developer with 4+ years of experience building high-performance mobile applications for both Android and iOS platforms. Experienced in developing OTT apps, integrating IoT devices, and optimizing offline data handling and performance.
      </p>
    </section>

    {/* Work Experience */}
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-purple-500 pb-2">WORK EXPERIENCE</h2>

      <div className="space-y-6">
        <div className="border-l-4 border-purple-500 pl-4">
          <h3 className="text-xl font-semibold text-gray-900">Software Engineer (React Native)</h3>
          <p className="text-purple-600 font-medium mb-2">Intellier, Dhaka, Bangladesh | February 2025 - Present</p>
          <ul className="space-y-2 text-gray-700">
            <li>• Implemented secure face verification and digital signature workflows for user authentication and document validation within enterprise apps.</li>
            <li>• Worked closely with the design team to create intuitive, scalable UI/UX, and integrated Redux-Saga for advanced state management and handling complex side effects.</li>
            <li>• Collaborate with cross-functional teams to develop mobile applications for QMS and Nidle, enabling real-time quality tracking systems in garment factories.</li>
            <li>• Implement robust offline data handling solutions to ensure seamless application performance in low-connectivity environments</li>
            <li>• Integrate various IoT devices with mobile applications to create a comprehensive factory management ecosystem</li>
            <li>• Develop interactive visualization tools using the Google Maps API to display device locations and production metrics</li>
            <li>• Developed a native Android module in Kotlin to support full-screen alarm notifications for a medicine reminder app, ensuring reliable alerts even when the device is locked or idle.</li>
            <li>• Maintain and resolve complex issues in legacy apps, including fixing crash reports, ensuring backward compatibility, and enhancing stability for previously published applications</li>
          </ul>
        </div>

        <div className="border-l-4 border-blue-500 pl-4">
          <h3 className="text-xl font-semibold text-gray-900">React Native Developer</h3>
          <p className="text-blue-600 font-medium mb-2">Sayburgh Solutions, Dhaka, Bangladesh | June 2022 - January 2025</p>
          <ul className="space-y-2 text-gray-700">
            <li>• Developed a cutting-edge OTT mobile application similar to Chorki and Hoichoi for Android and iOS platforms, improving user engagement by 35%</li>
            <li>• Built a Netflix-like TV application from scratch using React Native, focusing on seamless media streaming and intuitive navigation for smart TVs</li>
            <li>• Diagnosed and resolved critical bugs across React Native, Android, and iOS platforms, reducing crash rates by 40%</li>
            <li>• Implemented performance optimizations that improved application load time by 25% and reduced memory usage</li>
            <li>• Conducted regular code reviews and provided mentorship to junior developers, improving team efficiency by 20%</li>
            <li>• Utilized Cloudflare for video streaming integration, ensuring fast and reliable content delivery with 99.9% uptime</li>
          </ul>
        </div>

        <div className="border-l-4 border-green-500 pl-4">
          <h3 className="text-xl font-semibold text-gray-900">Web Developer Intern</h3>
          <p className="text-green-600 font-medium mb-2">Vocals Local, Maharashtra, India | August 2021 - October 2021</p>
          <ul className="space-y-2 text-gray-700">
            <li>• Designed responsive front-end UI components using Material-UI and custom CSS, improving site responsiveness.</li>
            <li>• Developed news section, navigation bar, and footer components with a focus on accessibility and user experience</li>
          </ul>
        </div>
      </div>
    </section>

    {/* Technical Skills */}
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-purple-500 pb-2">TECHNICAL SKILLS</h2>
      <div className="space-y-3">
        <div>
          <h3 className="font-semibold text-gray-900 mb-2">Programming Languages:</h3>
          <p className="text-gray-700">JavaScript, TypeScript, Swift, C++</p>
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 mb-2">Frameworks & Libraries:</h3>
          <p className="text-gray-700">React Native, React, Redux Toolkit, Node.js</p>
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 mb-2">Development Tools:</h3>
          <p className="text-gray-700">Git, Android Studio, Xcode, VS Code, Expo, Firebase</p>
        </div>
      </div>
    </section>

    {/* Projects & Problem Solving */}
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-purple-500 pb-2">PROJECTS & PROBLEM SOLVING</h2>
      <ul className="list-disc list-inside text-gray-700">
        <li>Active Codeforces Participant - Regularly solves algorithmic challenges to strengthen problem-solving skills</li>
      </ul>
    </section>

    {/* Education */}
    <section>
      <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-purple-500 pb-2">EDUCATION</h2>
      <div>
        <h3 className="text-lg font-semibold text-gray-900">Institute of Science & Technology (IST), Dhaka, Bangladesh</h3>
        <p className="text-gray-700">2017 – 2021</p>
        <p className="text-gray-700 font-medium">Bachelor of Science (Hons) in Computer Science and Engineering</p>
      </div>
    </section>
  </div>
);

export default About;