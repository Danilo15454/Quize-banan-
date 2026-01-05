async function loadData() {
  try {
    const response = await fetch('./json.json');
    const jsonData = await response.json(); // Parses the response into a JS object
    console.log(jsonData.questions);
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      console.log(element)
    }
  } catch (error) {
    console.error('Error fetching JSON:', error);
  }
}

loadData();