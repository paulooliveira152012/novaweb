import React from 'react';
import Navigator from './navigation/navigation';
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {
  return (
    <>
      <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
        <Navigator />
      </GoogleOAuthProvider>
    </>
  );
}

export default App;
