

function addTask(){
	const newTask = document.createElement('li')
	const tasklist = document.getElementById('taskList')
	taskList.appendChild(newTask)
	newTask.textContent = document.getElementById('taskInput').value //whatever we are writing in the inputbox it will be visible
	document.getElementById('taskInput').value="" //the input box will be empty after we added the value
	delTask(newTask)

}
function delTask(newTask){
	const deleteButton = document.createElement('button')
	deleteButton.textContent = 'Delete'
	newTask.appendChild(deleteButton)
	deleteButton.onclick = function(){
		newTask.remove()
	}
}
