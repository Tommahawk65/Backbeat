import './scss/critical.scss';
import './scss/style.scss';
import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Videos from './Pages/Videos';
import Reviews from './Pages/Reviews';
import Repertoire from './Pages/Repertoire';
import Faqs from './Pages/Faqs';
import Layout from './Layout';


function App() {
  return <>
    <Router>
      <Routes>
        <Route element={<Layout/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/Videos' element={<Videos/>}/>
          <Route path='/Repertoire' element={<Repertoire/>}/>
          <Route path='/Reviews' element={<Reviews/>}/>
          <Route path='/Faqs' element={<Faqs/>}/>
        </Route>
      </Routes>
    </Router>
  </>
}

export default App;