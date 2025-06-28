import React from 'react';
import Header from './components/Header';
import Services from './components/Services';
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import './assets/styles.css';
import VideoConference from './components/VideoConference';

const App: React.FC = () => (
  <div style={{ fontFamily: 'Inter, Arial, sans-serif', background: '#f5f6fa', minHeight: '100vh' }}>
    <Header />
    <Services />
    <Projects />
    <VideoConference roomName="TriaxisConsultRoom" displayName="Your Name" />
    <ContactForm />
    <Footer />
  </div>
);

export default App;