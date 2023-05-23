import React,{ useState } from 'react';
import './App.css';
import Form from './components/Form';
import Main from './components/Main';
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
      <Main />
      <Maintwo/>
    </div>
  );
}

export default App;
