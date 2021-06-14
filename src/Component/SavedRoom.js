import React from 'react';
import { useLocation } from "react-router-dom";


const SavedRoom = () => {
    const location = useLocation();
    return (
        <div className="card">
            <div className="container">
                <h4><b>Saved Meeting Room details:</b></h4>
                <p>MeetingRoom:{location.state.data.meetingRoomName}</p>
                <p>Building:{location.state.data.building}</p>
                <p>Floor:{location.state.data.floor}</p>
            </div>
        </div>

    )
}

export default SavedRoom;
