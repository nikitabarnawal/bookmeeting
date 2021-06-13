import React, { useState } from "react";
import InputWithLabel from './InputWithLabel';
import DropDown from './DropDown';
import { useLocation } from "react-router-dom";
import Button from './Button';

const AddMeeting = () => {
    const location = useLocation();
    const [date, setDate] = useState("12/06/2021");
    const [startTime, setStartTime] = useState("00:00");
    const [endTime, setEndTime] = useState("00:00");
    const [selectedBuilding, setSelectedBuilding] = useState('');

    return (
        <>
            <div style={{ justifyContent: "center", alignItems: "center" }}>
                <InputWithLabel
                    id="date"
                    value={date}
                    isFocused
                    onInputChange={setDate}
                >
                    <strong>Date:</strong>
                </InputWithLabel>
                <InputWithLabel
                    id="startTime"
                    value={startTime}
                    isFocused
                    onInputChange={setStartTime}
                >
                    <strong>StartTime:</strong>
                </InputWithLabel>
                <InputWithLabel
                    id="endTime"
                    value={endTime}
                    isFocused
                    onInputChange={setEndTime}
                >
                    <strong>EndTime:</strong>
                </InputWithLabel>
                <DropDown data={location.state.data} selectedValue={selectedBuilding} onChange={setSelectedBuilding} />
            </div>
            <br />
            <Button
                data={location.state.data}
                label={"Next"}
                route={"freeRooms"}
                startTime={startTime}
                endTime={endTime}
                date={date}
                selectedBuilding={selectedBuilding}
            />
        </>
    )

}

export default AddMeeting;