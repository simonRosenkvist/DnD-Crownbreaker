
Players = function() {

	Players.prototype.retrieve = function() {
		var list = [
			{
				name: 'Aurelius',
				race: 'Half elf',
				title: 'Totally not a necromancer!',
				description: 'Likes studying and diseases. Also looks super weak and sickly. Played by Josef',
				notes: 'Kind of a smart individual.',
				faction: 'Player',
				image: 'img/players/aurelius.jpg'
			},
			{
				name: 'Brother Dolzan',
				race: 'Wood elf',
				title: 'Agent',
				description: 'Not one for complex tasks, but very nimble both in and out of combat. Played by Alex (USA)',
				notes: 'Carrying a peace treaty, and is employed by the Sunforgers',
				faction: 'Player',
				image: 'img/players/dolzan.jpg'
			},
			{
				name: 'Ciri',
				race: 'Human',
				title: '',
				description: 'Seems to be traveling time and space almost at random. Claims to be pursued by someone and wielding equipment never seen before.',
				notes: 'Seems to know how to teleport without using spell slots, and mentioned someone by the name of Geralt.',
				faction: 'Player',
				image: 'img/players/ciri.jpg'
			},
			{
				name: 'Jasper',
				race: 'Tiefling',
				title: 'Sorcerer',
				description: 'Red and charismatic and often in a happy demenor. Played by Gasper',
				notes: 'Insinuated large destiny.',
				faction: 'Player',
				image: 'img/players/jasper.jpg'
			},

			{
				name: 'Jolvic',
				race: 'Spirit',
				title: 'Servant',
				description: 'A spirit stuck in an iron crown with 12 slim spires and dark gems.',
				notes: 'Seems to be a former servant of house Bracovaro',
				faction: 'Player',
				image: 'img/players/jolvic.jpg'
			},
			
			{
				name: 'Julius Gaevus',
				race: 'Human',
				title: 'Sergeant',
				description: 'Average frame, but a deadly combatant. Also seems to have a hard time staying dead. Played by Alex (SWE)',
				notes: 'Seems to have a hard time staying dead.',
				faction: 'Player',
				image: 'img/players/julius.jpg'
			},

			{
				name: 'Kovix',
				race: 'Dragonborn',
				title: 'Professor',
				description: 'A red dragonborn with great intelligence mostly used to cure disease and treat injuries.',
				notes: 'Might be dealing with demons/devils?',
				faction: 'Player',
				image: 'img/players/kovics.jpg'
			},

		];
		Players.prototype.assemble(list);
	};

	Players.prototype.assemble = function (playersList) {

		var contactList = document.getElementById('contacts');
		var playersFamilyList = document.createElement('ul');
		var playersFamilyTitle = document.createElement('h2');
			
			playersFamilyTitle.innerHTML = 'Players & their NPC´s';
			playersFamilyTitle.addEventListener('click', Main.hideParentLi);

			playersFamilyList.classList.add('family-list');
			playersFamilyList.appendChild(playersFamilyTitle);


			for (let i = 0; i < playersList.length; i++) {
				var listItem, div, textDiv, imgDiv, label, name, race, description, notes, faction, image, toggle;

					listItem = document.createElement('li');
					div = document.createElement('div');
					textDiv = document.createElement('div');
					imgDiv = document.createElement('div');
					name = document.createElement('h4');
					label = document.createElement('span');
					title = document.createElement('h4');
					race = document.createElement('span');
					description = document.createElement('span');
					notes = document.createElement('span');
					faction = document.createElement('span');
					image = document.createElement('div');
					toggle = document.createElement('div');
					list = document.createElement('div');

					div.classList.add('npc');
					textDiv.classList.add('npc-text');
					textDiv.classList.add('hidden');
					imgDiv.classList.add('npc-img-div');
					imgDiv.classList.add('hidden');
					listItem.classList.add('hidden');

					name.classList.add('super-visible');
					name.classList.add('name');
					label.classList.add('label');

					description.classList.add('description');
					faction.classList.add('faction');
					race.classList.add('race');

					toggle.classList.add('toggle');
					toggle.addEventListener('click', Main.toggleContactView);

					list.classList.add('list');
					list.addEventListener('click', Main.addToList);

					image.classList.add('portrait');
					image.style.backgroundImage = 'url('+playersList[i].image+')';

					name.innerHTML = playersList[i].name;
					label.innerHTML = playersList[i].name;
					title.innerHTML = '<b>Title: </b>' + playersList[i].title;
					race.innerHTML = '<b>Race: </b>' + playersList[i].race;
					description.innerHTML = '<b>Description: </b>' + playersList[i].description;
					notes.innerHTML = '<b>Notes: </b>' + playersList[i].notes;
					faction.innerHTML = '<b>Faction: </b>' + playersList[i].faction;
					list.innerHTML = '<i class="fas fa-list-alt"></i>';
					toggle.innerHTML = '<i class="fas fa-caret-square-down"></i>';
					image.src = playersList[i].image;

					div.appendChild(label);
					div.appendChild(toggle);
					imgDiv.appendChild(image);
					textDiv.appendChild(list);
					textDiv.appendChild(title);
					textDiv.appendChild(name);
					textDiv.appendChild(race);
					textDiv.appendChild(faction);
					textDiv.appendChild(description);
					textDiv.appendChild(notes);
					div.appendChild(imgDiv);
					div.appendChild(textDiv);
					listItem.appendChild(div);

					playersFamilyList.appendChild(listItem);

			}

			contactList.appendChild(playersFamilyList);
	}
}