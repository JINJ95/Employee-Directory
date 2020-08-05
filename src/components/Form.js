import React, { useState } from "react";

const Form = () => {
    const [name, setName] = useState();

    return (
        <form>
            <label htmlFor="name">Search:</label>
            <span> </span>
            <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter Name"
                value={name}
                onChange={e => setName(e.target.value)} />
        </form>
    );
}
export default Form;