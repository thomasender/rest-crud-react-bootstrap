import { useEffect, useState } from 'react'
import axios from 'axios'
import { Post } from '../types'
import Modal from 'react-bootstrap/Modal';
import { JSON_SERVER_BASE_URL } from '../constants';
import { Button } from 'react-bootstrap';

export const EditPost = ({ postId, onEditComplete }: {postId?: number, onEditComplete: () => void}) => {
    const [postToUpdate, setPostToUpdate] = useState<Post | undefined>()
    useEffect(() => {
        if(!postId) { 
            return
        }
        const fetchPost = async () => {
            const response = await fetch(`${JSON_SERVER_BASE_URL}/posts/${postId}`)
            const data = await response.json()
            setPostToUpdate(data)
        }
        fetchPost()
    }, [postId])

    const handleHide = () => {
       onEditComplete()
    }

    const onInput = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if(!postToUpdate){ 
            return
        }
        const { name, value } = event.target
        setPostToUpdate({ ...postToUpdate, [name]: value })
    }

    const onSave = async () => {
        try {
            await axios.put(`${JSON_SERVER_BASE_URL}/posts/${postId}`, postToUpdate)
            setPostToUpdate(undefined)
            onEditComplete()
        } catch (error) {
            console.error("Error updating post", error)
        }
    }

    if(!postToUpdate) {
        return null
    } 
  return (
    <Modal show={!!postToUpdate && !!postId} onHide={handleHide}>
        <Modal.Dialog >
            <Modal.Body className="d-flex flex-column gap-4 mb-4">
                    <input type="text" name="title" value={postToUpdate.title} onChange={onInput} />
                    <textarea name="content" value={postToUpdate.content} onChange={onInput} />
            </Modal.Body>
            <Modal.Footer className="d-flex flex-row gap-2">
                <Button variant="secondary" onClick={handleHide}>Close</Button>
                <Button variant="primary" onClick={onSave}>Save changes</Button>
            </Modal.Footer>
    </Modal.Dialog>
    </Modal>
  )
}
