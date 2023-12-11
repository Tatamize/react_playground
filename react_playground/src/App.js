import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Home} from "./home/Home"
import {Chat} from "./chat/Chat"
import {ChatRoom} from "./chat/ChatRoom"
import {Game} from "./game/Game"
import { Mainnav } from './common/Mainnavi';
import { Footer } from './common/Footer';
import { useCookies } from "react-cookie";
import React, { useState } from "react";

function App() {
  const [cookies, setCookie, removeCookie] = useCookies(["user_id"]);
  const [userIdVal, setUserIdVal] = useState(Math.random().toString(32).substring(2)); // set rundum ID
  
  React.useEffect(() => {
    setCookie("user_id", userIdVal);
  }, []);
  
  return (
    <Router>
   
        <Mainnav />
        <div className='main'>
        <p>Welcome {cookies.user_id}<br/>
        Current cookie is : {document.cookie}!</p>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
        <Routes>
          <Route path="/chatroom" element={<ChatRoom userIdVal={userIdVal} />}></Route>
        </Routes>
        <Routes>
          <Route path="/chatroom/:roomid" element={<Chat userIdVal={userIdVal} />}></Route>
        </Routes>
        <Routes>
          <Route path="/game" element={<Game />}></Route>
        </Routes>
        </div>
        <Footer />
      </Router>
   
  );
}

export default App;
