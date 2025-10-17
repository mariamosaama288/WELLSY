import style from "./home.module.css";
import Chatbot from '../chat/chatbot.jsx'
import { Link } from 'react-router-dom'
export default function HomePage() {
  

  const sections = [
    {
      title: "Mood",
      desc: "Discover and track your emotions effortlessly. Our Mood page helps you reflect on your daily feelings, understand patterns, and receive tips to improve your wellbeing.",
    },
    {
      title: "Meals",
      desc: "Explore healthy and delicious meal options tailored to your lifestyle. From breakfast to dinner, find recipes, nutrition info, and meal suggestions that keep you energized.",
    },
    {
      title: "Chatbot",
      desc: "Chat with your personal AI assistant anytime. Ask questions, get advice, or simply have a friendly conversation – your intelligent companion is here to help.",
    },
  ];
 
  return (
    
    <div className={style.page}>
         <nav className={style.navbar}>
      <div className={style.navbarlogo}>
        <Link to="/" id={style.logo}>
           WELLSY
        </Link>
      </div>
      <ul className={style.navbarlinks}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/mood">Mood</Link>
        </li>
        <li>
          <Link to="/meals">Meals</Link>       
        </li>
        
      </ul>
    </nav>
      <div className={style.container}>
        <div className={style.h1}><h1>Welcome to WELLSY</h1></div>
        <p className={style.description}>
          WELLSY is designed to be light, engaging, and encouraging—helping you
          improve both body and mind.
        </p>

        <div className={style.sections}>
          {sections.map((section, index) => (
            <div className={style.sectioncard} key={index}>
              <h2>{section.title}</h2>
              <p>{section.desc}</p>
              
            </div>
          ))}
        </div>
      </div>
      <Chatbot/>
    </div>
  );
}
