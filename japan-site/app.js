const imageSet = {
  tokyo:
    "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1600&q=82",
  fuji:
    "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?auto=format&fit=crop&w=1600&q=82",
  kyoto:
    "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1600&q=82",
  osaka:
    "https://images.unsplash.com/photo-1590559899731-a382839e5549?auto=format&fit=crop&w=1600&q=82",
  nara:
    "https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&w=1600&q=82",
  train:
    "https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?auto=format&fit=crop&w=1600&q=82",
  airport:
    "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1600&q=82",
  usj:
    "https://commons.wikimedia.org/wiki/Special:FilePath/USJ_Super_Nintendo_World_overview.jpg?width=1600"
};

const mapUrl = (query) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

const phases = [
  {
    title: "Токио 1",
    period: "22-24.11",
    image: imageSet.tokyo,
    text: "Мягкий вход, старая Япония, Yanesen, первые аркады, неон без перегруза."
  },
  {
    title: "Кавагутико",
    period: "24-26.11",
    image: imageSet.fuji,
    text: "Фудзи, озеро, онсен, осенние виды, запас на дождь и спокойный темп."
  },
  {
    title: "Токио 2",
    period: "26-30.11",
    image: imageSet.tokyo,
    text: "Харадзюку, Шибуя, Минато, teamLab, Одайба, Акихабара и финальный Синдзюку."
  },
  {
    title: "Осака",
    period: "30.11-05.12",
    image: imageSet.osaka,
    text: "Namba, Dotonbori, Нара, Киото, Universal Studios Japan и спокойный вылет."
  }
];

const routeStops = [
  {
    index: "01",
    title: "Москва",
    date: "21.11",
    caption: "Вылет 17:25, длинный перелет и сохраненные офлайн-документы.",
    x: 62,
    y: 94,
    labelX: 18,
    labelY: 68,
    dateX: 18,
    dateY: 88,
    major: true
  },
  {
    index: "02",
    title: "Токио",
    date: "22-24.11",
    caption: "Мягкий вход, Yanesen, первые аркады, старая Япония и неон.",
    x: 268,
    y: 154,
    labelX: 222,
    labelY: 126,
    dateX: 222,
    dateY: 146,
    major: true
  },
  {
    index: "03",
    title: "Кавагутико",
    date: "24-26.11",
    caption: "Фудзи, озеро, канатка, онсен и правило: если гора видна, сначала виды.",
    x: 346,
    y: 262,
    labelX: 282,
    labelY: 306,
    dateX: 282,
    dateY: 326,
    major: false
  },
  {
    index: "04",
    title: "Токио 2",
    date: "26-30.11",
    caption: "Харадзюку, Шибуя, Минато, teamLab, Одайба и финальный Синдзюку.",
    x: 426,
    y: 154,
    labelX: 438,
    labelY: 124,
    dateX: 438,
    dateY: 144,
    major: false
  },
  {
    index: "05",
    title: "Осака",
    date: "30.11-05.12",
    caption: "Namba, Dotonbori, Нара, Киото, USJ и спокойный трансфер в KIX.",
    x: 564,
    y: 266,
    labelX: 590,
    labelY: 292,
    dateX: 590,
    dateY: 312,
    major: true
  },
  {
    index: "06",
    title: "Москва",
    date: "06.12",
    caption: "Прилет 18:05, багаж, чеки, фотографии и финальная сверка вещей.",
    x: 676,
    y: 104,
    labelX: 610,
    labelY: 72,
    dateX: 610,
    dateY: 92,
    major: true
  }
];

const days = [
  {
    id: "d0",
    day: "День 0",
    date: "21.11",
    weekday: "Сб",
    city: "Самолет",
    sleep: "самолет",
    title: "Вылет из Москвы",
    short: "Паспорта, билеты, офлайн-копии, багаж и вылет 17:25.",
    goal: "Не начать поездку с хаоса.",
    image: imageSet.airport,
    tags: ["перелет", "подготовка", "москва"],
    planA: [
      "Проверить паспорта, билеты, страховку, карты, наличные и зарядки.",
      "Сохранить офлайн брони, Visit Japan Web, адреса отелей и карты.",
      "Багаж: туда указано 2 x 23 кг и ручная кладь 5 кг.",
      "Вылет из Москвы в 17:25."
    ],
    planB: ["Спокойно пережить дорогу и не перегрузить ручную кладь."],
    stop: "Не пытаться решить всё в аэропорту. Критичное должно быть сохранено заранее.",
    highlights: [
      { name: "Москва -> Токио", price: "31 406 ₽, без возврата" },
      { name: "Visit Japan Web", price: "QR сохранить скриншотами" }
    ]
  },
  {
    id: "d1",
    day: "День 1",
    date: "22.11",
    weekday: "Вс",
    city: "Токио",
    sleep: "Токио",
    title: "Прилет и мягкая посадка",
    short: "IC-карты, трансфер, отель, ужин рядом и ранний сон.",
    goal: "Купить IC-карты, добраться до отеля, поесть и не сломаться от джетлага.",
    image: imageSet.tokyo,
    tags: ["токио", "прилет", "jetlag", "shibuya", "haneda"],
    planA: [
      "Паспортный контроль и багаж.",
      "Купить 2 x TOURIST PASMO/SUICA и зарядить каждую примерно на 3 000 ¥.",
      "Ехать общественным транспортом: около 1 630 ¥, примерно 1 час.",
      "Заселиться, ориентир приезда 18:00-18:30.",
      "Ужин рядом, душ или баня, ранний сон."
    ],
    planB: [
      "Haneda Airport Garden или observation deck до города.",
      "Shibuya Crossing, Hachiko, Nonbei Yokocho, если есть силы.",
      "Караоке или аркады только если джетлаг внезапно дал энергию."
    ],
    stop: "Не ехать далеко ради галочки. Завтра первый полноценный день.",
    highlights: [
      { name: "Haneda Airport Garden", price: "еда/кофе ¥800-2 500", url: mapUrl("Haneda Airport Garden Terminal 3") },
      { name: "Tourist PASMO/SUICA", price: "зарядить примерно на ¥3 000" },
      { name: "Shibuya Scramble Crossing", price: "бесплатно", url: mapUrl("Shibuya Scramble Crossing Hachiko") },
      { name: "Karaoke Kan Shinjuku", price: "¥1 000-4 000", url: mapUrl("Karaoke Kan Shinjuku") }
    ]
  },
  {
    id: "d2",
    day: "День 2",
    date: "23.11",
    weekday: "Пн",
    city: "Токио",
    sleep: "Токио",
    title: "Первый полноценный Токио",
    short: "Yanesen или западный Токио. Один большой районный сценарий.",
    goal: "Выбрать один большой район, а не пытаться совместить весь город.",
    image: imageSet.tokyo,
    tags: ["токио", "yanesen", "kichijoji", "koenji", "nakano", "ghibli", "дождь"],
    planA: [
      "Rikugien.",
      "Nezu Shrine.",
      "Yanaka Ginza и Yuyake Dandan.",
      "Yanaka Cemetery для тишины.",
      "Вечером sento или еда рядом с отелем."
    ],
    planB: [
      "Inokashira Park.",
      "Kichijoji и Harmonica Yokocho.",
      "Koenji shopping streets.",
      "Nakano Broadway."
    ],
    stop: "Suginami Animation Museum отмечен закрытым по понедельникам, не ставить как основной.",
    highlights: [
      { name: "Сад Рикугиэн", price: "¥300", url: mapUrl("Rikugien Tokyo") },
      { name: "Yanaka Ginza", price: "еда ¥1 500-3 000", url: mapUrl("Yanaka Ginza Tokyo") },
      { name: "Ghibli Museum", price: "¥1 000, только заранее", url: mapUrl("Ghibli Museum Mitaka") },
      { name: "Thunder Dolphin", price: "¥1 800", url: mapUrl("Tokyo Dome City Thunder Dolphin") },
      { name: "Warner Bros. Studio Tour Tokyo", price: "от ¥6 300", url: mapUrl("Warner Bros Studio Tour Tokyo") }
    ]
  },
  {
    id: "d3",
    day: "День 3",
    date: "24.11",
    weekday: "Вт",
    city: "Кавагутико",
    sleep: "Кавагутико",
    title: "Токио -> Кавагутико",
    short: "Автобус к Фудзи, заселение, озеро, канатка или онсен.",
    goal: "Спокойно переехать к Фудзи и поймать первый вид, если погода разрешит.",
    image: imageSet.fuji,
    tags: ["фудзи", "кавагутико", "переезд", "онсен", "дождь"],
    planA: [
      "Утром Shinjuku: кофе, ekiben или быстрая точка рядом.",
      "Автобус Shinjuku -> Kawaguchiko около 10:30.",
      "Заселиться или оставить вещи.",
      "Если чисто: Mt. Fuji Panoramic Ropeway, boat Appare, Momiji Corridor.",
      "Ужин: houtou noodles, Lawson, спокойный вечер."
    ],
    planB: [
      "Fujisan World Heritage Center.",
      "Kawaguchiko Music Forest Museum.",
      "Kawaguchiko Herb Hall или Craft Park.",
      "Yurari Onsen или Fujiyama Onsen."
    ],
    stop: "После автобуса день короткий. Не строить дальний крюк.",
    highlights: [
      { name: "Автобус Shinjuku -> Kawaguchiko", price: "¥2 200 за человека", url: "https://highway-buses.jp/course/kawaguchiko.php" },
      { name: "Mt. Fuji Panoramic Ropeway", price: "¥1 000 туда-обратно", url: mapUrl("Mt Fuji Panoramic Ropeway") },
      { name: "Sightseeing Boat Appare", price: "¥1 000", url: mapUrl("Lake Kawaguchiko Sightseeing Boat Appare") },
      { name: "Yurari Onsen", price: "¥1 200-1 400", url: mapUrl("Fuji Yurari Onsen") }
    ]
  },
  {
    id: "d4",
    day: "День 4",
    date: "25.11",
    weekday: "Ср",
    city: "Кавагутико",
    sleep: "Кавагутико",
    title: "Полный день под Фудзи",
    short: "Если Фудзи виден утром, сначала виды, потом всё остальное.",
    goal: "Сделать видовую охоту без попытки объехать всё вокруг горы.",
    image: imageSet.fuji,
    tags: ["фудзи", "кавагутико", "fuji-q", "онсен", "аокигахара", "дождь"],
    planA: [
      "Chureito Pagoda / Arakurayama Sengen.",
      "Oishi Park.",
      "Saiko Iyashi no Sato Nenba.",
      "Oshino Hakkai или Honcho Street.",
      "Kitaguchi Hongu Fuji Sengen Shrine.",
      "Вечером онсен и ужин."
    ],
    planB: [
      "Fuji-Q Highland.",
      "Itchiku Kubota Art Museum.",
      "Narusawa Ice Cave и Fugaku Wind Cave.",
      "Aokigahara только с гидом.",
      "YAMANAKAKO NO KABA, если хочется отдельного приключения."
    ],
    stop: "Дальние точки вокруг Яманака не смешивать с полным кругом вокруг Кавагутико.",
    highlights: [
      { name: "Chureito Pagoda", price: "вход бесплатно", url: mapUrl("Chureito Pagoda Arakurayama Sengen") },
      { name: "Saiko Iyashi no Sato Nenba", price: "¥500", url: mapUrl("Saiko Iyashi no Sato Nenba") },
      { name: "Fuji-Q Highland", price: "1-Day Pass ¥6 000-7 800", url: mapUrl("Fuji-Q Highland") },
      { name: "Aokigahara Guided Walk", price: "примерно от ¥7 500", url: mapUrl("Aokigahara Forest guided tour") },
      { name: "Narusawa Ice Cave + Fugaku Wind Cave", price: "комбо около ¥600", url: mapUrl("Narusawa Ice Cave Fugaku Wind Cave") }
    ]
  },
  {
    id: "d5",
    day: "День 5",
    date: "26.11",
    weekday: "Чт",
    city: "Токио",
    sleep: "Токио",
    title: "Кавагутико -> Токио, Харадзюку/Шибуя",
    short: "Возврат без марафона: Meiji Jingu, Takeshita, Cat Street, Shibuya.",
    goal: "Вернуться в Токио без усталостного марафона.",
    image: imageSet.tokyo,
    tags: ["токио", "харадзюку", "шибуя", "переезд", "онсен"],
    planA: [
      "Автобус Kawaguchiko -> Shinjuku около 11:30.",
      "Заселение в район Минато.",
      "Meiji Jingu.",
      "Takeshita Street / Cat Street.",
      "Omotesando / Omohara Forest.",
      "Shibuya Crossing и ужин."
    ],
    planB: [
      "Shinjuku Southern Terrace.",
      "Tokyu Kabukicho Tower / namco TOKYO.",
      "Hanazono Shrine.",
      "Thermae-Yu."
    ],
    stop: "Харадзюку + Шибуя достаточно. Не добивать ещё и большим музеем.",
    highlights: [
      { name: "Автобус Kawaguchiko -> Shinjuku", price: "¥2 200 за человека", url: "https://highway-buses.jp/course/kawaguchiko.php" },
      { name: "Meiji Jingu", price: "бесплатно", url: mapUrl("Meiji Jingu") },
      { name: "Takeshita Street", price: "ерунда ¥1 000-3 000", url: mapUrl("Takeshita Street Harajuku") },
      { name: "Ninja Experience Cafe Harajuku", price: "¥3 900-10 400", url: mapUrl("Ninja Experience Cafe Tokyo Harajuku") },
      { name: "Thermae-Yu Shinjuku", price: "¥2 900-3 000", url: mapUrl("Thermae-Yu Shinjuku") }
    ]
  },
  {
    id: "d6",
    day: "День 6",
    date: "27.11",
    weekday: "Пт",
    city: "Токио",
    sleep: "Токио",
    title: "Минато, Азабудай, башни, цифровой Токио",
    short: "Azabudai Hills, teamLab Borderless, Tokyo Tower и вечерний Roppongi.",
    goal: "Современный Токио: архитектура, teamLab, башни, вечер.",
    image: imageSet.tokyo,
    tags: ["токио", "teamlab", "tower", "blue note", "minato", "дождь"],
    planA: [
      "Azabudai Hills.",
      "teamLab Borderless.",
      "Tokyo Tower вечером.",
      "Roppongi, ужин, прогулка."
    ],
    planB: [
      "Mori Art Museum + Tokyo City View.",
      "RED Tokyo Tower, если хочется VR/AR/игр.",
      "21_21 Design Sight.",
      "Blue Note Tokyo, если заранее взяли концерт."
    ],
    stop: "Borderless + Tokyo Tower уже насыщенный день. Не брать все платные опции сразу.",
    highlights: [
      { name: "teamLab Borderless", price: "¥3 600-5 600", url: mapUrl("teamLab Borderless Azabudai Hills") },
      { name: "Tokyo Tower", price: "Main ¥1 500 / Top ¥3 300", url: mapUrl("Tokyo Tower") },
      { name: "Blue Note Tokyo", price: "charge ¥7 700-16 800", url: mapUrl("Blue Note Tokyo") },
      { name: "RED Tokyo Tower", price: "¥4 200-4 800", url: mapUrl("RED Tokyo Tower") }
    ]
  },
  {
    id: "d7",
    day: "День 7",
    date: "28.11",
    weekday: "Сб",
    city: "Токио",
    sleep: "Токио",
    title: "Рыба, залив, Одайба, Акихабара",
    short: "Рынок утром, залив днем, игровая и поп-культурная Япония вечером.",
    goal: "Сделать день из еды утром, воды и игр днем, поп-культуры вечером.",
    image: imageSet.tokyo,
    tags: ["токио", "odaiba", "akihabara", "teamlab", "joypolis", "дождь"],
    planA: [
      "Toyosu Market или Tsukiji Outer Market.",
      "Odaiba Seaside Park.",
      "Unicorn Gundam.",
      "Tokyo Joypolis или TOKYO NO KABA.",
      "Вечером Akihabara / GiGO / maidreamin по желанию."
    ],
    planB: ["teamLab Planets.", "Small Worlds.", "Joypolis.", "Unko Museum."],
    stop: "Toyosu, Tsukiji, Odaiba и Akihabara возможны, но без лишней детализации каждой точки.",
    highlights: [
      { name: "Tsukiji Outer Market", price: "еда ¥2 000-5 000", url: mapUrl("Tsukiji Outer Market") },
      { name: "teamLab Planets", price: "от ¥3 600", url: mapUrl("teamLab Planets TOKYO") },
      { name: "TOKYO NO KABA", price: "суббота ¥4 200", url: mapUrl("TOKYO NO KABA Odaiba") },
      { name: "Tokyo Joypolis", price: "вход ¥1 500 / Passport ¥5 800", url: mapUrl("Tokyo Joypolis Odaiba") },
      { name: "maidreamin Akihabara", price: "реалистично ¥2 000-4 000", url: mapUrl("maidreamin Akihabara LIVE RESTAURANT Heaven's Gate") }
    ]
  },
  {
    id: "d8",
    day: "День 8",
    date: "29.11",
    weekday: "Вс",
    city: "Токио",
    sleep: "Токио",
    title: "Последний полный Токио",
    short: "Парк, бесплатная смотровая, Shinjuku, сбор вещей без ночного ада.",
    goal: "Красивый финал Токио и сбор вещей без ночного ада.",
    image: imageSet.tokyo,
    tags: ["токио", "shinjuku", "skytree", "live", "бар", "сбор"],
    planA: [
      "Shinjuku Gyoen.",
      "Tokyo Metropolitan Government Building Observatory.",
      "Omoide Yokocho / Golden Gai вечером.",
      "Ночью собрать вещи."
    ],
    planB: [
      "Tokyo Skytree + Sumida Aquarium.",
      "Shimokitazawa.",
      "Tokyo Mystery Circus.",
      "Shinjuku PIT INN / live house."
    ],
    stop: "Если завтра утренний синкансэн, не уходить в длинную ночную программу.",
    highlights: [
      { name: "Shinjuku Gyoen", price: "¥500", url: mapUrl("Shinjuku Gyoen") },
      { name: "Tokyo Metropolitan Government Observatory", price: "бесплатно", url: mapUrl("Tokyo Metropolitan Government Building Observatory") },
      { name: "Tokyo Skytree", price: "от ¥2 500", url: mapUrl("TOKYO SKYTREE") },
      { name: "Tokyo Mystery Circus", price: "¥3 200-4 100", url: mapUrl("Tokyo Mystery Circus") },
      { name: "Shinjuku PIT INN", price: "¥3 000-7 000", url: mapUrl("Shinjuku PIT INN") }
    ]
  },
  {
    id: "d9",
    day: "День 9",
    date: "30.11",
    weekday: "Пн",
    city: "Осака",
    sleep: "Осака",
    title: "Токио -> Осака",
    short: "Синкансэн как часть поездки, Namba, Dotonbori, Glico и еда.",
    goal: "Переезд как часть поездки, не как бытовая каторга.",
    image: imageSet.train,
    tags: ["токио", "осака", "синкансэн", "namba", "dotonbori", "переезд"],
    planA: [
      "Tokyo Station: ekiben, Character Street, Marunouchi Building или KITTE Garden.",
      "Nozomi Tokyo/Shinagawa -> Shin-Osaka.",
      "Заселиться в Namba.",
      "Dotonbori / Glico / Hozenji Yokocho.",
      "Такояки, окономияки, поздний комбини."
    ],
    planB: [
      "Tsutenkaku / Shinsekai.",
      "Don Quijote Dotonbori Ferris Wheel.",
      "ROUND1 или Silver Ball Planet.",
      "SpaWorld вместо бара."
    ],
    stop: "После синкансэна не делать плотный туристический день.",
    highlights: [
      { name: "Nozomi Tokyo/Shinagawa -> Shin-Osaka", price: "примерно ¥14 720", url: "https://smart-ex.jp/en/index.php" },
      { name: "Ekibenya Matsuri", price: "¥1 000-2 500", url: mapUrl("Ekibenya Matsuri Tokyo Station") },
      { name: "Dotonbori / Glico", price: "бесплатно, еда по дороге", url: mapUrl("Dotonbori Glico Sign") },
      { name: "Tombori River Cruise", price: "¥2 000", url: mapUrl("Tombori River Cruise") },
      { name: "SpaWorld Osaka", price: "от ¥1 500", url: mapUrl("SpaWorld Osaka") }
    ]
  },
  {
    id: "d10",
    day: "День 10",
    date: "01.12",
    weekday: "Вт",
    city: "Осака",
    sleep: "Осака",
    title: "Осака большой микс",
    short: "Замок, рынок, аквариум или ботаника, вечерняя смотровая или онсен.",
    goal: "Собрать Осаку из 2-3 крупных блоков.",
    image: imageSet.osaka,
    tags: ["осака", "замок", "kaiyukan", "cup noodles", "onsen", "дождь"],
    planA: [
      "Osaka Castle Park + Osaka Castle Museum.",
      "Kuromon Ichiba Market.",
      "Osaka Aquarium Kaiyukan или Sakuya Konohana Kan.",
      "Вечером Umeda Sky Building или teamLab Botanical Garden."
    ],
    planB: [
      "Cup Noodles Museum.",
      "Osaka Museum of Housing and Living.",
      "Namba Grand Kagetsu.",
      "Solaniwa Onsen / SpaWorld."
    ],
    stop: "Kaiyukan, Cup Noodles и Osaka Castle в один день могут быть слишком разнесены. Выбрать центр тяжести.",
    highlights: [
      { name: "Osaka Castle Museum", price: "¥1 200", url: mapUrl("Osaka Castle Museum") },
      { name: "Kuromon Ichiba Market", price: "еда ¥2 000-5 000", url: mapUrl("Kuromon Ichiba Market") },
      { name: "Osaka Aquarium Kaiyukan", price: "¥2 700-3 500", url: mapUrl("Osaka Aquarium Kaiyukan") },
      { name: "teamLab Botanical Garden Osaka", price: "онлайн ¥1 800", url: mapUrl("teamLab Botanical Garden Osaka") },
      { name: "Solaniwa Onsen", price: "¥2 310-3 630", url: mapUrl("Solaniwa Onsen Osaka Bay Tower") }
    ]
  },
  {
    id: "d11",
    day: "День 11",
    date: "02.12",
    weekday: "Ср",
    city: "Нара",
    sleep: "Осака",
    title: "Осака - Нара - Осака",
    short: "Олени, Todai-ji, Kasuga, Nigatsudo, чай и спокойный возврат.",
    goal: "Древняя Япония, олени, храмы, спокойный возврат в Осаку.",
    image: imageSet.nara,
    tags: ["нара", "олени", "храмы", "чай", "e-bike"],
    planA: [
      "Osaka-Namba -> Kintetsu Nara.",
      "Nara Park.",
      "Todai-ji Daibutsuden.",
      "Kasuga Taisha.",
      "Nigatsudo к закату.",
      "Вечером Osaka и ужин."
    ],
    planB: [
      "Isuien Garden.",
      "Nara National Museum.",
      "Naramachi / Mochiidono.",
      "Harushika Sake Brewery, если успеваете до закрытия.",
      "Mount Wakakusa, если открыт и есть силы."
    ],
    stop: "Олени + Todai-ji + Kasuga уже делают день. Не перегружать Нарой на 10 часов.",
    highlights: [
      { name: "Kintetsu Nara", price: "дорога около ¥1 500", url: mapUrl("Kintetsu Nara Station") },
      { name: "Nara Park", price: "бесплатно, crackers около ¥200", url: mapUrl("Nara Park") },
      { name: "Todai-ji Daibutsuden", price: "¥800", url: mapUrl("Todai-ji Daibutsuden") },
      { name: "Mount Wakakusa", price: "¥150", url: mapUrl("Mount Wakakusa Nara") },
      { name: "Nara e-bike", price: "2 часа ¥3 000", url: mapUrl("Nara e-bike rental Kintetsu Nara") }
    ]
  },
  {
    id: "d12",
    day: "День 12",
    date: "03.12",
    weekday: "Чт",
    city: "Киото",
    sleep: "Осака",
    title: "Киото из Осаки",
    short: "Один сценарий: Fushimi + East Kyoto, Arashiyama или дождевые музеи.",
    goal: "Выбрать один сценарий Киото. Один, не все сразу.",
    image: imageSet.kyoto,
    tags: ["киото", "fushimi", "arashiyama", "лодки", "дождь", "чай"],
    planA: [
      "Fushimi Inari рано.",
      "Fushimi Jukoku-bune Boats, если забронировано.",
      "Kiyomizu-dera.",
      "Sannenzaka / Ninenzaka.",
      "Gion / Nishiki / Ippodo Tea."
    ],
    planB: [
      "Arashiyama: бамбуковая роща, Togetsukyo, лодки или река.",
      "Дождь: Kyoto Railway Museum, Toei Kyoto Studio Park, Samurai/Ninja Museum.",
      "Kyoto Tower перед обратной дорогой."
    ],
    stop: "Fushimi + Arashiyama + Kiyomizu в один день не делать.",
    highlights: [
      { name: "Fushimi Inari Taisha", price: "бесплатно", url: mapUrl("Fushimi Inari Taisha") },
      { name: "Fushimi Jukoku-bune Boats", price: "¥1 900", url: mapUrl("Fushimi Jukoku-bune Boats") },
      { name: "Kiyomizu-dera", price: "¥500", url: mapUrl("Kiyomizu-dera") },
      { name: "GEAR Theatre Kyoto", price: "¥3 800-7 800", url: mapUrl("GEAR Theatre Kyoto") },
      { name: "Ippodo Tea Kyoto", price: "чайный сет ¥1 430-2 860", url: mapUrl("Ippodo Tea Kyoto Main Store") }
    ]
  },
  {
    id: "d13",
    day: "День 13",
    date: "04.12",
    weekday: "Пт",
    city: "Осака",
    sleep: "Осака",
    title: "Universal Studios Japan",
    short: "Ранний старт, Nintendo, аттракционы, мерч, без лишнего героизма.",
    goal: "Ранний старт, Nintendo, аттракционы, мерч, без лишнего героизма.",
    image: imageSet.usj,
    tags: ["осака", "usj", "nintendo", "express", "парк"],
    planA: [
      "Выехать из Namba рано.",
      "Сразу работать через official USJ app.",
      "Поймать Timed Entry / Standby Entry для Super Nintendo World.",
      "Приоритеты: Super Nintendo World, Mario Kart, Donkey Kong, Harry Potter, Flying Dinosaur.",
      "Еда и мерч внутри парка или Universal CityWalk.",
      "Вернуться в Namba и не уходить в жесткий барный разнос."
    ],
    planB: ["Без запасного тяжелого плана. Весь день в парке."],
    stop: "Перед USJ не уходить в тяжелую ночь, потому что нужен ранний старт.",
    highlights: [
      { name: "Universal Studios Japan", price: "1-Day Studio Pass от ¥8 900", url: mapUrl("Universal Studios Japan") },
      { name: "USJ день без Express", price: "¥15 000-25 000 на человека" },
      { name: "Super Nintendo World", price: "Timed Entry / Standby Entry", url: mapUrl("Super Nintendo World Universal Studios Japan") },
      { name: "Power-Up Band", price: "¥4 900-5 900", url: mapUrl("Power-Up Band Super Nintendo World USJ") },
      { name: "Еда и мерч", price: "еда ¥2 500-5 000, мерч ¥3 000-10 000" }
    ]
  },
  {
    id: "d14",
    day: "День 14",
    date: "05.12",
    weekday: "Сб",
    city: "Осака",
    sleep: "самолет",
    title: "Осака утром и вылет",
    short: "Namba рядом с отелем, KIX к 11:30-12:00, вылет 14:35.",
    goal: "Не опоздать в KIX.",
    image: imageSet.airport,
    tags: ["осака", "kix", "аэропорт", "вылет", "namba"],
    planA: [
      "Завтрак около Namba.",
      "Namba Yasaka Shrine или Doguyasuji, если есть время.",
      "Последний Don Quijote / konbini.",
      "Nankai Namba -> Kansai Airport.",
      "Быть в KIX примерно к 11:30-12:00.",
      "Вылет 14:35."
    ],
    planB: [
      "Kansai Airport Observation Hall Sky View.",
      "Rinku Premium Outlets / Rinku Park только при реально большом запасе.",
      "551 HORAI в аэропорту."
    ],
    stop: "Никакой далекой Осаки, никакой Нары/Киото, никакого риска с чемоданами.",
    highlights: [
      { name: "Nankai Airport Express", price: "около ¥970", url: "https://www.nankai.co.jp/en_railway/traffic/express/rapit.html" },
      { name: "Limited Express Rapi:t", price: "около ¥1 490", url: "https://www.nankai.co.jp/en_railway/traffic/express/rapit.html" },
      { name: "Namba Yasaka Shrine", price: "бесплатно", url: mapUrl("Namba Yasaka Shrine") },
      { name: "551 HORAI Kansai Airport", price: "2 шт ¥460 / 4 шт ¥920", url: mapUrl("551 HORAI Kansai Airport") }
    ]
  },
  {
    id: "d15",
    day: "День 15",
    date: "06.12",
    weekday: "Вс",
    city: "Москва",
    sleep: "дома",
    title: "Прилет в Москву",
    short: "Багаж, документы, техника, чеки, фотки и остаток наличных.",
    goal: "Долететь и не потерять важные вещи.",
    image: imageSet.airport,
    tags: ["москва", "прилет", "финал"],
    planA: [
      "Прилет в Москву в 18:05.",
      "Проверить багаж, документы, карты, технику.",
      "Сохранить чеки, фото и остаток наличных."
    ],
    planB: ["Разобрать фотки, чеки, сувениры без спешки."],
    stop: "Не выбрасывать чеки и мелкие бумаги до финальной сверки.",
    highlights: [{ name: "Осака -> Москва", price: "39 613 ₽, возврат платный" }]
  }
];

const actions = [
  ["1", "Universal Studios Japan 1-Day Studio Pass", "04.12.2026. Пятница, лучше покупать заранее. Express Pass решить отдельно."],
  ["2", "Автобус Shinjuku -> Kawaguchiko", "24.11.2026 около 10:30. Базовый переезд к Фудзи."],
  ["3", "Автобус Kawaguchiko -> Shinjuku", "26.11.2026 около 11:30. Возврат в Токио."],
  ["4", "Синкансэн Tokyo/Shinagawa -> Shin-Osaka", "30.11.2026. Nozomi, reserved seat, проверить багаж."],
  ["5", "teamLab Borderless", "27.11.2026, если день оставляем за Минато/Азабудай."],
  ["6", "teamLab Planets", "28.11.2026. Брать только если хочется второго teamLab."],
  ["7", "Fushimi Jukoku-bune Boats", "03.12.2026. Сезон попадает на дату, но лодки лучше бронировать."],
  ["8", "Shibuya Sky / Tokyo Skytree / Blue Note / концерты", "Только если день точно выбран и погода или афиша подходят."],
  ["9", "Visit Japan Web и eSIM", "QR-коды сохранить скриншотами, связь решить до вылета."],
  ["10", "Документы в отели", "В плане отмечены отели, куда нужно скинуть документы."]
].map(([priority, title, text], index) => ({ id: `a${index}`, priority, title, text }));

const fixedItems = [
  { label: "Москва -> Токио", rub: 31406 },
  { label: "Осака -> Москва", rub: 39613 },
  { label: "Жилье: Токио 22-24", rub: 11876.69 },
  { label: "Жилье: Кавагутико 24-26", rub: 27447.15 },
  { label: "Жилье: Токио Минато 26-30", rub: 18972 },
  { label: "Жилье: Осака Namba 30-05", rub: 21922 }
];

const budgetOptions = [
  { id: "ic", group: "обязательное", name: "2 x IC-карта: стартовое пополнение", note: "примерно ¥3 000 каждому", min: 3000, max: 3000, people: 2, default: true },
  { id: "haneda", group: "обязательное", name: "Haneda -> отель общественным транспортом", note: "плановая альтернатива такси", min: 1630, max: 1630, people: 2, default: true },
  { id: "bus-fuji", group: "обязательное", name: "Автобусы Shinjuku <-> Kawaguchiko", note: "два переезда по ¥2 200", min: 4400, max: 4400, people: 2, default: true },
  { id: "shinkansen", group: "обязательное", name: "Nozomi Tokyo/Shinagawa -> Shin-Osaka", note: "reserved seat", min: 14720, max: 14720, people: 2, default: true },
  { id: "nara", group: "обязательное", name: "Осака -> Нара -> Осака", note: "день в Наре", min: 1500, max: 1500, people: 2, default: true },
  { id: "kyoto", group: "обязательное", name: "Осака -> Киото -> Осака", note: "дорога по Киото", min: 1500, max: 2000, people: 2, default: true },
  { id: "kix", group: "обязательное", name: "Namba -> Kansai Airport", note: "Airport Express или Rapi:t", min: 970, max: 1490, people: 2, default: true },
  { id: "usj", group: "дорогие решения", name: "USJ день без Express Pass", note: "еда, мерч и билет в рамках плана", min: 15000, max: 25000, people: 2, default: true },
  { id: "borderless", group: "дорогие решения", name: "teamLab Borderless", note: "27.11, динамическая цена", min: 3600, max: 5600, people: 2, default: true },
  { id: "planets", group: "опционально", name: "teamLab Planets", note: "второй teamLab только если хочется", min: 3600, max: 3600, people: 2, default: false },
  { id: "tokyo-tower", group: "опционально", name: "Tokyo Tower", note: "Main Deck или Top Deck", min: 1500, max: 3300, people: 2, default: true },
  { id: "blue-note", group: "опционально", name: "Blue Note Tokyo", note: "music charge, еда отдельно", min: 7700, max: 16800, people: 2, default: false },
  { id: "joypolis", group: "опционально", name: "Tokyo Joypolis Passport", note: "крытый SEGA-парк", min: 5800, max: 5800, people: 2, default: false },
  { id: "fuji-q", group: "опционально", name: "Fuji-Q Highland 1-Day Pass", note: "если Фудзи спрятался или хочется орать", min: 6000, max: 7800, people: 2, default: false },
  { id: "kaiyukan", group: "опционально", name: "Osaka Aquarium Kaiyukan", note: "динамический тариф", min: 2700, max: 3500, people: 2, default: false },
  { id: "fushimi-boats", group: "опционально", name: "Fushimi Jukoku-bune Boats", note: "03.12, лучше бронировать", min: 1900, max: 1900, people: 2, default: true },
  { id: "power-band", group: "опционально", name: "Power-Up Band в Super Nintendo World", note: "если хочется играть руками", min: 4900, max: 5900, people: 2, default: false }
];

const hotels = [
  ["Токио", "22.11-24.11", "оплачено, 11 876,69 ₽", "Заезд 16:00-22:00, выезд до 10:00"],
  ["Кавагутико", "24.11-26.11", "оплачено, 27 447,15 ₽", "Заезд 14:00-22:00, отмена до 16.11.2026"],
  ["Токио, Минато", "26.11-30.11", "оплачено, 18 972 ₽", "Заезд 14:00-24:00, нужно скинуть документы"],
  ["Осака, Namba", "30.11-05.12", "оплачено, 21 922 ₽", "Невозвратная бронь, выезд 05:00-11:00"]
];

const transfers = [
  ["22.11", "Haneda -> отель", "общественный транспорт, такси только если совсем устали", "1 630 ¥ / такси 12 470 ¥"],
  ["24.11", "Shinjuku -> Kawaguchiko", "автобус около 10:30", "2 200 ¥ за человека"],
  ["26.11", "Kawaguchiko -> Shinjuku", "автобус около 11:30", "2 200 ¥ за человека"],
  ["30.11", "Tokyo/Shinagawa -> Shin-Osaka", "Nozomi, reserved seat", "около 14 720 ¥ за человека"],
  ["02.12", "Osaka-Namba -> Kintetsu Nara -> Osaka", "день в Наре", "около 1 500 ¥ за человека"],
  ["03.12", "Osaka -> Kyoto -> Osaka", "день в Киото", "1 500-2 000 ¥ за человека"],
  ["05.12", "Namba -> Kansai Airport", "Airport Express или Rapi:t", "970-1 490 ¥ за человека"]
];

const rules = [
  ["Не больше 3 больших точек", "Если день начинает превращаться в список трофеев, оставить только главный сценарий и одну приятную добавку."],
  ["Переезд = вечер рядом", "В день с автобусом или синкансэном вечером планировать район рядом с отелем."],
  ["Фудзи виден утром", "Сначала ехать к видовым точкам, а музеи, Craft Park и онсен оставить на потом."],
  ["Дождь не продавить силой", "Переключаться на teamLab, Joypolis, музеи, аркады, Kaiyukan, Cup Noodles, SpaWorld."],
  ["Перед USJ без тяжелой ночи", "04.12 нужен ранний старт, приложение USJ и слот в Super Nintendo World."],
  ["05.12 без дальних точек", "Только Namba рядом с отелем и трансфер в KIX. Чемоданы важнее последней авантюры."],
  ["Еда каждый день", "На каждый день нужен хотя бы один понятный прием пищи. Konbini - инфраструктура, не провал."],
  ["Onsen как восстановление", "Sento и onsen ставить не как остаток времени, а как способ не развалиться."],
  ["Цены перепроверить", "В плане много цен заранее. Перед поездкой перепроверить тарифы, закрытия и правила входа."]
];

const state = {
  selectedDay: "d0",
  cityFilter: "all",
  search: "",
  actionChecks: readStore("jp-actions", {}),
  budgetChecks: readStore("jp-budget", {}),
  rate: Number(readStore("jp-rate", 0.48)) || 0.48
};

function readStore(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value == null ? fallback : JSON.parse(value);
  } catch {
    return fallback;
  }
}

function writeStore(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function el(selector) {
  return document.querySelector(selector);
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function formatRub(value) {
  return new Intl.NumberFormat("ru-RU", {
    maximumFractionDigits: 0
  }).format(value) + " ₽";
}

function formatYen(value) {
  return "¥" + new Intl.NumberFormat("ru-RU", { maximumFractionDigits: 0 }).format(value);
}

function rangeText(min, max, formatter) {
  return min === max ? formatter(min) : `${formatter(min)} - ${formatter(max)}`;
}

function getBudgetCheck(option) {
  return state.budgetChecks[option.id] ?? option.default;
}

function setBudgetCheck(optionId, checked) {
  state.budgetChecks[optionId] = checked;
  writeStore("jp-budget", state.budgetChecks);
}

function getActionCheck(action) {
  return Boolean(state.actionChecks[action.id]);
}

function setActionCheck(actionId, checked) {
  state.actionChecks[actionId] = checked;
  writeStore("jp-actions", state.actionChecks);
}

function callIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function visibleDays() {
  const q = state.search.trim().toLowerCase();
  return days.filter((day) => {
    const cityMatch =
      state.cityFilter === "all" ||
      day.city === state.cityFilter ||
      day.sleep === state.cityFilter ||
      day.tags.includes(state.cityFilter.toLowerCase());
    const haystack = [
      day.day,
      day.date,
      day.weekday,
      day.city,
      day.sleep,
      day.title,
      day.short,
      day.goal,
      day.stop,
      ...day.tags,
      ...day.planA,
      ...day.planB,
      ...day.highlights.map((h) => `${h.name} ${h.price}`)
    ]
      .join(" ")
      .toLowerCase();
    return cityMatch && (!q || haystack.includes(q));
  });
}

function ensureSelectedDay() {
  const visible = visibleDays();
  if (!visible.some((day) => day.id === state.selectedDay)) {
    state.selectedDay = visible[0]?.id ?? days[0].id;
  }
}

function renderDayTabs() {
  const visibleIds = new Set(visibleDays().map((day) => day.id));
  el("#day-tabs").innerHTML = days
    .map((day) => {
      const hidden = visibleIds.has(day.id) ? "" : " is-hidden";
      const active = day.id === state.selectedDay ? " is-active" : "";
      return `
        <button class="tab-button${active}${hidden}" type="button" data-day="${day.id}">
          <strong>${escapeHtml(day.date)} · ${escapeHtml(day.weekday)}</strong>
          <span>${escapeHtml(day.city)} · ${escapeHtml(day.day)}</span>
        </button>
      `;
    })
    .join("");
}

function renderDayDetail() {
  const day = days.find((item) => item.id === state.selectedDay) || days[0];
  const highlights = day.highlights
    .map((item) => {
      const body = `
        <strong>${escapeHtml(item.name)}</strong>
        <small>${escapeHtml(item.price)}</small>
      `;
      return item.url
        ? `<li><a href="${escapeHtml(item.url)}" target="_blank" rel="noreferrer">${body}</a></li>`
        : `<li><span>${body}</span></li>`;
    })
    .join("");

  el("#day-detail").innerHTML = `
    <div class="day-visual">
      <img src="${escapeHtml(day.image)}" alt="${escapeHtml(day.title)}" loading="lazy" />
      <div class="day-visual-content">
        <div class="day-meta">
          <span class="pill">${escapeHtml(day.day)}</span>
          <span class="pill">${escapeHtml(day.date)} · ${escapeHtml(day.weekday)}</span>
          <span class="pill">${escapeHtml(day.city)}</span>
          <span class="pill">ночь: ${escapeHtml(day.sleep)}</span>
        </div>
        <h3>${escapeHtml(day.title)}</h3>
        <p>${escapeHtml(day.goal)}</p>
      </div>
    </div>
    <div class="day-columns">
      <section class="detail-block accent">
        <h3><i data-lucide="route" aria-hidden="true"></i>План А</h3>
        <ul>${day.planA.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
      </section>
      <section class="detail-block">
        <h3><i data-lucide="cloud-rain" aria-hidden="true"></i>Запасной сценарий</h3>
        <ul>${day.planB.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
      </section>
      <section class="detail-block gold">
        <h3><i data-lucide="badge-alert" aria-hidden="true"></i>Стоп</h3>
        <p>${escapeHtml(day.stop)}</p>
      </section>
      <section class="detail-block">
        <h3><i data-lucide="map-pinned" aria-hidden="true"></i>Точки и деньги</h3>
        <ul class="highlight-list">${highlights}</ul>
      </section>
    </div>
  `;
}

function renderPhases() {
  el("#phase-grid").innerHTML = phases
    .map(
      (phase) => `
      <article class="phase-card">
        <img src="${escapeHtml(phase.image)}" alt="${escapeHtml(phase.title)}" loading="lazy" />
        <div class="phase-body">
          <span class="meta-label">${escapeHtml(phase.period)}</span>
          <strong>${escapeHtml(phase.title)}</strong>
          <p>${escapeHtml(phase.text)}</p>
        </div>
      </article>
    `
    )
    .join("");
}

function renderRouteMap() {
  const path =
    "M 62 94 C 120 22 210 72 268 154 C 300 188 326 222 346 262 C 366 218 392 176 426 154 C 482 170 526 214 564 266 C 616 238 662 166 676 104";
  const nodes = routeStops
    .map(
      (stop) => `
        <circle class="route-hop" cx="${stop.x}" cy="${stop.y}" r="20"></circle>
        <circle class="route-node${stop.major ? " is-major" : ""}" cx="${stop.x}" cy="${stop.y}" r="8"></circle>
        <text class="route-label" x="${stop.labelX}" y="${stop.labelY}">${escapeHtml(stop.title)}</text>
        <text class="route-date" x="${stop.dateX}" y="${stop.dateY}">${escapeHtml(stop.date)}</text>
      `
    )
    .join("");
  const list = routeStops
    .map(
      (stop) => `
        <li>
          <span class="route-stop-index">${escapeHtml(stop.index)}</span>
          <span>
            <strong>${escapeHtml(stop.title)} · ${escapeHtml(stop.date)}</strong>
            <span>${escapeHtml(stop.caption)}</span>
          </span>
        </li>
      `
    )
    .join("");

  el("#route-map").innerHTML = `
    <div class="route-map-inner">
      <div>
        <div class="route-svg-wrap">
          <svg class="route-svg" viewBox="0 0 720 400" role="img" aria-label="Москва, Токио, Кавагутико, Токио, Осака, Москва">
            <path class="route-path-shadow" d="${path}"></path>
            <path class="route-path" d="${path}"></path>
            ${nodes}
          </svg>
        </div>
        <div class="route-map-copy">
          <p class="section-kicker">Flight / Bus / Shinkansen</p>
          <h3>Один маршрут, разные режимы</h3>
          <p>
            Длинный перелет в Токио, короткая вылазка к Фудзи, возвращение в
            город, синкансэн до Осаки и спокойный вылет через KIX.
          </p>
        </div>
      </div>
      <ol class="route-stop-list">${list}</ol>
    </div>
  `;
}

function renderCityFilter() {
  const filters = ["all", "Токио", "Кавагутико", "Осака", "Нара", "Киото", "Самолет"];
  el("#city-filter").innerHTML = filters
    .map((filter) => {
      const label = filter === "all" ? "Все" : filter;
      const active = state.cityFilter === filter ? " is-active" : "";
      return `<button class="segment-button${active}" type="button" data-city="${escapeHtml(filter)}">${escapeHtml(label)}</button>`;
    })
    .join("");
}

function renderItineraryGrid() {
  const visibleIds = new Set(visibleDays().map((day) => day.id));
  el("#itinerary-grid").innerHTML = days
    .map((day) => {
      const hidden = visibleIds.has(day.id) ? "" : " is-hidden";
      return `
        <article class="itinerary-card${hidden}" data-card-day="${day.id}">
          <img src="${escapeHtml(day.image)}" alt="${escapeHtml(day.title)}" loading="lazy" />
          <div class="itinerary-body">
            <span class="meta-label">${escapeHtml(day.date)} · ${escapeHtml(day.weekday)}</span>
            <strong>${escapeHtml(day.title)}</strong>
            <p>${escapeHtml(day.short)}</p>
            <div class="itinerary-meta">
              <span class="soft-pill">${escapeHtml(day.city)}</span>
              <span class="soft-pill">ночь: ${escapeHtml(day.sleep)}</span>
            </div>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderActions() {
  el("#action-grid").innerHTML = actions
    .map(
      (action) => `
      <label class="action-card">
        <span class="check-control">
          <input type="checkbox" data-action="${action.id}" ${getActionCheck(action) ? "checked" : ""} />
        </span>
        <span>
          <span class="priority">приоритет ${escapeHtml(action.priority)}</span>
          <strong>${escapeHtml(action.title)}</strong>
          <p>${escapeHtml(action.text)}</p>
        </span>
      </label>
    `
    )
    .join("");
}

function selectedBudget() {
  return budgetOptions.reduce(
    (acc, option) => {
      if (getBudgetCheck(option)) {
        acc.min += option.min * option.people;
        acc.max += option.max * option.people;
        acc.count += 1;
      }
      return acc;
    },
    { min: 0, max: 0, count: 0 }
  );
}

function renderBudget() {
  const selected = selectedBudget();
  const fixedRub = fixedItems.reduce((sum, item) => sum + item.rub, 0);
  const yenRubMin = selected.min * state.rate;
  const yenRubMax = selected.max * state.rate;
  const totalMin = fixedRub + yenRubMin;
  const totalMax = fixedRub + yenRubMax;
  const lenaPercent = Math.min(100, Math.round((totalMax / 200000) * 100));
  const alexPercent = Math.min(100, Math.round((totalMax / 400000) * 100));
  const totalDisplay =
    totalMin === totalMax
      ? formatRub(totalMin)
      : `${formatRub(totalMin)}<span>до ${formatRub(totalMax)}</span>`;

  el("#budget-summary").innerHTML = `
    <span class="meta-label">Выбрано ${selected.count} позиций</span>
    <div class="budget-total">${totalDisplay}</div>
    <p>
      Зафиксированные рублевые записи из плана плюс выбранные расходы в йенах
      по курсу ${state.rate.toFixed(2)} ₽ за ¥1.
    </p>
    <div class="budget-bars">
      <div class="budget-bar">
        <label><span>Лимит Елены</span><span>${lenaPercent}%</span></label>
        <div class="bar-track"><div class="bar-fill red" style="width:${lenaPercent}%"></div></div>
      </div>
      <div class="budget-bar">
        <label><span>Лимит Александра</span><span>${alexPercent}%</span></label>
        <div class="bar-track"><div class="bar-fill" style="width:${alexPercent}%"></div></div>
      </div>
    </div>
    <ul class="fixed-list">
      <li><span>Фиксировано в рублях</span><strong>${formatRub(fixedRub)}</strong></li>
      <li><span>Выбранные йены</span><strong>${rangeText(selected.min, selected.max, formatYen)}</strong></li>
      <li><span>Йены в рублях</span><strong>${rangeText(yenRubMin, yenRubMax, formatRub)}</strong></li>
    </ul>
  `;

  el("#budget-options").innerHTML = budgetOptions
    .map((option) => {
      const min = option.min * option.people;
      const max = option.max * option.people;
      return `
        <label class="option-row">
          <input type="checkbox" data-budget="${option.id}" ${getBudgetCheck(option) ? "checked" : ""} />
          <span class="option-main">
            <strong>${escapeHtml(option.name)}</strong>
            <span>${escapeHtml(option.group)} · ${escapeHtml(option.note)} · ${option.people} чел.</span>
          </span>
          <span class="option-price">${rangeText(min, max, formatYen)}</span>
        </label>
      `;
    })
    .join("");
}

function renderTables() {
  el("#hotel-table").innerHTML = `
    <thead><tr><th>Где</th><th>Даты</th><th>Статус</th><th>Важно</th></tr></thead>
    <tbody>
      ${hotels
        .map(
          (row) =>
            `<tr>${row.map((cell) => `<td>${escapeHtml(cell)}</td>`).join("")}</tr>`
        )
        .join("")}
    </tbody>
  `;

  el("#transfer-table").innerHTML = `
    <thead><tr><th>Дата</th><th>Маршрут</th><th>План</th><th>Цена</th></tr></thead>
    <tbody>
      ${transfers
        .map(
          (row) =>
            `<tr>${row.map((cell) => `<td>${escapeHtml(cell)}</td>`).join("")}</tr>`
        )
        .join("")}
    </tbody>
  `;
}

function renderRules() {
  el("#rule-grid").innerHTML = rules
    .map(
      ([title, text]) => `
      <article class="rule-card">
        <h3>${escapeHtml(title)}</h3>
        <p>${escapeHtml(text)}</p>
      </article>
    `
    )
    .join("");
}

function renderAll() {
  ensureSelectedDay();
  renderDayTabs();
  renderDayDetail();
  renderRouteMap();
  renderPhases();
  renderCityFilter();
  renderItineraryGrid();
  renderActions();
  renderBudget();
  renderTables();
  renderRules();
  callIcons();
}

function bindEvents() {
  document.addEventListener("click", (event) => {
    const tab = event.target.closest("[data-day]");
    if (tab) {
      state.selectedDay = tab.dataset.day;
      renderDayTabs();
      renderDayDetail();
      callIcons();
      el("#today").scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    const city = event.target.closest("[data-city]");
    if (city) {
      state.cityFilter = city.dataset.city;
      renderCityFilter();
      renderDayTabs();
      renderItineraryGrid();
      ensureSelectedDay();
      renderDayTabs();
      renderDayDetail();
      callIcons();
      return;
    }

    const card = event.target.closest("[data-card-day]");
    if (card) {
      state.selectedDay = card.dataset.cardDay;
      renderDayTabs();
      renderDayDetail();
      callIcons();
      el("#today").scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    if (event.target.closest("#reset-day-filters")) {
      state.search = "";
      state.cityFilter = "all";
      el("#day-search").value = "";
      renderAll();
      return;
    }

    if (event.target.closest("#clear-actions")) {
      state.actionChecks = {};
      writeStore("jp-actions", state.actionChecks);
      renderActions();
    }
  });

  document.addEventListener("change", (event) => {
    const action = event.target.closest("[data-action]");
    if (action) {
      setActionCheck(action.dataset.action, action.checked);
      return;
    }

    const budget = event.target.closest("[data-budget]");
    if (budget) {
      setBudgetCheck(budget.dataset.budget, budget.checked);
      renderBudget();
      return;
    }
  });

  el("#day-search").addEventListener("input", (event) => {
    state.search = event.target.value;
    ensureSelectedDay();
    renderDayTabs();
    renderItineraryGrid();
    renderDayDetail();
    callIcons();
  });

  el("#yen-rate").value = state.rate;
  el("#yen-rate").addEventListener("input", (event) => {
    const next = Number(event.target.value);
    if (Number.isFinite(next) && next > 0) {
      state.rate = next;
      writeStore("jp-rate", state.rate);
      renderBudget();
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderAll();
  bindEvents();
});
