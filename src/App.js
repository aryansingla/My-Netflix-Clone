import "./App.css";
import React ,{useEffect} from "react";
import HomeScreen from "./Screen/HomeScreen.js"
import LoginScreen from "./Screen/LoginScreen.js"
import { auth } from './firebase';
import {useDispatch , useSelector} from "react-redux";
import {login , logout , selectUser} from "./features/userSlice";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import ProfileScreen from "./Screen/ProfileScreen.js"

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe=auth.onAuthStateChanged(userAuth =>{
      if (userAuth){
        dispatch(login({
          uid:userAuth.uid,
          email: userAuth.email
        }));
      } else {
        dispatch(logout());
      }
    })

    return unsubscribe;
  }, [dispatch]);
  
  return (
    <div className="App">
      <Router>
        {!user ?(
          <LoginScreen/>
        ):(
          <Routes>
            <Route path="/profile" element={<ProfileScreen/>}/>
          <Route exact path="/" element={<HomeScreen/>}/>
      
      </Routes>
  )}
      
      </Router>
    </div>
  );
}

export default App;