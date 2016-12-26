const INITIAL_STATE = {
  columnTitles: [ 'first', 'second', 'c' ],
  data: [ // store as rows
    [1, 3, 4],
    [4, 7, 7],
    [3, 7, 4],
    [4, 7, 7],
  ],
  selection: null, // can be rows or columns (in the future)
  sortedBy: null, // column index probably
  editing: null, // [row, column]-coordinates of currently edited cell
};

export default function table(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'table/SELECT_CELL':
      return {
        ...state,
        selection: [action.row, action.column],
      };
    default:
      return state;
  }
}
