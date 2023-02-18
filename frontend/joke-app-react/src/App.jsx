import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import JokeQuote from "./components/JokeQuote/JokeQuote";
import Banner from "./components/Banner/Banner";
import index from "./index.css"
function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <JokeQuote />
      <hr className="line-2"></hr>
      <Footer />
    </div>
  );
}

export default App;
