import * as React from "react"
import {getAllBlogPosts} from "../api/client"


const Blog = () => {
  const [blogPosts, setBlogPosts] = React.useState([])

  React.useEffect(() => {
    getAllBlogPosts().then(responseData => {
      let pages = []
      responseData.results.map(function(result){
        let page = {}
        page.title = result.properties.Title.title[0].plain_text
        page.date = result.properties.Date.date.start
        page.location = result.properties.Location.rich_text[0].plain_text
        page.caption = result.properties.Caption.rich_text[0].plain_text
        page.photo = result.properties.Image.files[0].file.url
        pages.push(page)
      })

      setBlogPosts(pages)
    })
  }, [])

  return (
    <div className="content">
      {
        blogPosts.map(function(post, index){
          return (
            <div className="content-box blog-post" key={index}>
              <div className="blog-post-image">
                <div>
                  <img src={post.photo} width="300px" height="225px" />
                </div>
              </div>
              <div className="blog-post-details">
                <div>
                  <div className="blog-post-title">
                    {post.title}
                  </div>
                  <div className="blog-post-caption">
                    {post.caption}
                  </div>
                </div>
                <div>
                  <div className="blog-post-date">
                    {post.date}
                  </div>
                  <div className="blog-post-location">
                    {post.location}
                  </div>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Blog;
