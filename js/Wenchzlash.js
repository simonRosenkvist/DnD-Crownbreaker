
Wenchzlash = function() {

	Wenchzlash.prototype.retrieve = function() {
		var list = [
			{
				name: 'Alexandru',
				race: 'Human',
				title: 'Hunter',
				description: 'A hunter with a trusty dog. One of the lucky ones, (uneaten), at that.',
				notes: 'Used to be the royal huntsmaster and the group saved his dog from lyncanthropy.',
				faction: 'Wenchezlashian',
				image: 'img/wenchzlash/alexandru.jpg'
			},
			{
				name: 'Artyom Wenchzlash',
				race: 'Human',
				title: 'Lord, Boyar, Voivod, Tyrant',
				description: 'Son of Vladimir, favoring the Wenchezlashian ways of statecraft. Named Voivod (Tyrant) with the help of the group.',
				notes: 'Enjoys wine and the total obedience of the blood brothers.',
				faction: 'Wenchezlashian',
				image: 'img/wenchzlash/artyom.jpg'
			},

			{
				name: 'Carna',
				race: 'Shape shifter',
				title: 'Witch',
				description: 'A kind? Witch living alone in the woods bordering the falenstine empire. She is young looking wearing a simple dress and seem to enjoy nature.',
				notes: 'Seems to have some super natural insight into the destiny of others',
				faction: 'Wenchezlashian',
				image: 'img/wenchzlash/carna.jpg'
			},
			{
				name: 'Creighton Dustshroud',
				race: 'Dwarf',
				title: 'Druid',
				description: 'A dirty old smelling dwarven druid of decay.',
				notes: 'Traded a couple of healing potions for a mighty magic staff.',
				faction: 'Wenchezlashian',
				image: 'img/wenchzlash/creighton.jpg'
			},
			{
				name: 'Goncharov',
				race: 'Human',
				title: 'General of the men-at-arms',
				description: 'An old veteran whom seem to have served well in the last war. Well enough to be appointed the highest position within the men-at-arms.',
				notes: 'Suspicious, and seem to value the life of his men, (although not to a <i>flaw</i>).',
				faction: 'Wenchezlashian',
				image: 'img/wenchzlash/goncharov.jpg'
			},
			{
				name: 'Igor Vlachenkov',
				race: 'Human',
				title: 'Dancer',
				description: 'A handsome young ballet dancer, seems very popular with both the elites and the female dancers.',
				notes: 'Arrogant, and a cheat, most of his talents comes from a magical family heirloom, (a music box).',
				faction: 'Wenchezlashian',
				image: 'img/wenchzlash/igor.jpg'
			},
			{
				name: 'Iljalena',
				race: 'Human',
				title: 'Dancer',
				description: 'A very slim, skillful and beutiful ballet dancer. All the attributes needed to succeed in dancing. Just add hard work and desperation.',
				notes: 'Arrogant, but a realist.',
				faction: 'Wenchezlashian',
				image: 'img/wenchzlash/iljalena.jpg'
			},
			{
				name: 'Kuznetsov',
				race: 'Human',
				title: 'Boyar',
				description: 'A boyar whom mostly seem interested in the finer things in life, - Wine, women and ballet. He has gotten fat over the years, but often found in a happy mood.',
				notes: 'Got impressed with Jaspers ballet performance.',
				faction: 'Wenchezlashian',
				image: 'img/wenchzlash/kuznetsov.jpg'
			},
			{
				name: 'Ol´Friggi',
				race: 'Dwarf',
				title: 'Preist, Caretaker',
				description: 'An old dwarf and lone caretaker of the shrines in Walkacha.',
				notes: 'Said a prayer for Julius',
				faction: 'Wenchezlashian',
				image: 'img/wenchzlash/friggi.jpg'
			},
			{
				name: 'Scyla',
				race: 'Human',
				title: 'Knight, and diplomat of the blood brothers',
				description: 'A beutiful yet cold lady. Dangerous with both sword and words, she serves as diplomat for external interests for the blood brothers.',
				notes: '',
				faction: 'Wenchezlashian',
				image: 'img/wenchzlash/scyla.jpg'
			},
			{
				name: 'Smirnov',
				race: 'Human',
				title: 'Boyar',
				description: 'A boyar whom mostly seem concerned about defending the borders.',
				notes: 'One of his outposts got attacked by the smith.',
				faction: 'Wenchezlashian',
				image: 'img/wenchzlash/smirnov.jpg'
			},
			{
				name: 'Turgenev',
				race: 'Human',
				title: 'Boyar',
				description: 'A boyar whos main passion to be hunting.',
				notes: 'His daughter was cursed and saved by the group.',
				faction: 'Wenchezlashian',
				image: 'img/wenchzlash/turgenev.jpg'
			},
			{
				name: 'Oblonsky',
				race: 'Human',
				title: 'Knight of the blood brothers',
				description: 'A stern knight of the blood brothers. Spent some time out of the capital assisting the boyars.',
				notes: 'The escort for the group to Walkacha',
				faction: 'Wenchezlashian',
				image: 'img/wenchzlash/oblonsky.jpg'
			},
			{
				name: 'Oileena Stormcrow',
				race: 'Human',
				title: 'Lady',
				description: 'A noblewoman turned into a monster by the tailor(?)',
				notes: 'Led the band of shamblers in the woods around the Wenchzlash exterior.',
				faction: 'Wenchezlashian',
				image: 'img/wenchzlash/oileena.jpg'
			},
			{
				name: 'Pijetre Wenchzlash',
				race: 'Human',
				title: 'Knight, and first among equals of the blood brother',
				description: 'A warrior through and through. Although not physically massive, cunning and ruthlessness more than makes up for it.',
				notes: 'Lost the bid for power to his brother Artyom.',
				faction: 'Wenchezlashian',
				image: 'img/wenchzlash/pijetre.jpg'
			},
			{
				name: 'Vladimir Wenchzlash',
				race: 'Human',
				title: 'Lord, Tyrant, Boyar, Voivod',
				description: 'The tyrant that signed the peace treaty after defeating the falenstine army.',
				notes: 'Dead.',
				faction: 'Wenchezlashian',
				image: 'img/wenchzlash/vladimir.jpg'
			},
			


		];
		Wenchzlash.prototype.assemble(list);
	};

	Wenchzlash.prototype.assemble = function (wenchzlashList) {

		var contactList = document.getElementById('contacts');
		var wenchzlashFamilyList = document.createElement('ul');
		var wenchzlashFamilyTitle = document.createElement('h2');
			
			wenchzlashFamilyTitle.innerHTML = 'Wenchzlash';
			wenchzlashFamilyTitle.addEventListener('click', Main.hideParentLi);

			wenchzlashFamilyList.classList.add('family-list');
			wenchzlashFamilyList.appendChild(wenchzlashFamilyTitle);


			for (let i = 0; i < wenchzlashList.length; i++) {
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
					image.style.backgroundImage = 'url('+wenchzlashList[i].image+')';

					name.innerHTML = wenchzlashList[i].name;
					label.innerHTML = wenchzlashList[i].name;
					title.innerHTML = '<b>Title: </b>' + wenchzlashList[i].title;
					race.innerHTML = '<b>Race: </b>' + wenchzlashList[i].race;
					description.innerHTML = '<b>Description: </b>' + wenchzlashList[i].description;
					notes.innerHTML = '<b>Notes: </b>' + wenchzlashList[i].notes;
					faction.innerHTML = '<b>Faction: </b>' + wenchzlashList[i].faction;
					toggle.innerHTML = '<i class="fas fa-caret-square-down"></i>';
					list.innerHTML = '<i class="fas fa-list-alt"></i>';
					image.src = wenchzlashList[i].image;

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

					wenchzlashFamilyList.appendChild(listItem);

			}

			contactList.appendChild(wenchzlashFamilyList);
	}
}