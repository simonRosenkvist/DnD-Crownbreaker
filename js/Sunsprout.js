
Sunsprout = function() {

	Sunsprout.prototype.retrieve = function() {
		var list = [
			{
				name: 'Florian Sunsprout',
				race: 'Human',
				title: 'Lord',
				description: 'A striking young nobleman, looks in contrast to many of his peers to have spent long hours working under the hot sun and displays both a tan and a muscular yet slender build.',
				notes: 'A cousin of Octavia Sunsporut he deals with politics on his house bequest, as well as representing the will of the farmers, hunters and loggers around Sunmourn.',
				faction: 'Falenstinian',
				image: 'img/sunsprout/florian.jpg'
			},
			{
				name: 'Julius Sunsprout',
				race: 'Human',
				title: 'Lord',
				description: 'Current head (married in) of the Sunsprout dynasty.',
				notes: 'Born a peasant and merchant Julius never refuses an ear to the common man. Still young but unafraid, both in politics and in face of hard work.',
				faction: 'Falenstinian',
				image: 'img/sunsprout/julius.jpg'
			},
			{
				name: 'Octavia Sunsprout',
				race: 'Human',
				title: 'Lady,',
				description: 'Current matriarc of the Sunsprout dynasty.',
				notes: 'Having recently lost her father and being an only child she shortly thereafter married Julius. Born a noble woman she often refers to her husband when dealing with the day to day needs of her serves.',
				faction: 'Falenstinian',
				image: 'img/sunsprout/octavia.jpg'
			},
			{
				name: 'Pernilla Sunsprout',
				race: 'Human, Founder',
				title: 'Lady, Founder',
				description: 'Dead. A cleaver woman and a hard working farmhand. Founder of the Sunsprout dynasty.',
				notes: 'Leading the first settlers and being one of few with an education her efforts provided crucial for establishing the farms the empire live off to this day.',
				faction: 'Falenstinian',
				image: 'img/sunsprout/pernilla.jpg'
			},
			{
				name: 'Peter Sunsprout',
				race: 'Human',
				title: 'Lord, Founder',
				description: 'Dead. A hardy man, both from life as a farmer, a veteran and a commander whom seen his share of bloodshead and friends dying.',
				notes: 'Founder of the Sunsprout dynasty. Had a lesser role in the farming efforts the dynasty now is known for, but instead lead many a human armies under the leadership of general Steeltail.',
				faction: 'Falenstinian',
				image: 'img/sunsprout/peter.jpg'
			}


		];
		Sunsprout.prototype.assemble(list);
	};

	Sunsprout.prototype.assemble = function (sunsproutList) {

		var contactList = document.getElementById('contacts');
		var sunsproutFamilyList = document.createElement('ul');
		var sunsproutFamilyTitle = document.createElement('h2');
			
			sunsproutFamilyTitle.innerHTML = 'Sunsprout';
			sunsproutFamilyTitle.addEventListener('click', Main.hideParentLi);

			sunsproutFamilyList.classList.add('family-list');
			sunsproutFamilyList.appendChild(sunsproutFamilyTitle);


			for (let i = 0; i < sunsproutList.length; i++) {
				var listItem, div, textDiv, imgDiv, label, name, race, description, notes, faction, image, toggle, list;

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
					image.style.backgroundImage = 'url('+sunsproutList[i].image+')';

					name.innerHTML = sunsproutList[i].name;
					label.innerHTML = sunsproutList[i].name;
					title.innerHTML = '<b>Title: </b>' + sunsproutList[i].title;
					race.innerHTML = '<b>Race: </b>' + sunsproutList[i].race;
					description.innerHTML = '<b>Description: </b>' + sunsproutList[i].description;
					notes.innerHTML = '<b>Notes: </b>' + sunsproutList[i].notes;
					faction.innerHTML = '<b>Faction: </b>' + sunsproutList[i].faction;
					toggle.innerHTML = '<i class="fas fa-caret-square-down"></i>';
					list.innerHTML = '<i class="fas fa-list-alt"></i>';
					image.src = sunsproutList[i].image;

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

					sunsproutFamilyList.appendChild(listItem);

			}

			contactList.appendChild(sunsproutFamilyList);
	}
}