import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Card, Image } from 'semantic-ui-react'
import FlipMove  from 'react-flip-move'

import styled from 'styled-components';
import { UserContext } from './stateprovider';
import Update from './Update';


const Cardholder = styled.div`
    display: flex !important;
    flex-direction: column;
    align-items: center;
    flex: .4;
`
const Btn = styled.button`
padding: 2px;
border-radius: 1px;
color: wheat;
background: red;
width: 40%;
`
const Home = () => {
    const user = useContext(UserContext)
   const [postid,setId]= useState(null)
    const [list, setlist] = useState([])

    
    useEffect(() => {
          axios({
            method: "GET",
            url:"api/moments"
          }).then((res) => {
             setlist(res.data)
          }).then(() => {
            user.setLoad(false)
          })
            .catch((res) => console.error(res))
        
    }, [user.lode])
    // setTimeout(() => {
        
    // },200)
    // user.setLoad(false)
    // console.log(list)
    useEffect(()=>{
        const deleter = () => {
        axios({
            method: 'delete',
            url:`api/crud/${postid}`
        }).then(res => console.log(res))
            .then(()=>user.setLoad(true))
            .catch(err => console.log(err.data))
       
        }
        deleter()
        
    },[postid])
    
    return (
        <div>
             
            
            <Cardholder>
                <FlipMove>
                {list.map((res) => {
                    return (
                        <Card key={res.id } className="cus_card">
                            <Image src={`${res.photo}`} wrapped ui={false} />
                            
                            <Card.Content >
                                <Card.Header>{res.title}</Card.Header>
                                <Card.Meta>
                                    <span className='date'>{ res.created}</span>
                                </Card.Meta>
                                
                                <Card.Description>
                                    
                                    {res.description}
                                    
                                </Card.Description>
                                
                            </Card.Content>
                            <Update title={res.title} description={res.description} id={res.id} />
                            <hr/>
                            <Btn onClick={() => setId(res.id)}>Delete</Btn>
                            
                        </Card>
                        
                    )
                })}
                </FlipMove>
                
            
           </Cardholder>
        </div>
    );
};

export default Home;