/** @jsx React.DOM */

var React = require('react');

var App = React.createClass({
	render: function() {
		return <h1>Hello Reflux</h1>;
	}
});

React.renderComponent(<App />, document.getElementById('content'));