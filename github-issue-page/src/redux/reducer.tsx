import { combineReducers } from "redux";

export const actionType = {
  filtersType: "SET_FILTERSMENU_DISPLAY",
  sortType: "SET_SORTMENU_DISPLAY",
  assigneeType: "SET_ASSIGNEESMENU_DISPLAY",
  labelType: "SET_LABELSMENU_DISPLAY",
};

export function filtersReducer(state = false, action) {
  switch (action.type) {
    case actionType.filtersType:
      return !state;
    default:
      return state;
  }
}

export function sortReducer(state = false, action) {
  switch (action.type) {
    case actionType.sortType:
      return !state;
    default:
      return state;
  }
}

export function assigneeReducer(state = false, action) {
  switch (action.type) {
    case actionType.assigneeType:
      return !state;
    default:
      return state;
  }
}

export function labelReducer(state = false, action) {
  switch (action.type) {
    case actionType.labelType:
      return !state;
    default:
      return state;
  }
}

export const combineReducer = combineReducers({
  filter: filtersReducer,
  sort: sortReducer,
  assignee: assigneeReducer,
  label: labelReducer,
});
