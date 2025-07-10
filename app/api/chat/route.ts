import { NextRequest, NextResponse } from 'next/server'

export async function POST (req: NextRequest) {
  try {
    const { messages } = await req.json()
  
    console.log('✅ 收到 messages:', messages)

    const apiKey = process.env.OPENAI_API_KEY
    console.log('✅ 加载到 apiKey:', apiKey)
    if (!apiKey) {
      return NextResponse.json({ error: 'API key is missing' }, { status: 500 })
    }
  
    // const res = await fetch('https://api.openai.com/v1/chat/completions', {
    const res = await fetch('https://openai.api2d.net/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages,
        max_tokens: 100, // 限制返回最多 100 token
        temperature: 0.7
      })
    })
  
    const data = await res.json()
    console.log('✅ OpenAI 返回数据:', data);
    
    return NextResponse.json({ reply: data.choices[0]?.message?.content || ''})
  } catch (err) {
    console.error('❗️OpenAI 请求出错:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
