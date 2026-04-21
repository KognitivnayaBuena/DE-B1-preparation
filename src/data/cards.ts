import type { Topic, CardData } from '../types';

export const topics: Topic[] = [
  { id: 'topic1', name: 'Планирование и организация' },
  { id: 'topic2', name: 'Встречи, приглашения, договорённости' },
  { id: 'topic3', name: 'Покупки, заказы, магазины' },
  { id: 'topic4', name: 'Дорога, транспорт, улица' },
  { id: 'topic5', name: 'Путешествия и жильё' },
  { id: 'topic6', name: 'Быт, дом, соседи' },
  { id: 'topic7', name: 'Учёба, работа, экзамен' },
  { id: 'topic8', name: 'Здоровье, проблемы, решения' },
  { id: 'topic9', name: 'Мнение, обсуждение, разговорная часть' },
  { id: 'topic10', name: 'Письма, запросы, жалобы, формальные фразы' },
  { id: 'topic11', name: 'Важные глаголы B1 (100 шт.)' },
  { id: 'topic12', name: 'Важные прилагательные B1 (100 шт.)' },
];

export const cards: CardData[] = [
  // === Topic 1: Планирование и организация ===
  { id: 'topic1_001', topicId: 'topic1', german: 'Ich schlage vor, dass wir das Treffen auf Freitag verschieben.', russian: 'Я предлагаю перенести встречу на пятницу.' },
  { id: 'topic1_002', topicId: 'topic1', german: 'Weil ich nächste Woche mehr Zeit habe, könnten wir den Termin dann festlegen.', russian: 'Так как на следующей неделе у меня больше времени, мы могли бы назначить встречу тогда.' },
  { id: 'topic1_003', topicId: 'topic1', german: 'Wenn du möchtest, reserviere ich schon heute einen Tisch.', russian: 'Если хочешь, я забронирую столик уже сегодня.' },
  { id: 'topic1_004', topicId: 'topic1', german: 'Bevor wir etwas buchen, sollten wir die Preise vergleichen.', russian: 'Прежде чем что-то бронировать, нам стоит сравнить цены.' },
  { id: 'topic1_005', topicId: 'topic1', german: 'Obwohl das Programm interessant klingt, passt es leider nicht in meinen Zeitplan.', russian: 'Хотя программа звучит интересно, она, к сожалению, не вписывается в мой график.' },
  { id: 'topic1_006', topicId: 'topic1', german: 'Damit alles reibungslos läuft, erstelle ich eine Liste mit den wichtigsten Aufgaben.', russian: 'Чтобы всё прошло гладко, я составлю список самых важных задач.' },
  { id: 'topic1_007', topicId: 'topic1', german: 'Nachdem wir die Teilnehmerzahl bestätigt haben, können wir den Raum mieten.', russian: 'После того как мы подтвердим количество участников, мы сможем арендовать зал.' },
  { id: 'topic1_008', topicId: 'topic1', german: 'Falls es regnet, brauchen wir einen Plan B.', russian: 'Если пойдёт дождь, нам нужен план Б.' },
  { id: 'topic1_009', topicId: 'topic1', german: 'Während ich die Einladungen schreibe, kannst du die Musik auswählen.', russian: 'Пока я пишу приглашения, ты можешь выбрать музыку.' },
  { id: 'topic1_010', topicId: 'topic1', german: 'Sobald alle zugesagt haben, sende ich den endgültigen Ablauf.', russian: 'Как только все подтвердят участие, я отправлю окончательную программу.' },
  { id: 'topic1_011', topicId: 'topic1', german: 'Da wir nur ein kleines Budget haben, müssen wir sparsam planen.', russian: 'Так как у нас небольшой бюджет, нам нужно планировать экономно.' },
  { id: 'topic1_012', topicId: 'topic1', german: 'Ich möchte früh anfangen, damit wir keinen Stress bekommen.', russian: 'Я хочу начать пораньше, чтобы мы не нервничали.' },
  { id: 'topic1_013', topicId: 'topic1', german: 'Ob wir drinnen oder draußen feiern, hängt vom Wetter ab.', russian: 'Будем ли мы праздновать в помещении или на улице — зависит от погоды.' },
  { id: 'topic1_014', topicId: 'topic1', german: 'Solange wir die Fristen einhalten, sollte es keine Probleme geben.', russian: 'Пока мы соблюдаем сроки, проблем быть не должно.' },
  { id: 'topic1_015', topicId: 'topic1', german: 'Nachdem ich den Kalender überprüft hatte, merkte ich, dass der Termin doppelt eingetragen war.', russian: 'После того как я проверил(а) календарь, я заметил(а), что встреча была записана дважды.' },
  { id: 'topic1_016', topicId: 'topic1', german: 'Wenn etwas dazwischenkommt, gib mir bitte sofort Bescheid.', russian: 'Если что-то изменится, пожалуйста, сразу дай мне знать.' },
  { id: 'topic1_017', topicId: 'topic1', german: 'Ich notiere alle Ideen, damit wir später nichts vergessen.', russian: 'Я запишу все идеи, чтобы потом ничего не забыть.' },
  { id: 'topic1_018', topicId: 'topic1', german: 'Bevor die Gäste ankommen, möchte ich noch schnell aufräumen.', russian: 'Прежде чем придут гости, я хочу быстро прибраться.' },
  { id: 'topic1_019', topicId: 'topic1', german: 'Seitdem wir genauer planen, funktionieren unsere Projekte viel besser.', russian: 'С тех пор как мы планируем точнее, наши проекты работают гораздо лучше.' },
  { id: 'topic1_020', topicId: 'topic1', german: 'Anstatt dass wir alles spontan entscheiden, sollten wir lieber eine klare Reihenfolge festlegen.', russian: 'Вместо того чтобы решать всё спонтанно, лучше установить чёткий порядок.' },
  { id: 'topic1_021', topicId: 'topic1', german: 'Sobald du mir die Adresse schickst, kümmere ich mich um den Rest.', russian: 'Как только ты пришлёшь мне адрес, я позабочусь об остальном.' },
  { id: 'topic1_022', topicId: 'topic1', german: 'Ich frage nach, ob wir vor Ort technische Geräte benutzen dürfen.', russian: 'Я уточню, можно ли на месте использовать техническое оборудование.' },
  { id: 'topic1_023', topicId: 'topic1', german: 'Weil die Vorbereitung mehr Zeit kostet, als ich gedacht hatte, fange ich lieber heute an.', russian: 'Так как подготовка занимает больше времени, чем я думал(а), лучше начну сегодня.' },
  { id: 'topic1_024', topicId: 'topic1', german: 'Nachdem wir uns beraten hatten, entschieden wir uns für einen einfacheren Plan.', russian: 'После того как мы посовещались, мы решили выбрать более простой план.' },
  { id: 'topic1_025', topicId: 'topic1', german: 'Wir sollten früher losfahren, damit wir pünktlich ankommen.', russian: 'Нам стоит выехать раньше, чтобы приехать вовремя.' },
  { id: 'topic1_026', topicId: 'topic1', german: 'Falls jemand absagt, können wir noch eine andere Person einladen.', russian: 'Если кто-то откажется, мы можем пригласить другого человека.' },
  { id: 'topic1_027', topicId: 'topic1', german: 'Wir können viel Zeit sparen, indem wir die Aufgaben sinnvoll verteilen.', russian: 'Мы можем сэкономить много времени, разумно распределив задачи.' },
  { id: 'topic1_028', topicId: 'topic1', german: 'Ich bin froh, dass wir endlich einen passenden Termin gefunden haben.', russian: 'Я рад(а), что мы наконец нашли подходящую дату.' },
  { id: 'topic1_029', topicId: 'topic1', german: 'Bevor ich zusage, muss ich noch meinen Chef fragen.', russian: 'Прежде чем соглашаться, мне нужно спросить начальника.' },
  { id: 'topic1_030', topicId: 'topic1', german: 'Obwohl die Organisation anstrengend ist, macht mir die Planung Spaß.', russian: 'Хотя организация утомительна, планирование мне нравится.' },

  // === Topic 2: Встречи, приглашения, договорённости ===
  { id: 'topic2_001', topicId: 'topic2', german: 'Wenn du am Samstag Zeit hast, könnten wir zusammen ins Kino gehen.', russian: 'Если у тебя есть время в субботу, мы могли бы сходить в кино.' },
  { id: 'topic2_002', topicId: 'topic2', german: 'Ich würde mich freuen, wenn du zu meiner Geburtstagsfeier kommen könntest.', russian: 'Я был(а) бы рад(а), если бы ты смог(ла) прийти на мой день рождения.' },
  { id: 'topic2_003', topicId: 'topic2', german: 'Da mein Zug später ankommt, schaffe ich es leider nicht um sechs Uhr.', russian: 'Так как мой поезд приходит позже, я, к сожалению, не успею к шести.' },
  { id: 'topic2_004', topicId: 'topic2', german: 'Sobald ich aus dem Büro bin, rufe ich dich an.', russian: 'Как только я выйду из офиса, я тебе позвоню.' },
  { id: 'topic2_005', topicId: 'topic2', german: 'Obwohl ich müde bin, möchte ich unser Treffen nicht absagen.', russian: 'Хотя я устал(а), я не хочу отменять нашу встречу.' },
  { id: 'topic2_006', topicId: 'topic2', german: 'Bevor wir uns treffen, muss ich noch ein paar Besorgungen machen.', russian: 'Прежде чем мы встретимся, мне нужно сделать несколько дел.' },
  { id: 'topic2_007', topicId: 'topic2', german: 'Ich kann erst zusagen, nachdem ich meinen Dienstplan bekommen habe.', russian: 'Я смогу подтвердить только после того, как получу рабочий график.' },
  { id: 'topic2_008', topicId: 'topic2', german: 'Falls du dich verspätest, warte ich vor dem Eingang.', russian: 'Если ты опоздаешь, я подожду у входа.' },
  { id: 'topic2_009', topicId: 'topic2', german: 'Während du unterwegs bist, besorge ich schon die Tickets.', russian: 'Пока ты в пути, я куплю билеты.' },
  { id: 'topic2_010', topicId: 'topic2', german: 'Ich weiß noch nicht, ob meine Schwester auch mitkommen kann.', russian: 'Я ещё не знаю, сможет ли моя сестра тоже пойти.' },
  { id: 'topic2_011', topicId: 'topic2', german: 'Weil das Café am Sonntag geschlossen ist, brauchen wir einen anderen Treffpunkt.', russian: 'Так как кафе закрыто в воскресенье, нам нужно другое место встречи.' },
  { id: 'topic2_012', topicId: 'topic2', german: 'Wenn es dir recht ist, treffen wir uns lieber früher.', russian: 'Если тебе удобно, давай встретимся пораньше.' },
  { id: 'topic2_013', topicId: 'topic2', german: 'Nachdem wir so lange telefoniert hatten, stand unser Plan endlich fest.', russian: 'После того как мы так долго разговаривали по телефону, наш план наконец определился.' },
  { id: 'topic2_014', topicId: 'topic2', german: 'Ich bleibe so lange hier, bis du ankommst.', russian: 'Я останусь здесь, пока ты не приедешь.' },
  { id: 'topic2_015', topicId: 'topic2', german: 'Seitdem wir in derselben Stadt wohnen, sehen wir uns viel öfter.', russian: 'С тех пор как мы живём в одном городе, мы видимся гораздо чаще.' },
  { id: 'topic2_016', topicId: 'topic2', german: 'Auch wenn ich wenig Zeit habe, nehme ich mir gern eine Stunde für dich.', russian: 'Даже если у меня мало времени, я с удовольствием выделю час для тебя.' },
  { id: 'topic2_017', topicId: 'topic2', german: 'Damit wir uns leichter finden, schicke ich dir meinen Standort.', russian: 'Чтобы нам было легче найти друг друга, я отправлю тебе свою геолокацию.' },
  { id: 'topic2_018', topicId: 'topic2', german: 'Solange der Verkehr ruhig bleibt, bin ich rechtzeitig da.', russian: 'Пока на дорогах спокойно, я приеду вовремя.' },
  { id: 'topic2_019', topicId: 'topic2', german: 'Ich wollte fragen, ob du morgen Nachmittag frei bist.', russian: 'Я хотел(а) спросить, свободен(на) ли ты завтра после обеда.' },
  { id: 'topic2_020', topicId: 'topic2', german: 'Bevor ich gehe, bestätige ich dir noch einmal die Uhrzeit.', russian: 'Прежде чем уйти, я ещё раз подтвержу тебе время.' },
  { id: 'topic2_021', topicId: 'topic2', german: 'Obwohl das Restaurant ziemlich teuer ist, ist das Essen dort wirklich ausgezeichnet.', russian: 'Хотя ресторан довольно дорогой, еда там действительно превосходная.' },
  { id: 'topic2_022', topicId: 'topic2', german: 'Wenn niemand etwas dagegen hat, lade ich noch zwei Freunde ein.', russian: 'Если никто не против, я приглашу ещё двух друзей.' },
  { id: 'topic2_023', topicId: 'topic2', german: 'Nachdem wir den Film gesehen hatten, gingen wir noch etwas trinken.', russian: 'После того как мы посмотрели фильм, мы ещё пошли выпить.' },
  { id: 'topic2_024', topicId: 'topic2', german: 'Weil mein Handy fast leer ist, antworte ich vielleicht später.', russian: 'Так как мой телефон почти разряжен, я, возможно, отвечу позже.' },
  { id: 'topic2_025', topicId: 'topic2', german: 'Falls du keine Lust auf Kino hast, können wir auch spazieren gehen.', russian: 'Если тебе не хочется в кино, мы можем и просто погулять.' },
  { id: 'topic2_026', topicId: 'topic2', german: 'Sobald das Wetter besser wird, machen wir einen Ausflug an den See.', russian: 'Как только погода улучшится, мы поедем на озеро.' },
  { id: 'topic2_027', topicId: 'topic2', german: 'Ich komme nur mit, wenn wir nicht zu spät zurückfahren.', russian: 'Я пойду только если мы не будем возвращаться слишком поздно.' },
  { id: 'topic2_028', topicId: 'topic2', german: 'Da du dich gut in der Stadt auskennst, könntest du den Treffpunkt aussuchen.', russian: 'Так как ты хорошо знаешь город, ты мог(ла) бы выбрать место встречи.' },
  { id: 'topic2_029', topicId: 'topic2', german: 'Während ich auf dich warte, lese ich noch ein bisschen.', russian: 'Пока я тебя жду, я ещё немного почитаю.' },
  { id: 'topic2_030', topicId: 'topic2', german: 'Ich freue mich, dass wir uns endlich wiedersehen.', russian: 'Я рад(а), что мы наконец снова увидимся.' },

  // === Topic 3: Покупки, заказы, магазины ===
  { id: 'topic3_001', topicId: 'topic3', german: 'Ich möchte dieses Kleid kaufen, obwohl es etwas teurer ist als geplant.', russian: 'Я хочу купить это платье, хотя оно немного дороже, чем планировалось.' },
  { id: 'topic3_002', topicId: 'topic3', german: 'Wenn der Pullover im Angebot ist, nehme ich ihn in Blau.', russian: 'Если свитер по скидке, я возьму его в синем цвете.' },
  { id: 'topic3_003', topicId: 'topic3', german: 'Weil die Qualität wichtig ist, kaufe ich lieber weniger, aber besser ein.', russian: 'Так как качество важно, я лучше куплю меньше, но лучше.' },
  { id: 'topic3_004', topicId: 'topic3', german: 'Bevor ich etwas bestelle, lese ich immer die Bewertungen.', russian: 'Прежде чем что-то заказать, я всегда читаю отзывы.' },
  { id: 'topic3_005', topicId: 'topic3', german: 'Nachdem ich den Preis verglichen hatte, entschied ich mich für das günstigere Modell.', russian: 'После того как я сравнил(а) цены, я выбрал(а) более дешёвую модель.' },
  { id: 'topic3_006', topicId: 'topic3', german: 'Falls das Gerät kaputt ist, möchte ich es umtauschen.', russian: 'Если прибор неисправен, я хотел(а) бы его обменять.' },
  { id: 'topic3_007', topicId: 'topic3', german: 'Ich frage die Verkäuferin, ob es diesen Schuh auch in Größe 39 gibt.', russian: 'Я спрошу продавщицу, есть ли эта обувь в 39-м размере.' },
  { id: 'topic3_008', topicId: 'topic3', german: 'Obwohl der Laden klein ist, hat er eine erstaunlich große Auswahl.', russian: 'Хотя магазин маленький, у него удивительно большой выбор.' },
  { id: 'topic3_009', topicId: 'topic3', german: 'Damit ich nichts vergesse, schreibe ich eine Einkaufsliste.', russian: 'Чтобы ничего не забыть, я пишу список покупок.' },
  { id: 'topic3_010', topicId: 'topic3', german: 'Sobald die Lieferung angekommen ist, gebe ich dir Bescheid.', russian: 'Как только доставка придёт, я дам тебе знать.' },
  { id: 'topic3_011', topicId: 'topic3', german: 'Da ich bar bezahlt habe, brauche ich unbedingt den Kassenbon.', russian: 'Так как я заплатил(а) наличными, мне обязательно нужен чек.' },
  { id: 'topic3_012', topicId: 'topic3', german: 'Wenn die Tasche robust genug ist, kann ich sie täglich benutzen.', russian: 'Если сумка достаточно прочная, я смогу пользоваться ей каждый день.' },
  { id: 'topic3_013', topicId: 'topic3', german: 'Während meine Mutter Obst kauft, suche ich nach frischem Brot.', russian: 'Пока мама покупает фрукты, я ищу свежий хлеб.' },
  { id: 'topic3_014', topicId: 'topic3', german: 'Ich nehme den günstigeren Laptop, weil mein Budget begrenzt ist.', russian: 'Я возьму более дешёвый ноутбук, потому что мой бюджет ограничен.' },
  { id: 'topic3_015', topicId: 'topic3', german: 'Bevor wir an der Kasse stehen, sollten wir noch das Sonderangebot prüfen.', russian: 'Прежде чем стоять на кассе, нам стоит проверить спецпредложение.' },
  { id: 'topic3_016', topicId: 'topic3', german: 'Seitdem ich online einkaufe, spare ich viel Zeit.', russian: 'С тех пор как я покупаю онлайн, я экономлю много времени.' },
  { id: 'topic3_017', topicId: 'topic3', german: 'Auch wenn ich das Design schön finde, überzeugt mich die Qualität nicht ganz.', russian: 'Даже если мне нравится дизайн, качество меня не совсем убеждает.' },
  { id: 'topic3_018', topicId: 'topic3', german: 'Ich hätte gern ein Produkt, das einfach zu bedienen ist.', russian: 'Я хотел(а) бы продукт, который легко использовать.' },
  { id: 'topic3_019', topicId: 'topic3', german: 'Solange der Rabatt gilt, lohnt sich der Kauf wirklich.', russian: 'Пока действует скидка, покупка действительно того стоит.' },
  { id: 'topic3_020', topicId: 'topic3', german: 'Nachdem der Verkäufer mir alles erklärt hatte, war ich viel sicherer.', russian: 'После того как продавец мне всё объяснил, я стал(а) гораздо увереннее.' },
  { id: 'topic3_021', topicId: 'topic3', german: 'Falls Sie das Modell nicht auf Lager haben, könnten Sie es bitte bestellen?', russian: 'Если у вас нет этой модели в наличии, не могли бы вы её заказать?' },
  { id: 'topic3_022', topicId: 'topic3', german: 'Ich bin zufrieden, weil der Service hier immer freundlich und zuverlässig ist.', russian: 'Я доволен(на), потому что сервис здесь всегда дружелюбный и надёжный.' },
  { id: 'topic3_023', topicId: 'topic3', german: 'Wenn die Hose zu eng ist, probiere ich eine Nummer größer an.', russian: 'Если брюки слишком узкие, я примерю на размер больше.' },
  { id: 'topic3_024', topicId: 'topic3', german: 'Obwohl die Lieferung verspätet war, kam alles in gutem Zustand an.', russian: 'Хотя доставка задержалась, всё пришло в хорошем состоянии.' },
  { id: 'topic3_025', topicId: 'topic3', german: 'Ich kann online bestellen, ohne dass ich extra in die Stadt fahren muss.', russian: 'Я могу заказать онлайн, не выезжая специально в город.' },
  { id: 'topic3_026', topicId: 'topic3', german: 'Das Angebot gilt nur heute, sodass ich mich schnell entscheiden muss.', russian: 'Предложение действует только сегодня, поэтому мне нужно быстро решиться.' },
  { id: 'topic3_027', topicId: 'topic3', german: 'Bevor ich bezahle, kontrolliere ich noch einmal die Rechnung.', russian: 'Прежде чем платить, я ещё раз проверю счёт.' },
  { id: 'topic3_028', topicId: 'topic3', german: 'Ich würde gern wissen, ob man hier mit Karte zahlen kann.', russian: 'Я хотел(а) бы узнать, можно ли здесь расплатиться картой.' },
  { id: 'topic3_029', topicId: 'topic3', german: 'Ich spare Geld, indem ich regelmäßig nach Sonderangeboten suche.', russian: 'Я экономлю деньги, регулярно ища спецпредложения.' },
  { id: 'topic3_030', topicId: 'topic3', german: 'Sobald ich mein Gehalt bekomme, kaufe ich mir endlich ein neues Handy.', russian: 'Как только я получу зарплату, я наконец куплю себе новый телефон.' },

  // === Topic 4: Дорога, транспорт, улица ===
  { id: 'topic4_001', topicId: 'topic4', german: 'Wenn wir die Hauptstraße nehmen, sind wir schneller am Bahnhof.', russian: 'Если мы поедем по главной улице, мы быстрее доберёмся до вокзала.' },
  { id: 'topic4_002', topicId: 'topic4', german: 'Weil heute viel Verkehr ist, sollten wir früher losfahren.', russian: 'Так как сегодня много пробок, нам стоит выехать раньше.' },
  { id: 'topic4_003', topicId: 'topic4', german: 'Bevor du die Kreuzung überquerst, musst du nach links und rechts schauen.', russian: 'Прежде чем переходить перекрёсток, нужно посмотреть налево и направо.' },
  { id: 'topic4_004', topicId: 'topic4', german: 'Obwohl das Navi eine andere Route zeigt, kenne ich diesen Weg besser.', russian: 'Хотя навигатор показывает другой маршрут, я лучше знаю эту дорогу.' },
  { id: 'topic4_005', topicId: 'topic4', german: 'Falls der Bus ausfällt, nehmen wir einfach die U-Bahn.', russian: 'Если автобус отменят, мы просто поедем на метро.' },
  { id: 'topic4_006', topicId: 'topic4', german: 'Nachdem ich falsch abgebogen war, musste ich einen großen Umweg machen.', russian: 'После того как я повернул(а) не туда, мне пришлось делать большой крюк.' },
  { id: 'topic4_007', topicId: 'topic4', german: 'Damit wir den Zug nicht verpassen, sollten wir sofort ein Taxi rufen.', russian: 'Чтобы не опоздать на поезд, нам стоит сразу вызвать такси.' },
  { id: 'topic4_008', topicId: 'topic4', german: 'Solange die Ampel rot ist, dürfen wir nicht weitergehen.', russian: 'Пока светофор красный, нам нельзя идти дальше.' },
  { id: 'topic4_009', topicId: 'topic4', german: 'Sobald du an der zweiten Ecke bist, siehst du die Apotheke auf der rechten Seite.', russian: 'Как только дойдёшь до второго угла, увидишь аптеку справа.' },
  { id: 'topic4_010', topicId: 'topic4', german: 'Ich weiß nicht, ob diese Straße wegen der Baustelle gesperrt ist.', russian: 'Я не знаю, перекрыта ли эта улица из-за стройки.' },
  { id: 'topic4_011', topicId: 'topic4', german: 'Da mein Fahrrad einen platten Reifen hat, gehe ich heute zu Fuß.', russian: 'Так как у моего велосипеда спущено колесо, я сегодня иду пешком.' },
  { id: 'topic4_012', topicId: 'topic4', german: 'Während wir im Stau standen, hörten wir Nachrichten im Radio.', russian: 'Пока мы стояли в пробке, мы слушали новости по радио.' },
  { id: 'topic4_013', topicId: 'topic4', german: 'Wenn du geradeaus gehst, kommst du direkt zum Marktplatz.', russian: 'Если пойдёшь прямо, попадёшь прямо на рыночную площадь.' },
  { id: 'topic4_014', topicId: 'topic4', german: 'Bevor wir losfahren, tanke ich noch schnell das Auto voll.', russian: 'Прежде чем мы выедем, я быстро заправлю машину.' },
  { id: 'topic4_015', topicId: 'topic4', german: 'Auch wenn der Weg länger ist, ist er viel ruhiger und sicherer.', russian: 'Даже если дорога длиннее, она гораздо спокойнее и безопаснее.' },
  { id: 'topic4_016', topicId: 'topic4', german: 'Seitdem die neue Linie fährt, komme ich pünktlicher zur Arbeit.', russian: 'С тех пор как запустили новую линию, я приезжаю на работу вовремя.' },
  { id: 'topic4_017', topicId: 'topic4', german: 'Ich habe mich verlaufen, obwohl ich die Adresse vorher gespeichert hatte.', russian: 'Я заблудился(ась), хотя заранее сохранил(а) адрес.' },
  { id: 'topic4_018', topicId: 'topic4', german: 'Falls du den Ausgang nicht findest, warte vor dem Infoschalter.', russian: 'Если не найдёшь выход, подожди у информационной стойки.' },
  { id: 'topic4_019', topicId: 'topic4', german: 'Während der Zug in den Bahnhof einfährt, suche ich schon meinen Sitzplatz.', russian: 'Пока поезд въезжает на вокзал, я уже ищу своё место.' },
  { id: 'topic4_020', topicId: 'topic4', german: 'Nachdem wir an der Haltestelle angekommen waren, merkten wir, dass der Bus schon weg war.', russian: 'Когда мы пришли на остановку, мы заметили, что автобус уже уехал.' },
  { id: 'topic4_021', topicId: 'topic4', german: 'Ich fahre lieber mit dem Fahrrad, weil das umweltfreundlicher und billiger ist.', russian: 'Я предпочитаю ездить на велосипеде, потому что это экологичнее и дешевле.' },
  { id: 'topic4_022', topicId: 'topic4', german: 'Solange das Wetter trocken bleibt, können wir den ganzen Weg laufen.', russian: 'Пока погода сухая, мы можем пройти весь путь пешком.' },
  { id: 'topic4_023', topicId: 'topic4', german: 'Wenn du an der Brücke vorbeikommst, musst du gleich danach rechts abbiegen.', russian: 'Когда пройдёшь мост, нужно сразу после него повернуть направо.' },
  { id: 'topic4_024', topicId: 'topic4', german: 'Obwohl die Straße eng ist, fahren dort erstaunlich viele Autos.', russian: 'Хотя улица узкая, там ездит удивительно много машин.' },
  { id: 'topic4_025', topicId: 'topic4', german: 'Da der Zug Verspätung hat, informiere ich meinen Kollegen sofort.', russian: 'Так как поезд опаздывает, я сразу сообщу своему коллеге.' },
  { id: 'topic4_026', topicId: 'topic4', german: 'Bevor ich in eine fremde Stadt fahre, lade ich mir einen Stadtplan herunter.', russian: 'Прежде чем ехать в незнакомый город, я скачиваю карту.' },
  { id: 'topic4_027', topicId: 'topic4', german: 'Ich frage einen Passanten, wo die nächste Bushaltestelle ist.', russian: 'Я спрошу прохожего, где ближайшая автобусная остановка.' },
  { id: 'topic4_028', topicId: 'topic4', german: 'Sobald die Schranke geöffnet wird, können wir weiterfahren.', russian: 'Как только шлагбаум откроется, мы сможем ехать дальше.' },
  { id: 'topic4_029', topicId: 'topic4', german: 'Weil die Bushaltestelle verlegt wurde, habe ich sie zuerst nicht gefunden.', russian: 'Так как остановку перенесли, я сначала её не нашёл(ла).' },
  { id: 'topic4_030', topicId: 'topic4', german: 'Nachdem wir den richtigen Bahnsteig gefunden hatten, konnten wir endlich entspannen.', russian: 'После того как мы нашли нужную платформу, мы наконец смогли расслабиться.' },

  // === Topic 5: Путешествия и жильё ===
  { id: 'topic5_001', topicId: 'topic5', german: 'Wenn wir früh buchen, bekommen wir wahrscheinlich ein günstigeres Hotelzimmer.', russian: 'Если мы забронируем заранее, мы, вероятно, получим более дешёвый номер.' },
  { id: 'topic5_002', topicId: 'topic5', german: 'Obwohl das Hotel zentral liegt, ist es erstaunlich ruhig.', russian: 'Хотя отель расположен в центре, он удивительно тихий.' },
  { id: 'topic5_003', topicId: 'topic5', german: 'Bevor ich reise, prüfe ich immer, ob ich alle Unterlagen dabei habe.', russian: 'Прежде чем путешествовать, я всегда проверяю, все ли документы со мной.' },
  { id: 'topic5_004', topicId: 'topic5', german: 'Nachdem wir eingecheckt hatten, brachten wir sofort die Koffer aufs Zimmer.', russian: 'После того как мы заселились, мы сразу отнесли чемоданы в номер.' },
  { id: 'topic5_005', topicId: 'topic5', german: 'Falls das Wetter schön bleibt, machen wir morgen eine Stadtführung.', russian: 'Если погода останется хорошей, завтра мы пойдём на экскурсию по городу.' },
  { id: 'topic5_006', topicId: 'topic5', german: 'Ich vermeide Reisestress, indem ich genügend Pausen einplane.', russian: 'Я избегаю дорожного стресса, планируя достаточно перерывов.' },
  { id: 'topic5_007', topicId: 'topic5', german: 'Ich möchte ein Zimmer, das sauber, hell und nicht zu laut ist.', russian: 'Я хочу номер, который будет чистым, светлым и не слишком шумным.' },
  { id: 'topic5_008', topicId: 'topic5', german: 'Da unser Flug sehr früh geht, fahren wir schon nachts zum Flughafen.', russian: 'Так как наш рейс очень рано, мы едем в аэропорт уже ночью.' },
  { id: 'topic5_009', topicId: 'topic5', german: 'Während meine Freunde Souvenirs kaufen, mache ich Fotos von der Altstadt.', russian: 'Пока мои друзья покупают сувениры, я фотографирую старый город.' },
  { id: 'topic5_010', topicId: 'topic5', german: 'Sobald wir im Hotel ankommen, melden wir uns bei dir.', russian: 'Как только мы прибудем в отель, мы тебе напишем.' },
  { id: 'topic5_011', topicId: 'topic5', german: 'Ich weiß noch nicht, ob wir im Sommer ans Meer oder in die Berge fahren.', russian: 'Я ещё не знаю, поедем ли мы летом на море или в горы.' },
  { id: 'topic5_012', topicId: 'topic5', german: 'Weil ich lokale Spezialitäten probieren wollte, suchte ich ein kleines Restaurant.', russian: 'Так как я хотел(а) попробовать местные блюда, я искал(а) маленький ресторанчик.' },
  { id: 'topic5_013', topicId: 'topic5', german: 'Auch wenn die Reise anstrengend war, hat sie sich absolut gelohnt.', russian: 'Даже если поездка была утомительной, она того абсолютно стоила.' },
  { id: 'topic5_014', topicId: 'topic5', german: 'Bevor wir ein Museum besuchen, informieren wir uns über die Öffnungszeiten.', russian: 'Прежде чем идти в музей, мы узнаем часы работы.' },
  { id: 'topic5_015', topicId: 'topic5', german: 'Nachdem ich mein Ticket online gebucht hatte, konnte ich direkt einchecken, ohne dass ich lange warten musste.', russian: 'После того как я забронировал(а) билет онлайн, я смог(ла) сразу зарегистрироваться, не ожидая долго.' },
  { id: 'topic5_016', topicId: 'topic5', german: 'Solange wir unser Gepäck im Blick behalten, ist alles in Ordnung.', russian: 'Пока мы следим за багажом, всё в порядке.' },
  { id: 'topic5_017', topicId: 'topic5', german: 'Falls der Flug gestrichen wird, brauche ich sofort eine Alternative.', russian: 'Если рейс отменят, мне сразу нужна альтернатива.' },
  { id: 'topic5_018', topicId: 'topic5', german: 'Während wir auf den Anschlusszug warteten, tranken wir einen Kaffee.', russian: 'Пока мы ждали пересадочный поезд, мы выпили кофе.' },
  { id: 'topic5_019', topicId: 'topic5', german: 'Ich finde es praktisch, dass man viele Tickets heute digital speichern kann.', russian: 'Мне кажется удобным, что сейчас многие билеты можно сохранять в электронном виде.' },
  { id: 'topic5_020', topicId: 'topic5', german: 'Sobald die Ferien beginnen, werden die Preise deutlich höher.', russian: 'Как только начнутся каникулы, цены значительно вырастут.' },
  { id: 'topic5_021', topicId: 'topic5', german: 'Da unser Zimmer noch nicht fertig war, ließen wir die Koffer an der Rezeption.', russian: 'Так как наш номер ещё не был готов, мы оставили чемоданы на ресепшене.' },
  { id: 'topic5_022', topicId: 'topic5', german: 'Obwohl der Strand überfüllt war, war das Wasser wunderbar klar.', russian: 'Хотя пляж был переполнен, вода была удивительно чистой.' },
  { id: 'topic5_023', topicId: 'topic5', german: 'Wenn man im Ausland unterwegs ist, sollte man immer etwas Bargeld dabeihaben.', russian: 'Когда находишься за границей, стоит всегда иметь при себе немного наличных.' },
  { id: 'topic5_024', topicId: 'topic5', german: 'Nachdem wir die Sehenswürdigkeiten besichtigt hatten, ruhten wir uns im Park aus.', russian: 'После осмотра достопримечательностей мы отдохнули в парке.' },
  { id: 'topic5_025', topicId: 'topic5', german: 'Ich nehme lieber einen kleinen Koffer, weil er leichter zu tragen ist.', russian: 'Я лучше возьму маленький чемодан, потому что его легче нести.' },
  { id: 'topic5_026', topicId: 'topic5', german: 'Bevor wir abreisen, kaufen wir noch ein paar Geschenke für die Familie.', russian: 'Прежде чем уехать, мы купим ещё несколько подарков для семьи.' },
  { id: 'topic5_027', topicId: 'topic5', german: 'Seitdem ich häufiger reise, packe ich viel organisierter.', russian: 'С тех пор как я стал(а) чаще путешествовать, я собираю вещи гораздо организованнее.' },
  { id: 'topic5_028', topicId: 'topic5', german: 'Falls du Empfehlungen brauchst, kann ich dir einige schöne Orte nennen.', russian: 'Если тебе нужны рекомендации, я могу подсказать несколько красивых мест.' },
  { id: 'topic5_029', topicId: 'topic5', german: 'Während ich die Route plane, suchst du bitte nach einer günstigen Unterkunft.', russian: 'Пока я планирую маршрут, поищи, пожалуйста, недорогое жильё.' },
  { id: 'topic5_030', topicId: 'topic5', german: 'Ich freue mich, dass unsere Reise so abwechslungsreich und interessant war.', russian: 'Я рад(а), что наше путешествие было таким разнообразным и интересным.' },

  // === Topic 6: Быт, дом, соседи ===
  { id: 'topic6_001', topicId: 'topic6', german: 'Wenn ich nach Hause komme, koche ich zuerst etwas Warmes.', russian: 'Когда я прихожу домой, я сначала готовлю что-нибудь тёплое.' },
  { id: 'topic6_002', topicId: 'topic6', german: 'Weil die Küche so unordentlich war, musste ich lange aufräumen.', russian: 'Так как на кухне был такой беспорядок, мне пришлось долго убираться.' },
  { id: 'topic6_003', topicId: 'topic6', german: 'Bevor die Gäste kommen, decke ich noch schnell den Tisch.', russian: 'Прежде чем придут гости, я быстро накрою на стол.' },
  { id: 'topic6_004', topicId: 'topic6', german: 'Obwohl ich gestern müde war, habe ich die Wäsche trotzdem gemacht.', russian: 'Хотя я вчера устал(а), я всё равно постирал(а) бельё.' },
  { id: 'topic6_005', topicId: 'topic6', german: 'Falls du Zucker brauchst, kann ich dir etwas leihen.', russian: 'Если тебе нужен сахар, я могу одолжить немного.' },
  { id: 'topic6_006', topicId: 'topic6', german: 'Nachdem ich die Wohnung geputzt hatte, war ich ziemlich erschöpft.', russian: 'После того как я убрал(а) квартиру, я был(а) довольно измотан(а).' },
  { id: 'topic6_007', topicId: 'topic6', german: 'Damit morgens alles schneller geht, lege ich meine Kleidung schon am Abend bereit.', russian: 'Чтобы утром всё шло быстрее, я готовлю одежду с вечера.' },
  { id: 'topic6_008', topicId: 'topic6', german: 'Da der Kühlschrank fast leer ist, müssen wir einkaufen gehen.', russian: 'Так как холодильник почти пуст, нам нужно сходить за покупками.' },
  { id: 'topic6_009', topicId: 'topic6', german: 'Während meine Schwester das Bad reinigt, sauge ich das Wohnzimmer.', russian: 'Пока моя сестра убирает ванную, я пылесошу гостиную.' },
  { id: 'topic6_010', topicId: 'topic6', german: 'Sobald der Kuchen fertig ist, hole ich ihn aus dem Ofen.', russian: 'Как только торт будет готов, я достану его из духовки.' },
  { id: 'topic6_011', topicId: 'topic6', german: 'Ich finde Nachbarn angenehm, die ruhig und hilfsbereit sind.', russian: 'Мне нравятся соседи, которые тихие и отзывчивые.' },
  { id: 'topic6_012', topicId: 'topic6', german: 'Wenn die Waschmaschine wieder nicht funktioniert, rufe ich den Hausmeister an.', russian: 'Если стиральная машина опять не работает, я позвоню управдому.' },
  { id: 'topic6_013', topicId: 'topic6', german: 'Obwohl unser Balkon klein ist, sitzen wir im Sommer oft draußen.', russian: 'Хотя наш балкон маленький, летом мы часто сидим на улице.' },
  { id: 'topic6_014', topicId: 'topic6', german: 'Bevor ich den Müll rausbringe, trenne ich Plastik und Papier.', russian: 'Прежде чем выносить мусор, я разделяю пластик и бумагу.' },
  { id: 'topic6_015', topicId: 'topic6', german: 'Seitdem wir einen Wochenplan haben, ist der Haushalt viel besser organisiert.', russian: 'С тех пор как у нас есть план на неделю, домашние дела организованы гораздо лучше.' },
  { id: 'topic6_016', topicId: 'topic6', german: 'Auch wenn ich wenig Lust habe, muss ich heute noch bügeln.', russian: 'Даже если мне не хочется, сегодня мне ещё нужно погладить.' },
  { id: 'topic6_017', topicId: 'topic6', german: 'Ich lasse das Fenster offen, solange es draußen nicht zu kalt ist.', russian: 'Я оставляю окно открытым, пока на улице не слишком холодно.' },
  { id: 'topic6_018', topicId: 'topic6', german: 'Falls der Nachbar wieder laut feiert, sage ich freundlich etwas dazu.', russian: 'Если сосед снова будет шумно праздновать, я вежливо скажу ему об этом.' },
  { id: 'topic6_019', topicId: 'topic6', german: 'Nachdem das Wasser eine Stunde lang abgestellt war, konnten wir endlich duschen.', russian: 'После того как воду отключали на час, мы наконец смогли принять душ.' },
  { id: 'topic6_020', topicId: 'topic6', german: 'Weil das Sofa alt und unbequem ist, möchten wir ein neues kaufen.', russian: 'Так как диван старый и неудобный, мы хотим купить новый.' },
  { id: 'topic6_021', topicId: 'topic6', german: 'Wenn du möchtest, kannst du heute bei uns zu Abend essen.', russian: 'Если хочешь, можешь сегодня поужинать у нас.' },
  { id: 'topic6_022', topicId: 'topic6', german: 'Obwohl ich das Rezept genau befolgt habe, ist die Suppe zu salzig geworden.', russian: 'Хотя я точно следовал(а) рецепту, суп получился слишком солёным.' },
  { id: 'topic6_023', topicId: 'topic6', german: 'Sobald die Kinder schlafen, habe ich endlich etwas Ruhe.', russian: 'Как только дети уснут, у меня наконец будет покой.' },
  { id: 'topic6_024', topicId: 'topic6', german: 'Da wir morgen früh aufstehen müssen, gehen wir heute früher ins Bett.', russian: 'Так как завтра нужно рано вставать, мы сегодня ляжем раньше.' },
  { id: 'topic6_025', topicId: 'topic6', german: 'Ich arbeite viel konzentrierter, indem ich den Schreibtisch zuerst aufräume.', russian: 'Я работаю гораздо сосредоточеннее, предварительно убрав рабочий стол.' },
  { id: 'topic6_026', topicId: 'topic6', german: 'Ich telefoniere ungern, während der Staubsauger läuft.', russian: 'Я не люблю разговаривать по телефону, пока работает пылесос.' },
  { id: 'topic6_027', topicId: 'topic6', german: 'Bevor ich das Haus verlasse, prüfe ich immer, ob die Fenster geschlossen sind.', russian: 'Прежде чем выйти из дома, я всегда проверяю, закрыты ли окна.' },
  { id: 'topic6_028', topicId: 'topic6', german: 'Ich bin froh, dass wir so eine helle und gemütliche Wohnung gefunden haben.', russian: 'Я рад(а), что мы нашли такую светлую и уютную квартиру.' },
  { id: 'topic6_029', topicId: 'topic6', german: 'Falls du später kommst, lass bitte das Licht im Flur an.', russian: 'Если придёшь позже, пожалуйста, оставь свет в коридоре.' },
  { id: 'topic6_030', topicId: 'topic6', german: 'Nachdem wir neue Regale aufgebaut hatten, wirkte das Zimmer viel ordentlicher.', russian: 'После того как мы собрали новые полки, комната стала выглядеть гораздо аккуратнее.' },

  // === Topic 7: Учёба, работа, экзамен ===
  { id: 'topic7_001', topicId: 'topic7', german: 'Wenn ich mich gut vorbereite, bin ich in Prüfungen viel ruhiger.', russian: 'Когда я хорошо готовлюсь, я гораздо спокойнее на экзаменах.' },
  { id: 'topic7_002', topicId: 'topic7', german: 'Weil die Aufgabe komplizierter war, als ich erwartet hatte, brauchte ich mehr Zeit.', russian: 'Так как задание оказалось сложнее, чем я ожидал(а), мне понадобилось больше времени.' },
  { id: 'topic7_003', topicId: 'topic7', german: 'Bevor wir mit dem Projekt beginnen, sollten wir die Ziele klar definieren.', russian: 'Прежде чем начать проект, нам стоит чётко определить цели.' },
  { id: 'topic7_004', topicId: 'topic7', german: 'Obwohl ich gestern lange gelernt habe, wiederhole ich heute alles noch einmal.', russian: 'Хотя я вчера долго учился(ась), сегодня я повторю всё ещё раз.' },
  { id: 'topic7_005', topicId: 'topic7', german: 'Falls du Hilfe bei der Präsentation brauchst, unterstütze ich dich gern.', russian: 'Если тебе нужна помощь с презентацией, я с удовольствием помогу.' },
  { id: 'topic7_006', topicId: 'topic7', german: 'Nachdem der Lehrer das Thema erklärt hatte, war alles viel verständlicher.', russian: 'После того как учитель объяснил тему, всё стало намного понятнее.' },
  { id: 'topic7_007', topicId: 'topic7', german: 'Damit ich mich besser konzentrieren kann, schalte ich mein Handy aus.', russian: 'Чтобы лучше сосредоточиться, я выключаю телефон.' },
  { id: 'topic7_008', topicId: 'topic7', german: 'Da meine Kollegin krank ist, übernehme ich heute ihre Termine.', russian: 'Так как моя коллега заболела, я сегодня беру на себя её встречи.' },
  { id: 'topic7_009', topicId: 'topic7', german: 'Während ich den Bericht schreibe, sammelt mein Team noch weitere Daten.', russian: 'Пока я пишу отчёт, моя команда собирает дополнительные данные.' },
  { id: 'topic7_010', topicId: 'topic7', german: 'Sobald ich die E-Mail vom Chef bekomme, leite ich sie an dich weiter.', russian: 'Как только я получу письмо от начальника, я перешлю его тебе.' },
  { id: 'topic7_011', topicId: 'topic7', german: 'Ich bin froh, dass unser Kurs so motiviert und engagiert ist.', russian: 'Я рад(а), что наша группа такая мотивированная и увлечённая.' },
  { id: 'topic7_012', topicId: 'topic7', german: 'Wenn wir die Aufgaben aufteilen, arbeiten wir wesentlich effizienter.', russian: 'Если мы распределим задачи, мы будем работать значительно эффективнее.' },
  { id: 'topic7_013', topicId: 'topic7', german: 'Obwohl die Prüfung schwierig war, hatte ich am Ende ein gutes Gefühl.', russian: 'Хотя экзамен был сложным, в конце у меня было хорошее чувство.' },
  { id: 'topic7_014', topicId: 'topic7', german: 'Bevor ich eine Bewerbung abschicke, kontrolliere ich jeden Satz sehr genau.', russian: 'Прежде чем отправить заявление, я очень тщательно проверяю каждое предложение.' },
  { id: 'topic7_015', topicId: 'topic7', german: 'Seitdem ich regelmäßig Vokabeln lerne, spreche ich viel flüssiger.', russian: 'С тех пор как я регулярно учу слова, я говорю гораздо свободнее.' },
  { id: 'topic7_016', topicId: 'topic7', german: 'Anstatt dass ich bei Fehlern in Panik gerate, versuche ich ruhig zu bleiben.', russian: 'Вместо того чтобы паниковать при ошибках, я стараюсь оставаться спокойным(ой).' },
  { id: 'topic7_017', topicId: 'topic7', german: 'Ich möchte einen Beruf, der interessant, sinnvoll und abwechslungsreich ist.', russian: 'Я хочу профессию, которая будет интересной, осмысленной и разнообразной.' },
  { id: 'topic7_018', topicId: 'topic7', german: 'Falls der Drucker wieder streikt, sende ich das Dokument digital.', russian: 'Если принтер опять откажет, я отправлю документ в электронном виде.' },
  { id: 'topic7_019', topicId: 'topic7', german: 'Nachdem wir die Ergebnisse ausgewertet hatten, schrieben wir die Zusammenfassung.', russian: 'После того как мы проанализировали результаты, мы написали резюме.' },
  { id: 'topic7_020', topicId: 'topic7', german: 'Weil mein Deutsch noch nicht perfekt ist, übe ich jeden Tag ein bisschen.', russian: 'Так как мой немецкий ещё не идеален, я каждый день немного практикуюсь.' },
  { id: 'topic7_021', topicId: 'topic7', german: 'Solange ich klare Anweisungen bekomme, arbeite ich sehr zuverlässig.', russian: 'Пока я получаю чёткие указания, я работаю очень надёжно.' },
  { id: 'topic7_022', topicId: 'topic7', german: 'Ich frage mich, ob wir die Frist einhalten können, ohne dass wir Überstunden machen müssen.', russian: 'Мне интересно, сможем ли мы уложиться в срок без сверхурочных.' },
  { id: 'topic7_023', topicId: 'topic7', german: 'Während des Unterrichts mache ich Notizen, damit ich später besser lernen kann.', russian: 'Во время занятий я делаю заметки, чтобы потом лучше учиться.' },
  { id: 'topic7_024', topicId: 'topic7', german: 'Sobald die Sitzung beendet ist, bespreche ich die nächsten Schritte mit dem Team.', russian: 'Как только совещание закончится, я обсужу следующие шаги с командой.' },
  { id: 'topic7_025', topicId: 'topic7', german: 'Da die Fortbildung kostenlos ist, haben sich viele Kollegen angemeldet.', russian: 'Так как повышение квалификации бесплатное, многие коллеги записались.' },
  { id: 'topic7_026', topicId: 'topic7', german: 'Bevor wir die Entscheidung treffen, sollten wir alle Vor- und Nachteile abwägen.', russian: 'Прежде чем принять решение, нам стоит взвесить все за и против.' },
  { id: 'topic7_027', topicId: 'topic7', german: 'Obwohl ich zuerst unsicher war, habe ich mich schließlich beworben.', russian: 'Хотя сначала я сомневался(ась), в итоге я подал(а) заявку.' },
  { id: 'topic7_028', topicId: 'topic7', german: 'Wenn man regelmäßig übt, verbessert man seine Aussprache deutlich.', russian: 'Если регулярно практиковаться, можно значительно улучшить произношение.' },
  { id: 'topic7_029', topicId: 'topic7', german: 'Ich bin zufrieden, weil ich in letzter Zeit große Fortschritte gemacht habe.', russian: 'Я доволен(на), потому что в последнее время я сделал(а) большой прогресс.' },
  { id: 'topic7_030', topicId: 'topic7', german: 'Nachdem ich den Lebenslauf aktualisiert hatte, schickte ich sofort die Bewerbung ab.', russian: 'После того как я обновил(а) резюме, я сразу отправил(а) заявку.' },

  // === Topic 8: Здоровье, проблемы, решения ===
  { id: 'topic8_001', topicId: 'topic8', german: 'Wenn ich zu wenig schlafe, bin ich am nächsten Tag unkonzentriert.', russian: 'Если я сплю слишком мало, на следующий день мне трудно сосредоточиться.' },
  { id: 'topic8_002', topicId: 'topic8', german: 'Weil ich starke Kopfschmerzen hatte, blieb ich gestern zu Hause.', russian: 'Так как у меня была сильная головная боль, я вчера остался(ась) дома.' },
  { id: 'topic8_003', topicId: 'topic8', german: 'Bevor du Medikamente nimmst, solltest du die Packungsbeilage lesen.', russian: 'Прежде чем принимать лекарства, тебе стоит прочитать инструкцию.' },
  { id: 'topic8_004', topicId: 'topic8', german: 'Obwohl ich mich nicht ganz fit fühle, gehe ich kurz an die frische Luft.', russian: 'Хотя я чувствую себя не совсем хорошо, я ненадолго выйду на свежий воздух.' },
  { id: 'topic8_005', topicId: 'topic8', german: 'Falls die Schmerzen schlimmer werden, vereinbare ich einen Termin beim Arzt.', russian: 'Если боль усилится, я запишусь к врачу.' },
  { id: 'topic8_006', topicId: 'topic8', german: 'Nachdem ich genug Wasser getrunken hatte, ging es mir deutlich besser.', russian: 'После того как я выпил(а) достаточно воды, мне стало значительно лучше.' },
  { id: 'topic8_007', topicId: 'topic8', german: 'Damit ich gesünder lebe, versuche ich mehr Gemüse zu essen.', russian: 'Чтобы жить здоровее, я стараюсь есть больше овощей.' },
  { id: 'topic8_008', topicId: 'topic8', german: 'Da mein Rücken oft weh tut, sitze ich nicht mehr so lange am Schreibtisch.', russian: 'Так как у меня часто болит спина, я больше не сижу так долго за столом.' },
  { id: 'topic8_009', topicId: 'topic8', german: 'Während ich krank war, half mir meine Nachbarin beim Einkaufen.', russian: 'Пока я болел(а), моя соседка помогала мне с покупками.' },
  { id: 'topic8_010', topicId: 'topic8', german: 'Sobald das Fieber sinkt, kann ich vielleicht wieder arbeiten.', russian: 'Как только температура спадёт, я, возможно, снова смогу работать.' },
  { id: 'topic8_011', topicId: 'topic8', german: 'Ich suche eine Klinik, die einen guten Ruf hat und leicht erreichbar ist.', russian: 'Я ищу клинику с хорошей репутацией и удобным расположением.' },
  { id: 'topic8_012', topicId: 'topic8', german: 'Wenn ich gestresst bin, gehe ich gern spazieren.', russian: 'Когда я в стрессе, я люблю гулять.' },
  { id: 'topic8_013', topicId: 'topic8', german: 'Obwohl die Wartezeit lang war, war der Arzt sehr freundlich.', russian: 'Хотя ожидание было долгим, врач был очень дружелюбным.' },
  { id: 'topic8_014', topicId: 'topic8', german: 'Bevor die Behandlung beginnt, möchte ich noch ein paar Fragen stellen.', russian: 'Прежде чем начнётся лечение, я хотел(а) бы задать несколько вопросов.' },
  { id: 'topic8_015', topicId: 'topic8', german: 'Seitdem ich regelmäßig Sport treibe, fühle ich mich energischer.', russian: 'С тех пор как я регулярно занимаюсь спортом, я чувствую себя энергичнее.' },
  { id: 'topic8_016', topicId: 'topic8', german: 'Auch wenn die Situation unangenehm ist, sollte man offen darüber sprechen.', russian: 'Даже если ситуация неприятная, стоит говорить об этом открыто.' },
  { id: 'topic8_017', topicId: 'topic8', german: 'Ich bin erleichtert, dass die Untersuchung nichts Ernstes gezeigt hat.', russian: 'Я с облегчением узнал(а), что обследование не показало ничего серьёзного.' },
  { id: 'topic8_018', topicId: 'topic8', german: 'Falls du eine Erkältung hast, solltest du dich warm anziehen.', russian: 'Если ты простудился(ась), тебе стоит тепло одеваться.' },
  { id: 'topic8_019', topicId: 'topic8', german: 'Nachdem ich mit dem Arzt gesprochen hatte, war ich deutlich beruhigter.', russian: 'После разговора с врачом я значительно успокоился(ась).' },
  { id: 'topic8_020', topicId: 'topic8', german: 'Weil die Apotheke schon geschlossen war, musste ich bis morgens warten.', russian: 'Так как аптека уже была закрыта, мне пришлось ждать до утра.' },
  { id: 'topic8_021', topicId: 'topic8', german: 'Solange ich mich erhole, vermeide ich anstrengende Aktivitäten.', russian: 'Пока я восстанавливаюсь, я избегаю напряжённой деятельности.' },
  { id: 'topic8_022', topicId: 'topic8', german: 'Wenn du magst, begleite ich dich zum Termin.', russian: 'Если хочешь, я провожу тебя на приём.' },
  { id: 'topic8_023', topicId: 'topic8', german: 'Obwohl das Essen gesund ist, schmeckt es nicht immer besonders gut.', russian: 'Хотя еда полезная, она не всегда особенно вкусная.' },
  { id: 'topic8_024', topicId: 'topic8', german: 'Ich versuche, früher schlafen zu gehen, damit ich morgens frischer bin.', russian: 'Я стараюсь ложиться спать раньше, чтобы утром быть бодрее.' },
  { id: 'topic8_025', topicId: 'topic8', german: 'Da ich mich verletzt habe, kann ich diese Woche nicht trainieren.', russian: 'Так как я получил(а) травму, на этой неделе я не могу тренироваться.' },
  { id: 'topic8_026', topicId: 'topic8', german: 'Bevor ich wieder zur Arbeit gehe, möchte ich ganz gesund sein.', russian: 'Прежде чем вернуться на работу, я хочу полностью выздороветь.' },
  { id: 'topic8_027', topicId: 'topic8', german: 'Während der Untersuchung erklärte mir die Ärztin jeden Schritt ganz ruhig.', russian: 'Во время обследования врач спокойно объясняла мне каждый шаг.' },
  { id: 'topic8_028', topicId: 'topic8', german: 'Sobald ich die Ergebnisse bekomme, informiere ich meine Familie.', russian: 'Как только я получу результаты, я сообщу своей семье.' },
  { id: 'topic8_029', topicId: 'topic8', german: 'Ich bin dankbar, dass ich in schwierigen Situationen Unterstützung bekomme.', russian: 'Я благодарен(на), что в сложных ситуациях я получаю поддержку.' },
  { id: 'topic8_030', topicId: 'topic8', german: 'Falls du dich überfordert fühlst, nimm dir lieber eine Pause.', russian: 'Если чувствуешь перегрузку, лучше сделай перерыв.' },

  // === Topic 9: Мнение, обсуждение, разговорная часть ===
  { id: 'topic9_001', topicId: 'topic9', german: 'Ich finde, dass eine gute Planung viele Probleme vermeiden kann.', russian: 'Я считаю, что хорошее планирование может предотвратить многие проблемы.' },
  { id: 'topic9_002', topicId: 'topic9', german: 'Weil mir Nachhaltigkeit wichtig ist, kaufe ich möglichst regionale Produkte.', russian: 'Так как для меня важна экологичность, я стараюсь покупать местные продукты.' },
  { id: 'topic9_003', topicId: 'topic9', german: 'Wenn man höflich bleibt, kann man auch schwierige Themen ruhig besprechen.', russian: 'Если оставаться вежливым, можно спокойно обсуждать даже сложные темы.' },
  { id: 'topic9_004', topicId: 'topic9', german: 'Obwohl wir unterschiedliche Meinungen haben, respektiere ich deinen Standpunkt.', russian: 'Хотя у нас разные мнения, я уважаю твою точку зрения.' },
  { id: 'topic9_005', topicId: 'topic9', german: 'Bevor ich etwas beurteile, versuche ich alle Informationen zu sammeln.', russian: 'Прежде чем что-то оценивать, я стараюсь собрать всю информацию.' },
  { id: 'topic9_006', topicId: 'topic9', german: 'Nachdem ich länger darüber nachgedacht hatte, änderte ich meine Meinung.', russian: 'После того как я дольше подумал(а) об этом, я изменил(а) своё мнение.' },
  { id: 'topic9_007', topicId: 'topic9', german: 'Indem man gut zuhört, kann man ein Gespräch viel angenehmer machen.', russian: 'Внимательно слушая, можно сделать разговор гораздо приятнее.' },
  { id: 'topic9_008', topicId: 'topic9', german: 'Da das Thema ziemlich komplex ist, gibt es keine einfache Lösung.', russian: 'Так как тема довольно сложная, простого решения нет.' },
  { id: 'topic9_009', topicId: 'topic9', german: 'Während einige Leute lieber sparen, geben andere ihr Geld sofort aus.', russian: 'В то время как одни предпочитают копить, другие сразу тратят деньги.' },
  { id: 'topic9_010', topicId: 'topic9', german: 'Sobald ich mehr darüber weiß, kann ich dir eine klare Antwort geben.', russian: 'Как только я узнаю больше, я смогу дать тебе чёткий ответ.' },
  { id: 'topic9_011', topicId: 'topic9', german: 'Ich bin überzeugt, dass regelmäßige Bewegung wichtig für die Gesundheit ist.', russian: 'Я убеждён(а), что регулярное движение важно для здоровья.' },
  { id: 'topic9_012', topicId: 'topic9', german: 'Wenn es nach mir geht, sollten wir öfter öffentliche Verkehrsmittel nutzen.', russian: 'Если бы решал(а) я, мы бы чаще пользовались общественным транспортом.' },
  { id: 'topic9_013', topicId: 'topic9', german: 'Obwohl soziale Medien praktisch sind, können sie auch stressig sein.', russian: 'Хотя соцсети удобны, они могут быть и стрессовыми.' },
  { id: 'topic9_014', topicId: 'topic9', german: 'Bevor wir diskutieren, sollten wir klären, worüber wir genau sprechen.', russian: 'Прежде чем дискутировать, нам стоит уточнить, о чём именно мы говорим.' },
  { id: 'topic9_015', topicId: 'topic9', german: 'Seitdem ich in einer größeren Stadt lebe, sehe ich viele Dinge anders.', russian: 'С тех пор как я живу в большом городе, я смотрю на многие вещи иначе.' },
  { id: 'topic9_016', topicId: 'topic9', german: 'Auch wenn ich deinen Punkt verstehe, bin ich nicht ganz einverstanden.', russian: 'Даже если я понимаю твою позицию, я не совсем согласен(на).' },
  { id: 'topic9_017', topicId: 'topic9', german: 'Ich denke, dass man Fehler machen darf, solange man daraus lernt.', russian: 'Я думаю, что ошибаться можно, если учишься на своих ошибках.' },
  { id: 'topic9_018', topicId: 'topic9', german: 'Falls du anderer Meinung bist, höre ich mir deine Argumente gern an.', russian: 'Если ты думаешь иначе, я с удовольствием выслушаю твои аргументы.' },
  { id: 'topic9_019', topicId: 'topic9', german: 'Nachdem alle ihre Meinung gesagt hatten, war die Atmosphäre viel entspannter, sodass wir eine Lösung finden konnten.', russian: 'После того как все высказались, атмосфера стала намного спокойнее, и мы смогли найти решение.' },
  { id: 'topic9_020', topicId: 'topic9', german: 'Weil das Wetter heute so schön ist, sind viele Menschen draußen.', russian: 'Так как сегодня такая хорошая погода, много людей на улице.' },
  { id: 'topic9_021', topicId: 'topic9', german: 'Wenn ich ehrlich bin, plane ich lieber spontan, weil ich mich dann freier fühle.', russian: 'Если честно, я предпочитаю планировать спонтанно, потому что тогда чувствую себя свободнее.' },
  { id: 'topic9_022', topicId: 'topic9', german: 'Obwohl ich Kaffee mag, trinke ich abends lieber Tee.', russian: 'Хотя я люблю кофе, по вечерам я предпочитаю чай.' },
  { id: 'topic9_023', topicId: 'topic9', german: 'Ich freue mich immer, wenn ich bekannte Gesichter in der Stadt treffe.', russian: 'Я всегда рад(а), когда встречаю знакомые лица в городе.' },
  { id: 'topic9_024', topicId: 'topic9', german: 'Da ich lange nicht dort war, hat sich die Gegend stark verändert.', russian: 'Так как я давно там не был(а), район сильно изменился.' },
  { id: 'topic9_025', topicId: 'topic9', german: 'Bevor wir über das Problem sprechen, sollten wir zuerst das Ziel festlegen.', russian: 'Прежде чем говорить о проблеме, нам стоит сначала определить цель.' },
  { id: 'topic9_026', topicId: 'topic9', german: 'Während wir reden, merke ich, dass wir in vielen Punkten ähnlich denken.', russian: 'Пока мы разговариваем, я замечаю, что во многом мы думаем похоже.' },
  { id: 'topic9_027', topicId: 'topic9', german: 'Sobald man regelmäßig spricht, verliert man schnell die Angst vor Fehlern.', russian: 'Как только начинаешь регулярно говорить, быстро перестаёшь бояться ошибок.' },
  { id: 'topic9_028', topicId: 'topic9', german: 'Ich finde Menschen sympathisch, die offen, geduldig und humorvoll sind.', russian: 'Мне симпатичны люди, которые открытые, терпеливые и с юмором.' },
  { id: 'topic9_029', topicId: 'topic9', german: 'Falls das Thema zu persönlich ist, können wir gern über etwas anderes sprechen.', russian: 'Если тема слишком личная, мы можем поговорить о чём-нибудь другом.' },
  { id: 'topic9_030', topicId: 'topic9', german: 'Nachdem das Missverständnis geklärt war, konnten wir wieder normal reden.', russian: 'После того как недоразумение прояснилось, мы снова смогли нормально общаться.' },

  // === Topic 10: Письма, запросы, жалобы, формальные фразы ===
  { id: 'topic10_001', topicId: 'topic10', german: 'Ich schreibe Ihnen, weil ich mich über Ihr Angebot informieren möchte.', russian: 'Я пишу вам, так как хотел(а) бы узнать о вашем предложении.' },
  { id: 'topic10_002', topicId: 'topic10', german: 'Da ich mich für Ihre Wohnung interessiere, hätte ich gern weitere Details.', russian: 'Так как меня интересует ваша квартира, я хотел(а) бы узнать подробности.' },
  { id: 'topic10_003', topicId: 'topic10', german: 'Könnten Sie mir bitte mitteilen, ob die Stelle noch frei ist?', russian: 'Не могли бы вы сообщить, свободна ли ещё эта вакансия?' },
  { id: 'topic10_004', topicId: 'topic10', german: 'Obwohl ich gestern schon angerufen habe, habe ich leider niemanden erreicht.', russian: 'Хотя я уже звонил(а) вчера, я, к сожалению, ни до кого не дозвонился(ась).' },
  { id: 'topic10_005', topicId: 'topic10', german: 'Bevor ich den Vertrag unterschreibe, möchte ich einige Punkte klären.', russian: 'Прежде чем подписать договор, я хотел(а) бы прояснить несколько пунктов.' },
  { id: 'topic10_006', topicId: 'topic10', german: 'Nachdem ich Ihre Anzeige gelesen hatte, war ich sofort interessiert.', russian: 'После того как я прочитал(а) ваше объявление, я сразу заинтересовался(ась).' },
  { id: 'topic10_007', topicId: 'topic10', german: 'Falls Sie zusätzliche Unterlagen benötigen, sende ich sie Ihnen gern zu.', russian: 'Если вам нужны дополнительные документы, я с удовольствием их отправлю.' },
  { id: 'topic10_008', topicId: 'topic10', german: 'Ich wäre Ihnen dankbar, wenn Sie mir kurzfristig antworten könnten.', russian: 'Я был(а) бы вам благодарен(на), если бы вы смогли ответить в ближайшее время.' },
  { id: 'topic10_009', topicId: 'topic10', german: 'Da die Lieferung beschädigt angekommen ist, möchte ich eine Reklamation einreichen.', russian: 'Так как доставка пришла повреждённой, я хотел(а) бы подать рекламацию.' },
  { id: 'topic10_010', topicId: 'topic10', german: 'Obwohl das Produkt anders beschrieben wurde, hoffe ich auf eine faire Lösung.', russian: 'Хотя товар был описан иначе, я надеюсь на справедливое решение.' },
  { id: 'topic10_011', topicId: 'topic10', german: 'Weil ich diese Woche verhindert bin, möchte ich Sie bitten, den Termin auf nächste Woche zu verschieben.', russian: 'Так как на этой неделе я занят(а), я хотел(а) бы попросить перенести встречу на следующую неделю.' },
  { id: 'topic10_012', topicId: 'topic10', german: 'Sobald ich Ihre Bestätigung erhalte, überweise ich den Betrag.', russian: 'Как только я получу ваше подтверждение, я переведу сумму.' },
  { id: 'topic10_013', topicId: 'topic10', german: 'Da ich am vereinbarten Tag verhindert bin, muss ich den Termin leider absagen.', russian: 'Так как в назначенный день я занят(а), мне, к сожалению, придётся отменить встречу.' },
  { id: 'topic10_014', topicId: 'topic10', german: 'Ich möchte mich dafür entschuldigen, dass ich mich so spät melde.', russian: 'Я хотел(а) бы извиниться за то, что отвечаю так поздно.' },
  { id: 'topic10_015', topicId: 'topic10', german: 'Damit Sie meine Anfrage bearbeiten können, finden Sie im Anhang alle wichtigen Dokumente.', russian: 'Чтобы вы могли обработать мой запрос, в приложении вы найдёте все важные документы.' },
  { id: 'topic10_016', topicId: 'topic10', german: 'Nachdem ich die Rechnung geprüft hatte, stellte ich einen Fehler fest.', russian: 'После проверки счёта я обнаружил(а) ошибку.' },
  { id: 'topic10_017', topicId: 'topic10', german: 'Falls es möglich ist, hätte ich gern einen früheren Termin.', russian: 'Если это возможно, я хотел(а) бы более ранний срок.' },
  { id: 'topic10_018', topicId: 'topic10', german: 'Ich freue mich, dass Sie sich die Zeit für mein Anliegen nehmen.', russian: 'Я рад(а), что вы уделяете время моему обращению.' },
  { id: 'topic10_019', topicId: 'topic10', german: 'Da ich mit dem Service bisher immer zufrieden war, hoffe ich auf Ihre Unterstützung.', russian: 'Так как до сих пор я всегда был(а) доволен(на) сервисом, надеюсь на вашу поддержку.' },
  { id: 'topic10_020', topicId: 'topic10', german: 'Obwohl ich Verständnis für Verzögerungen habe, brauche ich bald eine Rückmeldung.', russian: 'Хотя я с пониманием отношусь к задержкам, мне скоро нужен ответ.' },
  { id: 'topic10_021', topicId: 'topic10', german: 'Ich möchte höflich darauf hinweisen, dass meine Bestellung noch nicht angekommen ist.', russian: 'Я хотел(а) бы вежливо обратить внимание, что мой заказ ещё не пришёл.' },
  { id: 'topic10_022', topicId: 'topic10', german: 'Sobald das Problem gelöst ist, betrachte ich die Sache als erledigt.', russian: 'Как только проблема будет решена, я буду считать дело закрытым.' },
  { id: 'topic10_023', topicId: 'topic10', german: 'Weil mir die Zusammenarbeit wichtig ist, suche ich nach einer unkomplizierten Lösung.', russian: 'Так как мне важно сотрудничество, я ищу простое решение.' },
  { id: 'topic10_024', topicId: 'topic10', german: 'Ich wäre froh, wenn Sie mir schriftlich bestätigen könnten, dass meine Kündigung eingegangen ist.', russian: 'Я был(а) бы рад(а), если бы вы могли письменно подтвердить получение моего заявления об увольнении.' },
  { id: 'topic10_025', topicId: 'topic10', german: 'Bevor ich eine endgültige Entscheidung treffe, möchte ich Ihr Angebot noch vergleichen.', russian: 'Прежде чем принять окончательное решение, я хотел(а) бы ещё сравнить ваше предложение.' },
  { id: 'topic10_026', topicId: 'topic10', german: 'Nachdem ich Ihren Vorschlag gelesen hatte, hatte ich noch einige Rückfragen.', russian: 'После того как я прочитал(а) ваше предложение, у меня возникло несколько вопросов.' },
  { id: 'topic10_027', topicId: 'topic10', german: 'Falls Sie heute keine Zeit haben, können Sie mir auch morgen antworten.', russian: 'Если у вас сегодня нет времени, вы можете ответить мне и завтра.' },
  { id: 'topic10_028', topicId: 'topic10', german: 'Ich bedanke mich im Voraus, obwohl ich weiß, dass Sie gerade viel zu tun haben.', russian: 'Заранее благодарю, хотя я знаю, что у вас сейчас много дел.' },
  { id: 'topic10_029', topicId: 'topic10', german: 'Da ich Ihre Antwort dringend brauche, melde ich mich noch einmal bei Ihnen.', russian: 'Так как мне срочно нужен ваш ответ, я обращаюсь к вам ещё раз.' },
  { id: 'topic10_030', topicId: 'topic10', german: 'Ich hoffe, dass wir das Missverständnis schnell klären können.', russian: 'Я надеюсь, что мы сможем быстро прояснить недоразумение.' },

  // === Topic 11: Важные глаголы B1 (100 шт.) ===
  { id: 'topic11_001', topicId: 'topic11', german: 'verhandeln', russian: 'вести переговоры · verhandelte, hat verhandelt', examples: [
    { german: 'Wir verhandeln gerade über einen neuen Vertrag.', russian: 'Мы сейчас ведём переговоры о новом контракте.' },
    { german: 'Der Chef hat lange mit dem Kunden verhandelt.', russian: 'Начальник долго вёл переговоры с клиентом.' },
  ] },
  { id: 'topic11_002', topicId: 'topic11', german: 'bewältigen', russian: 'справляться (с Akk) · bewältigte, hat bewältigt', examples: [
    { german: 'Ich hoffe, dass ich diese Aufgabe allein bewältigen kann.', russian: 'Надеюсь, я смогу справиться с этой задачей сам(а).' },
    { german: 'Sie hat den Stress in der Prüfung gut bewältigt.', russian: 'Она хорошо справилась со стрессом на экзамене.' },
  ] },
  { id: 'topic11_003', topicId: 'topic11', german: 'ermöglichen', russian: 'делать возможным, позволять · ermöglichte, hat ermöglicht', examples: [
    { german: 'Das neue Programm ermöglicht es mir, von zu Hause zu arbeiten.', russian: 'Новая программа позволяет мне работать из дома.' },
    { german: 'Dank des Stipendiums wurde mir das Studium ermöglicht.', russian: 'Благодаря стипендии у меня появилась возможность учиться.' },
  ] },
  { id: 'topic11_004', topicId: 'topic11', german: 'berücksichtigen', russian: 'учитывать, принимать во внимание · berücksichtigte, hat berücksichtigt', examples: [
    { german: 'Bitte berücksichtigen Sie meine Vorschläge bei der Planung.', russian: 'Пожалуйста, учтите мои предложения при планировании.' },
    { german: 'Bei der Entscheidung müssen wir auch die Kosten berücksichtigen.', russian: 'При принятии решения мы должны учитывать и расходы.' },
  ] },
  { id: 'topic11_005', topicId: 'topic11', german: 'vereinbaren', russian: 'договариваться (о чём-л.) · vereinbarte, hat vereinbart', examples: [
    { german: 'Können wir einen Termin für nächste Woche vereinbaren?', russian: 'Можем договориться о встрече на следующей неделе?' },
    { german: 'Wir haben vereinbart, uns um drei Uhr am Bahnhof zu treffen.', russian: 'Мы договорились встретиться в три часа на вокзале.' },
  ] },
  { id: 'topic11_006', topicId: 'topic11', german: 'verschieben', russian: 'переносить, откладывать · verschob, hat verschoben', examples: [
    { german: 'Ich muss unser Treffen leider auf morgen verschieben.', russian: 'К сожалению, мне придётся перенести нашу встречу на завтра.' },
    { german: 'Verschiebe nicht alles auf später.', russian: 'Не откладывай всё на потом.' },
  ] },
  { id: 'topic11_007', topicId: 'topic11', german: 'erledigen', russian: 'выполнять, улаживать · erledigte, hat erledigt', examples: [
    { german: 'Ich muss heute noch ein paar Sachen erledigen.', russian: 'Мне сегодня ещё нужно сделать несколько дел.' },
    { german: 'Die Arbeit ist schon erledigt.', russian: 'Работа уже сделана.' },
  ] },
  { id: 'topic11_008', topicId: 'topic11', german: 'beantragen', russian: 'подавать заявление · beantragte, hat beantragt', examples: [
    { german: 'Sie hat einen neuen Pass beantragt.', russian: 'Она подала заявление на новый паспорт.' },
    { german: 'Man kann das Visum online beantragen.', russian: 'Визу можно оформить онлайн.' },
  ] },
  { id: 'topic11_009', topicId: 'topic11', german: 'sich beschäftigen mit', russian: 'заниматься чем-л. · beschäftigte, hat beschäftigt', examples: [
    { german: 'In meiner Freizeit beschäftige ich mich mit Fotografie.', russian: 'В свободное время я занимаюсь фотографией.' },
    { german: 'Er beschäftigt sich seit Jahren mit deutscher Geschichte.', russian: 'Он уже много лет занимается немецкой историей.' },
  ] },
  { id: 'topic11_010', topicId: 'topic11', german: 'verzichten auf + Akk', russian: 'отказываться (от чего-л.) · verzichtete, hat verzichtet', examples: [
    { german: 'Ich verzichte gern auf Zucker.', russian: 'Я с удовольствием отказываюсь от сахара.' },
    { german: 'Auf Urlaub möchte ich auf keinen Fall verzichten.', russian: 'От отпуска я точно не хочу отказываться.' },
  ] },
  { id: 'topic11_011', topicId: 'topic11', german: 'vermeiden', russian: 'избегать · vermied, hat vermieden', examples: [
    { german: 'Versuche, typische Fehler zu vermeiden.', russian: 'Старайся избегать типичных ошибок.' },
    { german: 'Ich vermeide es, spät zu essen.', russian: 'Я избегаю есть поздно.' },
  ] },
  { id: 'topic11_012', topicId: 'topic11', german: 'entscheiden', russian: 'решать · entschied, hat entschieden', examples: [
    { german: 'Du musst selbst entscheiden, was du willst.', russian: 'Ты сам(а) должен(на) решить, чего хочешь.' },
    { german: 'Wir haben uns für die günstigere Variante entschieden.', russian: 'Мы решились на более дешёвый вариант.' },
  ] },
  { id: 'topic11_013', topicId: 'topic11', german: 'erkennen', russian: 'узнавать, распознавать · erkannte, hat erkannt', examples: [
    { german: 'Ich habe dich sofort an deiner Stimme erkannt.', russian: 'Я тебя сразу узнал(а) по голосу.' },
    { german: 'Er erkennt seine Fehler leider nicht.', russian: 'Он, к сожалению, не признаёт своих ошибок.' },
  ] },
  { id: 'topic11_014', topicId: 'topic11', german: 'betrachten', russian: 'рассматривать · betrachtete, hat betrachtet', examples: [
    { german: 'Ich betrachte das Problem aus einer anderen Perspektive.', russian: 'Я рассматриваю проблему с другой точки зрения.' },
    { german: 'Sie betrachtete das Bild lange.', russian: 'Она долго рассматривала картину.' },
  ] },
  { id: 'topic11_015', topicId: 'topic11', german: 'ablehnen', russian: 'отклонять, отказывать · lehnte ab, hat abgelehnt', examples: [
    { german: 'Er hat mein Angebot leider abgelehnt.', russian: 'К сожалению, он отклонил моё предложение.' },
    { german: 'Ich lehne es ab, am Wochenende zu arbeiten.', russian: 'Я отказываюсь работать по выходным.' },
  ] },
  { id: 'topic11_016', topicId: 'topic11', german: 'zustimmen', russian: 'соглашаться · stimmte zu, hat zugestimmt', examples: [
    { german: 'Ich stimme dir völlig zu.', russian: 'Я с тобой полностью согласен(на).' },
    { german: 'Der Chef hat meinem Vorschlag zugestimmt.', russian: 'Начальник согласился с моим предложением.' },
  ] },
  { id: 'topic11_017', topicId: 'topic11', german: 'bedauern', russian: 'сожалеть · bedauerte, hat bedauert', examples: [
    { german: 'Ich bedaure, dass ich nicht kommen kann.', russian: 'Мне жаль, что я не могу прийти.' },
    { german: 'Sie bedauerte ihre Entscheidung später sehr.', russian: 'Позже она очень пожалела о своём решении.' },
  ] },
  { id: 'topic11_018', topicId: 'topic11', german: 'behaupten', russian: 'утверждать · behauptete, hat behauptet', examples: [
    { german: 'Er behauptet, er habe nichts gesehen.', russian: 'Он утверждает, что ничего не видел.' },
    { german: 'Viele behaupten, dass das Klima sich verändert.', russian: 'Многие утверждают, что климат меняется.' },
  ] },
  { id: 'topic11_019', topicId: 'topic11', german: 'erwähnen', russian: 'упоминать · erwähnte, hat erwähnt', examples: [
    { german: 'Ich möchte noch kurz erwähnen, dass wir wenig Zeit haben.', russian: 'Я хотел(а) бы ещё коротко упомянуть, что у нас мало времени.' },
    { german: 'Sie hat deinen Namen mehrmals erwähnt.', russian: 'Она несколько раз упомянула твоё имя.' },
  ] },
  { id: 'topic11_020', topicId: 'topic11', german: 'vorschlagen', russian: 'предлагать · schlug vor, hat vorgeschlagen', examples: [
    { german: 'Ich schlage vor, dass wir früher anfangen.', russian: 'Я предлагаю начать пораньше.' },
    { german: 'Was schlägst du vor?', russian: 'Что ты предлагаешь?' },
  ] },
  { id: 'topic11_021', topicId: 'topic11', german: 'empfehlen', russian: 'рекомендовать · empfahl, hat empfohlen', examples: [
    { german: 'Ich kann dir dieses Restaurant sehr empfehlen.', russian: 'Я могу тебе очень рекомендовать этот ресторан.' },
    { german: 'Der Arzt hat mir viel Ruhe empfohlen.', russian: 'Врач посоветовал мне много отдыхать.' },
  ] },
  { id: 'topic11_022', topicId: 'topic11', german: 'überzeugen', russian: 'убеждать · überzeugte, hat überzeugt', examples: [
    { german: 'Du musst mich erst einmal überzeugen.', russian: 'Тебе сначала нужно меня убедить.' },
    { german: 'Sein Argument hat mich nicht überzeugt.', russian: 'Его аргумент меня не убедил.' },
  ] },
  { id: 'topic11_023', topicId: 'topic11', german: 'beeinflussen', russian: 'влиять · beeinflusste, hat beeinflusst', examples: [
    { german: 'Das Wetter beeinflusst meine Stimmung stark.', russian: 'Погода сильно влияет на моё настроение.' },
    { german: 'Er lässt sich leicht beeinflussen.', russian: 'Он легко поддаётся влиянию.' },
  ] },
  { id: 'topic11_024', topicId: 'topic11', german: 'erwarten', russian: 'ожидать · erwartete, hat erwartet', examples: [
    { german: 'Wir erwarten dich um sechs Uhr.', russian: 'Мы ждём тебя в шесть часов.' },
    { german: 'Ich hatte mehr von diesem Film erwartet.', russian: 'От этого фильма я ожидал(а) большего.' },
  ] },
  { id: 'topic11_025', topicId: 'topic11', german: 'befürchten', russian: 'опасаться · befürchtete, hat befürchtet', examples: [
    { german: 'Ich befürchte, dass wir zu spät kommen.', russian: 'Боюсь, что мы опоздаем.' },
    { german: 'Das Schlimmste ist zu befürchten.', russian: 'Стоит опасаться худшего.' },
  ] },
  { id: 'topic11_026', topicId: 'topic11', german: 'versprechen', russian: 'обещать · versprach, hat versprochen', examples: [
    { german: 'Du hast mir versprochen, pünktlich zu sein.', russian: 'Ты обещал(а) мне прийти вовремя.' },
    { german: 'Ich verspreche, es nicht zu vergessen.', russian: 'Обещаю не забыть.' },
  ] },
  { id: 'topic11_027', topicId: 'topic11', german: 'mitteilen', russian: 'сообщать · teilte mit, hat mitgeteilt', examples: [
    { german: 'Bitte teilen Sie mir das Ergebnis mit.', russian: 'Пожалуйста, сообщите мне результат.' },
    { german: 'Er hat uns seine Entscheidung schriftlich mitgeteilt.', russian: 'Он сообщил нам своё решение письменно.' },
  ] },
  { id: 'topic11_028', topicId: 'topic11', german: 'beschreiben', russian: 'описывать · beschrieb, hat beschrieben', examples: [
    { german: 'Kannst du mir den Weg zum Bahnhof beschreiben?', russian: 'Можешь описать мне дорогу до вокзала?' },
    { german: 'Sie hat den Unfall genau beschrieben.', russian: 'Она подробно описала аварию.' },
  ] },
  { id: 'topic11_029', topicId: 'topic11', german: 'erklären', russian: 'объяснять · erklärte, hat erklärt', examples: [
    { german: 'Kannst du mir das noch einmal erklären?', russian: 'Можешь мне это ещё раз объяснить?' },
    { german: 'Der Lehrer erklärt immer sehr deutlich.', russian: 'Учитель всегда очень понятно объясняет.' },
  ] },
  { id: 'topic11_030', topicId: 'topic11', german: 'bestätigen', russian: 'подтверждать · bestätigte, hat bestätigt', examples: [
    { german: 'Bitte bestätigen Sie den Termin per E-Mail.', russian: 'Пожалуйста, подтвердите встречу по электронной почте.' },
    { german: 'Ich kann die Buchung leider nicht bestätigen.', russian: 'К сожалению, я не могу подтвердить бронирование.' },
  ] },
  { id: 'topic11_031', topicId: 'topic11', german: 'widersprechen', russian: 'возражать · widersprach, hat widersprochen', examples: [
    { german: 'Ich widerspreche dir ungern, aber das stimmt nicht.', russian: 'Я неохотно с тобой спорю, но это неправда.' },
    { german: 'Sein Verhalten widerspricht seinen Worten.', russian: 'Его поведение противоречит его словам.' },
  ] },
  { id: 'topic11_032', topicId: 'topic11', german: 'begründen', russian: 'обосновывать · begründete, hat begründet', examples: [
    { german: 'Begründen Sie bitte Ihre Entscheidung.', russian: 'Обоснуйте, пожалуйста, своё решение.' },
    { german: 'Ich kann nicht genau begründen, warum ich das gemacht habe.', russian: 'Я не могу точно обосновать, почему я это сделал(а).' },
  ] },
  { id: 'topic11_033', topicId: 'topic11', german: 'bemerken', russian: 'замечать · bemerkte, hat bemerkt', examples: [
    { german: 'Ich habe gar nicht bemerkt, dass du schon da bist.', russian: 'Я вообще не заметил(а), что ты уже здесь.' },
    { german: 'Hast du den Unterschied bemerkt?', russian: 'Ты заметил(а) разницу?' },
  ] },
  { id: 'topic11_034', topicId: 'topic11', german: 'beobachten', russian: 'наблюдать · beobachtete, hat beobachtet', examples: [
    { german: 'Ich beobachte gerne Menschen im Café.', russian: 'Я люблю наблюдать за людьми в кафе.' },
    { german: 'Der Arzt beobachtet den Patienten seit einer Woche.', russian: 'Врач наблюдает за пациентом уже неделю.' },
  ] },
  { id: 'topic11_035', topicId: 'topic11', german: 'benötigen', russian: 'нуждаться · benötigte, hat benötigt', examples: [
    { german: 'Ich benötige noch etwas Zeit.', russian: 'Мне нужно ещё немного времени.' },
    { german: 'Für das Projekt benötigen wir neue Ideen.', russian: 'Для проекта нам нужны новые идеи.' },
  ] },
  { id: 'topic11_036', topicId: 'topic11', german: 'verwenden', russian: 'использовать, применять · verwendete, hat verwendet', examples: [
    { german: 'Welche Zutaten verwendest du für den Kuchen?', russian: 'Какие ингредиенты ты используешь для торта?' },
    { german: 'Dieses Wort wird nicht mehr oft verwendet.', russian: 'Это слово больше не часто используется.' },
  ] },
  { id: 'topic11_037', topicId: 'topic11', german: 'herstellen', russian: 'производить, изготавливать · stellte her, hat hergestellt', examples: [
    { german: 'Diese Firma stellt Möbel aus Holz her.', russian: 'Эта фирма производит мебель из дерева.' },
    { german: 'Das Produkt wird in Deutschland hergestellt.', russian: 'Продукт производится в Германии.' },
  ] },
  { id: 'topic11_038', topicId: 'topic11', german: 'entwickeln', russian: 'развивать, разрабатывать · entwickelte, hat entwickelt', examples: [
    { german: 'Sie entwickeln gerade eine neue App.', russian: 'Они сейчас разрабатывают новое приложение.' },
    { german: 'Das Kind entwickelt sich sehr schnell.', russian: 'Ребёнок очень быстро развивается.' },
  ] },
  { id: 'topic11_039', topicId: 'topic11', german: 'verbessern', russian: 'улучшать · verbesserte, hat verbessert', examples: [
    { german: 'Ich möchte mein Deutsch verbessern.', russian: 'Я хочу улучшить свой немецкий.' },
    { german: 'Durch viel Übung hat sich alles verbessert.', russian: 'Благодаря практике всё улучшилось.' },
  ] },
  { id: 'topic11_040', topicId: 'topic11', german: 'verändern', russian: 'изменять · veränderte, hat verändert', examples: [
    { german: 'Diese Reise hat mein Leben stark verändert.', russian: 'Это путешествие сильно изменило мою жизнь.' },
    { german: 'In letzter Zeit hat sich viel verändert.', russian: 'В последнее время многое изменилось.' },
  ] },
  { id: 'topic11_041', topicId: 'topic11', german: 'erhöhen', russian: 'повышать · erhöhte, hat erhöht', examples: [
    { german: 'Die Miete wird um zehn Prozent erhöht.', russian: 'Аренду повысят на десять процентов.' },
    { german: 'Wir müssen unsere Produktivität erhöhen.', russian: 'Нам нужно повысить производительность.' },
  ] },
  { id: 'topic11_042', topicId: 'topic11', german: 'verringern', russian: 'уменьшать, сокращать · verringerte, hat verringert', examples: [
    { german: 'Die Firma will die Kosten verringern.', russian: 'Фирма хочет сократить расходы.' },
    { german: 'Die Gefahr hat sich deutlich verringert.', russian: 'Опасность значительно уменьшилась.' },
  ] },
  { id: 'topic11_043', topicId: 'topic11', german: 'verursachen', russian: 'вызывать, быть причиной · verursachte, hat verursacht', examples: [
    { german: 'Der Sturm hat große Schäden verursacht.', russian: 'Буря нанесла большой ущерб.' },
    { german: 'Stress verursacht oft Kopfschmerzen.', russian: 'Стресс часто вызывает головную боль.' },
  ] },
  { id: 'topic11_044', topicId: 'topic11', german: 'erhalten', russian: 'получать; сохранять · erhielt, hat erhalten', examples: [
    { german: 'Ich habe deinen Brief gestern erhalten.', russian: 'Я получил(а) твоё письмо вчера.' },
    { german: 'Wir möchten die alten Gebäude erhalten.', russian: 'Мы хотим сохранить старые здания.' },
  ] },
  { id: 'topic11_045', topicId: 'topic11', german: 'erreichen', russian: 'достигать · erreichte, hat erreicht', examples: [
    { german: 'Wir haben unser Ziel endlich erreicht.', russian: 'Мы наконец достигли нашей цели.' },
    { german: 'Du kannst mich unter dieser Nummer erreichen.', russian: 'По этому номеру ты можешь со мной связаться.' },
  ] },
  { id: 'topic11_046', topicId: 'topic11', german: 'gelingen', russian: 'удаваться · gelang, ist gelungen', examples: [
    { german: 'Mir ist der Kuchen gut gelungen.', russian: 'Торт у меня хорошо получился.' },
    { german: 'Es ist ihm gelungen, die Prüfung zu bestehen.', russian: 'Ему удалось сдать экзамен.' },
  ] },
  { id: 'topic11_047', topicId: 'topic11', german: 'aufgeben', russian: 'бросать, сдаваться · gab auf, hat aufgegeben', examples: [
    { german: 'Gib nicht so schnell auf!', russian: 'Не сдавайся так быстро!' },
    { german: 'Ich habe das Rauchen aufgegeben.', russian: 'Я бросил(а) курить.' },
  ] },
  { id: 'topic11_048', topicId: 'topic11', german: 'einrichten', russian: 'обустраивать, устанавливать · richtete ein, hat eingerichtet', examples: [
    { german: 'Wir haben unsere neue Wohnung schön eingerichtet.', russian: 'Мы красиво обустроили нашу новую квартиру.' },
    { german: 'Kannst du das WLAN für mich einrichten?', russian: 'Можешь настроить мне Wi-Fi?' },
  ] },
  { id: 'topic11_049', topicId: 'topic11', german: 'anbieten', russian: 'предлагать · bot an, hat angeboten', examples: [
    { german: 'Darf ich Ihnen einen Kaffee anbieten?', russian: 'Можно предложить вам кофе?' },
    { german: 'Die Firma bietet viele interessante Stellen an.', russian: 'Фирма предлагает много интересных вакансий.' },
  ] },
  { id: 'topic11_050', topicId: 'topic11', german: 'ausprobieren', russian: 'пробовать, испытывать · probierte aus, hat ausprobiert', examples: [
    { german: 'Ich möchte dieses Rezept einmal ausprobieren.', russian: 'Я хочу как-нибудь попробовать этот рецепт.' },
    { german: 'Hast du die neue App schon ausprobiert?', russian: 'Ты уже пробовал(а) новое приложение?' },
  ] },
  { id: 'topic11_051', topicId: 'topic11', german: 'sich bewerben um + Akk', russian: 'подавать заявку на (работу) · bewarb, hat beworben', examples: [
    { german: 'Ich bewerbe mich um einen Studienplatz in München.', russian: 'Я подаю заявку на учёбу в Мюнхене.' },
    { german: 'Sie hat sich um die Stelle beworben.', russian: 'Она подала заявку на эту должность.' },
  ] },
  { id: 'topic11_052', topicId: 'topic11', german: 'sich beschweren über + Akk', russian: 'жаловаться · beschwerte, hat beschwert', examples: [
    { german: 'Der Kunde beschwert sich über den Service.', russian: 'Клиент жалуется на сервис.' },
    { german: 'Ich möchte mich nicht beschweren, aber das Essen war kalt.', russian: 'Не хочу жаловаться, но еда была холодной.' },
  ] },
  { id: 'topic11_053', topicId: 'topic11', german: 'sich erkundigen nach + Dat', russian: 'справляться, узнавать · erkundigte, hat erkundigt', examples: [
    { german: 'Ich habe mich nach dem Preis erkundigt.', russian: 'Я справился(лась) о цене.' },
    { german: 'Er hat sich nach deiner Gesundheit erkundigt.', russian: 'Он справлялся о твоём здоровье.' },
  ] },
  { id: 'topic11_054', topicId: 'topic11', german: 'sich kümmern um + Akk', russian: 'заботиться о · kümmerte, hat gekümmert', examples: [
    { german: 'Ich kümmere mich um die Organisation der Feier.', russian: 'Я занимаюсь организацией праздника.' },
    { german: 'Wer kümmert sich heute um den Hund?', russian: 'Кто сегодня заботится о собаке?' },
  ] },
  { id: 'topic11_055', topicId: 'topic11', german: 'sich ärgern über + Akk', russian: 'злиться на · ärgerte, hat geärgert', examples: [
    { german: 'Ich ärgere mich über den Stau.', russian: 'Я злюсь из-за пробки.' },
    { german: 'Über solche Fehler ärgere ich mich immer.', russian: 'Из-за таких ошибок я всегда злюсь.' },
  ] },
  { id: 'topic11_056', topicId: 'topic11', german: 'sich erinnern an + Akk', russian: 'помнить, вспоминать · erinnerte, hat erinnert', examples: [
    { german: 'Erinnerst du dich noch an unseren ersten Urlaub?', russian: 'Ты ещё помнишь наш первый отпуск?' },
    { german: 'Ich kann mich an seinen Namen nicht erinnern.', russian: 'Я не могу вспомнить его имя.' },
  ] },
  { id: 'topic11_057', topicId: 'topic11', german: 'sich entschuldigen für + Akk', russian: 'извиняться за · entschuldigte, hat entschuldigt', examples: [
    { german: 'Ich möchte mich für die Verspätung entschuldigen.', russian: 'Я хотел(а) бы извиниться за опоздание.' },
    { german: 'Er hat sich bei mir für sein Verhalten entschuldigt.', russian: 'Он извинился передо мной за своё поведение.' },
  ] },
  { id: 'topic11_058', topicId: 'topic11', german: 'sich beeilen', russian: 'торопиться · beeilte, hat beeilt', examples: [
    { german: 'Beeil dich, sonst verpassen wir den Zug!', russian: 'Поторопись, а то мы опоздаем на поезд!' },
    { german: 'Ich habe mich beeilt, aber es hat nicht gereicht.', russian: 'Я торопился(лась), но этого не хватило.' },
  ] },
  { id: 'topic11_059', topicId: 'topic11', german: 'sich verlaufen', russian: 'заблудиться (пешком) · verlief, hat verlaufen', examples: [
    { german: 'In der Altstadt habe ich mich völlig verlaufen.', russian: 'В старом городе я совсем заблудился/лась.' },
    { german: 'Man kann sich in diesem Wald leicht verlaufen.', russian: 'В этом лесу легко заблудиться.' },
  ] },
  { id: 'topic11_060', topicId: 'topic11', german: 'sich unterhalten', russian: 'беседовать; развлекаться · unterhielt, hat unterhalten', examples: [
    { german: 'Wir haben uns den ganzen Abend gut unterhalten.', russian: 'Мы хорошо провели весь вечер в беседе.' },
    { german: 'Ich würde mich gern mal wieder mit dir unterhalten.', russian: 'Я бы с радостью снова с тобой пообщался(лась).' },
  ] },
  { id: 'topic11_061', topicId: 'topic11', german: 'sich verabreden', russian: 'договариваться о встрече · verabredete, hat verabredet', examples: [
    { german: 'Wir haben uns für Samstag verabredet.', russian: 'Мы договорились встретиться в субботу.' },
    { german: 'Sollen wir uns zum Kaffee verabreden?', russian: 'Давай договоримся выпить кофе?' },
  ] },
  { id: 'topic11_062', topicId: 'topic11', german: 'sich entschließen', russian: 'решаться · entschloss, hat entschlossen', examples: [
    { german: 'Ich habe mich entschlossen, ein Praktikum zu machen.', russian: 'Я решил(а) пройти стажировку.' },
    { german: 'Nach langem Überlegen entschloss er sich zu gehen.', russian: 'После долгих раздумий он решил уйти.' },
  ] },
  { id: 'topic11_063', topicId: 'topic11', german: 'sich interessieren für + Akk', russian: 'интересоваться · interessierte, hat interessiert', examples: [
    { german: 'Ich interessiere mich sehr für Geschichte.', russian: 'Я очень интересуюсь историей.' },
    { german: 'Interessierst du dich für Politik?', russian: 'Ты интересуешься политикой?' },
  ] },
  { id: 'topic11_064', topicId: 'topic11', german: 'sich verlassen auf + Akk', russian: 'полагаться на · verließ, hat verlassen', examples: [
    { german: 'Du kannst dich auf mich verlassen.', russian: 'Ты можешь на меня положиться.' },
    { german: 'Ich verlasse mich auf dein Versprechen.', russian: 'Я полагаюсь на твоё обещание.' },
  ] },
  { id: 'topic11_065', topicId: 'topic11', german: 'sich gewöhnen an + Akk', russian: 'привыкать к · gewöhnte, hat gewöhnt', examples: [
    { german: 'An das Wetter hier habe ich mich noch nicht gewöhnt.', russian: 'Я ещё не привык(ла) к здешней погоде.' },
    { german: 'Man gewöhnt sich schnell an neue Routinen.', russian: 'К новым привычкам быстро привыкаешь.' },
  ] },
  { id: 'topic11_066', topicId: 'topic11', german: 'sich vorstellen', russian: 'представлять (себе / себя) · stellte vor, hat vorgestellt', examples: [
    { german: 'Darf ich mich kurz vorstellen?', russian: 'Можно мне коротко представиться?' },
    { german: 'Ich kann mir nicht vorstellen, dass das stimmt.', russian: 'Мне сложно представить, что это правда.' },
  ] },
  { id: 'topic11_067', topicId: 'topic11', german: 'auffallen', russian: 'бросаться в глаза · fiel auf, ist aufgefallen', examples: [
    { german: 'Ist dir etwas Ungewöhnliches aufgefallen?', russian: 'Тебе что-нибудь необычное бросилось в глаза?' },
    { german: 'Er fällt mit seiner Kleidung immer auf.', russian: 'Он всегда выделяется своей одеждой.' },
  ] },
  { id: 'topic11_068', topicId: 'topic11', german: 'feststellen', russian: 'устанавливать, констатировать · stellte fest, hat festgestellt', examples: [
    { german: 'Ich habe festgestellt, dass mein Geldbeutel weg ist.', russian: 'Я обнаружил(а), что мой кошелёк пропал.' },
    { german: 'Der Arzt stellte eine leichte Erkältung fest.', russian: 'Врач констатировал лёгкую простуду.' },
  ] },
  { id: 'topic11_069', topicId: 'topic11', german: 'vorkommen', russian: 'случаться, встречаться · kam vor, ist vorgekommen', examples: [
    { german: 'So etwas ist mir noch nie vorgekommen.', russian: 'Такого со мной ещё никогда не случалось.' },
    { german: 'Solche Probleme kommen leider oft vor.', russian: 'Такие проблемы, к сожалению, часто случаются.' },
  ] },
  { id: 'topic11_070', topicId: 'topic11', german: 'stattfinden', russian: 'состояться, проходить · fand statt, hat stattgefunden', examples: [
    { german: 'Die Hochzeit findet im Juni statt.', russian: 'Свадьба состоится в июне.' },
    { german: 'Das Konzert hat gestern stattgefunden.', russian: 'Концерт состоялся вчера.' },
  ] },
  { id: 'topic11_071', topicId: 'topic11', german: 'teilnehmen an + Dat', russian: 'принимать участие · nahm teil, hat teilgenommen', examples: [
    { german: 'Ich nehme an einem Sprachkurs teil.', russian: 'Я хожу на языковые курсы.' },
    { german: 'Viele Schüler haben an dem Projekt teilgenommen.', russian: 'Много учеников приняли участие в проекте.' },
  ] },
  { id: 'topic11_072', topicId: 'topic11', german: 'beitragen zu + Dat', russian: 'вносить вклад, способствовать · trug bei, hat beigetragen', examples: [
    { german: 'Jeder kann zum Umweltschutz beitragen.', russian: 'Каждый может внести вклад в защиту окружающей среды.' },
    { german: 'Seine Hilfe hat viel zum Erfolg beigetragen.', russian: 'Его помощь сильно способствовала успеху.' },
  ] },
  { id: 'topic11_073', topicId: 'topic11', german: 'verlangen', russian: 'требовать · verlangte, hat verlangt', examples: [
    { german: 'Der Kunde verlangt sein Geld zurück.', russian: 'Клиент требует свои деньги обратно.' },
    { german: 'Das verlangt viel Geduld.', russian: 'Это требует много терпения.' },
  ] },
  { id: 'topic11_074', topicId: 'topic11', german: 'fordern', russian: 'требовать · forderte, hat gefordert', examples: [
    { german: 'Die Arbeiter fordern höhere Löhne.', russian: 'Рабочие требуют повышения зарплаты.' },
    { german: 'Sie forderte eine klare Erklärung.', russian: 'Она потребовала чёткого объяснения.' },
  ] },
  { id: 'topic11_075', topicId: 'topic11', german: 'fördern', russian: 'поддерживать, спонсировать · förderte, hat gefördert', examples: [
    { german: 'Der Staat fördert junge Familien.', russian: 'Государство поддерживает молодые семьи.' },
    { german: 'Das Programm fördert die Kreativität der Kinder.', russian: 'Программа развивает креативность детей.' },
  ] },
  { id: 'topic11_076', topicId: 'topic11', german: 'überlegen', russian: 'размышлять, обдумывать · überlegte, hat überlegt', examples: [
    { german: 'Ich muss noch kurz überlegen.', russian: 'Мне нужно ещё немного подумать.' },
    { german: 'Überleg dir das gut!', russian: 'Хорошо подумай об этом!' },
  ] },
  { id: 'topic11_077', topicId: 'topic11', german: 'überreden', russian: 'уговаривать · überredete, hat überredet', examples: [
    { german: 'Sie hat mich überredet mitzukommen.', russian: 'Она уговорила меня пойти с ней.' },
    { german: 'Lass dich nicht so leicht überreden.', russian: 'Не давай себя так легко уговаривать.' },
  ] },
  { id: 'topic11_078', topicId: 'topic11', german: 'übernehmen', russian: 'принимать на себя · übernahm, hat übernommen', examples: [
    { german: 'Ich übernehme gern diese Aufgabe.', russian: 'Я с удовольствием возьму на себя эту задачу.' },
    { german: 'Er hat die Firma von seinem Vater übernommen.', russian: 'Он принял фирму от отца.' },
  ] },
  { id: 'topic11_079', topicId: 'topic11', german: 'überweisen', russian: 'переводить (деньги) · überwies, hat überwiesen', examples: [
    { german: 'Ich überweise dir das Geld morgen.', russian: 'Я переведу тебе деньги завтра.' },
    { german: 'Die Miete muss bis zum Dritten überwiesen werden.', russian: 'Аренду нужно перевести до третьего числа.' },
  ] },
  { id: 'topic11_080', topicId: 'topic11', german: 'zurückgeben', russian: 'возвращать · gab zurück, hat zurückgegeben', examples: [
    { german: 'Gib mir bitte das Buch zurück.', russian: 'Верни мне, пожалуйста, книгу.' },
    { german: 'Ich habe die Jacke im Geschäft zurückgegeben.', russian: 'Я вернул(а) куртку в магазин.' },
  ] },
  { id: 'topic11_081', topicId: 'topic11', german: 'leihen', russian: 'одалживать, брать взаймы · lieh, hat geliehen', examples: [
    { german: 'Kannst du mir zehn Euro leihen?', russian: 'Можешь одолжить мне десять евро?' },
    { german: 'Ich habe mir ein Fahrrad geliehen.', russian: 'Я одолжил(а) себе велосипед.' },
  ] },
  { id: 'topic11_082', topicId: 'topic11', german: 'sparen', russian: 'экономить, копить · sparte, hat gespart', examples: [
    { german: 'Wir sparen für eine Reise nach Italien.', russian: 'Мы копим на поездку в Италию.' },
    { german: 'So spart man viel Zeit.', russian: 'Так экономится много времени.' },
  ] },
  { id: 'topic11_083', topicId: 'topic11', german: 'verdienen', russian: 'зарабатывать · verdiente, hat verdient', examples: [
    { german: 'Er verdient gut in seinem neuen Job.', russian: 'Он хорошо зарабатывает на новой работе.' },
    { german: 'Sie verdient ihr Geld als Lehrerin.', russian: 'Она зарабатывает тем, что работает учительницей.' },
  ] },
  { id: 'topic11_084', topicId: 'topic11', german: 'ausgeben', russian: 'тратить · gab aus, hat ausgegeben', examples: [
    { german: 'Ich habe zu viel Geld für Kleidung ausgegeben.', russian: 'Я потратил(а) слишком много на одежду.' },
    { german: 'Wie viel gibst du im Monat aus?', russian: 'Сколько ты тратишь в месяц?' },
  ] },
  { id: 'topic11_085', topicId: 'topic11', german: 'kündigen', russian: 'увольнять(ся), расторгать · kündigte, hat gekündigt', examples: [
    { german: 'Ich habe gestern meinen Job gekündigt.', russian: 'Я вчера уволился(лась) с работы.' },
    { german: 'Der Vermieter hat mir die Wohnung gekündigt.', russian: 'Арендодатель расторг со мной договор аренды.' },
  ] },
  { id: 'topic11_086', topicId: 'topic11', german: 'einstellen', russian: 'нанимать; настраивать; прекращать · stellte ein, hat eingestellt', examples: [
    { german: 'Die Firma hat zehn neue Mitarbeiter eingestellt.', russian: 'Фирма наняла десять новых сотрудников.' },
    { german: 'Ich muss die Heizung höher einstellen.', russian: 'Мне нужно сделать отопление теплее.' },
  ] },
  { id: 'topic11_087', topicId: 'topic11', german: 'wiederholen', russian: 'повторять · wiederholte, hat wiederholt', examples: [
    { german: 'Könnten Sie das bitte wiederholen?', russian: 'Не могли бы вы повторить?' },
    { german: 'Ich wiederhole den Stoff vor der Prüfung.', russian: 'Я повторяю материал перед экзаменом.' },
  ] },
  { id: 'topic11_088', topicId: 'topic11', german: 'sich konzentrieren auf + Akk', russian: 'сосредоточиться на · konzentrierte, hat konzentriert', examples: [
    { german: 'Ich kann mich heute nicht auf die Arbeit konzentrieren.', russian: 'Я сегодня не могу сосредоточиться на работе.' },
    { german: 'Konzentrier dich auf das Wichtigste!', russian: 'Сосредоточься на самом важном!' },
  ] },
  { id: 'topic11_089', topicId: 'topic11', german: 'gehören zu + Dat', russian: 'принадлежать, относиться · gehörte, hat gehört', examples: [
    { german: 'Dieses Buch gehört zu meinen Lieblingsbüchern.', russian: 'Эта книга одна из моих любимых.' },
    { german: 'Er gehört zu den besten Spielern der Mannschaft.', russian: 'Он один из лучших игроков команды.' },
  ] },
  { id: 'topic11_090', topicId: 'topic11', german: 'bestehen aus + Dat', russian: 'состоять из · bestand, hat bestanden', examples: [
    { german: 'Das Team besteht aus fünf Personen.', russian: 'Команда состоит из пяти человек.' },
    { german: 'Das Gericht besteht aus Fleisch und Gemüse.', russian: 'Блюдо состоит из мяса и овощей.' },
  ] },
  { id: 'topic11_091', topicId: 'topic11', german: 'enthalten', russian: 'содержать · enthielt, hat enthalten', examples: [
    { german: 'Dieses Getränk enthält viel Zucker.', russian: 'Этот напиток содержит много сахара.' },
    { german: 'Die Packung enthält zehn Stück.', russian: 'В упаковке десять штук.' },
  ] },
  { id: 'topic11_092', topicId: 'topic11', german: 'vergleichen', russian: 'сравнивать · verglich, hat verglichen', examples: [
    { german: 'Vergleiche die Preise, bevor du kaufst.', russian: 'Сравни цены, прежде чем покупать.' },
    { german: 'Man kann die beiden Filme nicht vergleichen.', russian: 'Эти два фильма нельзя сравнивать.' },
  ] },
  { id: 'topic11_093', topicId: 'topic11', german: 'beschließen', russian: 'решать, постановлять · beschloss, hat beschlossen', examples: [
    { german: 'Wir haben beschlossen, in eine andere Stadt umzuziehen.', russian: 'Мы решили переехать в другой город.' },
    { german: 'Das Parlament hat das neue Gesetz beschlossen.', russian: 'Парламент принял новый закон.' },
  ] },
  { id: 'topic11_094', topicId: 'topic11', german: 'verbringen', russian: 'проводить (время) · verbrachte, hat verbracht', examples: [
    { german: 'Ich verbringe den Sommer am Meer.', russian: 'Я проведу лето у моря.' },
    { german: 'Wir haben einen schönen Abend zusammen verbracht.', russian: 'Мы провели прекрасный вечер вместе.' },
  ] },
  { id: 'topic11_095', topicId: 'topic11', german: 'sich weigern', russian: 'отказываться · weigerte, hat geweigert', examples: [
    { german: 'Er weigert sich, den Brief zu unterschreiben.', russian: 'Он отказывается подписывать письмо.' },
    { german: 'Das Kind weigerte sich, ins Bett zu gehen.', russian: 'Ребёнок отказался идти спать.' },
  ] },
  { id: 'topic11_096', topicId: 'topic11', german: 'behandeln', russian: 'обращаться с; лечить · behandelte, hat behandelt', examples: [
    { german: 'Der Arzt behandelt mich seit Jahren.', russian: 'Врач лечит меня уже много лет.' },
    { german: 'Man sollte alle Menschen gleich behandeln.', russian: 'Со всеми людьми нужно обращаться одинаково.' },
  ] },
  { id: 'topic11_097', topicId: 'topic11', german: 'sich verhalten', russian: 'вести себя · verhielt, hat verhalten', examples: [
    { german: 'Wie soll ich mich in dieser Situation verhalten?', russian: 'Как мне вести себя в этой ситуации?' },
    { german: 'Er hat sich in der Prüfung sehr ruhig verhalten.', russian: 'На экзамене он вёл себя очень спокойно.' },
  ] },
  { id: 'topic11_098', topicId: 'topic11', german: 'zweifeln an + Dat', russian: 'сомневаться в · zweifelte, hat gezweifelt', examples: [
    { german: 'Ich zweifle an seiner Ehrlichkeit.', russian: 'Я сомневаюсь в его честности.' },
    { german: 'Niemand zweifelt an deinem Können.', russian: 'Никто не сомневается в твоих способностях.' },
  ] },
  { id: 'topic11_099', topicId: 'topic11', german: 'hinweisen auf + Akk', russian: 'указывать на · wies hin, hat hingewiesen', examples: [
    { german: 'Ich möchte darauf hinweisen, dass wir wenig Zeit haben.', russian: 'Я хотел(а) бы обратить внимание, что у нас мало времени.' },
    { german: 'Das Schild weist auf die Gefahr hin.', russian: 'Знак указывает на опасность.' },
  ] },
  { id: 'topic11_100', topicId: 'topic11', german: 'sich lohnen', russian: 'стоить того, окупаться · lohnte, hat gelohnt', examples: [
    { german: 'Der Film lohnt sich wirklich.', russian: 'Фильм действительно стоит посмотреть.' },
    { german: 'Es lohnt sich nicht, darüber zu streiten.', russian: 'Не стоит спорить об этом.' },
  ] },

  // === Topic 12: Важные прилагательные B1 (100 шт.) ===
  { id: 'topic12_001', topicId: 'topic12', german: 'zuverlässig', russian: 'надёжный', examples: [
    { german: 'Mein Kollege ist ein sehr zuverlässiger Mensch.', russian: 'Мой коллега — очень надёжный человек.' },
    { german: 'Dieses Auto ist zuverlässig und sparsam.', russian: 'Эта машина надёжна и экономична.' },
  ] },
  { id: 'topic12_002', topicId: 'topic12', german: 'ehrgeizig', russian: 'амбициозный, честолюбивый', examples: [
    { german: 'Sie ist eine ehrgeizige Studentin.', russian: 'Она амбициозная студентка.' },
    { german: 'Er hat sehr ehrgeizige Pläne für die Zukunft.', russian: 'У него очень амбициозные планы на будущее.' },
  ] },
  { id: 'topic12_003', topicId: 'topic12', german: 'geduldig', russian: 'терпеливый', examples: [
    { german: 'Als Lehrer muss man geduldig sein.', russian: 'Будучи учителем, нужно быть терпеливым.' },
    { german: 'Sie erklärt alles sehr geduldig.', russian: 'Она всё очень терпеливо объясняет.' },
  ] },
  { id: 'topic12_004', topicId: 'topic12', german: 'ungeduldig', russian: 'нетерпеливый', examples: [
    { german: 'Ich werde ungeduldig, wenn ich lange warten muss.', russian: 'Я становлюсь нетерпеливым(ой), когда долго жду.' },
    { german: 'Sei nicht so ungeduldig!', russian: 'Не будь таким нетерпеливым!' },
  ] },
  { id: 'topic12_005', topicId: 'topic12', german: 'großzügig', russian: 'щедрый, великодушный', examples: [
    { german: 'Mein Onkel ist immer sehr großzügig.', russian: 'Мой дядя всегда очень щедрый.' },
    { german: 'Das war ein großzügiges Geschenk.', russian: 'Это был щедрый подарок.' },
  ] },
  { id: 'topic12_006', topicId: 'topic12', german: 'sparsam', russian: 'экономный', examples: [
    { german: 'Meine Eltern sind sehr sparsam.', russian: 'Мои родители очень экономные.' },
    { german: 'Diese Lampe ist besonders sparsam im Verbrauch.', russian: 'Эта лампа особенно экономична в потреблении.' },
  ] },
  { id: 'topic12_007', topicId: 'topic12', german: 'neugierig', russian: 'любопытный', examples: [
    { german: 'Kinder sind von Natur aus neugierig.', russian: 'Дети от природы любопытные.' },
    { german: 'Ich bin neugierig, wie die Geschichte endet.', russian: 'Мне интересно, чем закончится история.' },
  ] },
  { id: 'topic12_008', topicId: 'topic12', german: 'aufmerksam', russian: 'внимательный', examples: [
    { german: 'Sei aufmerksam im Straßenverkehr!', russian: 'Будь внимательным в дорожном движении!' },
    { german: 'Er ist ein sehr aufmerksamer Zuhörer.', russian: 'Он очень внимательный слушатель.' },
  ] },
  { id: 'topic12_009', topicId: 'topic12', german: 'rücksichtsvoll', russian: 'тактичный, считающийся с другими', examples: [
    { german: 'Ein rücksichtsvoller Nachbar macht abends keinen Lärm.', russian: 'Тактичный сосед не шумит вечером.' },
    { german: 'Sie verhält sich immer rücksichtsvoll.', russian: 'Она всегда ведёт себя с уважением к другим.' },
  ] },
  { id: 'topic12_010', topicId: 'topic12', german: 'rücksichtslos', russian: 'бесцеремонный, без оглядки на других', examples: [
    { german: 'Er fährt rücksichtslos durch die Stadt.', russian: 'Он ездит по городу без оглядки на других.' },
    { german: 'Ein rücksichtsloser Chef verliert schnell Mitarbeiter.', russian: 'Бесцеремонный начальник быстро теряет сотрудников.' },
  ] },
  { id: 'topic12_011', topicId: 'topic12', german: 'hilfsbereit', russian: 'готовый помочь, отзывчивый', examples: [
    { german: 'Meine Nachbarin ist sehr hilfsbereit.', russian: 'Моя соседка очень отзывчивая.' },
    { german: 'Er ist immer hilfsbereit, wenn jemand Unterstützung braucht.', russian: 'Он всегда готов помочь, когда кому-то нужна поддержка.' },
  ] },
  { id: 'topic12_012', topicId: 'topic12', german: 'höflich', russian: 'вежливый', examples: [
    { german: 'Bitte sei höflich zu den Gästen.', russian: 'Пожалуйста, будь вежлив(а) с гостями.' },
    { german: 'Er hat sehr höflich nachgefragt.', russian: 'Он очень вежливо переспросил.' },
  ] },
  { id: 'topic12_013', topicId: 'topic12', german: 'unhöflich', russian: 'невежливый', examples: [
    { german: 'Es ist unhöflich, beim Essen aufs Handy zu schauen.', russian: 'Невежливо смотреть в телефон во время еды.' },
    { german: 'Sein Ton war ziemlich unhöflich.', russian: 'Его тон был довольно невежливым.' },
  ] },
  { id: 'topic12_014', topicId: 'topic12', german: 'freundlich', russian: 'дружелюбный, приветливый', examples: [
    { german: 'Die Verkäuferin war sehr freundlich.', russian: 'Продавщица была очень дружелюбной.' },
    { german: 'Er hat uns freundlich begrüßt.', russian: 'Он приветливо нас встретил.' },
  ] },
  { id: 'topic12_015', topicId: 'topic12', german: 'ehrlich', russian: 'честный', examples: [
    { german: 'Sag mir bitte ehrlich, was du denkst.', russian: 'Пожалуйста, скажи мне честно, что ты думаешь.' },
    { german: 'Ehrlich gesagt, habe ich keine Lust.', russian: 'Честно говоря, мне неохота.' },
  ] },
  { id: 'topic12_016', topicId: 'topic12', german: 'selbstbewusst', russian: 'уверенный в себе', examples: [
    { german: 'Sie spricht selbstbewusst vor Publikum.', russian: 'Она уверенно говорит перед публикой.' },
    { german: 'Ein selbstbewusster Auftritt hilft im Vorstellungsgespräch.', russian: 'Уверенное выступление помогает на собеседовании.' },
  ] },
  { id: 'topic12_017', topicId: 'topic12', german: 'verantwortungsvoll', russian: 'ответственный', examples: [
    { german: 'Er ist ein verantwortungsvoller Mitarbeiter.', russian: 'Он ответственный сотрудник.' },
    { german: 'Das ist eine verantwortungsvolle Aufgabe.', russian: 'Это ответственная задача.' },
  ] },
  { id: 'topic12_018', topicId: 'topic12', german: 'kreativ', russian: 'креативный, творческий', examples: [
    { german: 'Sie hat eine sehr kreative Idee.', russian: 'У неё очень креативная идея.' },
    { german: 'In meinem Job muss ich oft kreativ sein.', russian: 'В своей работе я часто должен(на) быть креативным.' },
  ] },
  { id: 'topic12_019', topicId: 'topic12', german: 'flexibel', russian: 'гибкий', examples: [
    { german: 'Ich habe flexible Arbeitszeiten.', russian: 'У меня гибкий график работы.' },
    { german: 'Sei bitte flexibel mit dem Termin.', russian: 'Будь, пожалуйста, гибок(кой) с датой встречи.' },
  ] },
  { id: 'topic12_020', topicId: 'topic12', german: 'pünktlich', russian: 'пунктуальный, вовремя', examples: [
    { german: 'Er ist immer pünktlich.', russian: 'Он всегда пунктуален.' },
    { german: 'Bitte seien Sie pünktlich zum Treffen.', russian: 'Пожалуйста, придите вовремя на встречу.' },
  ] },
  { id: 'topic12_021', topicId: 'topic12', german: 'fleißig', russian: 'трудолюбивый, старательный', examples: [
    { german: 'Sie ist eine fleißige Schülerin.', russian: 'Она старательная ученица.' },
    { german: 'Wenn du fleißig lernst, schaffst du die Prüfung.', russian: 'Если ты будешь усердно учиться, ты сдашь экзамен.' },
  ] },
  { id: 'topic12_022', topicId: 'topic12', german: 'faul', russian: 'ленивый', examples: [
    { german: 'Am Sonntag bin ich einfach faul.', russian: 'По воскресеньям я просто ленюсь.' },
    { german: 'Sei nicht so faul, mach die Hausaufgaben!', russian: 'Не ленись, сделай домашку!' },
  ] },
  { id: 'topic12_023', topicId: 'topic12', german: 'mutig', russian: 'смелый', examples: [
    { german: 'Sie war mutig genug, die Wahrheit zu sagen.', russian: 'Она была достаточно смелой, чтобы сказать правду.' },
    { german: 'Das war eine mutige Entscheidung.', russian: 'Это было смелое решение.' },
  ] },
  { id: 'topic12_024', topicId: 'topic12', german: 'ängstlich', russian: 'боязливый, пугливый', examples: [
    { german: 'Mein Hund ist vor fremden Menschen ängstlich.', russian: 'Моя собака пугается незнакомых людей.' },
    { german: 'Sie ist ein eher ängstlicher Typ.', russian: 'Она скорее боязливый человек.' },
  ] },
  { id: 'topic12_025', topicId: 'topic12', german: 'stolz', russian: 'гордый', examples: [
    { german: 'Ich bin stolz auf meine Tochter.', russian: 'Я горжусь своей дочерью.' },
    { german: 'Er ist stolz auf seine Arbeit.', russian: 'Он гордится своей работой.' },
  ] },
  { id: 'topic12_026', topicId: 'topic12', german: 'bescheiden', russian: 'скромный', examples: [
    { german: 'Er ist ein bescheidener Mensch.', russian: 'Он скромный человек.' },
    { german: 'Bleib bescheiden, auch wenn du Erfolg hast.', russian: 'Оставайся скромным(ой), даже если у тебя есть успех.' },
  ] },
  { id: 'topic12_027', topicId: 'topic12', german: 'zufrieden', russian: 'довольный', examples: [
    { german: 'Ich bin mit dem Ergebnis sehr zufrieden.', russian: 'Я очень доволен(на) результатом.' },
    { german: 'Sie wirkt heute richtig zufrieden.', russian: 'Она сегодня выглядит по-настоящему довольной.' },
  ] },
  { id: 'topic12_028', topicId: 'topic12', german: 'unzufrieden', russian: 'недовольный', examples: [
    { german: 'Der Chef ist mit unserer Arbeit unzufrieden.', russian: 'Начальник недоволен нашей работой.' },
    { german: 'Ich bin unzufrieden mit meinem aktuellen Job.', russian: 'Я недоволен(на) своей нынешней работой.' },
  ] },
  { id: 'topic12_029', topicId: 'topic12', german: 'enttäuscht', russian: 'разочарованный', examples: [
    { german: 'Ich war von dem Film enttäuscht.', russian: 'Я был(а) разочарован(а) фильмом.' },
    { german: 'Sie ist enttäuscht, weil er nicht gekommen ist.', russian: 'Она расстроена, потому что он не пришёл.' },
  ] },
  { id: 'topic12_030', topicId: 'topic12', german: 'überrascht', russian: 'удивлённый', examples: [
    { german: 'Ich war überrascht, dich hier zu sehen.', russian: 'Я был(а) удивлён(а) увидеть тебя здесь.' },
    { german: 'Sie war positiv überrascht.', russian: 'Она была приятно удивлена.' },
  ] },
  { id: 'topic12_031', topicId: 'topic12', german: 'gespannt', russian: 'в ожидании, заинтригованный', examples: [
    { german: 'Ich bin gespannt auf die Ergebnisse.', russian: 'Мне интересно, какие будут результаты.' },
    { german: 'Sei gespannt, es kommt noch eine Überraschung!', russian: 'Жди, будет ещё сюрприз!' },
  ] },
  { id: 'topic12_032', topicId: 'topic12', german: 'erschöpft', russian: 'измученный, уставший', examples: [
    { german: 'Nach der Arbeit bin ich völlig erschöpft.', russian: 'После работы я совершенно измотан(а).' },
    { german: 'Sie sah nach der langen Reise erschöpft aus.', russian: 'После долгой поездки она выглядела измученной.' },
  ] },
  { id: 'topic12_033', topicId: 'topic12', german: 'aufgeregt', russian: 'взволнованный', examples: [
    { german: 'Vor der Prüfung bin ich immer aufgeregt.', russian: 'Перед экзаменом я всегда волнуюсь.' },
    { german: 'Sei nicht so aufgeregt, alles wird gut.', russian: 'Не волнуйся так, всё будет хорошо.' },
  ] },
  { id: 'topic12_034', topicId: 'topic12', german: 'begeistert', russian: 'восхищённый, в восторге', examples: [
    { german: 'Die Kinder waren vom Zoo begeistert.', russian: 'Дети были в восторге от зоопарка.' },
    { german: 'Ich bin begeistert von deiner Idee.', russian: 'Я в восторге от твоей идеи.' },
  ] },
  { id: 'topic12_035', topicId: 'topic12', german: 'entspannt', russian: 'расслабленный', examples: [
    { german: 'Nach dem Urlaub fühle ich mich entspannt.', russian: 'После отпуска я чувствую себя расслабленным(ой).' },
    { german: 'Er wirkt heute total entspannt.', russian: 'Он сегодня выглядит совершенно расслабленным.' },
  ] },
  { id: 'topic12_036', topicId: 'topic12', german: 'gestresst', russian: 'напряжённый, в стрессе', examples: [
    { german: 'Ich bin diese Woche sehr gestresst.', russian: 'Я на этой неделе в сильном стрессе.' },
    { german: 'Sie ist durch die Arbeit oft gestresst.', russian: 'Она часто в стрессе из-за работы.' },
  ] },
  { id: 'topic12_037', topicId: 'topic12', german: 'dringend', russian: 'срочный, безотлагательный', examples: [
    { german: 'Ich habe eine dringende Frage.', russian: 'У меня срочный вопрос.' },
    { german: 'Das muss dringend erledigt werden.', russian: 'Это нужно срочно сделать.' },
  ] },
  { id: 'topic12_038', topicId: 'topic12', german: 'nötig', russian: 'нужный, необходимый', examples: [
    { german: 'Ist das wirklich nötig?', russian: 'Это действительно нужно?' },
    { german: 'Ich habe alles, was nötig ist.', russian: 'У меня есть всё, что нужно.' },
  ] },
  { id: 'topic12_039', topicId: 'topic12', german: 'notwendig', russian: 'необходимый', examples: [
    { german: 'Ein gutes Frühstück ist notwendig.', russian: 'Хороший завтрак необходим.' },
    { german: 'Es ist notwendig, regelmäßig zu üben.', russian: 'Необходимо регулярно заниматься.' },
  ] },
  { id: 'topic12_040', topicId: 'topic12', german: 'möglich', russian: 'возможный', examples: [
    { german: 'Ist es möglich, den Termin zu verschieben?', russian: 'Можно перенести встречу?' },
    { german: 'So schnell wie möglich.', russian: 'Как можно быстрее.' },
  ] },
  { id: 'topic12_041', topicId: 'topic12', german: 'unmöglich', russian: 'невозможный', examples: [
    { german: 'Es ist unmöglich, allen zu gefallen.', russian: 'Невозможно нравиться всем.' },
    { german: 'Das klingt fast unmöglich.', russian: 'Это звучит почти невозможно.' },
  ] },
  { id: 'topic12_042', topicId: 'topic12', german: 'wahrscheinlich', russian: 'вероятный', examples: [
    { german: 'Es wird wahrscheinlich regnen.', russian: 'Вероятно, пойдёт дождь.' },
    { german: 'Das ist die wahrscheinlichste Erklärung.', russian: 'Это наиболее вероятное объяснение.' },
  ] },
  { id: 'topic12_043', topicId: 'topic12', german: 'unwahrscheinlich', russian: 'маловероятный', examples: [
    { german: 'Es ist unwahrscheinlich, dass er heute kommt.', russian: 'Маловероятно, что он сегодня придёт.' },
    { german: 'Eine so hohe Zahl ist unwahrscheinlich.', russian: 'Такая высокая цифра маловероятна.' },
  ] },
  { id: 'topic12_044', topicId: 'topic12', german: 'sicher', russian: 'уверенный; надёжный, безопасный', examples: [
    { german: 'Bist du sicher, dass du die Tür abgeschlossen hast?', russian: 'Ты уверен(а), что закрыл(а) дверь?' },
    { german: 'Die Straße ist nachts nicht sehr sicher.', russian: 'Улица ночью не очень безопасна.' },
  ] },
  { id: 'topic12_045', topicId: 'topic12', german: 'unsicher', russian: 'неуверенный; небезопасный', examples: [
    { german: 'Ich bin mir da noch unsicher.', russian: 'Я в этом ещё не уверен(а).' },
    { german: 'Die Gegend wirkt etwas unsicher.', russian: 'Этот район кажется немного небезопасным.' },
  ] },
  { id: 'topic12_046', topicId: 'topic12', german: 'deutlich', russian: 'отчётливый, ясный', examples: [
    { german: 'Bitte sprechen Sie deutlich.', russian: 'Пожалуйста, говорите отчётливо.' },
    { german: 'Der Unterschied ist deutlich zu sehen.', russian: 'Разница чётко видна.' },
  ] },
  { id: 'topic12_047', topicId: 'topic12', german: 'eindeutig', russian: 'однозначный', examples: [
    { german: 'Seine Antwort war eindeutig.', russian: 'Его ответ был однозначным.' },
    { german: 'Das Ergebnis ist eindeutig.', russian: 'Результат однозначный.' },
  ] },
  { id: 'topic12_048', topicId: 'topic12', german: 'ausführlich', russian: 'подробный', examples: [
    { german: 'Kannst du mir das ausführlich erklären?', russian: 'Можешь мне это подробно объяснить?' },
    { german: 'Wir hatten ein ausführliches Gespräch.', russian: 'У нас был подробный разговор.' },
  ] },
  { id: 'topic12_049', topicId: 'topic12', german: 'knapp', russian: 'краткий; впритык, едва', examples: [
    { german: 'Erzähl kurz und knapp, was passiert ist.', russian: 'Расскажи коротко и ясно, что случилось.' },
    { german: 'Die Zeit wird langsam knapp.', russian: 'Времени становится всё меньше.' },
  ] },
  { id: 'topic12_050', topicId: 'topic12', german: 'genau', russian: 'точный', examples: [
    { german: 'Kennst du die genaue Adresse?', russian: 'Ты знаешь точный адрес?' },
    { german: 'Das stimmt genau.', russian: 'Это точно так.' },
  ] },
  { id: 'topic12_051', topicId: 'topic12', german: 'ungenau', russian: 'неточный', examples: [
    { german: 'Deine Beschreibung ist sehr ungenau.', russian: 'Твоё описание очень неточное.' },
    { german: 'Die Uhr geht leider ungenau.', russian: 'Часы, к сожалению, идут неточно.' },
  ] },
  { id: 'topic12_052', topicId: 'topic12', german: 'zutreffend', russian: 'верный, соответствующий действительности', examples: [
    { german: 'Ihre Antwort ist zutreffend.', russian: 'Ваш ответ верный.' },
    { german: 'Die Aussage ist völlig zutreffend.', russian: 'Утверждение полностью верное.' },
  ] },
  { id: 'topic12_053', topicId: 'topic12', german: 'gleichzeitig', russian: 'одновременный', examples: [
    { german: 'Ich kann nicht zwei Dinge gleichzeitig machen.', russian: 'Я не могу делать две вещи одновременно.' },
    { german: 'Wir sind gleichzeitig angekommen.', russian: 'Мы пришли одновременно.' },
  ] },
  { id: 'topic12_054', topicId: 'topic12', german: 'ständig', russian: 'постоянный', examples: [
    { german: 'Sie ist in letzter Zeit ständig müde.', russian: 'Она в последнее время постоянно уставшая.' },
    { german: 'Wir haben ständig neue Aufgaben.', russian: 'У нас постоянно новые задачи.' },
  ] },
  { id: 'topic12_055', topicId: 'topic12', german: 'regelmäßig', russian: 'регулярный', examples: [
    { german: 'Ich gehe regelmäßig zum Sport.', russian: 'Я регулярно хожу на спорт.' },
    { german: 'Man sollte regelmäßig zum Zahnarzt gehen.', russian: 'К стоматологу нужно ходить регулярно.' },
  ] },
  { id: 'topic12_056', topicId: 'topic12', german: 'gelegentlich', russian: 'время от времени, эпизодический', examples: [
    { german: 'Ich trinke gelegentlich ein Glas Wein.', russian: 'Иногда я пью бокал вина.' },
    { german: 'Wir sehen uns nur gelegentlich.', russian: 'Мы видимся только время от времени.' },
  ] },
  { id: 'topic12_057', topicId: 'topic12', german: 'anstrengend', russian: 'утомительный, напряжённый', examples: [
    { german: 'Der Tag war sehr anstrengend.', russian: 'День был очень утомительным.' },
    { german: 'Diese Arbeit ist körperlich anstrengend.', russian: 'Эта работа физически тяжёлая.' },
  ] },
  { id: 'topic12_058', topicId: 'topic12', german: 'kompliziert', russian: 'сложный, запутанный', examples: [
    { german: 'Die Aufgabe ist ziemlich kompliziert.', russian: 'Задача довольно сложная.' },
    { german: 'Mach es nicht komplizierter, als es ist.', russian: 'Не усложняй это больше, чем есть.' },
  ] },
  { id: 'topic12_059', topicId: 'topic12', german: 'vielseitig', russian: 'разносторонний, многосторонний', examples: [
    { german: 'Er ist ein sehr vielseitiger Mensch.', russian: 'Он очень разносторонний человек.' },
    { german: 'Das Buch ist thematisch vielseitig.', russian: 'Книга тематически разносторонняя.' },
  ] },
  { id: 'topic12_060', topicId: 'topic12', german: 'wertvoll', russian: 'ценный', examples: [
    { german: 'Dein Rat war mir sehr wertvoll.', russian: 'Твой совет был для меня очень ценным.' },
    { german: 'Das ist ein wertvolles Geschenk.', russian: 'Это ценный подарок.' },
  ] },
  { id: 'topic12_061', topicId: 'topic12', german: 'wichtig', russian: 'важный', examples: [
    { german: 'Das ist eine wichtige Entscheidung.', russian: 'Это важное решение.' },
    { german: 'Gesundheit ist das Wichtigste.', russian: 'Здоровье — самое главное.' },
  ] },
  { id: 'topic12_062', topicId: 'topic12', german: 'unwichtig', russian: 'неважный', examples: [
    { german: 'Das sind unwichtige Details.', russian: 'Это неважные детали.' },
    { german: 'Für mich ist das völlig unwichtig.', russian: 'Для меня это совершенно неважно.' },
  ] },
  { id: 'topic12_063', topicId: 'topic12', german: 'nützlich', russian: 'полезный', examples: [
    { german: 'Dein Tipp war sehr nützlich.', russian: 'Твой совет был очень полезным.' },
    { german: 'Die App ist wirklich nützlich.', russian: 'Приложение действительно полезное.' },
  ] },
  { id: 'topic12_064', topicId: 'topic12', german: 'hilfreich', russian: 'полезный, помогающий', examples: [
    { german: 'Vielen Dank, das war sehr hilfreich.', russian: 'Большое спасибо, это было очень полезно.' },
    { german: 'Seine Erklärung war hilfreich.', russian: 'Его объяснение было полезным.' },
  ] },
  { id: 'topic12_065', topicId: 'topic12', german: 'schädlich', russian: 'вредный', examples: [
    { german: 'Rauchen ist schädlich für die Gesundheit.', russian: 'Курение вредно для здоровья.' },
    { german: 'Zu viel Sonne ist schädlich für die Haut.', russian: 'Слишком много солнца вредно для кожи.' },
  ] },
  { id: 'topic12_066', topicId: 'topic12', german: 'gefährlich', russian: 'опасный', examples: [
    { german: 'Die Straße ist nachts gefährlich.', russian: 'Улица ночью опасная.' },
    { german: 'Pass auf, das ist gefährlich!', russian: 'Осторожно, это опасно!' },
  ] },
  { id: 'topic12_067', topicId: 'topic12', german: 'riskant', russian: 'рискованный', examples: [
    { german: 'Das ist mir zu riskant.', russian: 'Это для меня слишком рискованно.' },
    { german: 'Die Investition war sehr riskant.', russian: 'Инвестиция была очень рискованной.' },
  ] },
  { id: 'topic12_068', topicId: 'topic12', german: 'vorsichtig', russian: 'осторожный', examples: [
    { german: 'Sei vorsichtig beim Überqueren der Straße.', russian: 'Будь осторожен(на) при переходе улицы.' },
    { german: 'Der Fahrer war sehr vorsichtig.', russian: 'Водитель был очень осторожным.' },
  ] },
  { id: 'topic12_069', topicId: 'topic12', german: 'ruhig', russian: 'спокойный, тихий', examples: [
    { german: 'Bleib ruhig, alles wird gut.', russian: 'Оставайся спокойным, всё будет хорошо.' },
    { german: 'Die Wohnung liegt in einer ruhigen Straße.', russian: 'Квартира находится на тихой улице.' },
  ] },
  { id: 'topic12_070', topicId: 'topic12', german: 'lebhaft', russian: 'оживлённый, бойкий', examples: [
    { german: 'Wir hatten ein lebhaftes Gespräch.', russian: 'У нас был оживлённый разговор.' },
    { german: 'Er ist ein lebhaftes Kind.', russian: 'Он живой ребёнок.' },
  ] },
  { id: 'topic12_071', topicId: 'topic12', german: 'beliebt', russian: 'любимый, популярный', examples: [
    { german: 'Das Café ist bei Studenten sehr beliebt.', russian: 'Это кафе очень популярно у студентов.' },
    { german: 'Sie ist bei ihren Kollegen beliebt.', russian: 'Её ценят среди коллег.' },
  ] },
  { id: 'topic12_072', topicId: 'topic12', german: 'bekannt', russian: 'известный', examples: [
    { german: 'Dieser Schauspieler ist weltweit bekannt.', russian: 'Этот актёр известен во всём мире.' },
    { german: 'Das Restaurant ist für seine Pizza bekannt.', russian: 'Ресторан известен своей пиццей.' },
  ] },
  { id: 'topic12_073', topicId: 'topic12', german: 'berühmt', russian: 'знаменитый', examples: [
    { german: 'Sie ist eine berühmte Schriftstellerin.', russian: 'Она знаменитая писательница.' },
    { german: 'Das Museum zeigt berühmte Gemälde.', russian: 'Музей показывает знаменитые картины.' },
  ] },
  { id: 'topic12_074', topicId: 'topic12', german: 'seltsam', russian: 'странный', examples: [
    { german: 'Das Essen hat einen seltsamen Geschmack.', russian: 'У еды странный вкус.' },
    { german: 'Er benimmt sich heute seltsam.', russian: 'Он сегодня странно себя ведёт.' },
  ] },
  { id: 'topic12_075', topicId: 'topic12', german: 'merkwürdig', russian: 'странный, примечательный', examples: [
    { german: 'Was für eine merkwürdige Geschichte!', russian: 'Какая странная история!' },
    { german: 'Das ist schon merkwürdig.', russian: 'Это, конечно, странно.' },
  ] },
  { id: 'topic12_076', topicId: 'topic12', german: 'ungewöhnlich', russian: 'необычный', examples: [
    { german: 'Das ist ein ungewöhnliches Hobby.', russian: 'Это необычное хобби.' },
    { german: 'Eine so lange Hitze ist hier ungewöhnlich.', russian: 'Такая долгая жара здесь необычна.' },
  ] },
  { id: 'topic12_077', topicId: 'topic12', german: 'üblich', russian: 'привычный, обыкновенный', examples: [
    { german: 'Es ist üblich, ein Trinkgeld zu geben.', russian: 'Принято давать чаевые.' },
    { german: 'So ist es hier üblich.', russian: 'Здесь так принято.' },
  ] },
  { id: 'topic12_078', topicId: 'topic12', german: 'durchschnittlich', russian: 'средний, усреднённый', examples: [
    { german: 'Er hat durchschnittliche Noten.', russian: 'У него средние оценки.' },
    { german: 'Der durchschnittliche Preis liegt bei 20 Euro.', russian: 'Средняя цена составляет 20 евро.' },
  ] },
  { id: 'topic12_079', topicId: 'topic12', german: 'überdurchschnittlich', russian: 'выше среднего', examples: [
    { german: 'Ihre Leistungen sind überdurchschnittlich.', russian: 'Её результаты выше среднего.' },
    { german: 'Er verdient überdurchschnittlich gut.', russian: 'Он зарабатывает выше среднего.' },
  ] },
  { id: 'topic12_080', topicId: 'topic12', german: 'ausreichend', russian: 'достаточный', examples: [
    { german: 'Zwei Stunden sind dafür ausreichend.', russian: 'Двух часов для этого достаточно.' },
    { german: 'Ich habe ausreichend Zeit.', russian: 'У меня достаточно времени.' },
  ] },
  { id: 'topic12_081', topicId: 'topic12', german: 'preiswert', russian: 'недорогой, выгодный по цене', examples: [
    { german: 'Das ist ein preiswertes Angebot.', russian: 'Это выгодное предложение по цене.' },
    { german: 'Hier kann man preiswert essen.', russian: 'Здесь можно недорого поесть.' },
  ] },
  { id: 'topic12_082', topicId: 'topic12', german: 'teuer', russian: 'дорогой', examples: [
    { german: 'Diese Jacke ist mir zu teuer.', russian: 'Эта куртка мне слишком дорогая.' },
    { german: 'In der Altstadt ist alles teurer.', russian: 'В старом городе всё дороже.' },
  ] },
  { id: 'topic12_083', topicId: 'topic12', german: 'günstig', russian: 'выгодный, удобный, недорогой', examples: [
    { german: 'Ich habe das Ticket günstig gekauft.', russian: 'Я купил(а) билет недорого.' },
    { german: 'Das ist ein sehr günstiges Angebot.', russian: 'Это очень выгодное предложение.' },
  ] },
  { id: 'topic12_084', topicId: 'topic12', german: 'erschwinglich', russian: 'доступный по цене', examples: [
    { german: 'Die Preise sind noch erschwinglich.', russian: 'Цены ещё приемлемые.' },
    { german: 'Das ist eine erschwingliche Wohnung.', russian: 'Это доступная по цене квартира.' },
  ] },
  { id: 'topic12_085', topicId: 'topic12', german: 'umweltfreundlich', russian: 'экологичный, безвредный для природы', examples: [
    { german: 'Ein Fahrrad ist umweltfreundlich.', russian: 'Велосипед экологичен.' },
    { german: 'Wir kaufen nur umweltfreundliche Produkte.', russian: 'Мы покупаем только экологичные продукты.' },
  ] },
  { id: 'topic12_086', topicId: 'topic12', german: 'nachhaltig', russian: 'устойчивый, долгосрочный, экологичный', examples: [
    { german: 'Wir wollen nachhaltig leben.', russian: 'Мы хотим жить экологично/устойчиво.' },
    { german: 'Das Unternehmen handelt nachhaltig.', russian: 'Компания действует устойчиво.' },
  ] },
  { id: 'topic12_087', topicId: 'topic12', german: 'gesund', russian: 'здоровый', examples: [
    { german: 'Obst und Gemüse sind gesund.', russian: 'Фрукты и овощи полезны для здоровья.' },
    { german: 'Ich fühle mich heute wieder gesund.', russian: 'Я сегодня снова чувствую себя здоровым(ой).' },
  ] },
  { id: 'topic12_088', topicId: 'topic12', german: 'ungesund', russian: 'нездоровый, вредный для здоровья', examples: [
    { german: 'Fast Food ist ungesund.', russian: 'Фастфуд нездоровый.' },
    { german: 'Zu wenig Schlaf ist ungesund.', russian: 'Мало сна — вредно для здоровья.' },
  ] },
  { id: 'topic12_089', topicId: 'topic12', german: 'bewusst', russian: 'осознанный, намеренный', examples: [
    { german: 'Ich habe das ganz bewusst getan.', russian: 'Я сделал(а) это совершенно намеренно.' },
    { german: 'Sie lebt sehr bewusst.', russian: 'Она живёт очень осознанно.' },
  ] },
  { id: 'topic12_090', topicId: 'topic12', german: 'unbewusst', russian: 'неосознанный, бессознательный', examples: [
    { german: 'Ich habe die Tür unbewusst geschlossen.', russian: 'Я неосознанно закрыл(а) дверь.' },
    { german: 'Viele Reaktionen passieren unbewusst.', russian: 'Многие реакции происходят бессознательно.' },
  ] },
  { id: 'topic12_091', topicId: 'topic12', german: 'erfolgreich', russian: 'успешный', examples: [
    { german: 'Er ist sehr erfolgreich in seinem Beruf.', russian: 'Он очень успешен в своей профессии.' },
    { german: 'Die Präsentation war erfolgreich.', russian: 'Презентация была успешной.' },
  ] },
  { id: 'topic12_092', topicId: 'topic12', german: 'erfolglos', russian: 'безуспешный, неудачный', examples: [
    { german: 'Seine Versuche blieben erfolglos.', russian: 'Его попытки остались безуспешными.' },
    { german: 'Sie bewarb sich erfolglos bei mehreren Firmen.', russian: 'Она безуспешно подавала заявки в несколько фирм.' },
  ] },
  { id: 'topic12_093', topicId: 'topic12', german: 'zukünftig', russian: 'будущий', examples: [
    { german: 'Wir denken an unsere zukünftige Familie.', russian: 'Мы думаем о нашей будущей семье.' },
    { german: 'Meine zukünftige Wohnung liegt im Zentrum.', russian: 'Моя будущая квартира находится в центре.' },
  ] },
  { id: 'topic12_094', topicId: 'topic12', german: 'vergangen', russian: 'прошедший, былой', examples: [
    { german: 'Die vergangene Woche war sehr stressig.', russian: 'Прошедшая неделя была очень напряжённой.' },
    { german: 'Im vergangenen Jahr war ich in Spanien.', russian: 'В прошлом году я был(а) в Испании.' },
  ] },
  { id: 'topic12_095', topicId: 'topic12', german: 'modern', russian: 'современный', examples: [
    { german: 'Die Wohnung ist modern eingerichtet.', russian: 'Квартира обставлена в современном стиле.' },
    { german: 'Er trägt moderne Kleidung.', russian: 'Он носит современную одежду.' },
  ] },
  { id: 'topic12_096', topicId: 'topic12', german: 'altmodisch', russian: 'старомодный', examples: [
    { german: 'Seine Ansichten sind etwas altmodisch.', russian: 'Его взгляды несколько старомодны.' },
    { german: 'Das ist ein altmodischer Hut.', russian: 'Это старомодная шляпа.' },
  ] },
  { id: 'topic12_097', topicId: 'topic12', german: 'praktisch', russian: 'практичный, практический', examples: [
    { german: 'Dieses Werkzeug ist sehr praktisch.', russian: 'Этот инструмент очень практичный.' },
    { german: 'Praktisch gesehen ist das einfacher.', russian: 'С практической точки зрения это проще.' },
  ] },
  { id: 'topic12_098', topicId: 'topic12', german: 'theoretisch', russian: 'теоретический', examples: [
    { german: 'Theoretisch ist alles möglich.', russian: 'Теоретически всё возможно.' },
    { german: 'Wir haben das nur theoretisch behandelt.', russian: 'Мы это рассматривали только теоретически.' },
  ] },
  { id: 'topic12_099', topicId: 'topic12', german: 'sinnvoll', russian: 'осмысленный, разумный', examples: [
    { german: 'Es ist sinnvoll, früh zu beginnen.', russian: 'Имеет смысл начать пораньше.' },
    { german: 'Das klingt nach einer sinnvollen Idee.', russian: 'Это звучит как разумная идея.' },
  ] },
  { id: 'topic12_100', topicId: 'topic12', german: 'sinnlos', russian: 'бессмысленный', examples: [
    { german: 'Es ist sinnlos, jetzt zu streiten.', russian: 'Сейчас бессмысленно спорить.' },
    { german: 'Der Versuch war völlig sinnlos.', russian: 'Попытка была совершенно бессмысленной.' },
  ] },
];
