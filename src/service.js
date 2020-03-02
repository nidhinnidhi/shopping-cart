const URL = "https://api.myjson.com/bins/qzuzi";

export const fetchData = async () => {
  try {
    let response = await fetch(URL);
    let data = await response.json();
    return data;
  } catch (error) {
    console.log("something went wrong !!");
  }
};
