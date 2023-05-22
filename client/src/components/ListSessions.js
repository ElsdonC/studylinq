import React, { useEffect, useState } from "react";
import EditSession from "./EditSession";

const ListSessions = () => {
    const [sessions, setSessions] = useState([]);

    const getStudySessions = async () => {
        const response = await fetch("http://localhost:8001/sessions", {
            method: "GET",
        });
        const studySessions = await response.json();
        setSessions(studySessions);
    };

    const deleteStudySession = async (id) => {
      await fetch(`http://localhost:8001/sessions/${id}`, {
        method: "DELETE"
      })
      setSessions(sessions.filter(session=>session.id !== id))
      window.location = '/'
    }

    useEffect(() => {
        getStudySessions();
    }, []);
    return (
        <>
            {sessions.map((session) => (
                
                  <div
                      key={session.id}
                      className="card"
                      style={{ width: "18rem" }}
                  >
                      <div className="card-body">
                          <>
                              <h5 className="card-title">{session.name}</h5>
                              <h6 className="card-subtitle mb-2 text-muted">
                                  {session.id}
                              </h6>
                          </>
                          <p className="card-text">description</p>
                          <EditSession session={session}/>
                          <button onClick={()=>deleteStudySession(session.id)} className="btn btn-danger card-link">
                              Delete
                          </button>
                      </div>
                  </div>
                
            ))}
        </>
    );
};

export default ListSessions;
