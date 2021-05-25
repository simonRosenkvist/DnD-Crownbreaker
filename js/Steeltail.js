
Steeltail = function() {

	Steeltail.prototype.retrieve = function() {
		var list = [
			{
				name: 'Cadreen Steeltail',
				race: 'Dragonborn',
				title: 'Empress',
				description: 'Well spoken, fair - both in manner and rule. Her scales glitter in bright gold',
				notes: 'Current empress of the Falenstine empire',
				faction: 'Falenstinian',
				image: 'img/steeltail/cadreen.jpg'
			},
			{
				name: 'Daar Steeltail',
				race: 'Dragonborn',
				title: 'Lord, Founder, General, Marshal',
				description: 'Dead. A massive black dragonborn. It is said that the only thing more impressive about tha man then his size was his mind.',
				notes: 'Founder and direct ancestor to the Steeltail dynasty. <br/> One of the greatest military strategists ever.',
				faction: 'Falenstinian',
				image: 'img/steeltail/daar.jpg'
			},
			{
				name: 'Ghesh Steeltail',
				race: 'Dragonborn',
				title: 'Lady, Founder',
				description: 'Dead. Tall slender bronze dragonborn. Wife of Daar and founder of the Steeltail dynasty. <br/>Her defencive tactics and directions in building fortifications is still the basis for military engineering to this date.',
				notes: 'Founder of the Steeltail noble family in Falenstia.',
				faction: 'Falenstinian',
				image: 'img/steeltail/ghesh.jpg'
			},

			{
				name: 'Relk Steeltail',
				race: 'Dragonborn',
				title: 'Lord',
				description: 'A light grey, somewhat slender dragonborn. Often deep in thoughts and does not like to respond to requests or provocations in any immediate manner.',
				notes: 'Relk is the lord of Sunmourn, which has been goverend by the Steeltails with the support of the Sunforgers and Sunsporuts as an important border town.',
				faction: 'Falenstinian',
				image: 'img/steeltail/relk.jpg'
			},
			{
				name: 'Uadjit Steeltail',
				race: 'Dragonborn',
				title: 'Lady',
				description: 'A tall blue scaled dragonborn. Kind, yet determined, and well educated.',
				notes: 'Current matriarc of the Steeltail dynasty.',
				faction: 'Falenstinian',
				image: 'img/steeltail/uadjit.jpg'
			},
			{
				name: 'Untkan Steeltail',
				race: 'Dragonborn',
				title: 'Lord, High marshal, General',
				description: 'A large imposing red dragonborn with a fiery temper to match. Is somewhat (in)famous for not bothering too much with etiquette.',
				notes: 'Current lord of the Steeltail noble family in Falenstia.<br/> Named field general and high marshal of the combined Falenstinian army.<br/>Has led multiple attacks on the empires enemies and have both the scars and stories to show for it.',
				faction: 'Falenstinian',
				image: 'img/steeltail/untkan.jpg'
			}


		];
		Steeltail.prototype.assemble(list);
	};

	Steeltail.prototype.assemble = function (steeltailList) {

		var contactList = document.getElementById('contacts');
		var steeltailFamilyList = document.createElement('ul');
		var steeltailFamilyTitle = document.createElement('h2');
			
			steeltailFamilyTitle.innerHTML = 'Steeltail';
			steeltailFamilyTitle.addEventListener('click', Main.hideParentLi);

			steeltailFamilyList.classList.add('family-list');
			steeltailFamilyList.appendChild(steeltailFamilyTitle);


			for (let i = 0; i < steeltailList.length; i++) {
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
					name.classList.add('name');

					toggle.classList.add('toggle');
					toggle.addEventListener('click', Main.toggleContactView);

					list.classList.add('list');
					list.addEventListener('click', Main.addToList);

					image.classList.add('portrait');
					image.style.backgroundImage = 'url('+steeltailList[i].image+')';

					name.innerHTML = steeltailList[i].name;
					label.innerHTML = steeltailList[i].name;
					title.innerHTML = '<b>Title: </b>' + steeltailList[i].title;
					race.innerHTML = '<b>Race: </b>' + steeltailList[i].race;
					description.innerHTML = '<b>Description: </b>' + steeltailList[i].description;
					notes.innerHTML = '<b>Notes: </b>' + steeltailList[i].notes;
					faction.innerHTML = '<b>Faction: </b>' + steeltailList[i].faction;
					toggle.innerHTML = '<i class="fas fa-caret-square-down"></i>';
					list.innerHTML = '<i class="fas fa-list-alt"></i>';
					image.src = steeltailList[i].image;

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

					steeltailFamilyList.appendChild(listItem);

			}

			contactList.appendChild(steeltailFamilyList);
	}
}