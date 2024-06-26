import PlayerPolarChart from '../../components/player-polar-chart';
import '../page-style.css';
import { ScoringBars } from '../../components/bar-chart/scoring-barchart';
import { CreationBars } from '../../components/bar-chart/creation-barchart';
import { ProgressionBars } from '../../components/bar-chart/progression-barchart';
import { InvolvementBars } from '../../components/bar-chart/involvement-barchart';
import { PassingBars } from '../../components/bar-chart/passing-barchart';
import { DefensiveBars } from '../../components/bar-chart/defensive-barchart';
import PlayerCarouselHeader from '../../components/bar-chart/player-carousel-header';
import { Dropdown } from '@mui/base/Dropdown';
import { MenuButton } from '@mui/base/MenuButton';
import { Menu } from '@mui/base/Menu';
import { MenuItem } from '@mui/base/MenuItem';
import {useState} from 'react';

class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
      this.prev = null;
    }
  }
  
export class DoublyCircularLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
    }
    append(data) {
      const newNode = new Node(data);
  
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
      }
  
      this.tail.next = this.head;
      this.head.prev = this.tail;
    }
}

function PlayerPageBody(props){

    const [view, setView] = useState(0);

    var percentileGroup = view + 1;

    const circularLinkedList = new DoublyCircularLinkedList();
    circularLinkedList.append('Goal Scoring');
    circularLinkedList.append('Chance Creation');
    circularLinkedList.append('Ball Progression');
    circularLinkedList.append('Involvement');
    circularLinkedList.append('Passing');
    circularLinkedList.append('Defensive Work');

    const [selectedNode, setSelectedNode] = useState(circularLinkedList.head);

    const [selectedSeasonNode, setSelectedSeasonNode] = useState(props.seasons.head);

    const handleTabClickRight = () => {
        setSelectedSeasonNode(selectedSeasonNode ? selectedSeasonNode.next : props.seasons.head);
        props.setSeason(selectedSeasonNode ? selectedSeasonNode.next : props.seasons.head);
        props.setSeasonLinkedList(selectedSeasonNode ? selectedSeasonNode.next : props.seasons.head)
    };
    const handleTabClickLeft = () => {
        setSelectedSeasonNode(selectedSeasonNode ? selectedSeasonNode.prev : props.seasons.tail);
        props.setSeason(selectedSeasonNode ? selectedSeasonNode.prev : props.seasons.tail)
        props.setSeasonLinkedList(selectedSeasonNode ? selectedSeasonNode.prev : props.seasons.tail)
    };


    return(
        <div className='chart-body'>
            <PlayerPolarChart player={selectedSeasonNode.data} view={view} setView={setView} />
            <div class="season-menu">
                <div class="position-tabs">
                    <button>Seasons</button>
                </div>
                {props.player.length > 2 && <ul className="carousel-season">
                    <li className="carousel-item greyed-out season" onClick={() => {handleTabClickLeft()}}>{selectedSeasonNode.prev.data.season}</li>
                    <li className="carousel-item selected season">{selectedSeasonNode.data.season}</li>
                    <li className="carousel-item greyed-out season" onClick={() => {handleTabClickRight()}}>{selectedSeasonNode.next.data.season}</li>
                </ul>}
                {props.player.length === 2 && <ul className="carousel-header season">
                    <li className="carousel-item selected season">{selectedSeasonNode.data.season}</li>
                    <li className="carousel-item greyed-out season" onClick={() => {handleTabClickRight()}}>{selectedSeasonNode.next.data.season}</li>
                </ul>}
            </div>
            
            <div className='numbers-container'>
                <div>
                    <PlayerCarouselHeader selectedNode={selectedNode} setSelectedNode={setSelectedNode} circularLinkedList={circularLinkedList}/>
                </div>
                { selectedNode.data === "Goal Scoring" &&
                    <div className='player-statistics'>
                        <ScoringBars stats={selectedSeasonNode.data} percentileGroup={percentileGroup}/>
                    </div>
                }
                { selectedNode.data === "Chance Creation" &&
                    <div className='player-statistics'>
                        <CreationBars stats={selectedSeasonNode.data} percentileGroup={percentileGroup}/>
                    </div>
                }
                { selectedNode.data === "Ball Progression" &&
                    <div className='player-statistics'>
                        <ProgressionBars stats={selectedSeasonNode.data} percentileGroup={percentileGroup}/>
                    </div>
                }
                { selectedNode.data === "Involvement" &&
                    <div className='player-statistics'>
                        <InvolvementBars stats={selectedSeasonNode.data} percentileGroup={percentileGroup}/>
                    </div>
                }
                { selectedNode.data === "Passing" &&
                    <div className='player-statistics'>
                        <PassingBars stats={selectedSeasonNode.data} percentileGroup={percentileGroup}/>
                    </div>
                }
                { selectedNode.data === "Defensive Work" &&
                    <div className='player-statistics'>
                        <DefensiveBars stats={selectedSeasonNode.data} percentileGroup={percentileGroup}/>
                    </div>
                }
            </div>
        </div>
    )
}

export default PlayerPageBody;