import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import "../../styles/partials/_posts.scss"
import NewsCard from "../cards/NewsCard"

interface NewsGridProps {
  category?: string
  show: number
  currentPost: number
}

const NewsGrid: React.FC<NewsGridProps> = ({ show = 4, category, currentPost }) => {
  const {
    taas: {
      news: { results: news },
    },
  } = useStaticQuery(graphql`
    query newsQuery {
      taas {
        news: hubspotBlogPosts(query: { contentGroupId: "38632521615 " }) {
          results
        }
      }
    }
  `)
  let count = 0

  return (
    <>
      {news.filter(entry => entry.id !== currentPost).length > 1 && (
        <aside className="read-more" aria-labelledby="read-more__title">
          <div className="container">
            <h3 id="read-more__title">More News</h3>
            <div className="posts-grid">
              <div className="row gap--md">
                {news.map((item, index) => {
                  if (item.id !== currentPost && item.currentState !== "DRAFT" && count < show) {
                    count++
                    return (
                      <div className="col-sm-6 col-md-4">
                        <NewsCard href={`/${item.slug}`} post={item} />
                      </div>
                    )
                  }
                })}
              </div>
            </div>
          </div>
        </aside>
      )}
    </>
  )
}

export default NewsGrid
