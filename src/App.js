import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Page from './components/Page/Page.module.css'


function App() {
  return(
        <div className= {Page.page}>
        <Header/>
        <Main/>
        <Footer/>
        </div>
  );
}

export default App;
