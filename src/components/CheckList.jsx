import React, { useState, useEffect } from 'react'
import { Container, Form, Button, Row, Col,Spinner } from 'react-bootstrap';
import axios from 'axios'
export default function CheckList() {
  const [data, setdata] = useState([]);
  var heading = ['Question', 'Choices', 'Response'];
  const [yes,setyes]=useState([]);
  const [no,setno]=useState([]);
  const [choice,setchoice]=useState([]);
const [data1,setdata1]=useState({"managerName": "Deep Roy",
"projectName": "Project-1",
"auditDetail": {
  "auditType": "Internal",
  "auditDate": "2021-06-17T08:28:57.369Z",
  "auditQuestions": [
    {
      "auditType": "Internal",
      "question": "Have all Change requests followed SDLC before PROD move?",
      "questionId": 1,
      "response": "YES"
    },
    {
      "auditType": "Internal",
      "question": "Have all Change requests been approved by the application owner?",
      "questionId": 2,
      "response": "NO"
    },
    {
      "auditType": "Internal",
      "question": "Are all artifacts like CR document, Unit test cases available?",
      "questionId": 3,
      "response": "YES"
    },
    {
      "auditType": "Internal",
      "question": "Is the SIT and UAT sign-off available?",
      "questionId": 4,
      "response": "NO"
    },
    {
      "auditType": "Internal",
      "question": "Is data deletion from the system done with application owner approval?",
      "questionId": 5,
      "response": "YES"
    }
      ]
  }})

  const [search, setsearch] = useState("");
  const postdata = (data) => {
    console.log(localStorage.getItem('Authorization'),"==================================================")
    axios.post("http://localhost:8200/checklist/AuditCheckListQuestions", data, 
    {headers: {"Authorization" : `Bearer ${localStorage.getItem('Authorization')}`}}).then(
      (response) => {
        //success
        console.log(response);
        setdata(response.data)

      }, (error) => {
        //error
        console.log(error);
        console.log("failed +++++++++++++++++++")
      
      }
    );
  };

  const postdata1 = (data) => {
    //console.log(localStorage.getItem('Authorization'),"==================================================")
    axios.post("http://localhost:8300/severity/ProjectExecutionStatus", data, 
    {headers: {"Authorization" : `Bearer ${localStorage.getItem('Authorization')}`}}).then(
      (response) => {
        //success
        console.log(response);
       
        alert("data sent to db")


      }, (error) => {
        //error
        console.log(error);
        console.log("failed +++++++++++++++++++")

      }
    );
  };

  const handleSubmit1 = (e) => {

    console.log(search)
    postdata1(data1)
    e.preventDefault();
  
  };

  const handleSubmit = (e) => {

    console.log(search)
    postdata({ "auditType": search })
    e.preventDefault();

  };


  return (
    <div >

      <Container className="mt-3 text-center">
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col sm={1}></Col>
            <Col sm={3}>
              <Form.Label>Choose Audit type:</Form.Label>
            </Col>
            <Col sm={3}>
              <Form.Group className="mb-3" controlId="Slot">

                <Form.Select aria-label="Default select example" onChange={(e) => {
                  setsearch(e.target.value)
                }}>
                  <option>Select Audit Type</option>
                  <option value="Internal">Internal</option>
                  <option value="SOX">SOX</option>

                </Form.Select>
              </Form.Group>
            </Col>
            <Col sm={3}>
              <Button type="submit" variant="outline-success">See Questions</Button>
            </Col>
            <Col sm={2}></Col>
          </Row>
        </Form>
      </Container>

      <Container>
      <Form onSubmit={handleSubmit1}>

        {
          (data.length > 0) ?
            <table striped bordered hover variant="dark" cellPadding={10} cellSpacing={10} style={{ width: 900, marginTop: '20', marginLeft: '10' }}>
              <thead>
                <tr>
                  {heading.map(head => <th>{head}</th>)}
                </tr>
              </thead>
              <tbody >
                {
                  data.length>0?data.map(item => <tr key={item.questionId}>
                    <td>{item.question}</td>
                    <td><Button onClick={(e)=>{
                      if(choice.length>0){
                        choice.pop()
                      }
                      choice.push('yes')
                      
                     
                    }} variant="outline-success">Yes</Button>    <Button onClick={(e)=>{
                      no.push('no')
                      if(yes.length>0){
                        yes.pop('yes')
                      }
                     
                    }} variant="outline-danger">No</Button></td>
                    <td>{ choice[choice.length-1]}</td>




                  </tr>)
                  :<>
            
                  <Spinner animation="grow" variant="primary" />
                  <Spinner animation="grow" variant="secondary" />
                  <Spinner animation="grow" variant="success" />
                  <Spinner animation="grow" variant="danger" />
                  <Spinner animation="grow" variant="warning" />
                  <Spinner animation="grow" variant="info" />
                  <Spinner animation="grow" variant="light" />
                  <Spinner animation="grow" variant="dark" />
                </>}

              </tbody>
            </table>
             :
             ''
         
       }
       {data.length>0 &&  <Button type="submit" variant="outline-success" style={{textAlign:'center',marginLeft:'28%',marginTop:'100'}} onClick={
         ()=>{
          // alert("data sent")
          // window.location="/severity"
         }
       }>submit</Button>}
        
        </Form>
      </Container>
      
    </div>

  )
}