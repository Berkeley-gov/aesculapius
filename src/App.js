import './assets/App.css';
import anime from 'animejs';

function App() {
  anime({
    targets: '.fading-circle',
    easing: 'easeOutExpo',
    loop: true,
    scale: [2, 10],
    opacity: {
      value: [1, 0],
      easing: 'linear',
      duration: 1500,
    },
    delay: (el, i) => 200 * i,
  })

  return (
    <div className="App">
      <header className="App-header">
        <div className="spinner-wrapper">
          <div className="fading-circle"></div>
          <div className="fading-circle"></div>
          <div className="fading-circle"></div>
        </div>
      </header>
    </div>
  );
}

export default App;
