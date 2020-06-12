import React from "react";
import { Button, Header, Image, Modal } from "semantic-ui-react";
import { Component } from "react";
import { connect } from "react-redux";
import {changelayout} from "../../action"
class SignIn extends Component{
  handlechange=(e)=>{
    this.setState({[e.target.name]:e.target.value})


  }
  submiting=()=>{
    if(this.state.mail==="admin.com" && this.state.password==="topadmin"){
      this.props.change(3)
    }
    else if(this.state.mail==="client.com" && this.state.password==="topclient"){
      this.props.change(2)
    }
    
  }
  render(){
    const {layouts}=this.props;
    console.log(layouts)
    

  return (
  <Modal trigger={<Button>SignIn</Button>}>
    <Modal.Header>SignIn</Modal.Header>
    <Modal.Content image>
      <Modal.Description>
        <Header>
            <div className="ui form">
          <div class="field">
            <label>Email</label>
            <input placeholder="email" name="mail" onChange={this.handlechange} />
          </div>
          <div class="field">
            <label>Password</label>
            <input placeholder="password" name="password" onChange={this.handlechange}/>
          </div>
          <div class="field">
            <div class="ui checkbox">
              <input type="checkbox" class="hidden" readonly="" tabindex="0" />
              <label>I agree to the Terms and Conditions</label>
            </div>
          </div>
          <button type="button" class="ui button" onClick={this.submiting}>
            Submit
          </button>
          </div>
        </Header>
      </Modal.Description>
    </Modal.Content>
  </Modal>
  );
  };
};
const mapStateToProps = (state) => ({
  
  layouts:state.layouts
  
});
const mapDispatchToProps = (dispatch) => ({
 change: (n) => dispatch(changelayout(n)),
 
 

});
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);


