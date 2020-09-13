import React from "react";
import "./Sidebar.css";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import SidebarOption from "./SidebarOption";
import { useDataLayerValue } from "../DataLayer";
function Sidebar() {
  const [{ playlists }] = useDataLayerValue();
  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
      />
      <SidebarOption Icon={HomeIcon} title="Home" id={null} />
      <SidebarOption Icon={SearchIcon} title="Search" id={null} />
      <SidebarOption Icon={LibraryMusicIcon} title="Your Library" id={null} />
      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />
      {playlists?.items?.map((playlist) => (
        <SidebarOption title={playlist.name} id={playlist.id} />
      ))}
    </div>
  );
}

export default Sidebar;
