
Dawnwave = function() {

	Dawnwave.prototype.retrieve = function() {
		var list = [
		
			{
				name: 'Kral Dawnwave',
				race: 'Dragonborn',
				title: 'Lord, Fleetmaster',
				description: 'A large blue dragonborn he is known for a heisty temper and is better suited at life at sea or overseeing the construction and maintnence of ships... Some would say.',
				notes: 'Current head of the Dawnwave family.',
				faction: 'Falenstinian',
				image: 'img/dawnwave/kral.jpg'
			},
			{
				name: 'Merleen Dawnwave',
				race: 'Dragonborn',
				title: 'Lady, Founder',
				description: 'Dead. A stout green dragonborn, initially a pirate, her life chaged when she met Tragh whom admired her skills at sea. A fearsome warrior, - she never fully adopted to life at court and had plenty of adventures and lovers of different kinds and genders in multiple ports.',
				notes: 'Founder of the Dawnwave dynasty.',
				faction: 'Falenstinian',
				image: 'img/dawnwave/merleen.jpg'
			},
			{
				name: 'Qeelin Dawnwave',
				race: 'Dragonborn',
				title: 'Lady',
				description: 'A slender bronze dragonborn female. Seems to have taking a flare for diplomacy and is the one managing the houses business at court.',
				notes: 'Current matriarc and direct ancestor to the Dawnwave dynasty.',
				faction: 'Falenstinian',
				image: 'img/dawnwave/qeelin.jpg'
			},
			{
				name: 'Tragh Dawnwave',
				race: 'Dragonborn',
				title: 'Founder, Lord, Fleetmaster',
				description: 'Dead. A large golden dragonborn, his skills in both constructing, maintaining and manouvering ships is the stuff of legend. So was his liking of spirits.',
				notes: 'Founder of the Dawnwave dynasty.',
				faction: 'Falenstinian',
				image: 'img/dawnwave/tragh.jpg'
			},


		];
		Dawnwave.prototype.assemble(list);
	};

	Dawnwave.prototype.assemble = function (dawnwaveList) {

		var contactList = document.getElementById('contacts');
		var dawnwaveFamilyList = document.createElement('ul');
		var dawnwaveFamilyTitle = document.createElement('h2');
			
			dawnwaveFamilyTitle.innerHTML = 'Dawnwave';
			dawnwaveFamilyTitle.addEventListener('click', Main.hideParentLi);

			dawnwaveFamilyList.classList.add('family-list');
			dawnwaveFamilyList.appendChild(dawnwaveFamilyTitle);


			for (let i = 0; i < dawnwaveList.length; i++) {
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
					image.style.backgroundImage = 'url('+dawnwaveList[i].image+')';

					name.innerHTML = dawnwaveList[i].name;
					label.innerHTML = dawnwaveList[i].name;
					title.innerHTML = '<b>Title: </b>' + dawnwaveList[i].title;
					race.innerHTML = '<b>Race: </b>' + dawnwaveList[i].race;
					description.innerHTML = '<b>Description: </b>' + dawnwaveList[i].description;
					notes.innerHTML = '<b>Notes: </b>' + dawnwaveList[i].notes;
					faction.innerHTML = '<b>Faction: </b>' + dawnwaveList[i].faction;
					list.innerHTML = '<i class="fas fa-list-alt"></i>';
					toggle.innerHTML = '<i class="fas fa-caret-square-down"></i>';
					image.src = dawnwaveList[i].image;

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

					dawnwaveFamilyList.appendChild(listItem);

			}

			contactList.appendChild(dawnwaveFamilyList);
	}
}