const React = require('react');

class Invitation extends React.Component {
  render() {
    return (
      <div>
        <h1>You've been invited!</h1>
        <p>{this.props.children}</p>
      </div>
    );
  }
}


require('../test/index-test.js');
module.exports = Invitation;