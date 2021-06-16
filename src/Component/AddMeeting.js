import React, { useState } from "react";
import InputWithLabel from './Common/InputWithLabel';
import DropDown from './Common/DropDown';
import { useLocation } from "react-router-dom";
import Button from './Common/Button';
import '../index.css';

const AddMeeting = () => {
    const location = useLocation();
    const [date, setDate] = useState("12/06/2021");
    const [startTime, setStartTime] = useState("00:00");
    const [endTime, setEndTime] = useState("00:00");
    const [selectedBuilding, setSelectedBuilding] = useState('');
    const [title, setTitle] = useState('');

    return (
        <>
            <div className="mainContainer">
                <div className="card">
                    <div className="container">
                        <p>Add meeting</p>
                        <InputWithLabel
                            id="date"
                            value={date}
                            isFocused
                            type="date"
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
                        <InputWithLabel
                            id="title"
                            value={title}
                            isFocused
                            onInputChange={setTitle}
                        >
                            <strong>Title:</strong>
                        </InputWithLabel>
                        <DropDown data={location.state.data} selectedValue={selectedBuilding} onChange={setSelectedBuilding} />
                    </div>
                </div>
                <br />
                <Button
                    data={location.state.data}
                    label={"Next"}
                    route={"freeRooms"}
                    startTime={startTime}
                    endTime={endTime}
                    date={date}
                    title={title}
                    selectedBuilding={selectedBuilding}
                />
            </div>
        </>
    )

}

export default AddMeeting;