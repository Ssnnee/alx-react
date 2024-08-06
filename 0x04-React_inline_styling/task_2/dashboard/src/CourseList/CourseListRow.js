import React from "react";
import PropTypes from "prop-types";

const rowBackgroundColor = {
  backgroundColor : "#f5f5f5ab"
}

const headerBackgroundColor = {
  backgroundColor : "#deb5b545"
}

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  return (
    <tr style={rowBackgroundColor}>
      {isHeader ? (
        textSecondCell === null ? (
          <th style={headerBackgroundColor} colSpan={2}>{textFirstCell}</th>
        ) : (
          <>
            <th>{textFirstCell}</th>
            <th>{textSecondCell}</th>
          </>
        )
      ) : (
        <>
          <td>{textFirstCell}</td>
          <td>{textSecondCell}</td>
        </>
      )}
    </tr>
  );
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

export default CourseListRow;
