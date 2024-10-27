import Swal from "sweetalert2";
import{v4 as uuidv4}from "uuid"
export const tasks = ["to read js", "sleep early" , " eat rice"]
export const updateTaskTotal = () => {
    //   count done
    const lists = document.querySelectorAll(".list");
    taskTotal.innerText = lists.length;
  };
   export const updateDoneTaskTotal = () => {
    //   count done
    const lists = document.querySelectorAll(".list input:checked");
    doneTaskTotal.innerText = lists.length;
  };

   export const createNewList = (currentTask) => {
    const list = listTemplate.content.cloneNode(true);
    list.querySelector(".list").id = "list" + uuidv4();
    list.querySelector(".list-task").innerText = currentTask;
    return list;
  };
  
   export const deleteList = (listId) => {
    const currentList = document.querySelector(`#${listId}`);
    //   console.log("u del");
    // if (window.confirm("are you sure to delete?")) {
    // 
    // }
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      // confirmButtonColor: "#3085d6",
      // cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then ((result) => {
      if(result.isConfirmed){
        currentList.classList.add("animate__animated", "animate__hinge");
          currentList.addEventListener("animationend", () => {
            currentList.remove();
            updateTaskTotal();
            updateDoneTaskTotal();
          });
      }
    })
  };

   export const editList = (listId) => {
    const currentList = document.querySelector(`#${listId}`);
    const list = currentList.closest(".list");
    const listDoneCheck = currentList.querySelector(".list-done-check");
    const listTask = currentList.querySelector(".list-task");
    const listEditBtn = currentList.querySelector(".list-edit-btn");
  
    listEditBtn.setAttribute("disabled", true);
    listDoneCheck.setAttribute("disabled", true);
  
    const currentTask = listTask.innerText;
    const newTextInput = document.createElement("input");
    newTextInput.className =
      " border border-stone-950 font-mono px-2 py-1 w-[175px] focus-visible:outline-none";
    newTextInput.value = currentTask;
    listTask.after(newTextInput);
    newTextInput.focus();
    listTask.classList.add("hidden");
  
    newTextInput.addEventListener("blur", () => {
      listEditBtn.removeAttribute("disabled");
      listDoneCheck.removeAttribute("disabled");
      listTask.innerText = newTextInput.value;
      listTask.classList.remove("hidden");
      newTextInput.remove();
    });
    newTextInput.addEventListener("keyup", (event) => {
      if (event.key === "Enter") {
        listEditBtn.removeAttribute("disabled");
        listDoneCheck.removeAttribute("disabled");
        listTask.innerText = newTextInput.value;
        listTask.classList.remove("hidden");
          newTextInput.remove();
      }
    });
  };
   export const doneList = (listId) => {
    const currentList = document.querySelector(`#${listId}`);
    //   const classToggle = currentList.closest(".list");
    //   console.log("u done");
    const listDoneCheck = currentList.querySelector(".list-done-check");
    const listTask = currentList.querySelector(".list-task");
    const listEditBtn = currentList.querySelector(".list-edit-btn");
  
    listTask.classList.toggle("line-through");
    currentList.classList.toggle("opacity-20");
    currentList.classList.toggle("scale-90");
    currentList.classList.add("duration-200");
  
    if (listDoneCheck.checked) {
      listEditBtn.setAttribute("disabled", true);
    } else {
      listEditBtn.removeAttribute("disabled");
    }
    updateDoneTaskTotal();
  };
   export const addList = (text) => {
    // if (textInput.value.trim()) {
      listGroup.append(createNewList(text));
      textInput.value = "";
      updateTaskTotal();
    // } else {
    //   window.alert("U need to write text!");
    // }
  };
  