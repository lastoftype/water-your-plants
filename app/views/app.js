import React from "react"
import PlantList from "./components/plantList"

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <section className="main">
        <header>
          <h1 className="main-title">Water Your Plants</h1>
        </header>
        <PlantList />
      </section>
    )
  }
}

export default App
