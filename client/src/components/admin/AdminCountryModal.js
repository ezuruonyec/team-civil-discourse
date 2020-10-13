import React, {useState} from "react"

import {Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input} from "reactstrap"
import {connect} from "react-redux"
// import {addCountry} from "../../actions/countryActions"
import * as actions from "../../actions"

const AdminCountryModal = ({addCountry}) => {
    const [isOpen, setIsOpen] = useState(false)
    
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
    const [sources, setSources] = useState([])

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        const newCountry = {
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
            sources: [sources]

        }
       console.log(newCountry)
        addCountry(newCountry)

        toggle()
    }

   

    return (
        <div>
            <Button
                color="success"
                style={{marginBottom: "2rem"}}
                onClick={toggle}
            >
                Add Country
            </Button>
            <Modal
                isOpen={isOpen}
                toggle={toggle}
            >
                <ModalHeader toggle={toggle}>Create New Country</ModalHeader>
                <ModalBody>
                    <Form onSubmit={onSubmit}>

                        <FormGroup>
                            <Label for="name">Country</Label>
                            <Input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Name"
                                onChange={e => setName(e.target.value)} 
                            />
                            <br />
                            <Input
                                type="text"
                                name="code"
                                id="code"
                                placeholder="Country Code"
                                onChange={e => setCode(e.target.value)} 
                            />
                            <br />
                            <Input
                                type="number"
                                name="population"
                                id="population"
                                placeholder="Population"
                                onChange={e => setPopulation(e.target.value)} 
                            />
                        </FormGroup> 

                        <FormGroup>
                            <Label for="md_rat">Millenium Declaration</Label>
                            <Input type="select" name="md_rat" id="md_rat" onChange={e => setMdRatified(e.target.value)}>
                            <option value={true} selected>Yes</option>
                            <option value={false}>No</option>
                            </Input>
                                <br />
                            <Input
                                type="number"
                                name="md_year"
                                id="md_year"
                                placeholder="Year"
                                onChange={e => setMdYear(e.target.value)} 
                            />
                        </FormGroup> 

                        <FormGroup>
                            <Label for="free_speech">Freedom of Speech</Label>
                            <Input type="select" name="free_speech" id="free_speech" onChange={e => setFreeSpeech(e.target.value)}>
                            <option value={true} selected>Yes</option>
                            <option value={false}>No</option>
                            </Input>
                                <br />
                            <Input
                                type="text"
                                name="fs_restrictions"
                                id="fs_restrictions"
                                placeholder="Restrictions"
                                onChange={e => setFsRestrict(e.target.value)} 
                            />

                        </FormGroup>

                        <FormGroup>
                            <Label for="free_media">Freedom of Media</Label>
                            <Input type="select" name="free_media" id="free_media" onChange={e => setFmPresent(e.target.value)}>
                            <option value={true} selected>Yes</option>
                            <option value={false}>No</option>
                            </Input>
                            <br />
                            <Input
                                type="text"
                                name="fm_restrictions"
                                id="fm_restrictions"
                                placeholder="Restrictions"
                                onChange={e => setFmRestrict(e.target.value)} 
                            />
                            <br />
                            <Input
                                type="number"
                                name="fm_year"
                                id="fm_year"
                                placeholder="Year"
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
                                onChange={e => setSources(e.target.value)} 
                            />
                        </FormGroup> 

                            <Button
                                color="success"
                                style={{marginTop:"2rem"}}
                                block>
                            Save
                            </Button>

                    </Form>
                </ModalBody>
            </Modal>
        </div>
    )
}

// const mapStateToProps = (state) => ({
//     country: state.country
// })

function mapStateToProps({country}) {
    return {country}
}


export default connect(mapStateToProps, actions)(AdminCountryModal)