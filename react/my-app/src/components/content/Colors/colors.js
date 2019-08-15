import React from 'react'
class MyColor extends React.Component {
  render() {
    return (
      <div className="iframe-display">
      <iframe className="iframe" src="https://materialuicolors.co/" title="color">
      </iframe>
      </div>
    );
  }
}
export default MyColor