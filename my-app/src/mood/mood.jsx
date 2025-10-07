import { useState } from "react";
import { Link } from 'react-router-dom'
import style from './MoodPage.module.css'
export default function MoodPage() {
  const [advice, setAdvice] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const advices = [];

    const sleep = data.get("sleep");
    if (sleep === "1" || sleep === "2") advices.push("Try to get 7-9 hours of sleep to feel more rested.");
    if (data.get("water") === "0") advices.push("Drink more water today to stay hydrated.");
    if (data.get("exercise") === "0") advices.push("A short walk or some stretching can boost your energy.");
    if (data.get("relax") === "0") advices.push("Take a few minutes to relax or meditate to reduce stress.");
    if (data.get("breaks") === "0") advices.push("Remember to take short breaks from screens.");
    if (data.get("fun") === "0") advices.push("Do something fun or creative to lift your mood.");
    if (data.get("connect") === "0") advices.push("Try reaching out to a friend or family member.");
    if (data.get("stress") === "high") advices.push("Practice deep breathing or light exercise to ease stress.");
    const mood = data.get("mood");
    if (mood === "sad") advices.push("Listening to uplifting music or journaling can help your mood.");
    if (mood === "stressed") advices.push("Taking short breaks and focusing on breathing can reduce stress.");
    const energy = data.get("energy");
    if (energy === "low") advices.push("Try a light snack or a quick walk to boost your energy.");

    if (advices.length === 0) advices.push("Great job! Keep maintaining these healthy habits. 🌟");
    setAdvice(advices);
  };

  return (
    <div className={style.body}>
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
        <li>
            <Link to='/chatbot'>Chat bot</Link>
        </li>
        
        
      </ul>
    </nav>
    <div className={style.moodcontainer}>
      <header>
        <h1>WELLSY</h1>
        <p className={style.subtitle}>Progress over Perfection</p>
      </header>

      <form onSubmit={handleSubmit}>
        <section className={style.moodcard}>
          <h2>How’s your mood today?</h2>
          <div className={style.questiongroup}>
            <label><input type="radio" name="mood" value="happy" /> 😀 Happy</label>
            <label><input type="radio" name="mood" value="calm" /> 😌 Calm</label>
            <label><input type="radio" name="mood" value="tired" /> 😴 Tired</label>
            <label><input type="radio" name="mood" value="sad" /> 😢 Sad</label>
            <label><input type="radio" name="mood" value="stressed" /> 😫 Stressed</label>
          </div>
        </section>

        <section className={style.moodcard}>
          <h2>What’s your current energy level?</h2>
          <div className={style.questiongroup}>
            <label><input type="radio" name="energy" value="high" /> 🔋 High</label>
            <label><input type="radio" name="energy" value="medium" /> ⚡ Medium</label>
            <label><input type="radio" name="energy" value="low" /> 💤 Low</label>
          </div>
        </section>

        <section className={style.moodcard}>
          <h2>How many hours did you sleep last night?</h2>
          <div className={style.questiongroup}>
            <label><input type="radio" name="sleep" value="1" /> ⏰ Less than 5</label>
            <label><input type="radio" name="sleep" value="2" /> 🕔 5–7</label>
            <label><input type="radio" name="sleep" value="3" /> 🌙 7–9</label>
            <label><input type="radio" name="sleep" value="4" /> 😴 More than 9</label>
          </div>
        </section>

        <section className={style.moodcard}>
          <h2>Did you drink enough water today?</h2>
          <div className={style.questiongroup}>
            <label><input type="radio" name="water" value="1" /> 💧 Yes</label>
            <label><input type="radio" name="water" value="0" /> 🚫 No</label>
          </div>
        </section>

        <section className={style.moodcard}>
          <h2>Did you exercise today?</h2>
          <div className={style.questiongroup}>
            <label><input type="radio" name="exercise" value="1" /> 🏃‍♀ Yes</label>
            <label><input type="radio" name="exercise" value="0" /> ❌ No</label>
          </div>
        </section>

        <section className={style.moodcard}>
          <h2>Did you spend time relaxing or meditating?</h2>
          <div className={style.questiongroup}>
            <label><input type="radio" name="relax" value="1" /> 🧘 Yes</label>
            <label><input type="radio" name="relax" value="0" /> ❌ No</label>
          </div>
        </section>

        <section className={style.moodcard}>
          <h2>Did you take any breaks from screens today?</h2>
          <div className={style.questiongroup}>
            <label><input type="radio" name="breaks" value="1" /> 📵 Yes</label>
            <label><input type="radio" name="breaks" value="0" /> ❌ No</label>
          </div>
        </section>

        <section className={style.moodcard}>
          <h2>Have you done something fun or creative today?</h2>
          <div className={style.questiongroup}>
            <label><input type="radio" name="fun" value="1" /> 🎨 Yes</label>
            <label><input type="radio" name="fun" value="0" /> ❌ No</label>
          </div>
        </section>

        <section className={style.moodcard}>
          <h2>Did you connect with friends or family today?</h2>
          <div className={style.questiongroup}>
            <label><input type="radio" name="connect" value="1" /> 🫂 Yes</label>
            <label><input type="radio" name="connect" value="0" /> ❌ No</label>
          </div>
        </section>

        <section className={style.moodcard}>
          <h2>How stressed do you feel right now?</h2>
          <div className={style.questiongroup}>
            <label><input type="radio" name="stress" value="low" /> 😊 Low</label>
            <label><input type="radio" name="stress" value="medium" /> 😐 Medium</label>
            <label><input type="radio" name="stress" value="high" /> 😰 High</label>
          </div>
        </section>

       <div className={style.button}> <button type="submit">Get My Advice</button></div>
      </form>

      {advice.length > 0 && (
        <div className={style.result}>
          <h3>Your personalized advice:</h3>
          <ul>
            {advice.map((a, i) => <li key={i}>{a}</li>)}
          </ul>
        </div>
      )}

      <footer>
        <p>Wellsy • Progress over Perfection</p>
      </footer>
    </div>
    </div>
  );
}