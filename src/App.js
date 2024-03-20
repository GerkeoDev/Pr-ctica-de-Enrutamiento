import React from "react";
import {
  Link,
  Routes,
  Route,
  useParams
} from "react-router-dom";

const Home = () => {
  return <h1>Welcome!</h1>
}
const Character = () => {
  const {character} = useParams()
  return isNaN(+character) ? <h1>The word is: {character}</h1> : <h1>The number is: {character}!</h1>
}
const BlueRed = () => {
  const {character, color, background} = useParams()
  return isNaN(+character) 
    ? <h1 style={{color: color, background: background}}>The word is: {character}</h1> 
    : <h1 style={{color: color, background: background}}>The number is: {character}</h1>
}
function App() {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home />}/>
        <Route path="/:character" element={<Character />}/>
        <Route path="/:character/:color/:background" element={<BlueRed />}/>
      </Routes>
    </div>
  );
}

export default App;