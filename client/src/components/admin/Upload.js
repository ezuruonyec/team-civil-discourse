//Potential button to upload data via CSV, does not work ATM

// import { FormGroup, makeStyles } from "@material-ui/core"
// import React, {Component, useState} from "react"
// import {connect} from "react-redux"
// import * as actions from "../../actions"
// import {Button, Form, Input} from "reactstrap"

// const useStyles = makeStyles({
//     form: {
//         width: "75vw",
//         margin: "auto",
//         backgroundColor: "#FFFFFF",
//         paddingRight: 10,
//         paddingLeft: 10
//     },
// })
// const Upload = () => {

//     const classes = useStyles();
//     const [csv, setCsv] = useState(0);
    
//     function uploading(){

//         return(
//             <Form onSubmit={onSubmit}>
//                 <Input
//                     type="file"
//                     ref={(input) => { this.filesInput = input }}
//                     name="file"
//                     icon='file text outline'
//                     iconPosition='left'
//                     label='Upload CSV'
//                     labelPosition='right'
//                     placeholder='UploadCSV...'
//                     onChange={setCsv(filesInput[0])}
//                 />
//                 <Button>Upload CSV file</Button>
//             </Form>
//         )
//     }

//     const onSubmit = () => {
//         actions.uploadCSV(csv);
//     }

//     return(
//         uploading()
//     );
    
// }

// function mapStateToProps({country}) {
//     return {country}
// }

// export default connect(mapStateToProps, actions)(Upload)