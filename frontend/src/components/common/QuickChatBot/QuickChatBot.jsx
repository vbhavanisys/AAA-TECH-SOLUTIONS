import React, { useState } from 'react';
import { MessageSquare, X, Send, Bot, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { companyInfo } from '../../../data/company';
import './QuickChatBot.css';

export default function QuickChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputVal, setInputVal] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: "👋 Hi! Welcome to **AAA Tech Solutions**.\n\nI'm your assistant. How can I help you today?"
    }
  ]);

  const quickOptions = [
    { label: '📚 Explore Courses', reply: 'We offer cohort-based technical training including Full-Stack Development, Cloud & DevOps, UI/UX Design Systems, and Data Engineering.', action: '/courses' },
    { label: '💰 Course Fees & Plans', reply: 'Our programs offer transparent pricing with flexible installment plans. Starting from single topics to comprehensive immersive career tracks.', action: '/courses' },
    { label: '🎓 How to Enroll', reply: 'You can submit an online application in minutes! Our admissions team reviews applications on a rolling basis.', action: '/enrollment' },
    { label: '💼 Enterprise Services', reply: 'We engineer custom software, web applications, and cloud infrastructure for businesses.', action: '/services' },
    { label: '📞 Contact & WhatsApp', reply: `Reach out directly via email at ${companyInfo.contact.email} or call ${companyInfo.contact.phone}. We respond rapidly!`, action: '/contact' }
  ];

  const handleOptionClick = (opt) => {
    const userMsg = { id: Date.now(), sender: 'user', text: opt.label };
    const botMsg = { id: Date.now() + 1, sender: 'bot', text: opt.reply, link: opt.action };
    setMessages(prev => [...prev, userMsg, botMsg]);
  };

  const handleSend = () => {
    if (!inputVal.trim()) return;
    const userMsg = { id: Date.now(), sender: 'user', text: inputVal };
    const botMsg = {
      id: Date.now() + 1,
      sender: 'bot',
      text: "Thank you for your message! Our admissions and technical team can best help you directly on WhatsApp or via our inquiry form.",
      link: '/contact'
    };
    setMessages(prev => [...prev, userMsg, botMsg]);
    setInputVal('');
  };

  return (
    <>
      {/* Floating Chat Bubble */}
      <button
        type="button"
        className="chat-bubble-btn"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close chat assistant" : "Open chat assistant"}
        title="Chat with AAA Tech Solutions"
      >
        {isOpen ? <X size={26} /> : <MessageSquare size={26} />}
      </button>

      {/* Chat Panel */}
      {isOpen && (
        <div className="chat-panel-container" role="dialog" aria-label="AAA Tech Assistant">
          <div className="chat-panel-header">
            <div className="chat-panel-hinfo">
              <div className="chat-panel-avatar">
                <Bot size={20} />
              </div>
              <div>
                <div className="chat-panel-title">AAA Tech Assistant</div>
                <div className="chat-panel-status">
                  <span className="chat-status-dot"></span>
                  <span>Online — Typically replies instantly</span>
                </div>
              </div>
            </div>
            <button
              type="button"
              className="chat-panel-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
            >
              <X size={18} />
            </button>
          </div>

          <div className="chat-messages-area">
            {messages.map((msg) => (
              <div key={msg.id} className={`chat-message-bubble msg-${msg.sender}`}>
                <div className="msg-content">
                  {msg.text.split('\n\n').map((para, pIdx) => (
                    <p key={pIdx}>{para}</p>
                  ))}
                </div>
                {msg.link && (
                  <Link
                    to={msg.link}
                    className="chat-msg-action-btn"
                    onClick={() => setIsOpen(false)}
                  >
                    <span>View Details &rarr;</span>
                  </Link>
                )}
              </div>
            ))}
          </div>

          <div className="chat-quick-options">
            {quickOptions.map((opt, idx) => (
              <button
                key={idx}
                type="button"
                className="chat-opt-pill"
                onClick={() => handleOptionClick(opt)}
              >
                {opt.label}
              </button>
            ))}
          </div>

          <div className="chat-input-container">
            <input
              type="text"
              className="chat-text-input"
              placeholder="Ask a question..."
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <button
              type="button"
              className="chat-send-btn"
              onClick={handleSend}
              aria-label="Send message"
            >
              <Send size={15} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
