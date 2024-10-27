import {
  addTaskBtnHandler,
  delAllHandler,
  doneAllHandler,
  listGroupHandler,
  textInputHandler,
} from "./handler.js";
import {
  addTaskBtn,
  delAll,
  doneAll,
  listGroup,
  textInput,
} from "./selector.js";

const listener = () => {
  addTaskBtn.addEventListener("click", addTaskBtnHandler);
  listGroup.addEventListener("click", listGroupHandler);
  delAll.addEventListener("click", delAllHandler);
  doneAll.addEventListener("click", doneAllHandler);
  textInput.addEventListener("keyup", textInputHandler);
};
export default listener;
