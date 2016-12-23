
const React = require('react');

class ThemedDecorations extends React.Component {
  render() {
    const childrenWithExtraProp = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        className: this.props.theme
      });
    });

    return (
      <div>
        {childrenWithExtraProp}
      </div>      
    );
  }
}


require('../test/index-test.js');
module.exports = ThemedDecorations;