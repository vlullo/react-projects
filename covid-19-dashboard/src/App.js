import React, { useEffect, useState } from 'react'; 
import './App.css';
import Card from './components/Card';

function  App() {
  const [data, setData] = useState({});

  const fetchData = async () => {
    const res = await fetch("https://disease.sh/v3/covid-19/all");
    res
      .json()
      .then(res => setData(res))
      .catch(err => console.log('error')) //console.error
  }

  useEffect(() => {
    fetchData();
  },[]); //An empty dependency array makes sure useEffect runs only once at initial render.



  return (
    <div className="container">
      <header className="app-header">
        <h1>COVID 19 INFORMATION</h1>
      </header>
      <main className="app-main">
        <Card description="Total cases" count={data.cases} />
        <Card description="Today cases" count={data.todayCases} />
        <Card description="Total death" count={data.deaths} />
        <Card description="Recovered" count={data.recovered} />
        <Card description="Active cases" count={data.active} />
        <Card description="Total tests" count={data.tests} />
      </main>
    </div>
  );
}

export default App;
