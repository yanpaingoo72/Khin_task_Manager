import { addList, tasks } from "./list.js";

const initialRender = () => {
    // console.log("i'm pre");
    tasks.forEach((task) => addList(task))
        
}
export default initialRender;