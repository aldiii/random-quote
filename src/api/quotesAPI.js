const URL =
  "https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json";

const quotesApi = {
  getAllQuotes: async function () {
    const response = await window.fetch(URL, { method: "GET" });
    if (!response.ok) {
      console.log(response.status);
      throw new Error(`Http error: ${response.status}`);
    }
    const quotes = await response.json();
    return quotes;
  },
};
export default quotesApi;
