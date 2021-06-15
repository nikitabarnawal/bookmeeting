import { useHistory } from "react-router-dom";

function Button({ data, title, label, route, startTime, endTime, date, selectedBuilding }) {
    const history = useHistory();

    function handleClick(data) {
        history.push({
            pathname: `/${route}`,
            state: {
                data,
                startTime,
                endTime,
                date,
                selectedBuilding,
                title
            }
        });
    }

    return (
        <button className="button" type="button" onClick={() => handleClick(data)}>
            {label}
        </button>
    );
}

export default Button;