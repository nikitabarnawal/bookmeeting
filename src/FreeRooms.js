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
                if ((startTime >= meeting.startTime && startTime < meeting.endTime) || (endTime >= meeting.startTime && endTime <= meeting.endTime) ||
                    (meeting.startTime >= startTime && meeting.startTime <= endTime) || (meeting.endTime > startTime && meeting.endTime <= endTime)) {
                    return;
                }
                else {
                    rooms.push({
                        id: meetingRoom.id,
                        meetingRoomName: meetingRoom.name,
                        floor: meetingRoom.floor,
                        building: selectedBuilding
                    })
                }
            }
        })

    });

    console.log(rooms);
    return (
        <>
            <h1>Please select one of the Free Rooms</h1>
            { rooms.map(room => (
                <ul>
                    <li key={room.id}>{room.meetingRoomName}</li>
                    <li key={room.building}>{room.building}</li>
                    <li key={room.floor}>{room.floor}</li>
                </ul>
            ))
            }
        </>
    )
}

export default FreeRooms;