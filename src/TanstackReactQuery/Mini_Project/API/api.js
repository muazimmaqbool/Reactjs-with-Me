//logic for working with data.json data
const fetchPosts = async (page) => {
  console.log("fetching posts...");
  //here post?_sort==-id basically sorts it from reverse order so when we add a new post it shows on top
  const response = await fetch(`http://localhost:3000/posts?_sort=-id&`);

  if (!response.ok) {
    throw new Error(`Failed to fetch posts. Status: ${response.status}`);
  }

  const postData = await response.json();
  return postData;
};

const fetchPostsByPage = async (page) => {
  console.log("fetching posts by page:", page);
  //here post?_sort==-id basically sorts it from reverse order so when we add a new post it shows on top
  const response = await fetch(
    `http://localhost:3000/posts?_sort=-id&${
      page ? `_page=${page}&_per_page=5` : ""
    }`
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch posts. Status: ${response.status}`);
  }

  const postData = await response.json();
  return postData;
};

const fetchTags = async () => {
  console.log("fetching tags...");
  const response = await fetch("http://localhost:3000/tags");
  const tagsData = await response.json();
  return tagsData;
};

const addPost = async (post) => {
  const response = await fetch("http://localhost:3000/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
  });

  return response.json();
};

export { fetchPosts, fetchTags, addPost, fetchPostsByPage };
