import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Header, Modal } from 'semantic-ui-react'
import { Button, Form } from 'semantic-ui-react'
import styled from 'styled-components'
import { UserContext } from './stateprovider'

const Alert = styled.h3`
color: red;
`

function Update({title,description,id}) {
  const [open, setOpen] = React.useState(false)
  const [titler, setTitle] = useState(title)
    const [photo, setPhoto] = useState(null)
    const [msg,setMsg]=useState('')
 
    const [descriptioner, setDescription] = useState(descriptioner)
    const user = useContext(UserContext)
    const updater = () => {
        const formdata = new FormData()
        formdata.append('title', titler)
        formdata.append('photo', photo)
        formdata.append('description', descriptioner)
        const form = document.querySelector('.form')
        axios({
            method: 'PUT',
            url: `api/crud/${id}`,
            data: formdata,
            //   headers: {
            //     'csrfmiddlewaretoken': csrftoken,
            //   }
        }).then(res=>console.log(res.data))
            .then(() => {
            form.reset()
            setTitle('')
            setPhoto(null)
            setDescription('')
                user.setLoad(true)
                setOpen(false)
                setMsg(null)
        })
            .catch(error => {
                console.log(error.response.data)
                setOpen(true)
                setMsg("error:Input value is not valied or missing")
            })
    }
  return (
    <Modal
      closeIcon
      open={open}
      trigger={<Button color='facebook'>Update</Button>}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
    >
      <Header icon='archive' content='Archive Old Messages' />
      <Modal.Content>
              <Form>  <Alert>{ msg}</Alert>
              <Form.Field>
                <label>title</label>
                      <input onChange={e => setTitle(e.target.value)} placeholder={title} />
              </Form.Field>
              <Form.Field>
                <label>description</label>
                      <input onChange={e => setDescription(e.target.value)} placeholder={title } />
              </Form.Field>
              <Form.Field>
                <label>upload</label>
                <input onChange={e=>setPhoto(e.target.files[0])} type='file' placeholder='photo' />
              </Form.Field>
              <Button  type="submit" >Submit</Button>
            </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button color='red' onClick={() => setOpen(false)}>
           No
        </Button>
              <Button color='green' onClick={() => {
                  updater()
                  
              }}>
           Update
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default Update
