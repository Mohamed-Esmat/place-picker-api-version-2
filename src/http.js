export async function fetchAvaliablePlaces() {
  const response = await fetch("http://localhost:3000/places");
  const resData = await response.json();

  if (!response.ok) {
    // 400, 500
    const error = new Error(resData.message || "Something went wrong!");
    throw error;
  }
  return resData.places;
}

export async function fetchUserPlaces() {
  const response = await fetch("http://localhost:3000/user-places");
  const resData = await response.json();

  if (!response.ok) {
    // 400, 500
    const error = new Error(resData.message || "Faild to fetch user places!");
    throw error;
  }

  return resData.places;
}

export async function updateUserPlaces(places) {
  const response = await fetch("http://localhost:3000/user-placess", {
    method: "PUT",
    body: JSON.stringify({ places: places }),
    headers: {
      //Telling the backent that the data we are sending is in JSON format
      "Content-Type": "application/json",
    },
  });

  const resData = await response.json();
  if (!response.ok) {
    // 400, 500
    const error = new Error(resData.message || "Faild to update user place!");
    throw error;
  }

  return resData.message;
}
