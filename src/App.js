import './App.css';
import Header from './components/Header'
import Article from './components/Article'
import Footer from './components/Footer'
import img1 from './images/blog-image-1.jpg'
import img2 from './images/blog-image-2.jpg'
import './style.css'
function App() {
  return (
    <div className="App">
      <Header />
      <Article
        date="11/12/20"
        title="On the Street in Brooklyn"
        img={img1}
        alt="Sad women in the streets of Brooklyn"
      />
      <Article
        date="11/11/20"
        title="Vintage in Vogue"
        img={img2}
        alt="Fashionable men and women being pictured"
      />

      <Footer

        home="Home"
        women="Women's"
        men="Men's"
        street="On the Street"
        cat="The Catwalk"
        ad="AdWatch"
        about="About"
        tips="Tips"

      />
    </div>
  );
}

export default App;

