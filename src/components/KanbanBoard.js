import React, { Component } from 'react'
import './KanbanBoard.css'
import KanbanList from './KanbanList'

export default class KanbanBoard extends Component {
    constructor(props) {
        super(props);
        if (localStorage.getItem('lists')) {
            const rawLS = localStorage.getItem('lists');
            const parsedLS = JSON.parse(rawLS);
            this.state = { lists: parsedLS }
        } else {
            this.state = {
                lists: [
                    {
                        title: 'Derrick',
                        id: 0,
                        cards: [{
                            taskText: 'default task card 1',
                            listNumber: 0,
                            timeId: 0
                        },
                        {
                            taskText: 'default task card 2',
                            listNumber: 0,
                            timeId: 1
                        }]
                    },
                    {
                        title: 'Maxwell',
                        id: 1,
                        cards: [{
                            taskText: 'default task card 1',
                            listNumber: 1,
                            timeId: 2
                        },
                        {
                            taskText: 'default task card 2',
                            listNumber: 1,
                            timeId: 3
                        }]
                    },
                    {
                        title: 'Zaza',
                        id: 2,
                        cards: [{
                            taskText: 'default task card 1',
                            listNumber: 2,
                            timeId: 4
                        },
                        {
                            taskText: 'default task card 2',
                            listNumber: 2,
                            timeId: 5
                        }]
                    },
                    {
                        title: 'Sam',
                        id: 3,
                        cards: [{
                            taskText: 'default task card 1',
                            listNumber: 3,
                            timeId: 6
                        },
                        {
                            taskText: 'default task card 2',
                            listNumber: 3,
                            timeId: 7
                        }]

                    }
                ]
            }
        }
    }
    render() {
        const lists = this.state.lists.map((list, index) => (
            <li className='list-wrapper' key={index}>
                <KanbanList {...list} />
            </li>
        ));

        return (
            <div className="board">
                <ul className="lists">
                    {lists}
                </ul>
            </div>
        );

    }
}