export const fetchDataByslug = async slug => {
  const res = await fetch(`http://localhost/wordpress/wp-json/wp/v2/${slug}`);
  return res.json();
};

export const fetchCategories = () => fetchDataByslug('categories');
export const fetchPosts = () => fetchDataByslug('posts');
