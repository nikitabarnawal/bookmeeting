import React from "react";
import Button from "./Common/Button";

const BuildingDetails = (props) => {
    const data = props.data;
    let count = 0
    const date = new Date();
    const today = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    const meetingRooms = props.data.reduce((acc, building) => acc + building.meetingRooms.length, 0);
    props.data.forEach(building => building.meetingRooms.forEach(meetingRoom => meetingRoom.meetings.forEach(
        meeting => console.log(count, meeting.date) || (meeting.date === today) ? count + 1 : 0
    )))

    return (
        <>
            <h1>Buildings</h1>
            <p>Total:{props.data.length}</p>
            <br />
            <h1>Rooms</h1>
            <p>Total:{meetingRooms}</p>
            <br />
            <h1>Meetings</h1>
            <p>Total:{count}</p>
            <p>Total:</p>
            <Button data={data} label={"Add a Meeting"} route={"addMeeting"} />
        </>
    )
}

export default BuildingDetails;