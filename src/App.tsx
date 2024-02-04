import { useState } from 'react';
import { CreatePost } from './components/create-post';
import { EditPost } from './components/edit-post';
import { ShowPosts } from './components/show-posts';
import { usePosts } from './hooks/use-posts';

function App() {
  const {posts, triggerRefetch} = usePosts()
  const [postToUpdateId, setPostToUpdateId] = useState<number | undefined>()

  const onEditComplete = () => {
    setPostToUpdateId(undefined)
    triggerRefetch()
  }

  return (
    <div className="d-flex flex-column justify-content-center gap-3 p-4">
      <ShowPosts posts={posts} triggerRefetch={triggerRefetch} setPostToUpdateId={setPostToUpdateId}  />
      <CreatePost triggerRefetch={triggerRefetch} />
      <EditPost postId={postToUpdateId} onEditComplete={onEditComplete} />
    </div>
  )
}

export default App
