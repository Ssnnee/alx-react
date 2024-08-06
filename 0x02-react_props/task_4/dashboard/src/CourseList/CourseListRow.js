import React from 'react';
import propTypes from 'prop-types';

export function CourseListRow(isHeader, textFirstCell, textSecondCell) {
  if (isHeader) {
    return (
      <thead>
        <tr>
          <th colSpan="2">{textFirstCell}</th>
        </tr>
      </thead>
    );
  } else {
    return (
      <tbody>
        <tr>
          <td>{textFirstCell}</td>
          <td>{textSecondCell}</td>
        </tr>
      </tbody>
    );
  }
}


CourseListRow.propTypes = {
  isHeader: propTypes.bool,
  textFirstCell: propTypes.string.isRequired,
  textSecondCell: propTypes.string
}

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null
}
