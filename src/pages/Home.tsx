import { useNavigate } from "react-router";
import { PostsList } from "../components/PostsList";
import { HomeProps } from "../types/types";

const Home = ({posts, isLoading, error}: HomeProps) => {

    const navigate = useNavigate();

    const handleReDirect = () => {
        navigate('posts/new');
    }

  return (
    <>
        <div className="createPost">
            <button className="btnCreatePost" onClick={handleReDirect}>
            Создать пост
            </button>
        </div>
        {isLoading ? <div>Loading...</div>
        : posts && <PostsList posts={posts}/>}
        {error && <div>{error}</div>}
    </>

  )
}

export {Home}
