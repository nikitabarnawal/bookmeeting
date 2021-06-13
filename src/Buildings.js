import React, { useState } from "react";
import {
    useQuery
} from "@apollo/client";
import DropDown from './DropDown';
import BuildingDetails from './BuildingDetails';

const Buildings = ({ query }) => {
    const { loading, error, data } = useQuery(query);
    const [selectedBuilding, setSelectedBuilding] = useState('');

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
        <>
            <DropDown
                data={data.Buildings}
                selectedValue={selectedBuilding}
                onChange={setSelectedBuilding}
            />
            { selectedBuilding && <BuildingDetails data={data.Buildings} />}
        </>
    )

}

export default Buildings;