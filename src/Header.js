import { Avatar, Button, IconButton } from "@material-ui/core";
import {
  AppsOutlined,
  Menu,
  NotificationsNoneOutlined,
  SearchOutlined,
  VideoCallRounded,
} from "@material-ui/icons";
import { useState } from "react";
import youtubeSearch from "./youtubeSearch";
import { Link, useHistory } from "react-router-dom";
import "./Header.css";
import { useAuth } from "./AuthContext/AuthContext";
import { auth, google_provider } from "./firebase/firebaseConfig";
import { signInWithPopup } from "@firebase/auth";
const Header = () => {
  const [inputSearch, setInputSearch] = useState("");
  const { videoStateHandler } = useAuth();
  const history = useHistory();
  const { user,signinHandler } = useAuth();
  // const history = useHistory()
  const inputSearchHandler = async () => {
    const response = await youtubeSearch.get("search", {
      params: { q: inputSearch },
    });
    videoStateHandler(response.data.items);
    history.push(`/search/${inputSearch}`);
  };
const googleSigninHandler =()=>{
  signInWithPopup(auth,google_provider).then(credential =>{
    const user = credential.user;
    console.log(user);
    signinHandler(user)
  })
}

  return (
    <div className="header">
      <div className="header__left">
        <Menu />
        <Link to="/">
          <img
            className="header__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
            alt=""
          />
        </Link>
      </div>
      <div className="header__input">
        <input
          onChange={(e) => setInputSearch(e.target.value)}
          value={inputSearch}
          type="text"
          placeholder="Search"
          className="header__inputField"
        />
        <Button  onClick={inputSearchHandler}>
          <SearchOutlined className="header__inputButton" />
        </Button>
      </div>
      <div className="header__icons">
        <VideoCallRounded className="header__icon" />
        <AppsOutlined className="header__icon" />
        <NotificationsNoneOutlined className="header__icon" />
        {user !== null
         ?
          <Avatar src={user && user.photoURL} />
           : 
           <Button onClick={googleSigninHandler}>Sign in</Button>
           }
      </div>
    </div>
  );
};

export default Header;
