export const fetchDataByslug = async slug => {
  // http://reactwordpress.onlinewebshop.net/wp-json/wp/v2/
  const res = await fetch(
    `https://public-api.wordpress.com/wp/v2/sites/aflamnote.wordpress.com/${slug}`
  );
  const Headers = res.headers;
  console.log(Headers.get('X-WP-TotalPages'));

  if (res.status !== 200) {
    throw new Error("Status isn't OK");
  }

  const data = await res.json();

  if (data.length === 0) {
    throw new Error('There is No data!');
  }

  return data;
};

export const fetchCategories = () => fetchDataByslug('categories?per_page=20');
export const fetchPosts = () => fetchDataByslug('posts');
