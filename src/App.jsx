import { useEffect, useState } from 'react'
import './App.css'

// Basic API Integration in react 

function App() {
  const [posts, setPosts] = useState([]);
  const [postDescription, setpostDescription] = useState('');

  async function getPostData(){
    const postApiCall= await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const postJson= await postApiCall.json();
    setPosts(postJson);
  }

  async function getPostDescription(postId){
    const postApiCall= await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    const postJson= await postApiCall.json();
    setpostDescription(postJson);
  }

  useEffect(()=>{
    getPostData();
  },[])

  return (
    <>
      {
        posts.map((post)=> <>
        <div className='post-container'>
          <span>{post.id}:{post.title}</span>
          {
            (postDescription.id ==post.id)?'':<button type="button" onClick={()=>getPostDescription(post.id)}>Get Post data</button>
          }
         
        </div>
        {
          (postDescription.id ==post.id)? <div><b>Here is the description:</b>{postDescription.body}</div>:''
        }
        </>
        )
      }
    </>
  )
}

export default App
