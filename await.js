async function fetchData() {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  try {
    let startTime = performance.now();
    const response = await fetch(
      "http://192.168.2.171:3000/api/p1",
      requestOptions
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.text();
    let endtime = performance.now();
    let executionTime = endtime - startTime;
    console.log(executionTime);

    startTime = performance.now();
    const response2 = await fetch(
      "http://192.168.2.171:3000/api/p2",
      requestOptions
    );
    if (!response2.ok) {
      throw new Error(`HTTP error! Status: ${response2.status}`);
    }
    const result2 = await response2.text();
    endtime = performance.now();
    executionTime = endtime - startTime;
    console.log(executionTime);
  } catch (error) {
    console.log("Error:", error);
  }
}

// Call the async function
fetchData();
