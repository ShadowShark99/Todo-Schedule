import "./styles.css";
import {Todo} from "./todo";
import {Project} from "./project";
import {compareAsc, format} from "date-fns"
import {DisplayController} from "./display"
import {AddTask} from "./addTask"
import { RootProject } from "./rootProject";
import { SetUp} from "./setup";

//implement add-task button functionality
AddTask();
SetUp();
