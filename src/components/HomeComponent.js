import React, { Component } from 'react';
import { Card,CardTitle, CardImg,CardText, CardBody,UncontrolledCollapse } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import '../App.css';
import { SOCIALS } from '../shared/socials';


import { Link ,Redirect} from 'react-router-dom';

    class Home extends Component {

        constructor(props) {
            super(props);
    
            this.state = {
                socials:SOCIALS,
                selectedSocial: null,
                redirect:false
            }
            this.onHandleClick = this.onHandleClick.bind(this);
        }
        
        onSocialSelect(social) {
            this.setState({ selectedSocial: social});
        }
        onHandleClick(){
          this.setState({
            redirect:true
          });
        }

    
        renderSocial(selectedSocial,id) {
            if (selectedSocial != null && selectedSocial.id == id)
                return(
                  <div>
                  <UncontrolledCollapse toggler="#toggler">
                    <Card className="expandedcards">
                      <CardBody >
                        <div className="row container" align="center">
                            <div className="containBox col-4 col-md-5 m-2 ">
                              <h4>OFFER</h4>
                              <br />
                              <img width="30%" src="./assets/images/cheers.svg" />
                              <br/>
                            
                              <h4>Happy Hour</h4>
                              
                              <button type="button" class="btn2">9:00 PM</button>
                            </div>
                            <div className="containBox col-4 col-md-5 m-2">
                              <h4>EVENT</h4>
                              <br />
                              <img width="30%" src="./assets/images/clown.svg" />
                              <h4>Comedy Night</h4>
                              <button type="button" class="btn2" onClick={this.onHandleClick}>9:00 PM</button>
                            </div>

                        </div>
                      </CardBody>
                    </Card>
                  </UncontrolledCollapse>
                </div>
                );
            else
                return(
                    <div></div>
                );
        }
    
        render() {
          if(this.state.redirect){
            return  <Redirect push to="/redeem" />
         }
            const menu = this.state.socials.map((social) => {
                return (
                  <div  className="col-12 col-md-6 m-2">
                    <Card key={social.id } className="cards"  
                      >
                      <CardImg width="100%" src={social.image} alt={social.name} />
                      <CardBody className="cardsbody">
                           <CardTitle><h1>{social.name}</h1></CardTitle>
                           <div align="center">
                              <button type="button" class="btn btn-outline-dark btncss">Indian</button>
                              <button type="button" class="btn btn-outline-dark btncss">Dance</button>
                              <button type="button" class="btn btn-outline-dark btncss">Bollywood</button>
                           </div>
                           <div align="right">
                              <button type="button" className="btn btn-outline-dark" id="toggler"  onClick={() => this.onSocialSelect(social)}>
                                <i class="fa fa-angle-double-down" />
                              </button>
                           </div>
                      </CardBody>
                    </Card>
                     <div align="center" >
                        { this.renderSocial(this.state.selectedSocial,social.id) }
                      </div>
                  </div>
                );
            });
    
            return (
                <div className="container" >
                    <div className="row" >
                        {menu}
                    </div>
                    <div className="row">
                      <div  className="col-12 col-md-5 m-1">
                        {this.renderSocial(this.state.selectedSocial)}
                      </div>
                    </div>
                </div>
            );
        }
    }
    
export default Home;