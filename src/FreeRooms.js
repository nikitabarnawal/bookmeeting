import React from "react";
import { useLocation } from "react-router-dom";

const FreeRooms = () => {
    const location = useLocation();
    const { data, startTime, endTime, date, selectedBuilding } = location.state;
    const rooms = [];
    data.find(building => building.name === selectedBuilding).meetingRooms.forEach(meetingRoom => {
        meetingRoom.meetings.forEach(meeting => {
            if (meeting.date === date) {
                if (meeting.endTime <= startTime) {
                    return;
                }
                if ((startTime >= meeting.startTime && endTime >= meeting.endTime) || (meeting.startTime >= startTime && meeting.endTime >= endTime)) {
                    return false
                }
                else {
                    rooms.push({
                        meetingRoomName: meetingRoom.name,
                        floor: meetingRoom.floor,
                        building: selectedBuilding
                    })
                }
            }
        })

    });

    return (
        <div>Hello world</div>
    )
}

export default FreeRooms;