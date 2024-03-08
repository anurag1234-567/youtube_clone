import { useState, Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

const Header = lazy(()=> import('./components/header'));
const Main = lazy(()=> import('./pages/main'));
const Category = lazy(()=> import('./pages/category'));
const Watch = lazy(()=> import('./pages/watch'));
const Results = lazy(()=> import('./pages/results'));
const Shorts = lazy(()=> import('./pages/shorts'));

function App(){
  const [sidebar,setSidebar] = useState(false);
  const toggleSidebar = ()=>{ setSidebar(sidebar => !sidebar) }

  return (
    <>
      <Header toggleSidebar={toggleSidebar}/>
      <Suspense fallback={<div>loading...</div>}>
        <Routes>
          <Route path='/' element={<Main sidebar={sidebar}/>} />
          <Route path='/shorts' element={<Shorts sidebar={sidebar}/>} />
          <Route path='/trending' element={<Main sidebar={sidebar}/>} />
          <Route path='/category/:categoryId' element={<Category sidebar={sidebar}/>} />
          <Route path='/watch/v/:id' element={<Watch />} />
          <Route path='/search' element={<Results sidebar={sidebar}/>} />
        </Routes>
      </Suspense>
    </>
  )
}
export default App;