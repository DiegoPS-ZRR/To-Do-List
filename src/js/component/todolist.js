import React, { useState } from "react";

export function Todolist() {
	//const {[nombre variable, funcion que modifica la variable ] = useState (valor inicial de la variable)
	// [variable, función]
	const [taskList, setTaskList] = useState("");
	const [list, setList] = useState([]);

	// En las Function se usa el 'handle'para nombrar los eventos (buenas prácticas)
	// Luego del onChange sigue el guardar el taskList en la lista
	// Press ENTER: key Code = 13
	const handleAddTask = event => {
		if (event.keyCode == 13 && list !== "") {
			console.log("prueba");
			//para que no agregue campos en blanco
			let tempList = list;
			setList([...tempList, taskList]);
			setTaskList("");
		}
	};

	//Acá función para borrar las tareas:
	// i = index
	// const handleDeletetaskList: (index: any) => void
	const handleDeleteTask = index => {
		list.splice(index, 1);
		setTaskList([...list]);
	};

	return (
		<div className="container">
			<h1>My Super To Do List</h1>
			<div className="list-container">
				<input
					type="text"
					onChange={event => setTaskList(event.target.value)} //evento se activa cuando cambia el valor
					value={taskList}
					onKeyUp={handleAddTask}
					placeholder="Add your new Super Task"
				/>

				<ul>
					{list.map((taskList, index) => (
						<li key={index}>
							{taskList}
							<span onClick={() => handleDeleteTask(index)}>
								<i className="fas fa-times"></i>
							</span>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
