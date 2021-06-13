import React from "react";
import Button from "./Button";

const BuildingDetails = (props) => {
    const data = props.data;
    console.log(6666, data);
    const meetingRooms = props.data.reduce((acc, building) => acc + building.meetingRooms.length, 0);
    return (
        <>
            <h1>Buildings</h1>
            <p>Total:{props.data.length}</p>
            <br />
            <h1>Rooms</h1>
            <p>Total:{meetingRooms}</p>
            <br />
            <h1>Meetings</h1>
            <p>Total:</p>
            <p>Total:</p>
            <Button data={data} label={"Add a Meeting"} route={"addMeeting"} />
        </>
    )
}

export default BuildingDetails;