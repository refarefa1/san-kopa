export function loadInstructors() {
  return async (dispatch, getState) => {
    try {
      const { filterBy } = getState().instructorModule;
      const instructors = []
      dispatch({ type: "SET_INSTRUCTORS", instructors });
    } catch (err) {
      console.error('error fetching instructors', err);
    }
  };
}

export function setFilter(filterBy) {
  return (dispatch) => {
    dispatch({ type: "SET_FILTER_BY", filterBy });
  };
}