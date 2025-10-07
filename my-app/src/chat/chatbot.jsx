import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { MessageSquare, X, Send, StopCircle, Bot } from "lucide-react";
import "./chatbot.css";
import { Link } from "react-router-dom";
// Access environment variable using Vite's import.meta.env
const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

const Chatbot = () => {
  const [query, setQuery] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [displayedMessage, setDisplayedMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const typingIntervalRef = useRef(null);
  const fullMessageRef = useRef("");

  // Function to interact with the Gemini API
  const askGemini = async (userQuery) => {
    // FIX 1: Ensure the fetch URL is wrapped in backticks (template literal)
    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [{ parts: [{ text: userQuery }] }],
          }),
        }
      );
      const data = await response.json();
      if (!response.ok) return "Error fetching response.";
      return data?.candidates?.[0]?.content?.parts?.[0]?.text || "No response.";
    } catch {
      return "Connection error.";
    }
  };

  // Function to immediately display the full message and stop typing
  const stopTypingEffect = () => {
    if (typingIntervalRef.current) {
      clearInterval(typingIntervalRef.current);
      typingIntervalRef.current = null;
      setDisplayedMessage(fullMessageRef.current);
      // Update the actual message content in state
      setMessages((prev) =>
        prev.map((msg, i) =>
          i === prev.length - 1
            ? { ...msg, content: fullMessageRef.current }
            : msg
        )
      );
      setIsTyping(false);
    }
  };

  // Function to start the character-by-character typing animation
  const startTypingEffect = (fullText) => {
    setIsTyping(true);
    setDisplayedMessage("");
    fullMessageRef.current = fullText;
    let index = 0;
    let text = "";

    if (typingIntervalRef.current) clearInterval(typingIntervalRef.current);

    typingIntervalRef.current = setInterval(() => {
      if (index < fullText.length) {
        text += fullText[index];
        setDisplayedMessage(text);
        index++;
      } else {
        clearInterval(typingIntervalRef.current);
        typingIntervalRef.current = null;
        setIsTyping(false);
        // Final update of the message content
        setMessages((prev) =>
          prev.map((msg, i) =>
            i === prev.length - 1 ? { ...msg, content: fullText } : msg
          )
        );
      }
    }, 15); // Typing speed in milliseconds
  };

  // Effect to run the welcome message when the chatbot opens
  useEffect(() => {
    if (isOpen) {
      setMessages([{ role: "assistant", content: "..." }]);
      setTimeout(() => {
        startTypingEffect(
          "Hello! I'm your AI Assistant powered by Gemini. How can I help you today?"
        );
      }, 800);
    } else {
      stopTypingEffect(); // Clear interval if closing
    }
    return () => typingIntervalRef.current && clearInterval(typingIntervalRef.current);
  }, [isOpen]);

  // Handler for submitting a query
  const handleAsk = async () => {
    if (!query.trim() || loading) return;

    stopTypingEffect();
    setLoading(true);

    const userQuery = query.trim();
    const newMessages = [...messages, { role: "user", content: userQuery }];

    // Show a 'Thinking...' placeholder immediately
    setMessages([...newMessages, { role: "assistant", content: "Thinking..." }]);
    setQuery("");

    const geminiResponse = await askGemini(userQuery);
    // Small delay for better UX
    await new Promise((res) => setTimeout(res, 300));

    // Start typing effect for the actual response
    startTypingEffect(geminiResponse);
    // Replace the 'Thinking...' placeholder with '...' for the typing animation
    setMessages([...newMessages, { role: "assistant", content: "..." }]);
    setLoading(false);
  };

  return (
    <>
      <nav className='navbar'>
        <div className='navbarlogo'>
          <Link to="/" id='logo'>
            WELLSY
          </Link>
        </div>
        <ul className='navbarlinks'>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/mood">Mood</Link>
          </li>
          <li>
            <Link to="/meals">Meals</Link>
          </li>
          <li>
            <Link to="/chatbot">Chat bot</Link>
          </li>
          
        </ul>
      </nav>
      <div className="chatbot-container">
        {/* Chatbot Toggle Button - USES motion.button */}
        {!isOpen && (
          <motion.button
            onClick={() => setIsOpen(true)}
            className="chatbot-toggle"
            whileHover={{ scale: 1.1 }}
          >
            <MessageSquare size={24} />
          </motion.button>
        )}

        {/* Chatbot Window - USES motion.div */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="chatbot-window"
          >
            <div className="chatbot-header">
              <h3 className="chatbot-title">
                <Bot className="icon" /> WELLSY Assistant
              </h3>
              <button onClick={() => setIsOpen(false)} className="close-btn">
                <X size={20} />
              </button>
            </div>

            <div className="chatbot-messages">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  // FIX 2: Using standard string concatenation for className
                  className={"message " + (msg.role === "user" ? "user" : "assistant")}
                >
                  {msg.role === "assistant" &&
                  isTyping &&
                  index === messages.length - 1
                    ? displayedMessage // Show animated text
                    : msg.content} 
                </div>
              ))}
              {loading && <p className="thinking">...</p>}
            </div>
            <div className="chatbot-input">
              <input
                type="text"
                placeholder="Ask me anything..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleAsk()}
                disabled={loading}
              />
              {/* Send Button - USES motion.button */}
              <motion.button
                onClick={handleAsk}
                className="send-btn"
                whileTap={{ scale: 0.9 }}
                disabled={loading}
              >
                <Send size={20} /> Send
              </motion.button>
            </div>

            {/* Stop typing button */}
            {isTyping && (
              <div className="skip-typing">
                <button onClick={stopTypingEffect}>
                  <StopCircle size={14} /> Skip Typing
                </button>
              </div>
            )}
          </motion.div>
        )}
      </div>
    </>
  );
};

export default Chatbot;