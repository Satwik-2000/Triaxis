import React, { useState } from 'react';
import VideoConference from './VideoConference';

const VideoConferencePage: React.FC = () => {
  const [showConference, setShowConference] = useState(false);

  return (
    <div
      style={{
        minHeight: '60vh',
        background: 'linear-gradient(135deg,rgb(112, 78, 50) 0%, #172a46 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >

      <div
        style={{
          background: '#fff',
          borderRadius: '18px',
          boxShadow: '0 8px 32px rgba(44,62,80,0.18)',
          maxWidth: 520,
          width: '100%',
          padding: '2.5rem 2rem',
          textAlign: 'center',
          position: 'relative',
          zIndex: 1,
          marginTop: '4rem',
          marginBottom: '2rem',
        }}
      >
        <h2
          style={{
            fontSize: '2.2rem',
            fontWeight: 800,
            color: '#fd7e14',
            marginBottom: '0.5rem',
            letterSpacing: '0.02em',
          }}
        >
          Join 1-1 Video Conference
        </h2>
        <p
          style={{
            color: '#555',
            fontSize: '1.1rem',
            marginBottom: '2.5rem',
            fontWeight: 500,
          }}
        >
          Connect instantly with our team for live discussions, consultations, or project updates.
        </p>
        {!showConference ? (
          <button
            style={{
              padding: '1.1rem 2.5rem',
              fontSize: '1.25rem',
              background: 'linear-gradient(90deg, #fd7e14 0%, #ff9800 100%)',
              color: '#fff',
              border: 'none',
              borderRadius: '10px',
              cursor: 'pointer',
              fontWeight: 700,
              boxShadow: '0 2px 12px rgba(253,126,20,0.12)',
              transition: 'background 0.2s, transform 0.2s',
              marginBottom: '1.5rem',
              width: '100%',
              maxWidth: 320,
            }}
            onClick={() => setShowConference(true)}
          >
            Let's Talk
          </button>
        ) : (
          <div style={{ marginTop: '1.5rem' }}>
            <VideoConference roomName="TriaxisConsultRoom" displayName="Guest" />
          </div>
        )}
        {!showConference && (
          <div
            style={{
              marginTop: '2.5rem',
              color: '#888',
              fontSize: '0.98rem',
              lineHeight: 1.5,
            }}
          >
            <span role="img" aria-label="info">
              💡
            </span>{' '}
            You’ll need to allow camera and microphone access to join the meeting.
          </div>
        )}
      </div>
      <style>
        {`
          @media (max-width: 700px) {
            .main-nav {
              flex-direction: column !important;
              gap: 0.5rem !important;
              top: 10px !important;
            }
            .main-nav a {
              font-size: 1rem !important;
              padding: 0.4rem 0.8rem !important;
            }
          }
          @media (max-width: 600px) {
            .main-nav {
              position: static !important;
              margin-bottom: 1.5rem !important;
            }
            div[style*="background: #fff"] {
              padding: 1.2rem 0.5rem !important;
              max-width: 100vw !important;
              border-radius: 10px !important;
              margin-top: 2.5rem !important;
            }
            h2 {
              font-size: 1.3rem !important;
            }
            p {
              font-size: 1rem !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default VideoConferencePage;