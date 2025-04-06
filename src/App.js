import React from 'react';
import './App.css';
import profileImage from './Peyman.jpg';  // Import profile image
import logo from './logo.svg';  // Import logo

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Display logo at the top-right */}
        <div className="logo-container">
          <img src={logo} className="Logo" alt="logo" />
        </div>

        <div className="profile-container">
          <img src={profileImage} className="Profile-image" alt="profile" />
          <h1>Abdolsalam Rasouli</h1>
          <p className="tagline">Artificial Intelligence Enthusiast | Electrical Engineering</p>
        </div>

        <section className="bio">
          <h2>About Me</h2>
          <p>
            Hi! I’m Abdolsalam Rasouli, also known as Peyman. I hold a Bachelor's and Master's degree in Electrical Engineering. I am passionate about the intersection of Artificial Intelligence and Electrical Engineering, with a focus on automatic control, forecasting, robotics, and optimizing complex systems.
            I'm currently working to expand my knowledge in AI applications in Electrical Engineering, and I aspire to contribute to cutting-edge innovations in the field.
          </p>
        </section>

        <section className="social-links">
          <h2>Connect with Me</h2>
          <div>
            <a href="https://www.linkedin.com/in/abdolsalam-rasouli-b9217619b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="mailto:a.rasouli@hafez.shirazu.ac.ir">Email</a>
          </div>
        </section>

        <footer>
          <p>Designed with Abdolsalam Rasouli
            
          </p>
        </footer>
      </header>
    </div>
  );
}

export default App;
