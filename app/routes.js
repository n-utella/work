import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ActionableTable from './containers/ActionableTable';

export default (
	<Switch>
		<Route exact path="/" component={ActionableTable} />
	</Switch>
);

