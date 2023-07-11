export type ContextPostType = {
  posts: Post[]
  addPost: (title:string, body:string) => void;
  removePost: (id:number) => void;
}

export const ContextPosts = createContext<ContextPostType | null>(null);
export const ContextPostProvider = ({ children } : { children: ReactNode }) => {
  const [posts , dispatch] = useReducer(postReducer, []) 

  const addPost = (title: string, body: string) => {
    dispatch({
      type: 'add', payload: {title,body}
    })
  }

  const removePost = (id: number) => {
    dispatch({
      type: 'remove', payload: {id}
    })
  }

  return(
    <ContextPosts.Provider value={{ posts , addPost, removePost }}>
      {children}
    </ContextPosts.Provider>
  )
}

