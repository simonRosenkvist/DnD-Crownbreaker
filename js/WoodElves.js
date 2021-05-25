
WoodElves = function() {

	WoodElves.prototype.retrieve = function() {
		var list = [
		
			{
				name: 'Caleb Silverforest',
				race: 'Wood Elf',
				title: 'Prince',
				description: 'A tall, slender yet muscular elf. Handsome and wise, seems keen on hunting and dressed in the nobles garb associated with the wood elves.',
				notes: 'Prince of the forest bordering to Wenchzlash.',
				faction: 'Wood elves',
				image: 'img/woodelves/caleb.jpg'
			},

		];
		WoodElves.prototype.assemble(list);
	};

	WoodElves.prototype.assemble = function (woodElvesList) {

		var contactList = document.getElementById('contacts');
		var woodElvesFamilyList = document.createElement('ul');
		var woodElvesFamilyTitle = document.createElement('h2');
			
			woodElvesFamilyTitle.innerHTML = 'Wood Elves';
			woodElvesFamilyTitle.addEventListener('click', Main.hideParentLi);

			woodElvesFamilyList.classList.add('family-list');
			woodElvesFamilyList.appendChild(woodElvesFamilyTitle);


			for (let i = 0; i < woodElvesList.length; i++) {
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

					race.classList.add('race');
					description.classList.add('description');
					faction.classList.add('faction');

					toggle.classList.add('toggle');
					toggle.addEventListener('click', Main.toggleContactView);

					list.classList.add('list');
					list.addEventListener('click', Main.addToList);
					
					image.classList.add('portrait');
					image.style.backgroundImage = 'url('+woodElvesList[i].image+')';

					name.innerHTML = woodElvesList[i].name;
					label.innerHTML = woodElvesList[i].name;
					title.innerHTML = '<b>Title: </b>' + woodElvesList[i].title;
					race.innerHTML = '<b>Race: </b>' + woodElvesList[i].race;
					description.innerHTML = '<b>Description: </b>' + woodElvesList[i].description;
					notes.innerHTML = '<b>Notes: </b>' + woodElvesList[i].notes;
					faction.innerHTML = '<b>Faction: </b>' + woodElvesList[i].faction;
					list.innerHTML = '<i class="fas fa-list-alt"></i>';
					toggle.innerHTML = '<i class="fas fa-caret-square-down"></i>';
					image.src = woodElvesList[i].image;

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

					woodElvesFamilyList.appendChild(listItem);

			}

			contactList.appendChild(woodElvesFamilyList);
	}
}