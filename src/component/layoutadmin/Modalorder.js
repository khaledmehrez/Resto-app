import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import Order from '../layout client/Order'

const Modalorder = () => (
  <Modal trigger={<Button>Show Modal</Button>}>
    <Modal.Header>Select a Photo</Modal.Header>
    <Modal.Content image>
      
      <Modal.Description>
        <Header>Default Profile Image</Header>
        <Order />
      </Modal.Description>
    </Modal.Content>
  </Modal>
)

export default Modalorder