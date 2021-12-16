import About from "./components/About";
import Carrosel from "./components/Carrosel";
import Footer from "./components/Footer";
import Header from "./components/Header";
import News from "./components/News";

function App() {
  return (
    <>
      <Header />
      <main class="container" style={{marginTop: 30}}>
        <Carrosel />
        <div class="row">
          <About />
          <News />
        </div>
      </main>
      <Footer />
    </ >
  );
}

export default App;
