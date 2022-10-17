import React, { useCallback, useState } from 'react'
import { MdAdd } from "react-icons/md";
import '../styles/TodoInsert.scss';

function TodoInsert({onInsert}) {
    const [value, setValue] = useState('');
    const onChange = useCallback(e => {
        setValue(e.target.value);
    },[],);
    const onSubmit = useCallback( e => {
        onInsert(value);
        setValue('');
        e.preventDefault();     // submit은 새로고침 유발 -> preventDefault로 방지
    },[value],);
return (
    <form className="TodoInsert" onSubmit={onSubmit}>
        <input
        placeholder='할일을 입력하세요'
        value={value}
        onChange={onChange}
         />
        <button type="subme"> <MdAdd /> </button>
    </form>
  )
}

export default TodoInsert