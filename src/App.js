import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Home} from "./home/Home"
import {Chat} from "./chat/Chat"
import {Game} from "./game/Game"
import { Mainnav } from './common/Mainnavi';
import { Footer } from './common/Footer';

function App() {
  return (
    <Router>
   
        <Mainnav />
        <div className='main'>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
        <Routes>
          <Route path="/chat" element={<Chat />}></Route>
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
