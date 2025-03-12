"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  MessageCircle,
  Send,
  X,
  GraduationCap,
  ExternalLink,
  Mail,
  BookOpen,
  Users,
  Calendar,
  MapPin,
  Info,
  Clock,
  School,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { handleChatMessage, getUniversityContact } from "@/app/actions"
import type { WebPage, ContactInfo } from "@/lib/university-crawler"
import ReactMarkdown from "react-markdown"

type Message = {
  id: string
  role: "user" | "assistant"
  content: string
  sources?: WebPage[]
}

interface BugemaChatWidgetProps {
  title?: string
  initialMessage?: string
  position?: "bottom-right" | "bottom-left"
}

export function BugemaChatWidget({
  title = "Bugema University Assistant",
  initialMessage = "Hello! Welcome to Bugema University. How can I help you today?",
  position = "bottom-right",
}: BugemaChatWidgetProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [contactInfo, setContactInfo] = useState<ContactInfo | null>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Bugema University colors
  const primaryColor = "bg-[#00205B]" // Dark blue
  const secondaryColor = "bg-[#8B0000]" // Dark red
  const accentColor = "bg-[#F8F8F8]" // Light gray for message bubbles

  // Fetch contact info when the widget is first opened
  useEffect(() => {
    if (isOpen && !contactInfo) {
      getUniversityContact().then((info) => {
        if (info) {
          setContactInfo(info)
        }
      })
    }
  }, [isOpen, contactInfo])

  // Add initial bot message when chat is first opened
  useEffect(() => {
    if (isOpen && messages.length === 0 && initialMessage) {
      setMessages([
        {
          id: "1",
          role: "assistant",
          content: initialMessage,
        },
      ])
    }

    // Focus the input field when chat is opened
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen, messages.length, initialMessage])

  // Auto-scroll to the bottom when new messages arrive
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [messages])

  const positionClasses = {
    "bottom-right": "bottom-4 right-4",
    "bottom-left": "bottom-4 left-4",
  }

  // Format message content to preserve line breaks and indentation
  const formatMessageContent = (content: string) => {
    // Replace URLs with markdown links
    const urlRegex = /(https?:\/\/[^\s]+)/g
    const withLinks = content.replace(urlRegex, "[$1]($1)")

    return withLinks
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    try {
      // Process the message with our intelligent handler
      const response = await handleChatMessage(input)

      const botMessage: Message = {
        id: Date.now().toString(),
        role: "assistant",
        content: response.message,
        sources: response.sources,
      }

      setMessages((prev) => [...prev, botMessage])
    } catch (error) {
      console.error("Error processing message:", error)

      const errorMessage: Message = {
        id: Date.now().toString(),
        role: "assistant",
        content:
          "I'm sorry, I encountered an error while processing your message. Please try again later or contact our IT support.",
      }

      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
      if (inputRef.current) {
        inputRef.current.focus()
      }
    }
  }

  // Function to render quick access buttons
  const renderQuickButtons = () => {
    const buttons = [
      { icon: <BookOpen size={14} />, label: "Programs", query: "What programs do you offer?" },
      { icon: <Users size={14} />, label: "Admissions", query: "How do I apply to Bugema University?" },
      { icon: <School size={14} />, label: "Tuition", query: "What are the tuition fees?" },
      { icon: <Info size={14} />, label: "History", query: "Tell me about Bugema University's history" },
      { icon: <MapPin size={14} />, label: "Location", query: "Where is Bugema University located?" },
      { icon: <Calendar size={14} />, label: "Student Life", query: "What is student life like at Bugema?" },
      { icon: <Mail size={14} />, label: "Contact", query: "How can I contact Bugema University?" },
      { icon: <Clock size={14} />, label: "Events", query: "What events are coming up at Bugema University?" },
    ]

    return (
      <div className="mt-4 mb-2">
        <h3 className="text-xs font-medium text-gray-500 mb-2">Quick Questions:</h3>
        <div className="flex flex-wrap gap-2">
          {buttons.map((button) => (
            <Button
              key={button.label}
              variant="outline"
              size="sm"
              className="flex items-center gap-1.5 text-xs border-gray-300 bg-white hover:bg-gray-50"
              onClick={() => {
                setInput(button.query)
                handleSubmit(new Event("submit") as unknown as React.FormEvent)
              }}
            >
              {button.icon}
              {button.label}
            </Button>
          ))}
        </div>
      </div>
    )
  }

  // Custom renderer for markdown content
  const MarkdownRenderer = ({ content }: { content: string }) => {
    return (
      <ReactMarkdown
        components={{
          p: ({ node, ...props }) => <p className="mb-2" {...props} />,
          ul: ({ node, ...props }) => <ul className="list-disc pl-5 mb-2 space-y-1" {...props} />,
          ol: ({ node, ...props }) => <ol className="list-decimal pl-5 mb-2 space-y-1" {...props} />,
          li: ({ node, ...props }) => <li className="pl-1" {...props} />,
          h1: ({ node, ...props }) => <h1 className="text-lg font-bold mb-2" {...props} />,
          h2: ({ node, ...props }) => <h2 className="text-base font-bold mb-2" {...props} />,
          h3: ({ node, ...props }) => <h3 className="text-sm font-bold mb-2" {...props} />,
          a: ({ node, ...props }) => (
            <a className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer" {...props} />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    )
  }

  return (
    <>
      {/* Floating button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className={cn(
            "fixed z-50 rounded-full w-14 h-14 shadow-lg flex items-center justify-center transition-all hover:scale-105",
            positionClasses[position],
            primaryColor,
          )}
          aria-label="Open chat"
        >
          <MessageCircle size={24} className="text-white" />
        </Button>
      )}

      {/* Chat window */}
      {isOpen && (
        <Card
          className={cn(
            "fixed z-50 w-80 sm:w-[400px] h-[550px] max-h-[85vh] shadow-xl flex flex-col overflow-hidden",
            positionClasses[position],
          )}
        >
          <CardHeader className={cn("flex flex-row items-center justify-between p-3", primaryColor, "text-white")}>
            <div className="flex items-center gap-2">
              <GraduationCap size={20} />
              <CardTitle className="text-base font-semibold">{title}</CardTitle>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="h-8 w-8 rounded-full text-white hover:bg-blue-800 transition-colors"
            >
              <X size={18} />
              <span className="sr-only">Close</span>
            </Button>
          </CardHeader>

          <CardContent className="flex-1 overflow-y-auto p-4 bg-gray-50">
            {messages.map((m) => (
              <div key={m.id} className={`mb-4 ${m.role === "user" ? "flex justify-end" : "flex justify-start"}`}>
                <div
                  className={`max-w-[85%] rounded-lg shadow-sm ${
                    m.role === "user"
                      ? cn(primaryColor, "text-white rounded-tr-none")
                      : "bg-white text-gray-800 rounded-tl-none border border-gray-200"
                  }`}
                >
                  <div className={`px-4 py-3 ${m.role === "user" ? "" : "prose-sm"}`}>
                    {m.role === "user" ? m.content : <MarkdownRenderer content={formatMessageContent(m.content)} />}
                  </div>

                  {/* Sources */}
                  {m.sources && m.sources.length > 0 && (
                    <div className="px-4 py-2 border-t border-gray-100 bg-gray-50 rounded-b-lg">
                      <div className="text-xs font-medium text-gray-500 mb-1">Sources:</div>
                      <ul className="space-y-1">
                        {m.sources.map((source, index) => (
                          <li key={index} className="flex items-start">
                            <a
                              href={source.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center text-xs text-blue-600 hover:underline"
                            >
                              <ExternalLink size={10} className="mr-1 flex-shrink-0" />
                              <span className="truncate">{source.title || source.url}</span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Quick access buttons after the first assistant message */}
            {messages.length === 1 && messages[0].role === "assistant" && renderQuickButtons()}

            {isLoading && (
              <div className="flex justify-start mb-4">
                <div className="max-w-[85%] bg-white text-gray-800 rounded-lg rounded-tl-none border border-gray-200 px-4 py-3 shadow-sm">
                  <div className="flex space-x-2">
                    <div
                      className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"
                      style={{ animationDelay: "0ms" }}
                    ></div>
                    <div
                      className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"
                      style={{ animationDelay: "150ms" }}
                    ></div>
                    <div
                      className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"
                      style={{ animationDelay: "300ms" }}
                    ></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </CardContent>

          <CardFooter className="border-t p-3 bg-white">
            <form onSubmit={handleSubmit} className="flex w-full space-x-2">
              <Input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about programs, admissions, etc."
                className="flex-grow text-sm border-gray-300 focus-visible:ring-blue-500"
                disabled={isLoading}
              />
              <Button
                type="submit"
                size="icon"
                disabled={isLoading || !input.trim()}
                className={cn(
                  secondaryColor,
                  "text-white h-9 w-9 transition-colors hover:bg-red-900",
                  isLoading || !input.trim() ? "opacity-50 cursor-not-allowed" : "",
                )}
              >
                <Send size={16} />
                <span className="sr-only">Send message</span>
              </Button>
            </form>
          </CardFooter>
        </Card>
      )}
    </>
  )
}

