import React, { useState } from 'react';

import { Button, Card, CardText, CardTitle, Col, Form, FormGroup, Input, Label } from 'reactstrap';
import CookieService from "../components/cookieservice"
import stockData from "../db.json";
import axios from "axios";

const Example = (event: any) => {

  const [value, setValue] = useState("");

  const handleSubmit = e => {
     console.log("room id: "+value)
     CookieService.set(1, value, "test")
     window.location.reload()
  }

  const handleKeypress = e => {
      if (e.key === "Enter") {
          handleSubmit(e);
        } 
  }

  const handleChange = e => {
      setValue(e.target.value);
  }

  if(CookieService.get("1")=="10"){
    return (
      <div>
    <Form >
      <FormGroup>
          <Label for="exampleAddress">Enter Room ID</Label>
          
          <Input
                  type="text" 
                  onKeyPress = {handleKeypress}
                  onChange= {handleChange}
                  value = {value}
                  placeholder="Enter Room ID"
          />
      </FormGroup>
      </Form>
      <Button name='button1' variant="primary" onClick={handleSubmit} >Submit Data To Cookie</Button>{' '}
      <Button name='button1' variant="primary" onClick={(e) => console.log("getting Cookie: "+CookieService.get("1"))} >Cookie Console.log</Button>{' '}
      
    <h1> Render #1 </h1>
    
      
        <a href="landingpage"> go to the main page</a>
        <div className="stock-container">
          {stockData.movies.map((data, key) => {
            
            if(stockData.movies.length > 1){

            
            return (
              <div key={key}>
                <Stock
                  key={key}
                  company={data.id}
                  ticker={data.ticker}
                  stockPrice={data.stockPrice}
                  timeElapsed={data.timeElapsed}
                  roomId={data.roomId}
                />
              </div>
            ); 
            } 
          })
        }


        </div>
       
      </div>
    
    );
  
}
if(CookieService.get("1")=="2"){
return(
  <div>
  <Form >
    <FormGroup>
        <Label for="exampleAddress">Enter Room ID</Label>
        
        <Input
                type="text" 
                onKeyPress = {handleKeypress}
                onChange= {handleChange}
                value = {value}
                placeholder="Enter Room ID"
        />
    </FormGroup>
    </Form>
    <Button name='button1' variant="primary" onClick={handleSubmit} >Submit Data To Cookie</Button>{' '}
    <Button name='button1' variant="primary" onClick={(e) => console.log("getting Cookie: "+CookieService.get("1"))} >Cookie Console.log</Button>{' '}
    
  <h1> render #2 </h1>
  </div>
    
);
}else{
  return(
    <div>
    <Form >
      <FormGroup>
          <Label for="exampleAddress">Enter Room ID</Label>
          
          <Input
                  type="text" 
                  onKeyPress = {handleKeypress}
                  onChange= {handleChange}
                  value = {value}
                  placeholder="Enter Room ID"
          />
      </FormGroup>
      </Form>
      <Button name='button1' variant="primary" onClick={handleSubmit} >Submit Data To Cookie</Button>{' '}
      <Button name='button1' variant="primary" onClick={(e) => console.log("getting Cookie: "+CookieService.get("1"))} >Cookie Console.log</Button>{' '}
      
    <h1> Not Found </h1>
    </div>
  );
}

}

const Stock = ({ company, ticker, stockPrice, timeElapsed, roomId }) => {
  if (!company) return <div />;
      return (
          <table>
            <tbody>
              <tr>
                <td>
                  <h5>{company}</h5>
                </td>
                <td>
                  <h5>{ticker}</h5>
                  <Col sm="6">
                    <Card body>
                      <CardTitle>{ticker}</CardTitle>
                      <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                      <Button onClick={(e) => {handleDelete(company)} } >Delete</Button>
                      <Button name='button1' variant="primary" onClick={(e) => {handleVote(company)}} >Vote</Button>{' '}
                    </Card>
                  </Col>
                  
                </td>
                <td>
                  <h4>{stockPrice}</h4>
                </td>
                <td>
                  <p>{timeElapsed}</p>
                </td>
              </tr>
            </tbody>
          </table>
        );
  
};

const handleDelete = e => {
  axios.delete("movies/"+e)
}

const handleVote = async e => {
  let res = await axios.get("/movies/"+e)
  let data = res.data
  
  data.stockPrice = data.stockPrice+1

  console.log(data)
  //axios.delete("/posts/"+e)
  axios.put("/movies/"+e, data)
  //axios.post("/posts/", data)
}

export default Example;

/*

return (
  

  <div>
    <div>
        <h1>Join Room Page</h1>
        <a href="landingpage"> go to the main page</a>
    </div>
      <Form >
      <FormGroup>
          <Label for="exampleAddress">Enter Room ID</Label>
          
          <Input
                  type="text" 
                  onKeyPress = {handleKeypress}
                  onChange= {handleChange}
                  value = {value}
                  placeholder="Enter Room ID"
          />
      </FormGroup>
      </Form>
      <Button name='button1' variant="primary" onClick={handleSubmit} >Submit Data To Cookie</Button>{' '}
      <Button name='button1' variant="primary" onClick={(e) => console.log("getting Cookie: "+CookieService.get("1"))} >Cookie Console.log</Button>{' '}
  
      
  </div>
);
}

export default Example;

*/