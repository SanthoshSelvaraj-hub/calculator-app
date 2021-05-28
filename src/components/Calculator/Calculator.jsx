import React,{ Component } from "react";
import './Calculator.css'


class Calculator extends Component{
    
    render(){
        return (
            <div>
                <KeyPad />
            </div>
        );
    }
}

class KeyPad extends Component{

    constructor(){
        //this.state.counter wont work if dont use super
            super();
            this.state = {
            value: 0,
            ans: 0,
            prev: 0
            }
            this.pressed = this.pressed.bind(this)
            this.operation = this.operation.bind(this)
        }
    
    render(){
        return(
            <div className="keyPad">
                <span className="value">{this.state.value}</span>
                <span className="display">={this.state.ans}</span>
                <div className="keyPadRow">
                    <Key by="1" pressedMethod={this.pressed} />
                    <Key by="2" pressedMethod={this.pressed}/>
                    <Key by="3" pressedMethod={this.pressed}/>
                </div>
                <div className="keyPadRow">
                    <Key by="4" pressedMethod={this.pressed}/>
                    <Key by="5" pressedMethod={this.pressed}/>
                    <Key by="6" pressedMethod={this.pressed}/>
                </div>
                <div className="keyPadRow">
                    <Key by="7" pressedMethod={this.pressed}/>
                    <Key by="8" pressedMethod={this.pressed}/>
                    <Key by="9" pressedMethod={this.pressed}/>
                </div>
                <div className="keyPadRow">  
                    <Operator by="+" operationMethod={()=>this.operation(this.state.value, this.state.prev)}/>
                    <Key by="0" pressedMethod={this.pressed}/>
                    <Operator by="-" operationMethod={()=>this.operation(this.state.value, this.state.prev)}/>
                </div>
            </div>
        );
    }


    pressed(by){
        // console.log(`increment in parent - ${by}`)
        this.setState({
            value: this.state.value + by
        })
    }

    operation(save, prev){
        console.log(prev)
        this.setState({
            ans: Number(save),
            value: Number(prev) + Number(save)
        })

    }

}

class Operator extends Component{

    constructor(){
        //this.state.counter wont work if dont use super
            super();
            this.state = {
                value: 0,
                ans: 0
            }
            this.operation = this.operation.bind(this)
        }

    render(){
        return(
            <div className="operator">
                <button onClick={()=>this.operation(this.state.value)}>{this.props.by}</button>
            </div>
        );
    }

    operation(save, prev){
        this.setState({
            ans:save
        });
        this.props.operationMethod(this.state.ans, prev);
        
    }

}

class Key extends Component{

    constructor(){
        //this.state.counter wont work if dont use super
        super()
        this.state = {
            value: 0
        }
        this.pressed = this.pressed.bind(this)
    }

    render(){
        return(
            <div>
                <button onClick={()=>this.pressed(this.props.by)}>{this.props.by}</button>
            </div>
        );
    }

    pressed(){
        // return (console.log(by));
        this.setState({
            value: this.props.by
        });
        this.props.pressedMethod(this.props.by);
    }

    
}
    

// Key.propTypes ={
//     by : PropTypes.number 
// }

export default Calculator