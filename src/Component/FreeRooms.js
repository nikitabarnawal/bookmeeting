import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Button from './Common/Button';
import '../index.css'

const FreeRooms = () => {
    const [meetingRoomName, setMeetingRoomName] = useState('');
    const [building, setBuilding] = useState('');
    const [floor, setFloor] = useState('');
    const [meetingRoomId, setMeetingRoomId] = useState(0);
    const [name, setName] = useState('card');
    const location = useLocation();
    const { data, startTime, endTime, date, selectedBuilding, title } = location.state;
    const rooms = [];
    console.log(15, date);
    const pickeddate = date.split("-");
    const newdate = pickeddate.reduceRight((acc, curr) => acc + curr + '/', '');
    const selectdate = newdate.replace(/(^[/\s]+)|([/\s]+$)/g, '');
    console.log(19, selectdate);
    const onselectMeetingRoom = (id, meetingRoomName, building, floor) => {
        setMeetingRoomName(meetingRoomName);
        setBuilding(building);
        setFloor(floor);
        setMeetingRoomId(id)
        setName('card clicked')
    }

    const btndata = {
        meetingRoomId,
        meetingRoomName,
        building,
        floor,
        startTime,
        endTime,
        selectdate,
        title
    };


    data.find(building => building.name === selectedBuilding).meetingRooms.forEach(meetingRoom => {
        let overlap = false;

        meetingRoom.meetings.forEach(meeting => {
            console.log(44, meeting.date, selectdate);
            if (meeting.date === selectdate) {
                if (meeting.endTime <= startTime) {
                    return;
                }
                if ((startTime >= meeting.startTime && startTime < meeting.endTime) || (endTime > meeting.startTime && endTime <= meeting.endTime) ||
                    (meeting.startTime >= startTime && meeting.startTime < endTime) || (meeting.endTime > startTime && meeting.endTime <= endTime)) {
                    overlap = true;
                    return;
                }
            }
        })

        if (!overlap) {
            rooms.push({
                id: meetingRoom.id,
                meetingRoomName: meetingRoom.name,
                floor: meetingRoom.floor,
                building: selectedBuilding
            })
        }

    });

    return (
        <>
            <div className='mainContainer'>
                {rooms.length > 0 ? <h1>Please select one of the Free Rooms</h1> : <h1>No meeting rooms available</h1>}
                {rooms.map(room => (
                    <div key={room.id} className={name} onClick={() => onselectMeetingRoom(room.id, room.meetingRoomName, room.building, room.floor)}>
                        <div className='container'>
                            <h4><b>{room.meetingRoomName}</b></h4>
                            <p>{room.building}</p>
                            <p>floor:{room.floor}</p>
                        </div>
                    </div>
                ))
                }
                {rooms.length > 0 &&
                    <Button
                        data={btndata}
                        label={"Save"}
                        route={"savedRoom"}
                    />
                }
            </div>
        </>
    )
}

export default FreeRooms;