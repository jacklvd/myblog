export function discussionGQL(discussionCategoryID: string | undefined) {
    return `{
        repository(owner: "jacklvd", name: "myblog") {
            discussions(first: 100, categoryId: "${discussionCategoryID}") {
              nodes {
                title
                url
                number
                bodyHTML
                bodyText
                createdAt
                lastEditedAt
                author {
                  login
                  url
                  avatarUrl
                }
                 labels(first: 100) {
                  nodes {
                    name
                  }
                }
              }
            }
          }
        }
    `
}

// Single post
export function discussionDetailGql(postId: number | undefined) {
    return `{
      repository(owner: "jacklvd", name: "myblog") {
        discussion(number: ${postId}) {
          title
          bodyHTML
          createdAt
          author {
            login
            url
            avatarUrl
          }
        }
      }
    }`
}
