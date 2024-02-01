export async function fetchCars() {
  const headers = {
    'X-RapidAPI-Key': 'ba1b4faeebmsh63d255d8022ebb4p171dcejsnd0fe154866fb',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
  }

  const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
    headers: headers,
  });

  const result = await response.json();

  return result;
}