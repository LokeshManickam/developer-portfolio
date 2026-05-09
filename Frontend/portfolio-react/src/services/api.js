const BASE_URL = import.meta.env.VITE_API_URL;

export const sendContact = async (data) => {
  const res = await fetch(`${BASE_URL}/contact`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) throw new Error("Failed to send");

  return res.json();
};