import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createJazzReactContext, DemoAuth } from "jazz-react";

const Jazz = createJazzReactContext({
  auth: DemoAuth({ appName: "Circular" }),
  peer: "wss://mesh.jazz.tools/?key=you@example.com", // <- put your email here to get a proper API key later
});
export const { useAccount, useCoState } = Jazz;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Jazz.Provider>
    <React.StrictMode>

      <main className="max-w-xl p-8 mx-auto">
        <App/>
      </main>
    </React.StrictMode>
  </Jazz.Provider>
)
