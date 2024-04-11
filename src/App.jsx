import React from "react";
import Nav from "./components/Nav.jsx";
import { Route, BrowserRouter, Routes , Navigate} from "react-router-dom";
import DogList from './components/DogList.jsx';
import DogDetails from'./components/DogDetails.jsx'
import './App.css'
function App({ dogs }) {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav dogs={dogs} />  
        <Routes>
          <Route path="/dogs" element={<DogList dogs={dogs} />} />
          <Route path="/dogs/:name" element={<DogDetails dogs={dogs} />} />
          <Route path="*" element={<Navigate to="/dogs" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}


App.defaultProps= {
  dogs: [
    {
      name: "Whiskey",
      age: 5,

      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 3,

      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      age: 4,

      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
    {
      name: "Tubby",
      age: 4,

      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore."
      ]
    }
  ]
}


export default App
