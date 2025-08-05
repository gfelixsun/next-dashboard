import { useState } from 'react'
import type { Message } from '@/app/chat/types/message'

type Props = {
  onSend: (msg: Message) => void
}

export default function ChatInput({ onSend }: Props) {
  const [input, setInput] = useState('')

  const handleSend = async () => {
    if (!input.trim()) return

    // 用户输入加对话
    const sendParams = { role: 'user' as const, content: input }
    onSend(sendParams)
    setInput('')

    // TODO：后续加接口请求
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages: [sendParams] })
    })

    const data = await res.json()
    onSend({ role: 'assistant', content: data.reply || '[No reply]' })
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
