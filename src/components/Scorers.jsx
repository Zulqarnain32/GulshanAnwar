import React, { useEffect, useState } from "react";
import scorerData from "../scorersApi/scorersdata";

const Scorers = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredPlayers, setFilteredPlayers] = useState([]);

    useEffect(() => {
        const results = scorerData.filter(player =>
            player.player.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredPlayers(results);
    }, [searchTerm]);

    const handleSearchChange = event => {
        setSearchTerm(event.target.value);
    };

    return (
        <>
            <div>
                <input
                    type="text"
                    placeholder="Search Player Name"
                    className="search-player"
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
            </div>
            <div className="scorers-component">
                {filteredPlayers.map((player, i) => (
                    <div key={i} className="single-player-score">
                        <div className="goals-count">
                            <h2>{player.player}</h2>
                            <h2 className="color">{player.Goals} ⚽️</h2>
                        </div>
                        <div className="matches-count">
                            <h2>Matches</h2>
                            <h2 className="color">{player.matchPlayed} 🎯</h2>
                        </div>
                    </div>
                ))}
               <h3 className="no-found"> {filteredPlayers.length == 0 ? "No Player Found":""}</h3>
            </div>
        </>
    );
};

export default Scorers;
