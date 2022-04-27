import React, { useState, useEffect } from 'react';
import Breweries from './components/Breweries';
import Brewery from './components/Brewery';
import axios from "axios";
import './App.css';


const initialFormValue = {
  city:"",
  type:""
}

function App() {


  const [formValues, setFormValues] = useState(initialFormValue);
  const [breweriesList, setBreweriesList] = useState([]);


  const onChange = (inputName, inputValue) => {
    setFormValues({
      ...formValues, [inputName]:inputValue
    })
  }

  const onSubmit = () => {
    const newBrewery = {
      city:formValues.city,
      type:formValues.type
    }
    axios.post("", newBrewery)
    .then(res => {
      setBreweriesList({...breweriesList,newBrewery});
      setFormValues(initialFormValue);
    })
    .catch(err=> {
      console.log(err);
    })
  }

  useEffect(() => {
    axios.get(`https://api.openbrewerydb.org/breweries?by_city=${formValues.city}`)
    .then(res=> {
      setFormValues(res.data);
    })
  },[])


  return (
    <div className="App">
      <header className="App-header">
        <h1>Breweries List</h1>
      </header>
      <Breweries values={formValues} update={onChange} submit={onsubmit} />
      {breweriesList.map(brewery => {
        return (<Brewery key={brewery.id} details={brewery} />)
      })}
    </div>
  );
}


export default App;


