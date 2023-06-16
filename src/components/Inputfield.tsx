import React from 'react'
import './style.css';

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>
}

const Inputfield = ({ todo, setTodo }: Props) => {
    return (
        <form className="input">
            <input type="text" placeholder='Enter a task' className='input_box' value={todo} onChange={(e) => setTodo(e.target.value)} />
            <button type="submit" className='input_submit'>Go</button>
        </form>
    )
}

export default Inputfield
