import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { DateTime } from "luxon";
import Button from 'react-bootstrap/Button';

function Settings(props) {
    let [birthday, setBirthday] = useState(DateTime.now());
    let [name, setName] = useState(" ");
    let [updated, setUpdated] = useState(false);
    let [showSettings, setShowSettings] = useState(false);
    let [variant, setVariant] = useState("primary");

    useEffect(() => {
        if (localStorage.getItem("birthday")) {
            setBirthday(DateTime.fromISO(localStorage.getItem("birthday")));
        }
        if (localStorage.getItem("name")) {
            setName(localStorage.getItem("name"));
        }
    }, [updated]);

    const handleClose = () => setShowSettings(false);
    const handleShow = () => setShowSettings(true);

    const saveData = () => {
        localStorage.setItem("birthday", birthday);
        localStorage.setItem("name", name);
        setUpdated(!updated)
        props.onChange();
        setVariant("success");
    }

  return (  
    <>
    <Button variant="primary" onClick={handleShow}>Open Settings</Button>
    <Modal show={showSettings} onHide={handleClose}>Settings Menu
        <Modal.Header closeButton>
            <>
            
            <>
            <Form className="form">
            <label htmlFor="birthday-input">Birthday:</label>
              <input type="date" id="birthday-input" label="birthday" value={DateTime.fromISO(birthday).toFormat('yyyy-LL-dd')} onChange={(e) => setBirthday(DateTime.fromFormat(e.target.value, "yyyy-LL-dd").toISODate())} />
              <br />
              <br />
            <label htmlFor="name-input">Name:</label>
              <input type="text" id="name-input" label="Name:" value={name} placeholder="Enter your name" onChange={(e) => setName(e.target.value)} />
              <br />
              <br />
              <Button variant={variant} onClick={() => saveData()}>Save</Button>
            </Form>
            </>
            </>
            <br />
            <br />
            <>
            <h3>Privacy Policy</h3>
            <p>This app stores all of the above data directly
                on your device. None of your data is sent to any
                server, or tracked outside this app in any way.
            </p>
            </>
        </Modal.Header>
    </Modal>
    </>
  );
}

export default Settings;