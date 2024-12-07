import React from 'react';
import Profile from './components/profile/Profile';
import Experience from './components/experience/Experience';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <div className="w3-content w3-margin-top" style={{ maxWidth: '1400px' }}>
        <div className="w3-row-padding">
          <div className="w3-third">
            <Profile />
          </div>

          <div className="w3-twothird">
            <Experience />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
