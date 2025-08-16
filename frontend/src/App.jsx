import { useState } from 'react'
import { Webchat, WebchatProvider, Fab, getClient } from '@botpress/webchat'

const botId = 'YOUR_BOTPRESS_BOT_ID'
const clientId = 'YOUR_BOTPRESS_CLIENT_ID'

export default function App() {
  const client = getClient({ botId, clientId })
  const [open, setOpen] = useState(true)

  return (
    <div style={{ height: '100vh', background: '#0f172a', color: '#fff' }}>
      <WebchatProvider
        client={client}
        configuration={{
          themeMode: 'dark',
          color: '#6366f1',
          radius: 10,
          botName: 'CodeMentor Pro',
          botDescription: 'Your AI coding coach — Overview → Steps → Code → Tips.'
        }}
      >
        <Fab onClick={() => setOpen(!open)} />
        {open && (
          <div style={{ height: '100%', width: '100%' }}>
            <Webchat />
          </div>
        )}
      </WebchatProvider>
    </div>
  )
}
