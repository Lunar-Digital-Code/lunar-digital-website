export async function query() {
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
            }
          `,
    }),
  });
  const { data } = await response.json();
  return data;
}
