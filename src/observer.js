import { updateDoneTaskTotal, updateTaskTotal } from "./list";
import { listGroup } from "./selector";

const observer = () => {
  const job = () => {
    updateTaskTotal();
    updateDoneTaskTotal();
  };

  const observeOptions = {
    childList: true,
    subTree: true,
    attributes: true,
  };
  const listObserver = new MutationObserver(job);
  listObserver.observe(listGroup, observeOptions);
};

export default observer;
