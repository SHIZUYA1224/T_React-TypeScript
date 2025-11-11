import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif', padding: 24 }}>
      <h1>React + TypeScript</h1>
      <p>最小構成のテンプレートです。ここから拡張してください。</p>
      <button onClick={() => setCount((c) => c + 1)} style={{ padding: '8px 12px' }}>
        count: {count}
      </button>
    </div>
  )
}

export default App

