import React from "react"
import "../../styles/partials/_posts.scss"
import PostCard from "../cards/PostCard"

interface PostsGridProps {
  category?: string
  show: number
  currentPost: string
}

const PostsGrid: React.FC<PostsGridProps> = ({ show = 6, category, currentPost }) => {
  // const {
  //   blog: { entries },
  // } = useStaticQuery(graphql`
  //   query blogQuery {
  //     blog {
  //       entries {
  //         ... on blog_blog_blog_Entry {
  //           id
  //           entryContent
  //           siloCategory {
  //             slug
  //             title
  //           }
  //           featuredImage {
  //             filename
  //             extension
  //           }
  //           shortDescription
  //           postDate
  //           dateUpdated
  //           slug
  //           title
  //           status
  //         }
  //       }
  //     }
  //   }
  // `)
  return (
    <>
      {/* {entries.filter(entry => entry.id !== currentPost).length > 1 && (
        <aside className="read-more" aria-labelledby="read-more__title">
          <div className="container">
            <h3 id="read-more__title">Read similar posts</h3>
            <div className="posts-grid">
              <div className="row gap--md">
                {category === "recent" ? (
                  <>
                    {entries.map((node, index) => {
                      if (index < show && node.id !== currentPost) {
                        return (
                          <div className="col-sm-6 col-md-4">
                            <PostCard href={node.slug} category={node.siloCategory[0].slug.toLowerCase()} post={node} />
                          </div>
                        )
                      }
                    })}
                  </>
                ) : (
                  <>
                    {entries
                      .filter(node => node.siloCategory[0].slug.toLowerCase() === category)
                      .map((node, index) => {
                        if (index < show && node.id !== currentPost) {
                          return (
                            <div className="col-sm-6 col-md-4">
                              <PostCard
                                href={`https://mindtrust.netlify.app/blog/${node.slug}`}
                                category={node.siloCategory[0].slug.toLowerCase()}
                                className="card shadow--four p-none"
                                post={node}
                              />
                            </div>
                          )
                        }
                      })}
                  </>
                )}
              </div>
            </div>
          </div>
        </aside>
      )} */}
      <div></div>
    </>
  )
}

export default PostsGrid
