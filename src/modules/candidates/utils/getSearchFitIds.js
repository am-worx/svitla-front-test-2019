function getSearchFitIds(searchString, candidates) {
  let lowSearchString = searchString.toLowerCase();

  const andPhrase = " and ";
  const orPhrase = " or ";

  const andPresent = lowSearchString.indexOf(andPhrase) !== -1;
  const orPresent = lowSearchString.indexOf(orPhrase) !== -1;

  if (andPresent) lowSearchString = lowSearchString.replace(andPhrase, " ");
  if (orPresent) lowSearchString = lowSearchString.replace(orPhrase, " ");
  let searchPhrasesArray = andPresent || orPresent ? lowSearchString.trim().split(" ") : null;

  const ids = Object.keys(candidates);
  const idStringPairs = ids.map(id => {
    const string = Object.entries(candidates[id]).reduce((acc, [propName, val]) => {
      if (propName !== "id") {
        acc = acc + val.toLowerCase() + " ";
      }
      return acc;
    }, "");

    return [id, string];
  });

  const satisfyIds = idStringPairs.reduce((acc, item) => {
    let fitsReq = item[1].indexOf(lowSearchString.trim().toLowerCase()) !== -1;
    if (andPresent) fitsReq = searchPhrasesArray.every(searchPart => item[1].indexOf(searchPart) !== -1);
    if (orPresent) fitsReq = searchPhrasesArray.some(searchPart => item[1].indexOf(searchPart) !== -1);

    if (fitsReq) {
      acc.push(item[0]);
    }
    return acc;
  }, []);

  return satisfyIds;
}

export { getSearchFitIds };
