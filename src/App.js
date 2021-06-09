import React, { useState, useEffect } from 'react';

import config from './assets/general/config.json';

import './App.scss';
import Menu from './components/Menu/Menu';
import List from './components/Lists/List';

const App = () => {

  const [ lists, setLists ] = useState( null )

  return (
    <div className="crypto">

      <Menu />

      <List />

    </div>
  )

}

export default App;