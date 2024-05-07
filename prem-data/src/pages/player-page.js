import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import PlayerPageBody from "./player-page-body/player-page-body";
import Taskbar from "../components/taskbar/taskbar";
import { DoublyCircularLinkedList } from "./player-page-body/player-page-body";
import PlayerPageHeader from "./player-page-body/player-page-header";
import axios from 'axios';
import './page-style.css';

function sortSeasons(seasons) {
  return seasons.sort((a, b) => {
      const startYearA = parseInt(a.season.split('-')[0]);
      const startYearB = parseInt(b.season.split('-')[0]);

      if (startYearA === startYearB) {
          const endYearA = parseInt(a.season.split('-')[1]);
          const endYearB = parseInt(b.season.split('-')[1]);
          return endYearA - endYearB;
      }

      return startYearA - startYearB;
  });
}

function arrayToCircularLinkedList(objects) {
  var sortedObjects = sortSeasons(objects);
  const circularLinkedList = new DoublyCircularLinkedList();
  sortedObjects.forEach(object => circularLinkedList.append(object));
  return circularLinkedList;
}

function PlayerPage() {

    const player = useParams();

    const [playerInfo, setPlayerInfo] = useState([]);
    const [season, setSeason] = useState();
    const [seasonLinkedList, setSeasonLinkedList] = useState();

    useEffect(() => {
        // if (player) {
          axios.get(`https://pl-database-1gr2.onrender.com/player/${player.playerName}`)
            .then(response => {
              setPlayerInfo(response.data);
              setSeason(arrayToCircularLinkedList(response.data).head)
              setSeasonLinkedList(arrayToCircularLinkedList(response.data))
            })
            .catch(error => {
              console.error("Error fetching player data:", error);
            });
        // }
    }, [player]);

    if (playerInfo.length === 0) {
        return <p>Loading player data...</p>;
    }

    return(
      <div>
        <Taskbar />
        <div className="player-page">
          <div className="player-page-container">
            <PlayerPageHeader props={season}/>
            <div className="player-page-body">
              <PlayerPageBody player={playerInfo} seasons={seasonLinkedList} setSeasonLinkedList={setSeasonLinkedList} setSeason={setSeason}/>
            </div>
          </div>
        </div>
      </div>
    )
}

export default PlayerPage;