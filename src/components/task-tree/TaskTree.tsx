import React, { useReducer, useEffect, useCallback } from 'react';
import { Task } from '../../types/Task';
import { TaskComponent } from '../task/TaskComponent';
import './task-tree.css';

interface TaskTreeProps {
    tasks: Task[];
}

type Action = { type: 'TOGGLE_CHECK'; task: Task } | { type: 'SET_TASKS'; tasks: Task[] };

const taskReducer = (state: Task[], action: Action): Task[] => {
    switch (action.type) {
        case 'TOGGLE_CHECK': {
            const toggleTask = (tasks: Task[]): Task[] => {
                return tasks.map(t => {
                    if (t.name === action.task.name) {
                        return { ...t, isChecked: !t.isChecked };
                    }
                    return { ...t, children: toggleTask(t.children) };
                });
            };
            return toggleTask(state);
        }
        case 'SET_TASKS': {
            return action.tasks;
        }
        default:
            return state;
    }
};

const TaskTree = ({ tasks }: TaskTreeProps) => {
    const [state, dispatch] = useReducer(taskReducer, tasks);

    const handleCheck = useCallback((task: Task) => {
        dispatch({ type: 'TOGGLE_CHECK', task });
    }, []);

    useEffect(() => {
        dispatch({ type: 'SET_TASKS', tasks });
    }, [tasks]);

    const getSelectedTasks = (tasks: Task[]): Task[] => {
        return tasks.reduce((acc, task) => {
            if (task.isChecked) {
                acc.push(task);
            }
            if (task.children.length > 0) {
                acc.push(...getSelectedTasks(task.children));
            }
            return acc;
        }, [] as Task[]);
    };

    const selectedTasks = getSelectedTasks(state);

    return (
        <div className="task-tree-container">
            <div className="task-list">
                {state.map((task, index) => (
                    <TaskComponent key={index} task={task} onCheck={handleCheck} />
                ))}
            </div>
            <div className="selected-tasks">
                <h3>Selected Tasks</h3>
                <ul>
                    {selectedTasks.map((task, index) => (
                        <li key={index}>{task.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default TaskTree;
