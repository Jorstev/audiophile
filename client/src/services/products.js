export async function getAllProducts() {
  const response = await fetch(`http://localhost:3000/api/products`);
  console.log("Data not parsed", response);

  if (!response.ok) {
    console.log("Network response was not ok");

    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  console.log("Real data", data);

  return data;
}
