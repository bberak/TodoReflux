/** @jsx React.DOM */

var React = require("react");
var ReactRouter = require("react-router");
var TodoApp = require("components/todoApp.js");
var TodoList = require("components/todoList.js");

var routes = (
    <ReactRouter.Route handler={TodoApp}>
        <ReactRouter.Route name="All" path="/" handler={TodoList} />
        <ReactRouter.Route name="Completed" path="/completed" handler={TodoList} />
        <ReactRouter.Route name="Active" path="/active" handler={TodoList} />
    </ReactRouter.Route>
);

ReactRouter.run(routes, function(Handler) {
    React.render(<Handler/>, document.getElementById("content"));
});