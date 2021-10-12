
import { BrowserRouter as Router } from "react-router-dom"
import { Pages } from "./Pages"
import NavigationBar from "./Widgets/Navigation/NavigationBar"

const App = () => {
  return (
    <Router>
      <NavigationBar />
      <Pages />
    </Router>
  )
}

export default App
