import './scss/critical.scss';
import './scss/style.scss';
import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Videos from './Pages/Videos';
import Reviews from './Pages/Reviews';
import Repertoire from './Pages/Repertoire';
import Faqs from './Pages/Faqs';
import Layout from './Layout';
import { useEffect } from "react"



function App() {
  useEffect (() => {
    const sections = $('#Accordion ul li');

    function Accordion(event) {
        event.stopPropagation(); // Prevent click event from bubbling up if needed.
        sections.removeClass('active'); // Remove 'active' class from all sections.
        $(this).closest('li').addClass('active'); // Add 'active' class to the clicked <li> or its parent <li>.
    }

    sections.on('click', Accordion); // Attach click event to all <li>.
    sections.find('h2').on('click', Accordion); // Also allow clicking on <h2>.


  }, []);
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