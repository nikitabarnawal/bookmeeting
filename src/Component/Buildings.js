import React, { useState } from "react";
import {
    useQuery
} from "@apollo/client";
import DropDown from './Common/DropDown';
import BuildingDetails from './BuildingDetails';

const Buildings = ({ query }) => {
    const { loading, error, data } = useQuery(query);
    const [selectedBuilding, setSelectedBuilding] = useState('');

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
        <>
            <div style={{ padding: "20px" }} >
                <DropDown
                    data={data.Buildings}
                    selectedValue={selectedBuilding}
                    onChange={setSelectedBuilding}
                />
            </div>
            {selectedBuilding && <BuildingDetails data={data.Buildings} />}
        </>
    )

}

export default Buildings;