var heading = React.createElement('h1', {}, 'Help Queue');
var clock = React.createElement('h2', {}, `${new Date().toLocaleTimeString()}`);
var app = React.createElement('div', {}, heading, clock);

ReactDOM.render(
  app,
  document.getElementById('react-app-root')
);
