export interface Task {
    name: string;
    isChecked: boolean;
    children: Task[];
}
