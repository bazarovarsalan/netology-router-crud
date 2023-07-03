import { Link, useNavigate } from "react-router-dom";
import {  useState } from "react";
import {CreateNewPostProps} from '../types/types'

const CreateNewPost = ({setCheckUpdate}:CreateNewPostProps) => {
    const [content, setContent] = useState('');
    const [isSaving, setIsSaving] = useState(false);
    let id = 0;
    
    const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        setContent(event.target.value);
    }

    const navigate = useNavigate();
  
    const handleToPublishPost = async (event:React.MouseEvent) => {
        event.preventDefault();
        setIsSaving(true)
        await fetch('http://localhost:7070/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({id: id, content:content})
        }).then((_res) => {
            setContent('');
            id += 1;
            navigate('/')
            setCheckUpdate(true)
        })

    }
    

    
  return (
    <> 
    <div className="createPostForm">
        <div className="headerCreatePostForm">
            <a href="#/" className="header-sections-active">
                    Публикация
                </a>
                <a href="#/" className="header-sections">
                    Фото/видео
                </a>
                <a href="#/" className="header-sections">
                    Прямой эфир
                </a>
                <a href="#/" className="header-sections">
                    ...Еще
                </a>
        <Link to="/" className="close">
          <span className="material-icons-outlined">close</span>
        </Link>
        </div>
    </div>
    <div className="inputWrapper">
        <input 
            className="inputCreatePost"
            name="content"
            value={content}
            onChange={handleChange}
            >
            </input>
            <a href="#/" className="smile">
            <span className="material-icons-outlined">emoji_emotions</span>
            </a>
    </div>
        <div className="createForm">
            <button className="btnCreatePostForm" onClick={handleToPublishPost}>
            {isSaving ? 'Публикуется' : 'Опубликовать'}
            </button>
        </div>
    </>
  )
}

export {CreateNewPost}
