import Styles from "./Components CSS/Home.module.css"
import Dados from "./Components JSX/Dados"
import todoReducer from "./Components JSX/Reducers"
import { Provider } from "react-redux"
import { legacy_createStore } from "redux"


function ThaylaHome(){
  const store =legacy_createStore(todoReducer)

  return(

    
    <Provider store={store}>
          <div className={Styles.GeneralContainer}>
            <Dados/>
          </div>
    </Provider>

  )

}


export default ThaylaHome