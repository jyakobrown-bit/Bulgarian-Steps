/*
  Bulgarian course content. You can edit this file without rebuilding the app.

  Words:      ['bulgarian', 'english', 'picture']
              Put a ` (backtick) just before the stressed vowel, e.g. 'каф`е'.
              Words with only one vowel need no mark.
  Extra:      small helper words that appear in the sentences. Shown before the
              sentence lesson.
  Sentences:  ['Bulgarian sentence.', 'English sentence.', ['other English answers that are also right']]
  Tips:       one or two very short lines. Leave [] for no tip.
*/
window.BG_UNITS = [
  {
    id: 'hello', title: 'Hello!', bg: 'Здравей!', color: '#b8232f', motif: 'star',
    tips: [
      'Здравейте is polite: use it with strangers. Здрасти is for friends and family.',
      'Careful: in Bulgaria nodding your head means NO, and shaking it means YES!'
    ],
    words: [
      ['здраве`йте', 'hello (polite)', '👋'],
      ['здр`асти', 'hi', '🙋'],
      ['добр`о `утро', 'good morning', '🌅'],
      ['д`обър ден', 'good day', '☀️'],
      ['д`обър в`ечер', 'good evening', '🌆'],
      ['л`ека нощ', 'good night', '🌙'],
      ['благодар`я', 'thank you', '🙏'],
      ['м`оля', 'please', '🤲'],
      ['да', 'yes', '👍'],
      ['не', 'no', '👎'],
      ['дов`иждане', 'goodbye', '🚶'],
      ['добр`е', 'fine, well', '😊']
    ],
    extra: [
      ['как', 'how'],
      ['сте', 'are (polite "you")'],
      ['съм', 'am']
    ],
    sentences: [
      ['Да, моля.', 'Yes, please.'],
      ['Не, благодаря.', 'No, thank you.', ['No thanks.']],
      ['Здравейте, как сте?', 'Hello, how are you?'],
      ['Добре съм, благодаря.', 'I am fine, thank you.', ["I'm fine, thank you."]],
      ['Благодаря, довиждане!', 'Thank you, goodbye!'],
      ['Добро утро! Как сте?', 'Good morning! How are you?']
    ]
  },
  {
    id: 'me', title: 'About me', bg: 'За мен', color: '#1f5fa8', motif: 'person',
    tips: [
      'Only three little words to learn: съм = am, си = are, е = is.',
      'Аз съм… (I am…), Ти си… (you are…), Той е… (he is…)'
    ],
    words: [
      ['аз', 'I', '🙋‍♂️'],
      ['ти', 'you (friend)', '🫵'],
      ['той', 'he', '👨'],
      ['тя', 'she', '👩'],
      ['съм', 'am', ''],
      ['си', 'are (you)', ''],
      ['е', 'is', ''],
      ['к`азвам се', 'my name is', '🏷️'],
      ['при`ятел', 'friend', '🤝'],
      ['зав`арчик', 'welder', '👨‍🏭'],
      ['уч`ител', 'teacher', '🧑‍🏫'],
      ['от', 'from', ''],
      ['Бълг`ария', 'Bulgaria', '🇧🇬'],
      ['`Англия', 'England', '💂']
    ],
    extra: [
      ['Р`ъсел', 'Russell'],
      ['уч`ителка', 'teacher (woman)'],
      ['мой', 'my'],
      ['д`обър', 'good']
    ],
    sentences: [
      ['Казвам се Ръсел.', 'My name is Russell.', ["I'm called Russell."]],
      ['Аз съм Ръсел.', 'I am Russell.', ["I'm Russell."]],
      ['Аз съм от Англия.', 'I am from England.', ["I'm from England."]],
      ['Тя е от България.', 'She is from Bulgaria.', ["She's from Bulgaria."]],
      ['Аз съм заварчик.', 'I am a welder.', ["I'm a welder."]],
      ['Тя е учителка.', 'She is a teacher.', ["She's a teacher."]],
      ['Той е мой приятел.', 'He is my friend.', ["He's my friend."]],
      ['Ти си добър приятел.', 'You are a good friend.', ["You're a good friend."]]
    ]
  },
  {
    id: 'family', title: 'Family', bg: 'Семейство', color: '#2f7d4f', motif: 'heart',
    tips: [
      'Put ми after a word to say "my": брат ми = my brother.',
      'An ending like -ът or -та means "the": син (son) → синът (the son).'
    ],
    words: [
      ['м`ама', 'mum', '🤱'],
      ['т`атко', 'dad', '🧔'],
      ['син', 'son', '👦'],
      ['дъщер`я', 'daughter', '👧'],
      ['брат', 'brother', '🧑'],
      ['сестр`а', 'sister', '👱‍♀️'],
      ['б`аба', 'grandma', '👵'],
      ['д`ядо', 'grandpa', '👴'],
      ['дец`а', 'children', '🧒'],
      ['к`уче', 'dog', '🐕'],
      ['к`отка', 'cat', '🐈'],
      ['`имам', 'I have', '🎁']
    ],
    extra: [
      ['и', 'and'],
      ['ми', 'my (goes after the word)'],
      ['тов`а', 'this'],
      ['са', 'are (they)'],
      ['тук', 'here'],
      ['в', 'in']
    ],
    sentences: [
      ['Имам син и дъщеря.', 'I have a son and a daughter.'],
      ['Това е синът ми.', 'This is my son.'],
      ['Баба и дядо са тук.', 'Grandma and grandpa are here.'],
      ['Имам куче и котка.', 'I have a dog and a cat.'],
      ['Брат ми е в София.', 'My brother is in Sofia.'],
      ['Това е татко.', 'This is dad.']
    ]
  },
  {
    id: 'cafe', title: 'At the café', bg: 'В кафенето', color: '#8a4b1c', motif: 'cup',
    tips: [
      'Искам = I want. Put anything after it: Искам кафе. Искам вода.',
      'Add моля (please) at the end and you sound very polite.'
    ],
    words: [
      ['каф`е', 'coffee', '☕'],
      ['чай', 'tea', '🍵'],
      ['вод`а', 'water', '💧'],
      ['б`ира', 'beer', '🍺'],
      ['в`ино', 'wine', '🍷'],
      ['хляб', 'bread', '🍞'],
      ['с`ирене', 'white cheese', '🧀'],
      ['б`аница', 'banitsa (cheese pastry)', '🥧'],
      ['мл`яко', 'milk', '🥛'],
      ['з`ахар', 'sugar', '🍬'],
      ['`искам', 'I want', '👉'],
      ['вк`усно', 'tasty', '😋']
    ],
    extra: [
      ['едн`о', 'one'],
      ['едн`а', 'one (for "she" words)'],
      ['с', 'with'],
      ['без', 'without'],
      ['мн`ого', 'very, a lot'],
      ['см`етката', 'the bill']
    ],
    sentences: [
      ['Едно кафе, моля.', 'One coffee, please.', ['A coffee, please.']],
      ['Искам чай с мляко.', 'I want tea with milk.'],
      ['Без захар, моля.', 'Without sugar, please.', ['No sugar, please.']],
      ['Една бира и една вода, моля.', 'One beer and one water, please.', ['A beer and a water, please.']],
      ['Сметката, моля.', 'The bill, please.'],
      ['Много е вкусно!', 'It is very tasty!', ["It's very tasty!"]]
    ]
  },
  {
    id: 'numbers', title: 'Numbers & money', bg: 'Числа', color: '#1d6f73', motif: 'diamond',
    tips: [
      'To ask a price, just say: Колко струва?',
      'Bulgaria has used the euro since 1 January 2026.'
    ],
    words: [
      ['едн`о', 'one', '1'],
      ['две', 'two', '2'],
      ['три', 'three', '3'],
      ['ч`етири', 'four', '4'],
      ['пет', 'five', '5'],
      ['шест', 'six', '6'],
      ['с`едем', 'seven', '7'],
      ['`осем', 'eight', '8'],
      ['д`евет', 'nine', '9'],
      ['д`есет', 'ten', '10'],
      ['к`олко', 'how much, how many', '❓'],
      ['стр`ува', 'it costs', '🏷️'],
      ['`евро', 'euro', '💶']
    ],
    extra: [
      ['ск`ъпо', 'expensive'],
      ['евт`ино', 'cheap'],
      ['б`ири', 'beers']
    ],
    sentences: [
      ['Колко струва?', 'How much is it?', ['How much does it cost?']],
      ['Струва пет евро.', 'It costs five euros.'],
      ['Две бири, моля.', 'Two beers, please.'],
      ['Имам три деца.', 'I have three children.'],
      ['Скъпо е!', 'It is expensive!', ["It's expensive!"]],
      ['Евтино е.', 'It is cheap.', ["It's cheap."]]
    ]
  },
  {
    id: 'town', title: 'In town', bg: 'В града', color: '#7b2d5c', motif: 'house',
    tips: [
      'Къде е …? = Where is …? Add any place: Къде е хотелът?'
    ],
    words: [
      ['град', 'town, city', '🏙️'],
      ['`улица', 'street', '🛣️'],
      ['г`ара', 'station', '🚉'],
      ['автоб`ус', 'bus', '🚌'],
      ['такс`и', 'taxi', '🚕'],
      ['магаз`ин', 'shop', '🏪'],
      ['хот`ел', 'hotel', '🏨'],
      ['тоал`етна', 'toilet', '🚻'],
      ['бил`ет', 'ticket', '🎫'],
      ['нал`яво', 'to the left', '⬅️'],
      ['над`ясно', 'to the right', '➡️'],
      ['напр`аво', 'straight ahead', '⬆️'],
      ['къд`е', 'where', '🧭']
    ],
    extra: [
      ['до', 'to'],
      ['ед`ин', 'one (for "he" words)'],
      ['от`ивам', 'I am going']
    ],
    sentences: [
      ['Къде е гарата?', 'Where is the station?'],
      ['Къде е тоалетната?', 'Where is the toilet?'],
      ['Хотелът е наляво.', 'The hotel is on the left.', ['The hotel is to the left.']],
      ['Магазинът е направо.', 'The shop is straight ahead.'],
      ['Един билет до Варна, моля.', 'One ticket to Varna, please.', ['A ticket to Varna, please.']],
      ['Отивам в града.', 'I am going to town.', ["I'm going to town.", 'I am going to the city.']]
    ]
  },
  {
    id: 'market', title: 'At the market', bg: 'На пазара', color: '#a8740f', motif: 'tulip',
    tips: [
      'Не before a word makes it "not": обичам (I like) → не обичам (I don\'t like).',
      'Шопска салата is tomato, cucumber and white cheese. Bulgaria\'s favourite!'
    ],
    words: [
      ['`ябълка', 'apple', '🍎'],
      ['дом`ат', 'tomato', '🍅'],
      ['кр`аставица', 'cucumber', '🥒'],
      ['карт`оф', 'potato', '🥔'],
      ['яйц`е', 'egg', '🥚'],
      ['мес`о', 'meat', '🥩'],
      ['р`иба', 'fish', '🐟'],
      ['п`иле', 'chicken', '🍗'],
      ['сал`ата', 'salad', '🥗'],
      ['сладол`ед', 'ice cream', '🍦'],
      ['об`ичам', 'I love, I like', '❤️']
    ],
    extra: [
      ['ш`опска', 'shopska (Bulgarian salad)'],
      ['х`убави', 'nice (for many things)'],
      ['`ябълки', 'apples'],
      ['дом`атите', 'the tomatoes']
    ],
    sentences: [
      ['Искам шопска салата.', 'I want a shopska salad.'],
      ['Обичам риба.', 'I love fish.', ['I like fish.']],
      ['Не обичам месо.', "I don't like meat.", ['I do not like meat.']],
      ['Доматите са много хубави.', 'The tomatoes are very nice.'],
      ['Две ябълки, моля.', 'Two apples, please.'],
      ['Обичам сладолед!', 'I love ice cream!', ['I like ice cream!']]
    ]
  },
  {
    id: 'weather', title: 'Weather & days', bg: 'Времето', color: '#24406b', motif: 'sun',
    tips: [
      'е (is) does a lot of work: Днес е топло = Today it is warm.'
    ],
    words: [
      ['днес', 'today', '📅'],
      ['`утре', 'tomorrow', '⏭️'],
      ['вч`ера', 'yesterday', '⏮️'],
      ['сл`ънце', 'sun', '☀️'],
      ['дъжд', 'rain', '🌧️'],
      ['сняг', 'snow', '❄️'],
      ['т`опло', 'warm', '🌡️'],
      ['студ`ено', 'cold', '🥶'],
      ['х`убаво', 'nice, lovely', '🌼'],
      ['мор`е', 'sea, seaside', '🏖️'],
      ['вр`емето', 'the weather', '🌤️']
    ],
    extra: [
      ['нав`ън', 'outside'],
      ['`има', 'there is'],
      ['на', 'to, on'],
      ['от`иваме', 'we are going']
    ],
    sentences: [
      ['Днес е топло.', 'Today it is warm.', ['It is warm today.', "It's warm today."]],
      ['Навън е студено.', 'It is cold outside.', ["It's cold outside.", 'Outside it is cold.']],
      ['Времето е хубаво.', 'The weather is nice.', ['The weather is lovely.']],
      ['Днес има слънце.', 'Today it is sunny.', ['It is sunny today.', "It's sunny today."]],
      ['Отиваме на море.', 'We are going to the seaside.', ["We're going to the seaside."]]
    ]
  },
  {
    id: 'help', title: 'Useful phrases', bg: 'Полезни фрази', color: '#9b1b30', motif: 'rose',
    tips: [
      'ли turns a sentence into a question: Говорите английски → Говорите ли английски?'
    ],
    words: [
      ['разб`ирам', 'I understand', '💡'],
      ['гов`оря', 'I speak', '🗣️'],
      ['англ`ийски', 'English (language)', '🔤'],
      ['б`ългарски', 'Bulgarian (language)', '🔠'],
      ['гл`аден', 'hungry', '🍽️'],
      ['ж`аден', 'thirsty', '🥤'],
      ['умор`ен', 'tired', '😴'],
      ['б`олен', 'ill', '🤒'],
      ['л`екар', 'doctor', '🩺'],
      ['п`омощ', 'help!', '🆘'],
      ['б`авно', 'slowly', '🐢']
    ],
    extra: [
      ['ли', '(makes a question)'],
      ['гов`орите', 'you speak (polite)'],
      ['говор`ете', 'speak! (polite)'],
      ['по-б`авно', 'more slowly']
    ],
    sentences: [
      ['Не разбирам.', "I don't understand.", ['I do not understand.']],
      ['Говорите ли английски?', 'Do you speak English?'],
      ['Не говоря български.', "I don't speak Bulgarian.", ['I do not speak Bulgarian.']],
      ['Говорете по-бавно, моля.', 'Speak more slowly, please.', ['Please speak more slowly.']],
      ['Гладен съм.', 'I am hungry.', ["I'm hungry."]],
      ['Обичам България!', 'I love Bulgaria!']
    ]
  },
  {
    id: 'mylife', title: 'My life', bg: 'Моят живот', color: '#5a3e8c', motif: 'tree',
    tips: [
      'се казва = is called. Синът ми се казва Джеймс = My son is called James.',
      'си after a word means "my own": семейството си = my (own) family.'
    ],
    words: [
      ['сем`ейство', 'family', '👨‍👩‍👦'],
      ['съпр`уга', 'wife', '💍'],
      ['съпр`уг', 'husband', '🤵'],
      ['дом', 'home', '🏡'],
      ['жив`ея', 'I live', '📍'],
      ['раб`отя', 'I work', '🛠️'],
      ['`уча', 'I learn, I study', '📚'],
      ['гов`ори', 'he / she speaks', '🗣️'],
      ['горд', 'proud', '🥹'],
      ['щастл`ив', 'happy', '😄']
    ],
    extra: [
      ['Джеймс', 'James'],
      ['се к`азва', 'is called'],
      ['к`ато', 'as, like'],
      ['си', 'my own (goes after the word)'],
      ['сем`ейството', 'the family'],
      ['горд`ея се', 'I am proud'],
      ['със', 'with, of (before с- words)'],
      ['с`ина', 'the son (after със)']
    ],
    sentences: [
      ['Синът ми се казва Джеймс.', 'My son is called James.', ["My son's name is James."]],
      ['Джеймс говори български.', 'James speaks Bulgarian.'],
      ['Работя като заварчик.', 'I work as a welder.'],
      ['Живея в Англия.', 'I live in England.'],
      ['Уча български.', 'I am learning Bulgarian.', ["I'm learning Bulgarian.", 'I learn Bulgarian.']],
      ['Обичам семейството си.', 'I love my family.'],
      ['Гордея се със сина си.', 'I am proud of my son.', ["I'm proud of my son."]]
    ]
  },
  {
    id: 'work', title: 'At work', bg: 'На работа', color: '#4a5563', motif: 'spark',
    tips: [
      'Трябва ми … = I need … Add any tool: Трябва ми чук.',
      'Внимавай! (Careful!) is worth knowing on any job.'
    ],
    words: [
      ['мет`ал', 'metal', '🔩'],
      ['стом`ана', 'steel', '🏗️'],
      ['жел`язо', 'iron', '⛓️'],
      ['зав`арка', 'weld, welding', '⚡'],
      ['к`аска', 'helmet', '🪖'],
      ['ръкав`ици', 'gloves', '🧤'],
      ['чук', 'hammer', '🔨'],
      ['`огън', 'fire', '🔥'],
      ['гор`ещо', 'hot', '🌡️'],
      ['оп`асно', 'dangerous', '⚠️'],
      ['поч`ивка', 'break, rest', '☕'],
      ['р`абота', 'work, job', '💼']
    ],
    extra: [
      ['тр`ябва ми', 'I need'],
      ['д`айте ми', 'give me (polite)'],
      ['ч`ука', 'the hammer'],
      ['вним`авай', 'careful!'],
      ['вр`еме', 'time'],
      ['за', 'for'],
      ['р`аботата', 'the work, the job']
    ],
    sentences: [
      ['Внимавай, горещо е!', 'Careful, it is hot!', ["Careful, it's hot!"]],
      ['Трябва ми каска.', 'I need a helmet.'],
      ['Дайте ми чука, моля.', 'Give me the hammer, please.', ['Please give me the hammer.']],
      ['Това е стомана.', 'This is steel.'],
      ['Много е опасно.', 'It is very dangerous.', ["It's very dangerous."]],
      ['Време е за почивка!', 'It is time for a break!', ["It's time for a break!"]],
      ['Обичам работата си.', 'I love my job.', ['I love my work.', 'I like my job.']]
    ]
  }
];

/* Who the voice messages are from (shown as "A message from …") */
window.BG_SETTINGS = { messagesFrom: 'James' };

/*
  Extra translations for the tap-a-word hints, for word forms that are not
  in any word list above (mostly "the" forms and place names).
  The hints already know every word and helper word above.
*/
window.BG_GLOSS = {
  'синът': 'the son',
  'гарата': 'the station',
  'тоалетната': 'the toilet',
  'хотелът': 'the hotel',
  'магазинът': 'the shop',
  'града': 'the town, the city',
  'софия': 'Sofia',
  'варна': 'Varna'
};

/*
  Stories: short conversations that unlock after a unit (after: unit id).
  lines:     [character, 'Bulgarian', 'English']
  newWords:  words not taught yet, shown before the story (and used for tap hints)
  questions: { q, options, answer (0 = first option), line (which line to show, from 0) }
  Characters: russell, james, stanimira, waiter, woman, cashier, seller, petar
*/
window.BG_STORIES = [
  {
    id: 'friend', after: 'me', title: 'A new friend', bg: 'Нов приятел',
    lines: [
      ['stanimira', 'Здравейте! Как сте?', 'Hello! How are you?'],
      ['russell', 'Здравейте! Добре съм, благодаря. А вие?', "Hello! I'm fine, thanks. And you?"],
      ['stanimira', 'Добре, благодаря. Казвам се Станимира. Аз съм учителка.', "Fine, thanks. My name is Stanimira. I'm a teacher."],
      ['russell', 'Казвам се Ръсел. Аз съм заварчик.', "My name is Russell. I'm a welder."],
      ['stanimira', 'От Англия ли сте?', 'Are you from England?'],
      ['russell', 'Да, от Англия съм.', "Yes, I'm from England."],
      ['stanimira', 'Приятно ми е!', 'Nice to meet you!'],
      ['russell', 'И на мен!', 'Me too!']
    ],
    newWords: [['а', 'and (to ask back)'], ['в`ие', 'you (polite)'], ['прия`тно ми е', 'nice to meet you'], ['и на мен', 'me too']],
    gloss: { 'станимира': 'Stanimira' },
    questions: [
      { q: "What is Stanimira's job?", options: ['A teacher', 'A welder', 'A doctor'], answer: 0, line: 2 },
      { q: 'Where is Russell from?', options: ['England', 'Bulgaria', 'Sofia'], answer: 0, line: 5 },
      { q: 'What does this mean?', options: ['Nice to meet you!', 'Thank you!', 'Goodbye!'], answer: 0, line: 6 }
    ]
  },
  {
    id: 'cafe', after: 'numbers', title: 'At the café', bg: 'В кафенето',
    lines: [
      ['waiter', 'Добър ден! Заповядайте.', 'Good afternoon! Welcome.'],
      ['russell', 'Добър ден! Едно кафе, моля.', 'Good afternoon! One coffee, please.'],
      ['waiter', 'С мляко?', 'With milk?'],
      ['russell', 'Да, с мляко, но без захар.', 'Yes, with milk, but no sugar.'],
      ['waiter', 'Нещо за ядене?', 'Something to eat?'],
      ['russell', 'Да, една баница, моля.', 'Yes, a banitsa, please.'],
      ['russell', 'Много е вкусно! Сметката, моля.', "It's very tasty! The bill, please."],
      ['waiter', 'Пет евро.', 'Five euros.']
    ],
    newWords: [['заповя`дайте', 'welcome, here you go'], ['но', 'but'], ['н`ещо', 'something'], ['за `ядене', 'to eat']],
    questions: [
      { q: 'Does Russell take sugar?', options: ['No, no sugar', 'Yes, lots', 'Yes, a little'], answer: 0, line: 3 },
      { q: 'What does Russell eat?', options: ['A banitsa', 'Bread', 'A salad'], answer: 0, line: 5 },
      { q: 'How much is the bill?', options: ['Five euros', 'Three euros', 'Ten euros'], answer: 0, line: 7 }
    ]
  },
  {
    id: 'station', after: 'town', title: 'Where is the station?', bg: 'Къде е гарата?',
    lines: [
      ['russell', 'Извинете, къде е гарата?', 'Excuse me, where is the station?'],
      ['woman', 'Гарата ли? Направо, после наляво.', 'The station? Straight on, then left.'],
      ['russell', 'Направо и наляво?', 'Straight on and left?'],
      ['woman', 'Да. На пет минути е. Приятен ден!', "Yes. It's five minutes away. Have a nice day!"],
      ['russell', 'Благодаря!', 'Thank you!'],
      ['russell', 'Един билет до Варна, моля. Колко струва?', 'One ticket to Varna, please. How much is it?'],
      ['cashier', 'Десет евро.', 'Ten euros.'],
      ['russell', 'Ето. Благодаря!', 'Here you are. Thank you!']
    ],
    newWords: [['извин`ете', 'excuse me'], ['п`осле', 'then, after'], ['на пет мин`ути', 'five minutes away'], ['прия`тен ден', 'have a nice day'], ['`ето', 'here you are']],
    questions: [
      { q: 'Which way is the station?', options: ['Straight on, then left', 'Left, then right', 'Straight on, then right'], answer: 0, line: 1 },
      { q: 'How far away is it?', options: ['Five minutes', 'Ten minutes', 'One hour'], answer: 0, line: 3 },
      { q: 'Where is Russell going?', options: ['Varna', 'Sofia', 'Plovdiv'], answer: 0, line: 5 }
    ]
  },
  {
    id: 'market', after: 'market', title: 'At the market', bg: 'На пазара',
    lines: [
      ['seller', 'Добро утро! Какво искате?', 'Good morning! What would you like?'],
      ['russell', 'Добро утро! Искам домати и краставици.', "Good morning! I'd like tomatoes and cucumbers."],
      ['seller', 'Доматите са много хубави днес.', 'The tomatoes are very nice today.'],
      ['russell', 'Колко струват?', 'How much are they?'],
      ['seller', 'Три евро килото.', 'Three euros a kilo.'],
      ['russell', 'Добре. Един килограм, моля. И две ябълки.', 'OK. One kilo, please. And two apples.'],
      ['seller', 'Заповядайте. Нещо друго?', 'Here you go. Anything else?'],
      ['russell', 'Не, благодаря. Довиждане!', 'No, thank you. Goodbye!']
    ],
    newWords: [['как`во', 'what'], ['стр`уват', 'they cost'], ['кил`ото', 'a kilo, per kilo'], ['килогр`ам', 'kilogram'], ['н`ещо др`уго', 'anything else']],
    gloss: { 'домати': 'tomatoes', 'краставици': 'cucumbers' },
    questions: [
      { q: 'What does Russell buy?', options: ['Tomatoes, cucumbers and apples', 'Bread and cheese', 'Fish and potatoes'], answer: 0, line: 5 },
      { q: 'How much are the tomatoes?', options: ['Three euros a kilo', 'Five euros a kilo', 'Two euros a kilo'], answer: 0, line: 4 },
      { q: 'What does this mean?', options: ['Here you go. Anything else?', 'How much is it?', 'Good morning!'], answer: 0, line: 6 }
    ]
  },
  {
    id: 'call', after: 'mylife', title: 'A call from James', bg: 'Обаждане от Джеймс',
    lines: [
      ['james', 'Ало, татко! Как си?', 'Hello, Dad! How are you?'],
      ['russell', 'Здравей, сине! Добре съм, но съм малко уморен.', "Hi, son! I'm fine, but I'm a bit tired."],
      ['james', 'Как е времето в Англия?', "How's the weather in England?"],
      ['russell', 'Студено е и вали дъжд.', "It's cold and it's raining."],
      ['james', 'А какво правиш?', 'And what are you doing?'],
      ['russell', 'Уча български!', "I'm learning Bulgarian!"],
      ['james', 'Браво, татко! Гордея се с теб!', "Well done, Dad! I'm proud of you!"],
      ['russell', 'Благодаря, сине.', 'Thank you, son.']
    ],
    newWords: [['`ало', 'hello (on the phone)'], ['с`ине', 'son (when talking to him)'], ['м`алко', 'a little, a bit'], ['вал`и', 'it is falling (rain or snow)'], ['пр`авиш', 'you are doing'], ['с теб', 'of you, with you']],
    gloss: { 'здравей': 'hi (to one friend)', 'си': 'are (you)' },
    questions: [
      { q: 'How does Russell feel?', options: ['A bit tired', 'Very hungry', 'Ill'], answer: 0, line: 1 },
      { q: 'What is the weather like in England?', options: ['Cold and rainy', 'Warm and sunny', 'Snowy'], answer: 0, line: 3 },
      { q: 'What is Russell doing?', options: ['Learning Bulgarian', 'Working', 'Eating'], answer: 0, line: 5 }
    ]
  },
  {
    id: 'break', after: 'work', title: 'Break time', bg: 'Почивка',
    lines: [
      ['petar', 'Ръсел, внимавай! Металът е много горещ!', 'Russell, careful! The metal is very hot!'],
      ['russell', 'Благодаря! Дай ми ръкавиците, моля.', 'Thanks! Give me the gloves, please.'],
      ['petar', 'Ето. Време е за почивка! Искаш ли кафе?', 'Here. It is break time! Do you want a coffee?'],
      ['russell', 'Да, с мляко, моля.', 'Yes, with milk, please.'],
      ['petar', 'Обичаш ли работата си?', 'Do you like your job?'],
      ['russell', 'Да, много!', 'Yes, a lot!']
    ],
    newWords: [['гор`ещ', 'hot (for "he" words)'], ['дай ми', 'give me (to a friend)'], ['`искаш', 'you want (to a friend)'], ['об`ичаш', 'you like (to a friend)']],
    gloss: { 'металът': 'the metal', 'ръкавиците': 'the gloves', 'петър': 'Petar' },
    questions: [
      { q: 'Why does Petar say "careful"?', options: ['The metal is very hot', 'The floor is wet', 'It is raining'], answer: 0, line: 0 },
      { q: 'What does Russell ask for?', options: ['The gloves', 'A helmet', 'A hammer'], answer: 0, line: 1 },
      { q: 'Does Russell like his job?', options: ['Yes, a lot', 'No', 'Only a little'], answer: 0, line: 5 }
    ]
  }
];

/* Names shown above each character's speech bubble */
window.BG_CAST = {
  russell: 'Ръсел', james: 'Джеймс', stanimira: 'Станимира', waiter: 'Сервитьор',
  woman: 'Жена', cashier: 'Касиерка', seller: 'Продавачка', petar: 'Петър'
};

/*
  Picture dictionary rooms. items: [object id, 'Bulgarian', 'English']
  The object ids match the drawings, so keep them; the words can change.
*/
window.BG_ROOMS = [
  {
    id: 'kitchen', title: 'Kitchen', bg: 'Кухня',
    items: [
      ['table', 'м`аса', 'table'], ['chair', 'стол', 'chair'], ['cup', 'ч`аша', 'cup'], ['plate', 'чин`ия', 'plate'],
      ['knife', 'нож', 'knife'], ['fork', 'в`илица', 'fork'], ['spoon', 'лъж`ица', 'spoon'], ['fridge', 'хлад`илник', 'fridge'],
      ['cooker', 'п`ечка', 'cooker'], ['pot', 'т`енджера', 'pot'], ['window', 'проз`орец', 'window'], ['clock', 'час`овник', 'clock']
    ]
  },
  {
    id: 'workshop', title: 'Workshop', bg: 'Работилница',
    items: [
      ['hammer', 'чук', 'hammer'], ['spanner', 'г`аечен ключ', 'spanner'], ['screwdriver', 'отв`ертка', 'screwdriver'], ['saw', 'три`он', 'saw'],
      ['nails', 'пир`они', 'nails'], ['gloves', 'ръкав`ици', 'gloves'], ['helmet', 'к`аска', 'helmet'], ['bench', 'тезг`ях', 'workbench'],
      ['ladder', 'ст`ълба', 'ladder'], ['bucket', 'к`офа', 'bucket'], ['lamp', 'л`ампа', 'lamp'], ['box', 'кут`ия', 'box']
    ]
  },
  {
    id: 'garden', title: 'Garden', bg: 'Градина',
    items: [
      ['tree', 'дърв`о', 'tree'], ['flower', 'цв`ете', 'flower'], ['grass', 'трев`а', 'grass'], ['bird', 'пт`ица', 'bird'],
      ['sun', 'сл`ънце', 'sun'], ['cloud', '`облак', 'cloud'], ['gate', 'п`орта', 'gate'], ['bench', 'п`ейка', 'bench'],
      ['hose', 'марк`уч', 'hose'], ['shovel', 'лоп`ата', 'shovel']
    ]
  }
];
