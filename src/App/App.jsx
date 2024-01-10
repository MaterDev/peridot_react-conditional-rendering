import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import HeroList from '../HeroList/HeroList';
import './App.css';

function App() {

  const [heroList, setHeroList] = useState([
    {
      superheroName: 'Prof X',
      onDuty: true,
      alias: 'Xavier',
      power: 'does stuff',
      class: 'psychic'
    },
    {
      superheroName: 'Wolverine',
      onDuty: false,
      alias: 'Logan Paul',
      power: 'cuts stuff',
      class: 'fighter'
    },
    {
      superheroName: 'Jean Grey',
      onDuty: false,
      alias: 'Phoenix',
      power: 'Feels stuff',
      class: 'psychic'
    }
  ])


  // just like $(document).ready()
  useEffect(() => {
    console.log('App is loaded!');
    fetchData();
  });

  const fetchData = () => {
    // make GET request here

    // axios.get().then(response => {
    // setHeroList(response.data);
    //})


  }

  // called from Item
  const avengersAssemble = (hero) => {
    console.log('Avengers Assemble!', hero);
  }

  // JSX
  return (
    <div className="App">

      <Header />

      {/* list of super heroes */}
      {/* lefthand side of props becomes props.the_name */}
      <main>
        <HeroList
          heroList={heroList}
          avengersAssemble={avengersAssemble} />
      </main>


    </div>
  );

}

export default App;
