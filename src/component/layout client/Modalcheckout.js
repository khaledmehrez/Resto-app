import React from "react";
import { Button, Header, Image, Modal } from "semantic-ui-react";
import { Component } from "react";

class Modalcheckout extends Component  {
    validateachat=()=>{
        alert('yout transaction is completed')
    }
    render(){
        return(
  <Modal
    trigger={
      <button class="ui teal icon left labeled button">
        <i aria-hidden="true" class="cart icon"></i>Checkout
      </button>
    }
  >
    <Modal.Header>Select a Photo</Modal.Header>
    <Modal.Content image>
     
      <Modal.Description>
        <Header>Default Profile Image</Header>
        <div class="ui input">
          <input type="text" placeholder="enter out credit number" />
        </div>
        <button class="ui teal icon left labeled button" onClick={this.validateachat} >
          <i aria-hidden="true" class="cart icon"></i>
          Checkout
        </button>
      </Modal.Description>
    </Modal.Content>
  </Modal>
        )
    }
};

export default Modalcheckout;
