import React, { Component } from "react";
import { Button, Header, Image, Modal } from "semantic-ui-react";
import {addfoodlistAPi} from "../../api/api"
import { connect } from "react-redux";
class Addfood extends Component  {
    handleChange=(e)=>{
        
        this.setState({[e.target.name]:e.target.value})
    }
    addfoodLIst=(thefood)=>{
        
        console.log("5")
this.props.addfoodLIst(thefood)
    }
    render(){

    return(
  <Modal trigger={<Button>Show Modal</Button>}>
    <Modal.Header>Select a Photo</Modal.Header>
    <Modal.Content image>
      <Image wrapped size="medium" src="/images/avatar/large/rachel.png" />
      <Modal.Description>
        <Header>
        <div class="ui action input">
          <input type="text" name="name" placeholder="Search..." onChange={this.handleChange} />
          <button class="ui button" >enter name</button>
        </div>
        <div class="ui action input">
          <input type="text" name="picture" placeholder="Search..."  onChange={this.handleChange}/>
          <button class="ui button" >enter picture</button>
        </div>
        <div class="ui action input">
          <input type="text" name="price" placeholder="Search..." onChange={this.handleChange}/>
          <button class="ui button" >enter price</button>
        </div>
        <div class="ui action input">
          <input type="text" name="type" placeholder="Search..." onChange={this.handleChange}/>
          <button class="ui button" >enter categorie</button>
        </div>
        <button class="ui button" onClick={()=>this.addfoodLIst(this.state)}>add</button>
        </Header>
      </Modal.Description>
    </Modal.Content>
  </Modal>
    );
    }
};
const mapStateToProps = (state) => ({
  
    
    
 });
 const mapDispatchToProps = (dispatch) => ({
   addfoodLIst: (thefood) => dispatch(addfoodlistAPi(thefood)),
   
  
 });
 export default connect(mapStateToProps, mapDispatchToProps)(Addfood);

