import React from "react";
import Button from "./Common/Button";
import '../index.css';

const BuildingDetails = (props) => {
    const data = props.data;
    let count = 0
    const date = new Date();
    const day = ("0" + date.getDate()).slice(-2);
    const month = ("0" + (date.getMonth() + 1)).slice(-2)
    const year = date.getFullYear();
    const today = `${day}/${month}/${year}`;
    const meetingRooms = props.data.reduce((acc, building) => acc + building.meetingRooms.length, 0);

    props.data.forEach(building => building.meetingRooms.forEach(meetingRoom => meetingRoom.meetings.forEach(
        meeting => (meeting.date === today) ? count = count + 1 : 0
    )))

    return (
        <>
            <div className="card">
                <div className="container">
                    <h4><b>Buildings</b></h4>
                    <p>Total:{props.data.length}</p>
                </div>
            </div>
            <div className="card">
                <div className="container">
                    <h4><b>Rooms</b></h4>
                    <p>Total:{meetingRooms}</p>
                </div>
            </div>
            <div className="card">
                <div className="container">
                    <h4><b>Meetings</b></h4>
                    <p>Total: {count} today </p>
                </div>
            </div>
            <Button data={data} label={"Add a Meeting"} route={"addMeeting"} />
        </>
    )
}

export default BuildingDetails;