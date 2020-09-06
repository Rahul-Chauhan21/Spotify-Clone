export const intialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token:
    "BQB0k6B46dA1Jy1hCKvK1AQTr3dRziDQ7Lq9E-NzJYyIYK8547cLWqobVmEUroZoRc0N6T0C_-WSL2-5ONhGgmztKrRu3ZR5yD_Jh_VaGMCE96dGHufCIbmPZicI3R7RssJFMD6MlVqHURc0RJXflVISGtJR2ThE3RblqtryLcy5Qmi6",
};

const reducer = (state, action) => {
  console.log(action);

  // Action -> type, [payload]

  switch (action.type) {
    case "SET_USER": //type
      return {
        ...state,
        user: action.user, //payload : user
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    default:
      return state;
  }
};

export default reducer;
