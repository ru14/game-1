import React, { useState } from 'react'
import Card from '../UI/Card';
import classes from './AddUser.module.css'
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredUserAge, setEnteredUserAge] = useState('')
    const [error, setError] = useState('')

    const usernameChangeHandler = event => {
        setEnteredUsername(event.target.value)
    }
    const userAgeChangeHandler = event => {
        setEnteredUserAge(event.target.value)
    }
    const errorHandler = () => {
        setError(null)
    }

    const formSubmitHandler = event => {
        if (enteredUsername.trim().length === 0 || enteredUserAge.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values).'
            })
        }

        if (+enteredUserAge < 1) {
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid  age (>0).'
            })
        }
        event.preventDefault();
        props.onAddUser(enteredUsername, enteredUserAge);
        setEnteredUsername('');
        setEnteredUserAge('');
    }
    return (
        <div>
            {error && <ErrorModal
                title={error.title}
                message={error.message}
                onConfirm={errorHandler}
            />}
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