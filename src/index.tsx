import React from 'react';
import ReactDOM from 'react-dom/client';
import TaskTree from './components/task-tree/TaskTree';
import { Task } from "./types/Task";

const tasks: Task[] = [
    {
        name: "title1",
        isChecked: true,
        children: [
            {
                name: "title2",
                isChecked: false,
                children: [
                    {
                        name: "title3",
                        isChecked: true,
                        children: [
                            {
                                name: "title4",
                                isChecked: false,
                                children: [
                                    {
                                        name: "title5",
                                        isChecked: true,
                                        children: [
                                            {
                                                name: "title6",
                                                isChecked: false,
                                                children: [
                                                    {
                                                        name: "title7",
                                                        isChecked: true,
                                                        children: [
                                                            {
                                                                name: "title8",
                                                                isChecked: false,
                                                                children: [
                                                                    {
                                                                        name: "title9",
                                                                        isChecked: true,
                                                                        children: [
                                                                            {
                                                                                name: "title10",
                                                                                isChecked: false,
                                                                                children: [
                                                                                    {
                                                                                        name: "title11",
                                                                                        isChecked: true,
                                                                                        children: [
                                                                                            {
                                                                                                name: "title12",
                                                                                                isChecked: false,
                                                                                                children: [
                                                                                                    {
                                                                                                        name: "title13",
                                                                                                        isChecked: true,
                                                                                                        children: []
                                                                                                    }
                                                                                                ]
                                                                                            }
                                                                                        ]
                                                                                    }
                                                                                ]
                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<TaskTree tasks={tasks} />);

