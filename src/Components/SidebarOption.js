import React from "react";
import { useDataLayerValue } from "../DataLayer";
import "./SidebarOption.css";
function SidebarOption({ title, Icon, id }) {
  const [{ spotify }, dispatch] = useDataLayerValue();
  const handleClick = () => {
    if (id) {
      spotify.getPlaylist(id).then((response) => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        });
      });
    }
  };
  return (
    <div className="sidebarOption" onClick={handleClick}>
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? <h4>{title}</h4> : <p> {title}</p>}
    </div>
  );
}

export default SidebarOption;
