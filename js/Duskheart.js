
Duskheart = function() {

	Duskheart.prototype.retrieve = function() {
		var list = [
		
			{
				name: 'Alistar Duskheart',
				race: 'Unkown',
				title: 'Lord, Founder, High mage',
				description: 'Dead. A tall figure rumored to be the one of the most powerful mages ever. Face always hidden behind a steel mask.',
				notes: 'Founder of the Duskheart dynasty.',
				faction: 'Falenstinian',
				image: 'img/duskheart/alistar.jpg'
			},
			{
				name: 'Lionel Duskheart',
				race: 'Unkown',
				title: 'Lord, High mage',
				description: 'A tall figure and a powerful mage. Face always hidden behind a steel mask. Seems to prefer dark blue robes',
				notes: 'Current head and direct ancestor to the Duskheart dynasty.',
				faction: 'Falenstinian',
				image: 'img/duskheart/alistar.jpg'
			},
			{
				name: 'Trista Duskheart',
				race: 'Unkown',
				title: 'Lady',
				description: 'A slender figure and a powerful mage. Face always hidden behind a steel mask. Seems to prefer dark blue robes.',
				notes: 'Current matriarc and direct ancestor to the Duskheart dynasty.',
				faction: 'Falenstinian',
				image: 'img/duskheart/trista.jpg'
			}


		];
		Duskheart.prototype.assemble(list);
	};

	Duskheart.prototype.assemble = function (duskheartList) {

		var contactList = document.getElementById('contacts');
		var duskheartFamilyList = document.createElement('ul');
		var duskheartFamilyTitle = document.createElement('h2');
			
			duskheartFamilyTitle.innerHTML = 'Duskheart';
			duskheartFamilyTitle.addEventListener('click', Main.hideParentLi);

			duskheartFamilyList.classList.add('family-list');
			duskheartFamilyList.appendChild(duskheartFamilyTitle);


			for (let i = 0; i < duskheartList.length; i++) {
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
					list = document.createElement('div');
					toggle = document.createElement('div');

					div.classList.add('npc');
					textDiv.classList.add('npc-text');
					textDiv.classList.add('hidden');
					imgDiv.classList.add('npc-img-div');
					imgDiv.classList.add('hidden');
					listItem.classList.add('hidden');

					name.classList.add('super-visible');
					name.classList.add('name');
					label.classList.add('label');

					race.classList.add('race');
					description.classList.add('description');
					faction.classList.add('faction');

					toggle.classList.add('toggle');
					toggle.addEventListener('click', Main.toggleContactView);

					list.classList.add('list');
					list.addEventListener('click', Main.addToList);

					image.classList.add('portrait');
					image.style.backgroundImage = 'url('+duskheartList[i].image+')';

					name.innerHTML = duskheartList[i].name;
					label.innerHTML = duskheartList[i].name;
					title.innerHTML = '<b>Title: </b>' + duskheartList[i].title;
					race.innerHTML = '<b>Race: </b>' + duskheartList[i].race;
					description.innerHTML = '<b>Description: </b>' + duskheartList[i].description;
					notes.innerHTML = '<b>Notes: </b>' + duskheartList[i].notes;
					faction.innerHTML = '<b>Faction: </b>' + duskheartList[i].faction;
					list.innerHTML = '<i class="fas fa-list-alt"></i>';
					toggle.innerHTML = '<i class="fas fa-caret-square-down"></i>';
					image.src = duskheartList[i].image;
					
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

					duskheartFamilyList.appendChild(listItem);

			}

			contactList.appendChild(duskheartFamilyList);
	}
}