import CircularProgress from '@material-ui/core/CircularProgress';
import RankingPage from './RankingPage';
import Header from './Header';
import React, { Suspense } from 'react'

export default function RankingPageWrapper() {
    return (
        <div>
            <Header />
            <Suspense fallback={<CircularProgress />}>
                <RankingPage />
            </Suspense>
        </div>
    )
}
