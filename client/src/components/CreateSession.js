import React, { useState } from "react";

const CreateSession = () => {
    const [name, setName] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await fetch("http://localhost:8001/sessions", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name: name }),
            });
            window.location = "/";
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <h1 className="text-center">StudyLinq Sessions</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={e => setName(e.target.value)} />
                <button className="btn btn-success">
                    Create Study Session
                </button>
            </form>
        </>
    );
};

export default CreateSession;
