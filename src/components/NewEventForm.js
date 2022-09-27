import { useState } from 'react'
import './NewEventForm.css'

export default function NewEventForm( { addEvents } ) {
const [title, setTitle] = useState('');
const [date, setDate] = useState('');
const [location, setLocation] = useState('lagos');

// const handleChange = (e) => {
//     console.log(e.target.value)
// }

const resetForm = () => {
    setTitle('');
    setDate('');
    setLocation('lagos')
}

const handleSubmit = (e) => {
    e.preventDefault();

    const event = {
        title: title,
        date: date,
        location: location,
        id: Math.floor(Math.random() * 10000)
    }

    addEvents(event);
    resetForm();
}

    return (
        <form className='new-event-form' onSubmit ={handleSubmit}>
            <label>
                <span>Event Title:</span>
                <input type="text" 
                onChange = {(e) => setTitle(e.target.value)} 
                value={title}></input>
            </label>
            <label>
                <span>Event Date:</span>
                <input type="date" 
                onChange = {(e) => setDate(e.target.value)} 
                value={date}></input>
            </label>
            <label>
                <span>Select Loaction:</span>
                <select onChange={(e) => setLocation(e.target.value)}>
                    <option value="lagos">Lagos</option>
                    <option value="abuja">Abuja</option>
                    <option value="osun">Osun</option>
                    <option value="oyo">Oyo</option>
                </select>
            </label>
            <button>Submit</button>
        </form> 
    )
}