import React from 'react';
import { useParams, Navigate } from 'react-router-dom';

function DogDetails({ dogs }) {
  const { name } = useParams();
  const dog = dogs.find(d => d.name.toLowerCase() === name);

  if (!dog) {
    return <Navigate to="/dogs" replace />;
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Meet {dog.name}</h1>
      
      <h2>Here are some facts about {dog.name}:</h2>
      <ul>
        {dog.facts.map((fact, index) => <li key={index}>{fact}</li>)}
      </ul>
    </div>
  );
}

export default DogDetails;
