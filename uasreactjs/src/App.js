import React, { createContext, useReducer } from 'react';
import { BrowserRouter, Switch, Redirect, Route, withRouter } from 'react-router-dom';
import MenuComp from './Component/MenuComp';
import HomeComp from './Component/HomeComp';
import LoginComponent from './Component/LoginComponent';
import RegisterComp from './Component/RegisterComp';
import Services from './Component/Services';
import TambahComp from './Component/TambahComp';
import { Navbar } from 'reactstrap';
import EditComp from './Component/EditComp';

//Context
export const AuthContext = createContext()

//Inisiasi State
const initialState = {
  isAuthenticated: false,
  user: null,
  token: null
}

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("user", JSON.stringify(action.payload.user))
      localStorage.setItem("token", JSON.stringify(action.payload.token))
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token
      }

    case "LOGOUT":
      localStorage.clear()
      return {
        ...state,
        isAuthenticated: false,
        user: null
      }

    default:
      return state
  }
}



function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <BrowserRouter>
      <Switch>
        <AuthContext.Provider value={{
          state,
          dispatch
        }}>
          <Main/>
          {!state.isAuthenticated ?
            <Redirect
              to={{
                pathname: "/"
              }}
            /> :
            <Redirect
              to={{
                pathname: "/homepage"
              }}
            />
          }
       </AuthContext.Provider>
      </Switch>
    </BrowserRouter>
   
  )

}

const Main = withRouter(({ location }) => {
  return (
    <div>
      {
        location.pathname !== '/login' && 
        location.pathname !== '/register' &&
         <MenuComp/>
      }
      <Route exact path="/" component={HomeComp} />
      <Route exact path="/homepage" component={HomeComp} />
      <Route exact path="/login" component={LoginComponent} />
      <Route exact path="/register" component={RegisterComp} />
      <Route exact path="/property" component={Services} />
      <Route exact path="/property/tambah" component={TambahComp} />
      <Route exact path="/property/edit" component={EditComp} />      
    </div>
  )
})

export default App;
