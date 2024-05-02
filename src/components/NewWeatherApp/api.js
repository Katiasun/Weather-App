const url = "https://wft-geo-db.p.rapidapi.com/v1/geo/cities";
export const geoApiOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "f4737137d5msh0f0064da8d233e8p1f1d62jsnc6ed790c62be",
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};

try {
  const response = await fetch(url, options);
  const result = await response.text();
  console.log(result);
} catch (error) {
  console.error(error);
}
