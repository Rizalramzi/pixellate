import React, { useState, useEffect, useRef } from 'react';
import {
  MessageSquare,
  Send,
  X,
  Sparkles,
  Bot,
  User,
  RotateCcw,
  Copy,
  Check,
  Maximize2,
  Minimize2,
  ExternalLink,
  ChevronDown,
  Zap,
  HelpCircle,
  AlertCircle
} from 'lucide-react';
import { PixellateMark } from './PixellateLogo';
import { useChat } from '../context/ChatContext';

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  content: string;
  timestamp: Date;
}

const SUGGESTED_QUESTIONS = [
  'Berapa estimasi biaya jasa Web Development?',
  'Apakah ada pendampingan sidang & video penjelasan Loom?',
  'Bagaimana 7 langkah alur pengerjaan di Pixellate?',
  'Apa saja syarat garansi 5 hari dan kebijakan refund?',
  'Bisa bantu pembuatan aplikasi Mobile Android / Flutter?',
  'Bagaimana cara memesan lewat WhatsApp resmi?',
];

export const PixellateChatbot: React.FC = () => {
  const { isOpen, setIsOpen, closeChat, initialPrompt, clearInitialPrompt } = useChat();
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      content: `Halo! 👋 Saya **Pixellate Assistant**, asisten AI resmi Pixellate.\n\nAda yang bisa saya bantu seputar:\n* **Estimasi biaya & paket layanan** (Web, Mobile, UI/UX, Custom IT)\n* **Alur pengerjaan 7 langkah & sistem DP 50%**\n* **Pendampingan sidang, rekaman logika Loom & Google Meet**\n* **Garansi 5 hari & kebijakan 100% refund**\n\nSilakan pilih topik di bawah atau ketik langsung pertanyaan Anda!`,
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [modelType, setModelType] = useState<'gemini-3.5-flash' | 'gemini-3.1-flash-lite'>('gemini-3.5-flash');
  const [isExpanded, setIsExpanded] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // Auto-scroll to bottom of chat
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setTimeout(() => inputRef.current?.focus(), 200);
    }
  }, [isOpen, messages, isLoading]);

  // Handle triggered prompt from outside
  useEffect(() => {
    if (initialPrompt && isOpen) {
      handleSendMessage(initialPrompt);
      clearInitialPrompt();
    }
  }, [initialPrompt, isOpen]);

  const handleSendMessage = async (textToSend?: string) => {
    const query = (textToSend || input).trim();
    if (!query || isLoading) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: query,
      timestamp: new Date(),
    };

    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput('');
    setErrorMessage(null);
    setIsLoading(true);

    try {
      // Build history for backend
      const payloadMessages = newMessages
        .filter((m) => m.id !== 'welcome')
        .map((m) => ({
          role: m.role,
          content: m.content,
        }));

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: payloadMessages,
          model: modelType,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Gagal memuat tanggapan dari server AI.');
      }

      const botReply: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        content: data.reply || 'Tidak ada balasan dari model.',
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botReply]);
    } catch (err: any) {
      console.error('Chatbot error:', err);
      setErrorMessage(err.message || 'Terjadi gangguan jaringan atau API Gemini. Silakan coba lagi.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: 'welcome',
        role: 'model',
        content: `Halo kembali! 👋 Riwayat percakapan telah dibersihkan.\n\nSilakan tanyakan apa saja tentang layanan pengerjaan proyek IT, estimasi harga, garansi, maupun alur kerja di Pixellate!`,
        timestamp: new Date(),
      },
    ]);
    setErrorMessage(null);
  };

  const handleCopyText = (content: string, id: string) => {
    navigator.clipboard.writeText(content);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Helper to render basic markdown formatting cleanly
  const renderFormattedContent = (content: string) => {
    const lines = content.split('\n');

    return lines.map((line, idx) => {
      // Bullet list items
      if (line.startsWith('* ') || line.startsWith('- ')) {
        const bulletText = line.substring(2);
        return (
          <li key={idx} className="ml-4 list-disc text-slate-800 dark:text-slate-200 my-1">
            {formatInlineText(bulletText)}
          </li>
        );
      }

      // Empty line
      if (line.trim() === '') {
        return <div key={idx} className="h-2" />;
      }

      return (
        <p key={idx} className="my-1 text-slate-800 dark:text-slate-200 leading-relaxed">
          {formatInlineText(line)}
        </p>
      );
    });
  };

  // Helper for bold and links
  const formatInlineText = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <strong key={i} className="font-semibold text-slate-900 dark:text-white">
            {part.slice(2, -2)}
          </strong>
        );
      }
      return part;
    });
  };

  return (
    <>
      {/* Floating Launcher Trigger Badge */}
      <aside aria-label="Gemini AI Chatbot Launcher" className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
        {/* WhatsApp Direct Button */}
        <a
          href="https://wa.me/6289513622252?text=Halo%20Pixellate,%20saya%20ingin%20tanya%20mengenai%20bantuan%20proyek%20IT"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3.5 py-3 rounded-full bg-slate-900/90 dark:bg-slate-800/90 text-white hover:bg-slate-900 shadow-lg border border-slate-700/40 backdrop-blur-md hover:scale-105 active:scale-95 transition-all text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[#0068FF]"
          title="WhatsApp Pixellate (089513622252)"
          aria-label="Chat WhatsApp Admin Pixellate"
        >
          <div className="relative">
            <MessageSquare className="w-4 h-4 text-emerald-400" />
            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-400 animate-ping opacity-75" />
          </div>
          <span className="hidden md:inline-block">WhatsApp</span>
        </a>

        {/* Gemini Chatbot Trigger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`flex items-center gap-2.5 px-4 py-3 rounded-full text-white shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0068FF] ${
            isOpen
              ? 'bg-slate-800 text-slate-200 hover:bg-slate-700'
              : 'bg-gradient-to-r from-[#0068FF] to-blue-600 hover:from-[#0055D6] hover:to-blue-700 shadow-blue-500/25 ring-2 ring-white/20'
          }`}
          aria-label={isOpen ? 'Tutup Tanya Pixellate AI' : 'Buka Tanya Pixellate AI (Gemini Chatbot)'}
        >
          <div className="relative flex items-center justify-center">
            {isOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <>
                <Bot className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-amber-300 border-2 border-[#0068FF]" />
              </>
            )}
          </div>
          <div className="text-left hidden sm:block">
            <span className="block text-xs font-bold leading-tight">Tanya Pixellate AI</span>
            <span className="block text-[10px] text-blue-100 font-normal leading-tight">Gemini Chatbot</span>
          </div>
        </button>
      </aside>

      {/* Chat Window / Drawer */}
      {isOpen && (
        <section
          aria-label="Panel Chatbot Gemini Pixellate"
          className={`fixed z-50 transition-all duration-300 shadow-2xl flex flex-col overflow-hidden bg-white dark:bg-[#0E131F] border border-slate-200/90 dark:border-slate-800 ${
            isExpanded
              ? 'inset-3 sm:inset-6 md:inset-10 rounded-2xl'
              : 'bottom-20 right-4 sm:right-6 w-[94vw] sm:w-[420px] md:w-[460px] h-[640px] max-h-[82vh] rounded-2xl'
          }`}
        >
          {/* Header */}
          <div className="px-4 py-3.5 bg-gradient-to-r from-slate-900 via-[#00388A] to-[#0068FF] text-white flex items-center justify-between select-none">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center p-1.5 shadow-sm">
                <PixellateMark size={24} color="#ffffff" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="text-sm font-bold tracking-tight text-white">Pixellate AI</h3>
                  <span className="px-1.5 py-0.5 rounded text-[10px] font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Online
                  </span>
                </div>
                <p className="text-[11px] text-blue-100/90">Konsultan Resmi Proyek IT & Sidang</p>
              </div>
            </div>

            {/* Header Actions */}
            <div className="flex items-center gap-1.5">
              {/* Model Switcher Pill */}
              <button
                onClick={() =>
                  setModelType((prev) =>
                    prev === 'gemini-3.5-flash' ? 'gemini-3.1-flash-lite' : 'gemini-3.5-flash'
                  )
                }
                title={`Model aktif: ${
                  modelType === 'gemini-3.5-flash' ? 'Gemini 3.5 Flash (Standar)' : 'Gemini 3.1 Flash-Lite (Cepat)'
                }. Klik untuk ganti model.`}
                className="hidden sm:flex items-center gap-1 px-2 py-1 rounded-lg text-[10px] font-medium bg-white/10 hover:bg-white/20 border border-white/15 transition-colors text-blue-100"
              >
                <Zap className="w-3 h-3 text-amber-300" />
                <span>{modelType === 'gemini-3.5-flash' ? '3.5 Flash' : '3.1 Lite'}</span>
              </button>

              {/* Reset History */}
              <button
                onClick={handleResetChat}
                title="Reset percakapan"
                className="p-1.5 rounded-lg text-blue-100 hover:text-white hover:bg-white/15 transition-colors"
                aria-label="Bersihkan riwayat percakapan"
              >
                <RotateCcw className="w-4 h-4" />
              </button>

              {/* Expand / Minimize */}
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                title={isExpanded ? 'Kecilkan jendela' : 'Perbesar layar penuh'}
                className="p-1.5 rounded-lg text-blue-100 hover:text-white hover:bg-white/15 transition-colors hidden sm:block"
                aria-label={isExpanded ? 'Kecilkan tampilan' : 'Perbesar tampilan'}
              >
                {isExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
              </button>

              {/* Close button */}
              <button
                onClick={closeChat}
                title="Tutup chat"
                className="p-1.5 rounded-lg text-blue-100 hover:text-white hover:bg-white/15 transition-colors"
                aria-label="Tutup jendela chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Model Notice Bar */}
          <div className="px-4 py-1.5 bg-blue-50 dark:bg-slate-900/90 border-b border-blue-100/80 dark:border-slate-800 text-[11px] text-slate-600 dark:text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-[#0068FF]" />
              Didukung oleh <strong>Google Gemini API</strong> ({modelType})
            </span>
            <span className="text-[10px] text-slate-500">Respon akurat & ramah</span>
          </div>

          {/* Scrollable Message Thread */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs sm:text-sm">
            {messages.map((message) => {
              const isUser = message.role === 'user';

              return (
                <div
                  key={message.id}
                  className={`flex items-start gap-2.5 ${isUser ? 'flex-row-reverse' : 'flex-row'}`}
                >
                  {/* Avatar */}
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 text-white ${
                      isUser
                        ? 'bg-slate-700 text-slate-100'
                        : 'bg-[#0068FF] shadow-sm'
                    }`}
                  >
                    {isUser ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                  </div>

                  {/* Message Bubble */}
                  <div
                    className={`max-w-[85%] rounded-2xl p-3.5 relative group ${
                      isUser
                        ? 'bg-[#0068FF] text-white rounded-tr-xs shadow-sm'
                        : 'bg-slate-100/90 dark:bg-slate-800/90 text-slate-900 dark:text-slate-100 rounded-tl-xs border border-slate-200/70 dark:border-slate-700/60 shadow-xs'
                    }`}
                  >
                    {isUser ? (
                      <p className="whitespace-pre-wrap leading-relaxed">{message.content}</p>
                    ) : (
                      <div className="prose-xs space-y-1">
                        {renderFormattedContent(message.content)}
                      </div>
                    )}

                    {/* Metadata & Actions for Model Responses */}
                    {!isUser && (
                      <div className="mt-2.5 pt-2 border-t border-slate-200/60 dark:border-slate-700/50 flex items-center justify-between text-[10px] text-slate-500 dark:text-slate-400">
                        <span>
                          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </span>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleCopyText(message.content, message.id)}
                            className="hover:text-[#0068FF] dark:hover:text-[#0068FF] flex items-center gap-1 transition-colors"
                            title="Salin teks jawaban"
                          >
                            {copiedId === message.id ? (
                              <>
                                <Check className="w-3 h-3 text-emerald-500" />
                                <span className="text-emerald-500 font-medium">Tersalin</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-3 h-3" />
                                <span>Salin</span>
                              </>
                            )}
                          </button>

                          <a
                            href={`https://wa.me/6289513622252?text=${encodeURIComponent(
                              `Halo Pixellate, saya ingin konsultasi lebih lanjut terkait:\n${message.content.slice(0, 100)}...`
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-emerald-500 flex items-center gap-1 transition-colors"
                            title="Lanjut tanya lewat WhatsApp resmi"
                          >
                            <ExternalLink className="w-3 h-3" />
                            <span>Lanjut ke WA</span>
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}

            {/* Loading Indicator */}
            {isLoading && (
              <div className="flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-[#0068FF] flex items-center justify-center shrink-0 text-white shadow-sm">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="bg-slate-100 dark:bg-slate-800 rounded-2xl rounded-tl-xs p-3.5 border border-slate-200/70 dark:border-slate-700/60 shadow-xs flex items-center gap-2">
                  <div className="flex items-center gap-1 py-1">
                    <span className="w-2 h-2 rounded-full bg-[#0068FF] animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-2 h-2 rounded-full bg-[#0068FF] animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-2 h-2 rounded-full bg-[#0068FF] animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                  <span className="text-xs text-slate-500 dark:text-slate-400 italic">
                    Pixellate AI sedang mengetik...
                  </span>
                </div>
              </div>
            )}

            {/* Error Message with Retry */}
            {errorMessage && (
              <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900/60 text-rose-700 dark:text-rose-300 text-xs flex items-start gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="font-medium">{errorMessage}</p>
                  <button
                    onClick={() => handleSendMessage()}
                    className="mt-1.5 underline font-semibold hover:text-rose-900 dark:hover:text-rose-100"
                  >
                    Coba kirim ulang
                  </button>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggested Prompt Pills */}
          <div className="px-4 py-2 bg-slate-50 dark:bg-[#0B0F18] border-t border-slate-200/80 dark:border-slate-800 overflow-x-auto no-scrollbar">
            <div className="flex items-center gap-2 whitespace-nowrap">
              <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 flex items-center gap-1">
                <HelpCircle className="w-3 h-3 text-[#0068FF]" /> Rekomendasi:
              </span>
              {SUGGESTED_QUESTIONS.map((question, i) => (
                <button
                  key={i}
                  disabled={isLoading}
                  onClick={() => handleSendMessage(question)}
                  className="px-2.5 py-1 text-[11px] rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:border-[#0068FF] hover:text-[#0068FF] dark:hover:border-[#0068FF] dark:hover:text-[#0068FF] transition-all disabled:opacity-50"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>

          {/* Input Area */}
          <div className="p-3 bg-white dark:bg-[#0E131F] border-t border-slate-200/80 dark:border-slate-800">
            <div className="flex items-end gap-2 bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700 rounded-xl p-1.5 focus-within:ring-2 focus-within:ring-[#0068FF] focus-within:border-transparent transition-all">
              <textarea
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Tanyakan estimasi biaya, alur pengerjaan, atau garansi..."
                rows={1}
                disabled={isLoading}
                className="flex-1 bg-transparent resize-none border-none outline-none text-xs sm:text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 max-h-24 px-2 py-1.5 disabled:opacity-50"
              />
              <button
                onClick={() => handleSendMessage()}
                disabled={!input.trim() || isLoading}
                className="p-2 rounded-lg bg-[#0068FF] text-white hover:bg-[#0055D6] transition-all disabled:opacity-40 disabled:hover:bg-[#0068FF] shrink-0 shadow-sm"
                aria-label="Kirim pertanyaan"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
            <div className="mt-1.5 flex items-center justify-between text-[10px] text-slate-500 dark:text-slate-400 px-1">
              <span>Tekan <strong>Enter</strong> untuk kirim, <strong>Shift+Enter</strong> untuk baris baru</span>
              <a
                href="https://wa.me/6289513622252"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0068FF] hover:underline flex items-center gap-0.5"
              >
                WhatsApp Resmi (089513622252)
              </a>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default PixellateChatbot;
