import React, { useEffect, useRef } from 'react';

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
            width: 1000,
            height: 400,
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
        <section style={{ padding: '2rem 0', background: '#f8f9fa', minHeight: '60vh' }}>
            <div style={{ maxWidth: 1000, margin: '0 auto' }}>
                <h2 style={{ textAlign: 'center' }}>Video Conference Room</h2>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        minHeight: 400,
                        width: '100%',
                    }}
                >
                    <div ref={containerRef} />
                </div>
            </div>
        </section>
    );
};

export default VideoConference;