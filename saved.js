$(document).ready(function() {
	$("#reloadconfig").bind("click", function() {
		localStorage.clear();
		//JSON.stringify(localStorage)
		var data = JSON.parse('{"e":"sounds/boing.mp3","y":"sounds/moralisch_verkommene_drecksau.mp3","m":"sounds/donner.mp3","x":"sounds/applaus.mp3","2":"sounds/panicalarm.mp3","u":"sounds/ja_03.mp3","c":"sounds/fanfarre.mp3","7":"sounds/moehrchi-1mal.mp3","j":"sounds/dramabutton.mp3","z":"sounds/liveschalte-schlimm.mp3","3":"sounds/zerdeppern-expolsion.mp3","n":"sounds/donner.mp3","1":"sounds/extremarlarm.mp3","b":"sounds/knarrende_tuer_und_katze.mp3","6":"sounds/moehrchi-alarm.mp3","8":"sounds/moehrchi-2mal.mp3","k":"sounds/drama-dun-dun-dun.mp3","d":"sounds/ueberbrueckung-polka.mp3","s":"sounds/ueberbrueckung-electro.mp3","i":"sounds/nein_05.mp3"}');
		for (var key in data) {
			localStorage[key] = data[key];
		}
		window.location.reload();
	});
});
