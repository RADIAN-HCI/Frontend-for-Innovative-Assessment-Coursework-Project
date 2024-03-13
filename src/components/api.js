export async function loginPost(postData) {
  const response = await fetch("your-post-api-endpoint", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // Add any additional headers if needed
    },
    body: JSON.stringify(postData),
  });

  if (!response.ok) {
    throw new Error("Failed to submit data");
  }
  return response.json();
}
