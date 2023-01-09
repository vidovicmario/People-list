import React, { useState } from "react";
import "./App.css";
import AddToList from "./components/AddToList";
import List from "./components/List";

export interface IState {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
}

function App() {
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Tom Hanks",
      url: "http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcQaMZTWnBKqkR9bWNDh6TD_HZkSIIWtz265agrRvyzxfCwEL2_-n34fDPVgm1j6kWLsDv6gJoeumtNRgfg",
      age: 66,
      note: "Tom Hanks is the 4 time Golden Globe winner",
    },
  ]);

  return (
    <div className="App">
      <h1>People List</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
