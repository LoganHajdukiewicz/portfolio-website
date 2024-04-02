import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './components/Landing';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Links from './components/Footer/Links';
import Skills from './components/Skills';
import Footer from './components/Footer/Footer';
import Resume from './components/Resume';
import Blog from './components/Blog';
import Layout from './components/Layout';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio/>} />
          <Route path="/links" element={<Links/>} />
          <Route path="/skills" element={<Skills/>} />
          <Route path='/home' element={<Home/>} />
          <Route path= "/resume" element={<Resume/>} />
          <Route path= "/blog" element={<Blog/>} />
        </Routes>
      </Layout>
      <Footer />
    </BrowserRouter>
    
  );
}

export default App;
