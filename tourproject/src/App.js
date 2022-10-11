import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

const App = () => {
  return(
    <div className ="App">
      <Navbar/>
      <Header/>
      <Main/>
      <h1>Welcome to react</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis iure, mollitia, voluptates libero eos quidem animi odio cum illum culpa nesciunt asperiores labore. Ducimus mollitia natus exercitationem rem, ex asperiores!</p>
    </div>
  )
}

export default App;