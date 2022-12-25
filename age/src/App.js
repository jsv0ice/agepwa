import React, { useEffect, useState } from 'react';
import './App.css';
import Card from 'react-bootstrap/Card';
import { DateTime } from "luxon";
import Settings from './Settings';
import InstallButton from './Install';

function App() {
  let [birthday, setBirthday] = useState(DateTime.now());
  let [name, setName] = useState(" ");
  let [updated, setUpdated] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("birthday")) {
      setBirthday(DateTime.fromISO(localStorage.getItem("birthday")));
    }
    if (localStorage.getItem("name")) {
      setName(localStorage.getItem("name"));
    }
  }, [updated]);

  return (
    <div className="App">
        <Card>
          <Card.Body>
            <Card.Title>Hello {name}! </Card.Title>
            <Card.Title>You are {Math.floor(DateTime.now().diff(birthday, 'years').years)} years old.</Card.Title>
            <Settings onChange={() => setUpdated(!updated)}/>
            <InstallButton />
          </Card.Body>
        </Card>
    </div>
  );
}

export default App;
