import React from "react";
import { connect } from "react-redux";
import { StatusSwitch } from "../StatusSwitch";
import { getCandidate } from "../../ducks/candidatesReducer";

function CandidatesTableItem({ candidate }) {
  return (
    <tr key={candidate.id} className="candidates-table__line">
      <td>{candidate.name}</td>
      <td>{candidate.role}</td>
      <td>{candidate.connectedOn}</td>
      <td>
        <StatusSwitch id={candidate.id} status={candidate.status} />
      </td>
    </tr>
  );
}

const mapStateToProps = (state, { id }) => ({ candidate: getCandidate(state, id) });

const ConnectedCandidatesTableItem = connect(mapStateToProps)(CandidatesTableItem);
export { ConnectedCandidatesTableItem as CandidatesTableItem };
