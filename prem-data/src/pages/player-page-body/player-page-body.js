import PlayerPolarChart from '../../components/player-polar-chart';
import '../page-style.css';
import { ScoringBars } from '../../components/bar-chart/scoring-barchart';
import { CreationBars } from '../../components/bar-chart/creation-barchart';
import { ProgressionBars } from '../../components/bar-chart/progression-barchart';
import { InvolvementBars } from '../../components/bar-chart/involvement-barchart';
import { PassingBars } from '../../components/bar-chart/passing-barchart';
import { DefensiveBars } from '../../components/bar-chart/defensive-barchart';
import PlayerCarouselHeader from '../../components/bar-chart/player-carousel-header';
import {useState} from 'react';

class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
      this.prev = null;
    }
  }
  
class DoublyCircularLinkedList {
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
  
    display() {
        if (!this.head) {
            console.log('Doubly Circular Linked List is empty.');
            return;
        }
    
        let current = this.head;
        do {
            current = current.next;
        } while (current !== this.head);
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
    console.log(selectedNode.data)

    return(
        <div className='chart-body'>
            <PlayerPolarChart player={props.player} view={view} setView={setView} />
            
            <div className='numbers-container'>
                <div>
                    <PlayerCarouselHeader selectedNode={selectedNode} setSelectedNode={setSelectedNode} circularLinkedList={circularLinkedList}/>
                </div>
                { selectedNode.data === "Goal Scoring" &&
                    <div className='player-statistics'>
                        <ScoringBars stats={props.player} percentileGroup={percentileGroup}/>
                    </div>
                }
                { selectedNode.data === "Chance Creation" &&
                    <div className='player-statistics'>
                        <CreationBars stats={props.player} percentileGroup={percentileGroup}/>
                    </div>
                }
                { selectedNode.data === "Ball Progression" &&
                    <div className='player-statistics'>
                        <ProgressionBars stats={props.player} percentileGroup={percentileGroup}/>
                    </div>
                }
                { selectedNode.data === "Involvement" &&
                    <div className='player-statistics'>
                        <InvolvementBars stats={props.player} percentileGroup={percentileGroup}/>
                    </div>
                }
                { selectedNode.data === "Passing" &&
                    <div className='player-statistics'>
                        <PassingBars stats={props.player} percentileGroup={percentileGroup}/>
                    </div>
                }
                { selectedNode.data === "Defensive Work" &&
                    <div className='player-statistics'>
                        <DefensiveBars stats={props.player} percentileGroup={percentileGroup}/>
                    </div>
                }
            </div>
        </div>
    )
}

export default PlayerPageBody;