import { useEffect } from "react";
import "./App.css";

export default function App() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.botpress.cloud/webchat/v3.2/inject.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      console.log("✅ Botpress script loaded");
      window.botpress.init({
        botId: "0b1c554e-bf61-45f0-9c52-2ffb8a4c424c",
        clientId: "c2232d34-dd63-42b4-8f64-390654e98fe6",
        botName: "CodeMentor Pro",
        botDescription:
          "Your personal AI coding mentor. Learn, debug, and grow with guidance.",
        themeMode: "dark",
        color: "#3276EA",
        variant: "solid",
        headerVariant: "glass",
        radius: 8,
        selector: "#webchat",
        floating: false,                // force inline
        showConversationsButton: false  // hide floating bubble
      });
    };
  }, []);

  const sendMessage = (text) => {
    if (window.botpress) {
      window.botpress.sendEvent({
        type: "proactive-trigger",
        payload: { text },
      });
      window.botpress.open();
    }
  };

  return (
    <div className="layout">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="logo">{`{ }`} CodeMentor Pro</div>
        <div className="quick-examples">
          <div
            className="example"
            onClick={() => sendMessage("Explain API in simple words")}
          >
            Q1: Explain API in simple words
          </div>
          <div
            className="example"
            onClick={() => sendMessage("How to connect PHP form to MySQL?")}
          >
            Q2: Connect PHP form to MySQL
          </div>
          <div
            className="example"
            onClick={() => sendMessage("What should I include in my portfolio?")}
          >
            Q3: What to include in my portfolio
          </div>
          <div
            className="example"
            onClick={() => sendMessage("Give me a project idea with PHP + JavaScript")}
          >
            Q4: Project idea: PHP + JavaScript
          </div>
          <div
            className="example"
            onClick={() => sendMessage("Fix MySQL error: Unknown column")}
          >
            Q5: MySQL: Unknown column
          </div>
        </div>
        <div className="sidebar-footer">
          © CodeMentor Pro — Built for students
        </div>
      </div>

      {/* Chat Area */}
      <div className="chat-area">
        <div className="chat-header">Chat with CodeMentor Pro</div>
        <div className="messages">
          <div id="webchat"></div>
        </div>
      </div>

      {/* Right Panel */}
      <div className="details-panel">
        <div className="details-header">Response details</div>
        <div className="tabs">
          <div className="tab active">Steps</div>
          <div className="tab">Code</div>
          <div className="tab">Tips</div>
        </div>
        <div className="tab-content" id="details-content">
          Waiting for answer...
        </div>
      </div>
    </div>
  );
}
