export default function Portfolio() {
  return (
    <main className="p-6 max-w-5xl mx-auto text-gray-800">
      <section className="text-center mb-10">
        <h1 className="text-4xl font-bold">Sona Mary Bijoy</h1>
        <p className="text-lg text-gray-600">Final-year Computer Science Engineering Student</p>
        <p className="text-sm">📍 Ernakulam, Kerala | 📧 sonamarybijoy2384@gmail.com</p>
        <div className="mt-2 flex justify-center gap-4">
          <a href="https://www.linkedin.com/in/sona-mary-bijoy-b18159250" className="text-blue-600">LinkedIn</a>
          <a href="https://github.com/SonaMaryBijoy" className="text-blue-600">GitHub</a>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">🎯 Career Objective</h2>
        <p>Aspiring tech innovator with a strong foundation in AI, Deep Learning, and Python. Looking to contribute to real-world intelligent systems.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">🎓 Education</h2>
        <ul className="list-disc pl-6">
          <li><strong>B.Tech, Computer Science</strong> – ASIET, Ernakulam (2022–2026) – CGPA: 7.02</li>
          <li><strong>Higher Secondary</strong> – St. Sebastian’s HSS, Kannur (2021–22) – 94%</li>
          <li><strong>High School</strong> – Alphonsa English Medium School (2020) – 86.4%</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">🛠️ Skills</h2>
        <p><strong>Languages:</strong> Python, Java, C, JavaScript, SQL, HTML, CSS</p>
        <p><strong>Frameworks/Tools:</strong> OpenCV, TensorFlow, MediaPipe, React.js, ViT, GitHub, Linux</p>
        <p><strong>Core:</strong> DSA, AI, Computer Vision, RPA, Raspberry Pi</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">🧪 Projects</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>ECHOHIRE</strong> – AI Interview Coach and Resume Analyzer</li>
          <li><strong>HAND SIGN DETECTOR</strong> – Gesture-based communication with voice output</li>
          <li><strong>AUTOMATIC TIMETABLE GENERATOR</strong> – Optimized schedules using GA</li>
          <li><strong>LEARNTRACK</strong> – Smart study tracker with visualizations</li>
          <li><strong>LEXIHAND</strong> – Sign-to-sentence generator</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">💼 Internships</h2>
        <ul className="list-disc pl-6">
          <li><strong>Nyeste Venture Technologies</strong> – Cyber Security & Robotics (2024)</li>
          <li><strong>Tiltedu</strong> – Hybrid Game Development (2023)</li>
          <li><strong>Techmaghi</strong> – Android App Development (2022)</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">🏅 Achievements</h2>
        <ul className="list-disc pl-6">
          <li>Qualified ICAT 2025 – AIR 613</li>
          <li>NPTEL Certified in Compiler Design</li>
          <li>Presented research at International Conference</li>
          <li>Voice of BRAHMA 2023-24</li>
          <li>3D Design & Printing Workshop</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">🧑‍🤝‍🧑 Leadership</h2>
        <ul className="list-disc pl-6">
          <li>Year Representative – CSI ASIET (2025)</li>
          <li>Support Team Lead – CSI ASIET (2024)</li>
        </ul>
      </section>
    </main>
  );
}
