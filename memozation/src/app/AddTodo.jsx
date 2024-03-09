import React, { memo } from 'react'

const AddTodo = ({todo, handleChange, addTodo}) => {
    // Component 'memo' ile kullanilmissa ve bu componente bagli methodlar varsa 'memo' kullanimi tek basina yeterli olmaz. (1);
    console.log('add todo rendered');
  return (
    <>
        <input onChange={handleChange} value={todo} />
        <button onClick={addTodo}>Add Todo</button>
    </>
  )
}

export default memo(AddTodo);