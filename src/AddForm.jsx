import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRef } from 'react';

function AddForm(props) {

    const dispatch = useDispatch();

    const valueRef = useRef()
    console.log(dispatch);
    


    return (
        <div>
            <form action="">
                <input type="text"  ref={valueRef}/>
            </form>
            <button onClick={() => dispatch({ type: 'todos/addTodoItem', payload:  {value: valueRef.current.value}})} >Add</button>
        </div>
    );
}

export default AddForm;