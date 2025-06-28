/// <reference types="react-scripts" />
declare global {
  interface Window {
    JitsiMeetExternalAPI: any;
  }
}

interface Window {
  JitsiMeetExternalAPI?: any;
}