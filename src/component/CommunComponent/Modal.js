import React, { Component } from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'

class ModalExampleDimmer extends Component {
  state = { open: false }

  show = (dimmer) => () => this.setState({ dimmer, open: true })
  close = () => this.setState({ open: false })
  
  render() {
    const { open, dimmer } = this.state

    return (
      <div>
        
        <Button onClick={this.show('blurring')}>Show food</Button>

        <Modal dimmer={dimmer} open={open} onClose={this.close}>
          <Modal.Header>Select a Photo</Modal.Header>
          <Modal.Content image>
            
            <Modal.Description>
              <Header>Default Profile Image</Header>
              {this.props.SampleFood}
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button color='black' onClick={this.close}>
              Nope
            </Button>
            <Button
              positive
              icon='checkmark'
              labelPosition='right'
              content="Yep, that's me"
              onClick={this.close}
            />
          </Modal.Actions>
        </Modal>
      </div>
    )
  }
}
export default ModalExampleDimmer;