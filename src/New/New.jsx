import React from 'react';
import { DataContext } from '../App';
import "../Landing/Landing.css";

const New = () => {
  return (
    <DataContext.Consumer>
      {({greatestPlayers}) => (
        <>
          <h1>New page</h1>
          <h1>John Doe</h1>
          <div>
            <h3>Education</h3>
          </div>
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
      )}
    </DataContext.Consumer>
  );
};

export default New;
