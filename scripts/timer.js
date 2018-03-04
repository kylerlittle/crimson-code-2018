

var DisplayTimer = React.createClass({
    render: function() {
	var elapsed = Math.round(this.props.elapsed  / 100);
	var seconds = elapsed / 10 + (elapsed % 10 ? '' : '.0' );
	var message =
	    'React has been successfully running for ' + seconds + ' seconds.';

	return React.DOM.p(null, message);
    }
});

// Call React.createFactory instead of directly call DisplayTimer({...}) in React.render
var DisplayTimerFactory = React.createFactory(DisplayTimer);

var start = new Date().getTime();
setInterval(function() {
    ReactDOM.render(
	DisplayTimerFactory({elapsed: new Date().getTime() - start}),
	document.getElementById('timer')
    );
}, 50);
