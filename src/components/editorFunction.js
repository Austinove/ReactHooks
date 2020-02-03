import React, { useState, useEffect } from 'react';
import {useDispatch} from "react-redux";
import { addRequest} from "../actions";
import{Button} from "reactstrap";
import {connect} from "react-redux";


export const EditorFunction = ({ addRequest, name }) => {
    console.log('gggg',name)
    const [value, setValue] = useState(name);
    const [editorVisible, setEditorVisible] = useState(false);

    const dispatch = useDispatch();
    const toggleEditor = () => {
        dispatch(addRequest(value));
        setEditorVisible(!editorVisible);
    };

    useEffect(()=>{
        document.title = name;
    });

    return (
        <main className="app-center">
            {editorVisible ? (
                <label>
                    {name}
                    <input
                        type='text'
                        value={value}
                        onChange={event => setValue(event.target.value)}
                    />
                </label>
            ) : (
                    <span>{value}</span>
                )}
            <Button color="danger" onClick={toggleEditor}>{editorVisible ? "Done" : "Edit"}</Button>
        </main>
    );
}

const mapStateToProps = (state) => {
    const {name} = state.add
    console.log ('the name', name);
    return {name:name};

}

export default connect(mapStateToProps, { addRequest}) (EditorFunction);