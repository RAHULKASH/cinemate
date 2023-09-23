
import {Header,Footer} from "./Components";
import {AllRoutes} from "./Routes/AllRoutes.js";

export function App(){

  return(
    <div className="App">
      <Header/>
      <AllRoutes/>
      <Footer/>
    </div>
  )
}