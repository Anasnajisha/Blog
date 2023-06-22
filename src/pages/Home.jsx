import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import  Container  from 'react-bootstrap/Container';
import { useState, useEffect } from 'react';

export default function Home() {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        getData();

    },[]);

    const getData = async () => {
        try {
            const incomingData = await fetch(
                "https://jsonplaceholder.typicode.com/posts"
            );
            const formattedData = await incomingData.json();
            setBlogs(formattedData);
            console.log(formattedData);
            } catch (error) {
                console.log(error);
            }
        };
  return (
    <div>
                <h1 className="head" style={{ color: 'green', textAlign: 'center' }}>Blogs</h1>

        <Container>
       

        {blogs.map((blog, i) => {
          return (
            <Card key={i} className="card">
              <Card.Body>
              <Card.Title>Blog number {i+1}</Card.Title>
              <hr />
                <Card.Title>{blog.title}</Card.Title>
                <Card.Text>{blog.body}</Card.Text>
                <Button style={{backgroundColor: 'red', color: 'white'}}>Read more details</Button>
              </Card.Body>
            </Card>
          );
        })}
            
    </Container>
  
    </div>
  );
}

      
 
