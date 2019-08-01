import React from 'react';
import Game from './Game';
import { Provider } from "react-redux";
import itemStore from "../../stores/itemStore";

function App() {
  return (
    <Provider store={itemStore}>
      <Game />
    </Provider>
  );
}

export default App;
