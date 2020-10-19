import React, {useState, useEffect} from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import {Button, Form, FormGroup, Label, Input} from "reactstrap"
import {connect} from "react-redux"
import * as actions from "../../actions"

const CountryForm = ({addCountry, editCountry, disp, index, mode, data}) => {

    useEffect(() => {
       if(mode === "edit"){
            editableData()
       }
    }, [])

    const [show, setShow] = useState(true)
    
    
    const [name, setName] = useState("")
    const [code, setCode] = useState("")
    const [population, setPopulation] = useState("")
    const [mdRatified, setMdRatified] = useState(true)
    const [mdYear, setMdYear] = useState("")
    const [free_speech, setFreeSpeech] = useState(true)
    const [fsRestrict, setFsRestrict] = useState("")
    const [fmPresent, setFmPresent] = useState(true)
    const [fmRestrict, setFmRestrict] = useState("")
    const [fmYear, setFmYear] = useState("")
    const [rwbRank, setRwbRank] = useState(0)
    const [rwbScore, setRwbScore] = useState(0)
    const [sources, setSources] = useState("")
    const [id, setId] = useState(null)


    const editableData = () => {
        data.map(data => {
            setId(data._id)
            setName(data.name)
            setCode(data.code)
            setPopulation(data.population)
            data.millenium_dec.map(info => {
                setMdRatified(info.ratified)
                setMdYear(info.year)
            })
            data.freedom_speech.map(info => {
                setFreeSpeech(info.present)
                setFsRestrict(info.restrictions)
            })
            data.freedom_media.map(info => {
                setFmPresent(info.present)
                setFmRestrict(info.restrictions)
                setFmYear(info.year)
            })
            setRwbRank(data.rwb_ranking)
            setRwbScore(data.rwb_score)
            setSources(data.sources)
        })
    }

   

    const onSubmit = (e) => {
        e.preventDefault()
        const countryData = {
            name: name,
            code: code,
            population: population,
            millenium_dec: [{
                ratified: mdRatified,
                year: mdYear
            }],
            freedom_speech: [{
                present: free_speech,
                restrictions: fsRestrict
            }],
            freedom_media: [{
                present: fmPresent,
                restrictions: fmRestrict,
                year: fmYear
            }],
            rwb_ranking: rwbRank,
            rwb_score: rwbScore,
            sources: [sources],
            id: id
        }

       
        if(mode === "add"){
            addCountry(countryData)
        }
        else {
            //editCountry(id, countryData)
        }
        setShow(false)
        disp("countries")
        index(0)
    }

        
        

    function form(){
        return (
        <Form onSubmit={onSubmit}>

        <FormGroup>
            <Label for="name">Country</Label>
            <Input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                value={name}
                onChange={e => setName(e.target.value)} 
            />
            <br />
            <Input
                type="text"
                name="code"
                id="code"
                placeholder="Country Code"
                value={code}
                onChange={e => setCode(e.target.value)} 
            />
            <br />
            <Input
                type="number"
                name="population"
                id="population"
                placeholder="Population"
                value={population}
                onChange={e => setPopulation(e.target.value)} 
            />
        </FormGroup> 

        <FormGroup>
            <Label for="md_rat">Millenium Declaration</Label>
            <Input type="select" name="md_rat" id="md_rat" value={mdRatified} onChange={e => setMdRatified(e.target.value)}>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
            </Input>
                <br />
            <Input
                type="number"
                name="md_year"
                id="md_year"
                placeholder="Year"
                value={mdYear}
                onChange={e => setMdYear(e.target.value)} 
            />
        </FormGroup> 

        <FormGroup>
            <Label for="free_speech">Freedom of Speech</Label>
            <Input type="select" name="free_speech" id="free_speech" value={free_speech} onChange={e => setFreeSpeech(e.target.value)}>
            <option value={true} >Yes</option>
            <option value={false}>No</option>
            </Input>
                <br />
            <Input
                type="text"
                name="fs_restrictions"
                id="fs_restrictions"
                placeholder="Restrictions"
                value={fsRestrict}
                onChange={e => setFsRestrict(e.target.value)} 
            />

        </FormGroup>

        <FormGroup>
            <Label for="free_media">Freedom of Media</Label>
            <Input type="select" name="free_media" id="free_media" value={fmPresent} onChange={e => setFmPresent(e.target.value)}>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
            </Input>
            <br />
            <Input
                type="text"
                name="fm_restrictions"
                id="fm_restrictions"
                placeholder="Restrictions"
                value={fmRestrict}
                onChange={e => setFmRestrict(e.target.value)} 
            />
            <br />
            <Input
                type="number"
                name="fm_year"
                id="fm_year"
                placeholder="Year"
                value={fmYear}
                onChange={e => setFmYear(e.target.value)} 
            />
        </FormGroup>

        <FormGroup>
            <Label for="rwb_rank">Reporters Without Borders</Label>
            <Input
                type="number"
                name="rwb_rank"
                id="rwb_rank"
                placeholder="Ranking"
                value={rwbRank}
                onChange={e => setRwbRank(e.target.value)} 
            />
            <br />

            <Input
                type="number"
                min="0.00"
                step="0.001"
                max="1000.00"
                name="rwb_index"
                id="rwb_index"
                placeholder="Score"
                value={rwbScore}
                onChange={e => setRwbScore(e.target.value)} 
            />
        </FormGroup> 

        <FormGroup>
            <Label for="sources">Sources</Label>
            <Input
                type="textarea"
                name="sources"
                id="sources"
                placeholder="List links separated by commma"
                value={sources}
                onChange={e => setSources(e.target.value)} 
            />
        </FormGroup> 

            <Button
                color="success"
                style={{marginTop:"2rem"}}
                block>
            Save
            </Button>

    </Form>)
    }

   

    return (
        <div>
        {show ? 
            form()
            : 
            <div>Success</div>
        }
        </div>
    )
}

function mapStateToProps({country}) {
    return {country}
}


export default connect(mapStateToProps, actions)(CountryForm)