Siosians = function() {

	Siosians.prototype.retrieve = function() {
		var list = [
			{
				name: 'Agnes',
				race: 'Human',
				title: 'Servant',
				description: 'A young dark haired woman with rosey cheeks and the hint of a smile.',
				notes: 'Servant at Morningrose mannor',
				faction: 'Siosian',
				image: 'img/siosian/agnes.jpg'
			},
			{
				name: 'Antoinetta Dawnvale',
				race: 'Human',
				title: 'Lady, Countess',
				description: 'The widow of the late lord Dawnvale, even though not a farmer herself she takes care to avoid appearing to aristocratic.',
				notes: 'Lady of Valehold',
				faction: 'Siosian',
				image: 'img/siosian/antoinetta.jpg'
			},
			{
				name: 'Domitus',
				race: 'Elf',
				title: 'Wizard',
				description: 'Thin, tall with dark hair and dressed in robes, looks like he isnt fond of hard work under a blazing sun',
				notes: 'Powerful wizard',
				faction: 'Falenstinian',
				image: 'img/siosian/domitus.jpg'
			},
			{
				name: 'Fredrich Sunharvest',
				race: 'Human',
				title: 'Landlord',
				description: 'A well off farmer with callous hands and a tan face he is the landlord of one of the farms in the Glacial Vale',
				notes: 'Landlord of a farm in the Glacial Vale',
				faction: 'Siosian',
				image: 'img/siosian/fredrich.jpg'
			},
			{
				name: 'Godiva Morningrose',
				race: 'Human',
				title: 'Lady',
				description: 'Kind looking and dressed in a noble womans clothing she gives a tentative but kind impression',
				notes: 'Lady of the Morningrose family',
				faction: 'Siosian',
				image: 'img/siosian/godiva.jpg'
			},
			{
				name: 'Hilda Morningrose',
				race: 'Half elf',
				title: 'Young lady',
				description: 'A young blonde woman with braided hair, rosey cheeks and a wide smile.',
				notes: 'Second daughter of the Morningrose family',
				faction: 'Siosian',
				image: 'img/siosian/hilda.jpg'
			},
			{
				name: 'Julia',
				race: 'Elf',
				title: 'Servant',
				description: 'A young looking short haired woman with a cold expression on her face',
				notes: 'Servant at Morningrose mannor',
				faction: 'Siosian',
				image: 'img/siosian/julia.jpg'
			},
			{
				name: 'Jürger Frost',
				race: 'Human',
				title: 'Consul, Kansler of Glacial Peak, Lord of Castle Frost',
				description: 'A well mannered man in his late 40s with brown hair and well kept beard. Seems to be rational and a skilled diplomat.',
				notes: 'Lord of Castle Frost',
				faction: 'Siosian',
				image: 'img/siosian/jurger.jpg'
			},
			{
				name: 'Katarinja, ´Katrin´',
				race: 'Human',
				title: 'Bar keep',
				description: 'A Wenchzlashian woman with blonde hair and an extroverted personality',
				notes: 'Serves beer and bedding at the Hoghorn inn',
				faction: 'Siosian, Wenchzlashian',
				image: 'img/siosian/katarinja.jpg'
			},
			{
				name: 'Liana Frost',
				race: 'Half elf',
				title: 'Kansler, Lady of Castle Frost',
				description: 'A woman in her late 40s regaly dressed and mannered, her face rarely betrays and emotion other than kindness.',
				notes: 'Lady of Glacial Peak',
				faction: 'Siosian',
				image: 'img/siosian/liana.jpg'
			},
			{
				name: 'Ludmilla Morningrose',
				race: 'Human',
				title: 'Young lady',
				description: 'A young lady and firstborn daughter of the Morningrose family, she has a somewhat bored look while dressed in an exquisite dress.',
				notes: 'Young lady of the Morningrose family',
				faction: 'Siosian',
				image: 'img/siosian/ludmilla.jpg'
			},
			{
				name: 'Ludwig Morningrose',
				race: 'Human',
				title: 'Lord',
				description: 'A man in his lat 40s, he is tall and handsome wearing a noblemans garb.',
				notes: 'Lord of the Morningrose mannor',
				faction: 'Siosian',
				image: 'img/siosian/ludwig.jpg'
			},
			{
				name: 'Lyonel ´Lily´Lioncoeur',
				race: 'Human',
				title: 'Knight',
				description: 'A young blonde man wearing his ancestral armor with pride.',
				notes: 'Leading an army at camp Lionroar',
				faction: 'Siennan',
				image: 'img/siosian/lyonel.jpg'
			},
			{
				name: 'Manfred Goldforger',
				race: 'Dwarf',
				title: 'Treassurer',
				description: 'An older man with an eye for detail, and sharp intellect only slightly diminished by his old age.',
				notes: 'Treassurer at Castle Frost',
				faction: 'Siosian',
				image: 'img/siosian/manfred.jpg'
			},
			{
				name: 'Marcellus',
				race: 'Elf',
				title: 'Agent',
				description: 'Looks like one of the preists at Kalter Hügen, his face seldom betraying his true emotions.',
				notes: 'Might be a Falenstine agent',
				faction: 'Falenstinian',
				image: 'img/siosian/marcellus.jpg'
			},
			{
				name: 'Montegue',
				race: 'Human',
				title: 'Agent',
				description: 'A broad shouldered man with dark hair. He is wearing travelers cloaths of quality making him stand out a bit from the average vagabonds.',
				notes: 'Used to be in the service of Lyonel Lioncoeur. Might be an agent for the Duskhearts...',
				faction: 'Falenstinian',
				image: 'img/siosian/montegue.jpg'
			},
			{
				name: 'Nela',
				race: 'Human',
				title: 'Servant',
				description: 'A beautiful young woman wearing a dress and the hint of a smile.',
				notes: 'Servant at Morningrose mannor',
				faction: 'Siosian',
				image: 'img/siosian/nela.jpg'
			},
			{
				name: 'Wagner Hügen',
				race: 'Dwarf',
				title: 'High preist, ruler of Kalter Hügen',
				description: 'A stout old dwarf with grey beard and a wolven grin. Often quick to outbursts even as a sharp intellect hides behind the rugged exterior.',
				notes: 'High preist of Kalter Hügen',
				faction: 'Siosian',
				image: 'img/siosian/wagner.jpg'
			}
		];
		Siosians.prototype.assemble(list);
	},

	Siosians.prototype.assemble = function(siosianList) {

		var contactList = document.getElementById('contacts');
		var siosianFamilyList = document.createElement('ul');
		var siosianFamilyTitle = document.createElement('h2');
			
			siosianFamilyTitle.innerHTML = 'Siosians';
			siosianFamilyTitle.addEventListener('click', Main.hideParentLi);

			siosianFamilyList.classList.add('family-list');
			siosianFamilyList.appendChild(siosianFamilyTitle);


			for (let i = 0; i < siosianList.length; i++) {
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
					image.style.backgroundImage = 'url('+siosianList[i].image+')';

					name.innerHTML = siosianList[i].name;
					label.innerHTML = siosianList[i].name;
					title.innerHTML = '<b>Title: </b>' + siosianList[i].title;
					race.innerHTML = '<b>Race: </b>' + siosianList[i].race;
					description.innerHTML = '<b>Description: </b>' + siosianList[i].description;
					notes.innerHTML = '<b>Notes: </b>' + siosianList[i].notes;
					faction.innerHTML = '<b>Faction: </b>' + siosianList[i].faction;
					list.innerHTML = '<i class="fas fa-list-alt"></i>';
					toggle.innerHTML = '<i class="fas fa-caret-square-down"></i>';
					image.src = siosianList[i].image;

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

					siosianFamilyList.appendChild(listItem);

			}

			contactList.appendChild(siosianFamilyList);
	}
}