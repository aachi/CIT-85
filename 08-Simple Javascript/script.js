var m = [
		'Hello',
		'Hola',
		'Bonjour',
		'&#1047;&#1076;&#1088;&#1072;&#1074;&#1089;&#1090;&#1074;&#1091;&#1081;&#1090;&#1077;',
		'&#12371;&#12435;&#12395;&#12385;&#12399;',
		'&#24744;&#22909;',
		'Ciao',
		'Alo',
		'&#1513;&#1500;&#1493;&#1501;'
	],
	i = 0;

function update() {
	document.getElementById('greeting').innerHTML = m[i];
	i++;
	if (i >= m.length) i = 0;
}

update();
setInterval(update, 3000);