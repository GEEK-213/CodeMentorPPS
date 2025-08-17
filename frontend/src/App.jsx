import { useEffect } from "react"

export default function App() {
  useEffect(() => {
    const initBotpress = () => {
      if (!window.botpressWebChat) {
        console.warn("Botpress script not ready, retrying...")
        setTimeout(initBotpress, 300) // retry after 300ms
        return
      }

      if (window.__BP_INITIALIZED__) return

      window.botpressWebChat.init({
        clientId: import.meta.env.VITE_BOTPRESS_CLIENT_ID,
        botId: import.meta.env.VITE_BOTPRESS_BOT_ID,
        theme: "prism",
        themeColor: "#2563eb",
        composerPlaceholder: "Type a message...",
        container: "#webchat",
        showWidget: false,
        lazySocket: true,
        useSessionStorage: true,
      })

      // open immediately
      window.botpressWebChat.sendEvent({ type: "show" })

      window.__BP_INITIALIZED__ = true
      console.log("✅ Botpress initialized!")
    }

    // inject script if not already there
    if (!document.getElementById("bp-webchat-script")) {
      const script = document.createElement("script")
      script.id = "bp-webchat-script"
      script.src = "https://cdn.botpress.cloud/webchat/v1/inject.js"
      script.async = true
      script.onload = initBotpress
      document.body.appendChild(script)
    } else {
      initBotpress()
    }
  }, [])

  return (
    <div style={{ height: "100vh", padding: "2rem", background: "#f5f5f5" }}>
      <h1 style={{ marginBottom: "1rem" }}>Hello Botpress 👋</h1>

      <div
        id="webchat"
        style={{ height: "100%", width: "100%", position: "relative" }}
      />
    </div>
  )
}