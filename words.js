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
      ['уч`ител', 'teacher', '🧑‍🏫'],
      ['от', 'from', ''],
      ['Бълг`ария', 'Bulgaria', '🇧🇬'],
      ['`Англия', 'England', '💂']
    ],
    extra: [
      ['мой', 'my'],
      ['д`обър', 'good']
    ],
    sentences: [
      ['Казвам се Иван.', 'My name is Ivan.', ["I'm called Ivan."]],
      ['Аз съм от Англия.', 'I am from England.', ["I'm from England."]],
      ['Тя е от България.', 'She is from Bulgaria.', ["She's from Bulgaria."]],
      ['Аз съм учител.', 'I am a teacher.', ["I'm a teacher."]],
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
      ['говор`я', 'I speak', '🗣️'],
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
      ['говор`ите', 'you speak (polite)'],
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
  }
];
