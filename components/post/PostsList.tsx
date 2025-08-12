import { currentUser } from "@clerk/nextjs/server"

async function PostsList() {
    const user= await currentUser();
    const posts= await getPosts();
  return (
    <div>
      
    </div>
  )
}

export default PostsList
