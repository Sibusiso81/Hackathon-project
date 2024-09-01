import React, { useState } from 'react';
import "./App.css";
import { IoCodeSlash, IoSend } from 'react-icons/io5';
import { BiPlanet } from 'react-icons/bi';
import { FaPython } from 'react-icons/fa';
import { TbMessageChatbot } from 'react-icons/tb';
import { GoogleGenerativeAI } from "@google/generative-ai";

const App = () => {
  const [message, setMessage] = useState("");
  const [isResponseScreen, setIsResponseScreen] = useState(false);
  const [messages, setMessages] = useState([]); 

  const hitRequest = () => {
    if (message) {
      generateResponse(message);
    } else {
      alert("You must write something...!");
    }
  };

  const generateResponse = async (msg) => {
    if (!msg) return;

    const genAI = new GoogleGenerativeAI("AIzaSyCuteg6uFuyulKhvIl4kw7e6Py4T5uZDBw"); // Replace with your API key
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(msg);
    
    const newMessages = [
      ...messages,
      { type: "userMsg", text: msg },
      { type: "responseMsg", text: result.response.text() },
    ];

    setMessages(newMessages);
    setIsResponseScreen(true);
    setMessage(""); // Clear the input field after sending the message
    console.log(result.response.text());
  };

  const newChat = () => {
    setIsResponseScreen(false);
    setMessages([]); // Clear the messages array
  }

  return (
    <>
      <div className="container xl:w-screen xl:h-screen w-screen min-h-screen overflow-x-hidden bg-[#0E0E0E] text-white">
        {
          isResponseScreen ?
            <div className='h-[80vh]'>
              <div className="header pt-[25px] flex items-center justify-between w-[100vw] px-[300px]">
                <h2 className='text-2xl'>AssistMe</h2>
                <button id='newChatBtn' className='bg-[#181818] p-[10px] rounded-[30px] cursor-pointer text-[14px] px-[20px]' onClick={newChat}>New Chat</button>
              </div>

              <div className="messages">
              {
                messages?.map((msg, index) => (
                  <div key={index} className={msg.type}>{msg.text}</div>
                ))
              }
              </div>
            </div> :
            <div className="middle h-[80vh] flex items-center flex-col justify-center">
              <h1 className='text-4xl'>AssistMe</h1>
              <div className="boxes mt-[25px] flex items-center gap-2">
                <div className="card rounded-lg cursor-pointer transition-all hover:bg-[#201f1f] px-[20px] relative min-h-[20vh] bg-[#181818] p-[10px]">
                  <p className='text-[18px]'>Nginga tshala kanjan amazambane? <br />
                    Ngifunde kanjan?.</p>

                  <i className='absolute right-3 bottom-3 text-[18px]'><IoCodeSlash /></i>
                </div>
                <div className="card rounded-lg cursor-pointer transition-all hover:bg-[#201f1f] px-[20px] relative min-h-[20vh] bg-[#181818] p-[10px]">
                  <p className='text-[18px]'>Wat moet ek plant vir die beste opbrengs <br />
                  vir die volgende seisoen? <br />
                    </p>

                  <i className='absolute right-3 bottom-3 text-[18px]'><BiPlanet /></i>
                </div>

                <div className="card rounded-lg cursor-pointer transition-all hover:bg-[#201f1f] px-[20px] relative min-h-[20vh] bg-[#181818] p-[10px]">
                  <p className='text-[18px]'>Should I use organic fertilizers <br />
                  on my farm? </p>

                  <i className='absolute right-3 bottom-3 text-[18px]'><FaPython /></i>
                </div>

                <div className="card rounded-lg cursor-pointer transition-all hover:bg-[#201f1f] px-[20px] relative min-h-[20vh] bg-[#181818] p-[10px]">
                  <p className='text-[18px]'>Dibjalo tše 5 tša godimo ka SA <br />
                    ?</p>

                  <i className='absolute right-3 bottom-3 text-[18px]'><TbMessageChatbot /></i>
                </div>
              </div>
            </div>
        }

        <div className="bottom w-[100%] flex flex-col items-center">
          <div className="inputBox w-[60%] text-[15px] py-[7px] flex items-center bg-[#181818] rounded-[30px]">
            <input value={message} onChange={(e) => { setMessage(e.target.value) }} type="text" className='p-[10px] pl-[15px] bg-transparent flex-1 outline-none border-none' placeholder='Write your message here...' id='messageBox' />
            {
              message === "" ? "" : <i className='text-green-500 text-[20px] mr-5 cursor-pointer' onClick={hitRequest}><IoSend /></i>
            }
          </div>
          <p className='text-[gray] text-[14px] my-4'>AssistMe is developed by GeoSpartans. This AI uses the Gemini API for generating responses.</p>
        </div>
      </div>
    </>
  );
}

export default App;