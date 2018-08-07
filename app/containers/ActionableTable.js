import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import ProductTable from '../components/ProductTable';
import Pusher from './Pusher';

const ActionableTable = ({ column, db, filter, order, onChangeOrder, onUpdateFilter, onSelectColumn }) => {
    let search;
    let col;
    return (
    <div>
        <div>
            <input
                value={filter}
                ref={ref => {search = ref;}}
                onChange={() => onUpdateFilter(search.value)} />
        </div>
        <input
            value={order ? 'ASC' : 'DES' }
            type="button"
            onClick={() => onChangeOrder()} />
        <select ref={ref => {col = ref;}} onChange={() => onSelectColumn(col.value)}>
            <option value="code">code</option>
            <option value="names">names</option>
            <option value="capital">capital</option>
            <option value="continent">continent</option>
            <option value="phone">phone</option>
        </select>
        <ProductTable db={db} filter={filter} order={order} column={column}/>
        <Pusher/>
    </div>
    );
};

ActionableTable.propTypes = {
    filter: PropTypes.string,
    order: PropTypes.bool,
    column: PropTypes.string,
    db: PropTypes.array,
    onUpdateFilter: PropTypes.func,
    onChangeOrder: PropTypes.func,
    onSelectColumn: PropTypes.func,
};

const mapStateToProps = (state) => {
    return {
        column: state.column,
        db: state.db,
        filter: state.filter,
        order: state.order
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeOrder: () => dispatch(actions.changeOrder()),
        onUpdateFilter: filter => dispatch(actions.updateFilter(filter)),
        onSelectColumn: column => dispatch(actions.selectColumn(column))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ActionableTable);

