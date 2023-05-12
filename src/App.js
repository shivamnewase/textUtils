/* eslint-disable jsx-a11y/anchor-is-valid */
// import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';
import { TextForm } from './components/TextForm';
import { About } from './components/About';
import {Alert} from './components/Alert';
import  React ,{ useState } from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
 
} from "react-router-dom";

   let bodyclassRemoved = ()=>{
     document.body.classList.remove('bg-primary');
     document.body.classList.remove('bg-success');
     document.body.classList.remove('bg-danger');
      document.body.classList.remove('bg-warning');
   }

function App() {



  const toggleMode=(cls)=>{
    bodyclassRemoved();
    console.log(cls)
    document.body.classList.add('bg-'+ cls);
    if(mode ==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#172347';
      showAlert("dark mode enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("light mode enabled", "success")
    }
  }
    const [mode, setMode] = useState('light');
    const [alert, setAlert] = useState(null);

   const showAlert = (message, type) =>{

      setAlert({
        msg:message,
        type: type,
   })
   setTimeout(()=>{
      setAlert(null);
   },2000)

   }

  return (
    <>
   <Router>
   <Navbar  mode={mode} toggleMode={toggleMode}/>
   <Alert alert={alert}/>
  {/* <TextForm mode={mode} showAlert={showAlert} heading="Enter The Text Analyze Below"/> */}
  <div className='container'>
  <Routes>
         
            
            <Route path='/about' element={<About mode={mode}/>} />
        
          <Route path="/" element={<TextForm mode={mode} showAlert={showAlert} heading="Enter The Text Analyze Below"/>}>
        
          </Route>
  </Routes>
  </div>
        </Router>
    </>
  );
}

export default App;
