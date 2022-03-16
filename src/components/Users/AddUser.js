import React, { useState } from 'react'
import Card from '../UI/Card';
import classes from './AddUser.module.css'
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

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
        if (enteredUsername.trim().length === 0 || enteredUserAge.trim().length === 0) {
            return;
        }

        if (+enteredUserAge < 1) {
            return;
        }
        event.preventDefault();
        props.onAddUser(enteredUsername, enteredUserAge);
        setEnteredUsername('');
        setEnteredUserAge('');
    }
    return (
        <div>
        <ErrorModal title = "An error Occured" message="Something went wrong"/>
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
        </div>
    )
}

export default AddUser;