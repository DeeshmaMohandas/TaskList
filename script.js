let taskList1=[];
function addTask()
{
    const taskInput1=document.getElementById("taskInput");
  const task=taskInput1.value;
    if(task!=='')
    {
        taskList1.push(task);
        console.log(taskList1)
        taskInput1.value='';
    }
    updateTaskList();
}
function updateTaskList()
{
    const taskListUI=document.getElementById("taskList");
    taskListUI.innerHTML='';
    taskList1.forEach((task,index)=>{
        const listItem=document.createElement("li");
        listItem.textContent=`${index + 1}. ${task}`;
        taskListUI.appendChild(listItem);
    })
}
function removeTask()
{
    taskList1.pop();
    updateTaskList();
}