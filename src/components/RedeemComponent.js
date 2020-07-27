import React, { Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import { Card,CardTitle, CardImg,CardText, CardBody,UncontrolledCollapse } from 'reactstrap';

// NOT COMPLETED

class Redeem extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <Card className="expandedcards">
                      <CardBody>    
                        <div className="containBox col-4 col-md-5 m-2 ">
                              <h4>OFFER</h4>
                              <br />
                              <img width="30%" src="./assets/images/cheers.svg" />
                              <br/>
                              <h4>Happy Hour</h4>
                              <button type="button" class="btn2">9:00 PM</button>
                        </div>
                      </CardBody>
                 </Card>
            </div>


        );
    }
}

export default Redeem;