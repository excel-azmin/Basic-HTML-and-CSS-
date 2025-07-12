const setGoingToLocal = (countries) => {
  const existingGoing = getGoingFromLocal();
  const updatedGoing = [...existingGoing, ...countries];
  localStorage.setItem('going', JSON.stringify(updatedGoing));
};

const getGoingFromLocal = () => {
  const going = localStorage.getItem('going');
  return going ? JSON.parse(going) : [];
};

const setVisitedToLocal = (countries) => {
  const existingVisited = getVisitedFromLocal();
  const updatedVisited = [...existingVisited, ...countries];
  localStorage.setItem('visited', JSON.stringify(updatedVisited));
};

const getVisitedFromLocal = () => {
  const visited = localStorage.getItem('visited');
  return visited ? JSON.parse(visited) : [];
};

export {
  setGoingToLocal,
  getGoingFromLocal,
  setVisitedToLocal,
  getVisitedFromLocal,
};
