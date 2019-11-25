import React from "react";
import { connect } from "react-redux";
import { changeCandidateStatus } from "../../ducks/candidatesActions";
import "./StatusSwitch.css";

function StatusSwitch({ id, status, handleStatusChange }) {
  function handleChange(e) {
    handleStatusChange(id, e.target.value);
  }

  return (
    <select value={status} onChange={handleChange} className="status-switch">
      <option value="Screen">Screen</option>
      <option value="Scheduled">Scheduled</option>
      <option value="Explored">Explored</option>
      <option value="Hired">Hired</option>
    </select>
  );
}

const mapDispatchToProps = {
  handleStatusChange: changeCandidateStatus
};

const mapStateToProps = (state, { id }) => {
  return { status: state.candidates.list[id].status };
};

const StatusSwitchConnected = connect(mapStateToProps, mapDispatchToProps)(StatusSwitch);

export { StatusSwitchConnected as StatusSwitch };
