var active = [],
	students = {},
	teachers = {},
	studentHTML = [],
	activeHTML = [],
	teacherHTML = [],
	activeTeacher = "",
	empty = "X";
if (true) {
	/*$.get("/data/students.json").done(function(data){
    // what do I do with the data?
	students = data;
	});
	alert(JSON.stringify(students));*/
	students = {
		"Mark.Garvey": [
			0, 0, 0, 0, 1,
			0, 0, 1, 0, 0,
			0, 0, 1, 0, 1,
			1, 0, 1, 0, 1,
			0, 1, 0, 0, 1,
			0, 1, 1, 1, 0,
			1, 0, 1, 0, 1
		],
		"Blair.Parr": [
			1, 0, 1, 0, 0,
			0, 1, 1, 1, 1,
			0, 1, 0, 0, 1,
			1, 1, 0, 1, 1,
			1, 0, 0, 1, 0,
			0, 0, 0, 0, 0,
			0, 1, 0, 0, 1
		],
		"Joseph.Nicotra": [
			0, 0, 1, 0, 0,
			0, 1, 0, 0, 1,
			1, 1, 0, 0, 1,
			0, 1, 1, 1, 1,
			1, 1, 1, 1, 0,
			0, 1, 0, 1, 0,
			0, 1, 0, 1, 0
		],
		"Hunter.Ford": [
			0, 1, 1, 1, 0,
			1, 0, 1, 0, 0,
			0, 1, 1, 1, 1,
			1, 0, 1, 0, 1,
			0, 1, 0, 0, 0,
			0, 0, 0, 0, 1,
			0, 0, 0, 0, 1
		],
		"Jacob.Arnold": [
			0, 0, 1, 0, 0,
			1, 0, 0, 0, 1,
			0, 1, 1, 0, 1,
			1, 1, 1, 0, 1,
			1, 1, 0, 0, 0,
			0, 1, 0, 1, 0,
			1, 1, 1, 1, 1
		],
		"Casey.Morar": [
			0, 1, 1, 0, 1,
			0, 0, 0, 1, 0,
			0, 1, 0, 1, 1,
			0, 1, 0, 1, 1,
			0, 0, 0, 0, 0,
			1, 0, 1, 0, 0,
			1, 0, 0, 1, 0
		],
		"Nicholas.Jones": [
			0, 0, 0, 0, 1,
			1, 1, 0, 1, 0,
			0, 0, 0, 0, 0,
			0, 1, 0, 1, 1,
			0, 0, 1, 0, 1,
			1, 1, 1, 1, 1,
			0, 0, 0, 0, 0
		],
		"Logan.Tanner": [
			0, 1, 1, 1, 0,
			1, 0, 1, 0, 0,
			0, 0, 0, 0, 0,
			0, 0, 1, 1, 1,
			0, 0, 0, 0, 0,
			0, 1, 0, 1, 1,
			1, 0, 1, 0, 1
		],
		"Erik.Schauer": [
			0, 0, 1, 0, 0,
			1, 0, 1, 1, 1,
			1, 1, 0, 0, 1,
			0, 1, 1, 1, 1,
			1, 1, 1, 0, 1,
			0, 1, 0, 0, 0,
			0, 0, 0, 0, 0
		],
		"Cody.Buckholt": [
			0, 0, 0, 0, 1,
			0, 0, 0, 1, 0,
			0, 0, 1, 0, 0,
			1, 1, 0, 0, 1,
			0, 0, 0, 0, 0,
			1, 1, 1, 1, 1,
			1, 1, 0, 0, 0
		],
		"Abbey.Helterbran": [
			0, 1, 1, 0, 0,
			1, 0, 0, 0, 1,
			0, 1, 0, 1, 0,
			1, 1, 0, 1, 1,
			1, 1, 0, 0, 0,
			1, 0, 1, 0, 1,
			1, 1, 1, 1, 1
		],
		"Gavin.Tatton": [
			1, 0, 1, 0, 0,
			0, 1, 0, 0, 0,
			1, 1, 0, 0, 0,
			0, 0, 1, 1, 0,
			0, 0, 0, 1, 1,
			1, 0, 1, 1, 1,
			0, 1, 0, 0, 0
		],
		"Connor.Thompson": [
			0, 0, 0, 0, 1,
			1, 1, 1, 1, 0,
			0, 0, 0, 0, 0,
			1, 0, 0, 1, 1,
			0, 0, 0, 0, 1,
			1, 1, 1, 0, 0,
			0, 0, 1, 0, 1
		],
		"Julia.Imler": [
			0, 0, 1, 0, 1,
			0, 0, 0, 0, 1,
			1, 1, 0, 0, 0,
			0, 1, 1, 1, 1,
			1, 1, 1, 1, 0,
			0, 0, 0, 0, 0,
			0, 0, 0, 1, 0
		],
		"Ryan.Fisher": [
			1, 0, 1, 0, 0,
			0, 1, 0, 1, 1,
			0, 1, 0, 0, 0,
			0, 1, 1, 1, 1,
			1, 0, 0, 0, 1,
			0, 0, 1, 0, 0,
			0, 0, 1, 0, 0
		],
		"David.Satterwhite": [
			1, 1, 1, 0, 0,
			0, 0, 0, 0, 1,
			0, 1, 0, 1, 0,
			1, 1, 1, 0, 1,
			1, 0, 1, 0, 0,
			1, 1, 1, 1, 1,
			1, 1, 1, 1, 1
		],
		"Jamir.Wilson": [
			0, 1, 0, 0, 0,
			0, 0, 0, 0, 0,
			0, 1, 0, 1, 0,
			1, 0, 1, 1, 0,
			0, 1, 0, 0, 0,
			1, 0, 1, 1, 0,
			1, 0, 0, 1, 0
		],
		"Amelia.Smith-Tine": [
			0, 0, 1, 0, 0,
			1, 0, 0, 0, 1,
			1, 1, 1, 0, 0,
			1, 1, 1, 0, 1,
			1, 0, 0, 1, 0,
			1, 1, 1, 1, 1,
			1, 1, 1, 1, 1
		],
		"Savanna.Zink": [
			0, 0, 0, 0, 0,
			1, 1, 0, 0, 0,
			1, 0, 0, 1, 1,
			0, 1, 1, 0, 1,
			0, 1, 1, 1, 0,
			1, 1, 1, 1, 1,
			1, 1, 1, 1, 1
		],
		"Francesca.Cuzzocrea": [
			0, 0, 1, 0, 0,
			1, 0, 0, 1, 1,
			0, 1, 0, 0, 1,
			1, 1, 0, 1, 1,
			1, 0, 0, 0, 0,
			0, 0, 0, 0, 1,
			0, 1, 1, 0, 0
		],
		"Harrison.Mayer": [
			1, 0, 1, 1, 1,
			0, 0, 0, 0, 0,
			1, 1, 1, 0, 0,
			0, 1, 1, 0, 1,
			0, 0, 0, 1, 0,
			1, 1, 1, 1, 1,
			1, 1, 1, 1, 1
		],
		"Alaa.Al-Awartani": [
			0, 1, 1, 1, 0,
			0, 0, 0, 0, 1,
			1, 1, 1, 1, 1,
			0, 1, 1, 1, 1,
			1, 0, 0, 0, 1,
			0, 1, 0, 0, 0,
			0, 0, 1, 1, 0
		],
		"Peri.Matthews": [
			0, 0, 1, 0, 0,
			0, 1, 0, 0, 1,
			1, 1, 0, 0, 0,
			1, 1, 0, 1, 1,
			1, 0, 1, 0, 0,
			0, 1, 0, 1, 1,
			0, 1, 0, 1, 0
		]
	};
	teachers = {
		/*"Copeland": [
			0, 1, 1, 1, 1,
			1, 1, 1, 1, 1,
			1, 0, 1, 0, 1,
			0, 1, 0, 1, 1,
			1, 1, 1, 1, 1,
			1, 1, 1, 0, 1,
			0, 1, 0, 1, 1
		],
		"Barga": [
			0, 0, 1, 0, 0,
			0, 1, 1, 1, 0,
			1, 1, 1, 1, 1,
			1, 1, 1, 1, 1,
			1, 0, 0, 1, 1,
			1, 1, 1, 1, 1,
			1, 1, 1, 1, 1
		],
		"Clark": [
			0, 1, 1, 1, 1,
			1, 1, 0, 1, 1,
			0, 0, 1, 0, 0,
			0, 0, 0, 1, 0,
			0, 1, 1, 0, 0,
			1, 1, 1, 1, 1,
			1, 1, 0, 1, 0
		],
		"Davis": [
			1, 0, 1, 1, 1,
			1, 1, 0, 1, 1,
			0, 1, 0, 1, 1,
			1, 1, 1, 0, 0,
			1, 1, 0, 0, 0,
			1, 1, 1, 1, 1,
			1, 1, 1, 1, 1
		],
		"Fritz": [
			1, 1, 0, 1, 1,
			1, 1, 1, 1, 1,
			0, 1, 1, 1, 1,
			0, 0, 1, 1, 1,
			1, 0, 1, 1, 0,
			1, 1, 1, 1, 0,
			1, 1, 0, 0, 1
		],
		"Lyskava": [
			1, 1, 0, 1, 1,
			1, 0, 1, 0, 0,
			1, 0, 1, 1, 1,
			0, 0, 1, 0, 1,
			1, 1, 1, 1, 1,
			1, 1, 1, 1, 1,
			1, 1, 1, 1, 1
		],
		"Luft": [
			1, 1, 1, 0, 1,
			1, 1, 1, 1, 1,
			1, 1, 1, 1, 0,
			1, 0, 0, 1, 1,
			0, 1, 1, 1, 1,
			1, 0, 0, 1, 1,
			0, 1, 1, 1, 0
		],
		"Fratangelo": [
			1, 1, 1, 1, 0,
			1, 1, 1, 1, 1,
			1, 1, 1, 1, 1,
			1, 1, 1, 1, 1,
			1, 1, 1, 1, 1,
			1, 1, 1, 1, 1,
			1, 1, 1, 1, 1
		],
		"Pascuzzi": [
			1, 1, 1, 1, 1,
			0, 0, 1, 0, 1,
			1, 1, 0, 1, 1,
			0, 1, 1, 0, 1,
			1, 1, 1, 0, 1,
			1, 1, 1, 1, 1,
			1, 1, 1, 1, 1
		],
		"Strasbaugh": [
			1, 1, 1, 1, 1,
			1, 1, 0, 1, 1,
			1, 1, 1, 0, 1,
			0, 0, 1, 0, 0,
			0, 1, 1, 1, 1,
			1, 1, 0, 1, 1,
			1, 0, 1, 1, 0
		],
		"Mays": [
			1, 1, 1, 1, 1,
			1, 1, 1, 1, 1,
			1, 1, 1, 1, 0,
			1, 1, 1, 1, 1,
			1, 1, 1, 1, 1,
			1, 1, 1, 1, 1,
			1, 1, 1, 1, 1
		],
		"Burns": [
			1, 1, 1, 1, 1,
			1, 1, 1, 1, 1,
			1, 1, 1, 1, 1,
			1, 1, 1, 1, 1,
			1, 1, 1, 1, 1,
			0, 1, 1, 1, 1,
			1, 1, 1, 1, 1
		]*/
	};
	 /*var json = (function () {
		var json = null;
		$.ajax({
			'async': false,
			'global': false,
			'url': "data/students.json",
			'dataType': "json",
			'success': function (data) {
				json = data;
			}
		});
		return json;
	})();
	alert(json);*/
	//alert(JSON.stringify(students));
} else {
	var Http = new XMLHttpRequest(),
		Http1 = new XMLHttpRequest();
	Http.open("GET", "https://script.google.com/macros/s/AKfycbz_kkGXjc7sO8lBefMBXQoy30ClYZO6AceTvCrR-UmKMuYRxbc/exec");
	Http.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			students = JSON.parse(Http.responseText);
			genHTML();
		}
	};
	Http1.open("GET", "https://script.google.com/macros/s/AKfycbx46OmFfJNyuMExGpp-6frOBzHmeJK1FTGMqQBl4ko6shOhb3Y/exec");
	Http1.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			teachers = JSON.parse(Http1.responseText);
			genHTML();
		}
	};
	Http.send();
	Http1.send();
}
// Sort student names alphabetically
Object.keys(students).sort().forEach(function(key) {
	var value = students[key];
	delete students[key];
	students[key] = value;
});

// Sort teacher names alphabetically
Object.keys(teachers).sort().forEach(function(key) {
	var value = teachers[key];
	delete teachers[key];
	teachers[key] = value;
});

// Generate button for each person
function genHTML() {
	studentHTML = [];
	teacherHTML = [];
	activeHTML = [];
	Object.keys(students).map(function(key, index) {
		key = key.split(".");
		// Add html to buttons div
		var html = '<button id="' + key.join(".") + '"onClick="toggle(this);"' + ((active.indexOf(key.join(".")) != -1) ? 'class="selected"' : '') + '>\n<div class="content"><span style="font-size: 1.25vw;">' + key[0].charAt(0).toUpperCase() + key[0].substring(1) + '</span><br><span style="font-size: 0.85vw;">' + key[1].charAt(0).toUpperCase() + key[1].substring(1) + '</span></div></button>';
		studentHTML.push(html);
		if (active.indexOf(key.join(".")) != -1) activeHTML.push(html);
	});
	Object.keys(teachers).map(function(key, index) {
		teacherHTML.push('<button id="' + key + '"onClick="toggle(this);"' + ((activeTeacher.indexOf(key) != -1) ? 'class="selected"' : '') + '>\n<div class="content"><span style="font-size: 1.35vw;">' + ((teachers[key].length > 40) ? teachers[key][teachers[key].length - 1] : "") + " " + key + '</span></div></button>');
	});
	refreshHTML();
}
genHTML();

function toggleTab(str) {
	var list = document.getElementsByClassName("button");
	for (var i = 0; i < list.length; i++) list[i].classList.remove("active");
	list[["students", "selected", "teachers"].indexOf(str)].classList.add("active");
	genHTML();
}

function refreshHTML() {
	// Reset cells
	for (var i = 0; i < 35; i++) {
		var val = "";
		if (i < 5) val = "8:10 - 9:10";
		else if (i < 10) val = "9:10 - 10:10";
		else if (i < 15) val = "10:10 - 11:10";
		else if (i < 20) val = "11:10 - 11:40";
		else if (i < 25) val = "11:40 - 12:30";
		else if (i < 30) val = "1:40 - 2:40";
		else if (i < 35) val = "2:40 - 3:40";
		document.getElementById(i).innerHTML = val;
	}
	switch (document.getElementsByClassName("active")[0].id) {
		case "students":
		case "selected":
			if (document.getElementsByClassName("active")[0].id == "students") {
				document.getElementById("buttons").innerHTML = studentHTML.join("");
			} else {
				document.getElementById("buttons").innerHTML = activeHTML.join("");
			}
			// Fill vals
			Object.keys(students).map(function(objectKey, index) {
				if (active.indexOf(objectKey) != -1) {
					for (var j = 0; j < students[objectKey].length; j++)
						if (students[objectKey][j] == 1) document.getElementById(j).innerHTML = empty;
				}
			});
			break;
		case "teachers":
			document.getElementById("buttons").innerHTML = teacherHTML.join("");
			// Fill vals
			if (activeTeacher != "") {
				for (var j = 0; j < teachers[activeTeacher].length; j++)
					if (teachers[activeTeacher][j] == 1) document.getElementById(j).innerHTML = empty;
			}
			break;
	}
}

function deselectAll() {
	if (document.getElementsByClassName("active")[0].id == "students" || document.getElementsByClassName("active")[0].id == "selected") {
		active = [];
	} else {
		activeTeacher = "";
	}
	var list = document.getElementsByClassName("selected");
	for (var j = 0; j < list.length; j++) {
		list[j].classList.remove("selected");
	}
	genHTML();
}
// Toggle between active & inactive states
function toggle(button) {
	if (document.getElementsByClassName("active")[0].id == "students" || document.getElementsByClassName("active")[0].id == "selected") {
		if (document.getElementById(button.id).classList.contains("selected")) {
			document.getElementById(button.id).classList.remove("selected");
			// Already selected, remove from array
			active.splice(active.indexOf(button.id), 1);
		} else {
			document.getElementById(button.id).classList.add("selected");
			// Not selected, add to array
			active.push(button.id);
		}
	} else {
		if (activeTeacher == button.id) {
			document.getElementById(button.id).classList.remove("selected");
			activeTeacher = "";
		} else {
			if (activeTeacher != "") document.getElementById(activeTeacher).classList.remove("selected");
			document.getElementById(button.id).classList.add("selected");
			activeTeacher = button.id;
		}
	}
	genHTML();
}
// Search
function searchTable() {
	// Loop through buttons in table & hide ones that don't contain query
	var button = document.getElementById("buttons").getElementsByTagName("button");
	for (var i = 0; i < button.length; i++) button[i].style.display = (button[i].id.replace(".", "").toUpperCase().indexOf(document.getElementById("input").value.toUpperCase().replace(/[^A-Z\-]*/g, "")) > -1) ? "" : "none";
}
