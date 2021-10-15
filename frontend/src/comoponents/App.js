import React, { useState } from 'react';
import  ReactDOM  from "react-dom";
import Home from './Home';
import { Button, Header,Segment } from 'semantic-ui-react'
import styled from 'styled-components'
import Formbox from './Form';
import { UserProvider } from './stateprovider';
const Container = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
`

const App = () => {
    const [addbtn, setAddbtn] = useState(false);
    const togoler = () => {
        if (!addbtn) {
            setAddbtn(true)
        } else {
            setAddbtn(false)
        }
    }
    console.log(addbtn)
    return (
        <div>
            <UserProvider>
            <Segment clearing>
                <Header as='h4' floated='right'>
                        <Button onClick={togoler}>
                            {addbtn?`Close`:`Add`}
                        </Button>
                    
                </Header>
                <Header as='h2' floated='left'>
                    Moments
                </Header>
            </Segment>
            
            <Container>
                    <Formbox tg={addbtn}/>
                    <Home />
            </Container>
            </UserProvider>
           
        </div>
    );
};


ReactDOM.render(<App/>,document.getElementById('root'))
export default App;