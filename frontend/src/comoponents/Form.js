import React, { useContext, useState } from 'react';
import { Button, Form } from 'semantic-ui-react'
import styled from 'styled-components';
import axios from 'axios'
import { UserContext } from './stateprovider';
const Formholder = styled.div`
   flex: .4;
`
const Formbox = () => {
  const [title, setTitle] = useState('')
  const [photo, setPhoto] = useState(null)
  const [description, setDescription] = useState('')
  const getCookie=(name)=> {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
  const csrftoken = getCookie('csrftoken');
  const user = useContext(UserContext)
  const submiter = () => {
    const formdata = new FormData()
    formdata.append('title', title)
    formdata.append('photo', photo)
    formdata.append('description', description)
    const form = document.querySelector('.form')
    axios({
      method: 'POST',
      url: 'api/post_moment',
      data: formdata,
      headers: {
        'csrfmiddlewaretoken': csrftoken,
      }
    }).then(() => {
      form.reset()
      setTitle('')
      setPhoto(null)
      setDescription('')
      user.setLoad(true)
    })
      .catch(err => console.error(err))
    
  }
    return (
        <Formholder>
            <Form>
              <Form.Field>
                <label>title</label>
                <input onChange={e=>setTitle(e.target.value)} placeholder='title' />
              </Form.Field>
              <Form.Field>
                <label>description</label>
                <input onChange={e=>setDescription(e.target.value)} placeholder='description' />
              </Form.Field>
              <Form.Field>
                <label>upload</label>
                <input onChange={e=>setPhoto(e.target.files[0])} type='file' placeholder='photo' />
              </Form.Field>
              <Button  type="submit" onClick={submiter}>Submit</Button>
            </Form>
        </Formholder>
    );
};

export default Formbox;