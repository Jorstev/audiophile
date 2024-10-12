export async function getProductByCategory() {
  const response = await fetch(`http://localhost:8000/products`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();

  return data;
}
