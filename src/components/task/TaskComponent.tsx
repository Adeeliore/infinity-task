import React, { useState, useCallback } from 'react';
import {Task} from "../../types/Task";
import './task-component.css';

interface TaskProps {
    task: Task;
    onCheck: (task: Task) => void;
}

export const TaskComponent = React.memo(({ task, onCheck }: TaskProps) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleCheck = useCallback(() => {
        onCheck(task);
    }, [task, onCheck]);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="task-component">
            <div className="task-header">
                {task.children.length > 0 && (
                    <button className="expand-btn" onClick={toggleExpand}>
                        {isExpanded ? '-' : '+'}
                    </button>
                )}
                <label>
                    <input type="checkbox" checked={task.isChecked} onChange={handleCheck} />
                    {task.name}
                </label>
            </div>
            {isExpanded && task.children.length > 0 && (
                <div className="task-children">
                    {task.children.map((child, index) => (
                        <TaskComponent key={index} task={child} onCheck={onCheck} />
                    ))}
                </div>
            )}
        </div>
    );
});

TaskComponent.displayName = 'TaskComponent';

