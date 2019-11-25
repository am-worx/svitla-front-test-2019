import React from "react";
import { connect } from "react-redux";
import { getStatusesStatistics } from "../../ducks/candidatesReducer";
import "./StatusesStatistics.css";

function StatusesStatistics({ statuses }) {
  return (
    <ul className="statuses-statistics">
      <li className="statuses-statistics__item">
        Screen: <span className="statuses-statistics__number">{statuses.Screen || 0}</span>
      </li>
      <li className="statuses-statistics__item">
        Scheduled: <span className="statuses-statistics__number">{statuses.Scheduled || 0}</span>
      </li>
      <li className="statuses-statistics__item">
        Explored: <span className="statuses-statistics__number">{statuses.Explored || 0}</span>
      </li>
      <li className="statuses-statistics__item">
        Hired: <span className="statuses-statistics__number">{statuses.Hired || 0}</span>
      </li>
    </ul>
  );
}

const mapStateToProps = state => ({ statuses: getStatusesStatistics(state) });

const ConnectedStatusesStatistics = connect(mapStateToProps)(StatusesStatistics);
export { ConnectedStatusesStatistics as StatusesStatistics };
