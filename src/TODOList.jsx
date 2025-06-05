

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TODOItem from './TODOItem';

function TODOList({}) {

    const store = useSelector(state => state.todos.data);

    return (
        <>
            {store.map(i => <TODOItem key={i.id} item={i} />)}
            <h1>Amount of tasks - {store.length}</h1>
        </>
    );
}

export default TODOList;