
import About from '../about/about';
import Content from '../content/content';
import Footer from '../footer/footer';
import Header from '../header/header';
import Navigation from '../navigation/navigation';

function Home() {
  return (
    <div className='mainContainer'>
      <Header/>
      <Navigation/>
      <About/>
      <Footer/>
    </div>
  );
}

export default Home;