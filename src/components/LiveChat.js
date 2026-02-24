import ChatMessage from './ChatMessage'
import {  useEffect,useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { useSelector } from 'react-redux';
import { generate } from '../utils/helper';
import { makeRandomMessage } from '../utils/helper';

const LiveChat = () => {
    const[liveMessage,setLiveMessage] = useState("");
    const dispatch = useDispatch();
    const chatMessages = useSelector((store) => store.chat.messages);
    useEffect(() => {
        const i=setInterval(() => { 
            dispatch(addMessage({
                name: generate(),
                message: makeRandomMessage(20)
            }));
        }, 2000);
        return () => clearInterval(i);
    }, [dispatch]);

  return (
    <>
    <div className="bg-gray-100 rounded-lg ml-1 p-2 border border-black w-full h-[450px] overflow-y-scroll flex flex-col-reverse scrollbar-hide">
        <div>
        {chatMessages.map((c,i) => <ChatMessage key={i} name={c.name} message={c.message} />)}
        </div>
    </div>
    <form className="mt-2 flex items-center gap-2" onSubmit={(e) => {
        e.preventDefault();
        dispatch(addMessage({
          name: "You",
          message: liveMessage
        }));
        setLiveMessage("");
      }}>
          <input
            type="text"
            placeholder="Enter your message"
            value={liveMessage}
            onChange={(e) => setLiveMessage(e.target.value)}
            className="w-full rounded-full border border-gray-300 bg-white px-4 py-2 text-sm text-gray-800 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />
            <button>Send</button>
    </form>
    </>
    
  )
}

export default LiveChat