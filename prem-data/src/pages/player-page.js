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

    // useEffect(() => {
    //     if (player) {
    //       axios.get(`/player/${player.playerName}`)
    //         .then(response => {
    //           setPlayerInfo(response.data);
    //           setSeason(arrayToCircularLinkedList(response.data).head)
    //           setSeasonLinkedList(arrayToCircularLinkedList(response.data))
    //           console.log(response.data[response.data.length - 1].name);
    //         })
    //         .catch(error => {
    //           console.error("Error fetching player data:", error);
    //         });
    //     }
    // }, [player]);
    useEffect(() => {
      if (player) {
          async function fetchData() {
              try {
                  const response = await fetch(`/player/${player.playerName}`);
                  const data = await response.json();
                  setPlayerInfo(data);
                  const linkedList = await arrayToCircularLinkedList(data);
                  setSeason(linkedList.head);
                  setSeasonLinkedList(linkedList);
                  console.log(data[data.length - 1].name);
              } catch (error) {
                  console.error("Error fetching player data:", error);
              }
          }
          fetchData();
      }
  }, [player]);

    if (playerInfo.length === 0) {
        return <p>Loading player data...</p>;
    }
    console.log(player)
    console.log(playerInfo)

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