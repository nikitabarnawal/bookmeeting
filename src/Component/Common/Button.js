import { useHistory } from "react-router-dom";

function Button({ data, label, route, startTime, endTime, date, selectedBuilding }) {
    const history = useHistory();

    function handleClick(data) {
        history.push({
            pathname: `/${route}`,
            state: {
                data,
                startTime,
                endTime,
                date,
                selectedBuilding
            }
        });
    }

    return (
        <button type="button" onClick={(e) => handleClick(data)}>
            {label}
        </button>
    );
}

export default Button;