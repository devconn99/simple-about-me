import React, {useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from './Landing/Landing';
import New from './New/New';

export const DataContext = React.createContext({});

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

const App = () => {
  const [list, setList] = useState(initialList)
  const [greatestPlayers, setGreatestPlayers] = useState(secondList)

  useEffect(() => {
    if (secondList.length > 0) {
      setList([...list, ...restFirstList]);
      setGreatestPlayers([...greatestPlayers, ...restSecondList])
    }
  // eslint-disable-next-line
  }, [])

  return (
    <DataContext.Provider value={{list, greatestPlayers}}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/new' element={<New />} />
        </Routes>
      </BrowserRouter>
    </DataContext.Provider>
  );
}

export default App;