const BASE_URL = "http://localhost:5000/api";

export async function createPost(data) {
  console.log("Calling POST:", `${BASE_URL}/posts`);
  console.log("Payload:", JSON.stringify(data, null, 2));

  const response = await fetch(`${BASE_URL}/posts`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  console.log("Status:", response.status);

  if (!response.ok) {
    const err = await response.text();
    console.error("Error:", err);
    throw new Error(err || "Failed to create post");
  }

  const result = await response.json();
  console.log(" Success:", result);
  return result;
}
