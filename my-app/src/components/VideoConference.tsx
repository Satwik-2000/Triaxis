import React, { useEffect, useRef } from 'react';

// declare global {
//   interface Window {
//     JitsiMeetExternalAPI?: any;
//   }
// }

interface VideoConferenceProps {
  roomName: string;
  displayName?: string;
}

const VideoConference: React.FC<VideoConferenceProps> = ({ roomName, displayName }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.JitsiMeetExternalAPI) {
      console.error('Jitsi Meet API script not loaded');
      return;
    }

    if (containerRef.current) {
      containerRef.current.innerHTML = '';
    }

    const domain = 'meet.jit.si';
    const options = {
      roomName,
      width: '100%',
      height: 500,
      parentNode: containerRef.current,
      userInfo: {
        displayName: displayName || 'Guest'
      }
    };

    const api = new window.JitsiMeetExternalAPI(domain, options);

    return () => {
      api && api.dispose();
    };
  }, [roomName, displayName]);

  return (
    <section style={{ padding: '2rem 0', background: '#f8f9fa' }}>
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center' }}>Video Conference Room</h2>
        <div ref={containerRef} />
      </div>
    </section>
  );
};

export default VideoConference;