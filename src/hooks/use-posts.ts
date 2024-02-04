import {useState, useEffect } from 'react'
import axios from 'axios'
import { Post } from '../types'

export const usePosts = () => {
   const [posts, setPosts] = useState<Post[]>([])
   const [refetch, setRefetch] = useState(0)

   const triggerRefetch = () => {
      setRefetch((c) => c + 1)
   }

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get('http://localhost:3333/posts')
        setPosts(res.data)
      } catch (error) {
        console.error(error)
      }
    }

    fetchPosts()
  }, [refetch])

  return {
    posts, 
    triggerRefetch
  }
}
