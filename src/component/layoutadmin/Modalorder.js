import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import Order from '../layout client/Order'
import Ordercard from '../layout client/Ordercard';
import "./dashboard.css"
const Modalorder = (props) => (
  
  <Modal trigger={<Button>Show Modal</Button>}>
    <Modal.Header>Select a Photo</Modal.Header>
    <Modal.Content image>
    
      <Modal.Description>
        <Header>Default Profile Image</Header>
        <div class="dashboard-container">
        {props.getorders.filter(el=>el[props.b]===props.b).map(el=><Ordercard  orderfood={el} b={props.b} />)}
        </div>
      </Modal.Description>
    </Modal.Content>
  </Modal>
)

export default Modalorder