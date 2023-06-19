import { LectureService } from "../../services/LectureService";

export function loadLectures() {
  return async (dispatch, getState) => {
    try {
      const { filterBy } = getState().lectureModule;
      const lectures = await LectureService.query(filterBy)
      dispatch({ type: "SET_LECTURES", lectures });
    } catch (err) {
      console.error('error fetching lectures', err);
    }
  };
}

export function setFilter(filterBy) {
  return (dispatch) => {
    dispatch({ type: "SET_FILTER_BY", filterBy });
  };
}
