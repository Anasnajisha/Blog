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

        <Container className ="my-5 bg-lightgreen ">
        {blogs.map((blog, i) => {
          return (
            <Card key={i} className="card">
              <Card.Body>
              <Card.Title>Blog number {i+1}</Card.Title>
              <hr />
                <Card.Title>{blog.title}</Card.Title>
                <Card.Text>{blog.body}</Card.Text>
                <Button style={{backgroundColor: 'black', color: 'white'}}>Read more details</Button>
              </Card.Body>
            </Card>
          );
        })}
            
    </Container>
  
    </div>
  );
}

      
 
