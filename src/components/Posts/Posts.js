import React,{useState,useEffect} from "react";
import {Card,Button,Spinner} from 'react-bootstrap'
import './Posts.css'
import axios from 'axios'
import {Link} from 'react-router-dom'

function Posts() {
  const [posts,setPosts]=useState([])

  //API calls---->componentDidMount
  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res=>setPosts(res.data))
      .catch(err=>console.log(err))
  },[])

  return (
    <>
      {
        posts.length ===0 ? <Spinner animation="border" /> :
        posts.map((post)=>{
          return (
            <Link className="router-link" to={`/post/${post.id}`}  key={post.id}>
            <Card className="post" border="dark" bg="dark" text="light">
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
            </Card>
            </Link>
          )
        })
      }
    </>
  );
}

export default Posts;
