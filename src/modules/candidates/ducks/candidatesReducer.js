import candidatesList from "./candidatesList";

const candidatesHash = candidatesList.reduce((acc, item) => {
  const { id } = item;
  acc[id] = item;
  return acc;
}, {});

const initialState = {
  list: candidatesHash
};

function candidatesReducer(state = initialState, action) {
  switch (action.type) {
    case "CHANGE_CANDIDATE_STATUS":
      const { id, status } = action;
      const newState = Object.assign({}, state);
      newState.list[id].status = status;
      return newState;
    default:
      return state;
  }
}

const getCandidates = state => state.candidates.list;
const getCandidate = (state, id) => state.candidates.list[id];
const getCandidateStatus = (state, id) => state.candidates.list[id].status;
const getStatusesStatistics = state => {
  return Object.entries(state.candidates.list).reduce((acc, [_, { status }]) => {
    if (acc[status] === undefined) acc[status] = 0;
    acc[status] = acc[status] + 1;
    return acc;
  }, {});
};

export { candidatesReducer, getCandidates, getCandidate, getCandidateStatus, getStatusesStatistics };
