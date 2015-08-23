var React = require('react');

var NavBarSection = React.createClass({

  isLoggedIn: function() {
    return true;
  },

  render: function() {
    return (
        <div class="nav-bar">
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li>{ this.isLoggedIn() ? "<a href='/logout'>Logout</a>" : "<a href='/login'>Login</a>" }</li>
        </ul>
        </div>
    );
  }

});

module.exports = NavBarSection;
