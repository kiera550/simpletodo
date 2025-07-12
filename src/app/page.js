import Image from "next/image";
import styles from "./page.module.css";
import { allTodos, addTask, updateTask, deleteTask } from './api';

const tasks = await allTodos();
console.log(tasks);

export default function Home() {
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
        {/* <input type="text" id="myInput" placeholder="Title..."></input> */}
      </div>
      <div className={styles.lists}>
        <ul>
          <li>Make coffee</li>
          <li>Make more coffee</li>
        </ul>
      </div>
      <div className={styles.striked}>
        <ul>
          <li>Make coffee</li>
          <li>Make more coffee</li>
        </ul>
      </div>
     
        
    </div>
  );
}
