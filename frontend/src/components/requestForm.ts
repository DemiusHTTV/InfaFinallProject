interface RequestForm {
  name: string;
  email: string;
  phone: string;
}

export const sendRequest = async (form: RequestForm) => {
  const response = await fetch("/api/request", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(form)
  });

  if (!response.ok) {
    throw new Error("Failed to send request");
  }

  return response.json();
};