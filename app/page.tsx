'use client' // 声明该组件是客户端组件

import { useState } from 'react';
export default function ChatPage () {
 const [input, setInput] = useState('');
 const [messages, setMessages] = useState<{ role: 'user' | 'assistant'; content: string}[]>([])
 const handleSend = async () => {
  if (!input.trim()) return

  // 用户输入加对话
  const newMessages = [...messages, { role: 'user' as const, content: input}]
  setMessages(newMessages)
  setInput('')

  // TODO：后续加接口请求
  const res = await fetch('/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ messages: newMessages})
  })

  const data = await res.json()

  console.log('✅ 返回内容:', data)
  setMessages([ ...newMessages, { role: 'assistant', content: data.reply || '[No reply]' }])
 }

 return (
  <div className="flex flex-col h-screen max-w-2xl mx-auto p-4">
    <h1 className="text-xl font-bold mb-4 text-center">AI 聊天助手 Demo</h1>

    <div className="flex-1 overflow-y-auto space-y-2 border rounded p-4 bg-white">
      {messages.map((msg, idx) => (
        <div
          key={idx}
          className={msg.role === 'user' ? 'text-right text-blue-600' : 'text-left text-gray-700'}
        >
          <span>{msg.role === 'user' ? '你:' : 'AI:'}{msg.content}</span>
        </div>
      ))}
    </div>

    <div className="mt-4 flex gap-2">
      <input
        className="flex-1 border rounded px-3 py-2"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="请输入内容..."
      />
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded"
        onClick={handleSend}>
        发送
      </button>
    </div>
  </div>
 )
}
