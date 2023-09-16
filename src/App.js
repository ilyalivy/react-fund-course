import React, { useState, useRef } from 'react';
import Counter from './components/Counter';
import ClassCounter from './components/ClassCounter';
import './styles/App.css';
import PostItem from './components/PostItem';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Javascript 1', body: 'Description'},
        {id: 2, title: 'Javascript 2', body: 'Description'},
        {id: 3, title: 'Javascript 3', body: 'Description'}
    ])
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    
    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            id: Date.now(),
            title,
            body
        }
       setPosts([...posts, newPost])
       setTitle('')
       setBody('')
       
    }

    return (
        <div className="App">
            <form>
                {/* Управляемый компонент */}
                <MyInput
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    type="text" 
                    placeholder='Post name'
                />
                {/* Неуправляемый/Неконтролируемый компонент */}
                <MyInput 
                    value={body}
                    onChange={e => setBody(e.target.value)}
                    type="text" 
                    placeholder='Post description'
                />
                <MyButton onClick={addNewPost}>Create post</MyButton>
            </form>
            <PostList posts={posts} title='JS Posts'/>
        </div>
    );
}

export default App;
