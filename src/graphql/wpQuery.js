export async function getPosts() {
  const response = await fetch("https://blog.lunardigital.ca/graphql", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `{
        posts {
          edges {
            node {
              slug
              title
              uri
              content
            }
          }
        }
      }`,
    }),
  });
  const { data } = await response.json();
  return data;
}

export async function getCategories() {
  const response = await fetch("https://blog.lunardigital.ca/graphql", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `{
        posts {
          edges {
            node {
              categories {
                nodes {
                  name
                  slug
                }
              }
            }
          }
        }
      }`,
    }),
  });
  const { data } = await response.json();
  return data;
}
