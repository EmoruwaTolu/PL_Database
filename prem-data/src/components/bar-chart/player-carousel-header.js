import React, {useState} from "react";
import './bar.css';
import './carousel-header.css';

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
            console.log(current.data);
            current = current.next;
        } while (current !== this.head);
    }
}
  
  

export default function PlayerCarouselHeader({circularLinkedList, selectedNode, setSelectedNode}){

    const handleTabClickRight = () => {
        setSelectedNode(selectedNode ? selectedNode.next : circularLinkedList.head);
    };
    const handleTabClickLeft = () => {
        setSelectedNode(selectedNode ? selectedNode.prev : circularLinkedList.tail);
    };

    return (
        <ul className="carousel-header">
            <li className="carousel-item greyed-out" onClick={() => {handleTabClickLeft()}}>{selectedNode.prev.data}</li>
            <li className="carousel-item selected">{selectedNode.data}</li>
            <li className="carousel-item greyed-out" onClick={() => {handleTabClickRight()}}>{selectedNode.next.data}</li>
        </ul>
    )
}