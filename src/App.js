import React from 'react';
//import logo from './logo.svg';
import './App.css';

import Weather from "./Weather";
import News from "./News";
import Todo from "./Todo";



//const styles= {background-image: url("http://source.unsplash.com/featured/?nature,mountains")};



function App() {


  return (
    <main>
      <div className="content">
        <h1>Good Morning, Ilan</h1>
        <Weather/>
        <section>
          <div>
            <h3>Todo</h3>
            <Todo/>
          </div>
          <div>
            <h3>Top headlines</h3>
            <News/>
          </div>
        </section>
        </div>
    </main>
  );
}


export default App;
