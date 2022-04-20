import React, { createContext } from "react";

export const SharedCountryState = {
    countryName: "United States",
    countryRank: 18,
    setName: (countryName) => {},
    setRank: (countryRank) => {},
};

export const AppContext = createContext(SharedCountryState);



export default AppContext;