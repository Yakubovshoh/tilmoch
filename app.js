/* Tilmoch v2 — ilova mantig'i. Kutubxonasiz, internetsiz ishlaydi. */
(function(){
'use strict';
const TOPICS=window.TOPICS, EN=window.EN_LESSONS, RUL=window.RU_LESSONS, ABC=window.RU_ALPHABET, ENS=window.EN_SENTENCES||[], RUS=window.RU_SENTENCES||[];
const PL=(window.Capacitor&&window.Capacitor.Plugins)||{};
const LEVELS=window.LEVELS, PICS=window.PICS||{}, HALL=window.HALL, TM3=window.TM3;

/* =========================================================== saqlash */
const KEY='tilmoch-v2';
function fresh(){return {ui:'uz',course:'en',goal:50,sound:true,remind:null,xp:{},srs:{},done:{},gems:25,freeze:0,
  streak:{n:0,last:null,best:0},ach:{},day:null,mist:{},best:{sprint:0,match:0,rain:0},skin:'classic',skins:['classic'],chests:0,
  stats:{perfect:0,maxCombo:0,sessions:0,both:{}},onboarded:false,unlock:{},certs:{},hall:{},bosses:{},legend:{},diff:1,theme:'auto'};}
function load(){
  const f=fresh();
  try{const r=JSON.parse(localStorage.getItem(KEY));
    if(r&&typeof r==='object'){const s=Object.assign(f,r);['stats','best','streak'].forEach(k=>s[k]=Object.assign(fresh()[k],r[k]||{}));['unlock','certs','hall','bosses','legend'].forEach(k=>s[k]=s[k]||{});if(!s.onboarded&&Object.keys(s.done||{}).length)s.onboarded=true;return s;}}catch(e){}
  try{const o=JSON.parse(localStorage.getItem('tilmoch-v1'));
    if(o){f.ui=o.ui||'uz';f.course=o.course||'en';f.srs=o.srs||{};f.xp=o.xp||{};f.onboarded=true;}}catch(e){}
  return f;
}
let S=load();
function save(){try{localStorage.setItem(KEY,JSON.stringify(S))}catch(e){}}

/* =========================================================== matnlar */
const T={
uz:{tabs:["Yo'l","O'yinlar",'Mashq',"Lug'at",'Profil'],courseEn:'Ingliz tili',courseRu:'Rus tili',nowCourse:c=>`Endi: ${c}`,
 hi0:"Salom! Men Bulbul. Bugun 5 daqiqa ajratamizmi?",hiStreak:n=>`Seriyangiz ${n} kun! Bugun ham olovni yoqamizmi?`,
 hiLeft:x=>`Maqsadgacha ${x} XP qoldi. Oldinga!`,hiDone:n=>`Bugungi maqsad bajarildi! Seriya: ${n} kun. Yana bitta dars?`,
 quests:'Kunlik vazifalar',qXp:g=>`${g} XP to'plang`,qNodes:"2 ta darsni yakunlang",qCombo:"Ketma-ket 10 ta to'g'ri javob",
 qPerfect:"Bitta darsni xatosiz o'ting",qSprint:"Sprintda 15 ochko to'plang",qNew:"8 ta yangi so'z o'rganing",qReview:"10 ta so'zni takrorlang",
 unit:i=>`${i}-bo'lim`,start:'Boshlash',again:"Qayta o'tish",locked:"Avval oldingi darslarni tugating",
 ntype:{words:"Yangi so'zlar",grammar:'Grammatika',review:'Mustahkamlash',chest:'Sandiq'},
 ndesc:{words:"Yangi so'zlarni tanishing, tinglang, yig'ing va mustahkamlang.",grammar:"Qoidani o'qing, misollarni tinglang va mashq qiling.",review:"Bo'limdagi barcha so'zlar aralash mashqda."},
 pathEnd:"Barcha bo'limlar tugadi! Takrorlashni davom ettiring.",
 tIntro:"Yangi so'z",tT2N:'Tarjimasini tanlang',tN2T:c=>c==='en'?"Inglizcha qanday bo'ladi?":"Ruscha qanday bo'ladi?",
 tListen:'Eshitganingizni tanlang',tMatch:'Juftliklarni toping',tSpell:"So'zni yig'ing",tDict:"Eshitganingizni yig'ing",
 tBuild:'Gapni tarjima qiling',tGap:"Bo'sh joyni to'ldiring",tPick:"To'g'ri javobni tanlang",
 check:'Tekshirish',cont:'Davom etish',got:'Tushunarli',slow:'Sekin',
 praise:['Ajoyib!','Barakalla!',"Zo'r!","To'ppa-to'g'ri!",'Qoyil!','Super!'],wrongT:'Xato',rightIs:"To'g'ri javob:",
 comboT:n=>`${n} ta ketma-ket!`,
 quitT:'Darsni tark etasizmi?',quitD:"Hozir chiqsangiz, bu darsdagi natija saqlanmaydi.",stay:'Davom etish',quit:'Chiqish',
 resDone:'Dars yakunlandi!',resPerfect:'Benuqson!',resXp:'XP',resAcc:'Aniqlik',resTime:'Vaqt',newRecord:'Yangi rekord!',
 lvlT:n=>`${n}-daraja!`,lvlD:"Yangi darajaga chiqdingiz. Sovg'a: +20 olmos",achNew:'Yangi yutuq!',
 chestT:'Sandiq',chestTap:'Sandiqni ochish',chestGot:n=>`+${n} olmos`,chestDone:'Sandiq ochildi!',
 streakT:n=>`${n} kunlik seriya`,streakD:b=>`Har kuni kamida bitta dars qiling, olov o'chmasin. Eng uzun seriya: ${b} kun.`,
 freezeHave:n=>`Seriya muzlatgichi: ${n} ta. Bir kun o'tkazib yuborsangiz, seriyani saqlab qoladi.`,freezeUsed:"Muzlatgich seriyangizni saqlab qoldi!",
 arena:'Mashq maydoni',arenaSub:"Har kuni bir nechta o'yin — so'zlar xotirada mustahkam qoladi.",record:'Rekord',
 gSprint:['Sprint',"60 soniya: to'g'rimi yoki xato?"],gMatch:['Juftliklar','3 raund, vaqtga qarshi'],gSrs:['Takrorlash',"Unutilayotgan so'zlar"],
 gMist:['Xatolar ustida ishlash',"Xato qilgan so'zlaringiz"],gBuild:['Gap tuzish',"So'zlardan gap yig'ing"],gDict:['Tinglab yozish',"Eshitganingizni yig'ing"],
 dueN:n=>`${n} ta so'z`,noDue:"Hozircha takrorlash kerak bo'lgan so'z yo'q. Yangi darslarni o'ting!",noMist:"Xatolar ro'yxati bo'sh. Ajoyib!",
 sprintIntro:"Ekranda so'z va tarjima chiqadi. To'g'ri bo'lsa «To'g'ri», xato bo'lsa «Xato» ni bosing. Ketma-ket to'g'ri javoblar ochkoni ko'paytiradi.",
 yes:"To'g'ri",no:'Xato',timeUp:'Vaqt tugadi!',points:'Ochko',correct:"To'g'ri",sec:'s',
 words:"Lug'at",search:"So'z qidirish",train:'Mashq qilish',notFound:"Hech narsa topilmadi",
 profile:'Profil',level:n=>`${n}-daraja`,toNext:(a,b)=>`Keyingi darajagacha ${b-a} XP`,
 stTotal:'Jami XP',stBest:'Eng uzun seriya',stMet:"Tanish so'zlar",stMaster:"O'zlashtirilgan",last7:"So'nggi 7 kun",
 achT:'Yutuqlar',shop:"Do'kon",freezeItem:'Seriya muzlatgichi',freezeSub:"Bir kunlik tanaffusda seriyani saqlaydi (ko'pi bilan 2 ta)",
 skinsT:"Bulbul do'ppisi",wear:'Kiyish',worn:'Kiyilgan',noGems:'Olmos yetarli emas',bought:'Sotib olindi!',maxFreeze:"Sizda allaqachon 2 ta muzlatgich bor",
 settings:'Sozlamalar',uiLang:'Ilova tili',course:"O'rganiladigan til",goal:'Kunlik maqsad',goalN:['Yengil','Oddiy','Jiddiy','Intensiv'],
 sound:'Ovoz effektlari',remind:'Kunlik eslatma',remindOff:"Bildirishnomalarga ruxsat berilmadi",remindOn:t=>`Har kuni ${t} da eslatamiz`,
 nTitle:'Bulbul seni kutyapti!',nBody:"5 daqiqalik dars — seriyangiz saqlanib qoladi.",
 reset:"Natijalarni o'chirish",resetQ:"Barcha natijalar, XP va olmoslar o'chiriladi. Ishonchingiz komilmi?",yesReset:"Ha, o'chirish",cancel:'Bekor qilish',resetDone:"Natijalar o'chirildi",
 about:"Tilmoch — ingliz va rus tilini o'rganish uchun bepul ilova. Reklamasiz, internetsiz ishlaydi. Natijalar faqat shu qurilmada saqlanadi.",
 ttsOff:"Bu qurilmada ovozli o'qish mavjud emas",lvlN:{A1:"Boshlang'ich",A2:'Elementar',B1:"O'rta",B2:"O'rtadan yuqori"},
 short:['Ya','Du','Se','Ch','Pa','Ju','Sh'],formula:'Tuzilishi',examples:'Misollar',tapLetter:'Harfni bosing va tinglang',exStart:'Mashqqa o‘tish',
 close:'Yopish',listen:'Tinglash',gemsT:'Olmoslar',gemsD:"Olmoslarni kunlik vazifalar, sandiqlar va xatosiz darslar uchun olasiz. Ularni do'konda sarflang."},
ru:{tabs:['Путь','Игры','Практика','Слова','Профиль'],courseEn:'Английский',courseRu:'Русский',nowCourse:c=>`Сейчас: ${c}`,
 hi0:'Привет! Я Бульбуль. Уделим сегодня 5 минут?',hiStreak:n=>`Ваша серия — ${n} дн.! Продолжим сегодня?`,
 hiLeft:x=>`До цели осталось ${x} XP. Вперёд!`,hiDone:n=>`Цель на сегодня выполнена! Серия: ${n} дн. Ещё урок?`,
 quests:'Задания дня',qXp:g=>`Наберите ${g} XP`,qNodes:'Пройдите 2 урока',qCombo:'10 верных ответов подряд',
 qPerfect:'Пройдите урок без ошибок',qSprint:'Наберите 15 очков в Спринте',qNew:'Выучите 8 новых слов',qReview:'Повторите 10 слов',
 unit:i=>`Раздел ${i}`,start:'Начать',again:'Пройти снова',locked:'Сначала пройдите предыдущие уроки',
 ntype:{words:'Новые слова',grammar:'Грамматика',review:'Закрепление',chest:'Сундук'},
 ndesc:{words:'Знакомьтесь с новыми словами, слушайте, собирайте и закрепляйте.',grammar:'Прочитайте правило, послушайте примеры и потренируйтесь.',review:'Все слова раздела в смешанной тренировке.'},
 pathEnd:'Все разделы пройдены! Продолжайте повторять.',
 tIntro:'Новое слово',tT2N:'Выберите перевод',tN2T:()=>'Как это по-английски?',
 tListen:'Что вы услышали?',tMatch:'Найдите пары',tSpell:'Соберите слово',tDict:'Соберите услышанное',
 tBuild:'Переведите предложение',tGap:'Заполните пропуск',tPick:'Выберите правильный ответ',
 check:'Проверить',cont:'Продолжить',got:'Понятно',slow:'Медленно',
 praise:['Отлично!','Молодец!','Супер!','Верно!','Блестяще!','Класс!'],wrongT:'Неверно',rightIs:'Правильный ответ:',
 comboT:n=>`${n} подряд!`,
 quitT:'Выйти из урока?',quitD:'Если выйти сейчас, прогресс урока не сохранится.',stay:'Продолжить',quit:'Выйти',
 resDone:'Урок пройден!',resPerfect:'Без ошибок!',resXp:'XP',resAcc:'Точность',resTime:'Время',newRecord:'Новый рекорд!',
 lvlT:n=>`Уровень ${n}!`,lvlD:'Вы поднялись на новый уровень. Подарок: +20 кристаллов',achNew:'Новое достижение!',
 chestT:'Сундук',chestTap:'Открыть сундук',chestGot:n=>`+${n} кристаллов`,chestDone:'Сундук открыт!',
 streakT:n=>`Серия: ${n} дн.`,streakD:b=>`Занимайтесь хотя бы одним уроком в день, чтобы огонь не погас. Самая длинная серия: ${b} дн.`,
 freezeHave:n=>`Заморозка серии: ${n} шт. Сохранит серию, если пропустите день.`,freezeUsed:'Заморозка сохранила вашу серию!',
 arena:'Тренировки',arenaSub:'Несколько игр в день — и слова прочно останутся в памяти.',record:'Рекорд',
 gSprint:['Спринт','60 секунд: верно или нет?'],gMatch:['Пары','3 раунда на время'],gSrs:['Повторение','Слова, которые забываются'],
 gMist:['Работа над ошибками','Слова, где были ошибки'],gBuild:['Собери фразу','Составьте предложение'],gDict:['Диктант','Соберите услышанное'],
 dueN:n=>`${n} слов`,noDue:'Пока нечего повторять. Проходите новые уроки!',noMist:'Список ошибок пуст. Отлично!',
 sprintIntro:'На экране появятся слово и перевод. Если пара верная — жмите «Верно», если нет — «Неверно». Серия верных ответов умножает очки.',
 yes:'Верно',no:'Неверно',timeUp:'Время вышло!',points:'Очки',correct:'Верно',sec:'с',
 words:'Словарь',search:'Поиск слова',train:'Тренировать',notFound:'Ничего не найдено',
 profile:'Профиль',level:n=>`Уровень ${n}`,toNext:(a,b)=>`До следующего уровня ${b-a} XP`,
 stTotal:'Всего XP',stBest:'Лучшая серия',stMet:'Знакомые слова',stMaster:'Выучено',last7:'Последние 7 дней',
 achT:'Достижения',shop:'Магазин',freezeItem:'Заморозка серии',freezeSub:'Сохраняет серию при пропуске дня (не больше 2)',
 skinsT:'Тюбетейка Бульбуля',wear:'Надеть',worn:'Надета',noGems:'Не хватает кристаллов',bought:'Куплено!',maxFreeze:'У вас уже 2 заморозки',
 settings:'Настройки',uiLang:'Язык приложения',course:'Изучаемый язык',goal:'Цель на день',goalN:['Лёгкая','Обычная','Серьёзная','Интенсив'],
 sound:'Звуковые эффекты',remind:'Ежедневное напоминание',remindOff:'Разрешение на уведомления не получено',remindOn:t=>`Напомним каждый день в ${t}`,
 nTitle:'Бульбуль ждёт тебя!',nBody:'5 минут урока — и серия сохранится.',
 reset:'Сбросить прогресс',resetQ:'Весь прогресс, XP и кристаллы будут удалены. Вы уверены?',yesReset:'Да, удалить',cancel:'Отмена',resetDone:'Прогресс сброшен',
 about:'Tilmoch — бесплатное приложение для изучения английского и русского. Без рекламы, работает без интернета. Прогресс хранится только на этом устройстве.',
 ttsOff:'Озвучка недоступна на этом устройстве',lvlN:{A1:'Начальный',A2:'Элементарный',B1:'Средний',B2:'Выше среднего'},
 short:['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],formula:'Конструкция',examples:'Примеры',tapLetter:'Нажмите на букву, чтобы послушать',exStart:'К упражнениям',
 close:'Закрыть',listen:'Слушать',gemsT:'Кристаллы',gemsD:'Кристаллы даются за задания дня, сундуки и уроки без ошибок. Тратьте их в магазине.'}
};
Object.assign(T.uz,{
 obTag:"Ingliz va rus tilini noldan eng yuqori darajagacha o'rganing — har kuni bir necha daqiqa.",obStart:'Boshlash',obUi:'Русский интерфейс',
 obCourseQ:"Qaysi tilni o'rganamiz?",obEnSub:'Noldan C2 · IELTS 9 gacha',obRuSub:'Noldan C2 · ТРКИ-4 gacha',
 obGoalQ:'Kuniga qancha vaqt ajratasiz?',goalMin:['5 daqiqa','10 daqiqa','20 daqiqa','30 daqiqa'],
 obLevelQ:'Tilni qanchalik bilasiz?',obZero:'Noldan boshlayman',obZeroSub:"Eng oddiy so'zlardan boshlab",obPlace:'Darajamni aniqlash',obPlaceSub:"3–6 daqiqalik test — mos bosqichdan boshlaysiz",
 placeT:'Darajani aniqlash',placeRes:"Boshlang'ich darajangiz",placeFrom:l=>`Siz ${l} bosqichidan boshlaysiz. Oldingi bosqichlar ham ochiq — xohlasangiz takrorlang.`,placeAgain:'Darajani qayta aniqlash',
 exam:'Daraja imtihoni',examD:l=>`${l} bosqichidagi barcha mavzular bo'yicha 20 ta savol. O'tish uchun 80% kerak — o'tsangiz sertifikat olasiz.`,examFail:"80% kerak edi. Biroz takrorlab, yana urinib ko'ring!",examPass:"Imtihondan o'tdingiz!",
 certT:'SERTIFIKAT',certOf:c=>`Tilmoch · ${c}`,certNote:"Tilmoch ilovasi yutug'i",certsT:'Sertifikatlar',certNew:'Yangi sertifikat!',
 gaugeT:"Kurs bo'yicha darajangiz",gaugeNote:"Taxminiy ko'rsatkich. Haqiqiy natija rasmiy imtihonda aniqlanadi.",
 wod:"Kun so'zi",tPicW:"Rasmga mos so'zni tanlang",tWPic:'Mos rasmni tanlang',
 hallEn:'IELTS zali',hallRu:'ТРКИ zali',hallSub:"Imtihon formatidagi mashqlar: o'qish, tinglash, yozish va gapirish.",
 pRead:"O'qish",pListen:'Tinglash',pWrite:'Yozish',pSpeak:'Gapirish',
 tTfng:"Matnga ko'ra, bu gap…",tLq:'Tinglang va javob bering',transcript:'Matn',model:'Namunaviy javob',task:'Topshiriq',
 prep:'Tayyorlanish',talk:'Gapiring!',prepBtn:'Tayyorlanishni boshlash',talkBtn:'Gapirishni boshlash',doneBtn:'Bajarildi',
 cueHint:"1 daqiqa tayyorlaning, so'ng 2 daqiqa ovoz chiqarib, to'xtamay gapiring.",phrases:'Foydali iboralar',readCue:'Kartochkani tinglash',youShould:'Siz quyidagilarni aytishingiz kerak:',
 lvlLocked:"Bu bosqich hali yopiq. Oldingi bosqichni tugating yoki darajani aniqlash testidan o'ting.",lvlStage:(i,id)=>`${i}-bosqich · ${id}`
});
Object.assign(T.ru,{
 obTag:'Учите английский с нуля до самого высокого уровня — по несколько минут в день.',obStart:'Начать',obUi:"O'zbekcha interfeys",
 obCourseQ:'Какой язык учим?',obEnSub:'С нуля до C2 · IELTS 9',obRuSub:'',
 obGoalQ:'Сколько времени в день готовы уделять?',goalMin:['5 минут','10 минут','20 минут','30 минут'],
 obLevelQ:'Как хорошо вы знаете язык?',obZero:'Начну с нуля',obZeroSub:'С самых простых слов',obPlace:'Определить уровень',obPlaceSub:'Тест на 3–6 минут — начнёте с подходящего этапа',
 placeT:'Определение уровня',placeRes:'Ваш стартовый уровень',placeFrom:l=>`Вы начинаете с этапа ${l}. Предыдущие этапы тоже открыты — повторяйте, если хотите.`,placeAgain:'Определить уровень заново',
 exam:'Экзамен уровня',examD:l=>`20 вопросов по всем темам этапа ${l}. Для сдачи нужно 80% — получите сертификат.`,examFail:'Нужно было 80%. Немного повторите и попробуйте снова!',examPass:'Экзамен сдан!',
 certT:'СЕРТИФИКАТ',certOf:c=>`Tilmoch · ${c}`,certNote:'Достижение в приложении Tilmoch',certsT:'Сертификаты',certNew:'Новый сертификат!',
 gaugeT:'Ваш уровень по курсу',gaugeNote:'Примерный показатель. Реальный результат определяется на официальном экзамене.',
 wod:'Слово дня',tPicW:'Выберите слово к картинке',tWPic:'Выберите подходящую картинку',
 hallEn:'Зал IELTS',hallRu:'Зал ТРКИ',hallSub:'Задания в формате экзамена: чтение, аудирование, письмо и говорение.',
 pRead:'Чтение',pListen:'Аудирование',pWrite:'Письмо',pSpeak:'Говорение',
 tTfng:'Согласно тексту, это утверждение…',tLq:'Послушайте и ответьте',transcript:'Текст',model:'Образец ответа',task:'Задание',
 prep:'Подготовка',talk:'Говорите!',prepBtn:'Начать подготовку',talkBtn:'Начать говорить',doneBtn:'Готово',
 cueHint:'1 минута на подготовку, затем 2 минуты говорите вслух без остановки.',phrases:'Полезные фразы',readCue:'Прослушать карточку',youShould:'Вам нужно рассказать:',
 lvlLocked:'Этот этап пока закрыт. Пройдите предыдущий этап или тест на уровень.',lvlStage:(i,id)=>`Этап ${i} · ${id}`
});
Object.assign(T.uz,{
 games:"O'yinlar zali",gamesSub:"O'ynab o'rganing — har bir o'yin so'zlaringizni mustahkamlaydi.",diffT:'Qiyinlik',diffN:['Oson',"O'rta",'Qiyin'],
 gBoss:['Boss jangi',"Savollarga tez javob berib, yirtqichni yenging"],gRain:["So'z yomg'iri","Tushayotgan so'zlardan to'g'risini tuting"],gMem:['Xotira','Juft kartochkalarni toping'],
 gWs:["So'z qidiruv","Harflar orasidan yashirin so'zlarni toping"],gBal:['Sharlar',"Harflarni toping — Bulbulni yiqitmang"],
 bossNames:['Shilliq','Qum iloni','Tosh dev',"Bo'ron",'Muz ajdar','Soya shohi'],bossWin:"G'alaba!",bossLose:"Bu safar yutqazdingiz",crit:'KRITIK!',timeout:'Vaqt tugadi',
 defeated:'Yengilgan',reward:n=>`G'alaba uchun: +${n} olmos`,lives:'Jon',moves:'Yurish',pairs:'juft',found:'Topildi',wsHint:'Birinchi va oxirgi harfni bosing yoki barmoq bilan torting',
 solved:"So'zlar",wordWas:"So'z edi:",gameOver:"O'yin tugadi!",rainCatch:'Tarjimasini tuting:',
 legendBtn:'Afsonaviy sinov',legendD:"Bitta ham xatosiz o'ting — oltin toj va +30 olmos.",legendWin:'Afsonaviy!',legendFail:"Xato bo'ldi — afsonaviy sinov tugadi. Yana urinib ko'ring!"
});
Object.assign(T.ru,{
 games:'Игровой зал',gamesSub:'Учитесь играя — каждая игра закрепляет ваши слова.',diffT:'Сложность',diffN:['Легко','Средне','Сложно'],
 gBoss:['Битва с боссом','Отвечайте быстро и победите монстра'],gRain:['Дождь слов','Ловите правильное слово среди падающих'],gMem:['Память','Найдите пары карточек'],
 gWs:['Поиск слов','Найдите спрятанные слова среди букв'],gBal:['Шарики','Угадывайте буквы — не дайте Бульбулю упасть'],
 bossNames:['Слизень','Песчаный змей','Каменный великан','Буря','Ледяной дракон','Король теней'],bossWin:'Победа!',bossLose:'На этот раз поражение',crit:'КРИТ!',timeout:'Время вышло',
 defeated:'Побеждён',reward:n=>`За победу: +${n} кристаллов`,lives:'Жизни',moves:'Ходы',pairs:'пар',found:'Найдено',wsHint:'Нажмите первую и последнюю букву или проведите пальцем',
 solved:'Слова',wordWas:'Слово было:',gameOver:'Игра окончена!',rainCatch:'Поймайте перевод:',
 legendBtn:'Легендарное испытание',legendD:'Пройдите без единой ошибки — золотая корона и +30 кристаллов.',legendWin:'Легендарно!',legendFail:'Ошибка — испытание окончено. Попробуйте ещё раз!'
});
Object.assign(T.uz,{themeT:'Mavzu',themeN:['Avto',"Yorug'",'Tungi']});Object.assign(T.ru,{themeT:'Тема',themeN:['Авто','Светлая','Тёмная']});
const t=k=>(T[S.ui][k]!==undefined?T[S.ui][k]:T.uz[k]);
function applyTheme(){const r=document.documentElement;if(S.theme==='light'||S.theme==='dark')r.dataset.theme=S.theme;else delete r.dataset.theme;}

/* =========================================================== kurs */
const C=()=>S.ui==='ru'?'en':S.course;
const tgt=w=>C()==='en'?w[0]:w[2];
const nat=w=>C()==='en'?(S.ui==='ru'?w[2]:w[1]):w[1];
const lessons=()=>C()==='en'?EN:RUL;
const tl=o=>o[S.ui]||o.uz;
const LANG=()=>C()==='en'?'en-US':'ru-RU';
const wkey=w=>C()+':'+w[0];
const rec=w=>S.srs[wkey(w)];
const box=w=>(rec(w)||{}).b||0;
const isDue=w=>{const r=rec(w);return !!r&&r.b>0&&r.d<=Date.now()};
const courseTopics=()=>TOPICS.filter(tp=>!tp.only||tp.only===C());
const allWords=()=>courseTopics().flatMap(tp=>tp.w);
const pic=w=>PICS[w[0]];
const equiv=L=>C()==='en'?'IELTS '+L.ielts:L.trki;
const WMAP={};TOPICS.forEach(tp=>tp.w.forEach(w=>{WMAP[w[0]]=w}));
const WLV={};TOPICS.forEach(tp=>{const li=LEVELS.findIndex(L=>L.id===tp.lvl);tp.w.forEach(w=>{WLV[w[0]]=li;});});
const nearPool=(w,f)=>{const lv=WLV[w[0]]===undefined?0:WLV[w[0]],all=allWords().filter(f||(()=>true)),near=all.filter(x=>Math.abs((WLV[x[0]]===undefined?0:WLV[x[0]])-lv)<=1);return near.length>=8?near:all;};
const IV=[0,1,3,7,16,35];
function grade(w,ok){
  const r=rec(w)||{b:0,d:0};
  if(ok){r.b=Math.min(5,r.b+1);r.d=Date.now()+IV[r.b]*864e5-36e5;}
  else{r.b=1;r.d=Date.now()+10*6e4;}
  S.srs[wkey(w)]=r;
}
const metCount=()=>allWords().filter(w=>box(w)>=1).length;
const masterCount=()=>allWords().filter(w=>box(w)>=3).length;
const dueWords=()=>allWords().filter(isDue);
const mistWords=()=>Object.keys(S.mist).filter(k=>k.startsWith(C()+':')).map(k=>WMAP[k.slice(3)]).filter(Boolean);

/* =========================================================== vaqt, XP, seriya, daraja */
const dkey=d=>{d=d||new Date();return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0')};
const dparse=k=>{const [y,m,d]=k.split('-').map(Number);return new Date(y,m-1,d)};
const gapDays=(a,b)=>Math.round((dparse(b)-dparse(a))/864e5);
const todayXp=()=>S.xp[dkey()]||0;
const totalXp=()=>Object.values(S.xp).reduce((a,b)=>a+b,0);
const pending=[];
function bumpStreak(){
  const st=S.streak,today=dkey();
  if(st.last===today)return;
  const g=st.last?gapDays(st.last,today):null;
  if(g===1)st.n++;
  else if(g>1&&g-1<=S.freeze){S.freeze-=g-1;st.n++;setTimeout(()=>toast(t('freezeUsed')),400);}
  else st.n=1;
  st.last=today;st.best=Math.max(st.best,st.n);
}
function streakNow(){const st=S.streak;if(!st.last)return 0;const g=gapDays(st.last,dkey());return (g<=1||g-1<=S.freeze)?st.n:0;}
function level(x){x=x===undefined?totalXp():x;let n=1,need=100;while(x>=need){x-=need;n++;need=100+50*(n-1);}return {n,cur:x,need};}
function addXp(n){
  if(n<=0)return;
  const before=level().n,k=dkey();
  S.xp[k]=(S.xp[k]||0)+n;bumpStreak();
  const after=level().n;
  if(after>before){S.gems+=20;pending.push({type:'level',n:after});}
  save();
}

/* =========================================================== kunlik vazifalar */
const QDEF={
  xp:{c:'saffron',ic:'bolt',of:()=>S.goal,n:()=>todayXp(),txt:()=>t('qXp')(S.goal),gem:15},
  nodes:{c:'cobalt',ic:'cards',of:()=>2,n:d=>d.nodes,txt:()=>t('qNodes'),gem:15},
  combo:{c:'pom',ic:'flame',of:()=>10,n:d=>d.combo,txt:()=>t('qCombo'),gem:20},
  perfect:{c:'leaf',ic:'target',of:()=>1,n:d=>d.perfect,txt:()=>t('qPerfect'),gem:20},
  sprint:{c:'saffron',ic:'timer',of:()=>15,n:d=>d.sprint,txt:()=>t('qSprint'),gem:15},
  newW:{c:'turq',ic:'spark',of:()=>8,n:d=>d.newW,txt:()=>t('qNew'),gem:15},
  review:{c:'cobalt',ic:'repeat',of:()=>10,n:d=>d.review,txt:()=>t('qReview'),gem:15}
};
function day(){
  const k=dkey();
  if(!S.day||S.day.k!==k){
    let h=0;for(const ch of k)h=(h*31+ch.charCodeAt(0))>>>0;
    const pool=['nodes','combo','perfect','sprint','newW'];if(allWords().filter(w=>box(w)>0).length>=15)pool.push('review');
    const a=pool.splice(h%pool.length,1)[0],b=pool[(h>>>5)%pool.length];
    S.day={k,q:['xp',a,b],nodes:0,combo:0,perfect:0,sprint:0,newW:0,review:0,claimed:[]};
  }
  return S.day;
}

/* =========================================================== yutuqlar */
const ACH=[
 {id:'first',c:'cobalt',g:'1',t:{uz:'Birinchi qadam',ru:'Первый шаг'},d:{uz:'Birinchi darsni yakunlang',ru:'Пройдите первый урок'},ok:()=>S.stats.sessions>=1},
 {id:'s3',c:'saffron',g:'3',t:{uz:'Uchqun',ru:'Искра'},d:{uz:'3 kunlik seriya',ru:'Серия 3 дня'},ok:()=>S.streak.best>=3},
 {id:'s7',c:'saffron',g:'7',t:{uz:'Haftalik olov',ru:'Огонь недели'},d:{uz:'7 kunlik seriya',ru:'Серия 7 дней'},ok:()=>S.streak.best>=7},
 {id:'s30',c:'pom',g:'30',t:{uz:"Mash'al",ru:'Факел'},d:{uz:'30 kunlik seriya',ru:'Серия 30 дней'},ok:()=>S.streak.best>=30},
 {id:'w50',c:'turq',g:'50',t:{uz:"So'z ovchisi",ru:'Охотник за словами'},d:{uz:"50 ta so'z bilan tanishing",ru:'Познакомьтесь с 50 словами'},ok:()=>metCount()>=50},
 {id:'w150',c:'turq',g:'150',t:{uz:"Lug'at ustasi",ru:'Мастер слов'},d:{uz:"150 ta so'z bilan tanishing",ru:'Познакомьтесь со 150 словами'},ok:()=>metCount()>=150},
 {id:'m50',c:'leaf',g:'50',t:{uz:'Mustahkam xotira',ru:'Крепкая память'},d:{uz:"50 ta so'zni o'zlashtiring",ru:'Выучите 50 слов'},ok:()=>masterCount()>=50},
 {id:'perfect',c:'leaf',g:'100',t:{uz:'Benuqson',ru:'Безупречно'},d:{uz:'Darsni xatosiz o‘ting',ru:'Урок без ошибок'},ok:()=>S.stats.perfect>=1},
 {id:'combo20',c:'pom',g:'x20',t:{uz:"To'xtovsiz",ru:'Без остановки'},d:{uz:"Ketma-ket 20 ta to'g'ri javob",ru:'20 верных ответов подряд'},ok:()=>S.stats.maxCombo>=20},
 {id:'sprint25',c:'saffron',g:'25',t:{uz:'Chaqmoq',ru:'Молния'},d:{uz:'Sprintda 25 ochko',ru:'25 очков в Спринте'},ok:()=>S.best.sprint>=25},
 {id:'xp1000',c:'cobalt',g:'1K',t:{uz:'Ming XP',ru:'Тысяча XP'},d:{uz:"Jami 1000 XP to'plang",ru:'Наберите 1000 XP'},ok:()=>totalXp()>=1000},
 {id:'chest5',c:'saffron',g:'5',t:{uz:'Xazina ovchisi',ru:'Кладоискатель'},d:{uz:'5 ta sandiq oching',ru:'Откройте 5 сундуков'},ok:()=>S.chests>=5},
 {id:'night',c:'cobalt',g:'22',t:{uz:'Tungi qush',ru:'Ночная птица'},d:{uz:'Soat 22:00 dan keyin dars qiling',ru:'Урок после 22:00'},ok:()=>S.stats.night},
 {id:'early',c:'turq',g:'7',t:{uz:'Erta turgan',ru:'Ранняя пташка'},d:{uz:'Soat 7:00 gacha dars qiling',ru:'Урок до 7:00'},ok:()=>S.stats.early},
 {id:'boss1',c:'pom',g:'B',t:{uz:"Birinchi g'alaba",ru:'Первая победа'},d:{uz:'Birinchi bossni yenging',ru:'Победите первого босса'},ok:()=>Object.keys(S.bosses||{}).length>=1},
 {id:'bossAll',c:'cobalt',g:'6',t:{uz:'Qahramon',ru:'Герой'},d:{uz:'Bitta kursda barcha 6 bossni yenging',ru:'Победите всех 6 боссов на одном курсе'},ok:()=>['en','ru'].some(c=>[0,1,2,3,4,5].every(i=>(S.bosses||{})[c+':'+i]))},
 {id:'legend',c:'saffron',g:'x0',t:{uz:'Afsona',ru:'Легенда'},d:{uz:"Afsonaviy sinovdan o'ting",ru:'Пройдите легендарное испытание'},ok:()=>Object.keys(S.legend||{}).length>=1},
 {id:'rain30',c:'turq',g:'30',t:{uz:"Yomg'ir ustasi",ru:'Мастер дождя'},d:{uz:"So'z yomg'irida 30 ochko",ru:'30 очков в «Дожде слов»'},ok:()=>(S.best.rain||0)>=30},
 {id:'both',c:'pom',g:'2',t:{uz:'Poliglot',ru:'Полиглот'},d:{uz:'Ikkala kursda dars yakunlang',ru:'Уроки на обоих курсах'},ok:()=>S.stats.both.en&&S.stats.both.ru}
];
function checkAch(){ACH.forEach(a=>{if(!S.ach[a.id]&&a.ok()){S.ach[a.id]=dkey();pending.push({type:'ach',id:a.id});}});save();}

/* =========================================================== ovoz, tebranish, nutq */
let AC=null;
function ac(){if(!AC){try{AC=new (window.AudioContext||window.webkitAudioContext)()}catch(e){}}if(AC&&AC.state==='suspended')AC.resume();return AC;}
function tone(f,t0,dur,type,vol){const a=ac();if(!a)return;const o=a.createOscillator(),g=a.createGain(),s=a.currentTime+t0;
  o.type=type||'sine';o.frequency.setValueAtTime(f,s);g.gain.setValueAtTime(0,s);g.gain.linearRampToValueAtTime(vol||.16,s+.012);
  g.gain.exponentialRampToValueAtTime(.001,s+dur);o.connect(g);g.connect(a.destination);o.start(s);o.stop(s+dur+.03);}
const SFX={
  ok:()=>{tone(659,0,.13,'triangle');tone(988,.09,.24,'triangle')},
  no:()=>{tone(233,0,.16,'sawtooth',.07);tone(175,.12,.26,'sawtooth',.07)},
  tap:()=>tone(900,0,.05,'sine',.05),
  combo:()=>[523,659,784,1047].forEach((f,i)=>tone(f,i*.06,.15,'triangle',.13)),
  win:()=>[523,659,784,1047,1319].forEach((f,i)=>tone(f,i*.11,.32,'triangle',.15)),
  coin:()=>{tone(1319,0,.08,'square',.05);tone(1760,.07,.22,'square',.05)},
  lvl:()=>[392,523,659,784,1047,784,1047].forEach((f,i)=>tone(f,i*.09,.26,'triangle',.14))
};
function sfx(n){if(S.sound&&SFX[n])try{SFX[n]()}catch(e){}}
function buzz(kind){
  if(!S.sound)return;
  try{const H=PL.Haptics;
    if(H){if(kind==='ok')H.notification({type:'SUCCESS'});else if(kind==='no')H.notification({type:'ERROR'});else H.impact({style:'LIGHT'});}
    else if(navigator.vibrate)navigator.vibrate(kind==='no'?[35,40,35]:12);
  }catch(e){}
}
const hasTTS=()=>!!PL.TextToSpeech||('speechSynthesis' in window);
function speak(text,lang,rate){
  lang=lang||LANG();rate=rate||.9;
  const p=PL.TextToSpeech;
  if(p){Promise.resolve(p.stop&&p.stop()).catch(()=>{}).then(()=>p.speak({text,lang,rate})).catch(()=>toast(t('ttsOff')));return;}
  if('speechSynthesis' in window){try{speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(text);u.lang=lang;u.rate=rate;
    const v=speechSynthesis.getVoices().find(v=>(v.lang||'').replace('_','-').toLowerCase().startsWith(lang.slice(0,2)));if(v)u.voice=v;speechSynthesis.speak(u);}catch(e){}}
}

/* =========================================================== konfetti */
function confetti(){
  try{if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;}catch(e){}
  const old=document.getElementById('fx');if(old)old.remove();
  const c=document.createElement('canvas');c.id='fx';document.body.appendChild(c);
  const dpr=window.devicePixelRatio||1,W=c.width=innerWidth*dpr,H=c.height=innerHeight*dpr,x=c.getContext('2d');
  const cols=['#2350D8','#0FA3A0','#F4A51C','#E3405A','#26A464','#FFFFFF'];
  const P=Array.from({length:150},()=>({x:W/2+(Math.random()-.5)*W*.25,y:H*.38,vx:(Math.random()-.5)*W*.024,vy:-Math.random()*H*.028-H*.008,
    r:(6+Math.random()*8)*dpr,a:Math.random()*6,va:(Math.random()-.5)*.35,c:cols[Math.floor(Math.random()*cols.length)]}));
  let n=0;(function f(){n++;x.clearRect(0,0,W,H);
    P.forEach(p=>{p.vy+=H*.0009;p.vx*=.985;p.x+=p.vx;p.y+=p.vy;p.a+=p.va;x.save();x.translate(p.x,p.y);x.rotate(p.a);x.fillStyle=p.c;x.fillRect(-p.r/2,-p.r/4,p.r,p.r/2);x.restore();});
    if(n<180)requestAnimationFrame(f);else c.remove();})();
}

/* =========================================================== yordamchilar */
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const shuffle=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};
const pick=a=>a[Math.floor(Math.random()*a.length)];
const norm=s=>String(s).toLowerCase().replace(/ё/g,'е').replace(/[.,!?'’ʻ"«»—–\-]/g,'').replace(/\s+/g,' ').trim();
let toastTimer;
function toast(msg){let el=document.querySelector('.toast');if(!el){el=document.createElement('div');el.className='toast';el.setAttribute('role','status');document.body.appendChild(el);}
  el.textContent=msg;el.hidden=false;clearTimeout(toastTimer);toastTimer=setTimeout(()=>{el.hidden=true},2300);}
function fmtTime(ms){const s=Math.round(ms/1000);return Math.floor(s/60)+':'+String(s%60).padStart(2,'0');}

/* ikonkalar */
const IC={
 path:'<path d="M6 20c0-4 12-4 12-8s-12-4-12-8"/><circle cx="6" cy="4" r="2"/><circle cx="18" cy="12" r="2"/><circle cx="6" cy="20" r="2"/>',
 bolt:'<path d="M13 2L4 14h7l-1 8 9-12h-7z"/>',
 game:'<rect x="2" y="7" width="20" height="11" rx="5.5"/><path d="M7 10.5v4M5 12.5h4"/><circle cx="15.5" cy="11.5" r="1"/><circle cx="18" cy="14" r="1"/>',
 flame:'<path d="M12 2c1 4 6 6.5 6 12.2A6 6 0 016 14.4c0-3 1.8-4.8 3-6 .2 2 1 3.2 2.2 3.3C10.5 8.5 11 5 12 2z"/>',
 book:'<path d="M4 4h6a3 3 0 013 3v13a2 2 0 00-2-2H4z"/><path d="M20 4h-6a3 3 0 00-3 3v13a2 2 0 012-2h7z"/>',
 user:'<circle cx="12" cy="8" r="4"/><path d="M4 21c1-4 4-6 8-6s7 2 8 6"/>',
 cards:'<rect x="3" y="6" width="13" height="15" rx="2.5"/><path d="M8 3h10.5A2.5 2.5 0 0121 5.5V17"/>',
 pen:'<path d="M4 20l4-1 11-11-3-3L5 16z"/><path d="M14 6l3 3"/>',
 dumb:'<path d="M6 7v10M18 7v10M3 10v4M21 10v4M6 12h12"/>',
 chest:'<rect x="3" y="10" width="18" height="10" rx="2"/><path d="M3 10a9 5 0 0118 0"/><path d="M11 13h2v3h-2z"/>',
 lock:'<rect x="5" y="11" width="14" height="10" rx="2.5"/><path d="M8 11V8a4 4 0 018 0v3"/>',
 check:'<path d="M5 12.5l4.5 4.5L19 7.5"/>',
 x:'<path d="M18 6L6 18M6 6l12 12"/>',
 back:'<path d="M15 18l-6-6 6-6"/>',
 speak:'<path d="M11 5L6 9H2v6h4l5 4z"/><path d="M15.5 8.5a5 5 0 010 7M19 5a10 10 0 010 14"/>',
 slow:'<path d="M11 5L6 9H2v6h4l5 4z"/><path d="M15.5 9.5a3.5 3.5 0 010 5"/>',
 target:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5"/>',
 timer:'<circle cx="12" cy="13" r="8"/><path d="M12 9v4l2.5 2.5M9 2h6"/>',
 spark:'<path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5L18 18M18 6l-2.5 2.5M8.5 15.5L6 18"/>',
 repeat:'<path d="M17 2l4 4-4 4"/><path d="M3 11V9a3 3 0 013-3h15"/><path d="M7 22l-4-4 4-4"/><path d="M21 13v2a3 3 0 01-3 3H3"/>',
 search:'<circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/>',
 ear:'<path d="M6 9a6 6 0 1112 0c0 4-4 5-4 8a3 3 0 01-6 0"/><path d="M10 9a2 2 0 114 0"/>',
 puzzle:'<path d="M4 8h4a2 2 0 114 0h4v4a2 2 0 110 4v4H4z"/>',
 snow:'<path d="M12 2v20M4 6l16 12M20 6L4 18"/>',
 bell:'<path d="M6 16V11a6 6 0 0112 0v5l2 2H4z"/><path d="M10 21h4"/>',
 trophy:'<path d="M7 4h10v5a5 5 0 01-10 0z"/><path d="M7 6H4a3 3 0 003 4M17 6h3a3 3 0 01-3 4M12 14v4M8 21h8"/>'
};
const ico=(n,cls)=>`<svg class="${cls||'i'}" viewBox="0 0 24 24" aria-hidden="true">${IC[n]}</svg>`;
const FLAME='<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2c1 4 6 6.5 6 12.2A6 6 0 016 14.4c0-3 1.8-4.8 3-6 .2 2 1 3.2 2.2 3.3C10.5 8.5 11 5 12 2z" fill="currentColor" stroke="none"/><path d="M12 21a3 3 0 01-3-3c0-2 1.6-3 3-4.5 1.4 1.5 3 2.5 3 4.5a3 3 0 01-3 3z" fill="#FFE2A0" stroke="none"/></svg>';
const GEM='<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 3h12l4 6-10 12L2 9z" fill="currentColor" stroke="none"/><path d="M2 9h20M9 3l3 6 3-6M12 21L8.5 9M12 21l3.5-12" stroke="rgba(255,255,255,.55)" stroke-width="1.3" fill="none"/></svg>';
const STAR=on=>`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2l3 6.5 7 .8-5.2 4.8 1.5 7L12 17.6 5.7 21.1l1.5-7L2 9.3l7-.8z" fill="${on?'var(--saffron)':'var(--surface-2)'}" stroke="${on?'var(--saffron-d)':'var(--line)'}" stroke-width="1.2" stroke-linejoin="round"/></svg>`;
const speakBtn=(text,cls,lang)=>hasTTS()?`<button class="speak ${cls||''}" data-act="speak" data-text="${esc(text)}"${lang?` data-lang="${lang}"`:''} aria-label="${esc(t('listen'))}">${ico('speak')}</button>`:'';

/* girih yulduzi (daraja va yutuq nishonlari uchun) */
function starPoly(cx,cy,R,r){const p=[];for(let i=0;i<16;i++){const a=Math.PI/8*i-Math.PI/2,rr=i%2?r:R;p.push((cx+rr*Math.cos(a)).toFixed(1)+','+(cy+rr*Math.sin(a)).toFixed(1));}return p.join(' ');}
function badgeSvg(color,glyph,size){
  return `<svg viewBox="0 0 80 80" width="${size||72}" height="${size||72}" aria-hidden="true">
   <polygon points="${starPoly(40,43,36,29)}" fill="var(--${color}-d)"/>
   <polygon points="${starPoly(40,39,36,29)}" fill="var(--${color})"/>
   <circle cx="40" cy="39" r="21" fill="rgba(255,255,255,.22)"/>
   <text x="40" y="40" text-anchor="middle" dominant-baseline="central" font-family="Unbounded, Onest, sans-serif" font-weight="700" font-size="${glyph.length>2?14:19}" fill="#fff">${esc(glyph)}</text></svg>`;
}

/* =========================================================== maskot: Bulbul */
const SKINS=[
 {id:'classic',c:'#1E1B2E',m:'#FFFFFF',price:0,t:{uz:'Chust',ru:'Чуст'}},
 {id:'cobalt',c:'#2350D8',m:'#FFD66B',price:60,t:{uz:'Kobalt',ru:'Кобальт'}},
 {id:'anor',c:'#D8344E',m:'#FFFFFF',price:100,t:{uz:'Anor',ru:'Гранат'}},
 {id:'zumrad',c:'#139A62',m:'#FFE7A8',price:150,t:{uz:'Zumrad',ru:'Изумруд'}},
 {id:'oltin',c:'#F0A81E',m:'#5A2E00',price:250,t:{uz:'Oltin',ru:'Золото'}}
];
function mascot(size,mood,cls,skinId){
  const sk=SKINS.find(s=>s.id===(skinId||S.skin))||SKINS[0];
  const ink='#0F1A47';
  let eyes;
  if(mood==='happy')eyes=`<path d="M37 61q9-10 18 0M65 61q9-10 18 0" stroke="${ink}" stroke-width="4.5" fill="none" stroke-linecap="round"/>`;
  else{const py=mood==='sad'?64:61;
    eyes=`<g class="eyes"><circle cx="46" cy="60" r="10.5" fill="#fff"/><circle cx="74" cy="60" r="10.5" fill="#fff"/>
      <circle cx="48" cy="${py}" r="5.6" fill="${ink}"/><circle cx="72" cy="${py}" r="5.6" fill="${ink}"/>
      <circle cx="50" cy="${py-2}" r="1.9" fill="#fff"/><circle cx="74" cy="${py-2}" r="1.9" fill="#fff"/></g>`
      +(mood==='sad'?`<path d="M36 47l15 6M84 47l-15 6" stroke="${ink}" stroke-width="3.5" stroke-linecap="round"/>`:'');}
  const wing=mood==='happy'?38:14;
  return `<svg class="mascot ${cls||''}" width="${size}" height="${size}" viewBox="0 0 120 120" aria-hidden="true">
   <ellipse cx="60" cy="113" rx="30" ry="5" fill="rgba(15,26,71,.16)"/>
   <path d="M86 92l22 9-8-18z" fill="#0B8F8A"/>
   <ellipse cx="24" cy="78" rx="10" ry="18" fill="#0E948D" transform="rotate(${-wing} 24 78)"/>
   <ellipse cx="96" cy="78" rx="10" ry="18" fill="#0E948D" transform="rotate(${wing} 96 78)"/>
   <ellipse cx="60" cy="72" rx="38" ry="36" fill="#17B2A9"/>
   <ellipse cx="60" cy="85" rx="24" ry="20" fill="#FFF4DC"/>
   <path d="M50 106v7M70 106v7" stroke="#F4A51C" stroke-width="4.5" stroke-linecap="round"/>
   <ellipse cx="35" cy="73" rx="6" ry="4" fill="#FF8FA3" opacity=".75"/><ellipse cx="85" cy="73" rx="6" ry="4" fill="#FF8FA3" opacity=".75"/>
   ${eyes}
   <path d="${mood==='happy'||mood==='wow'?'M51 70h18l-9 12z':'M52 70h16l-8 10z'}" fill="#F4A51C" stroke="#D88A0A" stroke-width="1.5" stroke-linejoin="round"/>
   <path d="M33 44L37 25Q60 18 83 25L87 44Z" fill="${sk.c}"/>
   <path d="M33 44h54" stroke="${sk.m}" stroke-width="2.6"/>
   <g fill="${sk.m}"><path d="M46 39q-6-6 0-11q4 5 0 11z"/><path d="M60 38q-6-6 0-12q6 6 0 12z"/><path d="M74 39q6-6 0-11q-4 5 0 11z"/></g>
  </svg>`;
}

/* =========================================================== yo'l (path) */
const UC=['cobalt','turq','saffron','pom','leaf'];
let PATH=null,PATHC=null;
function buildPath(){
  if(PATH&&PATHC===C()+S.ui)return PATH;
  const ls=lessons(),out=[];let uc=0;
  LEVELS.forEach((L,li)=>{
    const tps=courseTopics().filter(tp=>tp.lvl===L.id),lls=ls.filter(l=>l.lvl===L.id),units=[];
    tps.forEach((tp,i)=>{
      const nodes=[],half=Math.ceil(tp.w.length/2);
      lls.forEach((l,j)=>{if(Math.floor(j*tps.length/lls.length)===i)nodes.push({id:'g-'+l.id,type:'grammar',lesson:l});});
      nodes.push({id:'w1-'+tp.id,type:'words',topic:tp,ws:tp.w.slice(0,half)});
      nodes.push({id:'w2-'+tp.id,type:'words',topic:tp,ws:tp.w.slice(half)});
      nodes.push({id:'r-'+tp.id,type:'review',topic:tp});
      nodes.push({id:'c-'+tp.id,type:'chest',topic:tp});
      const u={i:uc,topic:tp,nodes,col:UC[uc%5],li};uc++;
      nodes.forEach(n=>{n.unit=u;n.li=li;});units.push(u);
    });
    if(!units.length)return;
    out.push({L,li,units,exam:{id:'x-'+L.id,type:'exam',L,li,unit:null}});
  });
  PATH=out;PATHC=C()+S.ui;return out;
}
const doneKey=n=>C()+':'+n.id;
const stars=n=>S.done[doneKey(n)]||0;
function flatNodes(){return buildPath().flatMap(lv=>lv.units.flatMap(u=>u.nodes).concat([lv.exam]));}
const unlockAt=()=>S.unlock[C()]||0;
function currentNode(){const u=unlockAt();return flatNodes().find(n=>n.li>=u&&!(doneKey(n) in S.done));}
function nodeOpen(n,cn){return stars(n)>0||n.li<unlockAt()||(!!cn&&cn.id===n.id);}
function levelReached(li){const cn=currentNode();return li<unlockAt()||(cn?cn.li>=li:true);}
function courseValue(){
  const lvs=buildPath();let h=-1;lvs.forEach(lv=>{if(S.certs[C()+':'+lv.L.id])h=Math.max(h,lv.li);});
  const base=Math.max(h+1,unlockAt());if(base>=LEVELS.length)return LEVELS.length;
  const lv=lvs.find(x=>x.li===base);if(!lv)return base;
  const ns=lv.units.flatMap(u=>u.nodes).concat([lv.exam]);return base+ns.filter(n=>stars(n)).length/ns.length;
}

/* =========================================================== topshiriqlar */
const ALPH={en:'abcdefghijklmnopqrstuvwxyz',ru:'абвгдежзийклмнопрстуфхцчшыэюя'};
function optsFor(w,f,pool,n){
  const seen=new Set([norm(f(w))]),out=[f(w)];
  for(const o of shuffle(pool)){const v=f(o);if(!seen.has(norm(v))){seen.add(norm(v));out.push(v);}if(out.length===(n||4))break;}
  return shuffle(out);
}
function mkChoice(w,dir,pool){
  pool=nearPool(w);
  const f=dir==='t2n'?nat:tgt,opts=optsFor(w,f,pool);
  return {k:'choice',dir,w,opts,ans:opts.indexOf(f(w))};
}
function mkSpell(w,listen){
  const s=tgt(w);
  if(/\s/.test(s)||s.length>12){
    const ans=s.split(/\s+/),extra=shuffle(allWords().map(tgt).filter(x=>!/\s/.test(x)&&!ans.map(norm).includes(norm(x)))).slice(0,2);
    return {k:'spell',w,listen,mode:'words',ans,tiles:shuffle(ans.concat(extra))};
  }
  const letters=[...s.toLowerCase()],al=ALPH[C()],extra=[];
  while(extra.length<2){const c=al[Math.floor(Math.random()*al.length)];if(!letters.includes(c))extra.push(c);}
  return {k:'spell',w,listen,mode:'letters',ans:letters,tiles:shuffle(letters.concat(extra))};
}
function sentences(){
  if(C()==='en'){const a=[];EN.forEach(l=>l.ex.forEach(e=>a.push({t:e[0],n:S.ui==='ru'?e[2]:e[1]})));ENS.forEach(e=>a.push({t:e[0],n:S.ui==='ru'?e[2]:e[1]}));return a;}
  const a=[];RUL.forEach(l=>(l.ex||[]).forEach(e=>a.push({t:e[0],n:e[1]})));RUS.forEach(e=>a.push({t:e[0],n:e[1]}));return a;
}
const toks=s=>s.split(/\s+/).filter(Boolean);
function mkBuild(sent){
  const ans=toks(sent.t),an=ans.map(norm);
  const extra=shuffle(sentences().flatMap(s=>toks(s.t)).filter(x=>!an.includes(norm(x)))).filter((x,i,a)=>a.findIndex(y=>norm(y)===norm(x))===i).slice(0,2);
  return {k:'build',s:sent,ans,tiles:shuffle(ans.concat(extra))};
}
function sentenceWith(words){
  const all=sentences().filter(s=>toks(s.t).length<=9);
  const hit=all.filter(s=>words.some(w=>{const x=norm(tgt(w));return x.length>2&&(' '+norm(s.t)+' ').includes(' '+x+' ')}));
  return pick(hit.length?hit:all);
}
function mkGram(q){const opts=shuffle(q[1]);return {k:'gram',prompt:q[0],opts,ans:opts.indexOf(q[1][q[2]])};}
const picWords=ws=>ws.filter(pic);
function mkPic(w,dir){
  const pool=nearPool(w,pic),opts=[w];
  if(dir==='w2p'){const seen=new Set([pic(w)]);for(const o of shuffle(pool)){if(!seen.has(pic(o))){seen.add(pic(o));opts.push(o);}if(opts.length===4)break;}
    const sh=shuffle(opts);return {k:'pic',dir,w,opts:sh.map(pic),ans:sh.indexOf(w)};}
  const seen=new Set([pic(w),norm(tgt(w))]);
  for(const o of shuffle(pool)){if(!seen.has(pic(o))&&!seen.has(norm(tgt(o)))){seen.add(pic(o));seen.add(norm(tgt(o)));opts.push(o);}if(opts.length===4)break;}
  const sh=shuffle(opts);return {k:'pic',dir,w,opts:sh.map(tgt),ans:sh.indexOf(w)};
}
function examQ(li){
  const L=LEVELS[li],ws=shuffle(courseTopics().filter(t=>t.lvl===L.id).flatMap(t=>t.w)),ls=lessons().filter(l=>l.lvl===L.id);
  const q=mixedQ(ws.slice(0,12));
  shuffle(ls.flatMap(l=>l.q)).slice(0,6).forEach(x=>q.push(mkGram(x)));
  const sents=ls.flatMap(l=>(l.ex||[]).map(e=>({t:e[0],n:C()==='en'&&S.ui==='ru'?e[2]:e[1]})));
  shuffle(sents.length?sents:sentences().filter(s=>toks(s.t).length<=9)).slice(0,2).forEach(x=>q.push(mkBuild(x)));
  return shuffle(q);
}
function placeQ(){
  const q=[];
  LEVELS.forEach((L,li)=>{
    const ws=shuffle(courseTopics().filter(t=>t.lvl===L.id).flatMap(t=>t.w)),ls=lessons().filter(l=>l.lvl===L.id&&!l.alphabet);
    if(ws.length<3)return;
    const b=[mkChoice(ws[0],'t2n'),mkChoice(ws[1],'n2t'),ls.length?mkGram(pick(pick(ls).q)):mkChoice(ws[2],'t2n')];
    b.forEach(x=>{x.li=li;});q.push(...b);
  });
  return q;
}
function hallSess(part,i){
  const H=HALL[C()],ru=S.ui==='ru';
  if(part==='r'){const p=H.reading[i],labels=C()==='en'?['TRUE','FALSE','NOT GIVEN']:['Да','Нет','Не сказано'];
    return {kind:'hall',hallKey:'r'+i,noRe:true,q:p.q.map(x=>({k:'tfng',ptitle:p.title,passage:p.text,prompt:x[0],opts:labels,ans:x[1]}))};}
  if(part==='l'){const p=H.listening[i];
    return {kind:'hall',hallKey:'l'+i,noRe:true,transcript:p.text,q:p.q.map((x,j)=>{const o=shuffle(x[1]);return {k:'lq',text:p.text,first:j===0,prompt:x[0],opts:o,ans:o.indexOf(x[1][x[2]])};})};}
  const w=H.writing[i];
  return {kind:'hall',hallKey:'w'+i,noRe:true,task:w.task,model:w.parts.map(p=>p[1]).join(' '),
    q:w.parts.map(p=>Object.assign(mkBuild({t:p[1],n:C()==='en'&&ru?p[3]:p[2]}),{role:tl(p[0]),task:w.task}))};
}
function remake(ex){
  if(ex.k==='choice')return mkChoice(ex.w,ex.dir);
  if(ex.k==='spell')return mkSpell(ex.w,ex.listen);
  if(ex.k==='build')return Object.assign(mkBuild(ex.s),{role:ex.role,task:ex.task});
  if(ex.k==='pic')return mkPic(ex.w,ex.dir);
  if(ex.k==='gram'){const opts=shuffle(ex.opts);return {k:'gram',prompt:ex.prompt,opts,ans:opts.indexOf(ex.opts[ex.ans])};}
  return null;
}

/* sessiya to'plamlari */
function learnQ(words,first){
  const pool=allWords(),q=[];
  if(first){
    for(let i=0;i<words.length;i+=2){const g=words.slice(i,i+2);g.forEach(w=>q.push({k:'intro',w}));g.forEach((w,j)=>q.push(mkChoice(w,j?'n2t':'t2n',pool)));}
  }else shuffle(words).slice(0,5).forEach((w,i)=>q.push(mkChoice(w,i%2?'n2t':'t2n',pool)));
  q.push({k:'match',ws:shuffle(words).slice(0,5)});
  const pw=shuffle(picWords(words));if(pw.length)q.push(mkPic(pw[0],'w2p'));if(pw.length>1)q.push(mkPic(pw[1],'p2w'));
  const s=shuffle(words);
  q.push(mkChoice(s[0],hasTTS()?'listen':'n2t',pool));
  q.push(mkSpell(s[1]));q.push(mkSpell(s[2]||s[0]));
  if(hasTTS())q.push(mkSpell(s[3]||s[1],true));
  q.push(mkBuild(sentenceWith(words)));
  return q;
}
function reviewQ(words){
  const pool=allWords(),s=shuffle(words),q=[];
  q.push({k:'match',ws:s.slice(0,5)});
  s.slice(5,9).forEach((w,i)=>q.push(mkChoice(w,i%2?'n2t':'t2n',pool)));
  if(hasTTS()){q.push(mkChoice(s[9]||s[0],'listen',pool));q.push(mkSpell(s[10]||s[1],true));}
  q.push(mkSpell(s[11]||s[2]));q.push(mkSpell(s[3]));
  q.push({k:'match',ws:s.slice(5,10).length>=4?s.slice(5,10):s.slice(0,5)});
  q.push(mkBuild(sentenceWith(words)));q.push(mkBuild(sentenceWith(shuffle(words).slice(0,3))));
  const pw=shuffle(picWords(words));if(pw.length>=2){q.splice(2,0,mkPic(pw[0],'p2w'));q.push(mkPic(pw[1],'w2p'));}
  return q;
}
function grammarQ(l){
  const q=l.q.map(mkGram);
  if(l.ex)shuffle(l.ex).slice(0,3).forEach(e=>q.splice(Math.floor(Math.random()*(q.length+1)),0,mkBuild({t:e[0],n:C()==='en'&&S.ui==='ru'?e[2]:e[1]})));
  else if(l.alphabet)shuffle(ABC).slice(0,3).forEach(a=>q.push(mkSpell(['abc-'+a[2],a[3],a[2]],hasTTS())));
  return q;
}
function mixedQ(words){
  const pool=allWords();
  return shuffle(words).map((w,i)=>{const r=i%4;
    if(r===0)return pic(w)?mkPic(w,i%8?'w2p':'p2w'):mkChoice(w,'t2n',pool);if(r===1)return mkChoice(w,'n2t',pool);
    if(r===2)return hasTTS()?mkChoice(w,'listen',pool):mkSpell(w);return mkSpell(w);});
}
function practicePool(){
  const ws=allWords(),st=ws.filter(w=>box(w)>0);
  return st.length>=12?st:st.concat(ws.filter(w=>box(w)===0).slice(0,24-st.length));
}

/* =========================================================== navigatsiya */
const TABS=['path','games','arena','words','profile'];
let tab='path',stack=[{v:'path'}],modal=null,sess=null,sprint=null,sprintTimer=null,cueTimer=null;
const view=document.getElementById('view'),topEl=document.getElementById('top'),nav=document.getElementById('nav'),layer=document.getElementById('layer');
const cur=()=>stack[stack.length-1];
function go(v,p){stack.push(Object.assign({v},p||{}));render(true);}
function setTab(x){stopSprint();tab=x;stack=[{v:x}];render(true);if(x==='path')scrollToCurrent();}
function back(){
  if(modal){closeModal();return true;}
  const v=cur().v;
  if(v==='sess'&&sess&&!sess.over){openModal({type:'quit'});return true;}
  if(v==='sprint'&&sprint&&sprint.on){openModal({type:'quit'});return true;}
  if(stack.length>1){stopSprint();stack.pop();render(true);return true;}
  if(tab!=='path'){setTab('path');return true;}
  return false;
}
function home(){stopSprint();sess=null;stack=[{v:tab}];render(true);flush();}

function render(scroll){
  const c=cur(),out=V[c.v](c);
  topEl.innerHTML=out.top!==undefined?out.top:topBar();
  view.innerHTML=out.html;
  view.className='view'+(out.sess?' sess':'');
  nav.hidden=!!out.hideNav;
  if(!out.hideNav)nav.innerHTML='<div class="nav-in">'+TABS.map((k,i)=>`<button data-act="tab" data-tab="${k}"${tab===k?' aria-current="page"':''}>${ico(['path','game','bolt','book','user'][i])}<span>${esc(t('tabs')[i])}</span></button>`).join('')+'</div>';
  document.documentElement.lang=S.ui;
  if(scroll)window.scrollTo(0,0);
  if(out.after)out.after();
}
function topBar(){
  const st=streakNow(),lv=level();
  return `<button class="pill lang" data-act="courseMenu" aria-label="${esc(t('course'))}">${C()==='en'?'EN':'RU'}</button>
   <button class="pill flame${st?'':' off'}" data-act="streakInfo" aria-label="${esc(t('streakT')(st))}">${FLAME}<span>${st}</span></button>
   <button class="pill gem" data-act="gemInfo" aria-label="${esc(t('gemsT'))}">${GEM}<span>${S.gems}</span></button>
   <span class="spacer"></span>
   <button class="lvl-badge" data-act="tab" data-tab="profile" aria-label="${esc(t('level')(lv.n))}"><svg viewBox="0 0 80 80"><polygon points="${starPoly(40,40,38,31)}" fill="var(--cobalt)"/></svg><b>${lv.n}</b></button>`;
}
function scrollToCurrent(){
  const cn=currentNode();if(!cn||flatNodes().indexOf(cn)<5)return;
  requestAnimationFrame(()=>{const el=document.querySelector('.node.cur');if(el){const r=el.getBoundingClientRect();if(r.top>innerHeight*.7)window.scrollTo({top:window.scrollY+r.top-innerHeight*.45,behavior:'smooth'});}});
}

/* =========================================================== ekranlar */
const V={};

V.path=()=>{
  const d=day(),x=todayXp(),st=streakNow();
  const msg=x>=S.goal?t('hiDone')(st):x>0?t('hiLeft')(S.goal-x):st>0?t('hiStreak')(st):t('hi0');
  let html=`<section class="hero">${mascot(108,x>=S.goal?'happy':'idle','bob')}
    <div><div class="bubble">${esc(msg)}</div>
    <div class="goal-row">${FLAME.replace('class="i"','class="i" style="color:var(--saffron)"')}<div class="bar"><i style="width:${Math.min(100,x/S.goal*100)}%"></i></div><span class="num">${x}/${S.goal}</span></div></div></section>`;
  html+=`<section class="card"><div class="row between" style="margin-bottom:4px"><h2 class="h2">${esc(t('quests'))}</h2>${GEM.replace('class="i"','class="i" style="color:var(--cobalt)"')}</div>`
    +d.q.map(id=>{const q=QDEF[id],n=Math.min(q.n(d),q.of()),of=q.of(),got=d.claimed.includes(id),ready=n>=of&&!got;
      return `<div class="quest"><span class="quest-ico" style="background:var(--${q.c})">${ico(q.ic)}</span>
        <div><div class="t">${esc(q.txt())}</div><div class="row" style="gap:8px"><div class="bar grow"><i style="width:${n/of*100}%"></i></div><span class="num muted" style="font-size:12px">${n}/${of}</span></div></div>
        <button class="claim${ready?' ready':got?' got':''}" data-act="claim" data-id="${id}"${ready?'':' disabled'}>${got?ico('check'):GEM+q.gem}</button></div>`;}).join('')+'</section>';
  const w0=wod();
  if(w0)html+=`<section class="card wod"><span class="pic-mid">${pic(w0)}</span><div class="grow"><div class="label">${esc(t('wod'))}</div><div class="h2">${esc(tgt(w0))}</div><div class="muted">${esc(nat(w0))}</div></div>${speakBtn(tgt(w0))}</section>`;
  const lvs=buildPath(),cn=currentNode(),OFF=[0,52,78,52,0,-52,-78,-52];let k=0;
  lvs.forEach(lv=>{
    const L=lv.L,reached=levelReached(lv.li),ns=lv.units.flatMap(u=>u.nodes).concat([lv.exam]),dn=ns.filter(n=>stars(n)).length,cert=S.certs[C()+':'+L.id];
    html+=`<section class="lvl-scene${reached?'':' dim'}">${TM3.sceneSvg(lv.li)}
      ${reached?'':`<span class="lvl-lock">${ico('lock')}</span>`}${cert?`<button class="lvl-cert" data-act="certOpen" data-id="${L.id}" aria-label="${esc(t('certsT'))}">${badgeSvg('saffron',L.id,48)}</button>`:''}
      <div class="lvl-info"><div class="label">${esc(t('lvlStage')(lv.li+1,L.id))} · ${esc(equiv(L))}</div><h2>${esc(tl(L.city))}</h2>
      <div class="row" style="gap:10px"><div class="bar grow"><i style="width:${dn/ns.length*100}%"></i></div><span class="num" style="font-size:12px">${dn}/${ns.length}</span></div></div></section>`;
    lv.units.forEach(u=>{
      const done=u.nodes.filter(n=>stars(n)).length;
      html+=`<section class="unit" style="--c:var(--${u.col});--cd:var(--${u.col}-d)"><div class="grow"><div class="label">${esc(t('unit')(u.i+1))} · ${u.topic.lvl}</div><h2>${esc(tl(u.topic.t))}</h2></div><span class="cnt">${done}/${u.nodes.length}</span></section><div class="path">`
        +(()=>{const offs=u.nodes.map(()=>OFF[k++%8]),side=offs.reduce((a,b)=>a+b,0)>0?'l':'r';return u.nodes.map((n,j)=>nodeHtml(n,cn,offs[j],u.col)).join('')+`<span class="deco ${side}">${DECO[u.i%DECO.length]}</span>`;})()+'</div>';
    });
    html+=`<div class="path">${nodeHtml(lv.exam,cn,0,'saffron')}</div>`;
  });
  if(!cn)html+=`<div class="path-end">${mascot(96,'happy','cheer')}<b>${esc(t('pathEnd'))}</b></div>`;
  return {html};
};
function nodeHtml(n,cn,off,col){
  const lg=!!S.legend[doneKey(n)];if(lg)col='saffron';
  const st=stars(n),isCur=!!cn&&cn.id===n.id,locked=!nodeOpen(n,cn);
  const icn=n.type==='chest'?(st?'check':'chest'):n.type==='grammar'?'pen':n.type==='review'?'dumb':n.type==='exam'?'trophy':'cards';
  const lab=n.type==='exam'?t('exam'):t('ntype')[n.type]+': '+(n.lesson?tl(n.lesson.t):tl(n.topic.t));
  return `<div class="node-wrap" style="transform:translateX(${off}px)">
    ${isCur?`<span class="buddy ${off>0?'l':'r'}">${mascot(60,'idle','bob')}</span>`:''}${lg?`<span class="crown">${CROWN}</span>`:''}
    ${isCur?`<span class="start-tip" style="--c:var(--${col})">${esc(n.type==='chest'?t('chestTap'):t('start'))}</span>`:''}
    <button class="node${n.type==='chest'?' chest':''}${n.type==='exam'?' exam':''}${locked?' locked':''}${isCur?' cur':''}" style="--c:var(--${col});--cd:var(--${col}-d)" data-act="node" data-id="${n.id}" aria-label="${esc(lab)}">${ico(locked?'lock':icn)}</button>
    ${n.type==='exam'?`<span class="node-label">${esc(t('exam'))}</span>`:''}
    ${n.type!=='chest'?`<span class="stars">${st?[1,2,3].map(i=>STAR(i<=st)).join(''):''}</span>`:''}</div>`;
}
function wod(){const ws=allWords().filter(pic);if(!ws.length)return null;let h=0;for(const ch of dkey()+C())h=(h*31+ch.charCodeAt(0))>>>0;return ws[h%ws.length];}

V.lesson=c=>{
  const l=lessons().find(x=>x.id===c.id),lang=LANG();
  let html=`<div class="row"><span class="chip">${l.lvl}</span><span class="chip">${esc(t('ntype').grammar)}</span></div><h1 class="ex-title">${esc(tl(l.t))}</h1>
   <div class="card prose">${tl(l.d)}</div>`;
  if(l.alphabet){
    html+=`<div class="label">${esc(t('tapLetter'))}</div><div class="alpha">`+ABC.map(a=>`<button data-act="speak" data-text="${esc(a[0].split(' ')[0]+'. '+a[2])}" data-lang="ru-RU"><b>${esc(a[0])}</b><span>${esc(a[1])}</span><small>${esc(a[2])} — ${esc(a[3])}</small></button>`).join('')+'</div>';
  }else{
    html+=`<div class="label">${esc(t('formula'))}</div><div class="card formula">`+l.f.map(r=>`<div><code>${esc(r[0])}</code><i>${esc(r[1])}</i></div>`).join('')+'</div>';
    html+=`<div class="label">${esc(t('examples'))}</div><div class="card">`+l.ex.map(e=>`<div class="exm">${speakBtn(e[0],'sm',lang)}<div class="grow"><p>${esc(e[0])}</p><small>${esc(C()==='en'&&S.ui==='ru'?e[2]:e[1])}</small></div></div>`).join('')+'</div>';
  }
  html+=`<button class="btn leaf" data-act="startGrammar" data-id="${l.id}" data-node="${esc(c.node||'')}">${esc(t('exStart'))}</button>`;
  return {html,top:`<button class="icon-btn" data-act="back" aria-label="${esc(t('close'))}">${ico('back')}</button><h1>${esc(t('ntype').grammar)}</h1>`};
};

/* ---------- sessiya ---------- */
function startSession(o){
  stopSprint();
  sess=Object.assign({i:0,ok:0,bad:0,combo:0,maxCombo:0,xp:0,t0:Date.now(),st:{},fb:null,over:false},o);
  const h=new Date().getHours();if(h>=22)S.stats.night=1;if(h<7)S.stats.early=1;
  stack.push({v:'sess'});render(true);
}
const curEx=()=>sess.q[sess.i];
V.sess=()=>{
  const ex=curEx(),pct=sess.i/sess.q.length*100;
  const top=`<div class="sess-top" style="width:100%"><button class="close" data-act="back" aria-label="${esc(t('quit'))}">${ico('x')}</button>
    <div class="bar"><i style="width:${pct}%;${sess.combo>=5?'background:var(--saffron)':''}"></i></div>
    <span class="combo${sess.combo>=2?' hot':''}">${sess.combo>=2?FLAME+'x'+sess.combo:sess.rush?`<span class="num" style="color:var(--muted)">${fmtTime(Date.now()-sess.t0)}</span>`:''}</span></div>`;
  let html='',after=null,canCheck=false;const st=sess.st,done=!!sess.fb;
  const title=s=>`<h1 class="ex-title">${esc(s)}</h1>`;
  if(ex.k==='intro'){
    const w=ex.w;
    html=`<span class="tag">${ico('spark')} ${esc(t('tIntro'))}</span>
      <div class="intro">${pic(w)?`<div class="pic-big">${pic(w)}</div>`:mascot(84,'wow','bob')}<div class="word">${esc(tgt(w))}</div>${speakBtn(tgt(w))}<div class="tr">${esc(nat(w))}</div></div>`;
    after=()=>{if(!st.spoken&&hasTTS()){st.spoken=1;speak(tgt(w));}};
  }else if(['choice','gram','pic','tfng','lq'].includes(ex.k)){
    if(ex.k==='gram'){html=title(ex.prompt.includes('___')?t('tGap'):t('tPick'))+`<div class="say">${esc(ex.prompt).replace('___','<b style="color:var(--cobalt)">_____</b>')}</div>`;}
    else if(ex.k==='pic'){if(ex.dir==='p2w')html=title(t('tPicW'))+`<div class="pic-big">${pic(ex.w)}</div>`;
      else{html=title(t('tWPic'))+`<div class="prompt"><div class="word grow">${esc(tgt(ex.w))}</div>${speakBtn(tgt(ex.w))}</div>`;after=()=>{if(!st.spoken&&hasTTS()){st.spoken=1;speak(tgt(ex.w));}};}}
    else if(ex.k==='tfng'){html=`<div class="card passage"><h3>${esc(ex.ptitle)}</h3>${esc(ex.passage)}</div>`+title(t('tTfng'))+`<div class="say">${esc(ex.prompt)}</div>`;}
    else if(ex.k==='lq'){const lg=C()==='en'?'en-GB':'ru-RU';html=title(t('tLq'))+`<div class="listen-big">${speakBtn(ex.text,'',lg)}<button class="speak slow" data-act="speak" data-text="${esc(ex.text)}" data-lang="${lg}" data-rate=".7" aria-label="${esc(t('slow'))}">${ico('slow')}</button></div><div class="say">${esc(ex.prompt)}</div>`;
      if(ex.first)after=()=>{if(!st.spoken){st.spoken=1;speak(ex.text,lg,.92);}};}
    else if(ex.dir==='listen'){html=title(t('tListen'))+`<div class="listen-big">${speakBtn(tgt(ex.w))}<button class="speak slow" data-act="speak" data-text="${esc(tgt(ex.w))}" data-rate=".55" aria-label="${esc(t('slow'))}">${ico('slow')}</button></div>`;
      after=()=>{if(!st.spoken){st.spoken=1;speak(tgt(ex.w));}};}
    else{const w=ex.w,p=ex.dir==='t2n'?tgt(w):nat(w);
      html=title(ex.dir==='t2n'?t('tT2N'):t('tN2T')(C()))+`<div class="prompt"><div class="word grow">${esc(p)}</div>${ex.dir==='t2n'?speakBtn(tgt(w)):''}</div>`;
      if(ex.dir==='t2n')after=()=>{if(!st.spoken&&hasTTS()){st.spoken=1;speak(tgt(w));}};}
    const picOpt=ex.k==='pic'&&ex.dir==='w2p',short=!picOpt&&ex.k!=='tfng'&&ex.k!=='lq'&&ex.opts.every(o=>o.length<=12);
    html+=`<div class="opts${picOpt?' pics':short?' grid':''}">`+ex.opts.map((o,i)=>{let cls='';
      if(done){if(i===ex.ans)cls=' right';else if(i===st.pick)cls=' wrong';}
      return `<button class="opt${cls}" data-act="pick" data-i="${i}"${done?' disabled':''}><kbd>${i+1}</kbd><span>${esc(o)}</span></button>`;}).join('')+'</div>';
  }else if(ex.k==='match'){
    if(!st.L){st.L=shuffle(ex.ws.map((w,i)=>i));st.R=shuffle(ex.ws.map((w,i)=>i));st.got=[];}
    const cell=(side,i)=>{const w=ex.ws[i],g=st.got.includes(i),sel=st.sel&&st.sel.side===side&&st.sel.i===i,bad=st.bad&&st.bad[side]===i;
      return `<button class="opt${g?' gone':''}${sel?' sel':''}${bad?' wrong shake':''}" data-act="mpick" data-side="${side}" data-i="${i}"${g?' disabled':''}>${esc(side==='L'?tgt(w):nat(w))}</button>`;};
    html=title(t('tMatch'))+`<div class="match"><div class="col">${st.L.map(i=>cell('L',i)).join('')}</div><div class="col">${st.R.map(i=>cell('R',i)).join('')}</div></div>`;
  }else if(ex.k==='spell'||ex.k==='build'){
    st.p=st.p||[];
    const res=done?(sess.fb.ok?' right':' wrong'):'';
    if(ex.k==='spell'){
      if(ex.listen){html=title(t('tDict'))+`<div class="listen-big">${speakBtn(tgt(ex.w))}<button class="speak slow" data-act="speak" data-text="${esc(tgt(ex.w))}" data-rate=".55" aria-label="${esc(t('slow'))}">${ico('slow')}</button></div>`;
        after=()=>{if(!st.spoken){st.spoken=1;speak(tgt(ex.w));}};}
      else html=title(t('tSpell'))+`<div class="prompt">${pic(ex.w)?`<span class="pic-mid">${pic(ex.w)}</span>`:''}<div class="word grow">${esc(nat(ex.w))}</div></div>`;
    }else{
      html=(ex.task?`<div class="card task"><div class="label">${esc(t('task'))}</div>${esc(ex.task)}</div>`:'')+(ex.role?`<span class="tag" style="color:var(--turq)">${esc(ex.role)}</span>`:'')+title(t('tBuild'))+`<div class="row" style="align-items:flex-end">${mascot(78,'idle')}<div class="say grow">${esc(ex.s.n)}</div></div>`;
    }
    const L=ex.mode==='letters';
    html+=`<div class="answer-line${L?' letters':''}${res}">`+st.p.map((ti,j)=>`<button class="tile${L?' letter':''}" data-act="untile" data-j="${j}"${done?' disabled':''}>${esc(ex.tiles[ti])}</button>`).join('')
      +(L?Array(Math.max(0,ex.ans.length-st.p.length)).fill('<span class="slot"></span>').join(''):'')+'</div>';
    html+=`<div class="tiles">`+ex.tiles.map((x,i)=>`<button class="tile${L?' letter':''}${st.p.includes(i)?' used':''}" data-act="tile" data-i="${i}"${done||st.p.includes(i)?' disabled':''}>${esc(x)}</button>`).join('')+'</div>';
    canCheck=st.p.length>0;
  }
  // pastki panel
  let fb='';
  if(sess.fb){
    const f=sess.fb;
    fb=`<div class="fb ${f.ok?'ok':'no'}" role="status"><div class="fb-in"><div class="fb-head"><span class="fb-m">${mascot(54,f.ok?'happy':'sad')}</span><div class="grow"><b>${esc(f.title)}</b>${f.right?`<div class="ans">${esc(t('rightIs'))} <strong>${esc(f.right)}</strong></div>`:''}${f.extra?`<div class="ans">${esc(f.extra)}</div>`:''}</div>${f.say?speakBtn(f.say,'sm'):''}</div>
      <button class="btn ${f.ok?'leaf':'pom'}" data-act="next" id="nextBtn">${esc(t('cont'))}</button></div></div>`;
  }else if(ex.k==='intro'){
    fb=`<div class="fb"><div class="fb-in"><button class="btn" data-act="next" id="nextBtn">${esc(t('got'))}</button></div></div>`;
  }else if(ex.k==='spell'||ex.k==='build'){
    fb=`<div class="fb"><div class="fb-in"><button class="btn leaf" data-act="checkTiles"${canCheck?'':' disabled'}>${esc(t('check'))}</button></div></div>`;
  }
  return {html:html+fb,top,hideNav:true,sess:true,after:()=>{if(after)after();const nb=document.getElementById('nextBtn');if(nb&&sess.fb)nb.focus({preventScroll:true});}};
};

function wordResult(w,ok){
  if(!w||!w[0]||String(w[0]).startsWith('abc-'))return;
  const r=rec(w),d=day();
  if(ok){
    if(!r||r.b===0){grade(w,true);d.newW++;}
    else if(isDue(w)){grade(w,true);d.review++;}
    if(sess.kind==='mist')delete S.mist[wkey(w)];
  }else{
    if(sess.kind==='srs')grade(w,false);
    else if(r&&r.b>0){r.b=Math.max(1,r.b-1);r.d=Date.now();}
    S.mist[wkey(w)]=Date.now();
  }
}
function judge(ok,right,opts){
  opts=opts||{};
  const ex=curEx(),d=day(),quiet=sess.kind==='place';
  if(quiet){sess.lv[ex.li]=(sess.lv[ex.li]||0)+(ok?1:0);opts.silent=true;}
  if(ok){
    sess.ok++;sess.combo++;sess.maxCombo=Math.max(sess.maxCombo,sess.combo);sess.xp+=2;if(!quiet)floatXp('+2 XP');
    d.combo=Math.max(d.combo,sess.combo);S.stats.maxCombo=Math.max(S.stats.maxCombo,sess.combo);
    if(!quiet){if(sess.combo%5===0){sess.xp+=3;sfx('combo');}else sfx('ok');buzz('ok');}
  }else{
    sess.bad++;sess.combo=0;if(!quiet){sfx('no');buzz('no');}if(sess.kind==='legend')sess.legendFail=true;
    if(!ex.again&&!sess.rush&&!sess.noRe){const r=remake(ex);if(r){r.again=true;sess.q.push(r);}}
  }
  if(ex.w&&ex.k!=='match'&&!quiet)wordResult(ex.w,ok);
  save();
  if(opts.silent){nextEx();return;}
  const say=ex.w&&ex.k!=='match'?tgt(ex.w):ex.k==='build'?ex.s.t:null;
  sess.fb={ok,right:ok?null:right,title:ok?(sess.combo>=5&&sess.combo%5===0?t('comboT')(sess.combo):pick(t('praise'))):t('wrongT'),
    extra:ex.k==='gram'&&ex.prompt.includes('___')?ex.prompt.replace('___',ex.opts[ex.ans]):null,say:hasTTS()?say:null};
  render(false);
}
function nextEx(){
  if(sess.legendFail)return finish();
  if(sess.kind==='place'){const ex=curEx(),nx=sess.q[sess.i+1];
    if(!nx||nx.li!==ex.li){if((sess.lv[ex.li]||0)<2)return placeDone(ex.li);if(!nx)return placeDone(Math.min(LEVELS.length-1,ex.li+1));}}
  sess.i++;sess.st={};sess.fb=null;
  if(sess.i>=sess.q.length)return finish();
  render(true);
}
function placeDone(li){S.unlock[C()]=li;S.onboarded=true;sess=null;addXp(10);save();tab='path';stack=[{v:'path'}];render(true);openModal({type:'place',li});sfx('win');confetti();}
function finish(){
  sess.over=true;
  const total=sess.ok+sess.bad,acc=total?sess.ok/total:1,perfect=sess.bad===0&&total>0,ms=Date.now()-sess.t0,d=day();
  let gain=sess.xp+10+(perfect?10:0),starsN=perfect?3:acc>=.8?2:1,record=false;
  let exam=null;
  if(sess.kind==='exam'){const id=LEVELS[sess.li].id;exam={pass:acc>=.8,id};
    if(exam.pass){const k=C()+':'+sess.node;S.done[k]=Math.max(S.done[k]||0,starsN);d.nodes++;if(!S.certs[C()+':'+id]){S.certs[C()+':'+id]=dkey();pending.push({type:'cert',id,fresh:true});}}
    else gain=Math.round(gain/2);}
  else if(sess.node){const k=C()+':'+sess.node;S.done[k]=Math.max(S.done[k]||0,starsN);d.nodes++;S.stats.both[C()]=1;}
  if(sess.kind==='hall'){const k=C()+':'+sess.hallKey;S.hall[k]=Math.max(S.hall[k]||0,Math.round(acc*100));}
  if(perfect){d.perfect++;S.stats.perfect++;S.gems+=5;}
  if(sess.rush){const prev=S.best.match;if(!prev||ms<prev){S.best.match=ms;record=!!prev;}}
  S.stats.sessions++;
  addXp(gain);checkAch();save();
  let legend=null;if(sess.kind==='legend'){legend=sess.legendFail?'fail':'win';if(legend==='win'&&!S.legend[sess.legendKey]){S.legend[sess.legendKey]=dkey();S.gems+=30;checkAch();}}
  const fail=(!!exam&&!exam.pass)||legend==='fail';
  stack[stack.length-1]={v:'result',r:{gain,acc,ms,starsN,perfect,node:!!sess.node&&!fail,record,rush:sess.rush,exam,fail,legend,transcript:sess.transcript,model:sess.model,task:sess.task}};
  render(true);if(fail){sfx('no');}else{sfx('win');confetti();}
}
V.result=c=>{
  const r=c.r;
  const html=`<div class="result">${mascot(130,r.fail?'sad':'happy',r.fail?'bob':'cheer')}
   <div class="${r.fail?'h2':'big'}">${esc(r.fail?(r.legend?t('legendFail'):t('examFail')):r.legend==='win'?t('legendWin'):r.exam?t('examPass'):r.rush&&r.record?t('newRecord'):r.perfect?t('resPerfect'):t('resDone'))}</div>
   ${r.node?`<div class="big-stars">${[1,2,3].map(i=>STAR(i<=r.starsN)).join('')}</div>`:''}
   <div class="res-stats">
    <div class="res-stat" style="--c:var(--saffron)"><div class="k">${esc(t('resXp'))}</div><div class="v">${FLAME}${r.gain}</div></div>
    <div class="res-stat" style="--c:var(--leaf)"><div class="k">${esc(t('resAcc'))}</div><div class="v">${Math.round(r.acc*100)}%</div></div>
    <div class="res-stat" style="--c:var(--cobalt)"><div class="k">${esc(t('resTime'))}</div><div class="v">${fmtTime(r.ms)}</div></div></div>
   ${r.transcript?`<details class="card" style="width:100%;text-align:left"><summary class="label" style="cursor:pointer">${esc(t('transcript'))}</summary><p class="prose" style="margin:8px 0 0">${esc(r.transcript)}</p></details>`:''}
   ${r.model?`<div class="card" style="width:100%;text-align:left;display:grid;gap:8px"><div class="row between"><div class="label">${esc(t('model'))}</div>${speakBtn(r.model,'sm')}</div><p class="muted" style="margin:0;font-weight:600">${esc(r.task)}</p><p class="prose" style="margin:0">${esc(r.model)}</p></div>`:''}
  </div><button class="btn" data-act="home" id="nextBtn">${esc(t('cont'))}</button>`;
  return {html,top:'',hideNav:true,after:()=>{const s=document.querySelectorAll('.big-stars svg');s.forEach((el,i)=>{if(i<r.starsN)el.classList.add('on')});}};
};

/* ---------- mashq maydoni ---------- */
V.arena=()=>{
  const due=dueWords().length,mist=mistWords().length;
  const g=(id,col,icn,name,sub,extra,dis)=>`<button class="game" style="--c:var(--${col});--cd:var(--${col}-d)" data-act="game" data-g="${id}"${dis?' disabled':''}><span class="gi">${ico(icn)}</span><span><b>${esc(name)}</b><small>${esc(sub)}</small></span>${extra?`<span class="rec">${extra}</span>`:''}</button>`;
  let html=`<div><h1 class="ex-title">${esc(t('arena'))}</h1><p class="muted" style="margin:6px 0 0">${esc(t('arenaSub'))}</p></div><div class="arena">`;
  html+=`<button class="game wide" style="--c:var(--pom);--cd:var(--pom-d)" data-act="hall"><span class="gi">${ico('trophy')}</span><span><b>${esc(C()==='en'?t('hallEn'):t('hallRu'))}</b><small>${esc(t('hallSub'))}</small></span></button>`;
  html+=g('srs','cobalt','repeat',t('gSrs')[0],t('gSrs')[1],esc(t('dueN')(due)));
  html+=g('mist','pom','target',t('gMist')[0],t('gMist')[1],esc(t('dueN')(mist)));
  html+=g('build','leaf','puzzle',t('gBuild')[0],t('gBuild')[1],'');
  if(hasTTS())html+=g('dict','cobalt','ear',t('gDict')[0],t('gDict')[1],'');
  html+='</div>';
  return {html};
};

/* ---------- sprint ---------- */
function stopSprint(){stopGame();if(sprintTimer){clearInterval(sprintTimer);sprintTimer=null;}if(sprint)sprint.on=false;if(cueTimer){clearInterval(cueTimer);cueTimer=null;}}
function sprintCard(){
  const pool=practicePool(),w=pick(pool),truth=Math.random()<.5;
  let shown=nat(w);if(!truth){const o=pick(pool.filter(x=>norm(nat(x))!==norm(nat(w))));shown=nat(o);}
  sprint.card={w,shown,truth};
}
V.sprint=()=>{
  const s=sprint;
  if(!s.on&&!s.over){
    return {html:`<div class="result">${mascot(120,'wow','bob')}<h1 class="ex-title">${esc(t('gSprint')[0])}</h1><p class="muted" style="margin:0;max-width:40ch">${esc(t('sprintIntro'))}</p>
      ${S.best.sprint?`<span class="chip">${esc(t('record'))}: ${S.best.sprint}</span>`:''}</div><button class="btn saffron" data-act="sprintGo">${esc(t('start'))}</button>`,
      top:`<button class="icon-btn" data-act="back" aria-label="${esc(t('close'))}">${ico('back')}</button><h1>${esc(t('gSprint')[0])}</h1>`,hideNav:true};
  }
  if(s.over){
    return {html:`<div class="result">${mascot(130,'happy','cheer')}<div class="big">${esc(s.record?t('newRecord'):t('timeUp'))}</div>
      <div class="res-stats"><div class="res-stat" style="--c:var(--saffron)"><div class="k">${esc(t('points'))}</div><div class="v">${s.score}</div></div>
      <div class="res-stat" style="--c:var(--leaf)"><div class="k">${esc(t('correct'))}</div><div class="v">${s.right}/${s.right+s.wrong}</div></div>
      <div class="res-stat" style="--c:var(--cobalt)"><div class="k">${esc(t('record'))}</div><div class="v">${S.best.sprint}</div></div></div></div>
      <div class="two"><button class="btn ghost" data-act="game" data-g="sprint">${esc(t('again'))}</button><button class="btn" data-act="home">${esc(t('cont'))}</button></div>`,top:'',hideNav:true};
  }
  const c=s.card,left=Math.max(0,s.end-Date.now());
  return {html:`<div class="row"><div class="timer"><i id="tbar" style="width:${left/600}%"></i></div><span class="num" id="tnum">${Math.ceil(left/1000)}</span></div>
    <div class="row between"><span class="mult">x${s.mult}</span><span class="num" style="font-size:22px">${s.score}</span></div>
    <div class="sprint-card${s.flash?' flash-'+s.flash:''}">${pic(c.w)?`<div class="pic-mid">${pic(c.w)}</div>`:''}<div class="word">${esc(tgt(c.w))}</div><div class="eq">=</div><div class="tr">${esc(c.shown)}</div></div>
    <div class="yn"><button class="btn pom" data-act="sprintAns" data-v="0">${ico('x')} ${esc(t('no'))}</button><button class="btn leaf" data-act="sprintAns" data-v="1">${ico('check')} ${esc(t('yes'))}</button></div>`,
    top:`<button class="icon-btn" data-act="back" aria-label="${esc(t('close'))}">${ico('x')}</button><h1>${esc(t('gSprint')[0])}</h1>`,hideNav:true};
};
function sprintEnd(){
  stopSprint();const s=sprint;s.over=true;
  s.record=s.score>S.best.sprint&&s.score>0;if(s.record)S.best.sprint=s.score;
  const d=day();d.sprint=Math.max(d.sprint,s.score);
  addXp(Math.min(40,s.right));checkAch();save();
  if(cur().v==='sprint'){render(true);sfx('win');if(s.record)confetti();}
}

/* ---------- lug'at ---------- */
V.words=()=>{
  let html=`<h1 class="ex-title">${esc(t('words'))}</h1><div class="search-wrap">${ico('search')}<input class="search" id="q" type="search" placeholder="${esc(t('search'))}" autocomplete="off" value="${esc(cur().q||'')}"></div><div id="wres">${wordsBody(cur().q||'')}</div>`;
  return {html,after:()=>{const q=document.getElementById('q');q.addEventListener('input',()=>{cur().q=q.value;document.getElementById('wres').innerHTML=wordsBody(q.value);});}};
};
function wordRow(w){const b=box(w);return `<div class="wrow">${pic(w)?`<span class="wpic">${pic(w)}</span>`:''}<div class="grow"><div class="w">${esc(tgt(w))}</div><div class="tr">${esc(nat(w))}</div></div><div class="str" aria-label="${b}/5">${[1,2,3,4,5].map(i=>`<i class="${i<=b?'on':''}"></i>`).join('')}</div>${speakBtn(tgt(w),'sm')}</div>`;}
function wordsBody(q){
  q=norm(q);
  if(q){const hits=allWords().filter(w=>norm(tgt(w)).includes(q)||norm(nat(w)).includes(q)).slice(0,60);
    return hits.length?`<div class="card wlist">${hits.map(wordRow).join('')}</div>`:`<p class="muted" style="text-align:center">${esc(t('notFound'))}</p>`;}
  return '<div class="topics">'+courseTopics().map((tp,i)=>{const n=tp.w.filter(w=>box(w)>0).length,col=UC[i%5],name=tl(tp.t);
    return `<button class="topic" style="--c:var(--${col})" data-act="topic" data-id="${tp.id}"><span class="row between"><span class="gl">${esc(name[0])}</span><span class="chip">${tp.lvl}</span></span>
      <span class="t">${esc(name)}</span><span style="display:grid;gap:5px"><span class="bar"><i style="width:${n/tp.w.length*100}%"></i></span><span class="num muted" style="font-size:12px">${n}/${tp.w.length}</span></span></button>`;}).join('')+'</div>';
}
V.topic=c=>{
  const tp=TOPICS.find(x=>x.id===c.id);
  return {html:`<h1 class="ex-title">${esc(tl(tp.t))}</h1><button class="btn turq" data-act="trainTopic" data-id="${tp.id}">${ico('dumb')} ${esc(t('train'))}</button><div class="card wlist">${tp.w.map(wordRow).join('')}</div>`,
    top:`<button class="icon-btn" data-act="back" aria-label="${esc(t('close'))}">${ico('back')}</button><h1>${esc(t('words'))}</h1>`};
};

/* ---------- profil ---------- */
V.profile=c=>{
  const lv=level(),tx=totalXp();
  let html=`<section class="prof">${mascot(110,'happy','bob')}<div style="display:grid;gap:8px;min-width:0"><div class="h2">${esc(t('level')(lv.n))}</div>
    <div class="bar lvl-bar"><i style="width:${lv.cur/lv.need*100}%"></i></div><span class="muted" style="font-size:13px">${esc(t('toNext')(lv.cur,lv.need))}</span></div></section>`;
  const cv=courseValue(),SL=LEVELS[Math.min(LEVELS.length-1,Math.floor(cv))];
  html+=`<section class="card gauge" style="display:grid;gap:6px"><h2 class="h2">${esc(t('gaugeT'))}</h2>${TM3.gaugeSvg(cv,LEVELS.map(L=>L.id),SL.id,'≈ '+equiv(SL))}<p class="muted" style="font-size:12.5px;margin:0;text-align:center">${esc(t('gaugeNote'))}</p></section>`;
  html+=`<section class="card" style="display:grid;gap:12px"><div class="row between"><h2 class="h2">${esc(t('certsT'))}</h2><span class="num muted">${LEVELS.filter(L=>S.certs[C()+':'+L.id]).length}/${LEVELS.length}</span></div><div class="certs">`
    +LEVELS.map(L=>{const d=S.certs[C()+':'+L.id];return `<button class="cert-mini${d?'':' off'}" data-act="certOpen" data-id="${L.id}">${d?badgeSvg('saffron',L.id,46):`<b>${L.id}</b>`}<small>${esc(d||equiv(L))}</small></button>`;}).join('')+'</div></section>';
  html+=`<div class="stats">
    <div class="card stat">${FLAME.replace('class="i"','class="i" style="color:var(--saffron)"')}<div><b>${tx}</b><span>${esc(t('stTotal'))}</span></div></div>
    <div class="card stat">${FLAME.replace('class="i"','class="i" style="color:var(--pom)"')}<div><b>${S.streak.best}</b><span>${esc(t('stBest'))}</span></div></div>
    <div class="card stat"><svg class="i" viewBox="0 0 24 24" style="color:var(--turq)">${IC.cards}</svg><div><b>${metCount()}</b><span>${esc(t('stMet'))}</span></div></div>
    <div class="card stat"><svg class="i" viewBox="0 0 24 24" style="color:var(--leaf)">${IC.trophy}</svg><div><b>${masterCount()}</b><span>${esc(t('stMaster'))}</span></div></div></div>`;
  // 7 kun
  const days=[];for(let i=6;i>=0;i--){const d=new Date();d.setDate(d.getDate()-i);days.push({d,x:S.xp[dkey(d)]||0});}
  const max=Math.max(S.goal,...days.map(d=>d.x)),H=110,y0=16,W=320,bw=30,gap=(W-40-bw*7)/6,gy=y0+H-(S.goal/max)*H;
  html+=`<section class="card chart"><div class="label" style="margin-bottom:10px">${esc(t('last7'))}</div><svg viewBox="0 0 ${W} ${y0+H+24}" role="img" aria-label="${esc(t('last7'))}">
    <line x1="20" x2="${W-20}" y1="${y0+H}" y2="${y0+H}" stroke="var(--line)" stroke-width="2"/>
    <line x1="20" x2="${W-20}" y1="${gy}" y2="${gy}" stroke="var(--saffron)" stroke-dasharray="5 5" stroke-width="1.5"/>
    <text x="${W-20}" y="${gy-5}" text-anchor="end" font-size="10" fill="var(--saffron-d)" font-family="JetBrains Mono, monospace">${S.goal} XP</text>`
    +days.map((d,i)=>{const h=d.x?Math.max(4,(d.x/max)*H):0,x=20+i*(bw+gap);
      return (h?`<rect x="${x}" y="${y0+H-h}" width="${bw}" height="${h}" rx="7" fill="${d.x>=S.goal?'var(--saffron)':'var(--cobalt)'}"/>`:'')
        +(d.x?`<text x="${x+bw/2}" y="${y0+H-h-5}" text-anchor="middle" font-size="10" fill="var(--muted)" font-family="JetBrains Mono, monospace">${d.x}</text>`:'')
        +`<text x="${x+bw/2}" y="${y0+H+16}" text-anchor="middle" font-size="11" fill="var(--muted)">${esc(t('short')[d.d.getDay()])}</text>`;}).join('')+'</svg></section>';
  // yutuqlar
  html+=`<section class="card" style="display:grid;gap:14px"><div class="row between"><h2 class="h2">${esc(t('achT'))}</h2><span class="num muted">${Object.keys(S.ach).length}/${ACH.length}</span></div><div class="badges">`
    +ACH.map(a=>`<button class="badge${S.ach[a.id]?'':' off'}" data-act="achInfo" data-id="${a.id}">${badgeSvg(a.c,a.g)}<b>${esc(tl(a.t))}</b></button>`).join('')+'</div></section>';
  // do'kon
  html+=`<section class="card shop"><div class="row between"><h2 class="h2">${esc(t('shop'))}</h2><span class="pill gem" style="cursor:default">${GEM}<span>${S.gems}</span></span></div>
    <div class="shop-item"><span class="quest-ico" style="background:var(--turq);width:56px;height:56px">${ico('snow')}</span><div><b>${esc(t('freezeItem'))} <span class="num muted">${S.freeze}/2</span></b><div class="muted" style="font-size:13px">${esc(t('freezeSub'))}</div></div>
      <button class="btn sm" data-act="buyFreeze">${GEM}50</button></div>
    <div class="label" style="margin-top:6px">${esc(t('skinsT'))}</div><div class="skins">`
    +SKINS.map(s=>{const own=S.skins.includes(s.id),on=S.skin===s.id;
      return `<button class="skin" data-act="skin" data-id="${s.id}" aria-pressed="${on}">${mascot(64,'idle','',s.id)}<span>${esc(tl(s.t))}</span><small>${on?esc(t('worn')):own?esc(t('wear')):GEM+s.price}</small></button>`;}).join('')+'</div></section>';
  // sozlamalar
  const goals=[30,50,100,150];
  html+=`<section class="card" style="display:grid;gap:16px"><h2 class="h2">${esc(t('settings'))}</h2>
    <div style="display:grid;gap:8px"><div class="label">${esc(t('uiLang'))}</div><div class="seg"><button data-act="ui" data-l="uz" aria-pressed="${S.ui==='uz'}">O'zbekcha</button><button data-act="ui" data-l="ru" aria-pressed="${S.ui==='ru'}">Русский</button></div></div>`
    +(S.ui==='uz'?`<div style="display:grid;gap:8px"><div class="label">${esc(t('course'))}</div><div class="seg"><button data-act="course" data-c="en" aria-pressed="${S.course==='en'}">${esc(t('courseEn'))}</button><button data-act="course" data-c="ru" aria-pressed="${S.course==='ru'}">${esc(t('courseRu'))}</button></div></div>`:'')
    +`<div style="display:grid;gap:8px"><div class="label">${esc(t('goal'))}</div><div class="seg">${goals.map((g,i)=>`<button data-act="goal" data-g="${g}" aria-pressed="${S.goal===g}"><span class="num">${g}</span><small>${esc(t('goalN')[i])}</small></button>`).join('')}</div></div>
    <div style="display:grid;gap:8px"><div class="label">${esc(t('themeT'))}</div><div class="seg">${['auto','light','dark'].map((m,i)=>`<button data-act="theme" data-v="${m}" aria-pressed="${(S.theme||'auto')===m}">${esc(t('themeN')[i])}</button>`).join('')}</div></div>
    <div class="set-row"><b>${esc(t('sound'))}</b><button class="switch" role="switch" aria-checked="${S.sound}" data-act="sound" aria-label="${esc(t('sound'))}"></button></div>`
    +(PL.LocalNotifications?`<div class="set-row"><div><b>${esc(t('remind'))}</b>${S.remind?`<div class="muted" style="font-size:13px">${esc(t('remindOn')(S.remind))}</div>`:''}</div>
      <div class="row" style="gap:8px">${S.remind?`<select class="sel" id="rtime" aria-label="${esc(t('remind'))}">${['07:30','09:00','12:30','18:00','20:00','21:30'].map(x=>`<option${x===S.remind?' selected':''}>${x}</option>`).join('')}</select>`:''}
      <button class="switch" role="switch" aria-checked="${!!S.remind}" data-act="remind" aria-label="${esc(t('remind'))}"></button></div></div>`:'')
    +`<button class="btn ghost" data-act="obPlace">${ico('target')} ${esc(t('placeAgain'))}</button>`
    +`<p class="muted" style="font-size:13.5px;margin:0">${esc(t('about'))} <span class="num">v5.0.0</span></p>`
    +(c.confirm?`<div class="card" style="border-color:var(--pom);display:grid;gap:12px"><b>${esc(t('resetQ'))}</b><div class="two"><button class="btn ghost" data-act="resetNo">${esc(t('cancel'))}</button><button class="btn pom" data-act="resetYes">${esc(t('yesReset'))}</button></div></div>`
      :`<button class="btn ghost" data-act="resetAsk" style="color:var(--pom)">${esc(t('reset'))}</button>`)+'</section>';
  return {html,after:()=>{const r=document.getElementById('rtime');if(r)r.addEventListener('change',()=>{S.remind=r.value;save();setReminder(S.remind).then(()=>render(false));});}};
};

/* =========================================================== O'YINLAR (v4) */
let G=null;
function stopGame(){if(G){G.dead=true;if(G.raf)cancelAnimationFrame(G.raf);if(G.timer)clearInterval(G.timer);if(G.to)clearTimeout(G.to);}G=null;}
const DIFF=()=>S.diff===undefined?1:S.diff;
const XPM=()=>[1,1.5,2][DIFF()];
const HEART='<svg viewBox="0 0 24 24" class="i" aria-hidden="true"><path d="M12 21s-8-5.2-8-11a4.5 4.5 0 018-2.8A4.5 4.5 0 0120 10c0 5.8-8 11-8 11z" fill="currentColor" stroke="none"/></svg>';
const CROWN='<svg viewBox="0 0 24 24" class="crown-i" aria-hidden="true"><path d="M3 8l4.5 4L12 5l4.5 7L21 8l-2 11H5z" fill="var(--saffron)" stroke="var(--saffron-d)" stroke-width="1.3" stroke-linejoin="round"/></svg>';
const hearts=(n,max)=>Array.from({length:max},(_,i)=>`<span class="heart${i<n?'':' off'}">${HEART}</span>`).join('');
const closeTop=title=>`<button class="icon-btn" data-act="back" aria-label="${esc(t('close'))}">${ico('x')}</button><h1>${esc(title)}</h1>`;
const norm1=c=>c.toLowerCase().replace('ё','е');
const isLetter=ch=>/\p{L}/u.test(ch);
function curLevelIdx(){const cn=currentNode();return cn?cn.li:LEVELS.length-1;}
function gameWords(f){
  const li=curLevelIdx();
  let ws=allWords().filter(w=>(WLV[w[0]]===undefined?0:WLV[w[0]])<=li&&(!f||f(w)));
  if(ws.length<12)ws=allWords().filter(w=>!f||f(w)).slice(0,48);
  return shuffle(ws);
}
function floatXp(txt){const el=document.createElement('div');el.className='floater';el.textContent=txt;document.body.appendChild(el);setTimeout(()=>el.remove(),900);}
function gameResult(title,mood,stats,extra){
  return `<div class="result">${mascot(120,mood,mood==='happy'?'cheer':'bob')}<div class="big">${esc(title)}</div>
    <div class="res-stats">${stats.map(([k,v,c])=>`<div class="res-stat" style="--c:var(--${c})"><div class="k">${esc(k)}</div><div class="v">${v}</div></div>`).join('')}</div>${extra||''}</div>
    <div class="two"><button class="btn ghost" data-act="gAgain">${esc(t('again'))}</button><button class="btn" data-act="back">${esc(t('cont'))}</button></div>`;
}
SFX.hit=()=>{tone(220,0,.08,'square',.08);tone(110,.04,.22,'sawtooth',.07);};
SFX.pop=()=>{tone(1400,0,.05,'triangle',.08);tone(700,.03,.1,'sine',.06);};
SFX.flip=()=>tone(640,0,.05,'sine',.05);

/* ---------- bezaklar ---------- */
const DECO=[
 `<circle cx="40" cy="46" r="26" fill="#D8344E"/><path d="M31 23l3-9 6 6 6-6 3 9z" fill="#AE2740"/><ellipse cx="31" cy="38" rx="7" ry="4" fill="#fff" opacity=".3"/><g fill="#FFB3C1"><circle cx="45" cy="50" r="2.6"/><circle cx="51" cy="43" r="2.6"/><circle cx="38" cy="57" r="2.6"/></g>`,
 `<path d="M62 46q12-6 14-18" stroke="#2350D8" stroke-width="6" fill="none" stroke-linecap="round"/><path d="M18 40q-12 2-10 14q2 8 12 6" stroke="#2350D8" stroke-width="5" fill="none"/><ellipse cx="40" cy="50" rx="24" ry="18" fill="#2350D8"/><rect x="30" y="28" width="20" height="6" rx="3" fill="#163AA8"/><circle cx="40" cy="25" r="4" fill="#163AA8"/><g fill="#fff"><circle cx="32" cy="50" r="3"/><circle cx="40" cy="45" r="3"/><circle cx="48" cy="50" r="3"/><circle cx="40" cy="56" r="3"/></g>`,
 `<path d="M40 78V48" stroke="#7A5530" stroke-width="3"/><g fill="#fff" stroke="#C9D3E8" stroke-width="1.5"><circle cx="29" cy="35" r="12"/><circle cx="51" cy="35" r="12"/><circle cx="40" cy="22" r="12"/><circle cx="40" cy="40" r="11"/></g><path d="M25 47l15 6 15-6" stroke="#7A5530" stroke-width="3" fill="none" stroke-linecap="round"/>`,
 `<path d="M40 78V40" stroke="#26A464" stroke-width="4"/><path d="M40 66q-18-4-20-20q16 2 20 16zM40 60q18-4 20-20q-16 2-20 16z" fill="#26A464"/><path d="M28 16q0 26 12 28q12-2 12-28l-6 8-6-12-6 12z" fill="#E3405A"/>`,
 `<circle cx="40" cy="40" r="32" fill="#2350D8"/><circle cx="40" cy="40" r="25" fill="#fff"/><polygon points="${starPoly(40,40,17,12)}" fill="#0FA3A0"/><circle cx="40" cy="40" r="6" fill="#F4A51C"/>`,
 `<ellipse cx="40" cy="44" rx="30" ry="22" fill="#F4C542" transform="rotate(-15 40 44)"/><g stroke="#8CB84A" stroke-width="2.5" fill="none" transform="rotate(-15 40 44)"><path d="M14 44q26-14 52 0"/><path d="M16 51q24-7 48 0"/><path d="M18 37q22-13 44 0"/></g><path d="M64 28l7-8" stroke="#7A5530" stroke-width="3" stroke-linecap="round"/>`
].map(s=>`<svg viewBox="0 0 80 80" width="70" height="70" aria-hidden="true">${s}</svg>`);

/* ---------- o'yin kartochkalari rasmlari ---------- */
const GART={
 rain:`<g fill="#fff"><rect x="6" y="8" width="22" height="13" rx="6.5"/><rect x="36" y="22" width="22" height="13" rx="6.5" opacity=".85"/><rect x="14" y="42" width="24" height="13" rx="6.5" opacity=".7"/></g><g stroke="#fff" stroke-width="2.5" stroke-linecap="round" opacity=".55"><path d="M17 1v4M47 13v5M26 33v5"/></g>`,
 mem:`<rect x="6" y="12" width="26" height="36" rx="5" fill="#fff" opacity=".5" transform="rotate(-10 19 30)"/><rect x="30" y="14" width="26" height="36" rx="5" fill="#fff" transform="rotate(8 43 32)"/><text x="43" y="39" text-anchor="middle" font-family="Unbounded, sans-serif" font-weight="700" font-size="16" fill="var(--c)" transform="rotate(8 43 32)">A</text>`,
 ws:`<g fill="#fff" opacity=".4">${[0,1,2,3].flatMap(r=>[0,1,2,3].map(c=>`<rect x="${6+c*14}" y="${6+r*14}" width="11" height="11" rx="3"/>`)).join('')}</g><rect x="2" y="25" width="62" height="17" rx="8.5" fill="none" stroke="#fff" stroke-width="3" transform="rotate(-45 32 32)"/>`,
 bal:`<g stroke="#fff" stroke-width="1.6" opacity=".8"><path d="M18 32L32 58M33 26v32M47 34L32 58"/></g><ellipse cx="18" cy="22" rx="11" ry="13" fill="#fff" opacity=".7"/><ellipse cx="33" cy="15" rx="11" ry="13" fill="#fff"/><ellipse cx="47" cy="24" rx="11" ry="13" fill="#fff" opacity=".85"/>`,
 sprint:`<circle cx="32" cy="36" r="20" fill="none" stroke="#fff" stroke-width="5"/><path d="M32 36V24M26 8h12M48 16l4-4" stroke="#fff" stroke-width="5" stroke-linecap="round"/>`,
 match:`<rect x="6" y="14" width="26" height="26" rx="7" fill="#fff" opacity=".6"/><rect x="30" y="26" width="26" height="26" rx="7" fill="#fff"/><path d="M36 39l5 5 10-10" stroke="var(--c)" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`
};
const gart=k=>`<svg viewBox="0 0 64 64" aria-hidden="true">${GART[k]}</svg>`;

/* ---------- bosslar ---------- */
const BOSS_BG=['#6FC3F0','#FFB65C','#F28A6A','#7FD6CF','#4D5FC4','#0A1240'];
function bossSvg(li,st){
  const ko=st==='ko';
  const eyes=(pts,r,glow)=>pts.map(([x,y])=>ko?`<path d="M${x-r*.7} ${y-r*.7}l${r*1.4} ${r*1.4}M${x+r*.7} ${y-r*.7}l${-r*1.4} ${r*1.4}" stroke="#1A1033" stroke-width="5" stroke-linecap="round"/>`
    :glow?`<circle cx="${x}" cy="${y}" r="${r}" fill="${glow}"/><circle cx="${x}" cy="${y}" r="${r*.45}" fill="#fff"/>`
    :`<circle cx="${x}" cy="${y}" r="${r}" fill="#fff"/><circle cx="${x+2}" cy="${y+2}" r="${r*.5}" fill="#1A1033"/>`).join('');
  let s='<ellipse cx="100" cy="186" rx="62" ry="9" fill="rgba(0,0,0,.25)"/>';
  if(li===0){
    s+=`<path d="M38 176Q26 118 62 86Q100 52 138 86Q174 118 162 176Q100 190 38 176Z" fill="#4CC46A"/><path d="M38 176Q100 190 162 176Q160 168 150 166Q100 178 50 166Q40 168 38 176Z" fill="#2E9A4C"/><ellipse cx="78" cy="92" rx="14" ry="9" fill="#fff" opacity=".35"/><circle cx="152" cy="174" r="7" fill="#4CC46A"/><circle cx="54" cy="182" r="5" fill="#4CC46A"/>`;
    s+=eyes([[80,118],[122,118]],15)+(ko?'':`<path d="M62 96l28 11M138 96l-28 11" stroke="#1A1033" stroke-width="5" stroke-linecap="round"/>`);
    s+=`<path d="M78 150q11 -10 22 0t22 0" stroke="#1A1033" stroke-width="5" fill="none" stroke-linecap="round"/>`;
  }else if(li===1){
    s+=`<ellipse cx="100" cy="166" rx="74" ry="20" fill="#B5752E"/><ellipse cx="100" cy="160" rx="70" ry="18" fill="#E3A857"/><ellipse cx="96" cy="134" rx="54" ry="17" fill="#B5752E"/><ellipse cx="96" cy="129" rx="50" ry="15" fill="#E3A857"/>`;
    s+=`<path d="M70 124Q60 80 96 64" stroke="#E3A857" stroke-width="26" fill="none" stroke-linecap="round"/><ellipse cx="116" cy="58" rx="40" ry="28" fill="#E3A857"/><path d="M152 66l20 4-20 4" stroke="#E3405A" stroke-width="3.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`;
    s+=`<g fill="#B5752E">${[[60,160],[100,164],[140,160],[80,130],[118,130]].map(([x,y])=>`<path d="M${x} ${y-6}l6 6-6 6-6-6z"/>`).join('')}</g>`;
    s+=ko?eyes([[104,50],[132,50]],9):`<ellipse cx="104" cy="50" rx="9" ry="10" fill="#FFE14D"/><ellipse cx="132" cy="50" rx="9" ry="10" fill="#FFE14D"/><rect x="102.5" y="42" width="3" height="16" rx="1.5" fill="#1A1033"/><rect x="130.5" y="42" width="3" height="16" rx="1.5" fill="#1A1033"/>`;
  }else if(li===2){
    s+=`<rect x="22" y="96" width="34" height="62" rx="12" fill="#5F6880"/><rect x="144" y="96" width="34" height="62" rx="12" fill="#5F6880"/><rect x="50" y="84" width="100" height="92" rx="18" fill="#8A93A6"/><rect x="66" y="30" width="68" height="60" rx="16" fill="#9CA4B6"/>`;
    s+=`<path d="M70 120l18 12-8 18M130 104l-14 16 10 14" stroke="#5F6880" stroke-width="4" fill="none" stroke-linecap="round"/><ellipse cx="80" cy="33" rx="12" ry="6" fill="#4CC46A"/>`;
    s+=ko?eyes([[86,60],[114,60]],9):`<rect x="76" y="54" width="20" height="10" rx="3" fill="#FF9F2E"/><rect x="104" y="54" width="20" height="10" rx="3" fill="#FF9F2E"/>`;
    s+=`<rect x="84" y="74" width="32" height="6" rx="3" fill="#5F6880"/>`;
  }else if(li===3){
    s+=`<polygon points="96,120 78,166 98,160 88,196 126,140 104,146 116,120" fill="#FFD43B"/><g fill="#5B5F8C"><circle cx="58" cy="100" r="34"/><circle cx="100" cy="76" r="46"/><circle cx="144" cy="100" r="34"/><rect x="58" y="96" width="86" height="38" rx="18"/></g><rect x="58" y="118" width="86" height="16" rx="8" fill="#3A3D66"/>`;
    s+=eyes([[84,92],[118,92]],13)+(ko?'':`<path d="M68 72l26 12M134 72l-26 12" stroke="#1A1033" stroke-width="5" stroke-linecap="round"/>`);
    s+=`<g stroke="#8FD3F5" stroke-width="3" stroke-linecap="round"><path d="M50 144l-6 14M150 144l-6 14M134 150l-5 12"/></g>`;
  }else if(li===4){
    s+=`<path d="M40 120L4 70l48 22zM160 120l36-50-48 22z" fill="#4BA3D6"/><path d="M60 70L52 24l24 34zM140 70l8-46-24 34z" fill="#FFFFFF"/><path d="M50 120Q46 60 100 56Q154 60 150 120Q148 168 100 176Q52 168 50 120Z" fill="#8FD3F5"/>`;
    s+=`<ellipse cx="100" cy="140" rx="34" ry="26" fill="#C9ECFB"/><circle cx="88" cy="136" r="4" fill="#4BA3D6"/><circle cx="112" cy="136" r="4" fill="#4BA3D6"/><path d="M80 160l6 10 6-10M108 160l6 10 6-10" fill="#FFFFFF"/>`;
    s+=ko?eyes([[80,100],[120,100]],10):`<ellipse cx="80" cy="100" rx="11" ry="9" fill="#1E5FD0"/><ellipse cx="120" cy="100" rx="11" ry="9" fill="#1E5FD0"/><circle cx="83" cy="98" r="3.5" fill="#fff"/><circle cx="123" cy="98" r="3.5" fill="#fff"/><path d="M64 84l28 8M136 84l-28 8" stroke="#1A3A66" stroke-width="5" stroke-linecap="round"/>`;
  }else{
    s+=`<circle cx="36" cy="80" r="10" fill="#E25CF0" opacity=".7"/><circle cx="168" cy="96" r="8" fill="#5CE1F0" opacity=".7"/><path d="M100 40Q150 44 160 120L172 180H28L40 120Q50 44 100 40Z" fill="#3B2A6B"/><path d="M100 60Q134 64 136 112Q132 140 100 142Q68 140 64 112Q66 64 100 60Z" fill="#160E30"/>`;
    s+=`<path d="M70 44l8-22 12 14 10-20 10 20 12-14 8 22z" fill="#F4A51C"/><circle cx="100" cy="22" r="4" fill="#E3405A"/>`+eyes([[86,104],[114,104]],8,'#E25CF0');
    s+=`<path d="M60 150l-14 24M140 150l14 24" stroke="#241A45" stroke-width="10" stroke-linecap="round"/>`;
  }
  return `<svg viewBox="0 0 200 200" class="boss-svg" aria-hidden="true">${s}</svg>`;
}
function nextBoss(){for(let li=0;li<LEVELS.length;li++){if(!S.bosses[C()+':'+li])return levelReached(li)?li:Math.max(0,li-1);}return LEVELS.length-1;}

/* ---------- O'yinlar zali ---------- */
V.games=()=>{
  const nb=nextBoss(),won=LEVELS.filter((L,li)=>S.bosses[C()+':'+li]).length;
  const card=(id,col,name,sub,rec)=>`<button class="gcard" style="--c:var(--${col});--cd:var(--${col}-d)" data-act="gstart" data-g="${id}"><span class="gart">${gart(id)}</span><span class="gtxt"><b>${esc(name)}</b><small>${esc(sub)}</small></span>${rec?`<span class="rec">${rec}</span>`:''}</button>`;
  let html=`<div><h1 class="ex-title">${esc(t('games'))}</h1><p class="muted" style="margin:6px 0 0">${esc(t('gamesSub'))}</p></div>
   <div style="display:grid;gap:8px"><div class="label">${esc(t('diffT'))}</div><div class="seg">${t('diffN').map((n,i)=>`<button data-act="diff" data-v="${i}" aria-pressed="${DIFF()===i}">${esc(n)}<small>x${[1,1.5,2][i]} XP</small></button>`).join('')}</div></div>
   <button class="boss-card" data-act="gstart" data-g="boss" style="--bg:${BOSS_BG[nb]}"><span class="boss-art">${bossSvg(nb,'idle')}</span><span class="grow"><span class="label">${esc(t('gBoss')[0])} · ${LEVELS[nb].id}</span><b>${esc(t('bossNames')[nb])}</b><small>${esc(t('gBoss')[1])}</small></span><span class="rec">${won}/6</span></button>
   <div class="ggrid">`
   +card('rain','cobalt',t('gRain')[0],t('gRain')[1],S.best.rain?`${esc(t('record'))}: ${S.best.rain}`:'')
   +card('mem','turq',t('gMem')[0],t('gMem')[1],'')
   +card('ws','leaf',t('gWs')[0],t('gWs')[1],'')
   +card('bal','pom',t('gBal')[0],t('gBal')[1],'')
   +card('sprint','saffron',t('gSprint')[0],t('gSprint')[1],S.best.sprint?`${esc(t('record'))}: ${S.best.sprint}`:'')
   +card('match','cobalt',t('gMatch')[0],t('gMatch')[1],S.best.match?`${esc(t('record'))}: ${fmtTime(S.best.match)}`:'')
   +'</div>';
  return {html};
};

/* ---------- Boss jangi ---------- */
V.bosses=()=>{
  let html=`<p class="muted" style="margin:0">${esc(t('gBoss')[1])}</p><div class="hall-list">`;
  LEVELS.forEach((L,li)=>{const open=levelReached(li),won=S.bosses[C()+':'+li];
    html+=`<button class="card boss-row${open?'':' locked'}" data-act="bossGo" data-li="${li}"><span class="boss-thumb" style="background:${BOSS_BG[li]}">${bossSvg(li,won?'ko':'idle')}</span>
      <span class="grow"><span class="label">${L.id} · ${esc(tl(L.city))}</span><b>${esc(t('bossNames')[li])}</b><small class="muted">${esc(won?t('defeated'):open?t('reward')(20+li*10):t('lvlLocked'))}</small></span>${won?`<span style="color:var(--leaf)">${ico('check')}</span>`:open?'':ico('lock')}</button>`;});
  return {html:html+'</div>',top:`<button class="icon-btn" data-act="back" aria-label="${esc(t('close'))}">${ico('back')}</button><h1>${esc(t('gBoss')[0])}</h1>`};
};
function bossQ(li){
  const L=LEVELS[li],ws=shuffle(courseTopics().filter(x=>x.lvl===L.id).flatMap(x=>x.w)),ls=lessons().filter(l=>l.lvl===L.id&&!l.alphabet),r=Math.random(),w=ws[0];
  if(ls.length&&r<.35)return mkGram(pick(pick(ls).q));
  if(pic(w)&&r<.55)return mkPic(w,Math.random()<.5?'w2p':'p2w');
  return mkChoice(w,Math.random()<.5?'t2n':'n2t');
}
const bossLimit=()=>Math.max(5,[14,10,7][DIFF()]-G.li*.5)*1000;
function bossStart(li){stopGame();G={type:'boss',li,bmax:8+li*2,pmax:[5,4,3][DIFF()],combo:0,hits:0,over:false};G.bhp=G.bmax;G.php=G.pmax;bossNext();go('boss');G.timer=setInterval(bossTick,100);}
function bossNext(){G.q=bossQ(G.li);G.qEnd=Date.now()+bossLimit();G.lock=false;G.pick=null;G.fx=null;}
function bossTick(){if(!G||G.type!=='boss'||G.over||G.lock)return;const left=G.qEnd-Date.now(),b=document.getElementById('qbar');if(b)b.style.width=Math.max(0,left/bossLimit()*100)+'%';if(left<=0)bossAnswer(-1);}
function bossAnswer(i){
  const g=G;if(!g||g.lock||g.over)return;g.lock=true;g.pick=i;const ok=i===g.q.ans;
  if(ok){g.combo++;const crit=g.combo%3===0,dmg=crit?2:1;g.bhp=Math.max(0,g.bhp-dmg);g.hits++;g.fx={k:'hit',txt:(crit?t('crit')+' ':'')+'−'+dmg};sfx('hit');buzz('ok');}
  else{g.combo=0;g.php--;g.fx={k:'hurt',txt:i<0?t('timeout'):''};sfx('no');buzz('no');}
  render(false);
  g.to=setTimeout(()=>{if(G!==g)return;if(g.bhp<=0)return bossEnd(true);if(g.php<=0)return bossEnd(false);bossNext();render(false);},ok?700:1400);
}
function bossEnd(win){
  const g=G;g.over=true;g.win=win;clearInterval(g.timer);g.timer=null;
  if(win){const first=!S.bosses[C()+':'+g.li];S.bosses[C()+':'+g.li]=dkey();g.gems=first?20+g.li*10:5;S.gems+=g.gems;g.xp=Math.round((30+g.li*10)*XPM());addXp(g.xp);sfx('win');confetti();}
  else{g.xp=Math.round(g.hits*2*XPM());addXp(g.xp);sfx('no');}
  checkAch();save();render(true);
}
function qPrompt(q){
  if(q.k==='gram')return `<div class="say">${esc(q.prompt).replace('___','<b style="color:var(--cobalt)">_____</b>')}</div>`;
  if(q.k==='pic'&&q.dir==='p2w')return `<div class="pic-big" style="font-size:72px">${pic(q.w)}</div>`;
  const p=q.k==='pic'||q.dir==='t2n'?tgt(q.w):nat(q.w);
  return `<div class="prompt"><div class="word grow" style="font-size:28px">${esc(p)}</div>${q.k==='pic'||q.dir==='t2n'?speakBtn(tgt(q.w),'sm'):''}</div>`;
}
V.boss=()=>{
  const g=G;if(!g)return {html:'',top:''};
  const name=t('bossNames')[g.li];
  let html=`<section class="stage${g.fx&&g.fx.k==='hurt'?' hurt':''}"><div class="stage-bg">${TM3.sceneSvg(g.li)}</div>
    <div class="bhp"><div class="row between"><b>${esc(name)}</b><span class="num">${g.bhp}/${g.bmax}</span></div><div class="bar boss"><i style="width:${g.bhp/g.bmax*100}%"></i></div></div>
    <div class="boss-big${g.fx&&g.fx.k==='hit'?' hit':''}${g.over&&g.win?' ko':''}">${bossSvg(g.li,g.over&&g.win?'ko':'idle')}${g.fx&&g.fx.txt?`<span class="dmg${g.fx.k==='hurt'?' bad':''}">${esc(g.fx.txt)}</span>`:''}</div>
    <div class="player"><span class="hearts">${hearts(g.php,g.pmax)}</span>${mascot(56,g.over?(g.win?'happy':'sad'):g.fx&&g.fx.k==='hurt'?'sad':'idle',g.fx&&g.fx.k==='hit'?'cheer':'')}</div></section>`;
  if(g.over){
    html+=gameResult(g.win?t('bossWin'):t('bossLose'),g.win?'happy':'sad',[['XP',g.xp,'saffron'],[t('lives'),`${g.php}/${g.pmax}`,'pom'],[g.win?t('gemsT'):t('points'),g.win?'+'+g.gems:g.hits,'cobalt']]);
  }else{
    const q=g.q,picOpt=q.k==='pic'&&q.dir==='w2p',short=!picOpt&&q.opts.every(o=>o.length<=12);
    html+=`<div class="timer"><i id="qbar" style="width:${Math.max(0,(g.qEnd-Date.now())/bossLimit()*100)}%"></i></div>${qPrompt(q)}
      <div class="opts${picOpt?' pics':short?' grid':''}">${q.opts.map((o,i)=>{let c='';if(g.lock){if(i===q.ans)c=' right';else if(i===g.pick)c=' wrong';}
        return `<button class="opt${c}" data-act="bossPick" data-i="${i}"${g.lock?' disabled':''}><kbd>${i+1}</kbd><span>${esc(o)}</span></button>`;}).join('')}</div>`;
  }
  return {html,top:closeTop(t('gBoss')[0]),hideNav:true};
};

/* ---------- So'z yomg'iri ---------- */
function rainStart(){stopGame();G={type:'rain',score:0,lives:3,combo:0,drops:[],id:0,over:false,speed:[36,50,66][DIFF()]};rainRound();go('rain');G.last=performance.now();G.raf=requestAnimationFrame(rainLoop);}
function rainRound(){
  const g=G,w=gameWords()[0];g.w=w;
  const opts=optsFor(w,tgt,nearPool(w),[3,4,4][DIFF()]),n=opts.length,lanes=shuffle(opts.map((_,i)=>i)),order=shuffle(opts.map((_,i)=>i)),now=performance.now();
  g.queue=opts.map((o,i)=>({txt:o,ok:norm(o)===norm(tgt(w)),lane:lanes[i],n,at:now+order[i]*[950,750,560][DIFF()]}));
  const p=document.getElementById('rainPrompt');if(p)p.innerHTML=rainPromptHtml();
}
function rainPromptHtml(){const w=G.w;return `<span class="label">${esc(t('rainCatch'))}</span><span class="row" style="gap:10px;justify-content:center">${pic(w)&&DIFF()<2?`<span class="pic-mid" style="font-size:34px">${pic(w)}</span>`:''}<b class="h2">${esc(nat(w))}</b></span>`;}
function rainClear(){G.drops.forEach(d=>d.el.remove());G.drops=[];G.queue=[];}
function rainLoop(ts){
  const g=G;if(!g||g.type!=='rain'||g.dead||g.over)return;
  const dt=Math.min(.05,(ts-g.last)/1000);g.last=ts;
  const f=document.getElementById('rainField');
  if(f){
    const H=f.clientHeight;
    g.queue=g.queue.filter(q=>{if(q.at>ts)return true;
      const el=document.createElement('button');el.className='drop';el.dataset.act='rainTap';el.dataset.id=++g.id;el.textContent=q.txt;el.style.left=((q.lane+.5)/q.n*100)+'%';f.appendChild(el);
      g.drops.push({id:g.id,el,y:-48,ok:q.ok});return false;});
    const sp=g.speed+g.score*2.4;
    for(const d of g.drops.slice()){d.y+=sp*dt;d.el.style.transform=`translate(-50%,${d.y}px)`;
      if(d.y>H-44){d.el.remove();g.drops=g.drops.filter(x=>x!==d);if(d.ok){rainMiss();if(!G||G.over)return;}}}
  }
  g.raf=requestAnimationFrame(rainLoop);
}
function rainHud(){const h=document.getElementById('rHearts'),s=document.getElementById('rScore');if(h)h.innerHTML=hearts(G.lives,3);if(s)s.textContent=G.score;}
function rainMiss(){const g=G;g.lives--;g.combo=0;sfx('no');buzz('no');const f=document.getElementById('rainField');if(f){f.classList.remove('flash');void f.offsetWidth;f.classList.add('flash');}
  rainHud();rainClear();if(g.lives<=0)return rainEnd();rainRound();}
function rainTap(id){
  const g=G;if(!g||g.over)return;const d=g.drops.find(x=>x.id===id);if(!d)return;
  if(d.ok){g.combo++;g.score+=g.combo>=5?2:1;sfx(g.combo%5===0?'combo':'ok');buzz('ok');d.el.classList.add('pop');const el=d.el;g.drops=g.drops.filter(x=>x!==d);setTimeout(()=>el.remove(),250);
    if(hasTTS())speak(tgt(g.w));rainHud();rainClear();rainRound();}
  else{d.el.classList.add('bad');const el=d.el;g.drops=g.drops.filter(x=>x!==d);setTimeout(()=>el.remove(),300);g.lives--;g.combo=0;sfx('no');buzz('no');rainHud();if(g.lives<=0)rainEnd();}
}
function rainEnd(){const g=G;g.over=true;cancelAnimationFrame(g.raf);g.record=g.score>(S.best.rain||0)&&g.score>0;if(g.record)S.best.rain=g.score;g.xp=Math.round(g.score*1.5*XPM());addXp(g.xp);checkAch();save();render(true);sfx('win');if(g.record)confetti();}
V.rain=()=>{
  const g=G;if(!g)return {html:'',top:''};
  if(g.over)return {html:gameResult(g.record?t('newRecord'):t('gameOver'),'happy',[[t('points'),g.score,'saffron'],[t('record'),S.best.rain||0,'cobalt'],['XP',g.xp,'leaf']]),top:'',hideNav:true};
  return {html:`<div class="row between hud"><span class="hearts" id="rHearts">${hearts(g.lives,3)}</span><span class="num" style="font-size:26px" id="rScore">${g.score}</span></div>
    <div class="rain-field" id="rainField"></div><div class="rain-prompt" id="rainPrompt">${rainPromptHtml()}</div>`,top:closeTop(t('gRain')[0]),hideNav:true};
};

/* ---------- Xotira ---------- */
function memStart(){stopGame();const d=DIFF(),n=[6,8,10][d],ws=gameWords().slice(0,n),cards=[];
  ws.forEach((w,i)=>{cards.push({p:i,txt:tgt(w),kind:'t'});const usePic=d<2&&pic(w);cards.push({p:i,txt:usePic?pic(w):nat(w),kind:usePic?'pic':'n'});});
  G={type:'mem',cards:shuffle(cards),open:[],done:new Set(),moves:0,t0:Date.now(),n,ws,over:false};go('mem');}
function memTap(i){
  const g=G;if(!g||g.lock||g.over)return;const c=g.cards[i];if(g.done.has(c.p)||g.open.includes(i))return;
  const els=document.querySelectorAll('.mcard');els[i].classList.add('up');sfx('flip');g.open.push(i);
  if(g.open.length<2)return;
  g.moves++;const m=document.getElementById('mMoves');if(m)m.textContent=g.moves;
  const [a,b]=g.open.map(j=>g.cards[j]);
  if(a.p===b.p){g.done.add(a.p);const pair=g.open.slice();g.open=[];setTimeout(()=>pair.forEach(j=>els[j].classList.add('done')),250);sfx('ok');buzz('ok');if(hasTTS())speak(tgt(g.ws[a.p]));if(g.done.size===g.n)g.to=setTimeout(memEnd,700);}
  else{g.lock=true;const pair=g.open.slice();g.open=[];setTimeout(()=>{pair.forEach(j=>els[j].classList.remove('up'));g.lock=false;},900);}
}
function memEnd(){const g=G;g.over=true;g.ms=Date.now()-g.t0;g.stars=g.moves<=g.n+2?3:g.moves<=Math.round(g.n*1.7)?2:1;g.xp=Math.round((10+g.n*2+g.stars*5)*XPM());addXp(g.xp);checkAch();save();render(true);sfx('win');confetti();}
V.mem=()=>{
  const g=G;if(!g)return {html:'',top:''};
  if(g.over)return {html:gameResult(t('gMem')[0]+'!','happy',[[t('moves'),g.moves,'cobalt'],[t('resTime'),fmtTime(g.ms),'turq'],['XP',g.xp,'saffron']],`<div class="big-stars">${[1,2,3].map(i=>STAR(i<=g.stars)).join('')}</div>`),top:'',hideNav:true};
  const cols=g.n===6?3:4;
  return {html:`<div class="row between hud"><span class="chip" style="font-size:13px">${esc(t('moves'))}: <b id="mMoves">${g.moves}</b></span><span class="chip" style="font-size:13px">${g.n} ${esc(t('pairs'))}</span></div>
    <div class="mgrid" style="grid-template-columns:repeat(${cols},1fr)">${g.cards.map((c,i)=>`<button class="mcard${g.done.has(c.p)?' up done':''}" data-act="memTap" data-i="${i}" aria-label="${i+1}"><span class="mc-in"><span class="mc-front"></span><span class="mc-back${c.kind==='pic'?' pic':''}${c.kind==='t'?' t':''}">${esc(c.txt)}</span></span></button>`).join('')}</div>`,
    top:closeTop(t('gMem')[0]),hideNav:true};
};

/* ---------- So'z qidiruv ---------- */
function wsStart(){
  stopGame();const d=DIFF(),size=[7,8,10][d],cnt=[4,5,7][d];
  const dirs=[[1,0],[0,1]].concat(d>=1?[[1,1]]:[]).concat(d>=2?[[-1,0],[0,-1],[1,-1],[-1,-1]]:[]);
  const al=ALPH[C()],grid=Array.from({length:size},()=>Array(size).fill('')),placed=[];
  const cands=gameWords(w=>/^\p{L}+$/u.test(tgt(w))&&tgt(w).length>=3&&tgt(w).length<=size);
  for(const w of cands){
    if(placed.length>=cnt)break;
    const word=norm1(tgt(w)).replace(/ё/g,'е');if(placed.some(p=>p.word===word))continue;
    for(let tries=0;tries<160;tries++){
      const [dx,dy]=pick(dirs),x0=Math.floor(Math.random()*size),y0=Math.floor(Math.random()*size),x1=x0+dx*(word.length-1),y1=y0+dy*(word.length-1);
      if(x1<0||x1>=size||y1<0||y1>=size)continue;
      let fit=true;for(let k=0;k<word.length;k++){const c=grid[y0+dy*k][x0+dx*k];if(c&&c!==word[k]){fit=false;break;}}
      if(!fit)continue;
      for(let k=0;k<word.length;k++)grid[y0+dy*k][x0+dx*k]=word[k];
      placed.push({w,word,found:false});break;
    }
  }
  for(let y=0;y<size;y++)for(let x=0;x<size;x++)if(!grid[y][x])grid[y][x]=al[Math.floor(Math.random()*al.length)];
  G={type:'ws',d,size,grid,words:placed,sel:null,fc:{},t0:Date.now(),over:false};go('ws');
}
function wsClue(p,j){const d=G.d;if(p.found||d===0)return `${tgt(p.w)} · ${nat(p.w)}`;return d===1?`${nat(p.w)} (${p.word[0].toUpperCase()}…)`:nat(p.w);}
function wsTap(i){
  const g=G;if(!g||g.over)return;if(g.dragged){g.dragged=false;return;}
  const cells=document.querySelectorAll('.wcell');
  if(g.sel===null){g.sel=i;cells[i].classList.add('sel');sfx('tap');return;}
  const a=g.sel;cells[a].classList.remove('sel');g.sel=null;if(a!==i)wsCheck(a,i);
}
function wsCheck(a,b){
  const g=G,n=g.size,x0=a%n,y0=Math.floor(a/n),x1=b%n,y1=Math.floor(b/n),dx=Math.sign(x1-x0),dy=Math.sign(y1-y0),len=Math.max(Math.abs(x1-x0),Math.abs(y1-y0))+1;
  if(!(x0===x1||y0===y1||Math.abs(x1-x0)===Math.abs(y1-y0)))return wsBad([a,b]);
  const idx=[];let str='';for(let k=0;k<len;k++){idx.push((y0+dy*k)*n+x0+dx*k);str+=g.grid[y0+dy*k][x0+dx*k];}
  const rev=[...str].reverse().join(''),hit=g.words.findIndex(p=>!p.found&&(p.word===str||p.word===rev));
  if(hit<0)return wsBad(idx);
  const p=g.words[hit];p.found=true;const cells=document.querySelectorAll('.wcell');
  idx.forEach(j=>{g.fc[j]=hit;cells[j].classList.add('f'+hit,'pop');});
  const li=document.getElementById('wsw'+hit);if(li){li.className='ws-w done f'+hit;li.textContent=wsClue(p,hit);}
  sfx('ok');buzz('ok');if(hasTTS())speak(tgt(p.w));
  if(g.words.every(x=>x.found))g.to=setTimeout(wsEnd,700);
}
function wsBad(idx){const cells=document.querySelectorAll('.wcell');idx.forEach(j=>{cells[j].classList.add('bad');setTimeout(()=>cells[j]&&cells[j].classList.remove('bad'),420);});sfx('no');}
function wsEnd(){const g=G;g.over=true;g.ms=Date.now()-g.t0;g.xp=Math.round((10+g.words.length*4)*XPM());addXp(g.xp);checkAch();save();render(true);sfx('win');confetti();}
V.ws=()=>{
  const g=G;if(!g)return {html:'',top:''};
  if(g.over)return {html:gameResult(t('gWs')[0]+'!','happy',[[t('found'),g.words.length,'leaf'],[t('resTime'),fmtTime(g.ms),'turq'],['XP',g.xp,'saffron']]),top:'',hideNav:true};
  return {html:`<div class="ws-grid" id="wsGrid" style="grid-template-columns:repeat(${g.size},1fr);font-size:${g.size>8?15:18}px">${g.grid.flat().map((ch,i)=>`<button class="wcell${g.fc[i]!==undefined?' f'+g.fc[i]:''}${g.sel===i?' sel':''}" data-act="wsTap" data-i="${i}">${esc(ch.toUpperCase())}</button>`).join('')}</div>
    <p class="muted" style="margin:0;font-size:13px;text-align:center">${esc(t('wsHint'))}</p>
    <div class="ws-list">${g.words.map((p,j)=>`<span class="ws-w${p.found?' done f'+j:''}" id="wsw${j}">${esc(wsClue(p,j))}</span>`).join('')}</div>`,
    top:closeTop(t('gWs')[0]),hideNav:true,
    after:()=>{const gr=document.getElementById('wsGrid');if(!gr)return;let from=null;
      gr.addEventListener('pointerdown',e=>{const c=e.target.closest('.wcell');from=c?+c.dataset.i:null;});
      gr.addEventListener('pointerup',e=>{const el=document.elementFromPoint(e.clientX,e.clientY),c=el&&el.closest('.wcell');
        if(c&&from!==null&&+c.dataset.i!==from&&G){if(G.sel!==null){const cs=document.querySelectorAll('.wcell');cs[G.sel].classList.remove('sel');G.sel=null;}G.dragged=true;wsCheck(from,+c.dataset.i);setTimeout(()=>{if(G)G.dragged=false;},350);}from=null;});}};
};

/* ---------- Sharlar ---------- */
function balStart(){stopGame();const m=[7,6,4][DIFF()];G={type:'bal',max:m,bal:m,solved:0,goal:5,over:false};balWord();go('bal');}
function balWord(){const g=G;g.w=gameWords(w=>tgt(w).length<=12)[0];g.guess=new Set();g.wrong=new Set();g.reveal=false;g.lock=false;g.lastPop=null;}
function balSvg(g){
  const cols=['#E3405A','#2350D8','#F4A51C','#0FA3A0','#26A464','#7A4FD0','#FF7A59'],m=g.max;let s='';
  for(let i=0;i<m;i++){const x=150+(i-(m-1)/2)*30,y=44+Math.abs(i-(m-1)/2)*9;
    if(i<g.bal)s+=`<path d="M${x} ${y+22}Q${(x+150)/2+6} ${(y+118)/2} 150 116" stroke="#5A668E" stroke-width="1.3" fill="none"/><ellipse cx="${x}" cy="${y}" rx="15" ry="19" fill="${cols[i%cols.length]}"/><ellipse cx="${x-5}" cy="${y-7}" rx="4" ry="6" fill="#fff" opacity=".45"/><path d="M${x-3} ${y+19}h6l-3 4z" fill="${cols[i%cols.length]}"/>`;
    else if(i===g.lastPop)s+=`<g class="burst"><polygon points="${starPoly(x,y,18,7)}" fill="${cols[i%cols.length]}"/></g>`;}
  return `<svg viewBox="0 0 300 200" class="bal-svg" aria-hidden="true"><defs><linearGradient id="balSky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#9ED8F7"/><stop offset="1" stop-color="#E4F5FF"/></linearGradient></defs>
    <rect width="300" height="200" rx="18" fill="url(#balSky)"/><g fill="#fff" opacity=".85"><ellipse cx="52" cy="40" rx="26" ry="10"/><ellipse cx="250" cy="70" rx="30" ry="11"/></g>
    <path d="M0 184Q75 170 150 182T300 178V200H0z" fill="#2CC7C2" opacity=".55"/>${s}
    <g class="${g.bal<=0?'fall':''}" transform="translate(120,108)">${mascot(60,g.bal<=1?'sad':g.lock&&!g.reveal?'happy':'idle')}</g></svg>`;
}
function balPick(l){
  const g=G;if(!g||g.over||g.lock||g.guess.has(l)||g.wrong.has(l))return;
  const letters=new Set([...tgt(g.w)].filter(isLetter).map(norm1));
  if(letters.has(l)){g.guess.add(l);sfx('ok');buzz();
    if([...letters].every(x=>g.guess.has(x))){g.solved++;g.lock=true;sfx('combo');if(hasTTS())speak(tgt(g.w));render(false);
      g.to=setTimeout(()=>{if(G!==g)return;if(g.solved>=g.goal)return balEnd(true);g.bal=Math.min(g.max,g.bal+1);balWord();render(false);},1200);return;}}
  else{g.wrong.add(l);g.bal--;g.lastPop=g.bal;sfx('pop');buzz('no');
    if(g.bal<=0){g.reveal=true;g.lock=true;render(false);g.to=setTimeout(()=>{if(G===g)balEnd(false);},1500);return;}}
  render(false);
}
function balEnd(win){const g=G;g.over=true;g.win=win;g.xp=Math.round((g.solved*8+(win?10:0))*XPM());addXp(g.xp);checkAch();save();render(true);if(win){sfx('win');confetti();}else sfx('no');}
V.bal=()=>{
  const g=G;if(!g)return {html:'',top:''};
  if(g.over)return {html:gameResult(g.win?t('bossWin'):t('gameOver'),g.win?'happy':'sad',[[t('solved'),`${g.solved}/${g.goal}`,'leaf'],[t('gBal')[0],`${g.bal}/${g.max}`,'pom'],['XP',g.xp,'saffron']],g.win?'':`<p class="muted" style="margin:0">${esc(t('wordWas'))} <b>${esc(tgt(g.w))}</b></p>`),top:'',hideNav:true};
  const word=[...tgt(g.w)],al=C()==='en'?'abcdefghijklmnopqrstuvwxyz':'абвгдежзийклмнопрстуфхцчшщъыьэюя';
  const slots=word.map(ch=>isLetter(ch)?`<span class="slot-l${g.guess.has(norm1(ch))?' got':g.reveal?' miss':''}">${g.guess.has(norm1(ch))||g.reveal?esc(ch):''}</span>`:`<span class="slot-sp">${ch===' '?'':esc(ch)}</span>`).join('');
  return {html:`<div class="row between hud"><span class="chip" style="font-size:13px">${esc(t('solved'))}: ${g.solved}/${g.goal}</span><span class="chip" style="font-size:13px">${g.bal}/${g.max}</span></div>
    <div class="bal-scene">${balSvg(g)}</div>
    <div class="card bal-hint">${DIFF()<2&&pic(g.w)?`<span class="pic-mid" style="font-size:34px">${pic(g.w)}</span>`:''}<b>${esc(nat(g.w))}</b></div>
    <div class="slots">${slots}</div>
    <div class="kb" style="grid-template-columns:repeat(${C()==='en'?7:8},1fr)">${[...al].map(l=>`<button class="key${g.guess.has(l)?' ok':g.wrong.has(l)?' no':''}" data-act="balPick" data-l="${l}"${g.guess.has(l)||g.wrong.has(l)||g.lock?' disabled':''}>${l}</button>`).join('')}</div>`,
    top:closeTop(t('gBal')[0]),hideNav:true};
};


/* ---------- onboarding ---------- */
function obCard(a,val,code,title,sub,col,on){return `<button class="ob-card" data-act="${a}" data-v="${val}" aria-pressed="${on}"><span class="big-code" style="background:var(--${col})">${esc(code)}</span><span class="grow"><b>${esc(title)}</b>${sub?`<small>${esc(sub)}</small>`:''}</span></button>`;}
V.onboard=c=>{
  const st=c.step||0,dots=`<div class="dots">${[0,1,2,3].map(i=>`<i class="${i===st?'on':''}"></i>`).join('')}</div>`;
  let html='';
  if(st===0)html=`<div class="ob">${mascot(170,'happy','cheer')}<h1>Tilmoch</h1><p class="muted" style="margin:0;max-width:34ch;font-size:17px">${esc(t('obTag'))}</p>
    <div class="row" style="gap:6px;flex-wrap:wrap;justify-content:center">${LEVELS.map((L,i)=>`<span class="chip" style="background:var(--${UC[i%5]});color:#fff;font-size:13px">${L.id}</span>`).join('')}</div></div>
    <button class="btn" data-act="ob" data-step="${S.ui==='ru'?2:1}">${esc(t('obStart'))}</button><button class="btn ghost" data-act="ui" data-l="${S.ui==='uz'?'ru':'uz'}">${esc(t('obUi'))}</button>`;
  else if(st===1)html=`${dots}<h1 class="ex-title" style="text-align:center">${esc(t('obCourseQ'))}</h1>${obCard('obCourse','en','EN',t('courseEn'),t('obEnSub'),'cobalt',S.course==='en')}${obCard('obCourse','ru','RU',t('courseRu'),t('obRuSub'),'pom',S.course==='ru')}`;
  else if(st===2)html=`${dots}<h1 class="ex-title" style="text-align:center">${esc(t('obGoalQ'))}</h1>`+[30,50,100,150].map((g,i)=>obCard('obGoal',g,String(g),t('goalMin')[i],t('goalN')[i]+' · '+g+' XP',['turq','leaf','saffron','pom'][i],S.goal===g)).join('');
  else html=`${dots}<div style="display:flex;justify-content:center">${mascot(110,'wow','bob')}</div><h1 class="ex-title" style="text-align:center">${esc(t('obLevelQ'))}</h1>${obCard('obZero','','A1',t('obZero'),t('obZeroSub'),'leaf',false)}${obCard('obPlace','','?',t('obPlace'),t('obPlaceSub'),'cobalt',false)}`;
  return {html:`<div style="display:grid;gap:16px">${html}</div>`,top:st>0?`<button class="icon-btn" data-act="ob" data-step="${st===2&&S.ui==='ru'?0:st-1}" aria-label="${esc(t('close'))}">${ico('back')}</button>`:'',hideNav:true};
};

/* ---------- imtihon zali ---------- */
V.hall=()=>{
  const H=HALL[C()],en=C()==='en',name=en?t('hallEn'):t('hallRu');
  const item=(part,i,title,lvl,icn,col)=>{const sc=S.hall[C()+':'+part+i];
    return `<button class="card hall-item" data-act="${part==='s'?'cue':'hallGo'}" data-part="${part}" data-i="${i}"><span class="quest-ico" style="background:var(--${col})">${ico(icn)}</span><span class="grow"><b>${esc(title)}</b>${lvl?`<span class="chip">${lvl}</span>`:''}</span>${sc!==undefined?`<span class="num" style="color:var(--leaf)">${part==='s'?ico('check'):sc+'%'}</span>`:''}</button>`;};
  let html=`<section class="unit" style="--c:var(--pom);--cd:var(--pom-d)"><div class="grow"><div class="label">${en?'IELTS · Academic':'ТРКИ'}</div><h2>${esc(name)}</h2></div>${ico('trophy')}</section><p class="muted" style="margin:0">${esc(t('hallSub'))}</p>`;
  html+=`<h2 class="h2">${esc(t('pRead'))}</h2><div class="hall-list">`+H.reading.map((p,i)=>item('r',i,p.title,p.lvl,'book','cobalt')).join('')+'</div>';
  if(hasTTS())html+=`<h2 class="h2">${esc(t('pListen'))}</h2><div class="hall-list">`+H.listening.map((p,i)=>item('l',i,p.title,p.lvl,'ear','turq')).join('')+'</div>';
  html+=`<h2 class="h2">${esc(t('pWrite'))}</h2><div class="hall-list">`+H.writing.map((w,i)=>item('w',i,w.task,'','pen','leaf')).join('')+'</div>';
  html+=`<h2 class="h2">${esc(t('pSpeak'))}</h2><div class="hall-list">`+H.speaking.map((c,i)=>item('s',i,c.topic,'','bolt','saffron')).join('')+'</div>';
  return {html,top:`<button class="icon-btn" data-act="back" aria-label="${esc(t('close'))}">${ico('back')}</button><h1>${esc(name)}</h1>`};
};
V.cue=c=>{
  const H=HALL[C()],cd=H.speaking[c.i],en=C()==='en',ph=c.phase||'ready',total=ph==='prep'?60000:120000,left=c.end?Math.max(0,c.end-Date.now()):0;
  const R=64,Lc=2*Math.PI*R,frac=(ph==='prep'||ph==='talk')?left/total:ph==='done'?0:1;
  let html=`<div class="card cue"><div class="label">${en?'Speaking · Part 2':'Монолог'}</div><div class="cue-topic">${esc(cd.topic)}</div><div class="muted" style="font-size:14px">${esc(en?'You should say:':t('youShould'))}</div><ul>${cd.points.map(x=>`<li>${esc(x)}</li>`).join('')}</ul>
    ${hasTTS()?`<button class="btn ghost sm" data-act="speak" data-text="${esc(cd.topic+' '+cd.points.join(', '))}" data-lang="${en?'en-GB':'ru-RU'}">${ico('speak')} ${esc(t('readCue'))}</button>`:''}</div>`;
  html+=`<div class="ring"><svg viewBox="0 0 150 150"><circle cx="75" cy="75" r="${R}" fill="none" stroke="var(--surface-2)" stroke-width="12"/><circle id="cueArc" cx="75" cy="75" r="${R}" fill="none" stroke="${ph==='talk'?'var(--pom)':'var(--turq)'}" stroke-width="12" stroke-linecap="round" stroke-dasharray="${Lc.toFixed(1)}" stroke-dashoffset="${(Lc*(1-frac)).toFixed(1)}"/></svg>
    <b><span><small>${esc(ph==='talk'?t('talk'):ph==='done'?t('doneBtn'):t('prep'))}</small><span id="cueNum">${ph==='done'?'✓':fmtTime(ph==='ready'?60000:left)}</span></span></b></div>`;
  html+=`<p class="muted" style="text-align:center;margin:0">${esc(t('cueHint'))}</p>`;
  html+=`<div class="card"><div class="label" style="margin-bottom:8px">${esc(t('phrases'))}</div><div class="chips">${H.phrases.map(x=>`<span class="chip" style="font:600 13px var(--f-body)">${esc(x)}</span>`).join('')}</div></div>`;
  html+=ph==='ready'?`<div style="display:grid;gap:12px"><button class="btn turq" data-act="cuePrep">${esc(t('prepBtn'))}</button><button class="btn pom" data-act="cueTalk">${esc(t('talkBtn'))}</button></div>`
    :ph==='prep'?`<button class="btn pom" data-act="cueTalk">${esc(t('talkBtn'))}</button>`
    :ph==='talk'?`<button class="btn leaf" data-act="cueFinish">${esc(t('doneBtn'))}</button>`
    :`<button class="btn" data-act="back">${esc(t('cont'))}</button>`;
  return {html,top:`<button class="icon-btn" data-act="back" aria-label="${esc(t('close'))}">${ico('back')}</button><h1>${esc(t('pSpeak'))}</h1>`,hideNav:true};
};
function cueTick(){
  const c=cur();if(c.v!=='cue'){if(cueTimer){clearInterval(cueTimer);cueTimer=null;}return;}
  const left=c.end-Date.now(),total=c.phase==='prep'?60000:120000,Lc=2*Math.PI*64;
  const arc=document.getElementById('cueArc'),num=document.getElementById('cueNum');
  if(arc)arc.setAttribute('stroke-dashoffset',(Lc*(1-Math.max(0,left)/total)).toFixed(1));if(num)num.textContent=fmtTime(Math.max(0,left));
  if(left<=0){if(c.phase==='prep'){cueStart('talk');sfx('combo');buzz();}else cueFinish();}
}
function cueStart(ph){const c=cur();c.phase=ph;c.end=Date.now()+(ph==='prep'?60000:120000);if(cueTimer)clearInterval(cueTimer);cueTimer=setInterval(cueTick,250);sfx('tap');render(false);}
function cueFinish(){const c=cur();if(cueTimer){clearInterval(cueTimer);cueTimer=null;}if(c.phase==='done')return;c.phase='done';S.hall[C()+':s'+c.i]=100;addXp(15);checkAch();save();render(false);sfx('win');confetti();}

/* =========================================================== modal oynalar */
function openModal(m){modal=m;renderLayer();}
function closeModal(){modal=null;renderLayer();flush();}
function flush(){if(!modal&&pending.length&&!['sess','sprint'].includes(cur().v)){const p=pending.shift();openModal(p);if(p.type==='level'){sfx('lvl');confetti();}else if(p.type==='ach')sfx('coin');else if(p.type==='cert'){sfx('lvl');confetti();}}}
function renderLayer(){
  const m=modal;if(!m){layer.innerHTML='';return;}
  let inner='',center=true;
  if(m.type==='quit'){center=false;
    inner=`<div class="sheet">${mascot(84,'sad')}<h2 class="h2">${esc(t('quitT'))}</h2><p class="muted" style="margin:0">${esc(t('quitD'))}</p>
      <button class="btn" data-act="closeModal">${esc(t('stay'))}</button><button class="btn ghost" data-act="quitYes" style="color:var(--pom)">${esc(t('quit'))}</button></div>`;}
  else if(m.type==='node'){center=false;const n=m.node,ex=n.type==='exam',col=ex?'saffron':n.unit.col,st=stars(n);
    const label=ex?t('lvlStage')(n.li+1,n.L.id):`${t('unit')(n.unit.i+1)} · ${t('ntype')[n.type]}`,title=ex?t('exam'):n.lesson?tl(n.lesson.t):tl(n.unit.topic.t),desc=ex?t('examD')(n.L.id):t('ndesc')[n.type];
    inner=`<div class="sheet"><div class="row"><span class="quest-ico" style="background:var(--${col})">${ico(ex?'trophy':n.type==='grammar'?'pen':n.type==='review'?'dumb':'cards')}</span><div class="grow"><div class="label">${esc(label)}</div><h2 class="h2">${esc(title)}</h2></div>${st?`<span class="stars">${[1,2,3].map(i=>STAR(i<=st)).join('')}</span>`:''}</div>
      <p class="muted" style="margin:0">${esc(desc)}</p>
      ${n.ws?`<div class="row" style="flex-wrap:wrap;gap:6px">${n.ws.map(w=>`<span class="chip" style="font-size:12.5px;font-family:var(--f-body)">${pic(w)?pic(w)+' ':''}${esc(tgt(w))}</span>`).join('')}</div>`:''}
      <button class="btn${ex?' saffron':''}" style="--c:var(--${col});--cd:var(--${col}-d)" data-act="startNode" data-id="${n.id}">${esc(st?t('again'):t('start'))}</button>${st===3&&!ex&&n.type!=='chest'?(S.legend[doneKey(n)]?`<div class="legend-ok">${CROWN}<b>${esc(t('legendWin'))}</b></div>`:`<button class="btn saffron" data-act="startLegend" data-id="${n.id}">${CROWN} ${esc(t('legendBtn'))}</button><p class="muted" style="margin:0;font-size:13px;text-align:center">${esc(t('legendD'))}</p>`):''}</div>`;}
  else if(m.type==='level'){
    inner=`<div class="modal">${badgeSvg('cobalt',String(m.n),120)}<div class="big">${esc(t('lvlT')(m.n))}</div><p class="muted" style="margin:0">${esc(t('lvlD'))}</p><button class="btn" data-act="closeModal">${esc(t('cont'))}</button></div>`;}
  else if(m.type==='ach'){const a=ACH.find(x=>x.id===m.id),own=!!S.ach[a.id];
    inner=`<div class="modal">${m.info?'':`<span class="tag" style="color:var(--saffron)">${esc(t('achNew'))}</span>`}<span class="${own?'':'badge off'}">${badgeSvg(a.c,a.g,120)}</span><div class="big" style="font-size:24px">${esc(tl(a.t))}</div><p class="muted" style="margin:0">${esc(tl(a.d))}</p><button class="btn" data-act="closeModal">${esc(t('cont'))}</button></div>`;}
  else if(m.type==='chest'){
    inner=`<div class="modal">${m.opened?`${chestSvg(true)}<div class="big">${esc(t('chestDone'))}</div><div class="gem-burst">${GEM}${esc(t('chestGot')(m.gems))}</div><button class="btn" data-act="closeModal">${esc(t('cont'))}</button>`
      :`<span id="chestArt">${chestSvg(false)}</span><div class="big">${esc(t('chestT'))}</div><button class="btn saffron" data-act="openChest">${esc(t('chestTap'))}</button>`}</div>`;}
  else if(m.type==='streak'){const st=streakNow();
    inner=`<div class="modal"><div style="color:var(--saffron)">${FLAME.replace('class="i"','width="96" height="96"')}</div><div class="big">${esc(t('streakT')(st))}</div><p class="muted" style="margin:0">${esc(t('streakD')(S.streak.best))}</p>
      <div class="row" style="text-align:left"><span class="quest-ico" style="background:var(--turq)">${ico('snow')}</span><span class="grow" style="font-size:14px">${esc(t('freezeHave')(S.freeze))}</span></div><button class="btn" data-act="closeModal">${esc(t('cont'))}</button></div>`;}
  else if(m.type==='gems'){
    inner=`<div class="modal"><div style="color:var(--cobalt)">${GEM.replace('class="i"','width="90" height="90"')}</div><div class="big">${S.gems}</div><p class="muted" style="margin:0">${esc(t('gemsD'))}</p><button class="btn" data-act="closeModal">${esc(t('cont'))}</button></div>`;}
  else if(m.type==='course'){
    inner=`<div class="modal"><h2 class="h2">${esc(t('course'))}</h2><div style="display:grid;gap:12px;width:100%">
      <button class="btn ${S.course==='en'?'':'ghost'}" data-act="course" data-c="en">EN · ${esc(t('courseEn'))}</button>
      <button class="btn ${S.course==='ru'?'pom':'ghost'}" data-act="course" data-c="ru">RU · ${esc(t('courseRu'))}</button></div></div>`;}
  else if(m.type==='cert'){const L=LEVELS.find(x=>x.id===m.id);
    inner=`<div class="modal">${m.fresh?`<span class="tag" style="color:var(--saffron)">${esc(t('certNew'))}</span>`:''}${TM3.certSvg({title:t('certT'),of:t('certOf')(C()==='en'?t('courseEn'):t('courseRu')),level:L.id,equiv:'≈ '+equiv(L),date:S.certs[C()+':'+L.id],note:t('certNote')})}<button class="btn" data-act="closeModal">${esc(t('cont'))}</button></div>`;}
  else if(m.type==='place'){const L=LEVELS[m.li];
    inner=`<div class="modal" style="padding:0;overflow:hidden;gap:0"><div class="scene-wrap">${TM3.sceneSvg(m.li)}</div><div style="padding:18px 22px 22px;display:grid;gap:12px;justify-items:center"><div class="label">${esc(t('placeRes'))}</div><div class="big">${L.id} · ${esc(tl(L.city))}</div><span class="chip">≈ ${esc(equiv(L))}</span><p class="muted" style="margin:0">${esc(t('placeFrom')(L.id))}</p><button class="btn" data-act="closeModal">${esc(t('cont'))}</button></div></div>`;}
  layer.innerHTML=`<div class="scrim${center?' center':''}" data-act="scrim">${inner}</div>`;
}
function chestSvg(open){
  return `<svg class="chest-art" viewBox="0 0 150 130" aria-hidden="true">
   <ellipse cx="75" cy="122" rx="52" ry="6" fill="rgba(15,26,71,.15)"/>
   <rect x="22" y="56" width="106" height="62" rx="10" fill="#B9651E"/><rect x="22" y="56" width="106" height="14" fill="#9A4F12"/>
   <rect x="22" y="80" width="106" height="8" fill="#F4A51C"/><rect x="66" y="74" width="18" height="22" rx="4" fill="#F4A51C" stroke="#C47F06" stroke-width="2"/>
   ${open?`<path d="M22 56L30 18h90l8 38z" fill="#D27A2C" transform="rotate(-18 22 56)"/><g fill="#2350D8"><path d="M58 50l8-10h12l8 10-14 14z"/></g><g fill="#0FA3A0"><path d="M84 46l6-7h9l6 7-10.5 10z"/></g><g fill="#E3405A"><path d="M44 48l5-6h8l5 6-9 9z"/></g>`
     :`<path d="M22 58a53 34 0 01106 0z" fill="#D27A2C"/><rect x="22" y="50" width="106" height="8" fill="#F4A51C"/>`}
  </svg>`;
}

/* =========================================================== eslatmalar */
async function setReminder(time){
  const LN=PL.LocalNotifications;if(!LN)return false;
  try{
    await LN.cancel({notifications:[{id:1}]}).catch(()=>{});
    if(!time)return true;
    let p=await LN.checkPermissions();
    if(p.display!=='granted')p=await LN.requestPermissions();
    if(p.display!=='granted'){toast(t('remindOff'));return false;}
    const [h,m]=time.split(':').map(Number);
    await LN.schedule({notifications:[{id:1,title:t('nTitle'),body:t('nBody'),smallIcon:'ic_stat_tilmoch',iconColor:'#0FA3A0',schedule:{on:{hour:h,minute:m},allowWhileIdle:true}}]});
    return true;
  }catch(e){return false;}
}

/* =========================================================== harakatlar */
function nodeById(id){return flatNodes().find(n=>n.id===id);}
const act={
  tab:d=>{sfx('tap');setTab(d.tab)}, back:()=>back(), home:()=>home(),
  scrim:()=>{if(modal&&!['level','ach','chest','place'].includes(modal.type))closeModal();},
  closeModal:()=>closeModal(),
  speak:d=>speak(d.text,d.lang,d.rate?+d.rate:undefined),
  courseMenu:()=>{if(S.ui==='uz')openModal({type:'course'});},
  course:d=>{if(S.course!==d.c){S.course=d.c;save();toast(t('nowCourse')(d.c==='en'?t('courseEn'):t('courseRu')));}modal=null;renderLayer();render(false);},
  streakInfo:()=>openModal({type:'streak'}), gemInfo:()=>openModal({type:'gems'}),
  claim:d=>{const q=QDEF[d.id],dd=day();if(dd.claimed.includes(d.id)||q.n(dd)<q.of())return;dd.claimed.push(d.id);S.gems+=q.gem;save();sfx('coin');buzz('ok');toast('+'+q.gem);render(false);},
  node:d=>{
    const n=nodeById(d.id),c=currentNode(),st=stars(n);
    if(!nodeOpen(n,c)){toast(t('locked'));buzz('no');return;}
    sfx('tap');
    if(n.type==='chest'){if(st)return;openModal({type:'chest',node:n.id});return;}
    openModal({type:'node',node:n});
  },
  startNode:d=>{
    const n=nodeById(d.id);modal=null;renderLayer();
    if(n.type==='exam'){startSession({kind:'exam',node:n.id,li:n.li,noRe:true,q:examQ(n.li)});return;}
    if(n.type==='grammar'){go('lesson',{id:n.lesson.id,node:n.id});return;}
    if(n.type==='words'){const first=!stars(n);startSession({kind:'node',node:n.id,q:learnQ(n.ws,first)});return;}
    if(n.type==='review')startSession({kind:'node',node:n.id,q:reviewQ(n.topic.w)});
  },
  startGrammar:d=>{const l=lessons().find(x=>x.id===d.id);stack.pop();startSession({kind:'node',node:d.node||null,q:grammarQ(l)});},
  openChest:()=>{
    const m=modal,art=document.getElementById('chestArt');
    if(art)art.firstElementChild.classList.add('shake-c');sfx('tap');buzz();
    setTimeout(()=>{const g=10+Math.floor(Math.random()*21);S.gems+=g;S.chests++;S.done[C()+':'+m.node]=3;checkAch();save();
      modal={type:'chest',opened:true,gems:g};renderLayer();sfx('coin');confetti();render(false);},700);
  },
  quitYes:()=>{modal=null;renderLayer();stopSprint();sess=null;sprint=null;home();},
  pick:d=>{const ex=curEx();if(sess.fb)return;sess.st.pick=+d.i;const ok=+d.i===ex.ans;judge(ok,ex.opts[ex.ans]);},
  mpick:d=>{
    const ex=curEx(),st=sess.st,i=+d.i,side=d.side;if(st.got.includes(i))return;
    st.bad=null;
    if(!st.sel||st.sel.side===side){st.sel={side,i};sfx('tap');render(false);return;}
    if(st.sel.i===i){st.got.push(i);st.sel=null;sfx('ok');buzz();
      if(st.got.length===ex.ws.length){render(false);setTimeout(()=>judge(true,null,{silent:!!sess.rush}),250);return;}
      render(false);return;}
    st.bad={[st.sel.side]:st.sel.i,[side]:i};st.sel=null;sess.bad++;sess.combo=0;sfx('no');buzz('no');
    if(sess.kind==='legend'){sess.legendFail=true;render(false);setTimeout(()=>{if(sess&&!sess.over)finish();},500);return;}
    const w1=ex.ws[i];wordResult(w1,false);render(false);
  },
  tile:d=>{const st=sess.st;if(sess.fb)return;st.p=st.p||[];const i=+d.i;if(st.p.includes(i))return;st.p.push(i);sfx('tap');render(false);},
  untile:d=>{const st=sess.st;if(sess.fb)return;st.p.splice(+d.j,1);render(false);},
  checkTiles:()=>{
    const ex=curEx(),st=sess.st;if(sess.fb||!st.p||!st.p.length)return;
    const got=st.p.map(i=>ex.tiles[i]);
    if(ex.k==='spell'&&ex.mode==='letters'){judge(got.join('')===ex.ans.join(''),tgt(ex.w));}
    else if(ex.k==='spell'){judge(norm(got.join(' '))===norm(ex.ans.join(' ')),tgt(ex.w));}
    else judge(norm(got.join(' '))===norm(ex.s.t),ex.s.t);
  },
  next:()=>{if(!sess)return;if(curEx().k==='intro'){sfx('tap');}nextEx();},
  game:d=>{
    stopSprint();sfx('tap');
    const g=d.g;
    if(g==='sprint'){if(cur().v==='sprint')stack.pop();sprint={on:false,over:false};go('sprint');return;}
    if(g==='match'){const p=shuffle(practicePool());startSession({kind:'rush',rush:true,q:[0,1,2].map(r=>({k:'match',ws:p.slice(r*6,r*6+6).length>=4?p.slice(r*6,r*6+6):shuffle(p).slice(0,6)}))});return;}
    if(g==='srs'){const ws=shuffle(dueWords()).slice(0,15);if(!ws.length){toast(t('noDue'));return;}startSession({kind:'srs',q:mixedQ(ws)});return;}
    if(g==='mist'){const ws=shuffle(mistWords()).slice(0,12);if(!ws.length){toast(t('noMist'));return;}startSession({kind:'mist',q:mixedQ(ws)});return;}
    if(g==='build'){startSession({kind:'build',q:shuffle(sentences().filter(s=>toks(s.t).length<=9)).slice(0,8).map(mkBuild)});return;}
    if(g==='dict'){startSession({kind:'dict',q:shuffle(practicePool()).slice(0,8).map(w=>mkSpell(w,true))});return;}
  },
  sprintGo:()=>{
    sprint={on:true,over:false,score:0,right:0,wrong:0,combo:0,mult:1,end:Date.now()+60000};sprintCard();render(false);
    sprintTimer=setInterval(()=>{const left=sprint.end-Date.now();const b=document.getElementById('tbar'),n=document.getElementById('tnum');
      if(b)b.style.width=Math.max(0,left/600)+'%';if(n)n.textContent=Math.max(0,Math.ceil(left/1000));if(left<=0)sprintEnd();},100);
  },
  sprintAns:d=>{
    const s=sprint;if(!s||!s.on)return;
    const ok=(d.v==='1')===s.card.truth;
    if(ok){s.right++;s.combo++;s.mult=Math.min(4,1+Math.floor(s.combo/5));s.score+=s.mult;s.flash='ok';sfx(s.combo%5===0?'combo':'ok');buzz('ok');}
    else{s.wrong++;s.combo=0;s.mult=1;s.flash='no';sfx('no');buzz('no');}
    sprintCard();render(false);
  },
  topic:d=>{sfx('tap');go('topic',{id:d.id});},
  trainTopic:d=>{const tp=TOPICS.find(x=>x.id===d.id);startSession({kind:'topic',q:reviewQ(tp.w)});},
  achInfo:d=>openModal({type:'ach',id:d.id,info:true}),
  diff:d=>{S.diff=+d.v;save();sfx('tap');render(false);},
  theme:d=>{S.theme=d.v;save();applyTheme();render(false);},
  gstart:d=>{sfx('tap');const g=d.g;
    if(g==='boss')return go('bosses');if(g==='rain')return rainStart();if(g==='mem')return memStart();if(g==='ws')return wsStart();if(g==='bal')return balStart();
    return act.game({g});},
  bossGo:d=>{const li=+d.li;if(!levelReached(li)){toast(t('lvlLocked'));buzz('no');return;}sfx('tap');bossStart(li);},
  bossPick:d=>bossAnswer(+d.i),
  rainTap:d=>rainTap(+d.id),
  memTap:d=>memTap(+d.i),
  wsTap:d=>wsTap(+d.i),
  balPick:d=>balPick(d.l),
  gAgain:()=>{const g=G;if(!g)return;const ty=g.type,li=g.li;stack.pop();({boss:()=>bossStart(li),rain:rainStart,mem:memStart,ws:wsStart,bal:balStart})[ty]();},
  startLegend:d=>{const n=nodeById(d.id);modal=null;renderLayer();
    const q=n.type==='grammar'?grammarQ(n.lesson):n.type==='review'?reviewQ(n.topic.w):shuffle(learnQ(n.ws,false));
    startSession({kind:'legend',legendKey:doneKey(n),noRe:true,q});},
  ob:d=>{cur().step=+d.step;render(true);},
  obCourse:d=>{S.course=d.v;PATH=null;save();cur().step=2;render(true);},
  obGoal:d=>{S.goal=+d.v;save();cur().step=3;render(true);},
  obZero:()=>{S.onboarded=true;save();tab='path';stack=[{v:'path'}];render(true);},
  obPlace:()=>{S.onboarded=true;save();modal=null;renderLayer();startSession({kind:'place',noRe:true,lv:{},q:placeQ()});},
  hall:()=>{sfx('tap');go('hall');},
  hallGo:d=>{sfx('tap');startSession(hallSess(d.part,+d.i));},
  cue:d=>{sfx('tap');go('cue',{i:+d.i,phase:'ready'});},
  cuePrep:()=>cueStart('prep'), cueTalk:()=>cueStart('talk'), cueFinish:()=>cueFinish(),
  certOpen:d=>{if(!S.certs[C()+':'+d.id]){toast(t('examD')(d.id));return;}openModal({type:'cert',id:d.id});},
  buyFreeze:()=>{if(S.freeze>=2){toast(t('maxFreeze'));return;}if(S.gems<50){toast(t('noGems'));buzz('no');return;}S.gems-=50;S.freeze++;save();sfx('coin');toast(t('bought'));render(false);},
  skin:d=>{const s=SKINS.find(x=>x.id===d.id);
    if(!S.skins.includes(s.id)){if(S.gems<s.price){toast(t('noGems'));buzz('no');return;}S.gems-=s.price;S.skins.push(s.id);sfx('coin');toast(t('bought'));}
    S.skin=s.id;save();render(false);},
  ui:d=>{S.ui=d.l;save();if(S.remind)setReminder(S.remind);render(false);},
  goal:d=>{S.goal=+d.g;save();render(false);},
  sound:()=>{S.sound=!S.sound;save();render(false);if(S.sound)sfx('ok');},
  remind:async()=>{if(S.remind){S.remind=null;await setReminder(null);}else{const ok=await setReminder('20:00');if(ok)S.remind='20:00';}save();render(false);},
  resetAsk:()=>{cur().confirm=true;render(false);}, resetNo:()=>{cur().confirm=false;render(false);},
  resetYes:()=>{const ui=S.ui;S=fresh();S.ui=ui;PATH=null;save();stack=[{v:'onboard',step:0}];render(true);toast(t('resetDone'));}
};
document.addEventListener('click',e=>{
  const el=e.target.closest('[data-act]');if(!el||el.disabled)return;
  const a=el.dataset.act;if(!act[a])return;
  if(a!=='scrim')e.preventDefault();
  if(a==='scrim'&&e.target!==el)return;
  act[a](el.dataset,e);
});
document.addEventListener('keydown',e=>{
  if(modal)return;
  if(e.target&&(e.target.tagName==='INPUT'||(e.target.tagName==='BUTTON'&&(e.key==='Enter'||e.key===' '))))return;
  const v=cur().v;
  if(v==='sess'&&sess&&!sess.over){
    const ex=curEx();
    if(!sess.fb&&(ex.k==='choice'||ex.k==='gram')&&/^[1-4]$/.test(e.key)){const i=+e.key-1;if(i<ex.opts.length)act.pick({i});}
    else if(e.key==='Enter'){if(sess.fb||ex.k==='intro')act.next();else if(ex.k==='spell'||ex.k==='build')act.checkTiles();}
  }else if(v==='sprint'&&sprint&&sprint.on){if(e.key==='ArrowLeft')act.sprintAns({v:'0'});if(e.key==='ArrowRight')act.sprintAns({v:'1'});}
});

/* Android "orqaga" tugmasi */
if(PL.App&&PL.App.addListener)PL.App.addListener('backButton',()=>{if(!back())PL.App.exitApp();});
if('speechSynthesis' in window){try{speechSynthesis.getVoices();}catch(e){}}

applyTheme();
day();save();
if(!S.onboarded)stack=[{v:'onboard',step:0}];
render(true);
setTimeout(scrollToCurrent,50);
})();
