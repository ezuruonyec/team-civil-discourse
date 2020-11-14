import React from "react"
import {Container} from "@material-ui/core"


function Country({name, population, code}) {
    return (
        <Container>
            <h1>{name} ({code})</h1>
            <p>Population: {population}</p>
        </Container>
    )
}

export default Country
