// Import the React library
import React from "react";

// Import the generated hook from our RTK Query API slice
import { useFetchPlayersQuery } from "../../api/puppyBowlApi";

// Import the CSS styles for this component
import "../../../src/index.css";

// Define a new React component
const Players = () => {
  // Use the generated hook to fetch data from the API
  // When the component is first rendered, it will start the API fetch
  // It will re-render each time the fetch status changes (e.g., "loading", "data arrived", "error")
  const { data = {}, error, isLoading } = useFetchPlayersQuery();

  // Show a loading message while data is being fetched
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Show an error message if the fetch failed
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // Show the fetched data after it has arrived
  return (
    <div className="players">
      {/* Map through the data array and generate a div for each player */}
      {data.data.players.map((player) => (
        // Use the player's ID as the key for this div
        <div key={player.id} className="player-card">
          {/* Display the player's image, with the player's name as alt text */}
          <img src={player.imageUrl} alt={player.name} />
          <div className="player-details">
            <h2>{player.name}</h2>
            <p>Breed: {player.breed}</p>
            <p>Status: {player.status}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

// Export the component so it can be imported and used in other files
export default Players;
