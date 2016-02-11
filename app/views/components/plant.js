import React from "react"
import classNames from "classnames"
import moment from "moment"

class Plant extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    let now         = moment()
    let then        = moment(this.props.lastWatered)
    let diffInDays  = now.diff(then, 'days')
    let daysAgo     = then.fromNow()

    // plant status classes
    let classes = {
      "status-danger": diffInDays >= 7,
      "status-warning": diffInDays >= 4 && diffInDays <= 6,
      "status-success": diffInDays <= 3
    }

    return(
      <div className={classNames(classes, "plant")}>
        <a href="#" className="close" onClick={this.props.removeFromList.bind(this, this.props.id)}>×</a>
        <h3>{this.props.name}</h3>
        <p className="plant-watered"><span className="label">Last watered:</span> <span className="value">{daysAgo}</span></p>
        <p className="plant-frequency"><span className="label">Frequency:</span> {this.props.frequency}</p>
        <button className="button" onClick={this.props.updateDate.bind(this, this.props.id)}>Just watered</button>
      </div>
    )
  }
}

export default Plant
