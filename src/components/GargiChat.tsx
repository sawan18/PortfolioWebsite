// import React, { useState, useRef, useEffect } from 'react';
// import { Send, Bot, User, MessageCircle, X } from 'lucide-react';

// interface Message {
//   type: 'user' | 'bot' | 'typing';
//   content: string;
//   sender: string;
// }

// const GargaiChat = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [messages, setMessages] = useState<Message[]>([
//     { type: 'bot', content: "Hey there! I'm Gargai, Sawan's AI assistant. Ask me anything about him!", sender: 'Gargai' },
//   ]);
//   const [input, setInput] = useState('');
//   const messagesEndRef = useRef<HTMLDivElement>(null);

//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
//   };

//   useEffect(() => {
//     scrollToBottom();
//   }, [messages]);

//   const getBotResponse = async (userInput: string): Promise<string> => {
//     const input = userInput.toLowerCase();
//     let response = '';

//     if (input === 'hey' || input === 'hi') {
//       response = 'Hey there! How can I help you today?';
//     } else if (input === 'what is your name?') {
//       response = "I'm Gargai.";
//     } else if (input.includes('what is sawan like')) {
//       response = "Sawan is passionate about technology, a hard worker, and a really cool guy!  What specifically are you curious about?";
//     } else if (input.includes('who is this website about') || input.includes('name of the person')) {
//       response = 'This website is about Sawan Pandita. He\'s a software engineer.';
//     } else if (input.includes('talk with me casually')) {
//       response = "Okay, let's chat casually! What's up?";
//     } else if (input.includes("sawan's favorite food")) {
//       response = 'Rogan Josh. This is a Kashmiri delicacy.';
//     } else if (input.includes('what can you do')) {
//       response = "I can tell you about Sawan's background, skills, experiences, and answer some fun trivia about him!";
//     } else if (input === 'what is your name' || input === 'what is sawan name' || input === 'who are you') {
//       response = "My name is Gargai.";
//     } else if (input === 'what is your purpose') {
//       response = "My purpose is to help users learn about Sawan Pandita!";
//     } else if (input.includes("sawans resume") || input.includes("sawan resume") || input.includes("where is sawan's resume")) {
//       response = "You can find Sawan's resume in the Resume section of this website.";
//     } else if (input.includes('does sawan play any sports')) {
//       response = "Sawan is an enthusiastic athlete with a strong sports background. In high school, he played on the varsity tennis team, demonstrating his commitment to competitive sports. Earlier in his childhood, while living in India, he played cricket at a local club level and even represented India in the Under-16 category. Currently, Sawan continues to pursue his passion for cricket, playing professionally with teams in Pittsburgh and traveling throughout the Midwest and East Coast for tournaments.";
//     } else {
//       response = "I'm still learning about Sawan! Could you rephrase that, or ask something else?";
//     }

//     return response;
//   };


//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!input.trim()) return;

//     const userMessage: Message = { type: 'user', content: input, sender: 'You' };
//     setMessages(prev => [...prev, userMessage]);
//     setInput('');

//     setMessages(prev => [...prev, { type: 'typing', content: '...', sender: 'Gargai' }]);

//     const response = await getBotResponse(input);

//     setTimeout(() => {
//       const botMessage: Message = { type: 'bot', content: response, sender: 'Gargai' };
//       setMessages(prev => prev.filter(msg => msg.type !== 'typing').concat(botMessage));
//     }, 800);
//   };


//   return (
//     <>
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="fixed bottom-24 right-6 p-4 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 transition-all duration-300 z-50"
//       >
//         {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
//       </button>

//       <div
//         className={`fixed bottom-28 right-6 w-96 bg-white dark:bg-gray-800 rounded-lg shadow-xl transition-all duration-300 transform ${
//           isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'
//         } z-40`}
//         style={{ height: '500px' }}
//       >
//         <div className="p-4 border-b dark:border-gray-700 bg-indigo-600 text-white rounded-t-lg">
//           <div className="flex items-center gap-2">
//             <Bot className="w-5 h-5" />
//             <h3 className="font-semibold">Chat with Gargai</h3>
//           </div>
//         </div>

//         <div className="flex-1 overflow-y-auto p-4 space-y-4" style={{ height: 'calc(500px - 140px)' }}>
//           {messages.map((message, index) => (
//             <div
//               key={index}
//               className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
//             >
//               <div
//                 className={`max-w-[80%] p-3 rounded-lg ${
//                   message.type === 'user'
//                     ? 'bg-indigo-600 text-white'
//                     : message.type === 'typing'
//                     ? 'bg-gray-200 text-gray-500 italic'
//                     : 'bg-gray-100 dark:bg-gray-700 dark:text-white'
//                 }`}
//               >
//                 <div className="flex items-center gap-2 mb-1">
//                   {message.sender === 'Gargai' ? (
//                     <Bot className="w-4 h-4" />
//                   ) : (
//                     <User className="w-4 h-4" />
//                   )}
//                   <span className="text-xs font-medium">{message.sender}</span>
//                 </div>
//                 <p className="text-sm">{message.content}</p>
//               </div>
//             </div>
//           ))}
//           <div ref={messagesEndRef} />
//         </div>

//         <form onSubmit={handleSubmit} className="p-4 border-t dark:border-gray-700">
//           <div className="flex gap-2">
//             <input
//               type="text"
//               value={input}
//               onChange={e => setInput(e.target.value)}
//               placeholder="Ask anything about Sawan..."
//               className="flex-1 px-3 py-2 rounded-lg border dark:border-gray-700 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             />
//             <button type="submit" className="p-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
//               <Send className="w-5 h-5" />
//             </button>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// };

// export default GargaiChat;

import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios'; // Import Axios
import { Send, Bot, User, MessageCircle, X } from 'lucide-react';

interface Message {
  type: 'user' | 'bot' | 'typing';
  content: string;
  sender: string;
}

const GargaiChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { type: 'bot', content: "Hey there! I'm Gargai, Sawan's AI assistant. Feel free to ask me anything, from personal trivia to coding questions!", sender: 'Gargai' },
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Updated getBotResponse to use Google AI Studio API with custom responses
  const getBotResponse = async (userInput: string): Promise<string> => {
    const input = userInput.toLowerCase();
    let response = '';

    // Custom responses based on user input
    if (input === 'hey' || input === 'hi') {
      response = 'Hey there! How can I help you today?';
    } else if (input === 'what is your name?') {
      response = "I'm Gargai.";
    } else if (input.includes('what is sawan like')) {
      response = "Sawan is passionate about technology, a hard worker, and a really cool guy! What specifically are you curious about?";
    } else if (input.includes('who is this website about') || input.includes('name of the person') && input.includes("Who's website is this")) {
      response = "This website is about Sawan Pandita. He's a software engineer.";
    } else if (input.includes('talk with me casually')) {
      response = "Okay, let's chat casually! What's up?";
    } else if (input.includes("sawan's favorite food")) {
      response = 'Rogan Josh. This is a Kashmiri delicacy.';
    } else if (input.includes('what can you do')) {
      response = "I can tell you about Sawan's background, skills, experiences, and answer some fun trivia about him!";
    } else if (input === 'what is your name' || input === 'what is sawan name' || input === 'who are you') {
      response = "My name is Gargai.";
    } else if (input === 'what is your purpose') {
      response = "My purpose is to help users learn about Sawan Pandita!";
    } else if (input.includes("sawans resume") || input.includes("sawan resume") || input.includes("where is sawan's resume")) {
      response = "You can find Sawan's resume in the Resume section of this website.";
    } else if (input.includes('does sawan play any sports')) {
      response = "Sawan is an enthusiastic athlete with a strong sports background. In high school, he played on the varsity tennis team, demonstrating his commitment to competitive sports. Earlier in his childhood, while living in India, he played cricket at a local club level and even represented India in the Under-16 category. Currently, Sawan continues to pursue his passion for cricket, playing professionally with teams in Pittsburgh and traveling throughout the Midwest and East Coast for tournaments.";
    } else {
      // If no specific response is found, call the Google Gemini API
      try {
        const apiResponse = await axios.post(
          'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyBWK0odEjDLB03qa9tj5XQmXeEvxM9ZSh8', // Replace with your actual API key
          {
            contents: [
              {
                parts: [
                  {
                    text: userInput // Send user input directly in the expected format
                  }
                ]
              }
            ]
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );

        // Log the response data to check for structure and errors
        console.log('API Response:', apiResponse.data);

        const botResponse = apiResponse.data.candidates[0]?.content.parts[0]?.text || "I'm sorry, I didn't get that.";
        return botResponse;
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.error('Axios error:', error.response?.data);
          return "I'm sorry, there was a problem with the request.";
        } else {
          console.error('Unexpected error:', error);
          return "I'm sorry, I couldn't process your request. Please try again.";
        }
      }
    }

    return response; // Return the custom response if matched
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    console.log('User input:', input); // Log the user input

    const userMessage: Message = { type: 'user', content: input, sender: 'You' };
    setMessages(prev => [...prev, userMessage]);
    setInput('');

    setMessages(prev => [...prev, { type: 'typing', content: '...', sender: 'Gargai' }]);

    const response = await getBotResponse(input);
    console.log('Bot response:', response); // Log the bot response

    setTimeout(() => {
      const botMessage: Message = { type: 'bot', content: response, sender: 'Gargai' };
      setMessages(prev => prev.filter(msg => msg.type !== 'typing').concat(botMessage));
    }, 800);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-24 right-6 p-4 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 transition-all duration-300 z-50"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>

      <div
        className={`fixed bottom-28 right-6 w-96 bg-white dark:bg-gray-800 rounded-lg shadow-xl transition-all duration-300 transform ${
          isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'
        } z-40`}
        style={{ height: '500px' }}
      >
        <div className="p-4 border-b dark:border-gray-700 bg-indigo-600 text-white rounded-t-lg">
          <div className="flex items-center gap-2">
            <Bot className="w-5 h-5" />
            <h3 className="font-semibold">Chat with Gargai</h3>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4" style={{ height: 'calc(500px - 140px)' }}>
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] p-3 rounded-lg ${
                  message.type === 'user'
                    ? 'bg-indigo-600 text-white'
                    : message.type === 'typing'
                    ? 'bg-gray-200 text-gray-500 italic'
                    : 'bg-gray-100 dark:bg-gray-700 dark:text-white'
                }`}
              >
                <div className="flex items-center gap-2 mb-1">
                  {message.sender === 'Gargai' ? (
                    <Bot className="w-4 h-4" />
                  ) : (
                    <User className="w-4 h-4" />
                  )}
                  <span className="text-xs font-medium">{message.sender}</span>
                </div>
                <p className="text-sm">{message.content}</p>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <form onSubmit={handleSubmit} className="p-4 border-t dark:border-gray-700">
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Ask anything about Sawan..."
              className="flex-1 px-3 py-2 rounded-lg border dark:border-gray-700 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button type="submit" className="p-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
              <Send className="w-5 h-5" />
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default GargaiChat;
