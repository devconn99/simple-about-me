import React, { useState, useEffect } from 'react';
import "./Landing.css";

const initialList = [
  {
    property: 'Institution: ',
    value: 'University',
  },
];

const restFirstList = [
  {
    property: 'Major: ',
    value: 'Data Science',
  },
  {
    property: 'College: ',
    value: 'Letters and Sciences',
  },
]

const secondList = ['Roger Federer'];

const restSecondList = ['Novak Djokovic', 'Rafael Nadal', 'Serena Williams']

const Landing = () => {
  const [list, setList] = useState(initialList);
  const [greatestPlayers, setGreatestPlayers] = useState(secondList)

  useEffect(() => {
    if (secondList.length > 0) {
      setList([...list, ...restFirstList]);
      setGreatestPlayers([...greatestPlayers, ...restSecondList])
    }
  // eslint-disable-next-line
  }, [])

  return (
    <>
      <h1>John Doe</h1>
      <div>
        <h3>Education</h3>
        <ul>
          {list.map(({property, value}, index) => (
            <li key={`${property} - ${index}`}>
              <span style={{color: "black", fontWeight: "bold"}}>{property} </span>{value}
            </li>
          ))}
        </ul>
      </div>
      <h4>About Me</h4>
      <p>I am from <a href="https://en.wikipedia.org/wiki/United_States">United States</a> (GMT+6).</p>
      <p>My hobbies include watch partying movies, trying out restaurants, sneakers, and going on road trips with friends.</p>
      <p>This summer I visited <a href="https://en.wikipedia.org/wiki/Melbourne">Melbourne, Australia</a>.</p>
      <h5>Trivia</h5>
      <form>
        <label for="ftrivia">Why did the chicken cross the road?</label><br />
        <input type="text" answer="answer" /><br />
        <label for="ftrivia">Who is the greatest tennis player of all time?</label><br />
        {greatestPlayers.map((player, index) => (
          <React.Fragment key={`${player}-${index}`}>
            <input type="radio" id={player} name={player} value={player} />
            <label for="ftrivia">{player}</label><br />
          </React.Fragment>
        ))}
      </form>
    </>
  );
};

export default Landing;