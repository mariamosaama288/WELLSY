import { BrowserRouter,Route,Routes } from "react-router-dom";
import Meals from "./meals/meals.jsx";
import Mood from './mood/mood.jsx';
import HomePage from "./homepage/home.jsx";
import Chatbot from "./chat/chatbot.jsx";
function App() {
  return (
       <>
      <BrowserRouter>
      <Routes>
       <Route path='/chatbot' exact element={<Chatbot/>}/>
      <Route path='/' exact element={<HomePage/>}/>
     <Route path='/meals' exact element={<Meals/>}/>
      <Route path='/mood' exact element={<Mood/>}/>
      </Routes>
      </BrowserRouter>
      </>
  )
}

export default App;