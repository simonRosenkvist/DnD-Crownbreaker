
FalenstinianCommoners = function() {

	FalenstinianCommoners.prototype.retrieve = function() {
		var list = [
			{
				name: 'Aibar Sunlily',
				race: 'Elf',
				title: 'Inn keeper',
				description: 'A stern elf with brown hair, a no nonsense attitude and a by the books mentality. Most often seen taking care of cutomers wearing his stylish attire and an apron.',
				notes: 'The owner and founder of the Highborn inn. The most prestigious inn in Sunmourn and surrounding counties.',
				faction: 'Falenstinian',
				image: 'img/falenstinian/aibar.jpg'
			},
			{
				name: 'Aticus',
				race: 'Human',
				title: 'Legionnaire',
				description: 'A legionary probably and someone Julius cant seem to remember.',
				notes: '...',
				faction: 'Falenstinian',
				image: 'img/falenstinian/unknown.jpg'
			},
			{
				name: 'Balasar Scatterfist',
				race: 'Dragonborn',
				title: 'Slaver',
				description: 'A red dragonborn slaver leading a small guard/mercenary caravan. Known for being fair-ish and less brutal than most of his profession.',
				notes: 'The leader of the slavers whom had captured the players at the beginning of the campaign.',
				faction: 'Falenstinian',
				image: 'img/falenstinian/balasar.jpg'
			},
			{
				name: 'Belila',
				race: 'Tiefling',
				title: 'Jester',
				description: 'A red tiefling woman, often with a smirk and always dressed for the occation, (wether the occation is a fancy ball or a night time burglary).',
				notes: 'At some point she was given the title of jester, which allows her to speak out against both the nobility and the temples without (at least) fearing for her life. She has gained a reputation for shouting insults and stirring up controversies on account of whoever is paying her. Rumors also says that she is a skilled pickpocket and a singer.',
				faction: 'Falenstinian',
				image: 'img/falenstinian/belila.jpg'
			},
			{
				name: 'Camila',
				race: 'Human',
				title: 'Slave, witch',
				description: 'A small woman sold to slavery because of outstanding warrants of using wild magic and wanton destruction. Seems knowledgeable but unable to cast spells.',
				notes: 'One of the slaves the group traveled with in the beginning.',
				faction: 'Falenstinian',
				image: 'img/falenstinian/camila.jpg'
			},
			{
				name: 'Cornelius',
				race: 'Human',
				title: 'Legionnaire',
				description: 'A legionary probably and someone Julius cant seem to remember.',
				notes: '...',
				faction: 'Falenstinian',
				image: 'img/falenstinian/unknown.jpg'
			},{
				name: 'Endiril the senile',
				race: 'elf',
				title: 'Professor',
				description: 'A old haunched over elf. Endiril seems to have studdied most of his life, and is almost always found with his nose deep in some book.',
				notes: 'Endiril is said to have lived past the empire wars - when the noble houses first were founded. Finally however his old age seems to have caught up with him as he is turning more and more senile by the year. He still recieves a lot of respect due to his old age and past knowledge, but is seen as something of a tragic individual.',
				faction: 'Falenstinian',
				image: 'img/falenstinian/endiril.jpg'
			},
			{
				name: 'Gishmil Lonestar',
				race: 'Human',
				title: 'Entrepreneur',
				description: 'A man in his late 50s, his once dark hair finally turning grey. A large wild mustache slightly curved upwards could either be an afterthought or the latest fashion from The Emirates of Zapada.',
				notes: 'An excentric businessman whom made his riches with cleaver manipulations and daring tactics, often against the odds. He is considered on of the most wealthy individuals not tied to a guild or noble house.',
				faction: 'Falenstinian',
				image: 'img/falenstinian/gishmil.jpg'
			},
			{
				name: 'Kinly',
				race: 'Half elf',
				title: 'Courtesan',
				description: 'A very beautiful woman, Kinly dresses in the latest fashion and is never seen wearing the same dress twice. She also wears a wide array of makeup to match the rest of her attire as well as expensive perfumes.',
				notes: 'Kinly is a traveling courtesan, and is used to stay at the more expensive inns for free where the chance of seeing her is enought to bring plenty more customers to the establishment. It is rumored that seeing her, even if just once is life changing.',
				faction: 'Falenstinian',
				image: 'img/falenstinian/kinly.jpg'
			},
			{
				name: 'Marius',
				race: 'Human',
				title: 'Legionnaire',
				description: 'A legionary probably and someone Julius cant seem to remember.',
				notes: '...',
				faction: 'Falenstinian',
				image: 'img/falenstinian/unknown.jpg'
			},
			{
				name: 'Octavius',
				race: 'Human',
				title: 'Legionnaire',
				description: 'A legionary probably and someone Julius cant seem to remember.',
				notes: '...',
				faction: 'Falenstinian',
				image: 'img/falenstinian/unknown.jpg'
			},
			{
				name: 'Nadharr Longtail',
				race: 'Dragonborn',
				title: 'Senechal',
				description: 'A golden dragonborn with the edges of his scales painted in purple to impress and show off his status. Likes to dress in fancy robes.',
				notes: 'Servant of the Sunforgers',
				faction: 'Falenstinian',
				image: 'img/falenstinian/nadharr.jpg'
			},
			{
				name: 'Rorik Silversteel',
				race: 'Human',
				title: 'Slave, Knight aspirant',
				description: 'Bravado and valor, passion for playing any instrument and singing, as well as women. Which is what made him end up in slavery.',
				notes: 'One of the slaves the group traveled with in the beginning.',
				faction: 'Falenstinian',
				image: 'img/falenstinian/rorik.jpg'
			},
			{
				name: 'Ruk´har Bloodsworn',
				race: 'Orc (half)',
				title: 'Slave',
				description: 'Typical angry half orc. Found of drinking and brawling. Convicted of manslaughter.',
				notes: 'One of the slaves the group traveled with in the beginning.',
				faction: 'Falenstinian',
				image: 'img/falenstinian/rukhar.jpg'
			},
			{
				name: 'Tholnjor the sour',
				race: 'Dwarf',
				title: 'Master brewer and distiller',
				description: 'A old grizzled dwarf, and although not dressed or behaved in a particularly noble way he still seems to enjoy some amount of respect around Sunmourn.',
				notes: 'In charge of the orchards north of Sunmourn, the orchards are known to produce the best cider in the empire(s)! Even though it might be hard to get ahold of any. Most are sold to select businesses inside of Sunmourn itself and being able to put the cider on your tavern menu is considered a badge of pride.',
				factions: 'Falenstinian',
				image: 'img/falenstinian/tholnjor.jpg'
			},
			{
				name: 'Traq Silverjaw',
				race: 'Dragonborn',
				title: 'Paladin Justicar of Bahamut',
				description: 'A muscular golden dragonborn clad in heavy armor decorated with Bahamut imagery. His intense eyes seems keen on detecting lies and half-truths.',
				notes: 'Leads the local group of paladins dedicated to Bahamut. Not being under control of any nobles the paladins respect Traqs words almost to the point of law.',
				faction: 'Falenstinian',
				image: 'img/falenstinian/traq.jpg'
			},
			{
				name: 'Zhakko',
				race: 'Tashmani',
				title: 'Story teller',
				description: 'A huge dark skinned man with dreadlocks and shaved sides of his head. Zhakkos body is covered in tattoos and his teeth are jagged giving him a frightful impression as he tells the talse of his people.',
				notes: 'As a story teller Zhakko tells the tales of his people, the battles they fought, the lands they conquered, their traditions and their travels. Often seen around the inns trading tales for coin.',
				faction: 'Falenstinian',
				image: 'img/falenstinian/zhakko.jpg'
			}


		];
		FalenstinianCommoners.prototype.assemble(list);
	};

	FalenstinianCommoners.prototype.assemble = function (falenstiniansList) {

		var contactList = document.getElementById('contacts');
		var falenstiniansFamilyList = document.createElement('ul');
		var falenstiniansFamilyTitle = document.createElement('h2');
			
			falenstiniansFamilyTitle.innerHTML = 'Falenstinians';
			falenstiniansFamilyTitle.addEventListener('click', Main.hideParentLi);

			falenstiniansFamilyList.classList.add('family-list');
			falenstiniansFamilyList.appendChild(falenstiniansFamilyTitle);


			for (let i = 0; i < falenstiniansList.length; i++) {
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
					image.style.backgroundImage = 'url('+falenstiniansList[i].image+')';

					name.innerHTML = falenstiniansList[i].name;
					label.innerHTML = falenstiniansList[i].name;
					title.innerHTML = '<b>Title: </b>' + falenstiniansList[i].title;
					race.innerHTML = '<b>Race: </b>' + falenstiniansList[i].race;
					description.innerHTML = '<b>Description: </b>' + falenstiniansList[i].description;
					notes.innerHTML = '<b>Notes: </b>' + falenstiniansList[i].notes;
					faction.innerHTML = '<b>Faction: </b>' + falenstiniansList[i].faction;
					toggle.innerHTML = '<i class="fas fa-caret-square-down"></i>';
					list.innerHTML = '<i class="fas fa-list-alt"></i>';
					image.src = falenstiniansList[i].image;
					
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

					falenstiniansFamilyList.appendChild(listItem);

			}

			contactList.appendChild(falenstiniansFamilyList);
	}
}