function initialSpace() {
	var space = document.getElementById('space');
	space.style.transitionProperty = 'opacity';
	space.style.transitionDelay = '1s';
	space.style.opacity = '1';
	space.style.transitionDuration = '4s';
	updateSpace('space','lessonNotes');
}

function updateSpace(updateId, getId) {
	document.getElementById(updateId).innerHTML = document.getElementById(getId).innerHTML;
}

function showTeacherPicture(name) {
	document.getElementById('teacherPic').src = 'images/' + name + '.jpg';
	document.getElementById('teacherBio').innerHTML = 	document.getElementById(name + 'Bio').innerHTML

}




