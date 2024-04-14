import { TodoList } from "./todo.js";

const newTask = new TodoList()
newTask.addTask('todo')
newTask.listTasks()


const newTask2 = new TodoList()
newTask2.addTask('toread')
newTask2.listTasks()

const newTask3 = new TodoList()
newTask3.addTask('towrite')
newTask3.listTasks()

this.tasks.listTasks()