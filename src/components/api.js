import axios from "axios";
const baseUrl = "http://127.0.0.1:8000/";
export async function loginPost(postData) {
  const response = await fetch(baseUrl + "your-post-api-endpoint", {
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

export async function generatePDF(postData) {
  const response = await fetch(baseUrl + "generate_pdf", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // Add any additional headers if needed
    },
    body: postData,
  });

  if (!response.ok) {
    throw new Error("Failed to submit data");
  }
  return response.json();
}
