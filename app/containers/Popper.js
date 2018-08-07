import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

const Popper = ({index, onPop}) => {
    return (
        <input type="button" onClick={() => onPop(index)} value="POP" />
    );
};

Popper.propTypes = {
    index: PropTypes.number,
    onPop: PropTypes.func
};

const mapDispatchToProps = (dispatch) => {
    return {
        onPop: (index) => {
            dispatch(actions.pop(index));
        }
    };
};

export default connect(
    null,
    mapDispatchToProps
)(Popper);

