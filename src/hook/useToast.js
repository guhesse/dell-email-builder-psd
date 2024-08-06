import { useState, createContext, useContext } from 'react';

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
    const [messages, setMessages] = useState([]);

    const addMessage = (msg, type = 'success') => {
        setMessages((prevMessages) => [...prevMessages, { msg, type }]);
        setTimeout(() => {
            setMessages((prevMessages) => prevMessages.slice(1));
        }, 3000); // Remove a mensagem após 3 segundos
    };

    return (
        <ToastContext.Provider value={addMessage}>
            {children}
            <div className="toast-container">
                {messages.map((message, index) => (
                    <div key={index} className={`toast show ${message.type}`}>{message.msg}</div>
                ))}
            </div>
        </ToastContext.Provider>
    );
};

export const useToast = () => {
    return useContext(ToastContext);
};