const changeCandidateStatus = (id, status) => ({
  type: "CHANGE_CANDIDATE_STATUS",
  id,
  status
});

export { changeCandidateStatus };
