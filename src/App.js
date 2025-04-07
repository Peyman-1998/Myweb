import React from 'react';
import './App.css';
import profileImage from './Peyman.jpg'; // Make sure this image exists in the same folder
import { FaLink, FaBuilding } from 'react-icons/fa'; // Importing icons from react-icons

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Profile Sidebar */}
        <div className="profile-container">
          <img src={profileImage} className="Profile-image" alt="profile" />
          <div className="profile-details">
            <h1>Abdolsalam Rasouli</h1>
            <p className="tagline">EE (MSc)</p>
            <div className="profile-links">
              <a href="#about-me">About Me</a>
              <a href="#my-projects">My Projects</a>
              <a href="#contact-me">Contact with Me</a>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="main-content">
          {/* About Me Section */}
          <section id="about-me" className="bio">
            <h2>About Me</h2>
            <p>
              I am a Senior Electrical Engineer specializing in developing innovative and reliable AI solutions aligned with economic goals in the field of Electrical Engineering. My expertise lies in the application of Artificial Intelligence in Electrical Engineering, complemented by hands-on experience in industrial projects and data science engineering. This allows me to engage in the entire AI lifecycle, collaborate seamlessly with team members, and contribute to a variety of projects across the organization.
            </p>
            <p>
              I focus on creating AI solutions that are both explainable and accurate, particularly in predicting complex processes within power systems. My mission is to drive AI innovations that tackle difficult challenges and have a meaningful impact. I believe in collaboration and agile development, working closely with teams to deliver timely, effective solutions that meet the constantly changing needs of the power sector. I use cutting-edge AI techniques like machine learning, deep learning, and quantum learning to improve the accuracy and reliability of predictions in power systems. Beyond just predictions, I’m also focused on solving various challenges in power engineering through AI. Additionally, I’m working to bridge the gap between forecasting algorithms and the power market, with a strong focus on smart contracts, to make electricity trading smoother and more efficient.
            </p>
            <p>
              Diving into the intersection of AI and electrical engineering, I earned my Master’s degree in Power Electrical Engineering from Shiraz University in 2024, graduating with a GPA of 4.0/4.0. My graduate research centered on load forecasting in power systems, where I investigated the internal mechanisms of machine learning and deep learning models—particularly their “black box” nature—and developed hybrid approaches to improve model transparency and performance. This work sharpened my appreciation for the role hybrid models play in making AI systems not only more accurate and scalable but also more interpretable and reliable in solving real-world energy challenges. I also hold a Bachelor’s degree in Electrical Engineering from Shiraz University (2021), where I graduated with a GPA of 4.0/4.0. Also, I have been recognized nationally through a fellowship with the National Elite Foundation since 2021.
            </p>
          </section>

          {/* My Projects Section */}
          <section id="my-projects" className="projects">
            <h2>My Projects</h2>
            <ul>
              <li>
                <FaBuilding /> {/* Icon for the project */}
                Electrical Consumption Load Forecasting at the Provincial Level for the Bushehr Provincial Power Distribution Company – 
                <a href="https://www.bedc.ir" target="_blank" rel="noopener noreferrer">
                  <FaLink /> www.bedc.ir
                </a>
              </li>
              <li>
                <FaBuilding /> {/* Icon for the project */}
                Applications of Artificial Intelligence and Data Mining in Shiraz Water and Wastewater Company – 
                <a href="https://www.abfa-shiraz.ir" target="_blank" rel="noopener noreferrer">
                  <FaLink /> www.abfa-shiraz.ir
                </a>
              </li>
              <li>
                <FaBuilding /> {/* Icon for the project */}
                Enhancing the Security of Power Grid Networks Against Cyber Attacks in National Elite Foundation – 
                <a href="https://www.bmn.org" target="_blank" rel="noopener noreferrer">
                  <FaLink /> www.bmn.org
                </a>
              </li>
            </ul>
          </section>

          {/* Contact Me Section */}
          <section id="contact-me" className="contact">
            <h2>Connect with Me</h2>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/abdolsalam-rasouli-b9217619b" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href="mailto:a.rasouli@hafez.shirazu.ac.ir">
                Email
              </a>
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer>
          <p>Designed by Abdolsalam Rasouli</p>
        </footer>
      </header>
    </div>
  );
}

export default App;