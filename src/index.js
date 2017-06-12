var heading = React.createElement('h1', {}, 'Help Queue');
var ticketLocation = React.createElement('h3', {}, '3a');
var ticketNames = React.createElement('h3', {}, 'Thato and Haley');
var ticketWaitTime = React.createElement('h3', {}, '4 mins');
var clock = React.createElement('h2', {}, `${new Date().toLocaleTimeString()}`);
var app = React.createElement('div', {}, heading, clock);

ReactDOM.render(
  app,
  document.getElementById('react-app-root')
);
