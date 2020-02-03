import React, { Component } from 'react';
import EditorFnc from "./editorFunction";
import { connect } from 'react-redux';
import { addRequest } from "../actions";

class editor extends Component {
    // constructor(props){
    //     super(props);
    //     this.state={
    //         label: "Name",
    //         initilalValue: "Bryan"
    //     }
    // }
    
    
    render() {
        console.log(this.props.name);
        return (
            <div>
                <EditorFnc {...this.props.name}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    const { name } = state.add;
    console.log(name);
    return { name };

}

export default connect(mapStateToProps, { addRequest })(editor) 
