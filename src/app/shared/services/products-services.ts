export async function fetchProducts() {
  const res = await fetch("https://fakestoreapi.com/products");
  if (!res.ok) throw new Error("Erro ao buscar produtos");
  return res.json();
}

export async function addProduct(newProduct: any) {
  const res = await fetch("https://fakestoreapi.com/products", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newProduct),
  });
  return res.json();
}

export async function updateProduct(updatedProduct: any) {
  const res = await fetch(
    `https://fakestoreapi.com/products/${updatedProduct.id}`,
    {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedProduct),
    }
  );
  return res.json();
}

export async function deleteProduct(id: number) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`, { method: "DELETE" });

  return res.json();  
}

export async function fetchCategories() {
  const res = await fetch("https://fakestoreapi.com/products/categories");
  if (!res.ok) throw new Error("Erro ao buscar categorias");
  return res.json();
}
