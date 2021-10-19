//  ██╗███╗   ███╗██████╗  ██████╗ ██████╗ ████████╗███████╗
//  ██║████╗ ████║██╔══██╗██╔═══██╗██╔══██╗╚══██╔══╝██╔════╝
//  ██║██╔████╔██║██████╔╝██║   ██║██████╔╝   ██║   ███████╗
//  ██║██║╚██╔╝██║██╔═══╝ ██║   ██║██╔══██╗   ██║   ╚════██║
//  ██║██║ ╚═╝ ██║██║     ╚██████╔╝██║  ██║   ██║   ███████║
//  ╚═╝╚═╝     ╚═╝╚═╝      ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚══════╝
//                                                          

import {
  GET_COUNTRY,
  ITEMS_LOADING,
} from "./types"
import axios from "axios"



//  ███████╗██╗   ██╗███╗   ██╗ ██████╗████████╗██╗ ██████╗ ███╗   ██╗███████╗
//  ██╔════╝██║   ██║████╗  ██║██╔════╝╚══██╔══╝██║██╔═══██╗████╗  ██║██╔════╝
//  █████╗  ██║   ██║██╔██╗ ██║██║        ██║   ██║██║   ██║██╔██╗ ██║███████╗
//  ██╔══╝  ██║   ██║██║╚██╗██║██║        ██║   ██║██║   ██║██║╚██╗██║╚════██║
//  ██║     ╚██████╔╝██║ ╚████║╚██████╗   ██║   ██║╚██████╔╝██║ ╚████║███████║
//  ╚═╝      ╚═════╝ ╚═╝  ╚═══╝ ╚═════╝   ╚═╝   ╚═╝ ╚═════╝ ╚═╝  ╚═══╝╚══════╝
//                                                                            


export const getCountry = () => async dispatch => {
  dispatch(setItemsLoading())

  try {
    const request = {
      // DEV
      /*host: 'https://h5kxmgz3lc.execute-api.us-east-1.amazonaws.com/development',
      method: 'GET',
      url: 'https://h5kxmgz3lc.execute-api.us-east-1.amazonaws.com/development/CivilDiscourseMap-GetAllAttributes',
      path: '/CivilDiscourseMap-GetAllAttributes',
      crossdomain: true */
      // PROD
    host: 'https://3iixzbu86i.execute-api.us-east-1.amazonaws.com/', 
        method: 'GET',
        url: 'https://3iixzbu86i.execute-api.us-east-1.amazonaws.com/Prod-CivilDiscourseMap-GetAllAttributes', 
        path: '/CivilDiscourseMap-GetAllAttributes',
        crossdomain: true

    }
    const res = await axios.request(request);
    if ("Items" in res.data) {
      console.log("AWS Call:\n");
      console.log(res.data["Items"]);
    }

    dispatch({ type: GET_COUNTRY, payload: res.data["Items"] })
    return res.data
  }
  catch (error) {
    console.log(error);
    console.log(error.response);
  }

}

export const setItemsLoading = () => {
  return {
    type: ITEMS_LOADING
  }
}
