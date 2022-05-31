import PropTypes from "prop-types";

export function TaskCounter({ completed }) {
    return <h2>Completed tasks: {completed}</h2>;
}

TaskCounter.propTypes = {
    completed: PropTypes.number,
};
