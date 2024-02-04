import axios from 'axios'
import Card from 'react-bootstrap/Card'
import CardBody from 'react-bootstrap/CardBody'
import Button from 'react-bootstrap/Button'
import { JSON_SERVER_BASE_URL } from '../constants'
import { Post } from '../types'

export const ShowPosts = ({posts, triggerRefetch, setPostToUpdateId}: {posts: Post[], triggerRefetch: () => void, setPostToUpdateId: (id: number) => void}) => {
    const onDeletePost =  async (id: number) => {
        try {
            await axios.delete(`${JSON_SERVER_BASE_URL}/posts/${id}`)
            triggerRefetch()
        } catch (error) {
            console.error("Error deleting post", error)
        }
    }

    const onEditPost = (postId: number) => {
        setPostToUpdateId(postId)
    }
  return (
     <ul className="list-unstyled d-flex flex-wrap flex-row justify-content-center align-items-center gap-3 p-0">
        {posts.map((post) => {
          return (
            <Card>
              <CardBody>
                <li key={post.id}>
                  <h2>{post.title}</h2>
                  <p>{post.content}</p>
                  <div className="d-flex flex-row justify-content-between align-items-center gap-2">
                    <Button variant="danger" onClick={() => onDeletePost(post.id)}>Delete</Button>
                    <Button variant="primary" onClick={() => onEditPost(post.id)}>Edit</Button>
                  </div>
                </li>
              </CardBody>
            </Card>
          )
        })}
      </ul>
  )
}
