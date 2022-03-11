import React, { useState } from 'react'
import Card from '../UI/Card';
import classes from './AddUser.module.css'
import Button from '../UI/Button';

const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredUserAge, setEnteredUserAge] = useState('')

    const usernameChangeHandler = event => {
        setEnteredUsername(event.target.value)
    }
    const userAgeChangeHandler = event => {
        setEnteredUserAge(event.target.value)
    }

    const formSubmitHandler = event => {
        if(enteredUsername.trim().length === 0 || enteredUserAge.trim().length === 0){
            return;
        }

        if (+enteredUserAge < 1){
            return;
        }
        event.preventDefault();
        console.log(event)
        setEnteredUsername('');
        setEnteredUserAge('');
    }
    return (
        <Card className={classes.input}>
            <form onSubmit={formSubmitHandler}>
                <label htmlFor="username">UserName</label>
                <input
                    id="username"
                    type="text"
                    value={enteredUsername}
                    onChange={usernameChangeHandler} />
                <label htmlFor="age">Age (Years)</label>
                <input
                    id="age"
                    type="Number"
                    value={enteredUserAge}
                    onChange={userAgeChangeHandler} />
                <Button type="submit">Add User</Button>
            </form>
        </Card>
    )
}

export default AddUser;