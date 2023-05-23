import React,{ useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Form from './components/Form';
import Maintwo from './components/Maintwo';
import Thankyou from './components/Thankyou';
function App() {
  const [submit,setSubmit]=useState(false);
  const handleFormSubmit = ()=>{
    setSubmit(true);
  }
  return (
    <div className="App">
      <div>
      {
          !submit ? <Form onSubmit={handleFormSubmit}/> : <Thankyou/>
      }
      </div>
      <Maintwo/>
      <Footer/>
    </div>
  );
}
export default App;
