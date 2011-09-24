keys = {49: "1", 50: "2", 51: "3", 52: "4", 53: "5", 54: "6", 55: "7", 56: "8",
		81: "q", 87: "w", 69: "e", 82: "r", 84: "t", 90: "z", 85: "u", 73: "i",
		65: "a", 83: "s", 68: "d", 70: "f", 71: "g", 72: "h", 74: "j", 75: "k",
		89: "y", 88: "x", 67: "c", 86: "v", 66: "b", 78: "n", 77: "m"};

$(document).keydown(function(e) {
	var keyCode = e.keyCode || e.which,
	keys = {49: "1", 50: "2", 51: "3", 52: "4", 53: "5", 54: "6", 55: "7", 56: "8",
		81: "q", 87: "w", 69: "e", 82: "r", 84: "t", 90: "z", 85: "u", 73: "i",
		65: "a", 83: "s", 68: "d", 70: "f", 71: "g", 72: "h", 74: "j", 75: "k",
		89: "y", 88: "x", 67: "c", 86: "v", 66: "b", 78: "n", 77: "m"};
	
	if(keys[e.keyCode]) {
		if(program == 1) {
			var url = prompt("Bitte URL (OGG / MP3; nicht file:///) eingeben.", $("#player" + keys[e.keyCode]).get(0).src);
			if(url != null & url.length > 0) {
				localStorage.setItem(keys[e.keyCode], url);
				$("#player" + this.id.substr(1)).parent().addClass("filled");
				$("#player" + keys[e.keyCode]).parent().find("#t" + keys[e.keyCode]).get(0).innerHTML = url.substring(url.lastIndexOf('/')+1);
				$("#player" + keys[e.keyCode]).get(0).src = url;
			}
		} else {
			if($("#player" + keys[e.keyCode]).get(0).paused) {
				$("#player" + keys[e.keyCode]).get(0).play();
				$("#s" + keys[e.keyCode]).addClass("playing");
			} else {
				$("#player" + keys[e.keyCode]).get(0).pause();
			}
		}
	}
	
	if(e.keyCode == 32) {
		$("audio").each(function(index) {
			$(this).get(0).currentTime = 0;
			$(this).get(0).pause();
		});
	}
	
	if(e.keyCode == 13) {
		if(program == 1) {
			program = 0;
			$(this).css({color: "black"});
			$(".player").each(function(index) {
				$(this).parent().find(".status").removeClass("playing");
				$(this).parent().find(".status").css({width: "0px"});
			});
		} else {
			program = 1;
			$(this).css({color: "pink"});
			$(".player").each(function(index) {
				$(this).parent().find(".status").addClass("playing");
				$(this).parent().find(".status").css({width: "100%"});
			});
		}
	}
});

$(document).ready(function() {
	$.each(localStorage, function(key, value) {
		if(localStorage.key(key).split("_")[0] != "volume") {
			$("#player" + localStorage.key(key)).get(0).src = localStorage[''+localStorage.key(key)+''];
			$("#player" + localStorage.key(key)).attr("preload", "preload");
			$("#player" + localStorage.key(key)).parent().addClass("filled");
			$("#player" + localStorage.key(key)).parent().find("#t" + localStorage.key(key)).get(0).innerHTML = localStorage[''+localStorage.key(key)+''].substring(localStorage[''+localStorage.key(key)+''].lastIndexOf('/')+1);
		} else {
			$("#v" + localStorage.key(key).split("_")[1]).get(0).value = localStorage[''+localStorage.key(key)+''];
			$("#player" + localStorage.key(key).split("_")[1]).get(0).volume = localStorage[''+localStorage.key(key)+''];
		}
	});
	
	
	$("audio").bind("ended", function() {
		$(this).parent().find(".status").removeClass("playing");
		$(this).get(0).pause();
	});
	$("audio").bind("timeupdate", function() {
		pos = (this.currentTime / this.duration) * 100,
		$(this).parent().find(".status").css({width: pos + '%'});
		var rem = parseInt(this.duration - this.currentTime, 10),
					pos = (this.currentTime / this.duration) * 100,
					mins = Math.floor(rem/60,10),
					secs = rem - mins*60;
		$(this).parent().find(".countdown").text('-' + mins + ':' + (secs < 10 ? '0' + secs : secs));
	});
	
	$("audio").bind("progress", function() {
		var loaded = parseInt(((this.buffered.end(0) / this.duration) * 100), 10);
		$(this).parent().find(".countdown").text(loaded + "%");
		//$(this).parent().find(".status").css({width: loaded + '%'});
	});
	
	$(".player").bind("click", function() {
		if(program == 1) {
			var url = prompt("Bitte URL (OGG / MP3; nicht file:///) eingeben.", $("#player" + this.id.substr(1)).get(0).src);
			if(url != null & url.length > 0) {
				localStorage.setItem(this.id.substr(1), url);
				$("#player" + this.id.substr(1)).parent().addClass("filled");
				$("#player" + this.id.substr(1)).parent().find("#t" + this.id.substr(1)).get(0).innerHTML = url.substring(url.lastIndexOf('/')+1);
				$("#player" + this.id.substr(1)).get(0).src = url;
			}
		} else {
			if($(this).find("audio").get(0).paused) {
				$(this).find(".status").addClass("playing");
				$(this).find("audio").get(0).play();
			} else {
				$(this).find("audio").get(0).pause();
			}
		}
	});
	
	$("input").bind("change", function() {
		if(program == 1) {
		} else {
			$(this).parent().parent().parent().find('#player' + this.id.substr(1)).get(0).volume = this.value;
			localStorage.setItem("volume_" + this.id.substr(1), this.value);
		}
	});
	
	$("a").bind("click", function() {
		if(program == 1) {
		} else {
			$(this).parent().parent().parent().parent().find('#player' + this.id.substr(1)).get(0).pause();
			$(this).parent().parent().parent().parent().find('#player' + this.id.substr(1)).get(0).currentTime = 0;
		}
	});
	
	$("#stop").bind("click", function() {
		$("audio").each(function(index) {
			$(this).get(0).currentTime = 0;
			$(this).get(0).pause();
		});
	});
	
	$("#program").bind("click", function() {
		if(program == 1) {
			program = 0;
			$(this).css({color: "black"});
			$(".player").each(function(index) {
				$(this).parent().find(".status").removeClass("playing");
				$(this).parent().find(".status").css({width: "0px"});
			});
		} else {
			program = 1;
			$(this).css({color: "pink"});
			$(".player").each(function(index) {
				$(this).parent().find(".status").addClass("playing");
				$(this).parent().find(".status").css({width: "100%"});
			});
		}
	});
});
