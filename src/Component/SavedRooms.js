import React from 'react';
import { useLocation } from "react-router-dom";


const SavedRooms = () => {
    const location = useLocation();
    console.log(7, location);
    return <div>Saved Meeting Room details:
        {location.state.data.meetingRoomName}
        {location.state.data.building}
        {location.state.data.floor}
        Thank you for your time!
    </div>
}

export default SavedRooms;
