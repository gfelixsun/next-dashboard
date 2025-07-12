type Props = {
  role: 'user' | 'assistant'
  content: string
}

export default function ChatMessage({ role, content }: Props) {
  const isUser = role === 'user'
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-2`}>
      <div
        className={`rounded-xl px-4 py-2 max-w-[70%] text-white ${isUser ? 'bg-blue-500' : 'bg-gray-600'}`}
      >
        {content}
      </div>
    </div>
  )
}
