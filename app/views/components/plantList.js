import React from "react"
import Plant from "./plant"
import plantData from "../../../data"
import _ from "lodash"
import moment from "moment"

class PlantList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: plantData
    }
    this.removeFromList   = this.removeFromList.bind(this)
    this.updateDate       = this.updateDate.bind(this)
  }

  getPlantIndex(value) {
    let index = _.findIndex(plantData, {id: value})
    return index
  }

  removeFromList(value) {
    let newData     = this.state.data
    let index       = this.getPlantIndex(value)

    newData[index]  = null

    this.setState({
      data: newData
    })

    return
  }

  updateDate(value) {
    let newData     = this.state.data
    let index       = this.getPlantIndex(value)

    newData[index].lastWatered = moment()

    this.setState({
      data: newData
    })

    return
  }

  render() {

    let list = this.state.data.map((item, i) => {
      if (item){
        return (
          <Plant
            id={item.id}
            name={item.name}
            lastWatered={item.lastWatered}
            frequency={item.frequency}
            key={i}
            removeFromList={this.removeFromList}
            updateDate={this.updateDate} />
        )
      }
    })

    return(
      <div className="list">
        {list}
      </div>
    )
  }
}

export default PlantList
