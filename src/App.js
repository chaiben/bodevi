import "./App.css";
import logo from "./assets/logobodevi.png";
import instagram from "./assets/instagram.png";
import twitter from "./assets/twitter.png";

function App() {
  return (
    <div className="App">
      <main>
        <header><img className="logo" src={logo} alt='Bodevi logo' /></header>
        <p>Hola!</p>
        <p>
          La nostra botiga online romandrà tancada. Si teniu alguna consulta o
          voleu que us ajudem a organitzar un tast de vins podeu contactar amb
          nosaltres a través de les xarxes socials i a l’e-mail:&nbsp;
          <a href="mailto:hello@bodevi.com">hello@bodevi.com</a>
        </p>
        <p>Salutacions, </p>
        <p>Bodevi</p>
        <footer>
          <a href="https://www.instagram.com/bodevi.bcn/"><img className="socialIcons" src={instagram} alt="Instagram" ></img></a>
          <a href="https://twitter.com/bodevibcn"><img className="socialIcons" src={twitter} alt="Twitter" ></img></a>
        </footer>
      </main>
    </div>
  );
}

export default App;
