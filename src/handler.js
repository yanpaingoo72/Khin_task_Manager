import { addList, deleteList, doneList, editList, tasks } from "./list.js";
import { listGroup, textInput } from "./selector.js";

export const listGroupHandler = (event) => {
  //   const list = event.target.closest(".list");
  //   console.log(list);
  if (event.target.classList.contains("list-del-btn")) {
    deleteList(event.target.closest(".list").id);
  }
  if (event.target.classList.contains("list-edit-btn")) {
    editList(event.target.closest(".list").id);
  }
  if (event.target.classList.contains("list-done-check")) {
    doneList(event.target.closest(".list").id);
  }
};

export const addTaskBtnHandler = () => {
  if (textInput.value.trim()) {
    addList(textInput.value);
  } else {
    alert("u need to write!");
  }
};

export const textInputHandler = (event) => {
  if (event.key === "Enter") {
    if (textInput.value.trim()) {
      addList(textInput.value);
    } else {
      alert("u need to write!");
    }
  }
};

// export const listGroupEnterHandler = (event) => {
//   if (event.key === "Enter") {
//   }
// };

export const delAllHandler = () => {
  if (confirm("are u sure to del all?")) {
    const allLists = listGroup.querySelectorAll(".list");
    // console.log(allLists);
    allLists.forEach((list) => list.remove());
  }
};

export const doneAllHandler = () => {
  if (confirm("are u sure to done all?")) {
    const allLists = listGroup.querySelectorAll(".list");
    allLists.forEach((list) => {
      list.querySelector(".list-done-check").checked = true;
      doneList(list.id);
    });
  }
};
