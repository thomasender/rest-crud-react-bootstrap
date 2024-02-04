export type Post = {
  id: number
  title: string
  content: string
}

export type PostDraft = Pick<Post, 'title' | 'content'>
