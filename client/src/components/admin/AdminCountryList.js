import React, { Component } from "react"
import {Container, ListGroup, Button, ListGroupItem} from "reactstrap"
import {CSSTransition, TransitionGroup} from "react-transition-group"
import {connect} from "react-redux"
import {getCountry, deleteCountry, editCountry} from "../../actions/countryActions"
import PropTypes from "prop-types"
import { Spinner, Alert } from 'reactstrap';

class AdminCountryList extends Component {
    
    componentDidMount() {
        this.props.getCountry()
    }

    onDeleteClick = (id) => {
        this.props.deleteCountry(id)
    }

    onDeleteClick = (id) => {
        this.props.editCountry(id)
    }

    render() {

        const {countries} = this.props.country
        const {loading} = this.props.country
        return (
            <Container>

            {
            loading ? 
            
            <div style={{textAlign:"center"}}>
                <Alert color="light">
                    <span style={{fontSize: 24, display:"inline-block", marginRight: 20}}>Loading</span><Spinner color="primary" />
                </Alert>
            </div>
            :
            

            <ListGroup>
                <TransitionGroup className="country-list"> 
                    {countries.map(({_id, name}) => (
                        <CSSTransition key={_id} timeout={500} classNames="fade">
                            <ListGroupItem>
                                {name}
                                <div style={{float: "right"}}>
                                <Button
                                    className="remove-btn"
                                    color="warning"
                                    size="sm"
                                    onClick={this.onEditClick.bind(this, _id)}
                                >
                                    edit
                                </Button>
                                <Button
                                    className="remove-btn"
                                    color="danger"
                                    size="sm"
                                    onClick={this.onDeleteClick.bind(this, _id)}
                                >
                                    delete
                                </Button>
                                </div>
                                
                            </ListGroupItem>
                                
                        </CSSTransition>
                    ))}
                </TransitionGroup>
            </ListGroup>
    }
        </Container>
        )
    }
}

AdminCountryList.propTypes = {
    getCountry: PropTypes.func.isRequired,
    country: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    country: state.country
})


export default connect(mapStateToProps, {getCountry, deleteCountry, editCountry})(AdminCountryList)