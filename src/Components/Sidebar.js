import React from "react";
import "./Sidebar.css";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import SidebarOption from "./SidebarOption";
import { useDataLayerValue } from "../DataLayer";
function Sidebar() {
  const [{ playlists, discover_weekly }, dispatch] = useDataLayerValue();
  const goHome = () => {
    if (discover_weekly) {
      dispatch({
        type: "SET_DISCOVER_WEEKLY",
        discover_weekly: false,
      });
    }
  };
  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
        onClick={goHome}
        alt="spotify logo"
      />
      <SidebarOption Icon={HomeIcon} title="Home" id={null} />
      <SidebarOption Icon={SearchIcon} title="Search" id={null} />
      <SidebarOption Icon={LibraryMusicIcon} title="Your Library" id={null} />
      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />
      {playlists?.items?.map((playlist) => (
        <SidebarOption
          key={playlist.id}
          title={playlist.name}
          id={playlist.id}
        />
      ))}
    </div>
  );
}

export default Sidebar;
