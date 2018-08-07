import PropTypes from 'prop-types';
import React from 'react';

const ProductRow = ({ data }) => (
    <div>
        <p> { data.code + '\t|\t' + data.names + '\t|\t' + data.capital + '\t|\t' + data.continent + '\t|\t' + data.phone } </p>
    </div>
);

ProductRow.propTypes = {
    data: PropTypes.object
};

export default ProductRow;

