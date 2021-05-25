
Sunforger = function() {

	Sunforger.prototype.retrieve = function() {
		var list = [
		
			{
				name: 'Aibar Sunforger',
				race: 'High elf',
				title: 'Lord, Founder',
				description: 'Dead. A thin yet muscular high elf with a keen mind. Used to work as a stone mason.',
				notes: 'Founder and direct ancestor to the Sunforger dynasty.',
				faction: 'Falenstinian',
				image: 'img/sunforger/aibar.jpg'
			},
			{
				name: 'Calarel Sunforger',
				race: 'High elf',
				title: 'Lord',
				description: 'Tall blonde high elf with an aura of authority about him. Well dressed and well mannered, - a high elven noble through and through.',
				notes: 'Current head of the Sunforger noble family in Falenstia.',
				faction: 'Falenstinian',
				image: 'img/sunforger/calarel.jpg'
			},
			{
				name: 'Linora Sunforger',
				race: 'High elf',
				title: 'Lady, Founder',
				description: 'Dead. An old elven woman with grey hair and a slender frame. Said to have had an amazing insight into economy and statesmanship.',
				notes: 'Founder and direct ancestor to the Sunforger dynasty.',
				faction: 'Falenstinian',
				image: 'img/sunforger/linora.jpg'
			},
			{
				name: 'Miriel Sunforger',
				race: 'High elf',
				title: 'Lady',
				description: 'A stunning high elf woman. Long brown hair and a cunning guise. Always well dressed in the latest fashion',
				notes: 'Wife of Calarel Sunforger and current matriarc of the Sunforger noble family in Falenstia.',
				faction: 'Falenstinian',
				image: 'img/sunforger/miriel.jpg'
			},
			{
				name: 'Shiera Sunforger',
				race: 'High elf',
				title: 'Lady',
				description: 'A striking young noble woman with blond hair and a slender frame.',
				notes: 'Only daughter of Calarel and Miriel Sunforger. Have been used as a hostage in Wenchzlash for most of her life. <br/> Seems to know a few spells.',
				faction: 'Falenstinian',
				image: 'img/sunforger/shiera.jpg'
			}


		];
		Sunforger.prototype.assemble(list);
	};

	Sunforger.prototype.assemble = function (sunforgerList) {

		var contactList = document.getElementById('contacts');
		var sunforgerFamilyList = document.createElement('ul');
		var sunforgerFamilyTitle = document.createElement('h2');
			
			sunforgerFamilyTitle.innerHTML = 'Sunforger';
			sunforgerFamilyTitle.addEventListener('click', Main.hideParentLi);

			sunforgerFamilyList.classList.add('family-list');
			sunforgerFamilyList.appendChild(sunforgerFamilyTitle);


			for (let i = 0; i < sunforgerList.length; i++) {
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
					image.style.backgroundImage = 'url('+sunforgerList[i].image+')';

					name.innerHTML = sunforgerList[i].name;
					label.innerHTML = sunforgerList[i].name;
					title.innerHTML = '<b>Title: </b>' + sunforgerList[i].title;
					race.innerHTML = '<b>Race: </b>' + sunforgerList[i].race;
					description.innerHTML = '<b>Description: </b>' + sunforgerList[i].description;
					notes.innerHTML = '<b>Notes: </b>' + sunforgerList[i].notes;
					faction.innerHTML = '<b>Faction: </b>' + sunforgerList[i].faction;
					toggle.innerHTML = '<i class="fas fa-caret-square-down"></i>';
					list.innerHTML = '<i class="fas fa-list-alt"></i>';
					image.src = sunforgerList[i].image;

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

					sunforgerFamilyList.appendChild(listItem);

			}

			contactList.appendChild(sunforgerFamilyList);
	}
}