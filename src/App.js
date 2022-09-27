import React, { useState } from 'react';
import './App.css';
import Title from './components/Title';
import Modal from './components/Modal';
import EventList from './components/EventList';
import NewEventForm from './components/NewEventForm';


function App () {
    //States and Hooks
    const [showModal, setShowModal] = useState(false);
    const [showEvents, setShowEvents] = useState(true);
    const [events, setEvents] = useState([])
    // console.log(showEvents)
    const handleClick = (id) => {
        setEvents((prevEvents) => {
            return prevEvents.filter((event) => {
                return id !== event.id
            }) 
        })
       

    }
    const subTitle = "All the latest events in Marioland";

    const addEvents = (events) => {
        setEvents((prevEvents) => {
            return [...prevEvents, events]
        })

        setShowModal(false)
    }

    return (
        <div className="App">

        <Title title="Events in Your Area" subtitle = {subTitle}/>
  
        {!showEvents && (
        <div>
            <button onClick={() => setShowEvents(true)}>Show Events</button>
        </div>
        )}
        {showEvents && (
        <div>
            <button onClick={() => setShowEvents(false)}>Hide Events</button>
        </div>
        )}
            {showEvents && (
                <EventList eventList = {events} handleClick = {handleClick} />
            )}

            {/*<Modal >
            <h2>10% Off Coupon Code!!</h2>
            <p>Use the code NINJA10 at the checkout.</p>
            </Modal>*/}

            {/*showModal && <Modal handleClose = {handleClose} isSalesModal = {true}>
                <h2> Terms and Conditions</h2>
                <p>Nunc quis arcu. Funky fresh ante. Away i'm in the shizzle pimpin' izzle lectizzle. Fo shizzle brizzle tortizzle. Crizzle shut the shizzle up shizznit ut check it out consectetizzle boom shackalack. Lorem ipsum dolizzle you son of a bizzle shut the shizzle up, consectetizzle adipiscing elit.</p>
                <a href='#'>find out more...</a>
        </Modal>*/}

            {showModal && <Modal isSalesModal = {true}>
            <NewEventForm addEvents = {addEvents}/>
            </Modal>}

            {!showModal && <div><button onClick= {() => setShowModal(true)} >Add New Event</button></div>}
    
        </div>
    )
}


export default App;
