$(document).ready(function() {
	$("#reloadconfig").bind("click", function() {
		localStorage.clear();
		//JSON.stringify(localStorage)
		var data = JSON.parse('{"1":"sounds/more-than-source.ogg"}');
		for (var key in data) {
			localStorage[key] = data[key];
		}
		window.location.reload();
	});
});
