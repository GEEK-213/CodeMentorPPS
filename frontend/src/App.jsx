import { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    // Load Botpress script
    const script = document.createElement("script");
    script.src = "https://cdn.botpress.cloud/webchat/v3.2/inject.js";
    script.async = true;
    script.onload = () => {
      window.botpress.init({
        botId: "0b1c554e-bf61-45f0-9c52-2ffb8a4c424c",
        clientId: "c2232d34-dd63-42b4-8f64-390654e98fe6",
        botName: "CodeMentor Pro",
        botDescription: "Your personal AI coding mentor...",
        themeMode: "dark",
        color: "#3276EA",
        variant: "solid",
        headerVariant: "glass",
        radius: 8,
        selector: "#webchat", // Mount inside our div
        // Important
        containerWidth: "100%",
        containerHeight: "100%",
        showConversationsButton: false,
        enableConversationDeletion: false,
      });
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div className="app">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2>Quick Prompts</h2>
        <ul>
          <li>Explain async/await</li>
          <li>Fix my Express route</li>
          <li>Write a React hook example</li>
          <li>Help with MongoDB schema</li>
        </ul>
      </aside>

      {/* Chat Area */}
      <main className="chat-area">
        <div id="webchat" className="chat-container"></div>
      </main>

      {/* Right Panel */}
      <aside className="details">
        <div className="tabs">
          <button className="active">Steps</button>
          <button>Code</button>
          <button>Tips</button>
        </div>
        <div className="panel-content">
          <p>Select a tab to see details parsed from responses.</p>
        </div>
      </aside>
    </div>
  );
}

export default App;
