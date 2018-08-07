import PropTypes from 'prop-types';
import React from 'react';
import ProductRow from './ProductRow';
import Popper from '../containers/Popper';

const ProductTable = ({ db, filter, order, column }) => {
    let rows = [];
    db.sort((a, b) => {
        return order === (a[column] > b[column]) ? 1 : -1;
    }).forEach(p => {
        const val = p[column];
        if (val.indexOf(filter) !== -1) {
            rows.push(
                <div key={'div' + rows.length}>
                    <ProductRow key={'row' + rows.length} data={p} />
                    <Popper key={'pop' + rows.length} index={rows.length} />
                </div>
            );
        }
    });

    return <div> {rows} </div>;
};

ProductTable.propTypes = {
    db: PropTypes.array,
    filter: PropTypes.string,
    order: PropTypes.bool,
    column: PropTypes.string
};

export default ProductTable;

