
var Main = {

	init:function() {
		Main.updateSavedCharacters();

		var dawnwave = new Dawnwave();
			dawnwave.retrieve();

		var duskheart = new Duskheart();
			duskheart.retrieve();

		var falenstinianCommoners = new FalenstinianCommoners();
			falenstinianCommoners.retrieve();

		var players = new Players();
			players.retrieve();	

		var siosians = new Siosians();
			siosians.retrieve();

		var steeltail = new Steeltail();
			steeltail.retrieve();

		var sunforger = new Sunforger();
			sunforger.retrieve();

		var sunsprout = new Sunsprout();
			sunsprout.retrieve();

		var wenchzlash = new Wenchzlash();
			wenchzlash.retrieve();

		var woodElves = new WoodElves();
			woodElves.retrieve();

		var searchBtn = document.getElementById('searchButton');
			searchBtn.addEventListener('click', Main.searchCharacter);

		var map = document.getElementById('map');
			map.addEventListener('click', Main.toggleMap);

	},

	toggleMap:function(e) {
		var map = e.target;

		if (map.id == 'map') {
			map.removeAttribute('id', 'map');
			map.setAttribute('id', 'icon');
		}

		else {
			map.removeAttribute('id');
			map.setAttribute('id', 'map');
		}
	},

	toggleContactView:function(e) {
		var parent = e.target.parentNode.parentNode;
		var targetText = parent.getElementsByClassName('npc-text')[0];
		var targetImg = parent.getElementsByClassName('npc-img-div')[0];
		var label = parent.getElementsByClassName('label')[0];
		var icon = e.target;
			icon.innerHTML = '';

			if (targetText.classList.contains('hidden')) {
				targetText.classList.remove('hidden');
				label.classList.add('hidden');
			} 
			else {
				targetText.classList.add('hidden');
				label.classList.remove('hidden');
			}
			if (targetImg.classList.contains('hidden')) {
				targetImg.classList.remove('hidden');
				label.classList.add('hidden');
			} 
			else {
				targetImg.classList.add('hidden');
				label.classList.remove('hidden');
			}
	},

	searchCharacter:function() {
		var characterName = document.getElementById('search').value;
	
		if (characterName != '' && characterName != undefined && characterName != null) {
			var characters = document.getElementsByClassName('label');
			var charactersArray = [];

			for (let i = 0; i < characters.length; i++) {
				if (characters[i].innerHTML.includes(characterName)) {
					let belongings = characters[i].parentNode.parentNode.parentNode.firstChild.innerHTML;
						charactersArray.push(belongings + ': ' + characters[i].innerHTML);
				}
			}

			var div = document.createElement('div');
			var wrapper = document.getElementById('column-wrapper');
				div.classList.add('search-list');
			let deleteBtn = document.createElement('div');
					deleteBtn.innerHTML = '<i class="fas fa-times"></i>';
					deleteBtn.classList.add('close-cross')
					deleteBtn.addEventListener('click', Main.closeSearch);

					div.appendChild(deleteBtn);

				for (let i = 0; i < charactersArray.length; i++) {
					let paragraph = document.createElement('p');
						paragraph.innerHTML = charactersArray[i];
						div.appendChild(paragraph);
				}
				if (document.getElementsByClassName('search-list').length == 0) {
					wrapper.appendChild(div);
				}
		}
	},

	closeSearch:function(e) {
		let target = e.target.parentNode.parentNode;
			target.parentNode.removeChild(target);
	},

	toggleByName:function(e) {
		//console.log(e);
	},

	hideParentLi:function(e) {
		var parent = e.target.parentNode;
		var lists = parent.getElementsByTagName('li');
		var listStartClasses = lists[0].classList;

			if (listStartClasses.contains('hidden')) {
				for (let i = 0; i < lists.length; i++) {
					lists[i].classList.remove('hidden');
				}
			} 
			else {
				for (let i = 0; i < lists.length; i++) {
					lists[i].classList.add('hidden');
				}
			}
	},

	addToList:function(e) {
		var contact = e.target.parentNode.parentNode;
		var name = contact.getElementsByClassName('name')[0].innerHTML;
		var description = contact.getElementsByClassName('description')[0].innerHTML;
		var faction = contact.getElementsByClassName('faction')[0].innerHTML;
		var race = contact.getElementsByClassName('race')[0].innerHTML;
		var obj = {
			'name' : name,
			'race' : race,
			'description' : description,
			'faction' : faction
		}
		Main.saveList(obj);
	},

	saveList:function(obj) {
		var characterArray = [];
			characterArray.push(obj);

		if (localStorage.getItem('characterList') == null || localStorage.getItem('characterList') == undefined) {
			localStorage.setItem('characterList', JSON.stringify(characterArray));
		} 

		else {
			var characterList = JSON.parse(localStorage.getItem('characterList'));
				characterList.push(obj);
				localStorage.setItem('characterList', JSON.stringify(characterList));
		}

		Main.updateSavedCharacters();
	},

	updateSavedCharacters:function() {
		if (localStorage.getItem('characterList') == undefined || localStorage.getItem('characterList') == null) {
			return;
		}

		var savedCharacters = document.getElementById('saved-characters');
		savedCharacters.innerHTML = '';
		var list = JSON.parse(localStorage.getItem('characterList'));

			for (let i = 0; i < list.length; i++) {
				var div = document.createElement('div');
				var name = document.createElement('h4');
				var description = document.createElement('p');
				var faction = document.createElement('p');
				var race = document.createElement('p');
				var del = document.createElement('div');

					div.classList.add('saved-character-list');
					name.innerHTML = list[i].name;
					race.innerHTML = list[i].race;
					description.innerHTML = list[i].description;
					faction.innerHTML = list[i].faction;
					del.innerHTML = '<i class="fas fa-trash-alt"></i>';
					del.addEventListener('click', Main.removeCharacter);
					del.classList.add('bin');

					div.appendChild(del);
					div.appendChild(name);
					div.appendChild(race);
					div.appendChild(faction);
					div.appendChild(description);

					savedCharacters.appendChild(div);
			}

	},

	removeCharacter:function(e) {
		var character = e.target.parentNode.parentNode;
		var name = character.getElementsByTagName('h4')[0].innerHTML;
		var characterArray = JSON.parse(localStorage.getItem('characterList'));

		for (let i = 0; i < characterArray.length; i++) {
			if (characterArray[i].name == name) {
				characterArray.splice(i, 1);
				localStorage.setItem('characterList', JSON.stringify(characterArray));
				Main.updateSavedCharacters();
			}
		}
	}

}

document.addEventListener('DOMContentLoaded', Main.init);