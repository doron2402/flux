var React = require('react');

var HeadSection = React.createClass({

  propTypes: {
    
  },

  render: function() {
    var title = { text: 'Chat App' };
    return (
      <h3>{title.text}</h3>
    );
  }

});

module.exports = HeadSection;
