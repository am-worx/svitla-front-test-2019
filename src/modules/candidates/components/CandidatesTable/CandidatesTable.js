import React, { useState } from "react";
import { connect } from "react-redux";
import { SearchBar } from "../SearchBar";
import { CandidatesTableItem } from "./CandidatesTableItem";
import { StatusesStatistics } from "../StatusesStatistics";
import { getSearchFitIds } from "../../utils/getSearchFitIds";
import { getCandidates } from "../../ducks/candidatesReducer";
import "./CandidatesTable.css";

function CandidatesTable({ candidates }) {
  const [search, setSearch] = useState("");

  return (
    <div className="candidates-table-page">
      <div className="candidates-table-page__controls">
        <StatusesStatistics />
        <SearchBar value={search} handleChange={setSearch} />
      </div>
      <table className="candidates-table">
        <thead className="candidates-table__header">
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Connection</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {getSearchFitIds(search, candidates).map(id => (
            <CandidatesTableItem id={id} key={id} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

const mapStateToProps = state => ({
  candidates: getCandidates(state)
});

const CandidatesTableConnected = connect(mapStateToProps)(CandidatesTable);
export { CandidatesTableConnected as CandidatesTable };
