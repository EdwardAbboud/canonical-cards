// Fetch data from the API
async function fetchData() {
  const APIendpoint = `https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json`;

  try {
    const response = await fetch(APIendpoint);
    if (!response.ok) {
      const message = `An error has occurred: ${response.status}`;
      throw new Error(message);
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    error.message;
  }
}

export default fetchData;
