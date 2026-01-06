import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

export default function DashboardChatBox({ onSend }) {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const endRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = message.trim();
    if (!trimmed) return;
    const newItem = { id: Date.now(), text: trimmed };
    setMessages((prev) => [...prev, newItem]);
    onSend && onSend(trimmed);
    setMessage("");
  };

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <Box>
      <div className="header">Start a quick note</div>
      <div className="body">
        <div className="messages">
          {messages.map((m) => (
            <div key={m.id} className="message">
              <div className="bubble">{m.text}</div>
            </div>
          ))}
          <div ref={endRef} />
        </div>
        <form onSubmit={handleSubmit} className="form">
          <input
            className="input"
            type="text"
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button className="send" type="submit">Send</button>
        </form>
      </div>
    </Box>
  );
}

const Box = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  .header {
    padding: 1rem 1.5rem;
    color: ${(props) => props.theme.textPrimary};
    font-weight: 600;
  }
  .body {
    max-width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    padding: 1rem 1.5rem;
  }
  .messages {
    flex: 1;
    overflow: auto;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    &::-webkit-scrollbar {
  @media screen and (max-width: 720px) {
    .bubble { max-width: 90%; }
    .form { flex-direction: row; max-width: 100%; }
    .input { padding: 0.6rem; }
    .send { padding: 0.6rem 0.8rem; }
  }
      width: 0.2rem;
      &-thumb {
        background-color: #ffffff39;
        width: 0.1rem;
        border-radius: 1rem;
      }
    }
  }
  .message {
    display: flex;
    justify-content: flex-end;
  }
  .bubble {
    max-width: 70%;
    padding: 0.6rem 0.8rem;
    border-radius: 0.75rem;
    background: #4f04ff21;
    color: ${(props) => props.theme.textPrimary};
    overflow-wrap: break-word;
  }
  .form {
    display: flex;
    gap: 0.5rem;
    width: 100%;
    max-width: 100%;
    align-items: center;
  }
  .input {
    flex: 1;
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;
    border: 1px solid rgba(255,255,255,0.2);
    background: transparent;
    color: ${(props) => props.theme.textPrimary};
    outline: none;
  }
  .send {
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;
    border: none;
    background: #9a86f3;
    color: #ffffff;
    cursor: pointer;
  }
`;


