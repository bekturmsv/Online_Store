import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter/AppRouter";
import NavBar from "./components/NavBar/NavBar";
import { createBrowserHistory } from "history";
import { useContext, useEffect, useState } from "react";
import { Context } from ".";
import { check } from "./http/userAPI";
import { Spinner } from "react-bootstrap";

function App () {
  // const { user } = useContext(Context)
  //   const [loading,setLoading] = useState(true)

  //   useEffect(()=> {
  //       check().then(data => {
  //           user.setUser(true)
  //           user.setIsAuth(true)
  //       }).finally(()=> setLoading(false))
  //   },[])
  //   if(loading){
  //       return <Spinner animation='grow'/>
  //   }
  return (
    <AppRouter/>
  );
}

export default App;
