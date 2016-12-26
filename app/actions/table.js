export function selectCell(row, column) {
  return {
    type: 'table/SELECT_CELL',
    row,
    column,
  }
}
