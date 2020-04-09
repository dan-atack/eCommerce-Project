import React, { useState, useEffect } from 'react';

function App() {
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    fetch('/homePage')
      .then(res => res.json())
      .then(data => setFeatured(data));
  }, []);

  return <>{featured.map(item => {
    return <div> {item.name} </div>
  })}</>
}

export default App;
