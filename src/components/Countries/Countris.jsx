import { useEffect, useState } from "react";
import Country from "../Country/Country";
import './Countris.css'

const Countris = () => {

    const [countris, setCountries] = useState([])
    useEffect(() =>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])

    return (
        <div>
            <h3>countris: {countris.length}</h3>
       <div className="country-container">
            {     
            countris.map(country =><Country 
                key={country.cca3}
                country={country}></Country>)
            }
       </div>
         
        </div>
    );


};

export default Countris;