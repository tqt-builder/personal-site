import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';

const Cell = ({ data }) => (
  <div className="cell-container">
    <time className="published">{dayjs(data.date).format('YYYY/MM/DD')}</time><br />
    <h2><Link className="blog_link" to={data.path}>{data.title}</Link></h2>
  </div>
);

Cell.propTypes = {
  data: PropTypes.shape({
    path: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default Cell;
