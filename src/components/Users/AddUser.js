import React from 'react'
import Card from '../UI/Card'; 
import classes from './AddUser.module.css'
import Button from '../UI/Button';

const AddUser = (props) => {
    const formSubmitHandler = event => {
        event.preventDefault();
        console.log(event)
    }
    return (
        <Card className={classes.input}>
            <form onSubmit={formSubmitHandler}>
                <label htmlFor="username">UserName</label>
                <input id="username" type="text" />
                <label htmlFor="age">Age (Years)</label>
                <input id="age" type="Number" />
                <Button type="submit">Add User</Button>
            </form>
        </Card>
    )
}

export default AddUser;