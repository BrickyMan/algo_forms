let cpyBtn = document.querySelector('#copyBtn');

let parentsFeedback = ['Здравствуйте, родители! 😊\nСегодня прошел ', ' урок курса. Тема занятия: ', '\n\n🔹 На занятии ребята: ', '\n\n🔺 Домашнее задание: ', '\n\n🔸 Тема следующего урока: ', '\n\nПри возникновении вопросов или сложностей с д/з, пишите в чат или личные сообщения.\n\nС уважением ', ' преподаватель школы программирования "Алгоритмика" 💻'];

cpyBtn.onclick = () => {
	let inputs = document.querySelectorAll('input'),
		hiddenTextarea = document.querySelector('#hiddenTextarea'),
		toCopy = '';
	// console.log(inputs.length);
	for (let i = 0; i < parentsFeedback.length; i++) {
		// if (!i.value)
		console.log(parentsFeedback[i]);
		if (parentsFeedback[i])
			toCopy += parentsFeedback[i];
		// console.log(inputs[i].value, i);
		if (i < inputs.length)
			toCopy += inputs[i].value;
	}
	hiddenTextarea.value = toCopy;
	console.log(toCopy);
	hiddenTextarea.select();
	document.execCommand('copy');
}