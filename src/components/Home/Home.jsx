import React from 'react';

const Home = () => {

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        console.log(name, email);
    }

    return (
        <div>
            <h1>This is home</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" id="" />
                <br />
                <input type="email" name="email" id="" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Home;