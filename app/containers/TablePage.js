import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { selectCell } from '../actions/table';



export class TablePage extends React.Component {
  render() {
    const { table } = this.props;
    const { columnTitles, data, selection, sortedBy, editing } = table;
    const { dispatch } = this.props;
    return (
      <div>
        <div>
          <Link to="/">
            <i className="fa fa-arrow-left fa-3x" />
          </Link>
        </div>
        <div>
          <table style={{
            border: '1px solid green',
          }}>
            <thead>
              <tr>
                {columnTitles.map(t => (<td>{t}</td>))}
              </tr>
            </thead>
            <tbody>
              {data.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, colIndex) => (
                    <td key={colIndex}
                      onClick={() => dispatch(selectCell(rowIndex, colIndex))}>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        Selection: {selection[0]}, {selection[1]}
      </div>
    );
  }
}

const stateToProps = (state) => ({
  table: state.table,
});

export default connect(stateToProps)(TablePage);
