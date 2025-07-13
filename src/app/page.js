'use client';
import styles from "./page.module.css";
import { useState, useEffect } from "react";
import { allTodos, addTask, updateTask, deleteTask } from './api';



export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [newTitle, setNewTitle] = useState('');

  useEffect(() => {
    allTodos().then(setTasks);
  }, []);

  const handleAdd = async () => {
    if (!newTitle.trim()) return;
    const task = await addTask({ title: newTitle, completed: false });
    setTasks((prev) => [...prev, task]);
    setNewTitle('');
  };

  const handleToggle = async (task) => {
    try {
      const updated = await updateTask(task.id, { completed: !task.completed });
      setTasks((prev) =>
        prev.map((t) => (t.id === task.id ? updated : t))
      );
    } catch (error) {
      console.error('Failed to update task:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteTask(id);
      setTasks((prev) => prev.filter((t) => t.id !== id));
    } catch (error) {
      console.error('Failed to delete task:', error);
    }
  };
  return (
    <div className={styles.page}>
      <div className={styles.myTitle}>
        <h1>Simple To-Do</h1>
      </div>
      <div className="header">
        <h1>This is a page</h1>
        <p> Welcome to the simple to-do. Remove the clutter and plan out your day.
          This is my testing static page :P
        </p>

       <input value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
        placeholder="New Task..." />
        <button onClick={handleAdd}>Add</button>

      </div>
      <div className="Lists">
        <ul>
          {tasks.map((task)=>(
            <li key={task.id}>
              <label>
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => handleToggle(task)}
                />
                {task.title}
              </label>
              <button onClick={() => handleDelete(task.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
        
    </div>
  );
}
