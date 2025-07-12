'use client' // 声明该组件是客户端组件

import { useState } from 'react'
import ChatInput from './components/ChatInput'
import ChatMessage from './components/ChatMessage'

type Message = {
  role: 'user' | 'assistant'
  content: string
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'user', content: '你好，AI！' },
    { role: 'assistant', content: '你好，有什么我可以帮你的吗？' }
  ])

  return (
    <div className="flex flex-col h-screen p-4 bg-gray-100">
      <div className="flex-1 overflow-y-auto space-y-2">
        {messages.map((msg, i) => (
          <ChatMessage key={i} role={msg.role} content={msg.content} />
        ))}
      </div>

      <ChatInput
        onSend={(text) => {
          setMessages([...messages, { role: 'user', content: text }])
        }}
      />
    </div>
  )
}
