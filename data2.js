/* Tilmoch v3 — A1 dan C2 gacha kontent: yangi mavzular, grammatika, rasmlar, imtihon zali */
(function(){
const T=window.TOPICS;
const acad=T.find(x=>x.id==='acad');if(acad)acad.t={uz:"Akademik so'zlar",ru:'Академическая лексика'};

T.push(
 {id:'tech',lvl:'B1',t:{uz:'Texnologiya',ru:'Технологии'},w:[
  ["computer","kompyuter","компьютер"],["internet","internet","интернет"],["website","veb-sayt","веб-сайт"],["password","parol","пароль"],["download","yuklab olmoq","скачивать"],["screen","ekran","экран"],
  ["keyboard","klaviatura","клавиатура"],["battery","batareya","батарея"],["message","xabar","сообщение"],["device","qurilma","устройство"],["software","dasturiy ta'minot","программа"],["charge","zaryadlamoq","заряжать"]]},
 {id:'health',lvl:'B1',t:{uz:"Sog'liq va sport",ru:'Здоровье и спорт'},w:[
  ["exercise","jismoniy mashq","упражнение"],["diet","parhez","диета"],["muscle","mushak","мышца"],["injury","jarohat","травма"],["team","jamoa","команда"],["match","musobaqa","матч"],
  ["win","yutmoq","побеждать"],["lose","yutqazmoq","проигрывать"],["coach","murabbiy","тренер"],["stress","stress","стресс"],["habit","odat","привычка"],["recover","tuzalmoq","выздоравливать"]]},
 {id:'media',lvl:'B1',t:{uz:'Ommaviy axborot',ru:'СМИ'},w:[
  ["news","yangiliklar","новости"],["newspaper","gazeta","газета"],["article","maqola","статья"],["journalist","jurnalist","журналист"],["advertisement","reklama","реклама"],["channel","kanal","канал"],
  ["audience","tomoshabinlar","аудитория"],["headline","sarlavha","заголовок"],["opinion","fikr","мнение"],["source","manba","источник"],["publish","nashr qilmoq","публиковать"],["fake","soxta","поддельный"]]},
 {id:'economy',lvl:'B2',t:{uz:'Iqtisodiyot',ru:'Экономика'},w:[
  ["economy","iqtisodiyot","экономика"],["income","daromad","доход"],["tax","soliq","налог"],["profit","sof foyda","прибыль"],["investment","sarmoya","инвестиция"],["loan","qarz (kredit)","кредит"],
  ["budget","byudjet","бюджет"],["growth","o'sish","рост"],["unemployment","ishsizlik","безработица"],["trade","savdo","торговля"],["inflation","inflyatsiya","инфляция"],["demand","talab","спрос"]]},
 {id:'science',lvl:'B2',t:{uz:'Ilm-fan',ru:'Наука'},w:[
  ["experiment","eksperiment","эксперимент"],["theory","nazariya","теория"],["discovery","kashfiyot","открытие"],["data","ma'lumotlar","данные"],["laboratory","laboratoriya","лаборатория"],["scientist","olim","учёный"],
  ["method","usul","метод"],["result","natija","результат"],["analyse","tahlil qilmoq","анализировать"],["prove","isbotlamoq","доказывать"],["accurate","aniq","точный"],["hypothesis","gipoteza","гипотеза"]]},
 {id:'community',lvl:'B2',t:{uz:'Jamiyat va huquq',ru:'Общество и право'},w:[
  ["community","jamoatchilik","сообщество"],["government","hukumat","правительство"],["law","qonun","закон"],["citizen","fuqaro","гражданин"],["rights","huquqlar","права"],["equality","tenglik","равенство"],
  ["poverty","qashshoqlik","бедность"],["crime","jinoyat","преступление"],["volunteer","ko'ngilli","волонтёр"],["population","aholi","население"],["tradition","an'ana","традиция"],["generation","avlod","поколение"]]},
 {id:'acverbs',lvl:'C1',t:{uz:"Akademik fe'llar",ru:'Академические глаголы'},w:[
  ["assess","baholamoq","оценивать"],["emphasise","ta'kidlamoq","подчёркивать"],["acknowledge","tan olmoq","признавать"],["undermine","putur yetkazmoq","подрывать"],["enhance","kuchaytirmoq","усиливать"],["facilitate","osonlashtirmoq","облегчать"],
  ["justify","asoslamoq","обосновывать"],["contribute","hissa qo'shmoq","вносить вклад"],["highlight","alohida ko'rsatmoq","выделять"],["neglect","e'tiborsiz qoldirmoq","пренебрегать"],["sustain","saqlab turmoq","поддерживать"],["exacerbate","yanada yomonlashtirmoq","усугублять"]]},
 {id:'linkers',lvl:'C1',t:{uz:"Bog'lovchi iboralar",ru:'Связующие слова'},w:[
  ["moreover","bundan tashqari","более того"],["nevertheless","shunga qaramay","тем не менее"],["consequently","natijada","следовательно"],["whereas","holbuki","тогда как"],["furthermore","qolaversa","кроме того"],["in contrast","aksincha","напротив"],
  ["despite","...ga qaramay","несмотря на"],["thus","shunday qilib","таким образом"],["although","garchi","хотя"],["in addition","qo'shimcha ravishda","в дополнение"],["for instance","masalan","например"],["on the whole","umuman olganda","в целом"]]},
 {id:'abstract',lvl:'C1',t:{uz:'Mavhum tushunchalar',ru:'Абстрактные понятия'},w:[
  ["freedom","erkinlik","свобода"],["justice","adolat","справедливость"],["responsibility","mas'uliyat","ответственность"],["awareness","xabardorlik","осведомлённость"],["diversity","xilma-xillik","разнообразие"],["identity","o'zlik","идентичность"],
  ["wisdom","donolik","мудрость"],["consequence","oqibat","последствие"],["perspective","nuqtai nazar","точка зрения"],["priority","ustuvorlik","приоритет"],["trust","ishonch","доверие"],["challenge","qiyin sinov","вызов"]]},
 {id:'idioms',lvl:'C2',only:'en',t:{uz:'Ingliz iboralari',ru:'Английские идиомы'},w:[
  ["break the ice","sukunatni buzmoq","разрядить обстановку"],["a piece of cake","juda oson ish","проще простого"],["hit the books","astoydil o'qimoq","засесть за учёбу"],["under the weather","biroz betob","неважно себя чувствовать"],
  ["once in a blue moon","juda kamdan-kam","крайне редко"],["cost an arm and a leg","juda qimmat turmoq","стоить целое состояние"],["the last straw","sabr kosasini to'ldirgan narsa","последняя капля"],["on the fence","ikkilanib turgan","в раздумьях"],
  ["get the hang of","ko'nikib olmoq","наловчиться"],["bite off more than you can chew","kuchidan ortiq ishni olmoq","взвалить на себя слишком много"],["a blessing in disguise","yashirin ne'mat","нет худа без добра"],["keep an eye on","ko'z-quloq bo'lmoq","присматривать"]]},
 {id:'ruidioms',lvl:'C2',only:'ru',t:{uz:'Rus iboralari',ru:'Русские идиомы'},w:[
  ["idle about","bekorchilik qilmoq","бить баклуши"],["pour with rain","chelaklab quymoq","лить как из ведра"],["impossible to find","qidirsang ham topilmaydi","днём с огнём не сыщешь"],["once in a hundred years","yuz yilda bir marta","раз в сто лет"],
  ["keep completely silent","og'ziga talqon solmoq","как воды в рот набрать"],["work carelessly","chala-chulpa ishlamoq","работать спустя рукава"],["lead by the nose","boshini aylantirmoq","водить за нос"],["very close by","qo'l cho'zsa yetadigan joyda","рукой подать"],
  ["be over the moon","osmonda uchmoq","быть на седьмом небе"],["know inside out","besh qo'lday bilmoq","знать как свои пять пальцев"],["in a rush","shosha-pisha","на скорую руку"],["easy as pie","juda oson","проще пареной репы"]]},
 {id:'nuance',lvl:'C2',t:{uz:"Nozik ma'noli so'zlar",ru:'Слова с оттенками'},w:[
  ["ubiquitous","hamma joyda uchraydigan","повсеместный"],["meticulous","sinchkov","дотошный"],["ambiguous","ikki ma'noli","двусмысленный"],["pragmatic","amaliy fikrlovchi","прагматичный"],["inevitable","muqarrar","неизбежный"],["resilient","chidamli","стойкий"],
  ["scrutinise","sinchiklab tekshirmoq","тщательно изучать"],["unprecedented","misli ko'rilmagan","беспрецедентный"],["eloquent","so'zga chechan","красноречивый"],["plausible","ishonarli","правдоподобный"],["detrimental","zararli","пагубный"],["profound","chuqur","глубокий"]]}
);

/* Daraja meta */
window.LEVELS=[
 {id:'A1',city:{uz:'Toshkent',ru:'Ташкент'},ielts:'2–3',trki:'ТЭУ'},
 {id:'A2',city:{uz:'Samarqand',ru:'Самарканд'},ielts:'3.5–4',trki:'ТБУ'},
 {id:'B1',city:{uz:'Buxoro',ru:'Бухара'},ielts:'4–5',trki:'ТРКИ-1'},
 {id:'B2',city:{uz:'Xiva',ru:'Хива'},ielts:'5.5–6.5',trki:'ТРКИ-2'},
 {id:'C1',city:{uz:'Pomir dovoni',ru:'Памирский перевал'},ielts:'7–8',trki:'ТРКИ-3'},
 {id:'C2',city:{uz:'Cho‘qqi',ru:'Вершина'},ielts:'8.5–9',trki:'ТРКИ-4'}
];

/* Rasmlar (so'zning inglizcha kaliti bo'yicha) */
window.PICS={
 "hello":"👋","thank you":"🙏","good morning":"🌅","good night":"🌙","yes":"✅","no":"❌","welcome":"🤗","friend":"🤝",
 "one":"1️⃣","two":"2️⃣","three":"3️⃣","four":"4️⃣","five":"5️⃣","six":"6️⃣","seven":"7️⃣","eight":"8️⃣","nine":"9️⃣","ten":"🔟","hundred":"💯",
 "mother":"👩","father":"👨","grandmother":"👵","grandfather":"👴","child":"👶","wife":"👰","husband":"🤵","sister":"👧","brother":"👦",
 "week":"🗓️","hour":"⏰","minute":"⏱️","morning":"🌄","evening":"🌆",
 "bread":"🍞","water":"💧","meat":"🥩","rice":"🍚","apple":"🍎","milk":"🥛","tea":"🍵","egg":"🥚","salt":"🧂","vegetables":"🥦","breakfast":"🍳",
 "house":"🏠","door":"🚪","window":"🪟","chair":"🪑","bed":"🛏️","key":"🔑","garden":"🌷","wall":"🧱",
 "go":"🚶","eat":"🍽️","drink":"🥤","read":"📖","write":"✍️","speak":"🗣️","listen":"👂","buy":"🛒","sleep":"😴","work":"💼","learn":"🎓",
 "big":"🐘","small":"🐭","hot":"🔥","cold":"🥶","fast":"🏎️","new":"✨","old":"🏚️","good":"👍","bad":"👎",
 "red":"🟥","blue":"🟦","green":"🟩","yellow":"🟨","white":"⬜","black":"⬛","orange":"🟧","brown":"🟫","purple":"🟪","pink":"🌸","colour":"🎨",
 "sun":"☀️","rain":"🌧️","snow":"❄️","wind":"💨","cloud":"☁️","spring":"🌱","summer":"🏖️","autumn":"🍂","winter":"⛄","warm":"🌡️",
 "street":"🛣️","shop":"🏪","hospital":"🏥","school":"🏫","market":"🧺","bus":"🚌","station":"🚉","bridge":"🌉","park":"🏞️","pharmacy":"💊","map":"🗺️","bank":"🏦",
 "hand":"✋","eye":"👁️","ear":"👂","leg":"🦵","tooth":"🦷","heart":"❤️","doctor":"🧑‍⚕️","pain":"🤕","fever":"🤒",
 "ticket":"🎫","passport":"🛂","airport":"🛫","luggage":"🧳","hotel":"🏨","flight":"✈️",
 "happy":"😄","sad":"😢","angry":"😠","tired":"😫","afraid":"😨","surprised":"😲","bored":"🥱","worried":"😟","calm":"😌","love":"💕","smile":"😊",
 "money":"💵","card":"💳","receipt":"🧾","cash":"💰","price":"🏷️",
 "office":"🏢","meeting":"👥","manager":"👔","report":"📊","interview":"🤝",
 "university":"🏛️","teacher":"🧑‍🏫","student":"🧑‍🎓","exam":"📝","library":"📚","homework":"📓",
 "mountain":"⛰️","river":"🏞️","sea":"🌊","forest":"🌲","desert":"🏜️","tree":"🌳","flower":"🌻","animal":"🐾","bird":"🐦","pollution":"🏭",
 "computer":"💻","internet":"🌐","password":"🔒","screen":"🖥️","keyboard":"⌨️","battery":"🔋","message":"💬",
 "exercise":"🏋️","muscle":"💪","injury":"🩹","match":"⚽","win":"🏆","coach":"📣",
 "news":"📺","newspaper":"📰","journalist":"🎙️","advertisement":"📢",
 "laboratory":"🧪","scientist":"🔬","data":"📈","discovery":"💡"
};
})();

/* ---- Ingliz grammatikasi: B1–C2 ---- */
window.EN_LESSONS.push(
 {id:'pastc',lvl:'B1',t:{uz:'Past Continuous',ru:'Past Continuous'},
  d:{uz:"O'tmishda ma'lum bir paytda <b>davom etib turgan</b> ish-harakat: at 8 p.m. yesterday, while, when. Ko'pincha uni qisqa ish-harakat (Past Simple) bo'lib qo'yadi. Tuzilishi: was / were + fe'l-ing.",
     ru:"Действие, которое <b>длилось</b> в определённый момент в прошлом: at 8 p.m. yesterday, while, when. Часто его прерывает короткое действие в Past Simple. Схема: was / were + глагол-ing."},
  f:[["I / he / she / it + was + verb-ing","I was reading at 9 p.m."],["you / we / they + were + verb-ing","They were playing football."],["while + Past Continuous, Past Simple","While I was cooking, the phone rang."]],
  ex:[["I was sleeping when you called.","Sen qo'ng'iroq qilganingda men uxlayotgan edim.","Я спал, когда ты позвонил."],["What were you doing at six?","Soat oltida nima qilayotgan eding?","Что ты делал в шесть?"],["It was raining all evening.","Kechqurun bo'yi yomg'ir yog'di.","Весь вечер шёл дождь."]],
  q:[["At 7 p.m. yesterday I ___ dinner.",["was having","had","have"],0],["They ___ TV when the lights went out.",["was watching","were watching","watched"],1],["While she ___, she cut her finger.",["cooked","was cooking","cooks"],1],["What ___ you doing at midnight?",["was","were","did"],1],["He ___ not listening to the teacher.",["were","was","did"],1]]},
 {id:'passive',lvl:'B1',t:{uz:'Majhul nisbat (Passive)',ru:'Пассивный залог'},
  d:{uz:"Harakatni kim bajargani emas, <b>harakatning o'zi yoki natijasi</b> muhim bo'lganda ishlatiladi: The bridge was built in 1990. Tuzilishi: be + fe'lning 3-shakli (V3). Bajaruvchi by bilan ko'rsatiladi.",
     ru:"Используется, когда важно <b>действие или результат</b>, а не исполнитель: The bridge was built in 1990. Схема: be + третья форма глагола (V3). Исполнитель вводится через by."},
  f:[["am / is / are + V3","English is spoken here."],["was / were + V3","The letter was sent yesterday."],["will be + V3","The results will be announced soon."],["… + by + agent","The poem was written by Navoiy."]],
  ex:[["Cotton is grown in Uzbekistan.","O'zbekistonda paxta yetishtiriladi.","В Узбекистане выращивают хлопок."],["The window was broken last night.","Kecha kechasi deraza sindirilgan.","Прошлой ночью разбили окно."],["The meeting will be held on Monday.","Yig'ilish dushanba kuni o'tkaziladi.","Совещание пройдёт в понедельник."]],
  q:[["This house ___ in 1950.",["built","was built","is build"],1],["English ___ all over the world.",["is spoken","speaks","is speak"],0],["The winners ___ tomorrow.",["will announce","will be announced","are announce"],1],["The cake was made ___ my mother.",["from","by","with"],1],["Thousands of photos ___ every minute.",["are uploaded","uploaded","are upload"],0]]},
 {id:'cond2',lvl:'B1',t:{uz:'Second Conditional',ru:'Second Conditional'},
  d:{uz:"Hozirgi yoki kelajakdagi <b>xayoliy, ehtimoli kam</b> vaziyat: If I had more time, I would travel. If qismida Past Simple, natijada would + fe'l. «I» bilan ko'pincha were ishlatiladi: If I were you…",
     ru:"<b>Нереальная или маловероятная</b> ситуация в настоящем или будущем: If I had more time, I would travel. В части с if — Past Simple, в результате — would + глагол. После I часто ставят were: If I were you…"},
  f:[["If + Past Simple, would + verb","If I won the lottery, I would buy a house."],["If I were you, I would …","If I were you, I would apologise."],["would + verb + if + Past Simple","She would help if she knew."]],
  ex:[["If I lived by the sea, I would swim every day.","Dengiz bo'yida yashaganimda, har kuni suzardim.","Если бы я жил у моря, я бы плавал каждый день."],["What would you do if you lost your phone?","Telefoningni yo'qotsang, nima qilarding?","Что бы ты сделал, если бы потерял телефон?"],["If I were you, I wouldn't sign it.","Sening o'rningda bo'lganimda, uni imzolamasdim.","На твоём месте я бы это не подписывал."]],
  q:[["If I ___ rich, I would help everyone.",["am","were","will be"],1],["If she studied more, she ___ pass.",["will","would","is"],1],["What ___ you do if you saw a ghost?",["would","will","did"],0],["If we ___ a car, we would drive to Khiva.",["have","had","would have"],1],["I ___ buy that coat if it were cheaper.",["will","would","am"],1]]},
 {id:'relative',lvl:'B1',t:{uz:'Nisbiy ergash gaplar',ru:'Относительные придаточные'},
  d:{uz:"Odam yoki narsa haqida qo'shimcha ma'lumot beradi: <b>who</b> — odamlar, <b>which</b> — narsalar, <b>that</b> — ikkalasi, <b>where</b> — joy, <b>whose</b> — egalik uchun.",
     ru:"Уточняют человека или предмет: <b>who</b> — люди, <b>which</b> — предметы, <b>that</b> — и то и другое, <b>where</b> — место, <b>whose</b> — принадлежность."},
  f:[["person + who …","The man who called is my uncle."],["thing + which / that …","The phone which I bought is fast."],["place + where …","This is the café where we met."],["whose + noun","She's the girl whose bag was stolen."]],
  ex:[["I have a friend who speaks five languages.","Besh tilda gapiradigan do'stim bor.","У меня есть друг, который говорит на пяти языках."],["Samarkand is the city where my parents met.","Samarqand ota-onam tanishgan shahar.","Самарканд — город, где познакомились мои родители."],["The book that you gave me is great.","Sen bergan kitob ajoyib.","Книга, которую ты мне дал, отличная."]],
  q:[["The woman ___ lives next door is a doctor.",["which","who","where"],1],["This is the hotel ___ we stayed.",["where","which","who"],0],["The car ___ he bought is red.",["who","which","whose"],1],["He's the student ___ essay won the prize.",["who","whose","which"],1],["I like films ___ make me think.",["that","who","where"],0]]},
 {id:'ppc',lvl:'B2',t:{uz:'Present Perfect Continuous',ru:'Present Perfect Continuous'},
  d:{uz:"O'tmishda boshlanib, <b>hozirgacha davom etayotgan</b> (yoki hozirgina tugab, izi qolgan) ish-harakat. Davomiylik muhim: for two hours, since morning, how long. Tuzilishi: have / has been + fe'l-ing.",
     ru:"Действие началось в прошлом и <b>продолжается до сих пор</b> (или только что закончилось и видны следы). Важна длительность: for two hours, since morning, how long. Схема: have / has been + глагол-ing."},
  f:[["have / has been + verb-ing","I have been waiting for an hour."],["How long have you been + verb-ing?","How long have you been learning English?"],["has been + verb-ing (visible result)","Her eyes are red. She has been crying."]],
  ex:[["We have been living here since 2015.","Biz bu yerda 2015-yildan beri yashayapmiz.","Мы живём здесь с 2015 года."],["She has been working all day, so she's tired.","U kun bo'yi ishladi, shuning uchun charchagan.","Она работала весь день, поэтому устала."],["How long have you been studying for IELTS?","IELTS ga qancha vaqtdan beri tayyorlanyapsan?","Как долго ты готовишься к IELTS?"]],
  q:[["I ___ for you since 9 o'clock!",["am waiting","have been waiting","waited"],1],["How long ___ she been learning Russian?",["has","have","is"],0],["They have been ___ all morning.",["argue","arguing","argued"],1],["It ___ raining for three days.",["has been","have been","is been"],0],["My hands are dirty because I ___ in the garden.",["have been working","work","am work"],0]]},
 {id:'reported',lvl:'B2',t:{uz:"O'zlashtirma gap",ru:'Косвенная речь'},
  d:{uz:"Boshqaning gapini yetkazganda zamon odatda <b>bir pog'ona orqaga</b> suriladi: «I am tired» → She said (that) she was tired. Olmosh va vaqt so'zlari ham o'zgaradi: today → that day, tomorrow → the next day.",
     ru:"При передаче чужой речи время обычно <b>сдвигается на шаг назад</b>: «I am tired» → She said (that) she was tired. Меняются местоимения и слова времени: today → that day, tomorrow → the next day."},
  f:[["Present Simple → Past Simple","«I like it» → He said he liked it."],["will → would","«I will call» → She said she would call."],["asked + if / wh- + statement order","«Where do you live?» → He asked where I lived."]],
  ex:[["She said that she was busy.","U band ekanini aytdi.","Она сказала, что занята."],["He told me he would come the next day.","U ertasi kuni kelishini aytdi.","Он сказал мне, что придёт на следующий день."],["They asked if I spoke Russian.","Ular ruscha gapirishimni so'rashdi.","Они спросили, говорю ли я по-русски."]],
  q:[["«I am hungry.» → He said he ___ hungry.",["is","was","be"],1],["«I will help you.» → She said she ___ help me.",["will","would","can"],1],["«Do you like tea?» → He asked ___ I liked tea.",["that","if","do"],1],["«We live in Tashkent.» → They said they ___ in Tashkent.",["lived","live","living"],0],["«Where are you going?» → She asked where I ___.",["am going","was going","go"],1]]},
 {id:'cond3',lvl:'B2',t:{uz:'Third Conditional',ru:'Third Conditional'},
  d:{uz:"O'tmishdagi <b>sodir bo'lmagan</b> vaziyat va uning xayoliy natijasi, ko'pincha afsus: If I had studied, I would have passed. Tuzilishi: If + had + V3, would have + V3.",
     ru:"<b>Несбывшееся</b> условие в прошлом и его воображаемый результат, часто сожаление: If I had studied, I would have passed. Схема: If + had + V3, would have + V3."},
  f:[["If + had + V3, would have + V3","If you had told me, I would have helped."],["wouldn't have + V3","If we had left earlier, we wouldn't have missed the train."]],
  ex:[["If I had known, I would have come.","Bilganimda, kelgan bo'lardim.","Если бы я знал, я бы пришёл."],["She would have won if she hadn't fallen.","Yiqilmaganida, u g'alaba qozongan bo'lardi.","Она бы победила, если бы не упала."],["If it hadn't rained, we would have gone to the mountains.","Yomg'ir yog'maganida, tog'ga borgan bo'lardik.","Если бы не дождь, мы бы поехали в горы."]],
  q:[["If I ___ the alarm, I wouldn't have been late.",["heard","had heard","have heard"],1],["We would ___ the match if we had trained more.",["win","have won","had won"],1],["If she had asked, I ___ have helped her.",["will","would","had"],1],["If they ___ the map, they wouldn't have got lost.",["had checked","checked","would check"],0],["He ___ have failed if he had studied.",["wouldn't","won't","didn't"],0]]},
 {id:'deduce',lvl:'B2',t:{uz:'Taxmin modallari: must / might / can\'t',ru:'Модальные глаголы предположения'},
  d:{uz:"Taxmin va xulosa: <b>must</b> — deyarli aniq, <b>might / may / could</b> — ehtimol, <b>can't</b> — bo'lishi mumkin emas. O'tmish haqida: must / might / can't + have + V3.",
     ru:"Предположения и выводы: <b>must</b> — почти наверняка, <b>might / may / could</b> — возможно, <b>can't</b> — не может быть. О прошлом: must / might / can't + have + V3."},
  f:[["must + verb (sure)","He must be tired — he worked all night."],["might / could + verb (possible)","She might be at home."],["can't + verb (impossible)","That can't be true!"],["must / might / can't have + V3","They must have missed the bus."]],
  ex:[["The lights are off. They must be asleep.","Chiroqlar o'chiq. Ular uxlayotgan bo'lsa kerak.","Свет выключен. Наверное, они спят."],["He can't be hungry — he has just eaten.","U och bo'lishi mumkin emas, hozirgina ovqatlandi.","Он не может быть голоден — он только что поел."],["I might have left my keys at work.","Kalitlarimni ishda qoldirgan bo'lishim mumkin.","Возможно, я оставил ключи на работе."]],
  q:[["She's wearing a wedding ring. She ___ be married.",["must","can't","mustn't"],0],["He ___ be at school — it's Sunday.",["must","can't","should"],1],["Take an umbrella. It ___ rain later.",["might","must","can't"],0],["The road is wet. It must ___ rained.",["has","have","had"],1],["I'm not sure where Ali is. He ___ be in the library.",["could","must","can't"],0]]},
 {id:'gerinf',lvl:'B2',t:{uz:'Gerund yoki infinitiv',ru:'Герундий или инфинитив'},
  d:{uz:"Ba'zi fe'llardan keyin <b>-ing</b> keladi (enjoy, avoid, finish, mind, suggest), ba'zilaridan keyin <b>to + fe'l</b> (want, decide, hope, plan, refuse). Predloglardan keyin doim -ing: interested in learning.",
     ru:"После одних глаголов идёт <b>-ing</b> (enjoy, avoid, finish, mind, suggest), после других — <b>to + глагол</b> (want, decide, hope, plan, refuse). После предлогов всегда -ing: interested in learning."},
  f:[["enjoy / avoid / finish + verb-ing","I enjoy reading."],["want / decide / hope + to + verb","She decided to leave."],["preposition + verb-ing","He is good at drawing."]],
  ex:[["I've finished writing my essay.","Inshoimni yozib bo'ldim.","Я закончил писать эссе."],["We hope to see you soon.","Sizni tez orada ko'rishga umid qilamiz.","Надеемся скоро вас увидеть."],["She is afraid of flying.","U samolyotda uchishdan qo'rqadi.","Она боится летать."]],
  q:[["I enjoy ___ to music.",["listen","listening","to listen"],1],["They decided ___ a new flat.",["buying","to buy","buy"],1],["Avoid ___ too much sugar.",["eating","to eat","eat"],0],["He's interested in ___ Japanese.",["learn","to learn","learning"],2],["We plan ___ to Bukhara next week.",["going","to go","go"],1]]},
 {id:'mixedc',lvl:'C1',t:{uz:'Aralash shart gaplar',ru:'Смешанные условные'},
  d:{uz:"O'tmishdagi shart <b>hozirgi natijaga</b> ta'sir qilganda: If I had taken that job, I would be rich now. Yoki hozirgi xususiyat o'tmishga ta'sir qilganda: If I were braver, I would have spoken.",
     ru:"Когда условие в прошлом влияет <b>на настоящее</b>: If I had taken that job, I would be rich now. Или нынешняя черта влияет на прошлое: If I were braver, I would have spoken."},
  f:[["If + had + V3, would + verb (now)","If I had slept, I wouldn't be tired now."],["If + Past Simple, would have + V3","If she spoke English, she would have got the job."]],
  ex:[["If I had learned English as a child, I would be fluent now.","Bolaligimda ingliz tilini o'rganganimda, hozir erkin gapirardim.","Если бы я учил английский в детстве, сейчас бы говорил свободно."],["If he weren't so shy, he would have asked her out.","U bunchalik uyatchan bo'lmaganida, qizni uchrashuvga taklif qilgan bo'lardi.","Если бы он не был таким застенчивым, он бы её пригласил."],["If we had booked earlier, we would be in Paris now.","Oldinroq bron qilganimizda, hozir Parijda bo'lardik.","Если бы мы забронировали раньше, сейчас были бы в Париже."]],
  q:[["If I had saved money, I ___ a car now.",["would have","would have had","had"],0],["If she ___ more confident, she would have applied.",["were","had","is"],0],["If they had left on time, they ___ here now.",["would be","would have been","are"],0],["If I ___ that film, I would know the ending.",["saw","had seen","have seen"],1],["If he didn't hate flying, he ___ to the conference last week.",["would go","would have gone","went"],1]]},
 {id:'inversion',lvl:'C1',t:{uz:'Inversiya',ru:'Инверсия'},
  d:{uz:"Rasmiy va ta'sirli uslubda inkor yoki cheklovchi so'z gap boshiga chiqadi va <b>yordamchi fe'l egadan oldin</b> keladi: Never have I seen… Not only did she…, but… Rarely, Seldom, Hardly … when, No sooner … than.",
     ru:"В формальном и эмоциональном стиле отрицательное или ограничительное слово выносится в начало, а <b>вспомогательный глагол ставится перед подлежащим</b>: Never have I seen… Not only did she…, but… Rarely, Seldom, Hardly … when, No sooner … than."},
  f:[["Never / Rarely + aux + subject + verb","Never have I seen such a view."],["Not only + aux + subject …, but also …","Not only did he win, but he also broke the record."],["No sooner had + subject + V3 … than …","No sooner had we arrived than it started to rain."]],
  ex:[["Rarely do we see such talent.","Bunday iste'dodni kamdan-kam ko'ramiz.","Такой талант встречается редко."],["Not only is she smart, but she is also kind.","U nafaqat aqlli, balki mehribon hamdir.","Она не только умна, но и добра."],["Hardly had I sat down when the phone rang.","Endigina o'tirgan edimki, telefon jiringladi.","Едва я сел, как зазвонил телефон."]],
  q:[["Never ___ such a beautiful sunset.",["I have seen","have I seen","I saw"],1],["Not only ___ late, but he also forgot the tickets.",["he was","was he","he is"],1],["Rarely ___ she complain.",["does","do","is"],0],["No sooner had we left ___ it began to snow.",["when","than","then"],1],["Seldom ___ we eaten such delicious plov.",["have","has","did"],0]]},
 {id:'cleft',lvl:'C1',t:{uz:"Ta'kidlovchi gaplar (cleft)",ru:'Выделительные конструкции'},
  d:{uz:"Gapning bir qismini <b>alohida ta'kidlash</b> uchun: It was Ali who broke the vase (Vazani aynan Ali sindirdi). What I need is a holiday (Menga kerak narsa — dam olish).",
     ru:"Чтобы <b>выделить</b> часть предложения: It was Ali who broke the vase (Вазу разбил именно Али). What I need is a holiday (Что мне нужно — так это отпуск)."},
  f:[["It is / was + focus + who / that …","It was in 2010 that we moved."],["What + subject + verb + is / was …","What surprised me was his calm."],["All I + verb + is …","All I want is some sleep."]],
  ex:[["It was my teacher who inspired me.","Meni aynan ustozim ilhomlantirgan.","Меня вдохновил именно мой учитель."],["What I love about Tashkent is its parks.","Toshkentda menga yoqadigan narsa — uning bog'lari.","Что я люблю в Ташкенте — так это парки."],["All you need is practice.","Sizga faqat mashq kerak.","Всё, что вам нужно, — это практика."]],
  q:[["It was John ___ called you.",["which","who","what"],1],["___ I need is more time.",["That","What","Which"],1],["It was in Samarkand ___ they got married.",["where","that","which"],1],["All I want ___ a cup of tea.",["are","is","be"],1],["What annoys me ___ the noise.",["is","are","it"],0]]},
 {id:'wish',lvl:'C1',t:{uz:'I wish / If only',ru:'I wish / If only'},
  d:{uz:"Afsus va orzular: hozir haqida — wish + Past Simple (I wish I knew), o'tmish haqida — wish + Past Perfect (I wish I had listened), boshqalarning xatti-harakati haqida — wish + would (I wish you would stop). <b>If only</b> — kuchliroq shakl.",
     ru:"Сожаления и желания: о настоящем — wish + Past Simple (I wish I knew), о прошлом — wish + Past Perfect (I wish I had listened), о чужом поведении — wish + would (I wish you would stop). <b>If only</b> — более сильная форма."},
  f:[["wish + Past Simple (present)","I wish I lived closer."],["wish + had + V3 (past)","She wishes she had studied harder."],["wish + would + verb (annoyance)","I wish it would stop raining."]],
  ex:[["I wish I spoke Chinese.","Qaniydi xitoycha gapirsam.","Жаль, что я не говорю по-китайски."],["If only I had saved my work!","Qaniydi ishimni saqlab qo'ygan bo'lsam!","Если бы я только сохранил работу!"],["I wish you wouldn't shout.","Qichqirmasang edi.","Не кричал бы ты."]],
  q:[["I wish I ___ the answer.",["know","knew","known"],1],["She wishes she ___ that dress yesterday.",["bought","had bought","buys"],1],["I wish my neighbours ___ so loud.",["wouldn't be","aren't","won't"],0],["If only I ___ more time now!",["have","had","will have"],1],["He wishes he ___ to the party last night.",["went","had gone","goes"],1]]},
 {id:'subj',lvl:'C2',t:{uz:'Subjunktiv (rasmiy uslub)',ru:'Сослагательное (формальный стиль)'},
  d:{uz:"Rasmiy uslubda talab, taklif va muhimlikni bildiruvchi so'zlardan keyin fe'lning <b>sof shakli</b> keladi (-s siz, to siz): I suggest that he <b>be</b> informed. It is essential that every student <b>attend</b>.",
     ru:"В формальном стиле после слов требования, предложения и важности ставится <b>голая форма</b> глагола (без -s и to): I suggest that he <b>be</b> informed. It is essential that every student <b>attend</b>."},
  f:[["suggest / recommend / insist + that + subject + base verb","They insisted that he leave."],["It is essential / vital + that + subject + base verb","It is vital that she be on time."]],
  ex:[["The doctor recommended that she rest.","Shifokor unga dam olishni tavsiya qildi.","Врач рекомендовал ей отдохнуть."],["It is crucial that the data be checked.","Ma'lumotlar tekshirilishi juda muhim.","Крайне важно, чтобы данные были проверены."],["I propose that the meeting be postponed.","Yig'ilishni keyinga qoldirishni taklif qilaman.","Предлагаю перенести совещание."]],
  q:[["I suggest that he ___ a lawyer.",["consults","consult","to consult"],1],["It is essential that everyone ___ present.",["is","be","are"],1],["They demanded that the manager ___.",["resigns","resign","resigned"],1],["She insisted that he ___ the truth.",["tell","tells","told"],0],["It is vital that the report ___ finished today.",["is","be","was"],1]]},
 {id:'partcl',lvl:'C2',t:{uz:"Sifatdoshli birikmalar",ru:'Причастные обороты'},
  d:{uz:"Gapni qisqartirish va uslubni boyitish uchun: Having finished the essay, she went out (Inshoni tugatib, u tashqariga chiqdi). Built in 1417, the madrasa… (1417-yilda qurilgan madrasa…). <b>Ega ikkala qismda bir xil</b> bo'lishi kerak.",
     ru:"Сокращают предложение и обогащают стиль: Having finished the essay, she went out (Закончив эссе, она вышла). Built in 1417, the madrasa… (Построенное в 1417 году медресе…). <b>Подлежащее в обеих частях должно совпадать.</b>"},
  f:[["verb-ing …, main clause (same time)","Walking home, I met an old friend."],["Having + V3 …, main clause (earlier)","Having lost the key, he called a locksmith."],["V3 …, main clause (passive)","Written in 1869, the novel is still popular."]],
  ex:[["Feeling tired, she went to bed early.","Charchaganini his qilib, u erta yotdi.","Почувствовав усталость, она рано легла спать."],["Having read the instructions, I started the test.","Ko'rsatmalarni o'qib bo'lib, testni boshladim.","Прочитав инструкцию, я начал тест."],["Surrounded by mountains, the village is very quiet.","Tog'lar bilan o'ralgan qishloq juda sokin.","Окружённая горами деревня очень тихая."]],
  q:[["___ the news, she started to cry.",["Hearing","Heard","To hear"],0],["___ finished his work, he went home.",["Having","Had","Have"],0],["___ in 1417, the madrasa attracts many tourists.",["Building","Built","Having built"],1],["Not ___ what to say, I kept silent.",["knowing","known","know"],0],["___ by his friends, he felt confident.",["Supporting","Supported","Having supporting"],1]]},
 {id:'hedge',lvl:'C2',t:{uz:'Akademik uslub va ehtiyotkor ifoda',ru:'Академический стиль и хеджирование'},
  d:{uz:"Akademik yozuvda (IELTS Writing Task 2) qat'iy da'volardan qochib, <b>ehtiyotkor ifodalar</b> ishlatiladi: It could be argued that…, This may suggest…, To some extent…, It is widely believed that… Bu fikrni yumshatadi va professional ko'rsatadi.",
     ru:"В академическом письме (IELTS Writing Task 2) избегают категоричности и используют <b>осторожные формулировки</b>: It could be argued that…, This may suggest…, To some extent…, It is widely believed that… Это смягчает утверждение и звучит профессионально."},
  f:[["It could be argued that …","It could be argued that technology isolates people."],["… may / might / tend to …","Young people tend to prefer online news."],["To some extent / Arguably, …","Arguably, education is the key factor."]],
  ex:[["It is widely believed that exercise improves mood.","Jismoniy mashq kayfiyatni yaxshilaydi, deb keng hisoblanadi.","Широко распространено мнение, что спорт улучшает настроение."],["These figures may suggest a decline in interest.","Bu raqamlar qiziqish pasayganini ko'rsatishi mumkin.","Эти цифры могут указывать на снижение интереса."],["To some extent, both views are valid.","Ma'lum darajada ikkala fikr ham to'g'ri.","В какой-то мере обе точки зрения верны."]],
  q:[["Which phrase is the most academic?",["Everyone knows that…","It is widely believed that…","I'm sure that…"],1],["It ___ be argued that cities are too crowded.",["could","must","will"],0],["Students ___ to spend more time online.",["tend","tends","are tend"],0],["Which word is used for hedging?",["definitely","arguably","always"],1],["The data ___ suggest a link between diet and health.",["may","is","does"],0]]}
);

/* ---- Rus grammatikasi: A2–C1 ---- */
window.RU_LESSONS.push(
 {id:'past',lvl:'A2',t:{uz:"O'tgan zamon"},
  d:{uz:"O'tgan zamonda fe'lning noaniq shaklidan -ть olib tashlanib, <b>-л</b> qo'shiladi va ega jinsiga moslashadi: он читал, она читала, оно читало, они читали. Shaxsga qarab o'zgarmaydi."},
  f:[["он: -л","он читал, он был"],["она: -ла","она читала, она была"],["оно: -ло","оно было"],["они: -ли","они читали, они были"]],
  ex:[["Вчера я читал книгу.","Kecha kitob o'qidim."],["Она была в Москве.","U Moskvada bo'lgan."],["Мы долго ждали автобус.","Biz avtobusni uzoq kutdik."]],
  q:[["Вчера она ___ (работать) дома.",["работал","работала","работали"],1],["Мы ___ (смотреть) фильм.",["смотрел","смотрели","смотрела"],1],["Он ___ (быть) в школе.",["был","была","было"],0],["Где вы ___ (жить) раньше?",["жил","жили","жила"],1],["Письмо ___ (лежать) на столе.",["лежал","лежала","лежало"],2]]},
 {id:'future',lvl:'A2',t:{uz:'Kelasi zamon'},
  d:{uz:"Kelasi zamon ikki xil. <b>Murakkab</b>: быть (буду, будешь, будет…) + noaniq shakl — Я буду читать (o'qiyman, jarayon). <b>Sodda</b>: tugallangan fe'l tuslanadi — Я прочитаю (o'qib chiqaman, natija)."},
  f:[["я буду, ты будешь, он будет + -ть","Я буду работать завтра."],["мы будем, вы будете, они будут + -ть","Мы будем учить русский."],["tugallangan fe'l: прочитаю, напишу","Я напишу письмо."]],
  ex:[["Завтра я буду дома.","Ertaga uyda bo'laman."],["Что ты будешь делать летом?","Yozda nima qilasan?"],["Я позвоню вам вечером.","Kechqurun sizga qo'ng'iroq qilaman."]],
  q:[["Завтра мы ___ отдыхать.",["будем","будут","буду"],0],["Ты ___ смотреть футбол?",["будешь","будет","буду"],0],["Они ___ жить в Ташкенте.",["будет","будут","будем"],1],["Я ___ работать в субботу.",["будешь","буду","будет"],1],["Вечером она ___ готовить ужин.",["будет","будут","буду"],0]]},
 {id:'vinit',lvl:'A2',t:{uz:'Tushum kelishigi (винительный)'},
  d:{uz:"«Kimni? Nimani?» savoliga javob: Я вижу <b>маму</b>. Ayol jinsidagi -а → <b>-у</b>, -я → <b>-ю</b>. Jonsiz erkak va o'rta jins otlari o'zgarmaydi: Я читаю журнал. Jonli erkak jinsi -а oladi: брат → брат<b>а</b>."},
  f:[["-а → -у","мама → маму, книга → книгу"],["-я → -ю","неделя → неделю"],["jonli erkak: + -а","брат → брата"]],
  ex:[["Я люблю музыку.","Men musiqani yaxshi ko'raman."],["Он читает газету.","U gazeta o'qiyapti."],["Мы ждём друга.","Biz do'stimizni kutyapmiz."]],
  q:[["Я вижу ___ (сестра).",["сестра","сестру","сестры"],1],["Она пьёт ___ (вода).",["вода","воду","воды"],1],["Мы смотрим ___ (фильм).",["фильм","фильма","фильму"],0],["Я жду ___ (брат).",["брат","брата","брату"],1],["Он купил ___ (машина).",["машина","машину","машины"],1]]},
 {id:'rodit',lvl:'B1',t:{uz:"Qaratqich kelishigi (родительный)"},
  d:{uz:"«Kimning? Nimaning? Kim yo'q?» savollariga javob; egalik, yo'qlik va miqdor uchun: книга <b>брата</b>, нет <b>времени</b>, много <b>людей</b>. Erkak va o'rta jins: -а / -я; ayol jinsi: -ы / -и."},
  f:[["он / оно: -а, -я","дом отца, нет моря"],["она: -ы, -и","сумка мамы, нет книги"],["нет / много / мало + родительный","У меня нет брата."]],
  ex:[["Это машина моего брата.","Bu akamning mashinasi."],["У меня нет времени.","Vaqtim yo'q."],["В городе много парков.","Shaharda parklar ko'p."]],
  q:[["У меня нет ___ (машина).",["машина","машины","машину"],1],["Это дом ___ (отец).",["отец","отца","отцу"],1],["Стакан ___ (вода).",["воды","вода","воду"],0],["У нас нет ___ (хлеб).",["хлеб","хлеба","хлебу"],1],["Сумка ___ (сестра).",["сестры","сестру","сестра"],0]]},
 {id:'dat',lvl:'B1',t:{uz:"Jo'nalish kelishigi (дательный)"},
  d:{uz:"«Kimga? Nimaga?» savoliga javob: Я звоню <b>маме</b>. Yosh va his-holatni bildirishda ham: Мне 20 лет, Мне холодно. Erkak va o'rta jins: -у / -ю; ayol jinsi: -е / -и."},
  f:[["он / оно: -у, -ю","брату, другу"],["она: -е, -и","маме, сестре"],["мне, тебе, ему, ей, нам, вам, им","Мне нравится."]],
  ex:[["Я дал книгу другу.","Kitobni do'stimga berdim."],["Мне двадцать лет.","Men yigirma yoshdaman."],["Ей нравится музыка.","Unga musiqa yoqadi."]],
  q:[["Я звоню ___ (мама).",["мама","маме","маму"],1],["Подарок ___ (брат).",["брату","брата","брат"],0],["___ (я) холодно.",["Меня","Мне","Мной"],1],["Скажи ___ (он) правду.",["его","ему","им"],1],["Мы пишем ___ (учитель).",["учителю","учителя","учитель"],0]]},
 {id:'tvor',lvl:'B1',t:{uz:"Vosita kelishigi (творительный)"},
  d:{uz:"«Kim bilan? Nima bilan?» savoliga javob: с <b>другом</b> (do'stim bilan), <b>ручкой</b> (ruchka bilan). Kasb haqida ham: Я работаю <b>врачом</b>. Erkak va o'rta jins: -ом / -ем; ayol jinsi: -ой / -ей."},
  f:[["он / оно: -ом, -ем","с братом, с морем"],["она: -ой, -ей","с мамой, с неделей"],["работать / стать + творительный","Он хочет стать инженером."]],
  ex:[["Я пью чай с сахаром.","Choyni shakar bilan ichaman."],["Она пишет ручкой.","U ruchka bilan yozadi."],["Он работает учителем.","U o'qituvchi bo'lib ishlaydi."]],
  q:[["Я гуляю с ___ (собака).",["собака","собакой","собаку"],1],["Кофе с ___ (молоко).",["молоком","молока","молоко"],0],["Он работает ___ (врач).",["врач","врача","врачом"],2],["Мы поедем с ___ (друг).",["друга","другом","другу"],1],["Она стала ___ (актриса).",["актрисой","актрису","актриса"],0]]},
 {id:'motion',lvl:'B1',t:{uz:"Harakat fe'llari: идти / ходить"},
  d:{uz:"Rus tilida «bormoq» bir necha xil. <b>идти</b> — piyoda, bir yo'nalishda, hozir (Я иду домой). <b>ходить</b> — piyoda, takroriy yoki borib-kelish (Я хожу в школу). Transportda: <b>ехать</b> / <b>ездить</b>."},
  f:[["идти: иду, идёшь, идут","Сейчас я иду в магазин."],["ходить: хожу, ходишь, ходят","Каждый день я хожу в парк."],["ехать / ездить (transport)","Завтра я еду в Самарканд."]],
  ex:[["Куда ты идёшь?","Qayerga ketyapsan?"],["Летом мы ездим на море.","Yozda dengizga borib turamiz."],["Он едет на работу на метро.","U ishga metroda ketyapti."]],
  q:[["Сейчас я ___ в библиотеку.",["хожу","иду","езжу"],1],["Каждую субботу мы ___ в бассейн.",["идём","ходим","едем"],1],["Завтра она ___ в Москву на поезде.",["идёт","едет","ходит"],1],["Ты часто ___ в кино?",["ходишь","идёшь","едешь"],0],["Они каждый день ___ на работу на автобусе.",["едут","ездят","идут"],1]]},
 {id:'aspect',lvl:'B1',t:{uz:"Fe'l turi: НСВ / СВ"},
  d:{uz:"Ko'p rus fe'llarining juftligi bor. <b>Tugallanmagan</b> (НСВ) — jarayon, takror: писать, читать. <b>Tugallangan</b> (СВ) — natija, bir martalik: написать, прочитать. Я писал письмо час (jarayon). Я написал письмо (tayyor)."},
  f:[["НСВ: jarayon / takror","Я каждый день читаю."],["СВ: natija / bir marta","Я прочитал книгу."],["juftlar: делать — сделать, писать — написать","Что ты сделал?"]],
  ex:[["Я долго решал задачу и наконец решил её.","Masalani uzoq yechdim va nihoyat yechib bo'ldim."],["Она всегда покупает хлеб здесь.","U nonni doim shu yerdan oladi."],["Он купил новый телефон.","U yangi telefon sotib oldi."]],
  q:[["Я уже ___ домашнее задание. (tayyor)",["делал","сделал","делаю"],1],["Каждое утро я ___ кофе.",["пью","выпью","выпил"],0],["Вчера мы два часа ___ фильм.",["смотрели","посмотрели","посмотрим"],0],["Ты ___ письмо? Можно отправить?",["писал","написал","пишешь"],1],["Она обычно ___ в 7 часов.",["встаёт","встанет","встала"],0]]},
 {id:'compar',lvl:'B2',t:{uz:'Sifat darajalari'},
  d:{uz:"Qiyosiy daraja: sifatga <b>-ее</b> qo'shiladi (быстрый → быстрее) yoki <b>более</b> ishlatiladi (более интересный). Istisnolar: хороший → лучше, плохой → хуже, большой → больше, маленький → меньше. Orttirma daraja: <b>самый</b> + sifat."},
  f:[["-ее","быстрее, интереснее"],["более + sifat","более важный вопрос"],["самый + sifat","самый высокий дом"]],
  ex:[["Ташкент больше, чем Хива.","Toshkent Xivadan kattaroq."],["Этот тест легче.","Bu test osonroq."],["Это самая красивая улица.","Bu eng chiroyli ko'cha."]],
  q:[["Поезд быстрый, а самолёт ___.",["быстрее","быстрый","самый быстрый"],0],["Сегодня погода ___, чем вчера. (yaxshiroq)",["хорошее","лучше","лучший"],1],["Эверест — ___ высокая гора в мире.",["самая","более","лучше"],0],["Москва ___, чем Самарканд.",["больше","большой","большее"],0],["Этот вопрос ___ важный, чем тот.",["более","самый","больше"],0]]},
 {id:'particip',lvl:'B2',t:{uz:'Sifatdosh (причастие)'},
  d:{uz:"Sifatdosh — fe'ldan yasalib, sifat kabi o'zgaradi: <b>читающий</b> студент (o'qiyotgan talaba), <b>прочитанная</b> книга (o'qilgan kitob). Kitobiy va rasmiy uslubda ko'p uchraydi."},
  f:[["-ущ- / -ющ-, -ащ- / -ящ- (hozirgi)","говорящий, читающий"],["-вш- (o'tgan)","прочитавший"],["-нн- / -т- (majhul)","написанный, открытый"]],
  ex:[["Я знаю девушку, говорящую по-английски.","Inglizcha gapiradigan qizni bilaman."],["Это закрытая дверь.","Bu yopiq eshik."],["Поэма, написанная Навои, очень известна.","Navoiy yozgan doston juda mashhur."]],
  q:[["Мальчик, ___ в парке, — мой брат. (o'ynayotgan)",["играющий","игравший","сыгранный"],0],["Это ___ письмо. (yozilgan)",["пишущее","написанное","писавшее"],1],["Студент, ___ экзамен, ушёл домой. (topshirib bo'lgan)",["сдавший","сдающий","сданный"],0],["___ вода (qaynayotgan)",["Кипящая","Вскипевший","Кипячёный"],0],["Дверь, ___ ключом, не открывается. (qulflangan)",["закрытая","закрывающая","закрывшая"],0]]},
 {id:'deepr',lvl:'C1',t:{uz:'Ravishdosh (деепричастие)'},
  d:{uz:"Ravishdosh qo'shimcha harakatni bildiradi va o'zgarmaydi: <b>читая</b> (o'qib turib), <b>прочитав</b> (o'qib bo'lib). Ikkala harakatni <b>bir shaxs</b> bajaradi."},
  f:[["НСВ + -я / -а (bir vaqtda)","Гуляя по парку, я думал."],["СВ + -в / -вши (avval)","Закончив работу, он ушёл."]],
  ex:[["Слушая музыку, она готовила ужин.","Musiqa tinglab, u kechki ovqat tayyorladi."],["Прочитав письмо, он улыбнулся.","Xatni o'qib, u jilmaydi."],["Уходя, гасите свет.","Ketayotganda chiroqni o'chiring."]],
  q:[["___ домой, я встретил друга. (ketayotib)",["Идя","Пришёл","Идущий"],0],["___ задание, студент сдал работу. (bajarib bo'lib)",["Выполняя","Выполнив","Выполненный"],1],["Она читала, ___ чай. (ichib turib)",["пьёт","пила","попивая"],2],["___ в Ташкент, мы позвонили маме. (yetib kelib)",["Приехав","Приезжая","Приехавший"],0],["Он говорил, ___ в окно. (qarab turib)",["глядя","поглядев","глядящий"],0]]},
 {id:'kotory',lvl:'C1',t:{uz:"«который» bilan qo'shma gaplar"},
  d:{uz:"<b>который</b> — «qaysiki» ma'nosidagi nisbiy olmosh. Jinsi va soni aniqlanayotgan so'zga, kelishigi esa ergash gapdagi vazifasiga mos keladi: Друг, <b>которого</b> я жду… Город, <b>в котором</b> я живу…"},
  f:[["который / которая / которое / которые","Девушка, которая поёт"],["kelishik ergash gapga qarab","Книга, которую я читаю"],["predlog + котором / которой","Дом, в котором я родился"]],
  ex:[["Это человек, который мне помог.","Bu menga yordam bergan odam."],["Город, в котором я живу, очень красивый.","Men yashaydigan shahar juda chiroyli."],["Фильм, который мы смотрели, был скучным.","Biz ko'rgan film zerikarli edi."]],
  q:[["Это девушка, ___ я люблю.",["которая","которую","которой"],1],["Дом, в ___ мы живём, старый.",["котором","который","которого"],0],["Студент, ___ я помог, сдал экзамен.",["которому","который","которого"],0],["Книги, ___ лежат на столе, мои.",["которые","которых","который"],0],["Друг, ___ я жду, опаздывает.",["который","которого","которому"],1]]}
);

/* ---- Imtihon zali ---- */
window.HALL={
 en:{
  reading:[
   {title:'The shrinking Aral Sea',lvl:'B2',text:"Once the fourth-largest lake in the world, the Aral Sea has lost most of its water since the 1960s. The main cause was the diversion of the Amu Darya and Syr Darya rivers to irrigate cotton fields. As the water disappeared, the fishing industry collapsed and towns such as Moynaq were left far from the shore. Dust storms now carry salt from the dry seabed across the region. However, not all the news is bad. In 2005 a dam was completed in Kazakhstan, and the northern part of the sea has partly recovered. Scientists are also planting saxaul trees on the former seabed to hold the soil in place.",
    q:[["The Aral Sea used to be one of the largest lakes on Earth.",0],["The rivers were diverted mainly to supply drinking water to cities.",1],["Moynaq is now located far from the water.",0],["Dust storms have affected the health of millions of people.",2],["The southern part of the sea has fully recovered.",1],["Saxaul trees help to stop the soil from moving.",0]]},
   {title:'Sleep and memory',lvl:'B2',text:"Researchers have long known that sleep plays a role in learning. During deep sleep, the brain appears to replay information gathered during the day, which helps to move it into long-term memory. In one study, students who slept after learning a list of words remembered more of them the next day than students who stayed awake. Short naps can also help, although their effect is smaller. Interestingly, the benefit seems strongest for material that was learned just before going to bed. This may explain why many teachers advise students to review vocabulary in the evening.",
    q:[["Sleep helps the brain to store new information.",0],["Students who stayed awake remembered more words.",1],["Naps are more useful than a full night's sleep.",1],["The study took place at a university in the United States.",2],["Reviewing vocabulary in the evening may be effective.",0]]},
   {title:'The Silk Road',lvl:'C1',text:"The Silk Road was not a single road but a network of trade routes linking China with the Mediterranean. For over a thousand years, merchants carried silk, spices, paper and glass across deserts and mountains. Cities such as Samarkand and Bukhara grew rich as centres of trade and learning. Ideas travelled as well as goods: religions, scientific knowledge and technologies such as papermaking spread along the routes. Few merchants travelled the whole distance; instead, goods passed from trader to trader. The term 'Silk Road' itself was only introduced in the nineteenth century by a German geographer.",
    q:[["The Silk Road consisted of many different routes.",0],["Most merchants travelled all the way from China to Europe.",1],["Papermaking spread along the trade routes.",0],["Silk was the most profitable product on the routes.",2],["Ancient merchants called the routes 'the Silk Road'.",1]]},
   {title:'Working from home',lvl:'C1',text:"Since 2020, the number of people working from home has risen sharply. Supporters argue that remote work saves the time and money spent on commuting and allows employees to organise their day more flexibly. Some companies have reported higher productivity. Critics, however, point out that working alone can lead to loneliness and make it harder for young employees to learn from experienced colleagues. As a result, many organisations now prefer a hybrid model, in which staff spend part of the week in the office.",
    q:[["More people have worked from home since 2020.",0],["All companies report that productivity has increased.",1],["Remote work may make it harder for new employees to learn.",0],["Hybrid workers usually spend three days a week in the office.",2]]}
  ],
  listening:[
   {title:'Library announcement',lvl:'B1',text:"Good morning, and welcome to the city library. Please note that from next Monday our opening hours will change. The library will open at nine a.m. instead of ten, and close at eight p.m. On Saturdays we will close at five. The computer room on the second floor is closed for repairs until the fifteenth of March. If you need to print documents, please use the machines next to the main entrance. Finally, our free English conversation club meets every Wednesday at six p.m. in room twelve.",
    q:[["What time will the library open from next Monday?",["8 a.m.","9 a.m.","10 a.m."],1],["Where is the computer room?",["On the first floor","On the second floor","Next to the entrance"],1],["When does the conversation club meet?",["Wednesday at 6 p.m.","Saturday at 5 p.m.","Monday at 9 a.m."],0],["Which room does the club meet in?",["Room 2","Room 12","Room 20"],1]]},
   {title:'A tour of Khiva',lvl:'B2',text:"Hello everyone, I'm Dilnoza, and I'll be your guide today. We're standing at the western gate of Itchan Kala, the walled inner town of Khiva. The walls you can see are about ten metres high. In a moment we'll walk to the Kalta Minor minaret, which is famous for its blue and green tiles. It was never finished, which is why it looks so short and wide. After that, we'll have forty minutes of free time for lunch. Please meet me back here at two o'clock. And remember to keep your entrance tickets, because you'll need them at several museums.",
    q:[["What is the guide's name?",["Dilnoza","Dilfuza","Nodira"],0],["Why does Kalta Minor look short?",["It was damaged","It was never finished","It was built for children"],1],["How long is the lunch break?",["30 minutes","40 minutes","An hour"],1],["Why should visitors keep their tickets?",["To get a discount","To enter museums","To leave the town"],1]]},
   {title:'Why languages disappear',lvl:'C1',text:"Today I'd like to look at why some languages disappear. Linguists estimate that around seven thousand languages are spoken in the world today, yet nearly half of them are considered endangered. The main reason is not that people are forced to stop speaking them, but that younger generations gradually switch to a more dominant language for economic reasons. Once children no longer learn a language at home, its future becomes uncertain. However, technology is offering new hope. Recording projects, online dictionaries and even mobile apps are helping some communities to revive their languages.",
    q:[["About how many languages are spoken today?",["700","7,000","70,000"],1],["What proportion of them are endangered?",["About a quarter","Nearly half","Most of them"],1],["What is the main reason languages disappear?",["Laws that ban them","Young people switching languages","Natural disasters"],1],["What does the speaker say about technology?",["It speeds up language loss","It can help to revive languages","It has no effect"],1]]}
  ],
  writing:[
   {task:"Some people believe that university education should be free for everyone. To what extent do you agree or disagree?",
    parts:[[{uz:'Kirish',ru:'Вступление'},"It is often argued that higher education should be free for all students.","Ko'pincha oliy ta'lim barcha talabalar uchun bepul bo'lishi kerak, deb ta'kidlanadi.","Часто утверждают, что высшее образование должно быть бесплатным для всех студентов."],
     [{uz:'Asosiy fikr',ru:'Тезис'},"I largely agree with this view, although some limits are necessary.","Men bu fikrga asosan qo'shilaman, ammo ba'zi cheklovlar zarur.","Я в целом согласен с этим мнением, хотя некоторые ограничения необходимы."],
     [{uz:'1-dalil',ru:'Аргумент 1'},"Firstly, free education gives talented students from poor families an equal chance.","Birinchidan, bepul ta'lim kambag'al oilalardagi iqtidorli talabalarga teng imkoniyat beradi.","Во-первых, бесплатное образование даёт талантливым студентам из бедных семей равные шансы."],
     [{uz:'Qarshi fikr',ru:'Контраргумент'},"However, governments cannot pay for every course without conditions.","Biroq hukumatlar har bir kurs uchun shartsiz pul to'lay olmaydi.","Однако государства не могут оплачивать любой курс без условий."],
     [{uz:'Xulosa',ru:'Вывод'},"In conclusion, free tuition is beneficial if it is linked to academic results.","Xulosa qilib aytganda, bepul o'qish akademik natijalarga bog'langan bo'lsa, foydalidir.","В заключение, бесплатное обучение полезно, если оно связано с академическими результатами."]]},
   {task:"In many cities, the use of private cars is increasing. What problems does this cause, and what solutions can you suggest?",
    parts:[[{uz:'Kirish',ru:'Вступление'},"The number of private cars in cities has risen dramatically in recent decades.","So'nggi o'n yilliklarda shaharlardagi shaxsiy avtomobillar soni keskin oshdi.","За последние десятилетия число личных автомобилей в городах резко выросло."],
     [{uz:'1-muammo',ru:'Проблема 1'},"The most serious consequence is air pollution, which harms public health.","Eng jiddiy oqibat — aholi sog'lig'iga zarar yetkazadigan havo ifloslanishi.","Самое серьёзное последствие — загрязнение воздуха, вредящее здоровью людей."],
     [{uz:'2-muammo',ru:'Проблема 2'},"Moreover, heavy traffic wastes millions of hours every year.","Bundan tashqari, tirbandlik har yili millionlab soatni behuda sarflaydi.","Более того, пробки ежегодно отнимают миллионы часов."],
     [{uz:'Yechim',ru:'Решение'},"Cheap and reliable public transport would encourage people to leave their cars at home.","Arzon va ishonchli jamoat transporti odamlarni mashinasini uyda qoldirishga undaydi.","Дешёвый и надёжный общественный транспорт побудит людей оставлять машины дома."],
     [{uz:'Xulosa',ru:'Вывод'},"Overall, the problem is serious, but it can be solved with the right policies.","Umuman olganda, muammo jiddiy, ammo to'g'ri siyosat bilan uni hal qilish mumkin.","В целом проблема серьёзная, но её можно решить с помощью правильной политики."]]}
  ],
  speaking:[
   {topic:"Describe a place in your country that you would recommend to visitors.",points:["where it is","how you know about it","what visitors can do there","and explain why you would recommend it"]},
   {topic:"Describe a skill you would like to learn.",points:["what the skill is","why you want to learn it","how you would learn it","and explain how it would change your life"]},
   {topic:"Describe a person who has influenced you.",points:["who this person is","how you know them","what they have done","and explain how they influenced you"]},
   {topic:"Describe a memorable journey you have taken.",points:["where you went","who you went with","what happened","and explain why it was memorable"]},
   {topic:"Describe a book or film that made you think.",points:["what it was","when you read or saw it","what it was about","and explain why it made you think"]},
   {topic:"Describe a time when you helped someone.",points:["who you helped","what the situation was","how you helped","and explain how you felt afterwards"]}
  ],
  phrases:["I'd like to talk about…","What really stands out is…","To be honest, …","The main reason is that…","Looking back, …","All in all, …"]
 },
 ru:{
  reading:[
   {title:'Самарканд',lvl:'A2',text:"Самарканд — один из самых древних городов мира. Ему более двух тысяч семисот лет. Главная площадь города называется Регистан. На ней стоят три медресе, украшенные голубой и зелёной плиткой. Каждый год сюда приезжают тысячи туристов. Лучшее время для поездки — весна или осень, потому что летом здесь очень жарко.",
    q:[["Самарканду больше 2700 лет.",0],["На Регистане стоят два медресе.",1],["Туристы чаще всего приезжают из Европы.",2],["Летом в Самарканде очень жарко.",0]]},
   {title:'Моя работа',lvl:'B1',text:"Меня зовут Азиз. Я работаю программистом в небольшой компании в Ташкенте. Мой рабочий день начинается в девять часов, но иногда я работаю из дома. Мне нравится моя работа, потому что каждый день я решаю новые задачи. В свободное время я изучаю английский язык и играю в футбол с друзьями. В будущем я хочу открыть собственную компанию.",
    q:[["Азиз работает в большой компании.",1],["Иногда Азиз работает дома.",0],["Азиз хорошо говорит по-английски.",2],["Азиз мечтает о собственной компании.",0]]},
   {title:'Чтение и мозг',lvl:'B2',text:"Учёные утверждают, что регулярное чтение полезно для мозга. Во время чтения человек не только узнаёт новую информацию, но и тренирует память и внимание. Особенно полезно читать художественную литературу: она помогает лучше понимать чувства других людей. Кроме того, чтение перед сном снижает уровень стресса. Однако, по мнению специалистов, читать с экрана телефона перед сном не рекомендуется.",
    q:[["Чтение тренирует память.",0],["Художественная литература помогает понимать других людей.",0],["Читать с телефона перед сном полезно.",1],["Учёные советуют читать два часа в день.",2]]}
  ],
  listening:[
   {title:'Объявление на вокзале',lvl:'A2',text:"Уважаемые пассажиры! Поезд «Афросиаб» Ташкент — Самарканд отправляется с третьего пути в восемь часов тридцать минут. Время в пути — два часа десять минут. Просим пассажиров занять свои места в вагонах. Напоминаем, что курение в поезде запрещено.",
    q:[["Куда идёт поезд?",["В Бухару","В Самарканд","В Хиву"],1],["С какого пути отправляется поезд?",["С первого","Со второго","С третьего"],2],["Сколько времени в пути?",["Два часа десять минут","Три часа","Час тридцать минут"],0],["Что запрещено в поезде?",["Есть","Курить","Говорить по телефону"],1]]},
   {title:'Прогноз погоды',lvl:'B1',text:"Добрый вечер! Завтра в Ташкенте будет солнечно, температура днём до двадцати пяти градусов. Ночью прохладно, около десяти градусов. В горах возможен небольшой дождь. В выходные ожидается похолодание, поэтому не забудьте взять тёплую одежду.",
    q:[["Какая погода будет завтра в Ташкенте?",["Дождливая","Солнечная","Снежная"],1],["Какая температура будет днём?",["До 15 градусов","До 25 градусов","До 35 градусов"],1],["Где возможен дождь?",["В горах","В городе","У моря"],0],["Что ожидается в выходные?",["Жара","Похолодание","Сильный ветер"],1]]}
  ],
  writing:[
   {task:"Напишите письмо другу: расскажите свои новости и пригласите его в гости.",
    parts:[[{uz:'Salomlashish'},"Привет, Саша! Как у тебя дела?","Salom, Sasha! Ishlaring qalay?"],
     [{uz:'Yangiliklar'},"У меня всё хорошо, я начал изучать русский язык.","Menda hammasi yaxshi, rus tilini o'rganishni boshladim."],
     [{uz:'Savol'},"Расскажи, как прошла твоя поездка в Казань?","Aytib ber-chi, Qozonga safaring qanday o'tdi?"],
     [{uz:'Taklif'},"Приезжай ко мне в Ташкент летом.","Yozda Toshkentga, mening oldimga kel."],
     [{uz:'Xayrlashish'},"Жду ответа. Твой друг Бобур.","Javobingni kutaman. Do'sting Bobur."]]}
  ],
  speaking:[
   {topic:"Расскажите о своём городе.",points:["где он находится","что в нём интересного","что вы любите там делать","почему туристам стоит его посетить"]},
   {topic:"Расскажите о своей семье.",points:["сколько у вас членов семьи","кем они работают","как вы проводите время вместе","что для вас значит семья"]},
   {topic:"Расскажите о своём любимом празднике.",points:["как он называется","когда его отмечают","что люди делают в этот день","почему вы его любите"]}
  ],
  phrases:["Я хочу рассказать о…","Во-первых, …","Мне особенно нравится…","Кроме того, …","В заключение…"]
 }
};
