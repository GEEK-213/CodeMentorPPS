import { useEffect } from 'react'
import { Webchat, WebchatProvider, getClient } from '@botpress/webchat'
import './app.css'

const botId = '0b1c554e-bf61-45f0-9c52-2ffb8a4c424c'
const clientId = 'c2232d34-dd63-42b4-8f64-390654e98fe6'
const client = getClient({ botId, clientId })

export default function App() {
  useEffect(() => { /* nothing needed; mount only */ }, [])
  return (
    <div className="shell">
      <aside className="sidebar">
        <div className="logo">{`{ }`} CodeMentor Pro</div>
        <div className="examples">
          <button>Q1: Explain API in simple words</button>
          <button>Q2: Connect PHP form to MySQL</button>
          <button>Q3: What to include in my portfolio</button>
          <button>Q4: Project idea: PHP + JavaScript</button>
          <button>Q5: MySQL: Unknown column</button>
        </div>
        <div className="foot">© Built for students</div>
      </aside>

      <main className="chat">
        <header className="chat__head">💬 Chat with CodeMentor Pro</header>
        <section className="chat__body">
          <WebchatProvider
            client={client}
            configuration={{
              themeMode: 'dark',
              color: '#6366f1',
              radius: 10,
              botName: 'CodeMentor Pro',
              botDescription: 'Overview → Steps → Code → Tips.'
            }}
          >
            <div id="webchat" className="bp-container"><Webchat /></div>
          </WebchatProvider>
        </section>
      </main>

      <aside className="panel">
        <div className="panel__head">Response details</div>
        <div className="tabs">
          <span className="tab active">Steps</span>
          <span className="tab">Code</span>
          <span className="tab">Tips</span>
        </div>
        <div className="panel__body">Answer format: Overview → Steps → Code → Tips.</div>
      </aside>
    </div>
  )
}
