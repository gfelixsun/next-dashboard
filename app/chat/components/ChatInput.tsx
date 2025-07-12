import { useState } from 'react'

type Props = {
  onSend: (text: string) => void
}

export default function ChatInput({ onSend }: Props) {
  const [input, setInput] = useState('')
  const fn = () => {}
  fn()
  console.log(123)
  const handleSend = () => {
    if (!input.trim()) return
    onSend(input.trim())
    setInput('')
  }
  return (
    <div className="flex items-center space-x-2 mt-4">
      <input
        className="flex-1 p-2 rounded border"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="请输入内容..."
        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleSend}>
        发送
      </button>
    </div>
  )
}
