import React,{useState,useEffect} from "react";
import {Card,Button,Spinner} from 'react-bootstrap'
import './Posts/Posts.css'
import axios from 'axios'
import {useParams} from 'react-router-dom'

function Post() {
  const [post,setPost]=useState('')

  const {id}=useParams()

  //API calls---->componentDidMount
  useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res=>setPost(res.data))
      .catch((err)=>{
        setPost({})
        console.log(err)})
  },[id])

  return (
    <>
            
            {
                post ? Object.keys(post).length ? (
                  <>
                  <h1>Post No. {post.id}</h1>
                <Card className="post" border="dark" bg="dark" text="light" key={post.id}>
                <Card.Header>User {post.userId}</Card.Header>
                <Card.Body>
                    <Card.Title>{post.title}</Card.Title>
                    <Card.Text>
                    {post.body}
                    </Card.Text>
                    <Button variant="primary" className="post-buttons">Like</Button>
                    <Button variant="primary" className="post-buttons">Comment</Button>
                </Card.Body>
                <Card.Footer className="text-muted">{Math.floor(Math.random()*30+1)} days ago</Card.Footer>
                </Card> </>) :<h1>This post doesn't exist</h1> : (<Spinner animation="border" />)
            }
    </>
  );
}

export default Post;
