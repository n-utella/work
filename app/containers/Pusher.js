import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

const Pusher = ({onPush}) => {
    let code;
    let names;
    let capital;
    let continent;
    let phone;
    return (
        <form>
            code: <input type="text" ref={ref => {code = ref;}} />
            names: <input type="text" ref={ref => {names = ref;}} />
            continent: <input type="text" ref={ref => {continent = ref;}} />
            capital: <input type="text" ref={ref => {capital = ref;}} />
            phone: <input type="text" ref={ref => {phone = ref;}} />
            <input type="button" onClick={() => onPush({
                'code': code.value,
                'names': names.value,
                'capital': capital.value,
                'continent': continent.value,
                'phone': phone.value
            })}
            value="PUSH" />
        </form>
    );
};

Pusher.propTypes = {
    data: PropTypes.object,
    onPush: PropTypes.func
};

const mapDispatchToProps = (dispatch) => {
    return {
        onPush: data => dispatch(actions.push(data))
    };
};

export default connect(
    null,
    mapDispatchToProps
)(Pusher);

