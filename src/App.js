import React,{useEffect,useState} from "react";
import './App.css';
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';
import Poki from "./Poki";
function App() {
  const purl=`  https://pokeapi.co/api/v2/pokemon?limit=151`;
  const[One,setOne]=useState([]);
  const poke=async()=>{
    const response=await fetch(purl)
    const data=await response.json();
    console.log(data.results);
    setOne(data.results);
  }
  useEffect(()=>{
    poke();
  },[])
  return (
    <div className="App">
      <h1 className="heading"><SportsSoccerIcon/>pokemon cards<SportsSoccerIcon/></h1>
      <div className="content">
      {One.map((pok,index)=>(
        <Poki
        title={pok.name}
        image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`}
        />
))}
</div>
    </div>
  );
}
export default App;
