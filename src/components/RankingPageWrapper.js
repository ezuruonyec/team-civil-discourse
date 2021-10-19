import React, { Suspense, useEffect } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';
import RankingPage from './RankingPage';
import Header from './Header';

export default function RankingPageWrapper(/*{ country: world, getCountry }*/) {
    // useEffect(() => {
    //     getCountry()
    // }, [getCountry])

    return (
        <div>
            <Header />
            <Suspense fallback={<CircularProgress />}>
                {/* {isFetched ? <RankingPage /> : <CircularProgress 
                    style={{
                        backgroundColor: "transparent",
                        height: 100,
                        width: 100,
                        textAlign: "center",
                        margin: "auto",
                        marginLeft: "calc(50vw - 100px)",
                        marginTop: "calc(50vh - 100px)"
                        }}/>} */}
                <RankingPage /*allCountries={world.countries}*//>
            </Suspense>
        </div>
    )
}
