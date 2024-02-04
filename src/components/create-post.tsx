import React, { useState} from 'react'
import axios from 'axios'
import CardBody from 'react-bootstrap/CardBody'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { PostDraft } from '../types'
import { JSON_SERVER_BASE_URL } from '../constants'

export const CreatePost = ({triggerRefetch}: {triggerRefetch: () => void}) => {
const [newPost, setNewPost] = useState<PostDraft>({title: '', content: ''})
  const onInput = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target
    setNewPost({ ...newPost, [name]: value })
  }

  const onCreatePost = async () => {
    if (!newPost || !newPost.title || !newPost.content) {
      alert("Please fill in all fields")
      return
    } else {
      try {
        await axios.post(`${JSON_SERVER_BASE_URL}/posts`, newPost)
        setNewPost({ title: '', content: '' })
        triggerRefetch()
      } catch (error) {
        console.error("Error creating new post", error)
      }
    }
  }
  return (
   <Card>
        <CardBody className="d-flex flex-column justify-content-center gap-3">
          <input type="text" name="title" placeholder="Title" value={newPost.title} onChange={onInput} />
          <textarea placeholder="Content" name="content" value={newPost.content} onChange={onInput} />
          <Button variant="primary" onClick={onCreatePost}>Create New Post</Button>
        </CardBody>
      </Card>
  )
}
