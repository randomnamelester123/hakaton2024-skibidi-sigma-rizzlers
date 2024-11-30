
import Footer from '../footer/footer';
import Header from '../header/header';
import Hobby from '../hobby/Hobby';
import Navigation from '../navigation/navigation';

function Page1() {
  return (
    <div className='mainContainer'>
      <Header/>
      <Navigation/>
      <Hobby/>
      <Footer/>
    </div>
  );
}

export default Page1;