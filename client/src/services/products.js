export async function getAllProducts() {
  const response = await fetch(`http://localhost:3000/api/products`);

  if (!response.ok) {
    console.log("Network response was not ok");

    throw new Error("Network response was not ok");
  }
  const data = await response.json();

  return data;
}
