import React from 'react';
import { POINT_CONVERSION_COMPRESSED } from 'constants';
import { Z_DEFAULT_STRATEGY } from 'zlib';

//events, click
//keayboard
//state, forceUpdate, setState


export default class Home extends React.Component{

constructor(){

    super();
//keyword
//initiate, mutable
    this.state={
        counter:200,
        name:'name enter',
        frameworks:['React','Redux'],
        show:true
        }
}
//event=> e
increment( e){

    console.log("Event", e);
    //alert('faunction called')
    //Bad
    //this.state.counter++;
    console.log("Console", this.state.counter);


    //force update, trigger react call render
    //BAD
    //keyword
  //  this.forceUpdate();

  ///Good practce
//Async
  this.setState(
      {
          counter:this.state.counter+1
      }
  )

  console.log(" checking getState()");
}



 onNameChange(e){
//target is the real dom element , input
let target= e.target;
console.log('Value is', target.value);

    this.setState(    {
            name: target.value
        } )
 }



onAdd(){
    //BAD:Mutable
    // this.state.frameworks.push(this.state.name)

    //Good:Immutuable
    this.setState({
        frameworks:[...this.state.frameworks, this.state.name]
    } );

    this.setState({
        name:''
    })
}


toggle(){
    this.setState({
        show:!this.state.show
    })
}

render(){

    console.log("Home Render");
    return(

    <div>
            
        <h2>  Home  page showing </h2>

        <p> Counter {this.state.counter}</p>
        <button onClick={ (e)=> this.increment(e)}>
        +1
        </button>

        <br/>
    <input value={this.state.name}
     onChange={ (e) => this.onNameChange(e)}
    />
        <button onClick={() => this.onAdd() } >
                    Add
                </button>


                <button onClick={() => this.toggle() } >
                    {this.state.show?"Hide":"Show"}
                </button>

{this.state.show &&
<ul>
        {
        this.state.frameworks.map(name=>(
            <li key= {name}>{name} </li>

        ))

        }
</ul>
}
    </div>
    )
}

}