import React from 'react'
class Footer extends React.Component {
  render() {
    const year = (new Date()).getFullYear().toString();
    const month = (new Date()).getMonth().toString();
    const day = (new Date()).getDate().toString();

    const monthName = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"];
    return (
      <div className = "footer">
        <h1 className = "footer-text">Today is {year}  {monthName[month]} {day}.</h1>
      </div>
    )
  }
}
export default Footer