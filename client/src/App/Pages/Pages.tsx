import { Route, Switch } from "react-router-dom"
import Gallery from "./Gallery"
import Home from "./Home"

const Pages = () => {
  return (
    <Switch>
      <Route path="/gallery">
        <Gallery />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  )
}

export default Pages
