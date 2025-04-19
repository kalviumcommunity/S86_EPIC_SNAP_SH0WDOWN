import { useNavigate } from 'react-router-dom';
import '../App.css';

function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/dashboard');
  };

  return (
    <div className="landing-container">
  <header className="header">
    <h1>Epic Snap Showdown📸</h1>
    <div><p>Unleash your inner meme wizard 🧙‍♀️ and snap your way to victory!</p></div>

    <button className="btn madness-btn" onClick={handleClick}>
      Let the Madness Begin 🎉
    </button>
  </header>

      <section className="features">
        <h2>What's Cookin' 🍳</h2>
        <ul>
          <li>🦄 Create your goofy profile</li>
          <li>📸 Upload your wildest snap fails</li>
          <li>😹 Vote for the ones that made you LOL IRL</li>
          <li>👑 Win the “Meme Royalty of the Week” title</li>
          <li>📝 Drop captions spicier than hot sauce</li>
          <li>📤 Share with your squad & spread the chaos</li>
        </ul>
      </section>

      <footer className="footer">
        <p>Built with giggles & powered by caffeine ☕💻</p>
        <p>© 2025 Snapocalypse Inc. 💥</p>
      </footer>
    </div>
  );
}


export default Home;
