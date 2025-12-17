async function loadData() {
  try {
    const response = await fetch('./json.json');
    const jsonData = await response.json(); // Parses the response into a JS object
    console.log(jsonData);
  } catch (error) {
    console.error('Error fetching JSON:', error);
  }
}

loadData();