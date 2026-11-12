/**
 * data/data_module4.js — Раздел 4: Реки, озёра, водопады
 * ГеоАтлас v9.0 (Общее Землеведение, БГУ)
 */

window.GEO_MODULES_REGISTRY = window.GEO_MODULES_REGISTRY || {};

const MODULE4_ITEMS = [
  {
    "id": "m4_riv_amudarya",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_eurasia",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Амударья (с Пянджем)",
    "aliases": [],
    "region": "Евразия",
    "locationDesc": "Евразия (Памир ➔ Аральское море)",
    "mapPrompt": "Покажите реку: Амударья (с Пянджем)",
    "geometryType": "polyline",
    "lat": 39.0,
    "lng": 64.0,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        37.0,
        71.5
      ],
      [
        37.5,
        68.0
      ],
      [
        39.5,
        63.0
      ],
      [
        42.5,
        59.5
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "eurasia",
    "lengthKm": 2540,
    "sourceMouth": "Памир ➔ Аральское море",
    "tributaries": [
      "Пяндж",
      "Вахш",
      "Кундуз",
      "Сурхандарья"
    ],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Амударья (с Пянджем)",
      "backMainAnswer": "Евразия • Памир ➔ Аральское море",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Памир ➔ Аральское море"
        },
        {
          "label": "Длина",
          "value": "2540 км"
        },
        {
          "label": "Главные притоки",
          "value": "Пяндж, Вахш, Кундуз, Сурхандарья"
        }
      ],
      "backNote": "Река Амударья (с Пянджем): Памир ➔ Аральское море."
    }
  },
  {
    "id": "m4_riv_amur",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_eurasia",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Амур",
    "aliases": [
      "Шэлунцзян",
      "Черный дракон"
    ],
    "region": "Евразия",
    "locationDesc": "Евразия (Слияние Шилки и Аргуни ➔ Амурский лиман (Охотское море))",
    "mapPrompt": "Покажите реку: Амур",
    "geometryType": "polyline",
    "lat": 50.5,
    "lng": 130.0,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        53.3,
        121.5
      ],
      [
        50.0,
        127.5
      ],
      [
        48.0,
        132.5
      ],
      [
        48.5,
        135.0
      ],
      [
        53.0,
        140.7
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "eurasia",
    "lengthKm": 2824,
    "sourceMouth": "Слияние Шилки и Аргуни ➔ Амурский лиман (Охотское море)",
    "tributaries": [
      "Зея",
      "Бурея",
      "Сунгари",
      "Уссури",
      "Амгунь"
    ],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Амур",
      "backMainAnswer": "Евразия • Слияние Шилки и Аргуни ➔ Амурский лиман (Охотское море)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Слияние Шилки и Аргуни ➔ Амурский лиман (Охотское море)"
        },
        {
          "label": "Длина",
          "value": "2824 км"
        },
        {
          "label": "Главные притоки",
          "value": "Зея, Бурея, Сунгари, Уссури, Амгунь"
        }
      ],
      "backNote": "Река Амур: Слияние Шилки и Аргуни ➔ Амурский лиман (Охотское море)."
    }
  },
  {
    "id": "m4_riv_shilka",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_eurasia",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Шилка",
    "aliases": [],
    "region": "Евразия",
    "locationDesc": "Евразия (Забайкалье ➔ исток Амура)",
    "mapPrompt": "Покажите реку: Шилка",
    "geometryType": "polyline",
    "lat": 52.8,
    "lng": 118.5,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        52.0,
        115.5
      ],
      [
        53.3,
        121.5
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "eurasia",
    "lengthKm": 560,
    "sourceMouth": "Забайкалье ➔ исток Амура",
    "tributaries": [
      "Ингода",
      "Онон"
    ],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Шилка",
      "backMainAnswer": "Евразия • Забайкалье ➔ исток Амура",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Забайкалье ➔ исток Амура"
        },
        {
          "label": "Длина",
          "value": "560 км"
        },
        {
          "label": "Главные притоки",
          "value": "Ингода, Онон"
        }
      ],
      "backNote": "Река Шилка: Забайкалье ➔ исток Амура."
    }
  },
  {
    "id": "m4_riv_argun",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_eurasia",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Аргунь",
    "aliases": [],
    "region": "Евразия",
    "locationDesc": "Евразия (Большой Хинган ➔ исток Амура)",
    "mapPrompt": "Покажите реку: Аргунь",
    "geometryType": "polyline",
    "lat": 51.0,
    "lng": 120.0,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        49.0,
        120.0
      ],
      [
        51.5,
        119.5
      ],
      [
        53.3,
        121.5
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "eurasia",
    "lengthKm": 1620,
    "sourceMouth": "Большой Хинган ➔ исток Амура",
    "tributaries": [
      "Хайлар"
    ],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Аргунь",
      "backMainAnswer": "Евразия • Большой Хинган ➔ исток Амура",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Большой Хинган ➔ исток Амура"
        },
        {
          "label": "Длина",
          "value": "1620 км"
        },
        {
          "label": "Главные притоки",
          "value": "Хайлар"
        }
      ],
      "backNote": "Река Аргунь: Большой Хинган ➔ исток Амура."
    }
  },
  {
    "id": "m4_riv_amgun",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_eurasia",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Амгунь",
    "aliases": [],
    "region": "Евразия",
    "locationDesc": "Евразия (Буреинский хребет ➔ Амур (нижнее течение))",
    "mapPrompt": "Покажите реку: Амгунь",
    "geometryType": "polyline",
    "lat": 52.3,
    "lng": 136.5,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        51.5,
        134.0
      ],
      [
        52.8,
        139.5
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "eurasia",
    "lengthKm": 723,
    "sourceMouth": "Буреинский хребет ➔ Амур (нижнее течение)",
    "tributaries": [],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Амгунь",
      "backMainAnswer": "Евразия • Буреинский хребет ➔ Амур (нижнее течение)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Буреинский хребет ➔ Амур (нижнее течение)"
        },
        {
          "label": "Длина",
          "value": "723 км"
        },
        {
          "label": "Главные притоки",
          "value": "—"
        }
      ],
      "backNote": "Река Амгунь: Буреинский хребет ➔ Амур (нижнее течение)."
    }
  },
  {
    "id": "m4_riv_bureya",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_eurasia",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Бурея",
    "aliases": [],
    "region": "Евразия",
    "locationDesc": "Евразия (Хребет Дуссе-Алинь ➔ Амур)",
    "mapPrompt": "Покажите реку: Бурея",
    "geometryType": "polyline",
    "lat": 50.5,
    "lng": 131.0,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        51.5,
        133.0
      ],
      [
        49.4,
        129.7
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "eurasia",
    "lengthKm": 623,
    "sourceMouth": "Хребет Дуссе-Алинь ➔ Амур",
    "tributaries": [],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Бурея",
      "backMainAnswer": "Евразия • Хребет Дуссе-Алинь ➔ Амур",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Хребет Дуссе-Алинь ➔ Амур"
        },
        {
          "label": "Длина",
          "value": "623 км"
        },
        {
          "label": "Главные притоки",
          "value": "—"
        }
      ],
      "backNote": "Река Бурея: Хребет Дуссе-Алинь ➔ Амур."
    }
  },
  {
    "id": "m4_riv_zeya",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_eurasia",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Зея",
    "aliases": [],
    "region": "Евразия",
    "locationDesc": "Евразия (Хребет Токинский Становик ➔ Амур (Благовещенск))",
    "mapPrompt": "Покажите реку: Зея",
    "geometryType": "polyline",
    "lat": 53.0,
    "lng": 128.0,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        55.0,
        130.0
      ],
      [
        53.7,
        127.3
      ],
      [
        50.2,
        127.6
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "eurasia",
    "lengthKm": 1242,
    "sourceMouth": "Хребет Токинский Становик ➔ Амур (Благовещенск)",
    "tributaries": [
      "Селемджа",
      "Гилюй"
    ],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Зея",
      "backMainAnswer": "Евразия • Хребет Токинский Становик ➔ Амур (Благовещенск)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Хребет Токинский Становик ➔ Амур (Благовещенск)"
        },
        {
          "label": "Длина",
          "value": "1242 км"
        },
        {
          "label": "Главные притоки",
          "value": "Селемджа, Гилюй"
        }
      ],
      "backNote": "Река Зея: Хребет Токинский Становик ➔ Амур (Благовещенск)."
    }
  },
  {
    "id": "m4_riv_sungari",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_eurasia",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Сунгари",
    "aliases": [],
    "region": "Евразия",
    "locationDesc": "Евразия (Вулкан Пэктусан ➔ Амур (крупнейший приток Амура))",
    "mapPrompt": "Покажите реку: Сунгари",
    "geometryType": "polyline",
    "lat": 45.5,
    "lng": 128.0,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        42.0,
        128.0
      ],
      [
        44.0,
        125.0
      ],
      [
        45.8,
        126.5
      ],
      [
        47.7,
        132.5
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "eurasia",
    "lengthKm": 1927,
    "sourceMouth": "Вулкан Пэктусан ➔ Амур (крупнейший приток Амура)",
    "tributaries": [],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Сунгари",
      "backMainAnswer": "Евразия • Вулкан Пэктусан ➔ Амур (крупнейший приток Амура)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Вулкан Пэктусан ➔ Амур (крупнейший приток Амура)"
        },
        {
          "label": "Длина",
          "value": "1927 км"
        },
        {
          "label": "Главные притоки",
          "value": "—"
        }
      ],
      "backNote": "Река Сунгари: Вулкан Пэктусан ➔ Амур (крупнейший приток Амура)."
    }
  },
  {
    "id": "m4_riv_ussuri",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_eurasia",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Уссури",
    "aliases": [],
    "region": "Евразия",
    "locationDesc": "Евразия (Сихотэ-Алинь ➔ Амур (Хабаровск))",
    "mapPrompt": "Покажите реку: Уссури",
    "geometryType": "polyline",
    "lat": 46.5,
    "lng": 134.0,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        44.5,
        133.5
      ],
      [
        46.5,
        134.3
      ],
      [
        48.4,
        135.0
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "eurasia",
    "lengthKm": 897,
    "sourceMouth": "Сихотэ-Алинь ➔ Амур (Хабаровск)",
    "tributaries": [],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Уссури",
      "backMainAnswer": "Евразия • Сихотэ-Алинь ➔ Амур (Хабаровск)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Сихотэ-Алинь ➔ Амур (Хабаровск)"
        },
        {
          "label": "Длина",
          "value": "897 км"
        },
        {
          "label": "Главные притоки",
          "value": "—"
        }
      ],
      "backNote": "Река Уссури: Сихотэ-Алинь ➔ Амур (Хабаровск)."
    }
  },
  {
    "id": "m4_riv_brahmaputra",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_eurasia",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Брахмапутра",
    "aliases": [],
    "region": "Евразия",
    "locationDesc": "Евразия (Гималаи (Тибет, Мацанг) ➔ Бенгальский залив (общая дельта с Гангом))",
    "mapPrompt": "Покажите реку: Брахмапутра",
    "geometryType": "polyline",
    "lat": 27.5,
    "lng": 92.0,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        30.0,
        82.5
      ],
      [
        29.2,
        91.0
      ],
      [
        28.0,
        95.0
      ],
      [
        26.0,
        91.5
      ],
      [
        24.0,
        89.8
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "eurasia",
    "lengthKm": 2896,
    "sourceMouth": "Гималаи (Тибет, Мацанг) ➔ Бенгальский залив (общая дельта с Гангом)",
    "tributaries": [
      "Цангпо",
      "Джамуна"
    ],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Брахмапутра",
      "backMainAnswer": "Евразия • Гималаи (Тибет, Мацанг) ➔ Бенгальский залив (общая дельта с Гангом)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Гималаи (Тибет, Мацанг) ➔ Бенгальский залив (общая дельта с Гангом)"
        },
        {
          "label": "Длина",
          "value": "2896 км"
        },
        {
          "label": "Главные притоки",
          "value": "Цангпо, Джамуна"
        }
      ],
      "backNote": "Река Брахмапутра: Гималаи (Тибет, Мацанг) ➔ Бенгальский залив (общая дельта с Гангом)."
    }
  },
  {
    "id": "m4_riv_vistula",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_eurasia",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Висла",
    "aliases": [],
    "region": "Евразия",
    "locationDesc": "Евразия (Западные Карпаты ➔ Балтийское море (Гданьский залив))",
    "mapPrompt": "Покажите реку: Висла",
    "geometryType": "polyline",
    "lat": 52.0,
    "lng": 21.0,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        49.6,
        19.0
      ],
      [
        50.0,
        20.0
      ],
      [
        52.2,
        21.0
      ],
      [
        54.3,
        18.9
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "eurasia",
    "lengthKm": 1047,
    "sourceMouth": "Западные Карпаты ➔ Балтийское море (Гданьский залив)",
    "tributaries": [
      "Западный Буг",
      "Сан",
      "Нарев"
    ],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Висла",
      "backMainAnswer": "Евразия • Западные Карпаты ➔ Балтийское море (Гданьский залив)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Западные Карпаты ➔ Балтийское море (Гданьский залив)"
        },
        {
          "label": "Длина",
          "value": "1047 км"
        },
        {
          "label": "Главные притоки",
          "value": "Западный Буг, Сан, Нарев"
        }
      ],
      "backNote": "Река Висла: Западные Карпаты ➔ Балтийское море (Гданьский залив)."
    }
  },
  {
    "id": "m4_riv_bug_river",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_eurasia",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Западный Буг",
    "aliases": [],
    "region": "Евразия",
    "locationDesc": "Евразия (Подольская возвышенность ➔ Нарев (бассейн Вислы))",
    "mapPrompt": "Покажите реку: Западный Буг",
    "geometryType": "polyline",
    "lat": 51.5,
    "lng": 23.5,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        49.9,
        24.8
      ],
      [
        52.1,
        23.2
      ],
      [
        52.6,
        21.1
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "eurasia",
    "lengthKm": 772,
    "sourceMouth": "Подольская возвышенность ➔ Нарев (бассейн Вислы)",
    "tributaries": [],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Западный Буг",
      "backMainAnswer": "Евразия • Подольская возвышенность ➔ Нарев (бассейн Вислы)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Подольская возвышенность ➔ Нарев (бассейн Вислы)"
        },
        {
          "label": "Длина",
          "value": "772 км"
        },
        {
          "label": "Главные притоки",
          "value": "—"
        }
      ],
      "backNote": "Река Западный Буг: Подольская возвышенность ➔ Нарев (бассейн Вислы)."
    }
  },
  {
    "id": "m4_riv_volga",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_eurasia",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Волга",
    "aliases": [],
    "region": "Евразия",
    "locationDesc": "Евразия (Валдайская возвышенность ➔ Каспийское море (длиннейшая река Европы))",
    "mapPrompt": "Покажите реку: Волга",
    "geometryType": "polyline",
    "lat": 54.0,
    "lng": 48.0,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        57.25,
        32.47
      ],
      [
        57.6,
        39.8
      ],
      [
        56.3,
        44.0
      ],
      [
        55.8,
        49.1
      ],
      [
        53.2,
        50.1
      ],
      [
        48.7,
        44.5
      ],
      [
        45.7,
        48.0
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "eurasia",
    "lengthKm": 3530,
    "sourceMouth": "Валдайская возвышенность ➔ Каспийское море (длиннейшая река Европы)",
    "tributaries": [
      "Кама",
      "Ока",
      "Ветлуга",
      "Сура",
      "Самара"
    ],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Волга",
      "backMainAnswer": "Евразия • Валдайская возвышенность ➔ Каспийское море (длиннейшая река Европы)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Валдайская возвышенность ➔ Каспийское море (длиннейшая река Европы)"
        },
        {
          "label": "Длина",
          "value": "3530 км"
        },
        {
          "label": "Главные притоки",
          "value": "Кама, Ока, Ветлуга, Сура, Самара"
        }
      ],
      "backNote": "Река Волга: Валдайская возвышенность ➔ Каспийское море (длиннейшая река Европы)."
    }
  },
  {
    "id": "m4_riv_kama",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_eurasia",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Кама",
    "aliases": [],
    "region": "Евразия",
    "locationDesc": "Евразия (Верхнекамская возвышенность ➔ Волга (Куйбышевское водохранилище))",
    "mapPrompt": "Покажите реку: Кама",
    "geometryType": "polyline",
    "lat": 57.5,
    "lng": 54.5,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        58.2,
        53.3
      ],
      [
        60.0,
        55.5
      ],
      [
        58.0,
        56.2
      ],
      [
        55.2,
        49.9
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "eurasia",
    "lengthKm": 1805,
    "sourceMouth": "Верхнекамская возвышенность ➔ Волга (Куйбышевское водохранилище)",
    "tributaries": [
      "Вятка",
      "Белая",
      "Чусовая",
      "Вишера"
    ],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Кама",
      "backMainAnswer": "Евразия • Верхнекамская возвышенность ➔ Волга (Куйбышевское водохранилище)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Верхнекамская возвышенность ➔ Волга (Куйбышевское водохранилище)"
        },
        {
          "label": "Длина",
          "value": "1805 км"
        },
        {
          "label": "Главные притоки",
          "value": "Вятка, Белая, Чусовая, Вишера"
        }
      ],
      "backNote": "Река Кама: Верхнекамская возвышенность ➔ Волга (Куйбышевское водохранилище)."
    }
  },
  {
    "id": "m4_riv_oka",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_eurasia",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Ока",
    "aliases": [],
    "region": "Евразия",
    "locationDesc": "Евразия (Среднерусская возвышенность ➔ Волга (Нижний Новгород))",
    "mapPrompt": "Покажите реку: Ока",
    "geometryType": "polyline",
    "lat": 54.8,
    "lng": 39.5,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        52.4,
        36.2
      ],
      [
        54.5,
        36.2
      ],
      [
        54.9,
        38.8
      ],
      [
        56.3,
        43.9
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "eurasia",
    "lengthKm": 1500,
    "sourceMouth": "Среднерусская возвышенность ➔ Волга (Нижний Новгород)",
    "tributaries": [
      "Москва",
      "Клязьма",
      "Мокша",
      "Упа"
    ],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Ока",
      "backMainAnswer": "Евразия • Среднерусская возвышенность ➔ Волга (Нижний Новгород)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Среднерусская возвышенность ➔ Волга (Нижний Новгород)"
        },
        {
          "label": "Длина",
          "value": "1500 км"
        },
        {
          "label": "Главные притоки",
          "value": "Москва, Клязьма, Мокша, Упа"
        }
      ],
      "backNote": "Река Ока: Среднерусская возвышенность ➔ Волга (Нижний Новгород)."
    }
  },
  {
    "id": "m4_riv_ganges",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_eurasia",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Ганг",
    "aliases": [],
    "region": "Евразия",
    "locationDesc": "Евразия (Западные Гималаи (ледник Ганготри) ➔ Бенгальский залив)",
    "mapPrompt": "Покажите реку: Ганг",
    "geometryType": "polyline",
    "lat": 26.0,
    "lng": 83.0,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        31.0,
        79.0
      ],
      [
        26.5,
        80.5
      ],
      [
        25.5,
        85.0
      ],
      [
        23.0,
        89.0
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "eurasia",
    "lengthKm": 2700,
    "sourceMouth": "Западные Гималаи (ледник Ганготри) ➔ Бенгальский залив",
    "tributaries": [
      "Ямуна (Джамна)",
      "Гхагхра",
      "Гандак",
      "Коси",
      "Сон"
    ],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Ганг",
      "backMainAnswer": "Евразия • Западные Гималаи (ледник Ганготри) ➔ Бенгальский залив",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Западные Гималаи (ледник Ганготри) ➔ Бенгальский залив"
        },
        {
          "label": "Длина",
          "value": "2700 км"
        },
        {
          "label": "Главные притоки",
          "value": "Ямуна (Джамна), Гхагхра, Гандак, Коси, Сон"
        }
      ],
      "backNote": "Река Ганг: Западные Гималаи (ледник Ганготри) ➔ Бенгальский залив."
    }
  },
  {
    "id": "m4_riv_garonne",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_eurasia",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Гаронна",
    "aliases": [],
    "region": "Евразия",
    "locationDesc": "Евразия (Пиренеи (Испания) ➔ Жиронда (Бискайский залив, Атлантика))",
    "mapPrompt": "Покажите реку: Гаронна",
    "geometryType": "polyline",
    "lat": 43.8,
    "lng": 1.0,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        42.7,
        0.8
      ],
      [
        43.6,
        1.4
      ],
      [
        44.8,
        -0.6
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "eurasia",
    "lengthKm": 647,
    "sourceMouth": "Пиренеи (Испания) ➔ Жиронда (Бискайский залив, Атлантика)",
    "tributaries": [
      "Тарн",
      "Ло"
    ],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Гаронна",
      "backMainAnswer": "Евразия • Пиренеи (Испания) ➔ Жиронда (Бискайский залив, Атлантика)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Пиренеи (Испания) ➔ Жиронда (Бискайский залив, Атлантика)"
        },
        {
          "label": "Длина",
          "value": "647 км"
        },
        {
          "label": "Главные притоки",
          "value": "Тарн, Ло"
        }
      ],
      "backNote": "Река Гаронна: Пиренеи (Испания) ➔ Жиронда (Бискайский залив, Атлантика)."
    }
  },
  {
    "id": "m4_riv_guadalquivir",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_eurasia",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Гвадалквивир",
    "aliases": [],
    "region": "Евразия",
    "locationDesc": "Евразия (Андалусские горы ➔ Кадисский залив (Атлантический океан))",
    "mapPrompt": "Покажите реку: Гвадалквивир",
    "geometryType": "polyline",
    "lat": 37.5,
    "lng": -5.0,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        37.9,
        -2.9
      ],
      [
        37.9,
        -3.8
      ],
      [
        37.4,
        -6.0
      ],
      [
        36.8,
        -6.3
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "eurasia",
    "lengthKm": 657,
    "sourceMouth": "Андалусские горы ➔ Кадисский залив (Атлантический океан)",
    "tributaries": [
      "Хениль"
    ],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Гвадалквивир",
      "backMainAnswer": "Евразия • Андалусские горы ➔ Кадисский залив (Атлантический океан)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Андалусские горы ➔ Кадисский залив (Атлантический океан)"
        },
        {
          "label": "Длина",
          "value": "657 км"
        },
        {
          "label": "Главные притоки",
          "value": "Хениль"
        }
      ],
      "backNote": "Река Гвадалквивир: Андалусские горы ➔ Кадисский залив (Атлантический океан)."
    }
  },
  {
    "id": "m4_riv_guadiana",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_eurasia",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Гвадиана",
    "aliases": [],
    "region": "Евразия",
    "locationDesc": "Евразия (Плато Ла-Манча (Испания) ➔ Кадисский залив (граница Испании и Португалии))",
    "mapPrompt": "Покажите реку: Гвадиана",
    "geometryType": "polyline",
    "lat": 38.5,
    "lng": -6.5,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        39.0,
        -3.0
      ],
      [
        38.9,
        -6.8
      ],
      [
        37.2,
        -7.4
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "eurasia",
    "lengthKm": 818,
    "sourceMouth": "Плато Ла-Манча (Испания) ➔ Кадисский залив (граница Испании и Португалии)",
    "tributaries": [],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Гвадиана",
      "backMainAnswer": "Евразия • Плато Ла-Манча (Испания) ➔ Кадисский залив (граница Испании и Португалии)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Плато Ла-Манча (Испания) ➔ Кадисский залив (граница Испании и Португалии)"
        },
        {
          "label": "Длина",
          "value": "818 км"
        },
        {
          "label": "Главные притоки",
          "value": "—"
        }
      ],
      "backNote": "Река Гвадиана: Плато Ла-Манча (Испания) ➔ Кадисский залив (граница Испании и Португалии)."
    }
  },
  {
    "id": "m4_riv_godavari",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_eurasia",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Годавари (Годи)",
    "aliases": [],
    "region": "Евразия",
    "locationDesc": "Евразия (Западные Гаты ➔ Бенгальский залив (Индия))",
    "mapPrompt": "Покажите реку: Годавари (Годи)",
    "geometryType": "polyline",
    "lat": 18.5,
    "lng": 78.5,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        19.9,
        73.5
      ],
      [
        18.8,
        79.0
      ],
      [
        16.7,
        82.2
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "eurasia",
    "lengthKm": 1465,
    "sourceMouth": "Западные Гаты ➔ Бенгальский залив (Индия)",
    "tributaries": [
      "Вайганга",
      "Индравати"
    ],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Годавари (Годи)",
      "backMainAnswer": "Евразия • Западные Гаты ➔ Бенгальский залив (Индия)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Западные Гаты ➔ Бенгальский залив (Индия)"
        },
        {
          "label": "Длина",
          "value": "1465 км"
        },
        {
          "label": "Главные притоки",
          "value": "Вайганга, Индравати"
        }
      ],
      "backNote": "Река Годавари (Годи): Западные Гаты ➔ Бенгальский залив (Индия)."
    }
  },
  {
    "id": "m4_riv_helmand",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_eurasia",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Гильменд",
    "aliases": [],
    "region": "Евразия",
    "locationDesc": "Евразия (Гиндукуш (Афганистан) ➔ бессточные озёра Хамун (Иран))",
    "mapPrompt": "Покажите реку: Гильменд",
    "geometryType": "polyline",
    "lat": 32.5,
    "lng": 64.5,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        34.4,
        68.7
      ],
      [
        32.0,
        64.5
      ],
      [
        31.0,
        61.8
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "eurasia",
    "lengthKm": 1150,
    "sourceMouth": "Гиндукуш (Афганистан) ➔ бессточные озёра Хамун (Иран)",
    "tributaries": [
      "Аргандаб"
    ],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Гильменд",
      "backMainAnswer": "Евразия • Гиндукуш (Афганистан) ➔ бессточные озёра Хамун (Иран)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Гиндукуш (Афганистан) ➔ бессточные озёра Хамун (Иран)"
        },
        {
          "label": "Длина",
          "value": "1150 км"
        },
        {
          "label": "Главные притоки",
          "value": "Аргандаб"
        }
      ],
      "backNote": "Река Гильменд: Гиндукуш (Афганистан) ➔ бессточные озёра Хамун (Иран)."
    }
  },
  {
    "id": "m4_riv_dnieper",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_eurasia",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Днепр",
    "aliases": [],
    "region": "Евразия",
    "locationDesc": "Евразия (Валдайская возвышенность ➔ Чёрное море (Днепровский лиман))",
    "mapPrompt": "Покажите реку: Днепр",
    "geometryType": "polyline",
    "lat": 51.0,
    "lng": 31.0,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        55.8,
        33.7
      ],
      [
        54.8,
        31.8
      ],
      [
        52.0,
        30.5
      ],
      [
        50.4,
        30.5
      ],
      [
        48.4,
        35.0
      ],
      [
        46.6,
        32.3
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "eurasia",
    "lengthKm": 2201,
    "sourceMouth": "Валдайская возвышенность ➔ Чёрное море (Днепровский лиман)",
    "tributaries": [
      "Березина",
      "Припять",
      "Сож",
      "Десна",
      "Ворскла",
      "Псёл"
    ],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Днепр",
      "backMainAnswer": "Евразия • Валдайская возвышенность ➔ Чёрное море (Днепровский лиман)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Валдайская возвышенность ➔ Чёрное море (Днепровский лиман)"
        },
        {
          "label": "Длина",
          "value": "2201 км"
        },
        {
          "label": "Главные притоки",
          "value": "Березина, Припять, Сож, Десна, Ворскла, Псёл"
        }
      ],
      "backNote": "Река Днепр: Валдайская возвышенность ➔ Чёрное море (Днепровский лиман)."
    }
  },
  {
    "id": "m4_riv_berezina",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_eurasia",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Березина",
    "aliases": [],
    "region": "Евразия",
    "locationDesc": "Евразия (Минская возвышенность (Беларусь) ➔ Днепр (правый приток))",
    "mapPrompt": "Покажите реку: Березина",
    "geometryType": "polyline",
    "lat": 53.5,
    "lng": 29.2,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        54.9,
        27.8
      ],
      [
        54.2,
        28.5
      ],
      [
        53.1,
        29.5
      ],
      [
        52.5,
        30.3
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "eurasia",
    "lengthKm": 613,
    "sourceMouth": "Минская возвышенность (Беларусь) ➔ Днепр (правый приток)",
    "tributaries": [],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Березина",
      "backMainAnswer": "Евразия • Минская возвышенность (Беларусь) ➔ Днепр (правый приток)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Минская возвышенность (Беларусь) ➔ Днепр (правый приток)"
        },
        {
          "label": "Длина",
          "value": "613 км"
        },
        {
          "label": "Главные притоки",
          "value": "—"
        }
      ],
      "backNote": "Река Березина: Минская возвышенность (Беларусь) ➔ Днепр (правый приток)."
    }
  },
  {
    "id": "m4_riv_pripyat",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_eurasia",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Припять",
    "aliases": [],
    "region": "Евразия",
    "locationDesc": "Евразия (Волынская возвышенность ➔ Днепр (Киевское водохранилище))",
    "mapPrompt": "Покажите реку: Припять",
    "geometryType": "polyline",
    "lat": 52.0,
    "lng": 27.0,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        51.3,
        23.8
      ],
      [
        52.1,
        26.0
      ],
      [
        52.1,
        28.0
      ],
      [
        51.2,
        30.5
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "eurasia",
    "lengthKm": 775,
    "sourceMouth": "Волынская возвышенность ➔ Днепр (Киевское водохранилище)",
    "tributaries": [
      "Горынь",
      "Стыр",
      "Птичь"
    ],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Припять",
      "backMainAnswer": "Евразия • Волынская возвышенность ➔ Днепр (Киевское водохранилище)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Волынская возвышенность ➔ Днепр (Киевское водохранилище)"
        },
        {
          "label": "Длина",
          "value": "775 км"
        },
        {
          "label": "Главные притоки",
          "value": "Горынь, Стыр, Птичь"
        }
      ],
      "backNote": "Река Припять: Волынская возвышенность ➔ Днепр (Киевское водохранилище)."
    }
  },
  {
    "id": "m4_riv_sozh",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_eurasia",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Сож",
    "aliases": [],
    "region": "Евразия",
    "locationDesc": "Евразия (Смоленско-Московская возвышенность ➔ Днепр (Лоев))",
    "mapPrompt": "Покажите реку: Сож",
    "geometryType": "polyline",
    "lat": 53.0,
    "lng": 31.2,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        54.6,
        32.0
      ],
      [
        53.5,
        31.5
      ],
      [
        52.4,
        31.0
      ],
      [
        51.9,
        30.6
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "eurasia",
    "lengthKm": 648,
    "sourceMouth": "Смоленско-Московская возвышенность ➔ Днепр (Лоев)",
    "tributaries": [],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Сож",
      "backMainAnswer": "Евразия • Смоленско-Московская возвышенность ➔ Днепр (Лоев)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Смоленско-Московская возвышенность ➔ Днепр (Лоев)"
        },
        {
          "label": "Длина",
          "value": "648 км"
        },
        {
          "label": "Главные притоки",
          "value": "—"
        }
      ],
      "backNote": "Река Сож: Смоленско-Московская возвышенность ➔ Днепр (Лоев)."
    }
  },
  {
    "id": "m4_riv_desna",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_eurasia",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Десна",
    "aliases": [],
    "region": "Евразия",
    "locationDesc": "Евразия (Смоленская возвышенность ➔ Днепр (Киев))",
    "mapPrompt": "Покажите реку: Десна",
    "geometryType": "polyline",
    "lat": 52.5,
    "lng": 33.0,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        54.6,
        33.3
      ],
      [
        53.2,
        34.3
      ],
      [
        51.5,
        31.3
      ],
      [
        50.5,
        30.5
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "eurasia",
    "lengthKm": 1130,
    "sourceMouth": "Смоленская возвышенность ➔ Днепр (Киев)",
    "tributaries": [
      "Сейм"
    ],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Десна",
      "backMainAnswer": "Евразия • Смоленская возвышенность ➔ Днепр (Киев)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Смоленская возвышенность ➔ Днепр (Киев)"
        },
        {
          "label": "Длина",
          "value": "1130 км"
        },
        {
          "label": "Главные притоки",
          "value": "Сейм"
        }
      ],
      "backNote": "Река Десна: Смоленская возвышенность ➔ Днепр (Киев)."
    }
  },
  {
    "id": "m4_riv_dniester",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_eurasia",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Днестр",
    "aliases": [],
    "region": "Евразия",
    "locationDesc": "Евразия (Карпаты (Украина) ➔ Чёрное море (Днестровский лиман))",
    "mapPrompt": "Покажите реку: Днестр",
    "geometryType": "polyline",
    "lat": 48.0,
    "lng": 27.5,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        49.2,
        22.9
      ],
      [
        48.5,
        26.5
      ],
      [
        47.0,
        29.5
      ],
      [
        46.3,
        30.3
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "eurasia",
    "lengthKm": 1362,
    "sourceMouth": "Карпаты (Украина) ➔ Чёрное море (Днестровский лиман)",
    "tributaries": [],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Днестр",
      "backMainAnswer": "Евразия • Карпаты (Украина) ➔ Чёрное море (Днестровский лиман)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Карпаты (Украина) ➔ Чёрное море (Днестровский лиман)"
        },
        {
          "label": "Длина",
          "value": "1362 км"
        },
        {
          "label": "Главные притоки",
          "value": "—"
        }
      ],
      "backNote": "Река Днестр: Карпаты (Украина) ➔ Чёрное море (Днестровский лиман)."
    }
  },
  {
    "id": "m4_riv_don",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_eurasia",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Дон",
    "aliases": [],
    "region": "Евразия",
    "locationDesc": "Евразия (Среднерусская возвышенность (Новомосковск) ➔ Таганрогский залив (Азовское море))",
    "mapPrompt": "Покажите реку: Дон",
    "geometryType": "polyline",
    "lat": 50.0,
    "lng": 40.5,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        54.0,
        38.3
      ],
      [
        51.7,
        39.2
      ],
      [
        49.5,
        41.0
      ],
      [
        47.5,
        41.0
      ],
      [
        47.1,
        39.3
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "eurasia",
    "lengthKm": 1870,
    "sourceMouth": "Среднерусская возвышенность (Новомосковск) ➔ Таганрогский залив (Азовское море)",
    "tributaries": [
      "Северский Донец",
      "Хопёр",
      "Медведица",
      "Воронеж"
    ],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Дон",
      "backMainAnswer": "Евразия • Среднерусская возвышенность (Новомосковск) ➔ Таганрогский залив (Азовское море)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Среднерусская возвышенность (Новомосковск) ➔ Таганрогский залив (Азовское море)"
        },
        {
          "label": "Длина",
          "value": "1870 км"
        },
        {
          "label": "Главные притоки",
          "value": "Северский Донец, Хопёр, Медведица, Воронеж"
        }
      ],
      "backNote": "Река Дон: Среднерусская возвышенность (Новомосковск) ➔ Таганрогский залив (Азовское море)."
    }
  },
  {
    "id": "m4_riv_seversky_donets",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_eurasia",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Северский Донец",
    "aliases": [],
    "region": "Евразия",
    "locationDesc": "Евразия (Среднерусская возвышенность ➔ Дон (крупнейший правый приток))",
    "mapPrompt": "Покажите реку: Северский Донец",
    "geometryType": "polyline",
    "lat": 49.0,
    "lng": 38.5,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        51.0,
        37.0
      ],
      [
        49.5,
        37.5
      ],
      [
        48.5,
        39.5
      ],
      [
        47.6,
        40.9
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "eurasia",
    "lengthKm": 1053,
    "sourceMouth": "Среднерусская возвышенность ➔ Дон (крупнейший правый приток)",
    "tributaries": [],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Северский Донец",
      "backMainAnswer": "Евразия • Среднерусская возвышенность ➔ Дон (крупнейший правый приток)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Среднерусская возвышенность ➔ Дон (крупнейший правый приток)"
        },
        {
          "label": "Длина",
          "value": "1053 км"
        },
        {
          "label": "Главные притоки",
          "value": "—"
        }
      ],
      "backNote": "Река Северский Донец: Среднерусская возвышенность ➔ Дон (крупнейший правый приток)."
    }
  },
  {
    "id": "m4_riv_danube",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_eurasia",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Дунай",
    "aliases": [],
    "region": "Евразия",
    "locationDesc": "Евразия (Шварцвальд (Германия) ➔ Чёрное море (вторая по длине река Европы))",
    "mapPrompt": "Покажите реку: Дунай",
    "geometryType": "polyline",
    "lat": 46.5,
    "lng": 20.0,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        48.0,
        8.2
      ],
      [
        48.3,
        14.3
      ],
      [
        48.1,
        17.1
      ],
      [
        47.5,
        19.0
      ],
      [
        44.8,
        20.5
      ],
      [
        44.6,
        22.7
      ],
      [
        45.2,
        29.7
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "eurasia",
    "lengthKm": 2860,
    "sourceMouth": "Шварцвальд (Германия) ➔ Чёрное море (вторая по длине река Европы)",
    "tributaries": [
      "Прут",
      "Сирет",
      "Тиса",
      "Морава",
      "Сава",
      "Драва",
      "Инн"
    ],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Дунай",
      "backMainAnswer": "Евразия • Шварцвальд (Германия) ➔ Чёрное море (вторая по длине река Европы)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Шварцвальд (Германия) ➔ Чёрное море (вторая по длине река Европы)"
        },
        {
          "label": "Длина",
          "value": "2860 км"
        },
        {
          "label": "Главные притоки",
          "value": "Прут, Сирет, Тиса, Морава, Сава, Драва, Инн"
        }
      ],
      "backNote": "Река Дунай: Шварцвальд (Германия) ➔ Чёрное море (вторая по длине река Европы)."
    }
  },
  {
    "id": "m4_riv_prut",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_eurasia",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Прут",
    "aliases": [],
    "region": "Евразия",
    "locationDesc": "Евразия (Карпаты (Говерла) ➔ Дунай (граница Румынии и Молдовы))",
    "mapPrompt": "Покажите реку: Прут",
    "geometryType": "polyline",
    "lat": 47.0,
    "lng": 27.5,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        48.1,
        24.6
      ],
      [
        48.3,
        26.0
      ],
      [
        46.5,
        28.2
      ],
      [
        45.5,
        28.2
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "eurasia",
    "lengthKm": 953,
    "sourceMouth": "Карпаты (Говерла) ➔ Дунай (граница Румынии и Молдовы)",
    "tributaries": [],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Прут",
      "backMainAnswer": "Евразия • Карпаты (Говерла) ➔ Дунай (граница Румынии и Молдовы)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Карпаты (Говерла) ➔ Дунай (граница Румынии и Молдовы)"
        },
        {
          "label": "Длина",
          "value": "953 км"
        },
        {
          "label": "Главные притоки",
          "value": "—"
        }
      ],
      "backNote": "Река Прут: Карпаты (Говерла) ➔ Дунай (граница Румынии и Молдовы)."
    }
  },
  {
    "id": "m4_riv_siret",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_eurasia",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Сирет",
    "aliases": [],
    "region": "Евразия",
    "locationDesc": "Евразия (Карпаты (Буковина) ➔ Дунай (Галац))",
    "mapPrompt": "Покажите реку: Сирет",
    "geometryType": "polyline",
    "lat": 46.8,
    "lng": 26.8,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        48.0,
        25.3
      ],
      [
        46.5,
        27.0
      ],
      [
        45.4,
        28.0
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "eurasia",
    "lengthKm": 855,
    "sourceMouth": "Карпаты (Буковина) ➔ Дунай (Галац)",
    "tributaries": [],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Сирет",
      "backMainAnswer": "Евразия • Карпаты (Буковина) ➔ Дунай (Галац)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Карпаты (Буковина) ➔ Дунай (Галац)"
        },
        {
          "label": "Длина",
          "value": "855 км"
        },
        {
          "label": "Главные притоки",
          "value": "—"
        }
      ],
      "backNote": "Река Сирет: Карпаты (Буковина) ➔ Дунай (Галац)."
    }
  },
  {
    "id": "m4_riv_tisza",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_eurasia",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Тиса",
    "aliases": [],
    "region": "Евразия",
    "locationDesc": "Евразия (Восточные Карпаты ➔ Дунай (Воеводина, Сербия))",
    "mapPrompt": "Покажите реку: Тиса",
    "geometryType": "polyline",
    "lat": 47.0,
    "lng": 21.0,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        48.1,
        24.2
      ],
      [
        48.0,
        21.5
      ],
      [
        46.2,
        20.2
      ],
      [
        45.1,
        20.3
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "eurasia",
    "lengthKm": 966,
    "sourceMouth": "Восточные Карпаты ➔ Дунай (Воеводина, Сербия)",
    "tributaries": [],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Тиса",
      "backMainAnswer": "Евразия • Восточные Карпаты ➔ Дунай (Воеводина, Сербия)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Восточные Карпаты ➔ Дунай (Воеводина, Сербия)"
        },
        {
          "label": "Длина",
          "value": "966 км"
        },
        {
          "label": "Главные притоки",
          "value": "—"
        }
      ],
      "backNote": "Река Тиса: Восточные Карпаты ➔ Дунай (Воеводина, Сербия)."
    }
  },
  {
    "id": "m4_riv_morava_river",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_eurasia",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Морава (2 реки: чешская и сербская)",
    "aliases": [
      "Южная Морава",
      "Великая Морава"
    ],
    "region": "Евразия",
    "locationDesc": "Евразия (Чехия/Австрия (приток Дуная) и Сербия (Южная/Великая Морава))",
    "mapPrompt": "Покажите реку: Морава (2 реки: чешская и сербская)",
    "geometryType": "polyline",
    "lat": 49.0,
    "lng": 17.0,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        50.2,
        16.9
      ],
      [
        48.2,
        17.0
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "eurasia",
    "lengthKm": 353,
    "sourceMouth": "Чехия/Австрия (приток Дуная) и Сербия (Южная/Великая Морава)",
    "tributaries": [],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Морава (2 реки: чешская и сербская)",
      "backMainAnswer": "Евразия • Чехия/Австрия (приток Дуная) и Сербия (Южная/Великая Морава)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Чехия/Австрия (приток Дуная) и Сербия (Южная/Великая Морава)"
        },
        {
          "label": "Длина",
          "value": "353 км"
        },
        {
          "label": "Главные притоки",
          "value": "—"
        }
      ],
      "backNote": "Река Морава (2 реки: чешская и сербская): Чехия/Австрия (приток Дуная) и Сербия (Южная/Великая Морава)."
    }
  },
  {
    "id": "m4_riv_sava",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_eurasia",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Сава",
    "aliases": [],
    "region": "Евразия",
    "locationDesc": "Евразия (Юлийские Альпы (Словения) ➔ Дунай (Белград))",
    "mapPrompt": "Покажите реку: Сава",
    "geometryType": "polyline",
    "lat": 45.3,
    "lng": 17.5,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        46.3,
        14.1
      ],
      [
        45.8,
        16.0
      ],
      [
        45.1,
        18.8
      ],
      [
        44.8,
        20.4
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "eurasia",
    "lengthKm": 945,
    "sourceMouth": "Юлийские Альпы (Словения) ➔ Дунай (Белград)",
    "tributaries": [],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Сава",
      "backMainAnswer": "Евразия • Юлийские Альпы (Словения) ➔ Дунай (Белград)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Юлийские Альпы (Словения) ➔ Дунай (Белград)"
        },
        {
          "label": "Длина",
          "value": "945 км"
        },
        {
          "label": "Главные притоки",
          "value": "—"
        }
      ],
      "backNote": "Река Сава: Юлийские Альпы (Словения) ➔ Дунай (Белград)."
    }
  },
  {
    "id": "m4_riv_drava",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_eurasia",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Драва",
    "aliases": [],
    "region": "Евразия",
    "locationDesc": "Евразия (Карнийские Альпы (Италия) ➔ Дунай (Хорватия/Сербия))",
    "mapPrompt": "Покажите реку: Драва",
    "geometryType": "polyline",
    "lat": 46.2,
    "lng": 16.0,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        46.7,
        12.3
      ],
      [
        46.6,
        14.5
      ],
      [
        46.3,
        16.5
      ],
      [
        45.5,
        18.9
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "eurasia",
    "lengthKm": 710,
    "sourceMouth": "Карнийские Альпы (Италия) ➔ Дунай (Хорватия/Сербия)",
    "tributaries": [],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Драва",
      "backMainAnswer": "Евразия • Карнийские Альпы (Италия) ➔ Дунай (Хорватия/Сербия)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Карнийские Альпы (Италия) ➔ Дунай (Хорватия/Сербия)"
        },
        {
          "label": "Длина",
          "value": "710 км"
        },
        {
          "label": "Главные притоки",
          "value": "—"
        }
      ],
      "backNote": "Река Драва: Карнийские Альпы (Италия) ➔ Дунай (Хорватия/Сербия)."
    }
  },
  {
    "id": "m4_riv_douro",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_eurasia",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Дуэро (Дору)",
    "aliases": [],
    "region": "Евразия",
    "locationDesc": "Евразия (Иберийские горы (Испания) ➔ Атлантический океан (Порту))",
    "mapPrompt": "Покажите реку: Дуэро (Дору)",
    "geometryType": "polyline",
    "lat": 41.5,
    "lng": -5.5,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        41.8,
        -2.8
      ],
      [
        41.5,
        -5.5
      ],
      [
        41.1,
        -8.7
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "eurasia",
    "lengthKm": 897,
    "sourceMouth": "Иберийские горы (Испания) ➔ Атлантический океан (Порту)",
    "tributaries": [
      "Писуэрга",
      "Эсла"
    ],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Дуэро (Дору)",
      "backMainAnswer": "Евразия • Иберийские горы (Испания) ➔ Атлантический океан (Порту)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Иберийские горы (Испания) ➔ Атлантический океан (Порту)"
        },
        {
          "label": "Длина",
          "value": "897 км"
        },
        {
          "label": "Главные притоки",
          "value": "Писуэрга, Эсла"
        }
      ],
      "backNote": "Река Дуэро (Дору): Иберийские горы (Испания) ➔ Атлантический океан (Порту)."
    }
  },
  {
    "id": "m4_riv_yenisey",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_eurasia",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Енисей",
    "aliases": [],
    "region": "Евразия",
    "locationDesc": "Евразия (Слияние Большого и Малого Енисея (Кызыл) ➔ Карское море (Енисейский залив))",
    "mapPrompt": "Покажите реку: Енисей",
    "geometryType": "polyline",
    "lat": 61.0,
    "lng": 91.0,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        51.7,
        94.4
      ],
      [
        56.0,
        93.0
      ],
      [
        58.5,
        92.2
      ],
      [
        61.6,
        90.1
      ],
      [
        67.4,
        86.6
      ],
      [
        71.8,
        82.7
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "eurasia",
    "lengthKm": 3487,
    "sourceMouth": "Слияние Большого и Малого Енисея (Кызыл) ➔ Карское море (Енисейский залив)",
    "tributaries": [
      "Ангара",
      "Подкаменная Тунгуска",
      "Нижняя Тунгуска",
      "Абакан",
      "Кан"
    ],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Енисей",
      "backMainAnswer": "Евразия • Слияние Большого и Малого Енисея (Кызыл) ➔ Карское море (Енисейский залив)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Слияние Большого и Малого Енисея (Кызыл) ➔ Карское море (Енисейский залив)"
        },
        {
          "label": "Длина",
          "value": "3487 км"
        },
        {
          "label": "Главные притоки",
          "value": "Ангара, Подкаменная Тунгуска, Нижняя Тунгуска, Абакан, Кан"
        }
      ],
      "backNote": "Река Енисей: Слияние Большого и Малого Енисея (Кызыл) ➔ Карское море (Енисейский залив)."
    }
  },
  {
    "id": "m4_riv_angara",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_eurasia",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Ангара",
    "aliases": [],
    "region": "Евразия",
    "locationDesc": "Евразия (Единственная река, вытекающая из оз. Байкал ➔ Енисей)",
    "mapPrompt": "Покажите реку: Ангара",
    "geometryType": "polyline",
    "lat": 56.5,
    "lng": 100.0,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        51.87,
        104.83
      ],
      [
        56.3,
        101.7
      ],
      [
        58.5,
        96.5
      ],
      [
        58.1,
        93.0
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "eurasia",
    "lengthKm": 1779,
    "sourceMouth": "Единственная река, вытекающая из оз. Байкал ➔ Енисей",
    "tributaries": [
      "Иркут",
      "Белая",
      "Ока",
      "Илим",
      "Тасеева"
    ],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Ангара",
      "backMainAnswer": "Евразия • Единственная река, вытекающая из оз. Байкал ➔ Енисей",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Единственная река, вытекающая из оз. Байкал ➔ Енисей"
        },
        {
          "label": "Длина",
          "value": "1779 км"
        },
        {
          "label": "Главные притоки",
          "value": "Иркут, Белая, Ока, Илим, Тасеева"
        }
      ],
      "backNote": "Река Ангара: Единственная река, вытекающая из оз. Байкал ➔ Енисей."
    }
  },
  {
    "id": "m4_riv_podkamennaya_tunguska",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_eurasia",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Подкаменная Тунгуска",
    "aliases": [],
    "region": "Евразия",
    "locationDesc": "Евразия (Ангарский кряж ➔ Енисей (район Тунгусского метеорита 1908 г.))",
    "mapPrompt": "Покажите реку: Подкаменная Тунгуска",
    "geometryType": "polyline",
    "lat": 60.5,
    "lng": 98.0,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        58.0,
        105.0
      ],
      [
        60.5,
        101.0
      ],
      [
        61.6,
        90.2
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "eurasia",
    "lengthKm": 1865,
    "sourceMouth": "Ангарский кряж ➔ Енисей (район Тунгусского метеорита 1908 г.)",
    "tributaries": [],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Подкаменная Тунгуска",
      "backMainAnswer": "Евразия • Ангарский кряж ➔ Енисей (район Тунгусского метеорита 1908 г.)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Ангарский кряж ➔ Енисей (район Тунгусского метеорита 1908 г.)"
        },
        {
          "label": "Длина",
          "value": "1865 км"
        },
        {
          "label": "Главные притоки",
          "value": "—"
        }
      ],
      "backNote": "Река Подкаменная Тунгуска: Ангарский кряж ➔ Енисей (район Тунгусского метеорита 1908 г.)."
    }
  },
  {
    "id": "m4_riv_nizhnyaya_tunguska",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_eurasia",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Нижняя Тунгуска",
    "aliases": [],
    "region": "Евразия",
    "locationDesc": "Евразия (Среднесибирское плоскогорье ➔ Енисей (Туруханск))",
    "mapPrompt": "Покажите реку: Нижняя Тунгуска",
    "geometryType": "polyline",
    "lat": 63.0,
    "lng": 98.0,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        57.0,
        106.0
      ],
      [
        62.0,
        102.0
      ],
      [
        64.0,
        95.0
      ],
      [
        65.8,
        88.0
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "eurasia",
    "lengthKm": 2989,
    "sourceMouth": "Среднесибирское плоскогорье ➔ Енисей (Туруханск)",
    "tributaries": [
      "Кочечум"
    ],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Нижняя Тунгуска",
      "backMainAnswer": "Евразия • Среднесибирское плоскогорье ➔ Енисей (Туруханск)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Среднесибирское плоскогорье ➔ Енисей (Туруханск)"
        },
        {
          "label": "Длина",
          "value": "2989 км"
        },
        {
          "label": "Главные притоки",
          "value": "Кочечум"
        }
      ],
      "backNote": "Река Нижняя Тунгуска: Среднесибирское плоскогорье ➔ Енисей (Туруханск)."
    }
  },
  {
    "id": "m4_riv_daugava",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_eurasia",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Западная Двина (Даугава)",
    "aliases": [],
    "region": "Евразия",
    "locationDesc": "Евразия (Валдайская возвышенность ➔ Рижский залив (Балтийское море))",
    "mapPrompt": "Покажите реку: Западная Двина (Даугава)",
    "geometryType": "polyline",
    "lat": 56.0,
    "lng": 28.0,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        56.8,
        32.5
      ],
      [
        55.5,
        30.5
      ],
      [
        55.5,
        27.5
      ],
      [
        56.9,
        24.0
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "eurasia",
    "lengthKm": 1020,
    "sourceMouth": "Валдайская возвышенность ➔ Рижский залив (Балтийское море)",
    "tributaries": [],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Западная Двина (Даугава)",
      "backMainAnswer": "Евразия • Валдайская возвышенность ➔ Рижский залив (Балтийское море)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Валдайская возвышенность ➔ Рижский залив (Балтийское море)"
        },
        {
          "label": "Длина",
          "value": "1020 км"
        },
        {
          "label": "Главные притоки",
          "value": "—"
        }
      ],
      "backNote": "Река Западная Двина (Даугава): Валдайская возвышенность ➔ Рижский залив (Балтийское море)."
    }
  },
  {
    "id": "m4_riv_ili_river",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_eurasia",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Или",
    "aliases": [],
    "region": "Евразия",
    "locationDesc": "Евразия (Тянь-Шань (Китай) ➔ озеро Балхаш (Казахстан))",
    "mapPrompt": "Покажите реку: Или",
    "geometryType": "polyline",
    "lat": 44.2,
    "lng": 78.0,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        43.5,
        82.0
      ],
      [
        44.0,
        79.5
      ],
      [
        44.5,
        76.5
      ],
      [
        45.4,
        74.2
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "eurasia",
    "lengthKm": 1436,
    "sourceMouth": "Тянь-Шань (Китай) ➔ озеро Балхаш (Казахстан)",
    "tributaries": [
      "Текес",
      "Каш"
    ],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Или",
      "backMainAnswer": "Евразия • Тянь-Шань (Китай) ➔ озеро Балхаш (Казахстан)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Тянь-Шань (Китай) ➔ озеро Балхаш (Казахстан)"
        },
        {
          "label": "Длина",
          "value": "1436 км"
        },
        {
          "label": "Главные притоки",
          "value": "Текес, Каш"
        }
      ],
      "backNote": "Река Или: Тянь-Шань (Китай) ➔ озеро Балхаш (Казахстан)."
    }
  },
  {
    "id": "m4_riv_indus",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_eurasia",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Инд",
    "aliases": [],
    "region": "Евразия",
    "locationDesc": "Евразия (Тибетское нагорье (около оз. Манасаровар) ➔ Аравийское море)",
    "mapPrompt": "Покажите реку: Инд",
    "geometryType": "polyline",
    "lat": 31.0,
    "lng": 71.5,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        31.5,
        81.5
      ],
      [
        35.0,
        75.0
      ],
      [
        33.5,
        72.0
      ],
      [
        29.0,
        70.5
      ],
      [
        24.0,
        67.5
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "eurasia",
    "lengthKm": 3180,
    "sourceMouth": "Тибетское нагорье (около оз. Манасаровар) ➔ Аравийское море",
    "tributaries": [
      "Сатледж",
      "Чинаб",
      "Рави",
      "Джелам",
      "Кабул"
    ],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Инд",
      "backMainAnswer": "Евразия • Тибетское нагорье (около оз. Манасаровар) ➔ Аравийское море",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Тибетское нагорье (около оз. Манасаровар) ➔ Аравийское море"
        },
        {
          "label": "Длина",
          "value": "3180 км"
        },
        {
          "label": "Главные притоки",
          "value": "Сатледж, Чинаб, Рави, Джелам, Кабул"
        }
      ],
      "backNote": "Река Инд: Тибетское нагорье (около оз. Манасаровар) ➔ Аравийское море."
    }
  },
  {
    "id": "m4_riv_indigirka",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_eurasia",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Индигирка",
    "aliases": [],
    "region": "Евразия",
    "locationDesc": "Евразия (Халканский хребет ➔ Восточно-Сибирское море (район Оймякона))",
    "mapPrompt": "Покажите реку: Индигирка",
    "geometryType": "polyline",
    "lat": 67.0,
    "lng": 145.0,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        63.0,
        143.0
      ],
      [
        65.0,
        143.5
      ],
      [
        68.0,
        146.0
      ],
      [
        71.3,
        150.0
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "eurasia",
    "lengthKm": 1726,
    "sourceMouth": "Халканский хребет ➔ Восточно-Сибирское море (район Оймякона)",
    "tributaries": [
      "Мома",
      "Селеннях"
    ],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Индигирка",
      "backMainAnswer": "Евразия • Халканский хребет ➔ Восточно-Сибирское море (район Оймякона)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Халканский хребет ➔ Восточно-Сибирское море (район Оймякона)"
        },
        {
          "label": "Длина",
          "value": "1726 км"
        },
        {
          "label": "Главные притоки",
          "value": "Мома, Селеннях"
        }
      ],
      "backNote": "Река Индигирка: Халканский хребет ➔ Восточно-Сибирское море (район Оймякона)."
    }
  },
  {
    "id": "m4_riv_jordan_river",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_eurasia",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Иордан",
    "aliases": [],
    "region": "Евразия",
    "locationDesc": "Евразия (Гора Хермон ➔ Мёртвое море (через Тивериадское озеро))",
    "mapPrompt": "Покажите реку: Иордан",
    "geometryType": "polyline",
    "lat": 32.4,
    "lng": 35.5,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        33.2,
        35.6
      ],
      [
        32.8,
        35.6
      ],
      [
        31.8,
        35.5
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "eurasia",
    "lengthKm": 251,
    "sourceMouth": "Гора Хермон ➔ Мёртвое море (через Тивериадское озеро)",
    "tributaries": [
      "Ярмук"
    ],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Иордан",
      "backMainAnswer": "Евразия • Гора Хермон ➔ Мёртвое море (через Тивериадское озеро)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Гора Хермон ➔ Мёртвое море (через Тивериадское озеро)"
        },
        {
          "label": "Длина",
          "value": "251 км"
        },
        {
          "label": "Главные притоки",
          "value": "Ярмук"
        }
      ],
      "backNote": "Река Иордан: Гора Хермон ➔ Мёртвое море (через Тивериадское озеро)."
    }
  },
  {
    "id": "m4_riv_irrawaddy",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_eurasia",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Иравади",
    "aliases": [],
    "region": "Евразия",
    "locationDesc": "Евразия (Север Мьянмы ➔ Андаманское море (Индийский океан))",
    "mapPrompt": "Покажите реку: Иравади",
    "geometryType": "polyline",
    "lat": 21.0,
    "lng": 95.5,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        25.7,
        97.5
      ],
      [
        22.0,
        96.0
      ],
      [
        17.0,
        95.0
      ],
      [
        15.8,
        95.2
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "eurasia",
    "lengthKm": 2210,
    "sourceMouth": "Север Мьянмы ➔ Андаманское море (Индийский океан)",
    "tributaries": [
      "Чиндуин"
    ],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Иравади",
      "backMainAnswer": "Евразия • Север Мьянмы ➔ Андаманское море (Индийский океан)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Север Мьянмы ➔ Андаманское море (Индийский океан)"
        },
        {
          "label": "Длина",
          "value": "2210 км"
        },
        {
          "label": "Главные притоки",
          "value": "Чиндуин"
        }
      ],
      "backNote": "Река Иравади: Север Мьянмы ➔ Андаманское море (Индийский океан)."
    }
  },
  {
    "id": "m4_riv_kamchatka_river",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_eurasia",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Камчатка",
    "aliases": [],
    "region": "Евразия",
    "locationDesc": "Евразия (Срединный хребет ➔ Камчатский залив (Тихий океан))",
    "mapPrompt": "Покажите реку: Камчатка",
    "geometryType": "polyline",
    "lat": 55.8,
    "lng": 160.5,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        54.5,
        158.0
      ],
      [
        56.0,
        160.0
      ],
      [
        56.2,
        162.5
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "eurasia",
    "lengthKm": 758,
    "sourceMouth": "Срединный хребет ➔ Камчатский залив (Тихий океан)",
    "tributaries": [],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Камчатка",
      "backMainAnswer": "Евразия • Срединный хребет ➔ Камчатский залив (Тихий океан)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Срединный хребет ➔ Камчатский залив (Тихий океан)"
        },
        {
          "label": "Длина",
          "value": "758 км"
        },
        {
          "label": "Главные притоки",
          "value": "—"
        }
      ],
      "backNote": "Река Камчатка: Срединный хребет ➔ Камчатский залив (Тихий океан)."
    }
  },
  {
    "id": "m4_riv_kolyma",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_eurasia",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Колыма",
    "aliases": [],
    "region": "Евразия",
    "locationDesc": "Евразия (Слияние Аян-Юрях и Кулу ➔ Восточно-Сибирское море (Колымский залив))",
    "mapPrompt": "Покажите реку: Колыма",
    "geometryType": "polyline",
    "lat": 66.0,
    "lng": 152.5,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        62.5,
        148.0
      ],
      [
        64.0,
        152.0
      ],
      [
        67.5,
        154.0
      ],
      [
        69.5,
        161.5
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "eurasia",
    "lengthKm": 2129,
    "sourceMouth": "Слияние Аян-Юрях и Кулу ➔ Восточно-Сибирское море (Колымский залив)",
    "tributaries": [
      "Омолон",
      "Анюй"
    ],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Колыма",
      "backMainAnswer": "Евразия • Слияние Аян-Юрях и Кулу ➔ Восточно-Сибирское море (Колымский залив)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Слияние Аян-Юрях и Кулу ➔ Восточно-Сибирское море (Колымский залив)"
        },
        {
          "label": "Длина",
          "value": "2129 км"
        },
        {
          "label": "Главные притоки",
          "value": "Омолон, Анюй"
        }
      ],
      "backNote": "Река Колыма: Слияние Аян-Юрях и Кулу ➔ Восточно-Сибирское море (Колымский залив)."
    }
  },
  {
    "id": "m4_riv_krishna_river",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_eurasia",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Кришна",
    "aliases": [],
    "region": "Евразия",
    "locationDesc": "Евразия (Западные Гаты ➔ Бенгальский залив (Индостан))",
    "mapPrompt": "Покажите реку: Кришна",
    "geometryType": "polyline",
    "lat": 16.5,
    "lng": 78.0,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        18.0,
        73.7
      ],
      [
        16.5,
        77.0
      ],
      [
        15.8,
        80.8
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "eurasia",
    "lengthKm": 1400,
    "sourceMouth": "Западные Гаты ➔ Бенгальский залив (Индостан)",
    "tributaries": [
      "Тунгабхадра",
      "Бхима"
    ],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Кришна",
      "backMainAnswer": "Евразия • Западные Гаты ➔ Бенгальский залив (Индостан)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Западные Гаты ➔ Бенгальский залив (Индостан)"
        },
        {
          "label": "Длина",
          "value": "1400 км"
        },
        {
          "label": "Главные притоки",
          "value": "Тунгабхадра, Бхима"
        }
      ],
      "backNote": "Река Кришна: Западные Гаты ➔ Бенгальский залив (Индостан)."
    }
  },
  {
    "id": "m4_riv_kuban",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_eurasia",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Кубань",
    "aliases": [],
    "region": "Евразия",
    "locationDesc": "Евразия (Склоны Эльбруса ➔ Темрюкский залив (Азовское море))",
    "mapPrompt": "Покажите реку: Кубань",
    "geometryType": "polyline",
    "lat": 45.0,
    "lng": 39.5,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        43.3,
        42.4
      ],
      [
        44.5,
        41.5
      ],
      [
        45.1,
        39.0
      ],
      [
        45.3,
        37.4
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "eurasia",
    "lengthKm": 870,
    "sourceMouth": "Склоны Эльбруса ➔ Темрюкский залив (Азовское море)",
    "tributaries": [
      "Лаба",
      "Белая"
    ],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Кубань",
      "backMainAnswer": "Евразия • Склоны Эльбруса ➔ Темрюкский залив (Азовское море)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Склоны Эльбруса ➔ Темрюкский залив (Азовское море)"
        },
        {
          "label": "Длина",
          "value": "870 км"
        },
        {
          "label": "Главные притоки",
          "value": "Лаба, Белая"
        }
      ],
      "backNote": "Река Кубань: Склоны Эльбруса ➔ Темрюкский залив (Азовское море)."
    }
  },
  {
    "id": "m4_riv_kuma_river",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_eurasia",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Кума",
    "aliases": [],
    "region": "Евразия",
    "locationDesc": "Евразия (Северные склоны Скалистого хребта ➔ Каспийское море (теряется в песках))",
    "mapPrompt": "Покажите реку: Кума",
    "geometryType": "polyline",
    "lat": 44.6,
    "lng": 44.0,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        43.8,
        42.5
      ],
      [
        44.8,
        44.5
      ],
      [
        45.0,
        46.5
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "eurasia",
    "lengthKm": 802,
    "sourceMouth": "Северные склоны Скалистого хребта ➔ Каспийское море (теряется в песках)",
    "tributaries": [
      "Подкумок"
    ],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Кума",
      "backMainAnswer": "Евразия • Северные склоны Скалистого хребта ➔ Каспийское море (теряется в песках)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Северные склоны Скалистого хребта ➔ Каспийское море (теряется в песках)"
        },
        {
          "label": "Длина",
          "value": "802 км"
        },
        {
          "label": "Главные притоки",
          "value": "Подкумок"
        }
      ],
      "backNote": "Река Кума: Северные склоны Скалистого хребта ➔ Каспийское море (теряется в песках)."
    }
  },
  {
    "id": "m4_riv_kura",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_eurasia",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Кура",
    "aliases": [],
    "region": "Евразия",
    "locationDesc": "Евразия (Армянское нагорье (Турция) ➔ Каспийское море (Закавказье))",
    "mapPrompt": "Покажите реку: Кура",
    "geometryType": "polyline",
    "lat": 41.0,
    "lng": 46.0,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        41.0,
        42.5
      ],
      [
        41.7,
        44.8
      ],
      [
        40.5,
        47.0
      ],
      [
        39.4,
        49.3
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "eurasia",
    "lengthKm": 1515,
    "sourceMouth": "Армянское нагорье (Турция) ➔ Каспийское море (Закавказье)",
    "tributaries": [
      "Аракс",
      "Алазани",
      "Иори",
      "Храми"
    ],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Кура",
      "backMainAnswer": "Евразия • Армянское нагорье (Турция) ➔ Каспийское море (Закавказье)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Армянское нагорье (Турция) ➔ Каспийское море (Закавказье)"
        },
        {
          "label": "Длина",
          "value": "1515 км"
        },
        {
          "label": "Главные притоки",
          "value": "Аракс, Алазани, Иори, Храми"
        }
      ],
      "backNote": "Река Кура: Армянское нагорье (Турция) ➔ Каспийское море (Закавказье)."
    }
  },
  {
    "id": "m4_riv_araks",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_eurasia",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Аракс",
    "aliases": [],
    "region": "Евразия",
    "locationDesc": "Евразия (Бингёльский хребет ➔ Кура (крупнейший правый приток))",
    "mapPrompt": "Покажите реку: Аракс",
    "geometryType": "polyline",
    "lat": 39.5,
    "lng": 45.0,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        39.8,
        41.5
      ],
      [
        39.9,
        44.0
      ],
      [
        39.0,
        46.5
      ],
      [
        40.0,
        48.4
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "eurasia",
    "lengthKm": 1072,
    "sourceMouth": "Бингёльский хребет ➔ Кура (крупнейший правый приток)",
    "tributaries": [
      "Раздан",
      "Ахурян"
    ],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Аракс",
      "backMainAnswer": "Евразия • Бингёльский хребет ➔ Кура (крупнейший правый приток)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Бингёльский хребет ➔ Кура (крупнейший правый приток)"
        },
        {
          "label": "Длина",
          "value": "1072 км"
        },
        {
          "label": "Главные притоки",
          "value": "Раздан, Ахурян"
        }
      ],
      "backNote": "Река Аракс: Бингёльский хребет ➔ Кура (крупнейший правый приток)."
    }
  },
  {
    "id": "m4_riv_lena",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_eurasia",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Лена",
    "aliases": [],
    "region": "Евразия",
    "locationDesc": "Евразия (Байкальский хребет ➔ море Лаптевых (гигантская дельта))",
    "mapPrompt": "Покажите реку: Лена",
    "geometryType": "polyline",
    "lat": 62.0,
    "lng": 125.0,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        54.0,
        108.0
      ],
      [
        58.0,
        114.0
      ],
      [
        60.4,
        120.4
      ],
      [
        62.0,
        129.7
      ],
      [
        67.0,
        123.5
      ],
      [
        72.5,
        127.0
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "eurasia",
    "lengthKm": 4400,
    "sourceMouth": "Байкальский хребет ➔ море Лаптевых (гигантская дельта)",
    "tributaries": [
      "Алдан",
      "Вилюй",
      "Витим",
      "Олёкма",
      "Киренга"
    ],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Лена",
      "backMainAnswer": "Евразия • Байкальский хребет ➔ море Лаптевых (гигантская дельта)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Байкальский хребет ➔ море Лаптевых (гигантская дельта)"
        },
        {
          "label": "Длина",
          "value": "4400 км"
        },
        {
          "label": "Главные притоки",
          "value": "Алдан, Вилюй, Витим, Олёкма, Киренга"
        }
      ],
      "backNote": "Река Лена: Байкальский хребет ➔ море Лаптевых (гигантская дельта)."
    }
  },
  {
    "id": "m4_riv_aldan",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_eurasia",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Алдан",
    "aliases": [],
    "region": "Евразия",
    "locationDesc": "Евразия (Становой хребет ➔ Лена (крупнейший правый приток))",
    "mapPrompt": "Покажите реку: Алдан",
    "geometryType": "polyline",
    "lat": 60.0,
    "lng": 131.0,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        56.5,
        124.0
      ],
      [
        58.5,
        128.0
      ],
      [
        62.0,
        134.0
      ],
      [
        63.4,
        129.5
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "eurasia",
    "lengthKm": 2273,
    "sourceMouth": "Становой хребет ➔ Лена (крупнейший правый приток)",
    "tributaries": [
      "Амга",
      "Мая",
      "Тимптон",
      "Учур"
    ],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Алдан",
      "backMainAnswer": "Евразия • Становой хребет ➔ Лена (крупнейший правый приток)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Становой хребет ➔ Лена (крупнейший правый приток)"
        },
        {
          "label": "Длина",
          "value": "2273 км"
        },
        {
          "label": "Главные притоки",
          "value": "Амга, Мая, Тимптон, Учур"
        }
      ],
      "backNote": "Река Алдан: Становой хребет ➔ Лена (крупнейший правый приток)."
    }
  },
  {
    "id": "m4_riv_vitim",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_eurasia",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Витим",
    "aliases": [],
    "region": "Евразия",
    "locationDesc": "Евразия (Слияние Витимкана и Чины ➔ Лена)",
    "mapPrompt": "Покажите реку: Витим",
    "geometryType": "polyline",
    "lat": 56.5,
    "lng": 115.0,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        54.0,
        112.5
      ],
      [
        56.0,
        116.0
      ],
      [
        59.4,
        112.6
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "eurasia",
    "lengthKm": 1837,
    "sourceMouth": "Слияние Витимкана и Чины ➔ Лена",
    "tributaries": [],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Витим",
      "backMainAnswer": "Евразия • Слияние Витимкана и Чины ➔ Лена",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Слияние Витимкана и Чины ➔ Лена"
        },
        {
          "label": "Длина",
          "value": "1837 км"
        },
        {
          "label": "Главные притоки",
          "value": "—"
        }
      ],
      "backNote": "Река Витим: Слияние Витимкана и Чины ➔ Лена."
    }
  },
  {
    "id": "m4_riv_vilyuy",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_eurasia",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Вилюй",
    "aliases": [],
    "region": "Евразия",
    "locationDesc": "Евразия (Вилюйское плато ➔ Лена (крупнейший левый приток))",
    "mapPrompt": "Покажите реку: Вилюй",
    "geometryType": "polyline",
    "lat": 63.5,
    "lng": 117.0,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        64.0,
        106.0
      ],
      [
        62.5,
        114.0
      ],
      [
        63.8,
        121.5
      ],
      [
        64.3,
        126.5
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "eurasia",
    "lengthKm": 2650,
    "sourceMouth": "Вилюйское плато ➔ Лена (крупнейший левый приток)",
    "tributaries": [
      "Марха",
      "Тюнг"
    ],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Вилюй",
      "backMainAnswer": "Евразия • Вилюйское плато ➔ Лена (крупнейший левый приток)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Вилюйское плато ➔ Лена (крупнейший левый приток)"
        },
        {
          "label": "Длина",
          "value": "2650 км"
        },
        {
          "label": "Главные притоки",
          "value": "Марха, Тюнг"
        }
      ],
      "backNote": "Река Вилюй: Вилюйское плато ➔ Лена (крупнейший левый приток)."
    }
  },
  {
    "id": "m4_riv_loire",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_eurasia",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Луара",
    "aliases": [],
    "region": "Евразия",
    "locationDesc": "Евразия (Центральный массив (Франция) ➔ Бискайский залив (длиннейшая река Франции))",
    "mapPrompt": "Покажите реку: Луара",
    "geometryType": "polyline",
    "lat": 47.3,
    "lng": 1.0,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        44.8,
        4.2
      ],
      [
        47.0,
        3.0
      ],
      [
        47.5,
        1.5
      ],
      [
        47.2,
        -2.1
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "eurasia",
    "lengthKm": 1012,
    "sourceMouth": "Центральный массив (Франция) ➔ Бискайский залив (длиннейшая река Франции)",
    "tributaries": [
      "Алье",
      "Шер",
      "Вьенна"
    ],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Луара",
      "backMainAnswer": "Евразия • Центральный массив (Франция) ➔ Бискайский залив (длиннейшая река Франции)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Центральный массив (Франция) ➔ Бискайский залив (длиннейшая река Франции)"
        },
        {
          "label": "Длина",
          "value": "1012 км"
        },
        {
          "label": "Главные притоки",
          "value": "Алье, Шер, Вьенна"
        }
      ],
      "backNote": "Река Луара: Центральный массив (Франция) ➔ Бискайский залив (длиннейшая река Франции)."
    }
  },
  {
    "id": "m4_riv_manych",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_eurasia",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Маныч (Западный и Восточный)",
    "aliases": [],
    "region": "Евразия",
    "locationDesc": "Евразия (Кумо-Манычская впадина (граница Европы и Азии) ➔ Дон)",
    "mapPrompt": "Покажите реку: Маныч (Западный и Восточный)",
    "geometryType": "polyline",
    "lat": 46.5,
    "lng": 42.0,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        45.8,
        43.5
      ],
      [
        46.5,
        41.5
      ],
      [
        47.2,
        40.2
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "eurasia",
    "lengthKm": 420,
    "sourceMouth": "Кумо-Манычская впадина (граница Европы и Азии) ➔ Дон",
    "tributaries": [
      "Кумо-Манычская впадина"
    ],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Маныч (Западный и Восточный)",
      "backMainAnswer": "Евразия • Кумо-Манычская впадина (граница Европы и Азии) ➔ Дон",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Кумо-Манычская впадина (граница Европы и Азии) ➔ Дон"
        },
        {
          "label": "Длина",
          "value": "420 км"
        },
        {
          "label": "Главные притоки",
          "value": "Кумо-Манычская впадина"
        }
      ],
      "backNote": "Река Маныч (Западный и Восточный): Кумо-Манычская впадина (граница Европы и Азии) ➔ Дон."
    }
  },
  {
    "id": "m4_riv_maritsa",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_eurasia",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Марица (Эврос)",
    "aliases": [],
    "region": "Евразия",
    "locationDesc": "Евразия (Рила (Балканы, Болгария) ➔ Эгейское море)",
    "mapPrompt": "Покажите реку: Марица (Эврос)",
    "geometryType": "polyline",
    "lat": 41.5,
    "lng": 25.5,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        42.1,
        23.6
      ],
      [
        42.1,
        24.8
      ],
      [
        41.7,
        26.2
      ],
      [
        40.8,
        26.0
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "eurasia",
    "lengthKm": 480,
    "sourceMouth": "Рила (Балканы, Болгария) ➔ Эгейское море",
    "tributaries": [
      "Тунджа",
      "Арда"
    ],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Марица (Эврос)",
      "backMainAnswer": "Евразия • Рила (Балканы, Болгария) ➔ Эгейское море",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Рила (Балканы, Болгария) ➔ Эгейское море"
        },
        {
          "label": "Длина",
          "value": "480 км"
        },
        {
          "label": "Главные притоки",
          "value": "Тунджа, Арда"
        }
      ],
      "backNote": "Река Марица (Эврос): Рила (Балканы, Болгария) ➔ Эгейское море."
    }
  },
  {
    "id": "m4_riv_mekong",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_eurasia",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Меконг",
    "aliases": [],
    "region": "Евразия",
    "locationDesc": "Евразия (Тибетское нагорье ➔ Южно-Китайское море (крупнейшая река Индокитая))",
    "mapPrompt": "Покажите реку: Меконг",
    "geometryType": "polyline",
    "lat": 18.0,
    "lng": 103.0,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        33.0,
        94.0
      ],
      [
        28.0,
        99.0
      ],
      [
        20.0,
        101.0
      ],
      [
        15.0,
        105.5
      ],
      [
        10.2,
        106.3
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "eurasia",
    "lengthKm": 4350,
    "sourceMouth": "Тибетское нагорье ➔ Южно-Китайское море (крупнейшая река Индокитая)",
    "tributaries": [
      "Мун",
      "Тонлесап"
    ],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Меконг",
      "backMainAnswer": "Евразия • Тибетское нагорье ➔ Южно-Китайское море (крупнейшая река Индокитая)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Тибетское нагорье ➔ Южно-Китайское море (крупнейшая река Индокитая)"
        },
        {
          "label": "Длина",
          "value": "4350 км"
        },
        {
          "label": "Главные притоки",
          "value": "Мун, Тонлесап"
        }
      ],
      "backNote": "Река Меконг: Тибетское нагорье ➔ Южно-Китайское море (крупнейшая река Индокитая)."
    }
  },
  {
    "id": "m4_riv_nadym",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_eurasia",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Надым",
    "aliases": [],
    "region": "Евразия",
    "locationDesc": "Евразия (Сибирские Увалы ➔ Обская губа (Карское море))",
    "mapPrompt": "Покажите реку: Надым",
    "geometryType": "polyline",
    "lat": 65.0,
    "lng": 72.8,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        63.8,
        73.0
      ],
      [
        65.5,
        72.8
      ],
      [
        66.2,
        72.5
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "eurasia",
    "lengthKm": 545,
    "sourceMouth": "Сибирские Увалы ➔ Обская губа (Карское море)",
    "tributaries": [],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Надым",
      "backMainAnswer": "Евразия • Сибирские Увалы ➔ Обская губа (Карское море)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Сибирские Увалы ➔ Обская губа (Карское море)"
        },
        {
          "label": "Длина",
          "value": "545 км"
        },
        {
          "label": "Главные притоки",
          "value": "—"
        }
      ],
      "backNote": "Река Надым: Сибирские Увалы ➔ Обская губа (Карское море)."
    }
  },
  {
    "id": "m4_riv_narmada",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_eurasia",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Нармада",
    "aliases": [],
    "region": "Евразия",
    "locationDesc": "Евразия (Плато Амаркантак (Индия) ➔ Аравийский море (Камбейский залив))",
    "mapPrompt": "Покажите реку: Нармада",
    "geometryType": "polyline",
    "lat": 22.0,
    "lng": 77.0,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        22.7,
        81.7
      ],
      [
        22.0,
        78.0
      ],
      [
        21.7,
        72.8
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "eurasia",
    "lengthKm": 1312,
    "sourceMouth": "Плато Амаркантак (Индия) ➔ Аравийский море (Камбейский залив)",
    "tributaries": [],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Нармада",
      "backMainAnswer": "Евразия • Плато Амаркантак (Индия) ➔ Аравийский море (Камбейский залив)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Плато Амаркантак (Индия) ➔ Аравийский море (Камбейский залив)"
        },
        {
          "label": "Длина",
          "value": "1312 км"
        },
        {
          "label": "Главные притоки",
          "value": "—"
        }
      ],
      "backNote": "Река Нармада: Плато Амаркантак (Индия) ➔ Аравийский море (Камбейский залив)."
    }
  },
  {
    "id": "m4_riv_neva",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_eurasia",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Нева",
    "aliases": [],
    "region": "Евразия",
    "locationDesc": "Евразия (Ладожское озеро ➔ Финский залив (Балтийское море, Санкт-Петербург))",
    "mapPrompt": "Покажите реку: Нева",
    "geometryType": "polyline",
    "lat": 59.8,
    "lng": 30.7,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        59.95,
        31.03
      ],
      [
        59.93,
        30.31
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "eurasia",
    "lengthKm": 74,
    "sourceMouth": "Ладожское озеро ➔ Финский залив (Балтийское море, Санкт-Петербург)",
    "tributaries": [
      "Ижора",
      "Тосна",
      "Охта"
    ],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Нева",
      "backMainAnswer": "Евразия • Ладожское озеро ➔ Финский залив (Балтийское море, Санкт-Петербург)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Ладожское озеро ➔ Финский залив (Балтийское море, Санкт-Петербург)"
        },
        {
          "label": "Длина",
          "value": "74 км"
        },
        {
          "label": "Главные притоки",
          "value": "Ижора, Тосна, Охта"
        }
      ],
      "backNote": "Река Нева: Ладожское озеро ➔ Финский залив (Балтийское море, Санкт-Петербург)."
    }
  },
  {
    "id": "m4_riv_neman",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_eurasia",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Неман",
    "aliases": [],
    "region": "Евразия",
    "locationDesc": "Евразия (Минская возвышенность (Беларусь) ➔ Куршский залив (Балтийское море))",
    "mapPrompt": "Покажите реку: Неман",
    "geometryType": "polyline",
    "lat": 54.0,
    "lng": 24.0,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        53.5,
        27.2
      ],
      [
        53.6,
        24.5
      ],
      [
        54.8,
        23.9
      ],
      [
        55.3,
        21.3
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "eurasia",
    "lengthKm": 937,
    "sourceMouth": "Минская возвышенность (Беларусь) ➔ Куршский залив (Балтийское море)",
    "tributaries": [
      "Вилия (Нярис)",
      "Щара"
    ],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Неман",
      "backMainAnswer": "Евразия • Минская возвышенность (Беларусь) ➔ Куршский залив (Балтийское море)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Минская возвышенность (Беларусь) ➔ Куршский залив (Балтийское море)"
        },
        {
          "label": "Длина",
          "value": "937 км"
        },
        {
          "label": "Главные притоки",
          "value": "Вилия (Нярис), Щара"
        }
      ],
      "backNote": "Река Неман: Минская возвышенность (Беларусь) ➔ Куршский залив (Балтийское море)."
    }
  },
  {
    "id": "m4_riv_ob",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_eurasia",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Обь",
    "aliases": [
      "Бия",
      "Катунь"
    ],
    "region": "Евразия",
    "locationDesc": "Евразия (Слияние Бии и Катуни (Алтай) ➔ Обская губа (Карское море))",
    "mapPrompt": "Покажите реку: Обь",
    "geometryType": "polyline",
    "lat": 58.0,
    "lng": 76.0,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        52.4,
        85.0
      ],
      [
        53.4,
        83.8
      ],
      [
        55.0,
        82.9
      ],
      [
        61.0,
        69.1
      ],
      [
        66.5,
        66.6
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "eurasia",
    "lengthKm": 3650,
    "sourceMouth": "Слияние Бии и Катуни (Алтай) ➔ Обская губа (Карское море)",
    "tributaries": [
      "Иртыш",
      "Томь",
      "Чулым",
      "Кеть",
      "Васюган"
    ],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Обь",
      "backMainAnswer": "Евразия • Слияние Бии и Катуни (Алтай) ➔ Обская губа (Карское море)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Слияние Бии и Катуни (Алтай) ➔ Обская губа (Карское море)"
        },
        {
          "label": "Длина",
          "value": "3650 км"
        },
        {
          "label": "Главные притоки",
          "value": "Иртыш, Томь, Чулым, Кеть, Васюган"
        }
      ],
      "backNote": "Река Обь: Слияние Бии и Катуни (Алтай) ➔ Обская губа (Карское море)."
    }
  },
  {
    "id": "m4_riv_biya",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_eurasia",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Бия",
    "aliases": [],
    "region": "Евразия",
    "locationDesc": "Евразия (Телецкое озеро (Алтай) ➔ исток Оби)",
    "mapPrompt": "Покажите реку: Бия",
    "geometryType": "polyline",
    "lat": 52.2,
    "lng": 86.0,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        51.8,
        87.2
      ],
      [
        52.4,
        85.0
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "eurasia",
    "lengthKm": 301,
    "sourceMouth": "Телецкое озеро (Алтай) ➔ исток Оби",
    "tributaries": [],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Бия",
      "backMainAnswer": "Евразия • Телецкое озеро (Алтай) ➔ исток Оби",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Телецкое озеро (Алтай) ➔ исток Оби"
        },
        {
          "label": "Длина",
          "value": "301 км"
        },
        {
          "label": "Главные притоки",
          "value": "—"
        }
      ],
      "backNote": "Река Бия: Телецкое озеро (Алтай) ➔ исток Оби."
    }
  },
  {
    "id": "m4_riv_katun",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_eurasia",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Катунь",
    "aliases": [],
    "region": "Евразия",
    "locationDesc": "Евразия (Ледник Геблера (гора Белуха, Алтай) ➔ исток Оби)",
    "mapPrompt": "Покажите реку: Катунь",
    "geometryType": "polyline",
    "lat": 51.0,
    "lng": 86.2,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        49.8,
        86.6
      ],
      [
        51.5,
        86.0
      ],
      [
        52.4,
        85.0
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "eurasia",
    "lengthKm": 688,
    "sourceMouth": "Ледник Геблера (гора Белуха, Алтай) ➔ исток Оби",
    "tributaries": [],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Катунь",
      "backMainAnswer": "Евразия • Ледник Геблера (гора Белуха, Алтай) ➔ исток Оби",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Ледник Геблера (гора Белуха, Алтай) ➔ исток Оби"
        },
        {
          "label": "Длина",
          "value": "688 км"
        },
        {
          "label": "Главные притоки",
          "value": "—"
        }
      ],
      "backNote": "Река Катунь: Ледник Геблера (гора Белуха, Алтай) ➔ исток Оби."
    }
  },
  {
    "id": "m4_riv_irtysh",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_eurasia",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Иртыш",
    "aliases": [],
    "region": "Евразия",
    "locationDesc": "Евразия (Монгольский Алтай (Чёрный Иртыш) ➔ Обь (Ханты-Мансийск, главный приток Оби))",
    "mapPrompt": "Покажите реку: Иртыш",
    "geometryType": "polyline",
    "lat": 54.0,
    "lng": 75.0,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        47.5,
        89.5
      ],
      [
        48.0,
        84.0
      ],
      [
        50.4,
        80.2
      ],
      [
        55.0,
        73.4
      ],
      [
        58.2,
        68.2
      ],
      [
        61.0,
        69.1
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "eurasia",
    "lengthKm": 4248,
    "sourceMouth": "Монгольский Алтай (Чёрный Иртыш) ➔ Обь (Ханты-Мансийск, главный приток Оби)",
    "tributaries": [
      "Ишим",
      "Тобол",
      "Омь",
      "Тара"
    ],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Иртыш",
      "backMainAnswer": "Евразия • Монгольский Алтай (Чёрный Иртыш) ➔ Обь (Ханты-Мансийск, главный приток Оби)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Монгольский Алтай (Чёрный Иртыш) ➔ Обь (Ханты-Мансийск, главный приток Оби)"
        },
        {
          "label": "Длина",
          "value": "4248 км"
        },
        {
          "label": "Главные притоки",
          "value": "Ишим, Тобол, Омь, Тара"
        }
      ],
      "backNote": "Река Иртыш: Монгольский Алтай (Чёрный Иртыш) ➔ Обь (Ханты-Мансийск, главный приток Оби)."
    }
  },
  {
    "id": "m4_riv_ishim",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_eurasia",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Ишим",
    "aliases": [],
    "region": "Евразия",
    "locationDesc": "Евразия (Казахский мелкосопочник (Нияз) ➔ Иртыш (Усть-Ишим))",
    "mapPrompt": "Покажите реку: Ишим",
    "geometryType": "polyline",
    "lat": 53.0,
    "lng": 70.0,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        50.3,
        73.0
      ],
      [
        51.2,
        71.4
      ],
      [
        54.8,
        69.1
      ],
      [
        57.7,
        71.2
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "eurasia",
    "lengthKm": 2450,
    "sourceMouth": "Казахский мелкосопочник (Нияз) ➔ Иртыш (Усть-Ишим)",
    "tributaries": [],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Ишим",
      "backMainAnswer": "Евразия • Казахский мелкосопочник (Нияз) ➔ Иртыш (Усть-Ишим)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Казахский мелкосопочник (Нияз) ➔ Иртыш (Усть-Ишим)"
        },
        {
          "label": "Длина",
          "value": "2450 км"
        },
        {
          "label": "Главные притоки",
          "value": "—"
        }
      ],
      "backNote": "Река Ишим: Казахский мелкосопочник (Нияз) ➔ Иртыш (Усть-Ишим)."
    }
  },
  {
    "id": "m4_riv_tobol",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_eurasia",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Тобол",
    "aliases": [],
    "region": "Евразия",
    "locationDesc": "Евразия (Южный Урал / Тургайское плато ➔ Иртыш (Тобольск))",
    "mapPrompt": "Покажите реку: Тобол",
    "geometryType": "polyline",
    "lat": 55.0,
    "lng": 64.5,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        51.5,
        61.0
      ],
      [
        54.0,
        63.5
      ],
      [
        57.2,
        65.5
      ],
      [
        58.2,
        68.2
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "eurasia",
    "lengthKm": 1591,
    "sourceMouth": "Южный Урал / Тургайское плато ➔ Иртыш (Тобольск)",
    "tributaries": [
      "Исеть",
      "Тура",
      "Тавда",
      "Уй"
    ],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Тобол",
      "backMainAnswer": "Евразия • Южный Урал / Тургайское плато ➔ Иртыш (Тобольск)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Южный Урал / Тургайское плато ➔ Иртыш (Тобольск)"
        },
        {
          "label": "Длина",
          "value": "1591 км"
        },
        {
          "label": "Главные притоки",
          "value": "Исеть, Тура, Тавда, Уй"
        }
      ],
      "backNote": "Река Тобол: Южный Урал / Тургайское плато ➔ Иртыш (Тобольск)."
    }
  },
  {
    "id": "m4_riv_oder",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_eurasia",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Одра (Одер)",
    "aliases": [],
    "region": "Евразия",
    "locationDesc": "Евразия (Судеты (Чехия) ➔ Щецинский залив (Балтийское море))",
    "mapPrompt": "Покажите реку: Одра (Одер)",
    "geometryType": "polyline",
    "lat": 52.0,
    "lng": 15.0,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        49.6,
        17.5
      ],
      [
        51.1,
        17.0
      ],
      [
        52.4,
        14.6
      ],
      [
        53.6,
        14.5
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "eurasia",
    "lengthKm": 854,
    "sourceMouth": "Судеты (Чехия) ➔ Щецинский залив (Балтийское море)",
    "tributaries": [
      "Варта",
      "Ныса-Лужицкая"
    ],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Одра (Одер)",
      "backMainAnswer": "Евразия • Судеты (Чехия) ➔ Щецинский залив (Балтийское море)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Судеты (Чехия) ➔ Щецинский залив (Балтийское море)"
        },
        {
          "label": "Длина",
          "value": "854 км"
        },
        {
          "label": "Главные притоки",
          "value": "Варта, Ныса-Лужицкая"
        }
      ],
      "backNote": "Река Одра (Одер): Судеты (Чехия) ➔ Щецинский залив (Балтийское море)."
    }
  },
  {
    "id": "m4_riv_olenyok",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_eurasia",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Оленёк",
    "aliases": [],
    "region": "Евразия",
    "locationDesc": "Евразия (Вилюйское плато ➔ Оленёкский залив (море Лаптевых))",
    "mapPrompt": "Покажите реку: Оленёк",
    "geometryType": "polyline",
    "lat": 70.0,
    "lng": 118.0,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        67.0,
        105.0
      ],
      [
        68.5,
        114.0
      ],
      [
        72.0,
        121.0
      ],
      [
        73.0,
        119.0
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "eurasia",
    "lengthKm": 2292,
    "sourceMouth": "Вилюйское плато ➔ Оленёкский залив (море Лаптевых)",
    "tributaries": [],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Оленёк",
      "backMainAnswer": "Евразия • Вилюйское плато ➔ Оленёкский залив (море Лаптевых)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Вилюйское плато ➔ Оленёкский залив (море Лаптевых)"
        },
        {
          "label": "Длина",
          "value": "2292 км"
        },
        {
          "label": "Главные притоки",
          "value": "—"
        }
      ],
      "backNote": "Река Оленёк: Вилюйское плато ➔ Оленёкский залив (море Лаптевых)."
    }
  },
  {
    "id": "m4_riv_pechora",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_eurasia",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Печора",
    "aliases": [],
    "region": "Евразия",
    "locationDesc": "Евразия (Северный Урал ➔ Печорская губа (Баренцево море))",
    "mapPrompt": "Покажите реку: Печора",
    "geometryType": "polyline",
    "lat": 65.0,
    "lng": 55.0,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        62.2,
        59.4
      ],
      [
        64.0,
        57.0
      ],
      [
        65.4,
        52.2
      ],
      [
        68.3,
        53.3
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "eurasia",
    "lengthKm": 1809,
    "sourceMouth": "Северный Урал ➔ Печорская губа (Баренцево море)",
    "tributaries": [
      "Уса",
      "Ижма",
      "Цильма"
    ],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Печора",
      "backMainAnswer": "Евразия • Северный Урал ➔ Печорская губа (Баренцево море)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Северный Урал ➔ Печорская губа (Баренцево море)"
        },
        {
          "label": "Длина",
          "value": "1809 км"
        },
        {
          "label": "Главные притоки",
          "value": "Уса, Ижма, Цильма"
        }
      ],
      "backNote": "Река Печора: Северный Урал ➔ Печорская губа (Баренцево море)."
    }
  },
  {
    "id": "m4_riv_po_river",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_eurasia",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "По",
    "aliases": [],
    "region": "Евразия",
    "locationDesc": "Евразия (Коттские Альпы (Монте-Визо) ➔ Адриатическое море (длиннейшая река Италии))",
    "mapPrompt": "Покажите реку: По",
    "geometryType": "polyline",
    "lat": 45.0,
    "lng": 10.0,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        44.7,
        7.1
      ],
      [
        45.1,
        9.5
      ],
      [
        45.0,
        11.5
      ],
      [
        44.9,
        12.4
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "eurasia",
    "lengthKm": 652,
    "sourceMouth": "Коттские Альпы (Монте-Визо) ➔ Адриатическое море (длиннейшая река Италии)",
    "tributaries": [
      "Адда",
      "Тичино",
      "Ольо"
    ],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: По",
      "backMainAnswer": "Евразия • Коттские Альпы (Монте-Визо) ➔ Адриатическое море (длиннейшая река Италии)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Коттские Альпы (Монте-Визо) ➔ Адриатическое море (длиннейшая река Италии)"
        },
        {
          "label": "Длина",
          "value": "652 км"
        },
        {
          "label": "Главные притоки",
          "value": "Адда, Тичино, Ольо"
        }
      ],
      "backNote": "Река По: Коттские Альпы (Монте-Визо) ➔ Адриатическое море (длиннейшая река Италии)."
    }
  },
  {
    "id": "m4_riv_pur_river",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_eurasia",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Пур",
    "aliases": [],
    "region": "Евразия",
    "locationDesc": "Евразия (Слияние Пякупура и Айваседапура ➔ Тазовская губа (Карское море))",
    "mapPrompt": "Покажите реку: Пур",
    "geometryType": "polyline",
    "lat": 65.5,
    "lng": 78.0,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        64.0,
        78.0
      ],
      [
        65.5,
        78.2
      ],
      [
        67.0,
        77.8
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "eurasia",
    "lengthKm": 389,
    "sourceMouth": "Слияние Пякупура и Айваседапура ➔ Тазовская губа (Карское море)",
    "tributaries": [],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Пур",
      "backMainAnswer": "Евразия • Слияние Пякупура и Айваседапура ➔ Тазовская губа (Карское море)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Слияние Пякупура и Айваседапура ➔ Тазовская губа (Карское море)"
        },
        {
          "label": "Длина",
          "value": "389 км"
        },
        {
          "label": "Главные притоки",
          "value": "—"
        }
      ],
      "backNote": "Река Пур: Слияние Пякупура и Айваседапура ➔ Тазовская губа (Карское море)."
    }
  },
  {
    "id": "m4_riv_rhine",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_eurasia",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Рейн",
    "aliases": [],
    "region": "Евразия",
    "locationDesc": "Евразия (Альпы (Швейцария) ➔ Северное море (дельта в Нидерландах))",
    "mapPrompt": "Покажите реку: Рейн",
    "geometryType": "polyline",
    "lat": 50.0,
    "lng": 8.0,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        46.6,
        8.7
      ],
      [
        47.6,
        8.5
      ],
      [
        48.6,
        8.0
      ],
      [
        50.1,
        8.3
      ],
      [
        51.5,
        6.5
      ],
      [
        51.9,
        4.1
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "eurasia",
    "lengthKm": 1233,
    "sourceMouth": "Альпы (Швейцария) ➔ Северное море (дельта в Нидерландах)",
    "tributaries": [
      "Майн",
      "Мозель",
      "Неккар",
      "Рур",
      "Ааре"
    ],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Рейн",
      "backMainAnswer": "Евразия • Альпы (Швейцария) ➔ Северное море (дельта в Нидерландах)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Альпы (Швейцария) ➔ Северное море (дельта в Нидерландах)"
        },
        {
          "label": "Длина",
          "value": "1233 км"
        },
        {
          "label": "Главные притоки",
          "value": "Майн, Мозель, Неккар, Рур, Ааре"
        }
      ],
      "backNote": "Река Рейн: Альпы (Швейцария) ➔ Северное море (дельта в Нидерландах)."
    }
  },
  {
    "id": "m4_riv_rioni",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_eurasia",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Риони",
    "aliases": [],
    "region": "Евразия",
    "locationDesc": "Евразия (Большой Кавказ ➔ Чёрное море (Поти, Грузия))",
    "mapPrompt": "Покажите реку: Риони",
    "geometryType": "polyline",
    "lat": 42.3,
    "lng": 42.5,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        42.7,
        43.4
      ],
      [
        42.3,
        42.7
      ],
      [
        42.1,
        41.6
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "eurasia",
    "lengthKm": 327,
    "sourceMouth": "Большой Кавказ ➔ Чёрное море (Поти, Грузия)",
    "tributaries": [],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Риони",
      "backMainAnswer": "Евразия • Большой Кавказ ➔ Чёрное море (Поти, Грузия)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Большой Кавказ ➔ Чёрное море (Поти, Грузия)"
        },
        {
          "label": "Длина",
          "value": "327 км"
        },
        {
          "label": "Главные притоки",
          "value": "—"
        }
      ],
      "backNote": "Река Риони: Большой Кавказ ➔ Чёрное море (Поти, Грузия)."
    }
  },
  {
    "id": "m4_riv_rhone",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_eurasia",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Рона",
    "aliases": [],
    "region": "Евразия",
    "locationDesc": "Евразия (Ронский ледник (Лепонтинские Альпы, Швейцария) ➔ Лионский залив (Средиземное море))",
    "mapPrompt": "Покажите реку: Рона",
    "geometryType": "polyline",
    "lat": 45.0,
    "lng": 4.8,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        46.6,
        8.4
      ],
      [
        46.2,
        6.1
      ],
      [
        45.7,
        4.8
      ],
      [
        43.4,
        4.8
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "eurasia",
    "lengthKm": 812,
    "sourceMouth": "Ронский ледник (Лепонтинские Альпы, Швейцария) ➔ Лионский залив (Средиземное море)",
    "tributaries": [
      "Сона",
      "Дюранс",
      "Изер"
    ],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Рона",
      "backMainAnswer": "Евразия • Ронский ледник (Лепонтинские Альпы, Швейцария) ➔ Лионский залив (Средиземное море)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Ронский ледник (Лепонтинские Альпы, Швейцария) ➔ Лионский залив (Средиземное море)"
        },
        {
          "label": "Длина",
          "value": "812 км"
        },
        {
          "label": "Главные притоки",
          "value": "Сона, Дюранс, Изер"
        }
      ],
      "backNote": "Река Рона: Ронский ледник (Лепонтинские Альпы, Швейцария) ➔ Лионский залив (Средиземное море)."
    }
  },
  {
    "id": "m4_riv_salween",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_eurasia",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Салуин",
    "aliases": [],
    "region": "Евразия",
    "locationDesc": "Евразия (Тибетское нагорье (Тангла) ➔ Андаманское море (Мьянма))",
    "mapPrompt": "Покажите реку: Салуин",
    "geometryType": "polyline",
    "lat": 22.0,
    "lng": 98.5,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        32.0,
        91.5
      ],
      [
        26.0,
        98.8
      ],
      [
        19.0,
        97.5
      ],
      [
        16.5,
        97.6
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "eurasia",
    "lengthKm": 2815,
    "sourceMouth": "Тибетское нагорье (Тангла) ➔ Андаманское море (Мьянма)",
    "tributaries": [],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Салуин",
      "backMainAnswer": "Евразия • Тибетское нагорье (Тангла) ➔ Андаманское море (Мьянма)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Тибетское нагорье (Тангла) ➔ Андаманское море (Мьянма)"
        },
        {
          "label": "Длина",
          "value": "2815 км"
        },
        {
          "label": "Главные притоки",
          "value": "—"
        }
      ],
      "backNote": "Река Салуин: Тибетское нагорье (Тангла) ➔ Андаманское море (Мьянма)."
    }
  },
  {
    "id": "m4_riv_seine",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_eurasia",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Сена",
    "aliases": [],
    "region": "Евразия",
    "locationDesc": "Евразия (Плато Лангр (Бургундия) ➔ пролив Ла-Манш (Гавр, Франция))",
    "mapPrompt": "Покажите реку: Сена",
    "geometryType": "polyline",
    "lat": 48.8,
    "lng": 2.3,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        47.5,
        4.7
      ],
      [
        48.5,
        3.0
      ],
      [
        48.8,
        2.3
      ],
      [
        49.4,
        0.2
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "eurasia",
    "lengthKm": 777,
    "sourceMouth": "Плато Лангр (Бургундия) ➔ пролив Ла-Манш (Гавр, Франция)",
    "tributaries": [
      "Марна",
      "Уаза",
      "Йонна"
    ],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Сена",
      "backMainAnswer": "Евразия • Плато Лангр (Бургундия) ➔ пролив Ла-Манш (Гавр, Франция)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Плато Лангр (Бургундия) ➔ пролив Ла-Манш (Гавр, Франция)"
        },
        {
          "label": "Длина",
          "value": "777 км"
        },
        {
          "label": "Главные притоки",
          "value": "Марна, Уаза, Йонна"
        }
      ],
      "backNote": "Река Сена: Плато Лангр (Бургундия) ➔ пролив Ла-Манш (Гавр, Франция)."
    }
  },
  {
    "id": "m4_riv_severnaya_dvina",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_eurasia",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Северная Двина",
    "aliases": [],
    "region": "Евразия",
    "locationDesc": "Евразия (Слияние Сухоны и Юга (Великий Устюг) ➔ Белое море (Двинская губа))",
    "mapPrompt": "Покажите реку: Северная Двина",
    "geometryType": "polyline",
    "lat": 63.0,
    "lng": 43.0,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        60.7,
        46.3
      ],
      [
        62.8,
        42.8
      ],
      [
        64.5,
        40.5
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "eurasia",
    "lengthKm": 744,
    "sourceMouth": "Слияние Сухоны и Юга (Великий Устюг) ➔ Белое море (Двинская губа)",
    "tributaries": [
      "Вычегда",
      "Пинега",
      "Вага"
    ],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Северная Двина",
      "backMainAnswer": "Евразия • Слияние Сухоны и Юга (Великий Устюг) ➔ Белое море (Двинская губа)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Слияние Сухоны и Юга (Великий Устюг) ➔ Белое море (Двинская губа)"
        },
        {
          "label": "Длина",
          "value": "744 км"
        },
        {
          "label": "Главные притоки",
          "value": "Вычегда, Пинега, Вага"
        }
      ],
      "backNote": "Река Северная Двина: Слияние Сухоны и Юга (Великий Устюг) ➔ Белое море (Двинская губа)."
    }
  },
  {
    "id": "m4_riv_pearl_river",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_eurasia",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Сицзян (Жемчужная река)",
    "aliases": [],
    "region": "Евразия",
    "locationDesc": "Евразия (Юньнань-Гуйчжоуское нагорье ➔ Южно-Китайское море (Гуанчжоу/Гонконг))",
    "mapPrompt": "Покажите реку: Сицзян (Жемчужная река)",
    "geometryType": "polyline",
    "lat": 23.5,
    "lng": 110.0,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        25.0,
        104.0
      ],
      [
        23.5,
        108.0
      ],
      [
        23.1,
        113.3
      ],
      [
        22.2,
        113.5
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "eurasia",
    "lengthKm": 2214,
    "sourceMouth": "Юньнань-Гуйчжоуское нагорье ➔ Южно-Китайское море (Гуанчжоу/Гонконг)",
    "tributaries": [
      "Чжуцзян"
    ],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Сицзян (Жемчужная река)",
      "backMainAnswer": "Евразия • Юньнань-Гуйчжоуское нагорье ➔ Южно-Китайское море (Гуанчжоу/Гонконг)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Юньнань-Гуйчжоуское нагорье ➔ Южно-Китайское море (Гуанчжоу/Гонконг)"
        },
        {
          "label": "Длина",
          "value": "2214 км"
        },
        {
          "label": "Главные притоки",
          "value": "Чжуцзян"
        }
      ],
      "backNote": "Река Сицзян (Жемчужная река): Юньнань-Гуйчжоуское нагорье ➔ Южно-Китайское море (Гуанчжоу/Гонконг)."
    }
  },
  {
    "id": "m4_riv_syrdarya",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_eurasia",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Сырдарья (с Нарыном)",
    "aliases": [],
    "region": "Евразия",
    "locationDesc": "Евразия (Центральный Тянь-Шань ➔ Малое Аральское море)",
    "mapPrompt": "Покажите реку: Сырдарья (с Нарыном)",
    "geometryType": "polyline",
    "lat": 43.0,
    "lng": 67.0,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        41.8,
        77.0
      ],
      [
        41.0,
        71.5
      ],
      [
        40.5,
        68.5
      ],
      [
        44.8,
        65.5
      ],
      [
        46.1,
        61.0
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "eurasia",
    "lengthKm": 2212,
    "sourceMouth": "Центральный Тянь-Шань ➔ Малое Аральское море",
    "tributaries": [
      "Нарын",
      "Карадарья",
      "Чирчик"
    ],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Сырдарья (с Нарыном)",
      "backMainAnswer": "Евразия • Центральный Тянь-Шань ➔ Малое Аральское море",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Центральный Тянь-Шань ➔ Малое Аральское море"
        },
        {
          "label": "Длина",
          "value": "2212 км"
        },
        {
          "label": "Главные притоки",
          "value": "Нарын, Карадарья, Чирчик"
        }
      ],
      "backNote": "Река Сырдарья (с Нарыном): Центральный Тянь-Шань ➔ Малое Аральское море."
    }
  },
  {
    "id": "m4_riv_taz_river",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_eurasia",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Таз",
    "aliases": [],
    "region": "Евразия",
    "locationDesc": "Евразия (Сибирские Увалы ➔ Тазовская губа (Карское море))",
    "mapPrompt": "Покажите реку: Таз",
    "geometryType": "polyline",
    "lat": 65.0,
    "lng": 80.0,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        62.8,
        83.5
      ],
      [
        64.0,
        81.0
      ],
      [
        67.5,
        78.8
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "eurasia",
    "lengthKm": 1401,
    "sourceMouth": "Сибирские Увалы ➔ Тазовская губа (Карское море)",
    "tributaries": [],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Таз",
      "backMainAnswer": "Евразия • Сибирские Увалы ➔ Тазовская губа (Карское море)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Сибирские Увалы ➔ Тазовская губа (Карское море)"
        },
        {
          "label": "Длина",
          "value": "1401 км"
        },
        {
          "label": "Главные притоки",
          "value": "—"
        }
      ],
      "backNote": "Река Таз: Сибирские Увалы ➔ Тазовская губа (Карское море)."
    }
  },
  {
    "id": "m4_riv_tarim",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_eurasia",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Тарим",
    "aliases": [],
    "region": "Евразия",
    "locationDesc": "Евразия (Слияние Аксу и Яркенда ➔ бессточное озеро Лобнор (пустыня Такла-Макан))",
    "mapPrompt": "Покажите реку: Тарим",
    "geometryType": "polyline",
    "lat": 41.0,
    "lng": 84.0,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        40.5,
        80.5
      ],
      [
        41.0,
        84.0
      ],
      [
        41.0,
        87.0
      ],
      [
        40.5,
        90.0
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "eurasia",
    "lengthKm": 2030,
    "sourceMouth": "Слияние Аксу и Яркенда ➔ бессточное озеро Лобнор (пустыня Такла-Макан)",
    "tributaries": [
      "Аксу",
      "Яркенд",
      "Хотан"
    ],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Тарим",
      "backMainAnswer": "Евразия • Слияние Аксу и Яркенда ➔ бессточное озеро Лобнор (пустыня Такла-Макан)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Слияние Аксу и Яркенда ➔ бессточное озеро Лобнор (пустыня Такла-Макан)"
        },
        {
          "label": "Длина",
          "value": "2030 км"
        },
        {
          "label": "Главные притоки",
          "value": "Аксу, Яркенд, Хотан"
        }
      ],
      "backNote": "Река Тарим: Слияние Аксу и Яркенда ➔ бессточное озеро Лобнор (пустыня Такла-Макан)."
    }
  },
  {
    "id": "m4_riv_tagus",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_eurasia",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Тахо (Тежу)",
    "aliases": [],
    "region": "Евразия",
    "locationDesc": "Евразия (Универсальные горы (Испания) ➔ Атлантический океан (Лиссабон, длиннейшая на Пиренеях))",
    "mapPrompt": "Покажите реку: Тахо (Тежу)",
    "geometryType": "polyline",
    "lat": 39.5,
    "lng": -5.5,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        40.3,
        -1.7
      ],
      [
        39.8,
        -4.0
      ],
      [
        39.5,
        -6.5
      ],
      [
        38.7,
        -9.1
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "eurasia",
    "lengthKm": 1007,
    "sourceMouth": "Универсальные горы (Испания) ➔ Атлантический океан (Лиссабон, длиннейшая на Пиренеях)",
    "tributaries": [
      "Тежу"
    ],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Тахо (Тежу)",
      "backMainAnswer": "Евразия • Универсальные горы (Испания) ➔ Атлантический океан (Лиссабон, длиннейшая на Пиренеях)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Универсальные горы (Испания) ➔ Атлантический океан (Лиссабон, длиннейшая на Пиренеях)"
        },
        {
          "label": "Длина",
          "value": "1007 км"
        },
        {
          "label": "Главные притоки",
          "value": "Тежу"
        }
      ],
      "backNote": "Река Тахо (Тежу): Универсальные горы (Испания) ➔ Атлантический океан (Лиссабон, длиннейшая на Пиренеях)."
    }
  },
  {
    "id": "m4_riv_thames",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_eurasia",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Темза",
    "aliases": [],
    "region": "Евразия",
    "locationDesc": "Евразия (Котсуолд-Хилс ➔ Северное море (Лондон, Великобритания))",
    "mapPrompt": "Покажите реку: Темза",
    "geometryType": "polyline",
    "lat": 51.5,
    "lng": -0.5,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        51.7,
        -2.0
      ],
      [
        51.5,
        -0.1
      ],
      [
        51.5,
        0.7
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "eurasia",
    "lengthKm": 346,
    "sourceMouth": "Котсуолд-Хилс ➔ Северное море (Лондон, Великобритания)",
    "tributaries": [],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Темза",
      "backMainAnswer": "Евразия • Котсуолд-Хилс ➔ Северное море (Лондон, Великобритания)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Котсуолд-Хилс ➔ Северное море (Лондон, Великобритания)"
        },
        {
          "label": "Длина",
          "value": "346 км"
        },
        {
          "label": "Главные притоки",
          "value": "—"
        }
      ],
      "backNote": "Река Темза: Котсуолд-Хилс ➔ Северное море (Лондон, Великобритания)."
    }
  },
  {
    "id": "m4_riv_terek",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_eurasia",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Терек",
    "aliases": [],
    "region": "Евразия",
    "locationDesc": "Евразия (Ледник Зилга-Хох (Главный Кавказский хребет) ➔ Каспийское море (Аграханский залив))",
    "mapPrompt": "Покажите реку: Терек",
    "geometryType": "polyline",
    "lat": 43.5,
    "lng": 45.0,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        42.6,
        44.3
      ],
      [
        43.1,
        44.2
      ],
      [
        43.7,
        44.5
      ],
      [
        43.6,
        47.5
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "eurasia",
    "lengthKm": 623,
    "sourceMouth": "Ледник Зилга-Хох (Главный Кавказский хребет) ➔ Каспийское море (Аграханский залив)",
    "tributaries": [
      "Сунжа",
      "Малка",
      "Баксан"
    ],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Терек",
      "backMainAnswer": "Евразия • Ледник Зилга-Хох (Главный Кавказский хребет) ➔ Каспийское море (Аграханский залив)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Ледник Зилга-Хох (Главный Кавказский хребет) ➔ Каспийское море (Аграханский залив)"
        },
        {
          "label": "Длина",
          "value": "623 км"
        },
        {
          "label": "Главные притоки",
          "value": "Сунжа, Малка, Баксан"
        }
      ],
      "backNote": "Река Терек: Ледник Зилга-Хох (Главный Кавказский хребет) ➔ Каспийское море (Аграханский залив)."
    }
  },
  {
    "id": "m4_riv_tiber",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_eurasia",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Тибр",
    "aliases": [],
    "region": "Евразия",
    "locationDesc": "Евразия (Тосканские Апеннины ➔ Тирренское море (Рим, Италия))",
    "mapPrompt": "Покажите реку: Тибр",
    "geometryType": "polyline",
    "lat": 42.5,
    "lng": 12.4,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        43.8,
        12.1
      ],
      [
        42.5,
        12.5
      ],
      [
        41.9,
        12.5
      ],
      [
        41.7,
        12.2
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "eurasia",
    "lengthKm": 405,
    "sourceMouth": "Тосканские Апеннины ➔ Тирренское море (Рим, Италия)",
    "tributaries": [
      "Аньене"
    ],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Тибр",
      "backMainAnswer": "Евразия • Тосканские Апеннины ➔ Тирренское море (Рим, Италия)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Тосканские Апеннины ➔ Тирренское море (Рим, Италия)"
        },
        {
          "label": "Длина",
          "value": "405 км"
        },
        {
          "label": "Главные притоки",
          "value": "Аньене"
        }
      ],
      "backNote": "Река Тибр: Тосканские Апеннины ➔ Тирренское море (Рим, Италия)."
    }
  },
  {
    "id": "m4_riv_ural_river",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_eurasia",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Урал",
    "aliases": [
      "Яик"
    ],
    "region": "Евразия",
    "locationDesc": "Евразия (Хребет Уралтау ➔ Каспийское море (граница Европы и Азии))",
    "mapPrompt": "Покажите реку: Урал",
    "geometryType": "polyline",
    "lat": 51.5,
    "lng": 55.0,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        54.7,
        59.4
      ],
      [
        51.5,
        58.5
      ],
      [
        51.2,
        51.3
      ],
      [
        47.1,
        51.8
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "eurasia",
    "lengthKm": 2428,
    "sourceMouth": "Хребет Уралтау ➔ Каспийское море (граница Европы и Азии)",
    "tributaries": [
      "Сакмара",
      "Илек"
    ],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Урал",
      "backMainAnswer": "Евразия • Хребет Уралтау ➔ Каспийское море (граница Европы и Азии)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Хребет Уралтау ➔ Каспийское море (граница Европы и Азии)"
        },
        {
          "label": "Длина",
          "value": "2428 км"
        },
        {
          "label": "Главные притоки",
          "value": "Сакмара, Илек"
        }
      ],
      "backNote": "Река Урал: Хребет Уралтау ➔ Каспийское море (граница Европы и Азии)."
    }
  },
  {
    "id": "m4_riv_khatanga",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_eurasia",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Хатанга (с Котуем)",
    "aliases": [],
    "region": "Евразия",
    "locationDesc": "Евразия (Плато Путорана ➔ Хатангский залив (море Лаптевых))",
    "mapPrompt": "Покажите реку: Хатанга (с Котуем)",
    "geometryType": "polyline",
    "lat": 71.0,
    "lng": 102.0,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        67.5,
        98.0
      ],
      [
        71.5,
        102.0
      ],
      [
        73.0,
        106.0
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "eurasia",
    "lengthKm": 1636,
    "sourceMouth": "Плато Путорана ➔ Хатангский залив (море Лаптевых)",
    "tributaries": [
      "Котуй",
      "Хета"
    ],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Хатанга (с Котуем)",
      "backMainAnswer": "Евразия • Плато Путорана ➔ Хатангский залив (море Лаптевых)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Плато Путорана ➔ Хатангский залив (море Лаптевых)"
        },
        {
          "label": "Длина",
          "value": "1636 км"
        },
        {
          "label": "Главные притоки",
          "value": "Котуй, Хета"
        }
      ],
      "backNote": "Река Хатанга (с Котуем): Плато Путорана ➔ Хатангский залив (море Лаптевых)."
    }
  },
  {
    "id": "m4_riv_yellow_river",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_eurasia",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Хуанхэ (Жёлтая река)",
    "aliases": [],
    "region": "Евразия",
    "locationDesc": "Евразия (Тибетское нагорье (хр. Баян-Хара-Ула) ➔ Бохайский залив (Жёлтое море))",
    "mapPrompt": "Покажите реку: Хуанхэ (Жёлтая река)",
    "geometryType": "polyline",
    "lat": 37.0,
    "lng": 110.0,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        35.0,
        96.0
      ],
      [
        38.0,
        102.0
      ],
      [
        40.5,
        110.0
      ],
      [
        35.0,
        111.0
      ],
      [
        37.8,
        119.0
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "eurasia",
    "lengthKm": 5464,
    "sourceMouth": "Тибетское нагорье (хр. Баян-Хара-Ула) ➔ Бохайский залив (Жёлтое море)",
    "tributaries": [
      "Вэйхэ",
      "Фэньхэ"
    ],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Хуанхэ (Жёлтая река)",
      "backMainAnswer": "Евразия • Тибетское нагорье (хр. Баян-Хара-Ула) ➔ Бохайский залив (Жёлтое море)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Тибетское нагорье (хр. Баян-Хара-Ула) ➔ Бохайский залив (Жёлтое море)"
        },
        {
          "label": "Длина",
          "value": "5464 км"
        },
        {
          "label": "Главные притоки",
          "value": "Вэйхэ, Фэньхэ"
        }
      ],
      "backNote": "Река Хуанхэ (Жёлтая река): Тибетское нагорье (хр. Баян-Хара-Ула) ➔ Бохайский залив (Жёлтое море)."
    }
  },
  {
    "id": "m4_riv_chu_river",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_eurasia",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Чу",
    "aliases": [],
    "region": "Евразия",
    "locationDesc": "Евразия (Ледники Терскей-Алатау ➔ пустыня Муюнкум (теряется в песках))",
    "mapPrompt": "Покажите реку: Чу",
    "geometryType": "polyline",
    "lat": 43.0,
    "lng": 73.0,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        42.2,
        76.0
      ],
      [
        42.8,
        74.5
      ],
      [
        43.5,
        71.0
      ],
      [
        44.8,
        67.5
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "eurasia",
    "lengthKm": 1067,
    "sourceMouth": "Ледники Терскей-Алатау ➔ пустыня Муюнкум (теряется в песках)",
    "tributaries": [],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Чу",
      "backMainAnswer": "Евразия • Ледники Терскей-Алатау ➔ пустыня Муюнкум (теряется в песках)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Ледники Терскей-Алатау ➔ пустыня Муюнкум (теряется в песках)"
        },
        {
          "label": "Длина",
          "value": "1067 км"
        },
        {
          "label": "Главные притоки",
          "value": "—"
        }
      ],
      "backNote": "Река Чу: Ледники Терскей-Алатау ➔ пустыня Муюнкум (теряется в песках)."
    }
  },
  {
    "id": "m4_riv_shatt_al_arab",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_eurasia",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Шатт-эль-Араб (Тигр и Евфрат)",
    "aliases": [],
    "region": "Евразия",
    "locationDesc": "Евразия (Слияние Тигра и Евфрата ➔ Персидский залив (Месопотамия))",
    "mapPrompt": "Покажите реку: Шатт-эль-Араб (Тигр и Евфрат)",
    "geometryType": "polyline",
    "lat": 30.5,
    "lng": 48.0,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        31.0,
        47.4
      ],
      [
        29.9,
        48.6
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "eurasia",
    "lengthKm": 195,
    "sourceMouth": "Слияние Тигра и Евфрата ➔ Персидский залив (Месопотамия)",
    "tributaries": [
      "Тигр",
      "Евфрат",
      "Карун"
    ],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Шатт-эль-Араб (Тигр и Евфрат)",
      "backMainAnswer": "Евразия • Слияние Тигра и Евфрата ➔ Персидский залив (Месопотамия)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Слияние Тигра и Евфрата ➔ Персидский залив (Месопотамия)"
        },
        {
          "label": "Длина",
          "value": "195 км"
        },
        {
          "label": "Главные притоки",
          "value": "Тигр, Евфрат, Карун"
        }
      ],
      "backNote": "Река Шатт-эль-Араб (Тигр и Евфрат): Слияние Тигра и Евфрата ➔ Персидский залив (Месопотамия)."
    }
  },
  {
    "id": "m4_riv_tigris",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_eurasia",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Тигр",
    "aliases": [],
    "region": "Евразия",
    "locationDesc": "Евразия (Армянское нагорье (оз. Хазар, Турция) ➔ Шатт-эль-Араб)",
    "mapPrompt": "Покажите реку: Тигр",
    "geometryType": "polyline",
    "lat": 35.0,
    "lng": 43.5,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        38.5,
        39.5
      ],
      [
        37.0,
        42.0
      ],
      [
        33.3,
        44.4
      ],
      [
        31.0,
        47.4
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "eurasia",
    "lengthKm": 1900,
    "sourceMouth": "Армянское нагорье (оз. Хазар, Турция) ➔ Шатт-эль-Араб",
    "tributaries": [
      "Большой Заб",
      "Малый Заб",
      "Дияла"
    ],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Тигр",
      "backMainAnswer": "Евразия • Армянское нагорье (оз. Хазар, Турция) ➔ Шатт-эль-Араб",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Армянское нагорье (оз. Хазар, Турция) ➔ Шатт-эль-Араб"
        },
        {
          "label": "Длина",
          "value": "1900 км"
        },
        {
          "label": "Главные притоки",
          "value": "Большой Заб, Малый Заб, Дияла"
        }
      ],
      "backNote": "Река Тигр: Армянское нагорье (оз. Хазар, Турция) ➔ Шатт-эль-Араб."
    }
  },
  {
    "id": "m4_riv_euphrates",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_eurasia",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Евфрат (с Муратом)",
    "aliases": [],
    "region": "Евразия",
    "locationDesc": "Евразия (Армянское нагорье (слияние Карасу и Мурата) ➔ Шатт-эль-Араб)",
    "mapPrompt": "Покажите реку: Евфрат (с Муратом)",
    "geometryType": "polyline",
    "lat": 35.5,
    "lng": 40.0,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        39.5,
        41.5
      ],
      [
        37.0,
        38.0
      ],
      [
        34.0,
        42.0
      ],
      [
        31.0,
        47.4
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "eurasia",
    "lengthKm": 2780,
    "sourceMouth": "Армянское нагорье (слияние Карасу и Мурата) ➔ Шатт-эль-Араб",
    "tributaries": [
      "Мурат",
      "Карасу",
      "Хабур"
    ],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Евфрат (с Муратом)",
      "backMainAnswer": "Евразия • Армянское нагорье (слияние Карасу и Мурата) ➔ Шатт-эль-Араб",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Армянское нагорье (слияние Карасу и Мурата) ➔ Шатт-эль-Араб"
        },
        {
          "label": "Длина",
          "value": "2780 км"
        },
        {
          "label": "Главные притоки",
          "value": "Мурат, Карасу, Хабур"
        }
      ],
      "backNote": "Река Евфрат (с Муратом): Армянское нагорье (слияние Карасу и Мурата) ➔ Шатт-эль-Араб."
    }
  },
  {
    "id": "m4_riv_elbe",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_eurasia",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Эльба (Лаба)",
    "aliases": [],
    "region": "Евразия",
    "locationDesc": "Евразия (Исполинские горы (Крконоше, Чехия) ➔ Северное море (Гамбург))",
    "mapPrompt": "Покажите реку: Эльба (Лаба)",
    "geometryType": "polyline",
    "lat": 52.0,
    "lng": 12.0,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        50.7,
        15.5
      ],
      [
        51.0,
        13.7
      ],
      [
        52.1,
        11.6
      ],
      [
        53.5,
        9.9
      ],
      [
        53.9,
        8.7
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "eurasia",
    "lengthKm": 1165,
    "sourceMouth": "Исполинские горы (Крконоше, Чехия) ➔ Северное море (Гамбург)",
    "tributaries": [
      "Влтава",
      "Заале",
      "Шпрее"
    ],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Эльба (Лаба)",
      "backMainAnswer": "Евразия • Исполинские горы (Крконоше, Чехия) ➔ Северное море (Гамбург)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Исполинские горы (Крконоше, Чехия) ➔ Северное море (Гамбург)"
        },
        {
          "label": "Длина",
          "value": "1165 км"
        },
        {
          "label": "Главные притоки",
          "value": "Влтава, Заале, Шпрее"
        }
      ],
      "backNote": "Река Эльба (Лаба): Исполинские горы (Крконоше, Чехия) ➔ Северное море (Гамбург)."
    }
  },
  {
    "id": "m4_riv_emba",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_eurasia",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Эмба",
    "aliases": [],
    "region": "Евразия",
    "locationDesc": "Евразия (Подуральское плато (Мугоджары) ➔ Каспийское море (Казахстан))",
    "mapPrompt": "Покажите реку: Эмба",
    "geometryType": "polyline",
    "lat": 47.5,
    "lng": 55.0,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        49.0,
        58.5
      ],
      [
        47.5,
        55.0
      ],
      [
        46.8,
        53.2
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "eurasia",
    "lengthKm": 712,
    "sourceMouth": "Подуральское плато (Мугоджары) ➔ Каспийское море (Казахстан)",
    "tributaries": [],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Эмба",
      "backMainAnswer": "Евразия • Подуральское плато (Мугоджары) ➔ Каспийское море (Казахстан)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Подуральское плато (Мугоджары) ➔ Каспийское море (Казахстан)"
        },
        {
          "label": "Длина",
          "value": "712 км"
        },
        {
          "label": "Главные притоки",
          "value": "—"
        }
      ],
      "backNote": "Река Эмба: Подуральское плато (Мугоджары) ➔ Каспийское море (Казахстан)."
    }
  },
  {
    "id": "m4_riv_yana_river",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_eurasia",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Яна",
    "aliases": [],
    "region": "Евразия",
    "locationDesc": "Евразия (Слияние Сартанга и Дулгалаха (Верхоянский хр.) ➔ Янский залив (море Лаптевых))",
    "mapPrompt": "Покажите реку: Яна",
    "geometryType": "polyline",
    "lat": 69.0,
    "lng": 134.0,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        67.5,
        133.5
      ],
      [
        69.5,
        134.5
      ],
      [
        71.5,
        136.0
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "eurasia",
    "lengthKm": 872,
    "sourceMouth": "Слияние Сартанга и Дулгалаха (Верхоянский хр.) ➔ Янский залив (море Лаптевых)",
    "tributaries": [],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Яна",
      "backMainAnswer": "Евразия • Слияние Сартанга и Дулгалаха (Верхоянский хр.) ➔ Янский залив (море Лаптевых)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Слияние Сартанга и Дулгалаха (Верхоянский хр.) ➔ Янский залив (море Лаптевых)"
        },
        {
          "label": "Длина",
          "value": "872 км"
        },
        {
          "label": "Главные притоки",
          "value": "—"
        }
      ],
      "backNote": "Река Яна: Слияние Сартанга и Дулгалаха (Верхоянский хр.) ➔ Янский залив (море Лаптевых)."
    }
  },
  {
    "id": "m4_riv_yangtze",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_eurasia",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Янцзы (Голубая река)",
    "aliases": [
      "Чанцзян"
    ],
    "region": "Евразия",
    "locationDesc": "Евразия (Тибетское нагорье (ледник Геладандун) ➔ Восточно-Китайское море (длиннейшая в Евразии))",
    "mapPrompt": "Покажите реку: Янцзы (Голубая река)",
    "geometryType": "polyline",
    "lat": 30.5,
    "lng": 112.0,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        33.5,
        91.0
      ],
      [
        28.0,
        102.0
      ],
      [
        29.5,
        106.5
      ],
      [
        30.5,
        114.3
      ],
      [
        31.2,
        121.5
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "eurasia",
    "lengthKm": 6300,
    "sourceMouth": "Тибетское нагорье (ледник Геладандун) ➔ Восточно-Китайское море (длиннейшая в Евразии)",
    "tributaries": [
      "Миньцзян",
      "Цзялинцзян",
      "Ханьшуй",
      "Уцзян"
    ],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Янцзы (Голубая река)",
      "backMainAnswer": "Евразия • Тибетское нагорье (ледник Геладандун) ➔ Восточно-Китайское море (длиннейшая в Евразии)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Тибетское нагорье (ледник Геладандун) ➔ Восточно-Китайское море (длиннейшая в Евразии)"
        },
        {
          "label": "Длина",
          "value": "6300 км"
        },
        {
          "label": "Главные притоки",
          "value": "Миньцзян, Цзялинцзян, Ханьшуй, Уцзян"
        }
      ],
      "backNote": "Река Янцзы (Голубая река): Тибетское нагорье (ледник Геладандун) ➔ Восточно-Китайское море (длиннейшая в Евразии)."
    }
  },
  {
    "id": "m4_riv_zambezi",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_africa",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Замбези",
    "aliases": [],
    "region": "Африка",
    "locationDesc": "Африка (Плато Лунда (Замбия) ➔ Индийский океан (Мозамбикский пролив, водопад Виктория))",
    "mapPrompt": "Покажите реку: Замбези",
    "geometryType": "polyline",
    "lat": -16.0,
    "lng": 28.0,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        -11.5,
        24.3
      ],
      [
        -17.9,
        25.8
      ],
      [
        -15.6,
        29.5
      ],
      [
        -18.8,
        36.3
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "africa",
    "lengthKm": 2574,
    "sourceMouth": "Плато Лунда (Замбия) ➔ Индийский океан (Мозамбикский пролив, водопад Виктория)",
    "tributaries": [
      "Кафуэ",
      "Луангва",
      "Шире"
    ],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Замбези",
      "backMainAnswer": "Африка • Плато Лунда (Замбия) ➔ Индийский океан (Мозамбикский пролив, водопад Виктория)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Африка"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Плато Лунда (Замбия) ➔ Индийский океан (Мозамбикский пролив, водопад Виктория)"
        },
        {
          "label": "Длина",
          "value": "2574 км"
        },
        {
          "label": "Главные притоки",
          "value": "Кафуэ, Луангва, Шире"
        }
      ],
      "backNote": "Река Замбези: Плато Лунда (Замбия) ➔ Индийский океан (Мозамбикский пролив, водопад Виктория)."
    }
  },
  {
    "id": "m4_riv_congo",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_africa",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Конго (Заир)",
    "aliases": [
      "Заир"
    ],
    "region": "Африка",
    "locationDesc": "Африка (Слияние Луалабы и Луапулы ➔ Атлантический океан (самая глубокая и 2-я по водоносности))",
    "mapPrompt": "Покажите реку: Конго (Заир)",
    "geometryType": "polyline",
    "lat": 0.0,
    "lng": 22.0,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        -11.0,
        26.5
      ],
      [
        0.5,
        25.0
      ],
      [
        2.0,
        22.0
      ],
      [
        -1.0,
        17.0
      ],
      [
        -4.3,
        15.3
      ],
      [
        -6.0,
        12.4
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "africa",
    "lengthKm": 4700,
    "sourceMouth": "Слияние Луалабы и Луапулы ➔ Атлантический океан (самая глубокая и 2-я по водоносности)",
    "tributaries": [
      "Луалаба",
      "Убанги",
      "Касаи (Ква)",
      "Санга",
      "Арувими"
    ],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Конго (Заир)",
      "backMainAnswer": "Африка • Слияние Луалабы и Луапулы ➔ Атлантический океан (самая глубокая и 2-я по водоносности)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Африка"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Слияние Луалабы и Луапулы ➔ Атлантический океан (самая глубокая и 2-я по водоносности)"
        },
        {
          "label": "Длина",
          "value": "4700 км"
        },
        {
          "label": "Главные притоки",
          "value": "Луалаба, Убанги, Касаи (Ква), Санга, Арувими"
        }
      ],
      "backNote": "Река Конго (Заир): Слияние Луалабы и Луапулы ➔ Атлантический океан (самая глубокая и 2-я по водоносности)."
    }
  },
  {
    "id": "m4_riv_lualaba",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_africa",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Луалаба (исток Конго)",
    "aliases": [],
    "region": "Африка",
    "locationDesc": "Африка (Плато Катанга ➔ река Конго (до водопадов Бойома/Стэнли))",
    "mapPrompt": "Покажите реку: Луалаба (исток Конго)",
    "geometryType": "polyline",
    "lat": -5.0,
    "lng": 26.5,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        -11.5,
        26.0
      ],
      [
        -8.0,
        27.0
      ],
      [
        0.5,
        25.2
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "africa",
    "lengthKm": 1800,
    "sourceMouth": "Плато Катанга ➔ река Конго (до водопадов Бойома/Стэнли)",
    "tributaries": [],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Луалаба (исток Конго)",
      "backMainAnswer": "Африка • Плато Катанга ➔ река Конго (до водопадов Бойома/Стэнли)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Африка"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Плато Катанга ➔ река Конго (до водопадов Бойома/Стэнли)"
        },
        {
          "label": "Длина",
          "value": "1800 км"
        },
        {
          "label": "Главные притоки",
          "value": "—"
        }
      ],
      "backNote": "Река Луалаба (исток Конго): Плато Катанга ➔ река Конго (до водопадов Бойома/Стэнли)."
    }
  },
  {
    "id": "m4_riv_ubangi",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_africa",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Убанги",
    "aliases": [],
    "region": "Африка",
    "locationDesc": "Африка (Слияние Мбому и Уэле ➔ Конго (крупнейший правый приток))",
    "mapPrompt": "Покажите реку: Убанги",
    "geometryType": "polyline",
    "lat": 2.5,
    "lng": 19.0,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        4.0,
        22.5
      ],
      [
        4.4,
        18.5
      ],
      [
        -0.5,
        17.8
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "africa",
    "lengthKm": 2270,
    "sourceMouth": "Слияние Мбому и Уэле ➔ Конго (крупнейший правый приток)",
    "tributaries": [],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Убанги",
      "backMainAnswer": "Африка • Слияние Мбому и Уэле ➔ Конго (крупнейший правый приток)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Африка"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Слияние Мбому и Уэле ➔ Конго (крупнейший правый приток)"
        },
        {
          "label": "Длина",
          "value": "2270 км"
        },
        {
          "label": "Главные притоки",
          "value": "—"
        }
      ],
      "backNote": "Река Убанги: Слияние Мбому и Уэле ➔ Конго (крупнейший правый приток)."
    }
  },
  {
    "id": "m4_riv_kasai_kwa",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_africa",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Ква (Касаи)",
    "aliases": [],
    "region": "Африка",
    "locationDesc": "Африка (Плато Лунда (Ангола) ➔ Конго (крупнейший левый приток))",
    "mapPrompt": "Покажите реку: Ква (Касаи)",
    "geometryType": "polyline",
    "lat": -6.0,
    "lng": 20.0,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        -11.0,
        19.0
      ],
      [
        -5.0,
        21.0
      ],
      [
        -3.0,
        17.0
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "africa",
    "lengthKm": 2153,
    "sourceMouth": "Плато Лунда (Ангола) ➔ Конго (крупнейший левый приток)",
    "tributaries": [
      "Касаи"
    ],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Ква (Касаи)",
      "backMainAnswer": "Африка • Плато Лунда (Ангола) ➔ Конго (крупнейший левый приток)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Африка"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Плато Лунда (Ангола) ➔ Конго (крупнейший левый приток)"
        },
        {
          "label": "Длина",
          "value": "2153 км"
        },
        {
          "label": "Главные притоки",
          "value": "Касаи"
        }
      ],
      "backNote": "Река Ква (Касаи): Плато Лунда (Ангола) ➔ Конго (крупнейший левый приток)."
    }
  },
  {
    "id": "m4_riv_limpopo",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_africa",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Лимпопо (Крокодиловая)",
    "aliases": [],
    "region": "Африка",
    "locationDesc": "Африка (Хребет Витватерсранд (ЮАР) ➔ Индийский океан)",
    "mapPrompt": "Покажите реку: Лимпопо (Крокодиловая)",
    "geometryType": "polyline",
    "lat": -23.5,
    "lng": 31.0,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        -26.0,
        27.5
      ],
      [
        -22.2,
        29.5
      ],
      [
        -25.2,
        33.5
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "africa",
    "lengthKm": 1750,
    "sourceMouth": "Хребет Витватерсранд (ЮАР) ➔ Индийский океан",
    "tributaries": [
      "Улифантс",
      "Нотвани"
    ],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Лимпопо (Крокодиловая)",
      "backMainAnswer": "Африка • Хребет Витватерсранд (ЮАР) ➔ Индийский океан",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Африка"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Хребет Витватерсранд (ЮАР) ➔ Индийский океан"
        },
        {
          "label": "Длина",
          "value": "1750 км"
        },
        {
          "label": "Главные притоки",
          "value": "Улифантс, Нотвани"
        }
      ],
      "backNote": "Река Лимпопо (Крокодиловая): Хребет Витватерсранд (ЮАР) ➔ Индийский океан."
    }
  },
  {
    "id": "m4_riv_niger_river",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_africa",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Нигер",
    "aliases": [],
    "region": "Африка",
    "locationDesc": "Африка (Леоно-Либерийская возвышенность ➔ Гвинейский залив (Атлантический океан))",
    "mapPrompt": "Покажите реку: Нигер",
    "geometryType": "polyline",
    "lat": 14.0,
    "lng": 0.0,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        9.5,
        -10.5
      ],
      [
        14.0,
        -4.0
      ],
      [
        17.0,
        -3.0
      ],
      [
        13.0,
        3.0
      ],
      [
        5.0,
        6.0
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "africa",
    "lengthKm": 4180,
    "sourceMouth": "Леоно-Либерийская возвышенность ➔ Гвинейский залив (Атлантический океан)",
    "tributaries": [
      "Бенуэ"
    ],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Нигер",
      "backMainAnswer": "Африка • Леоно-Либерийская возвышенность ➔ Гвинейский залив (Атлантический океан)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Африка"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Леоно-Либерийская возвышенность ➔ Гвинейский залив (Атлантический океан)"
        },
        {
          "label": "Длина",
          "value": "4180 км"
        },
        {
          "label": "Главные притоки",
          "value": "Бенуэ"
        }
      ],
      "backNote": "Река Нигер: Леоно-Либерийская возвышенность ➔ Гвинейский залив (Атлантический океан)."
    }
  },
  {
    "id": "m4_riv_nile",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_africa",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Нил (с Кагерой)",
    "aliases": [],
    "region": "Африка",
    "locationDesc": "Африка (Восточно-Африканское плоскогорье ➔ Средиземное море (длиннейшая река Африки))",
    "mapPrompt": "Покажите реку: Нил (с Кагерой)",
    "geometryType": "polyline",
    "lat": 15.0,
    "lng": 32.5,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        -2.5,
        29.5
      ],
      [
        2.0,
        31.5
      ],
      [
        9.5,
        31.5
      ],
      [
        15.6,
        32.5
      ],
      [
        24.0,
        32.9
      ],
      [
        31.5,
        31.2
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "africa",
    "lengthKm": 6671,
    "sourceMouth": "Восточно-Африканское плоскогорье ➔ Средиземное море (длиннейшая река Африки)",
    "tributaries": [
      "Белый Нил",
      "Голубой Нил",
      "Атбара",
      "Кагера"
    ],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Нил (с Кагерой)",
      "backMainAnswer": "Африка • Восточно-Африканское плоскогорье ➔ Средиземное море (длиннейшая река Африки)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Африка"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Восточно-Африканское плоскогорье ➔ Средиземное море (длиннейшая река Африки)"
        },
        {
          "label": "Длина",
          "value": "6671 км"
        },
        {
          "label": "Главные притоки",
          "value": "Белый Нил, Голубой Нил, Атбара, Кагера"
        }
      ],
      "backNote": "Река Нил (с Кагерой): Восточно-Африканское плоскогорье ➔ Средиземное море (длиннейшая река Африки)."
    }
  },
  {
    "id": "m4_riv_bahr_el_jebel",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_africa",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Бахр-эль-Джебель (Горный Нил)",
    "aliases": [],
    "region": "Африка",
    "locationDesc": "Африка (Озеро Альберт ➔ болота Сэдд (Южный Судан))",
    "mapPrompt": "Покажите реку: Бахр-эль-Джебель (Горный Нил)",
    "geometryType": "polyline",
    "lat": 6.0,
    "lng": 31.5,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        2.5,
        31.5
      ],
      [
        5.0,
        31.5
      ],
      [
        9.5,
        31.5
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "africa",
    "lengthKm": 1000,
    "sourceMouth": "Озеро Альберт ➔ болота Сэдд (Южный Судан)",
    "tributaries": [],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Бахр-эль-Джебель (Горный Нил)",
      "backMainAnswer": "Африка • Озеро Альберт ➔ болота Сэдд (Южный Судан)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Африка"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Озеро Альберт ➔ болота Сэдд (Южный Судан)"
        },
        {
          "label": "Длина",
          "value": "1000 км"
        },
        {
          "label": "Главные притоки",
          "value": "—"
        }
      ],
      "backNote": "Река Бахр-эль-Джебель (Горный Нил): Озеро Альберт ➔ болота Сэдд (Южный Судан)."
    }
  },
  {
    "id": "m4_riv_white_nile",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_africa",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Белый Нил (Бахр-эль-Абьяд)",
    "aliases": [],
    "region": "Африка",
    "locationDesc": "Африка (Озеро Но (слияние Бахр-эль-Джебель и Бахр-эль-Газаль) ➔ Хартум)",
    "mapPrompt": "Покажите реку: Белый Нил (Бахр-эль-Абьяд)",
    "geometryType": "polyline",
    "lat": 12.0,
    "lng": 32.5,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        9.5,
        31.5
      ],
      [
        12.0,
        32.5
      ],
      [
        15.6,
        32.5
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "africa",
    "lengthKm": 957,
    "sourceMouth": "Озеро Но (слияние Бахр-эль-Джебель и Бахр-эль-Газаль) ➔ Хартум",
    "tributaries": [],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Белый Нил (Бахр-эль-Абьяд)",
      "backMainAnswer": "Африка • Озеро Но (слияние Бахр-эль-Джебель и Бахр-эль-Газаль) ➔ Хартум",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Африка"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Озеро Но (слияние Бахр-эль-Джебель и Бахр-эль-Газаль) ➔ Хартум"
        },
        {
          "label": "Длина",
          "value": "957 км"
        },
        {
          "label": "Главные притоки",
          "value": "—"
        }
      ],
      "backNote": "Река Белый Нил (Бахр-эль-Абьяд): Озеро Но (слияние Бахр-эль-Джебель и Бахр-эль-Газаль) ➔ Хартум."
    }
  },
  {
    "id": "m4_riv_blue_nile",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_africa",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Голубой Нил (Бахр-эль-Азрак)",
    "aliases": [],
    "region": "Африка",
    "locationDesc": "Африка (Озеро Тана (Эфиопское нагорье) ➔ Хартум (слияние с Белым Нилом))",
    "mapPrompt": "Покажите реку: Голубой Нил (Бахр-эль-Азрак)",
    "geometryType": "polyline",
    "lat": 13.0,
    "lng": 35.0,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        12.0,
        37.3
      ],
      [
        11.0,
        35.0
      ],
      [
        15.6,
        32.5
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "africa",
    "lengthKm": 1783,
    "sourceMouth": "Озеро Тана (Эфиопское нагорье) ➔ Хартум (слияние с Белым Нилом)",
    "tributaries": [],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Голубой Нил (Бахр-эль-Азрак)",
      "backMainAnswer": "Африка • Озеро Тана (Эфиопское нагорье) ➔ Хартум (слияние с Белым Нилом)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Африка"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Озеро Тана (Эфиопское нагорье) ➔ Хартум (слияние с Белым Нилом)"
        },
        {
          "label": "Длина",
          "value": "1783 км"
        },
        {
          "label": "Главные притоки",
          "value": "—"
        }
      ],
      "backNote": "Река Голубой Нил (Бахр-эль-Азрак): Озеро Тана (Эфиопское нагорье) ➔ Хартум (слияние с Белым Нилом)."
    }
  },
  {
    "id": "m4_riv_okavango",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_africa",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Окаванго (Кубанго)",
    "aliases": [],
    "region": "Африка",
    "locationDesc": "Африка (Плато Бие (Ангола) ➔ бессточная внутренняя дельта Окаванго (пустыня Калахари))",
    "mapPrompt": "Покажите реку: Окаванго (Кубанго)",
    "geometryType": "polyline",
    "lat": -18.0,
    "lng": 21.0,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        -12.7,
        16.0
      ],
      [
        -18.0,
        21.5
      ],
      [
        -19.5,
        23.0
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "africa",
    "lengthKm": 1600,
    "sourceMouth": "Плато Бие (Ангола) ➔ бессточная внутренняя дельта Окаванго (пустыня Калахари)",
    "tributaries": [],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Окаванго (Кубанго)",
      "backMainAnswer": "Африка • Плато Бие (Ангола) ➔ бессточная внутренняя дельта Окаванго (пустыня Калахари)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Африка"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Плато Бие (Ангола) ➔ бессточная внутренняя дельта Окаванго (пустыня Калахари)"
        },
        {
          "label": "Длина",
          "value": "1600 км"
        },
        {
          "label": "Главные притоки",
          "value": "—"
        }
      ],
      "backNote": "Река Окаванго (Кубанго): Плато Бие (Ангола) ➔ бессточная внутренняя дельта Окаванго (пустыня Калахари)."
    }
  },
  {
    "id": "m4_riv_orange_river",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_africa",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Оранжевая (Гарип)",
    "aliases": [],
    "region": "Африка",
    "locationDesc": "Африка (Драконовы горы (Лесото) ➔ Атлантический океан)",
    "mapPrompt": "Покажите реку: Оранжевая (Гарип)",
    "geometryType": "polyline",
    "lat": -29.0,
    "lng": 22.0,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        -29.0,
        29.0
      ],
      [
        -30.0,
        25.0
      ],
      [
        -28.5,
        16.5
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "africa",
    "lengthKm": 2200,
    "sourceMouth": "Драконовы горы (Лесото) ➔ Атлантический океан",
    "tributaries": [
      "Вааль"
    ],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Оранжевая (Гарип)",
      "backMainAnswer": "Африка • Драконовы горы (Лесото) ➔ Атлантический океан",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Африка"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Драконовы горы (Лесото) ➔ Атлантический океан"
        },
        {
          "label": "Длина",
          "value": "2200 км"
        },
        {
          "label": "Главные притоки",
          "value": "Вааль"
        }
      ],
      "backNote": "Река Оранжевая (Гарип): Драконовы горы (Лесото) ➔ Атлантический океан."
    }
  },
  {
    "id": "m4_riv_rufiji",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_africa",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Руфиджи",
    "aliases": [],
    "region": "Африка",
    "locationDesc": "Африка (Горы к востоку от озера Ньяса ➔ Индийский океан (Танзания))",
    "mapPrompt": "Покажите реку: Руфиджи",
    "geometryType": "polyline",
    "lat": -8.0,
    "lng": 38.0,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        -9.0,
        36.0
      ],
      [
        -8.0,
        38.0
      ],
      [
        -7.8,
        39.3
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "africa",
    "lengthKm": 600,
    "sourceMouth": "Горы к востоку от озера Ньяса ➔ Индийский океан (Танзания)",
    "tributaries": [],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Руфиджи",
      "backMainAnswer": "Африка • Горы к востоку от озера Ньяса ➔ Индийский океан (Танзания)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Африка"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Горы к востоку от озера Ньяса ➔ Индийский океан (Танзания)"
        },
        {
          "label": "Длина",
          "value": "600 км"
        },
        {
          "label": "Главные притоки",
          "value": "—"
        }
      ],
      "backNote": "Река Руфиджи: Горы к востоку от озера Ньяса ➔ Индийский океан (Танзания)."
    }
  },
  {
    "id": "m4_riv_senegal_river",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_africa",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Сенегал",
    "aliases": [],
    "region": "Африка",
    "locationDesc": "Африка (Плато Фута-Джаллон (слияние Бафинга и Бакоя) ➔ Атлантический океан)",
    "mapPrompt": "Покажите реку: Сенегал",
    "geometryType": "polyline",
    "lat": 15.5,
    "lng": -13.0,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        13.8,
        -10.8
      ],
      [
        15.0,
        -12.5
      ],
      [
        16.5,
        -15.0
      ],
      [
        16.0,
        -16.5
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "africa",
    "lengthKm": 1086,
    "sourceMouth": "Плато Фута-Джаллон (слияние Бафинга и Бакоя) ➔ Атлантический океан",
    "tributaries": [],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Сенегал",
      "backMainAnswer": "Африка • Плато Фута-Джаллон (слияние Бафинга и Бакоя) ➔ Атлантический океан",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Африка"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Плато Фута-Джаллон (слияние Бафинга и Бакоя) ➔ Атлантический океан"
        },
        {
          "label": "Длина",
          "value": "1086 км"
        },
        {
          "label": "Главные притоки",
          "value": "—"
        }
      ],
      "backNote": "Река Сенегал: Плато Фута-Джаллон (слияние Бафинга и Бакоя) ➔ Атлантический океан."
    }
  },
  {
    "id": "m4_riv_chari_river",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_africa",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Шари",
    "aliases": [],
    "region": "Африка",
    "locationDesc": "Африка (Центральноафриканское плато ➔ озеро Чад (главный приток))",
    "mapPrompt": "Покажите реку: Шари",
    "geometryType": "polyline",
    "lat": 10.5,
    "lng": 17.0,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        8.0,
        19.0
      ],
      [
        10.0,
        17.5
      ],
      [
        12.8,
        14.5
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "africa",
    "lengthKm": 1400,
    "sourceMouth": "Центральноафриканское плато ➔ озеро Чад (главный приток)",
    "tributaries": [
      "Логон"
    ],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Шари",
      "backMainAnswer": "Африка • Центральноафриканское плато ➔ озеро Чад (главный приток)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Африка"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Центральноафриканское плато ➔ озеро Чад (главный приток)"
        },
        {
          "label": "Длина",
          "value": "1400 км"
        },
        {
          "label": "Главные притоки",
          "value": "Логон"
        }
      ],
      "backNote": "Река Шари: Центральноафриканское плато ➔ озеро Чад (главный приток)."
    }
  },
  {
    "id": "m4_riv_hudson_na",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_north_america",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Гудзон",
    "aliases": [],
    "region": "Северная Америка",
    "locationDesc": "Северная Америка (Горы Адирондак ➔ Атлантический океан (Нью-Йорк))",
    "mapPrompt": "Покажите реку: Гудзон",
    "geometryType": "polyline",
    "lat": 42.0,
    "lng": -73.8,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        44.0,
        -74.0
      ],
      [
        42.5,
        -73.7
      ],
      [
        40.7,
        -74.0
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "north_america",
    "lengthKm": 507,
    "sourceMouth": "Горы Адирондак ➔ Атлантический океан (Нью-Йорк)",
    "tributaries": [
      "Мохок"
    ],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Гудзон",
      "backMainAnswer": "Северная Америка • Горы Адирондак ➔ Атлантический океан (Нью-Йорк)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Северная Америка"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Горы Адирондак ➔ Атлантический океан (Нью-Йорк)"
        },
        {
          "label": "Длина",
          "value": "507 км"
        },
        {
          "label": "Главные притоки",
          "value": "Мохок"
        }
      ],
      "backNote": "Река Гудзон: Горы Адирондак ➔ Атлантический океан (Нью-Йорк)."
    }
  },
  {
    "id": "m4_riv_colorado_river",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_north_america",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Колорадо (река Гранд-Каньона)",
    "aliases": [],
    "region": "Северная Америка",
    "locationDesc": "Северная Америка (Скалистые горы (Колорадо) ➔ Калифорнийский залив (Тихий океан))",
    "mapPrompt": "Покажите реку: Колорадо (река Гранд-Каньона)",
    "geometryType": "polyline",
    "lat": 36.0,
    "lng": -112.0,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        40.2,
        -105.8
      ],
      [
        36.0,
        -112.5
      ],
      [
        32.0,
        -114.8
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "north_america",
    "lengthKm": 2330,
    "sourceMouth": "Скалистые горы (Колорадо) ➔ Калифорнийский залив (Тихий океан)",
    "tributaries": [
      "Грин-Ривер",
      "Хила"
    ],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Колорадо (река Гранд-Каньона)",
      "backMainAnswer": "Северная Америка • Скалистые горы (Колорадо) ➔ Калифорнийский залив (Тихий океан)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Северная Америка"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Скалистые горы (Колорадо) ➔ Калифорнийский залив (Тихий океан)"
        },
        {
          "label": "Длина",
          "value": "2330 км"
        },
        {
          "label": "Главные притоки",
          "value": "Грин-Ривер, Хила"
        }
      ],
      "backNote": "Река Колорадо (река Гранд-Каньона): Скалистые горы (Колорадо) ➔ Калифорнийский залив (Тихий океан)."
    }
  },
  {
    "id": "m4_riv_colorado_texas",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_north_america",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Колорадо (Техас)",
    "aliases": [],
    "region": "Северная Америка",
    "locationDesc": "Северная Америка (Плато Ллано-Эстакадо ➔ Мексиканский залив)",
    "mapPrompt": "Покажите реку: Колорадо (Техас)",
    "geometryType": "polyline",
    "lat": 31.0,
    "lng": -98.5,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        32.5,
        -102.0
      ],
      [
        30.3,
        -97.7
      ],
      [
        28.6,
        -95.9
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "north_america",
    "lengthKm": 1387,
    "sourceMouth": "Плато Ллано-Эстакадо ➔ Мексиканский залив",
    "tributaries": [],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Колорадо (Техас)",
      "backMainAnswer": "Северная Америка • Плато Ллано-Эстакадо ➔ Мексиканский залив",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Северная Америка"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Плато Ллано-Эстакадо ➔ Мексиканский залив"
        },
        {
          "label": "Длина",
          "value": "1387 км"
        },
        {
          "label": "Главные притоки",
          "value": "—"
        }
      ],
      "backNote": "Река Колорадо (Техас): Плато Ллано-Эстакадо ➔ Мексиканский залив."
    }
  },
  {
    "id": "m4_riv_columbia_river",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_north_america",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Колумбия",
    "aliases": [],
    "region": "Северная Америка",
    "locationDesc": "Северная Америка (Скалистые горы (Канада) ➔ Тихий океан (штаты Вашингтон/Орегон))",
    "mapPrompt": "Покажите реку: Колумбия",
    "geometryType": "polyline",
    "lat": 47.0,
    "lng": -120.0,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        50.2,
        -115.8
      ],
      [
        48.0,
        -119.0
      ],
      [
        46.2,
        -124.0
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "north_america",
    "lengthKm": 2000,
    "sourceMouth": "Скалистые горы (Канада) ➔ Тихий океан (штаты Вашингтон/Орегон)",
    "tributaries": [
      "Снейк",
      "Кутеней",
      "Пенд-Орей"
    ],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Колумбия",
      "backMainAnswer": "Северная Америка • Скалистые горы (Канада) ➔ Тихий океан (штаты Вашингтон/Орегон)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Северная Америка"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Скалистые горы (Канада) ➔ Тихий океан (штаты Вашингтон/Орегон)"
        },
        {
          "label": "Длина",
          "value": "2000 км"
        },
        {
          "label": "Главные притоки",
          "value": "Снейк, Кутеней, Пенд-Орей"
        }
      ],
      "backNote": "Река Колумбия: Скалистые горы (Канада) ➔ Тихий океан (штаты Вашингтон/Орегон)."
    }
  },
  {
    "id": "m4_riv_mackenzie_river",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_north_america",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Маккензи",
    "aliases": [],
    "region": "Северная Америка",
    "locationDesc": "Северная Америка (Большое Невольничье озеро ➔ море Бофорта (Северный Ледовитый океан))",
    "mapPrompt": "Покажите реку: Маккензи",
    "geometryType": "polyline",
    "lat": 65.0,
    "lng": -125.0,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        61.3,
        -117.5
      ],
      [
        65.3,
        -126.8
      ],
      [
        69.0,
        -134.0
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "north_america",
    "lengthKm": 1738,
    "sourceMouth": "Большое Невольничье озеро ➔ море Бофорта (Северный Ледовитый океан)",
    "tributaries": [
      "Лиард",
      "Пис-Ривер",
      "Атабаска"
    ],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Маккензи",
      "backMainAnswer": "Северная Америка • Большое Невольничье озеро ➔ море Бофорта (Северный Ледовитый океан)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Северная Америка"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Большое Невольничье озеро ➔ море Бофорта (Северный Ледовитый океан)"
        },
        {
          "label": "Длина",
          "value": "1738 км"
        },
        {
          "label": "Главные притоки",
          "value": "Лиард, Пис-Ривер, Атабаска"
        }
      ],
      "backNote": "Река Маккензи: Большое Невольничье озеро ➔ море Бофорта (Северный Ледовитый океан)."
    }
  },
  {
    "id": "m4_riv_athabasca_river",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_north_america",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Атабаска",
    "aliases": [],
    "region": "Северная Америка",
    "locationDesc": "Северная Америка (Колумбийское ледниковое поле (Скалистые горы) ➔ озеро Атабаска)",
    "mapPrompt": "Покажите реку: Атабаска",
    "geometryType": "polyline",
    "lat": 55.0,
    "lng": -114.0,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        52.2,
        -117.4
      ],
      [
        54.7,
        -113.3
      ],
      [
        58.7,
        -111.0
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "north_america",
    "lengthKm": 1231,
    "sourceMouth": "Колумбийское ледниковое поле (Скалистые горы) ➔ озеро Атабаска",
    "tributaries": [],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Атабаска",
      "backMainAnswer": "Северная Америка • Колумбийское ледниковое поле (Скалистые горы) ➔ озеро Атабаска",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Северная Америка"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Колумбийское ледниковое поле (Скалистые горы) ➔ озеро Атабаска"
        },
        {
          "label": "Длина",
          "value": "1231 км"
        },
        {
          "label": "Главные притоки",
          "value": "—"
        }
      ],
      "backNote": "Река Атабаска: Колумбийское ледниковое поле (Скалистые горы) ➔ озеро Атабаска."
    }
  },
  {
    "id": "m4_riv_slave_river",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_north_america",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Невольничья",
    "aliases": [],
    "region": "Северная Америка",
    "locationDesc": "Северная Америка (Озеро Атабаска ➔ Большое Невольничье озеро)",
    "mapPrompt": "Покажите реку: Невольничья",
    "geometryType": "polyline",
    "lat": 60.0,
    "lng": -112.5,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        58.8,
        -111.2
      ],
      [
        61.3,
        -113.7
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "north_america",
    "lengthKm": 434,
    "sourceMouth": "Озеро Атабаска ➔ Большое Невольничье озеро",
    "tributaries": [
      "Пис-Ривер"
    ],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Невольничья",
      "backMainAnswer": "Северная Америка • Озеро Атабаска ➔ Большое Невольничье озеро",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Северная Америка"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Озеро Атабаска ➔ Большое Невольничье озеро"
        },
        {
          "label": "Длина",
          "value": "434 км"
        },
        {
          "label": "Главные притоки",
          "value": "Пис-Ривер"
        }
      ],
      "backNote": "Река Невольничья: Озеро Атабаска ➔ Большое Невольничье озеро."
    }
  },
  {
    "id": "m4_riv_peace_river",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_north_america",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Пис-Ривер",
    "aliases": [],
    "region": "Северная Америка",
    "locationDesc": "Северная Америка (Скалистые горы (Британская Колумбия) ➔ река Невольничья)",
    "mapPrompt": "Покажите реку: Пис-Ривер",
    "geometryType": "polyline",
    "lat": 57.0,
    "lng": -116.0,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        56.0,
        -124.0
      ],
      [
        56.2,
        -117.5
      ],
      [
        59.0,
        -111.5
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "north_america",
    "lengthKm": 1923,
    "sourceMouth": "Скалистые горы (Британская Колумбия) ➔ река Невольничья",
    "tributaries": [],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Пис-Ривер",
      "backMainAnswer": "Северная Америка • Скалистые горы (Британская Колумбия) ➔ река Невольничья",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Северная Америка"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Скалистые горы (Британская Колумбия) ➔ река Невольничья"
        },
        {
          "label": "Длина",
          "value": "1923 км"
        },
        {
          "label": "Главные притоки",
          "value": "—"
        }
      ],
      "backNote": "Река Пис-Ривер: Скалистые горы (Британская Колумбия) ➔ река Невольничья."
    }
  },
  {
    "id": "m4_riv_mississippi",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_north_america",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Миссисипи",
    "aliases": [],
    "region": "Северная Америка",
    "locationDesc": "Северная Америка (Озеро Айтаска (Миннесота) ➔ Мексиканский залив (главная река США))",
    "mapPrompt": "Покажите реку: Миссисипи",
    "geometryType": "polyline",
    "lat": 37.0,
    "lng": -90.0,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        47.2,
        -95.2
      ],
      [
        41.5,
        -90.5
      ],
      [
        37.0,
        -89.1
      ],
      [
        33.5,
        -91.0
      ],
      [
        29.2,
        -89.2
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "north_america",
    "lengthKm": 3734,
    "sourceMouth": "Озеро Айтаска (Миннесота) ➔ Мексиканский залив (главная река США)",
    "tributaries": [
      "Миссури",
      "Огайо",
      "Арканзас",
      "Ред-Ривер"
    ],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Миссисипи",
      "backMainAnswer": "Северная Америка • Озеро Айтаска (Миннесота) ➔ Мексиканский залив (главная река США)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Северная Америка"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Озеро Айтаска (Миннесота) ➔ Мексиканский залив (главная река США)"
        },
        {
          "label": "Длина",
          "value": "3734 км"
        },
        {
          "label": "Главные притоки",
          "value": "Миссури, Огайо, Арканзас, Ред-Ривер"
        }
      ],
      "backNote": "Река Миссисипи: Озеро Айтаска (Миннесота) ➔ Мексиканский залив (главная река США)."
    }
  },
  {
    "id": "m4_riv_arkansas_river",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_north_america",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Арканзас",
    "aliases": [],
    "region": "Северная Америка",
    "locationDesc": "Северная Америка (Скалистые горы (Колорадо) ➔ Миссисипи)",
    "mapPrompt": "Покажите реку: Арканзас",
    "geometryType": "polyline",
    "lat": 37.0,
    "lng": -97.0,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        39.3,
        -106.3
      ],
      [
        37.7,
        -97.3
      ],
      [
        33.8,
        -91.1
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "north_america",
    "lengthKm": 2364,
    "sourceMouth": "Скалистые горы (Колорадо) ➔ Миссисипи",
    "tributaries": [],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Арканзас",
      "backMainAnswer": "Северная Америка • Скалистые горы (Колорадо) ➔ Миссисипи",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Северная Америка"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Скалистые горы (Колорадо) ➔ Миссисипи"
        },
        {
          "label": "Длина",
          "value": "2364 км"
        },
        {
          "label": "Главные притоки",
          "value": "—"
        }
      ],
      "backNote": "Река Арканзас: Скалистые горы (Колорадо) ➔ Миссисипи."
    }
  },
  {
    "id": "m4_riv_missouri",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_north_america",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Миссури",
    "aliases": [],
    "region": "Северная Америка",
    "locationDesc": "Северная Америка (Скалистые горы (слияние Джефферсон, Мадисон, Галлатин) ➔ Миссисипи (длиннейший приток))",
    "mapPrompt": "Покажите реку: Миссури",
    "geometryType": "polyline",
    "lat": 44.0,
    "lng": -100.0,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        45.9,
        -111.5
      ],
      [
        47.5,
        -101.0
      ],
      [
        42.0,
        -96.0
      ],
      [
        38.8,
        -90.1
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "north_america",
    "lengthKm": 3767,
    "sourceMouth": "Скалистые горы (слияние Джефферсон, Мадисон, Галлатин) ➔ Миссисипи (длиннейший приток)",
    "tributaries": [
      "Йеллоустон",
      "Платт",
      "Канзас"
    ],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Миссури",
      "backMainAnswer": "Северная Америка • Скалистые горы (слияние Джефферсон, Мадисон, Галлатин) ➔ Миссисипи (длиннейший приток)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Северная Америка"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Скалистые горы (слияние Джефферсон, Мадисон, Галлатин) ➔ Миссисипи (длиннейший приток)"
        },
        {
          "label": "Длина",
          "value": "3767 км"
        },
        {
          "label": "Главные притоки",
          "value": "Йеллоустон, Платт, Канзас"
        }
      ],
      "backNote": "Река Миссури: Скалистые горы (слияние Джефферсон, Мадисон, Галлатин) ➔ Миссисипи (длиннейший приток)."
    }
  },
  {
    "id": "m4_riv_ohio_river",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_north_america",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Огайо",
    "aliases": [],
    "region": "Северная Америка",
    "locationDesc": "Северная Америка (Слияние Аллегейни и Мононгахила (Питтсбург) ➔ Миссисипи (самый полноводный приток))",
    "mapPrompt": "Покажите реку: Огайо",
    "geometryType": "polyline",
    "lat": 38.5,
    "lng": -85.0,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        40.4,
        -80.0
      ],
      [
        38.5,
        -83.0
      ],
      [
        37.0,
        -89.1
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "north_america",
    "lengthKm": 1579,
    "sourceMouth": "Слияние Аллегейни и Мононгахила (Питтсбург) ➔ Миссисипи (самый полноводный приток)",
    "tributaries": [
      "Теннесси",
      "Камберленд",
      "Уобаш"
    ],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Огайо",
      "backMainAnswer": "Северная Америка • Слияние Аллегейни и Мононгахила (Питтсбург) ➔ Миссисипи (самый полноводный приток)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Северная Америка"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Слияние Аллегейни и Мононгахила (Питтсбург) ➔ Миссисипи (самый полноводный приток)"
        },
        {
          "label": "Длина",
          "value": "1579 км"
        },
        {
          "label": "Главные притоки",
          "value": "Теннесси, Камберленд, Уобаш"
        }
      ],
      "backNote": "Река Огайо: Слияние Аллегейни и Мононгахила (Питтсбург) ➔ Миссисипи (самый полноводный приток)."
    }
  },
  {
    "id": "m4_riv_nelson_river",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_north_america",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Нельсон (с Саскачеваном)",
    "aliases": [],
    "region": "Северная Америка",
    "locationDesc": "Северная Америка (Озеро Виннипег ➔ Гудзонов залив)",
    "mapPrompt": "Покажите реку: Нельсон (с Саскачеваном)",
    "geometryType": "polyline",
    "lat": 55.5,
    "lng": -96.0,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        53.0,
        -98.0
      ],
      [
        56.0,
        -94.0
      ],
      [
        57.0,
        -92.5
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "north_america",
    "lengthKm": 2570,
    "sourceMouth": "Озеро Виннипег ➔ Гудзонов залив",
    "tributaries": [
      "Саскачеван",
      "Ред-Ривер"
    ],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Нельсон (с Саскачеваном)",
      "backMainAnswer": "Северная Америка • Озеро Виннипег ➔ Гудзонов залив",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Северная Америка"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Озеро Виннипег ➔ Гудзонов залив"
        },
        {
          "label": "Длина",
          "value": "2570 км"
        },
        {
          "label": "Главные притоки",
          "value": "Саскачеван, Ред-Ривер"
        }
      ],
      "backNote": "Река Нельсон (с Саскачеваном): Озеро Виннипег ➔ Гудзонов залив."
    }
  },
  {
    "id": "m4_riv_niagara_river",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_north_america",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Ниагара",
    "aliases": [],
    "region": "Северная Америка",
    "locationDesc": "Северная Америка (Озеро Эри ➔ озеро Онтарио (Ниагарский водопад, граница США и Канады))",
    "mapPrompt": "Покажите реку: Ниагара",
    "geometryType": "polyline",
    "lat": 43.1,
    "lng": -79.0,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        42.9,
        -78.9
      ],
      [
        43.1,
        -79.0
      ],
      [
        43.3,
        -79.0
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "north_america",
    "lengthKm": 56,
    "sourceMouth": "Озеро Эри ➔ озеро Онтарио (Ниагарский водопад, граница США и Канады)",
    "tributaries": [],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Ниагара",
      "backMainAnswer": "Северная Америка • Озеро Эри ➔ озеро Онтарио (Ниагарский водопад, граница США и Канады)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Северная Америка"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Озеро Эри ➔ озеро Онтарио (Ниагарский водопад, граница США и Канады)"
        },
        {
          "label": "Длина",
          "value": "56 км"
        },
        {
          "label": "Главные притоки",
          "value": "—"
        }
      ],
      "backNote": "Река Ниагара: Озеро Эри ➔ озеро Онтарио (Ниагарский водопад, граница США и Канады)."
    }
  },
  {
    "id": "m4_riv_rio_grande",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_north_america",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Рио-Гранде (Рио-Браво-дель-Норте)",
    "aliases": [],
    "region": "Северная Америка",
    "locationDesc": "Северная Америка (Горы Сан-Хуан (Колорадо) ➔ Мексиканский залив (граница США и Мексики))",
    "mapPrompt": "Покажите реку: Рио-Гранде (Рио-Браво-дель-Норте)",
    "geometryType": "polyline",
    "lat": 30.0,
    "lng": -103.0,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        37.8,
        -107.0
      ],
      [
        32.0,
        -106.5
      ],
      [
        29.0,
        -103.5
      ],
      [
        26.0,
        -97.1
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "north_america",
    "lengthKm": 3051,
    "sourceMouth": "Горы Сан-Хуан (Колорадо) ➔ Мексиканский залив (граница США и Мексики)",
    "tributaries": [],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Рио-Гранде (Рио-Браво-дель-Норте)",
      "backMainAnswer": "Северная Америка • Горы Сан-Хуан (Колорадо) ➔ Мексиканский залив (граница США и Мексики)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Северная Америка"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Горы Сан-Хуан (Колорадо) ➔ Мексиканский залив (граница США и Мексики)"
        },
        {
          "label": "Длина",
          "value": "3051 км"
        },
        {
          "label": "Главные притоки",
          "value": "—"
        }
      ],
      "backNote": "Река Рио-Гранде (Рио-Браво-дель-Норте): Горы Сан-Хуан (Колорадо) ➔ Мексиканский залив (граница США и Мексики)."
    }
  },
  {
    "id": "m4_riv_sacramento_river",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_north_america",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Сакраменто",
    "aliases": [],
    "region": "Северная Америка",
    "locationDesc": "Северная Америка (Хребет Кламат (гора Шаста) ➔ залив Сан-Франциско (Калифорния))",
    "mapPrompt": "Покажите реку: Сакраменто",
    "geometryType": "polyline",
    "lat": 39.5,
    "lng": -121.8,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        41.3,
        -122.3
      ],
      [
        38.5,
        -121.5
      ],
      [
        38.1,
        -121.8
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "north_america",
    "lengthKm": 640,
    "sourceMouth": "Хребет Кламат (гора Шаста) ➔ залив Сан-Франциско (Калифорния)",
    "tributaries": [
      "Сан-Хоакин"
    ],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Сакраменто",
      "backMainAnswer": "Северная Америка • Хребет Кламат (гора Шаста) ➔ залив Сан-Франциско (Калифорния)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Северная Америка"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Хребет Кламат (гора Шаста) ➔ залив Сан-Франциско (Калифорния)"
        },
        {
          "label": "Длина",
          "value": "640 км"
        },
        {
          "label": "Главные притоки",
          "value": "Сан-Хоакин"
        }
      ],
      "backNote": "Река Сакраменто: Хребет Кламат (гора Шаста) ➔ залив Сан-Франциско (Калифорния)."
    }
  },
  {
    "id": "m4_riv_st_lawrence_river",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_north_america",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Святого Лаврентия",
    "aliases": [],
    "region": "Северная Америка",
    "locationDesc": "Северная Америка (Озеро Онтарио ➔ залив Святого Лаврентия (Атлантический океан))",
    "mapPrompt": "Покажите реку: Святого Лаврентия",
    "geometryType": "polyline",
    "lat": 46.5,
    "lng": -72.0,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        44.2,
        -76.4
      ],
      [
        45.5,
        -73.5
      ],
      [
        47.0,
        -70.5
      ],
      [
        49.5,
        -67.0
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "north_america",
    "lengthKm": 1197,
    "sourceMouth": "Озеро Онтарио ➔ залив Святого Лаврентия (Атлантический океан)",
    "tributaries": [
      "Оттава",
      "Сагеней"
    ],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Святого Лаврентия",
      "backMainAnswer": "Северная Америка • Озеро Онтарио ➔ залив Святого Лаврентия (Атлантический океан)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Северная Америка"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Озеро Онтарио ➔ залив Святого Лаврентия (Атлантический океан)"
        },
        {
          "label": "Длина",
          "value": "1197 км"
        },
        {
          "label": "Главные притоки",
          "value": "Оттава, Сагеней"
        }
      ],
      "backNote": "Река Святого Лаврентия: Озеро Онтарио ➔ залив Святого Лаврентия (Атлантический океан)."
    }
  },
  {
    "id": "m4_riv_fraser_river",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_north_america",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Фрейзер",
    "aliases": [],
    "region": "Северная Америка",
    "locationDesc": "Северная Америка (Скалистые горы (гора Робсон) ➔ пролив Джорджия (Тихий океан, Ванкувер))",
    "mapPrompt": "Покажите реку: Фрейзер",
    "geometryType": "polyline",
    "lat": 51.5,
    "lng": -122.0,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        53.0,
        -119.2
      ],
      [
        54.0,
        -122.7
      ],
      [
        50.0,
        -121.5
      ],
      [
        49.2,
        -123.2
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "north_america",
    "lengthKm": 1375,
    "sourceMouth": "Скалистые горы (гора Робсон) ➔ пролив Джорджия (Тихий океан, Ванкувер)",
    "tributaries": [
      "Томпсон"
    ],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Фрейзер",
      "backMainAnswer": "Северная Америка • Скалистые горы (гора Робсон) ➔ пролив Джорджия (Тихий океан, Ванкувер)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Северная Америка"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Скалистые горы (гора Робсон) ➔ пролив Джорджия (Тихий океан, Ванкувер)"
        },
        {
          "label": "Длина",
          "value": "1375 км"
        },
        {
          "label": "Главные притоки",
          "value": "Томпсон"
        }
      ],
      "backNote": "Река Фрейзер: Скалистые горы (гора Робсон) ➔ пролив Джорджия (Тихий океан, Ванкувер)."
    }
  },
  {
    "id": "m4_riv_yukon_river",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_north_america",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Юкон",
    "aliases": [],
    "region": "Северная Америка",
    "locationDesc": "Северная Америка (Береговой хребет (Канада) ➔ Берингово море (Аляска, США))",
    "mapPrompt": "Покажите реку: Юкон",
    "geometryType": "polyline",
    "lat": 64.0,
    "lng": -145.0,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        60.0,
        -134.5
      ],
      [
        64.0,
        -139.5
      ],
      [
        66.0,
        -145.0
      ],
      [
        62.5,
        -164.0
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "north_america",
    "lengthKm": 3185,
    "sourceMouth": "Береговой хребет (Канада) ➔ Берингово море (Аляска, США)",
    "tributaries": [
      "Танана",
      "Пелли",
      "Поркьюпайн"
    ],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Юкон",
      "backMainAnswer": "Северная Америка • Береговой хребет (Канада) ➔ Берингово море (Аляска, США)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Северная Америка"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Береговой хребет (Канада) ➔ Берингово море (Аляска, США)"
        },
        {
          "label": "Длина",
          "value": "3185 км"
        },
        {
          "label": "Главные притоки",
          "value": "Танана, Пелли, Поркьюпайн"
        }
      ],
      "backNote": "Река Юкон: Береговой хребет (Канада) ➔ Берингово море (Аляска, США)."
    }
  },
  {
    "id": "m4_riv_amazon",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_south_america",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Амазонка (Мараньон и Укаяли)",
    "aliases": [],
    "region": "Южная Америка",
    "locationDesc": "Южная Америка (Анды (Перу) ➔ Атлантический океан (длиннейшая и самая полноводная река мира))",
    "mapPrompt": "Покажите реку: Амазонка (Мараньон и Укаяли)",
    "geometryType": "polyline",
    "lat": -2.5,
    "lng": -58.0,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        -4.5,
        -73.5
      ],
      [
        -3.1,
        -60.0
      ],
      [
        -2.0,
        -54.0
      ],
      [
        -0.1,
        -49.5
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "south_america",
    "lengthKm": 7194,
    "sourceMouth": "Анды (Перу) ➔ Атлантический океан (длиннейшая и самая полноводная река мира)",
    "tributaries": [
      "Мараньон",
      "Укаяли",
      "Жапура",
      "Риу-Негру",
      "Тромбетас",
      "Журуа",
      "Пурус",
      "Мадейра",
      "Тапажос",
      "Шингу",
      "Токантинс"
    ],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Амазонка (Мараньон и Укаяли)",
      "backMainAnswer": "Южная Америка • Анды (Перу) ➔ Атлантический океан (длиннейшая и самая полноводная река мира)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Южная Америка"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Анды (Перу) ➔ Атлантический океан (длиннейшая и самая полноводная река мира)"
        },
        {
          "label": "Длина",
          "value": "7194 км"
        },
        {
          "label": "Главные притоки",
          "value": "Мараньон, Укаяли, Жапура, Риу-Негру, Тромбетас, Журуа, Пурус, Мадейра, Тапажос, Шингу, Токантинс"
        }
      ],
      "backNote": "Река Амазонка (Мараньон и Укаяли): Анды (Перу) ➔ Атлантический океан (длиннейшая и самая полноводная река мира)."
    }
  },
  {
    "id": "m4_riv_maranon",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_south_america",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Мараньон",
    "aliases": [],
    "region": "Южная Америка",
    "locationDesc": "Южная Америка (Западные Кордильеры Перу ➔ исток Амазонки (слияние с Укаяли))",
    "mapPrompt": "Покажите реку: Мараньон",
    "geometryType": "polyline",
    "lat": -6.5,
    "lng": -76.5,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        -10.5,
        -76.8
      ],
      [
        -5.0,
        -78.0
      ],
      [
        -4.5,
        -73.5
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "south_america",
    "lengthKm": 1737,
    "sourceMouth": "Западные Кордильеры Перу ➔ исток Амазонки (слияние с Укаяли)",
    "tributaries": [],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Мараньон",
      "backMainAnswer": "Южная Америка • Западные Кордильеры Перу ➔ исток Амазонки (слияние с Укаяли)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Южная Америка"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Западные Кордильеры Перу ➔ исток Амазонки (слияние с Укаяли)"
        },
        {
          "label": "Длина",
          "value": "1737 км"
        },
        {
          "label": "Главные притоки",
          "value": "—"
        }
      ],
      "backNote": "Река Мараньон: Западные Кордильеры Перу ➔ исток Амазонки (слияние с Укаяли)."
    }
  },
  {
    "id": "m4_riv_ucayali",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_south_america",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Укаяли",
    "aliases": [],
    "region": "Южная Америка",
    "locationDesc": "Южная Америка (Анды Перу (слияние Тамбо и Урубамбы) ➔ исток Амазонки)",
    "mapPrompt": "Покажите реку: Укаяли",
    "geometryType": "polyline",
    "lat": -8.0,
    "lng": -74.5,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        -11.3,
        -74.2
      ],
      [
        -8.0,
        -74.5
      ],
      [
        -4.5,
        -73.5
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "south_america",
    "lengthKm": 1771,
    "sourceMouth": "Анды Перу (слияние Тамбо и Урубамбы) ➔ исток Амазонки",
    "tributaries": [],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Укаяли",
      "backMainAnswer": "Южная Америка • Анды Перу (слияние Тамбо и Урубамбы) ➔ исток Амазонки",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Южная Америка"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Анды Перу (слияние Тамбо и Урубамбы) ➔ исток Амазонки"
        },
        {
          "label": "Длина",
          "value": "1771 км"
        },
        {
          "label": "Главные притоки",
          "value": "—"
        }
      ],
      "backNote": "Река Укаяли: Анды Перу (слияние Тамбо и Урубамбы) ➔ исток Амазонки."
    }
  },
  {
    "id": "m4_riv_japura",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_south_america",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Жапура (Какета)",
    "aliases": [],
    "region": "Южная Америка",
    "locationDesc": "Южная Америка (Центральная Кордильера Колумбии ➔ Амазонка (левый приток))",
    "mapPrompt": "Покажите реку: Жапура (Какета)",
    "geometryType": "polyline",
    "lat": -1.0,
    "lng": -70.0,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        1.8,
        -76.5
      ],
      [
        0.0,
        -72.0
      ],
      [
        -2.0,
        -66.0
      ],
      [
        -3.1,
        -64.8
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "south_america",
    "lengthKm": 2820,
    "sourceMouth": "Центральная Кордильера Колумбии ➔ Амазонка (левый приток)",
    "tributaries": [],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Жапура (Какета)",
      "backMainAnswer": "Южная Америка • Центральная Кордильера Колумбии ➔ Амазонка (левый приток)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Южная Америка"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Центральная Кордильера Колумбии ➔ Амазонка (левый приток)"
        },
        {
          "label": "Длина",
          "value": "2820 км"
        },
        {
          "label": "Главные притоки",
          "value": "—"
        }
      ],
      "backNote": "Река Жапура (Какета): Центральная Кордильера Колумбии ➔ Амазонка (левый приток)."
    }
  },
  {
    "id": "m4_riv_rio_negro_amz",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_south_america",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Риу-Негру",
    "aliases": [],
    "region": "Южная Америка",
    "locationDesc": "Южная Америка (Водораздел Ориноко и Амазонки (Касикъяре) ➔ Амазонка (Манаус, чёрные воды))",
    "mapPrompt": "Покажите реку: Риу-Негру",
    "geometryType": "polyline",
    "lat": 0.0,
    "lng": -63.0,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        2.0,
        -67.0
      ],
      [
        0.0,
        -64.0
      ],
      [
        -3.1,
        -60.0
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "south_america",
    "lengthKm": 2250,
    "sourceMouth": "Водораздел Ориноко и Амазонки (Касикъяре) ➔ Амазонка (Манаус, чёрные воды)",
    "tributaries": [],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Риу-Негру",
      "backMainAnswer": "Южная Америка • Водораздел Ориноко и Амазонки (Касикъяре) ➔ Амазонка (Манаус, чёрные воды)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Южная Америка"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Водораздел Ориноко и Амазонки (Касикъяре) ➔ Амазонка (Манаус, чёрные воды)"
        },
        {
          "label": "Длина",
          "value": "2250 км"
        },
        {
          "label": "Главные притоки",
          "value": "—"
        }
      ],
      "backNote": "Река Риу-Негру: Водораздел Ориноко и Амазонки (Касикъяре) ➔ Амазонка (Манаус, чёрные воды)."
    }
  },
  {
    "id": "m4_riv_trombetas",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_south_america",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Тромбетас",
    "aliases": [],
    "region": "Южная Америка",
    "locationDesc": "Южная Америка (Гвианское плоскогорье ➔ Амазонка (левый приток))",
    "mapPrompt": "Покажите реку: Тромбетас",
    "geometryType": "polyline",
    "lat": 0.0,
    "lng": -56.5,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        1.5,
        -57.0
      ],
      [
        -1.9,
        -55.5
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "south_america",
    "lengthKm": 760,
    "sourceMouth": "Гвианское плоскогорье ➔ Амазонка (левый приток)",
    "tributaries": [],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Тромбетас",
      "backMainAnswer": "Южная Америка • Гвианское плоскогорье ➔ Амазонка (левый приток)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Южная Америка"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Гвианское плоскогорье ➔ Амазонка (левый приток)"
        },
        {
          "label": "Длина",
          "value": "760 км"
        },
        {
          "label": "Главные притоки",
          "value": "—"
        }
      ],
      "backNote": "Река Тромбетас: Гвианское плоскогорье ➔ Амазонка (левый приток)."
    }
  },
  {
    "id": "m4_riv_jurua",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_south_america",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Журуа",
    "aliases": [],
    "region": "Южная Америка",
    "locationDesc": "Южная Америка (Предгорья Перуанских Анд ➔ Амазонка (правый приток))",
    "mapPrompt": "Покажите реку: Журуа",
    "geometryType": "polyline",
    "lat": -6.0,
    "lng": -69.0,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        -10.0,
        -72.5
      ],
      [
        -6.5,
        -69.5
      ],
      [
        -2.6,
        -65.7
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "south_america",
    "lengthKm": 3280,
    "sourceMouth": "Предгорья Перуанских Анд ➔ Амазонка (правый приток)",
    "tributaries": [],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Журуа",
      "backMainAnswer": "Южная Америка • Предгорья Перуанских Анд ➔ Амазонка (правый приток)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Южная Америка"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Предгорья Перуанских Анд ➔ Амазонка (правый приток)"
        },
        {
          "label": "Длина",
          "value": "3280 км"
        },
        {
          "label": "Главные притоки",
          "value": "—"
        }
      ],
      "backNote": "Река Журуа: Предгорья Перуанских Анд ➔ Амазонка (правый приток)."
    }
  },
  {
    "id": "m4_riv_purus",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_south_america",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Пурус",
    "aliases": [],
    "region": "Южная Америка",
    "locationDesc": "Южная Америка (Анды Перу ➔ Амазонка (правый приток))",
    "mapPrompt": "Покажите реку: Пурус",
    "geometryType": "polyline",
    "lat": -7.0,
    "lng": -65.0,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        -10.8,
        -71.0
      ],
      [
        -7.0,
        -65.0
      ],
      [
        -3.7,
        -61.5
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "south_america",
    "lengthKm": 3211,
    "sourceMouth": "Анды Перу ➔ Амазонка (правый приток)",
    "tributaries": [],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Пурус",
      "backMainAnswer": "Южная Америка • Анды Перу ➔ Амазонка (правый приток)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Южная Америка"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Анды Перу ➔ Амазонка (правый приток)"
        },
        {
          "label": "Длина",
          "value": "3211 км"
        },
        {
          "label": "Главные притоки",
          "value": "—"
        }
      ],
      "backNote": "Река Пурус: Анды Перу ➔ Амазонка (правый приток)."
    }
  },
  {
    "id": "m4_riv_madeira",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_south_america",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Мадейра",
    "aliases": [],
    "region": "Южная Америка",
    "locationDesc": "Южная Америка (Слияние Маморе и Бени (Боливия/Бразилия) ➔ Амазонка (крупнейший приток))",
    "mapPrompt": "Покажите реку: Мадейра",
    "geometryType": "polyline",
    "lat": -6.5,
    "lng": -61.0,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        -10.4,
        -65.3
      ],
      [
        -8.7,
        -63.9
      ],
      [
        -3.4,
        -58.8
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "south_america",
    "lengthKm": 3230,
    "sourceMouth": "Слияние Маморе и Бени (Боливия/Бразилия) ➔ Амазонка (крупнейший приток)",
    "tributaries": [],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Мадейра",
      "backMainAnswer": "Южная Америка • Слияние Маморе и Бени (Боливия/Бразилия) ➔ Амазонка (крупнейший приток)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Южная Америка"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Слияние Маморе и Бени (Боливия/Бразилия) ➔ Амазонка (крупнейший приток)"
        },
        {
          "label": "Длина",
          "value": "3230 км"
        },
        {
          "label": "Главные притоки",
          "value": "—"
        }
      ],
      "backNote": "Река Мадейра: Слияние Маморе и Бени (Боливия/Бразилия) ➔ Амазонка (крупнейший приток)."
    }
  },
  {
    "id": "m4_riv_tapajos",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_south_america",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Тапажос",
    "aliases": [],
    "region": "Южная Америка",
    "locationDesc": "Южная Америка (Плато Мату-Гросу (слияние Журуэны и Телис-Пирис) ➔ Амазонка (Сантарен))",
    "mapPrompt": "Покажите реку: Тапажос",
    "geometryType": "polyline",
    "lat": -5.0,
    "lng": -56.0,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        -7.3,
        -58.2
      ],
      [
        -4.0,
        -56.0
      ],
      [
        -2.4,
        -54.7
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "south_america",
    "lengthKm": 1930,
    "sourceMouth": "Плато Мату-Гросу (слияние Журуэны и Телис-Пирис) ➔ Амазонка (Сантарен)",
    "tributaries": [],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Тапажос",
      "backMainAnswer": "Южная Америка • Плато Мату-Гросу (слияние Журуэны и Телис-Пирис) ➔ Амазонка (Сантарен)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Южная Америка"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Плато Мату-Гросу (слияние Журуэны и Телис-Пирис) ➔ Амазонка (Сантарен)"
        },
        {
          "label": "Длина",
          "value": "1930 км"
        },
        {
          "label": "Главные притоки",
          "value": "—"
        }
      ],
      "backNote": "Река Тапажос: Плато Мату-Гросу (слияние Журуэны и Телис-Пирис) ➔ Амазонка (Сантарен)."
    }
  },
  {
    "id": "m4_riv_xingu",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_south_america",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Шингу",
    "aliases": [],
    "region": "Южная Америка",
    "locationDesc": "Южная Америка (Плато Мату-Гросу ➔ Амазонка (Алтамира, ГЭС Белу-Монти))",
    "mapPrompt": "Покажите реку: Шингу",
    "geometryType": "polyline",
    "lat": -7.0,
    "lng": -52.5,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        -12.0,
        -53.5
      ],
      [
        -7.0,
        -52.5
      ],
      [
        -1.5,
        -51.8
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "south_america",
    "lengthKm": 1980,
    "sourceMouth": "Плато Мату-Гросу ➔ Амазонка (Алтамира, ГЭС Белу-Монти)",
    "tributaries": [],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Шингу",
      "backMainAnswer": "Южная Америка • Плато Мату-Гросу ➔ Амазонка (Алтамира, ГЭС Белу-Монти)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Южная Америка"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Плато Мату-Гросу ➔ Амазонка (Алтамира, ГЭС Белу-Монти)"
        },
        {
          "label": "Длина",
          "value": "1980 км"
        },
        {
          "label": "Главные притоки",
          "value": "—"
        }
      ],
      "backNote": "Река Шингу: Плато Мату-Гросу ➔ Амазонка (Алтамира, ГЭС Белу-Монти)."
    }
  },
  {
    "id": "m4_riv_magdalena",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_south_america",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Магдалена",
    "aliases": [],
    "region": "Южная Америка",
    "locationDesc": "Южная Америка (Анды Колумбии ➔ Карибское море (главная река Колумбии))",
    "mapPrompt": "Покажите реку: Магдалена",
    "geometryType": "polyline",
    "lat": 6.5,
    "lng": -74.5,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        1.9,
        -76.5
      ],
      [
        6.0,
        -74.5
      ],
      [
        11.1,
        -74.8
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "south_america",
    "lengthKm": 1528,
    "sourceMouth": "Анды Колумбии ➔ Карибское море (главная река Колумбии)",
    "tributaries": [
      "Каука"
    ],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Магдалена",
      "backMainAnswer": "Южная Америка • Анды Колумбии ➔ Карибское море (главная река Колумбии)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Южная Америка"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Анды Колумбии ➔ Карибское море (главная река Колумбии)"
        },
        {
          "label": "Длина",
          "value": "1528 км"
        },
        {
          "label": "Главные притоки",
          "value": "Каука"
        }
      ],
      "backNote": "Река Магдалена: Анды Колумбии ➔ Карибское море (главная река Колумбии)."
    }
  },
  {
    "id": "m4_riv_tocantins",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_south_america",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Токантинс",
    "aliases": [],
    "region": "Южная Америка",
    "locationDesc": "Южная Америка (Бразильское плоскогорье ➔ залив Маражо (Атлантический океан))",
    "mapPrompt": "Покажите реку: Токантинс",
    "geometryType": "polyline",
    "lat": -8.0,
    "lng": -48.5,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        -14.0,
        -49.0
      ],
      [
        -8.0,
        -48.0
      ],
      [
        -2.0,
        -49.0
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "south_america",
    "lengthKm": 2699,
    "sourceMouth": "Бразильское плоскогорье ➔ залив Маражо (Атлантический океан)",
    "tributaries": [
      "Арагуая"
    ],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Токантинс",
      "backMainAnswer": "Южная Америка • Бразильское плоскогорье ➔ залив Маражо (Атлантический океан)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Южная Америка"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Бразильское плоскогорье ➔ залив Маражо (Атлантический океан)"
        },
        {
          "label": "Длина",
          "value": "2699 км"
        },
        {
          "label": "Главные притоки",
          "value": "Арагуая"
        }
      ],
      "backNote": "Река Токантинс: Бразильское плоскогорье ➔ залив Маражо (Атлантический океан)."
    }
  },
  {
    "id": "m4_riv_orinoco",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_south_america",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Ориноко",
    "aliases": [],
    "region": "Южная Америка",
    "locationDesc": "Южная Америка (Горы Парима (Гвианское плоскогорье) ➔ Атлантический океан (дельта))",
    "mapPrompt": "Покажите реку: Ориноко",
    "geometryType": "polyline",
    "lat": 6.0,
    "lng": -66.0,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        2.3,
        -63.4
      ],
      [
        4.0,
        -67.5
      ],
      [
        7.5,
        -66.5
      ],
      [
        8.5,
        -62.0
      ],
      [
        9.5,
        -61.0
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "south_america",
    "lengthKm": 2140,
    "sourceMouth": "Горы Парима (Гвианское плоскогорье) ➔ Атлантический океан (дельта)",
    "tributaries": [
      "Карони",
      "Апуре",
      "Мета",
      "Гуавьяре",
      "Касикъяре"
    ],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Ориноко",
      "backMainAnswer": "Южная Америка • Горы Парима (Гвианское плоскогорье) ➔ Атлантический океан (дельта)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Южная Америка"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Горы Парима (Гвианское плоскогорье) ➔ Атлантический океан (дельта)"
        },
        {
          "label": "Длина",
          "value": "2140 км"
        },
        {
          "label": "Главные притоки",
          "value": "Карони, Апуре, Мета, Гуавьяре, Касикъяре"
        }
      ],
      "backNote": "Река Ориноко: Горы Парима (Гвианское плоскогорье) ➔ Атлантический океан (дельта)."
    }
  },
  {
    "id": "m4_riv_caroni",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_south_america",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Карони",
    "aliases": [],
    "region": "Южная Америка",
    "locationDesc": "Южная Америка (Гвианское плоскогорье (гора Рорайма) ➔ Ориноко (ГЭС Гури, приток Чурун с водопадом Анхель))",
    "mapPrompt": "Покажите реку: Карони",
    "geometryType": "polyline",
    "lat": 6.5,
    "lng": -62.5,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        5.0,
        -62.0
      ],
      [
        8.3,
        -62.7
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "south_america",
    "lengthKm": 952,
    "sourceMouth": "Гвианское плоскогорье (гора Рорайма) ➔ Ориноко (ГЭС Гури, приток Чурун с водопадом Анхель)",
    "tributaries": [
      "Чурун"
    ],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Карони",
      "backMainAnswer": "Южная Америка • Гвианское плоскогорье (гора Рорайма) ➔ Ориноко (ГЭС Гури, приток Чурун с водопадом Анхель)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Южная Америка"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Гвианское плоскогорье (гора Рорайма) ➔ Ориноко (ГЭС Гури, приток Чурун с водопадом Анхель)"
        },
        {
          "label": "Длина",
          "value": "952 км"
        },
        {
          "label": "Главные притоки",
          "value": "Чурун"
        }
      ],
      "backNote": "Река Карони: Гвианское плоскогорье (гора Рорайма) ➔ Ориноко (ГЭС Гури, приток Чурун с водопадом Анхель)."
    }
  },
  {
    "id": "m4_riv_parana",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_south_america",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Парана",
    "aliases": [],
    "region": "Южная Америка",
    "locationDesc": "Южная Америка (Бразильское плоскогорье (слияние Паранаибы и Риу-Гранди) ➔ залив Ла-Плата)",
    "mapPrompt": "Покажите реку: Парана",
    "geometryType": "polyline",
    "lat": -27.0,
    "lng": -58.0,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        -20.0,
        -51.0
      ],
      [
        -25.5,
        -54.6
      ],
      [
        -27.5,
        -58.8
      ],
      [
        -32.0,
        -60.6
      ],
      [
        -34.0,
        -58.5
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "south_america",
    "lengthKm": 4880,
    "sourceMouth": "Бразильское плоскогорье (слияние Паранаибы и Риу-Гранди) ➔ залив Ла-Плата",
    "tributaries": [
      "Парагвай",
      "Игуасу",
      "Тиете",
      "Паранапанема"
    ],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Парана",
      "backMainAnswer": "Южная Америка • Бразильское плоскогорье (слияние Паранаибы и Риу-Гранди) ➔ залив Ла-Плата",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Южная Америка"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Бразильское плоскогорье (слияние Паранаибы и Риу-Гранди) ➔ залив Ла-Плата"
        },
        {
          "label": "Длина",
          "value": "4880 км"
        },
        {
          "label": "Главные притоки",
          "value": "Парагвай, Игуасу, Тиете, Паранапанема"
        }
      ],
      "backNote": "Река Парана: Бразильское плоскогорье (слияние Паранаибы и Риу-Гранди) ➔ залив Ла-Плата."
    }
  },
  {
    "id": "m4_riv_iguazu_river",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_south_america",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Игуасу",
    "aliases": [],
    "region": "Южная Америка",
    "locationDesc": "Южная Америка (Бразильское плоскогорье (Серра-ду-Мар) ➔ Парана (водопады Игуасу))",
    "mapPrompt": "Покажите реку: Игуасу",
    "geometryType": "polyline",
    "lat": -25.6,
    "lng": -52.0,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        -25.5,
        -49.5
      ],
      [
        -25.6,
        -54.6
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "south_america",
    "lengthKm": 1320,
    "sourceMouth": "Бразильское плоскогорье (Серра-ду-Мар) ➔ Парана (водопады Игуасу)",
    "tributaries": [],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Игуасу",
      "backMainAnswer": "Южная Америка • Бразильское плоскогорье (Серра-ду-Мар) ➔ Парана (водопады Игуасу)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Южная Америка"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Бразильское плоскогорье (Серра-ду-Мар) ➔ Парана (водопады Игуасу)"
        },
        {
          "label": "Длина",
          "value": "1320 км"
        },
        {
          "label": "Главные притоки",
          "value": "—"
        }
      ],
      "backNote": "Река Игуасу: Бразильское плоскогорье (Серра-ду-Мар) ➔ Парана (водопады Игуасу)."
    }
  },
  {
    "id": "m4_riv_paraguay_river",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_south_america",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Парагвай",
    "aliases": [],
    "region": "Южная Америка",
    "locationDesc": "Южная Америка (Плато Мату-Гросу (болота Пантанал) ➔ Парана)",
    "mapPrompt": "Покажите реку: Парагвай",
    "geometryType": "polyline",
    "lat": -22.0,
    "lng": -57.8,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        -14.5,
        -56.5
      ],
      [
        -19.0,
        -57.5
      ],
      [
        -25.3,
        -57.6
      ],
      [
        -27.3,
        -58.6
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "south_america",
    "lengthKm": 2695,
    "sourceMouth": "Плато Мату-Гросу (болота Пантанал) ➔ Парана",
    "tributaries": [
      "Пилькомайо",
      "Рио-Бермехо"
    ],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Парагвай",
      "backMainAnswer": "Южная Америка • Плато Мату-Гросу (болота Пантанал) ➔ Парана",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Южная Америка"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Плато Мату-Гросу (болота Пантанал) ➔ Парана"
        },
        {
          "label": "Длина",
          "value": "2695 км"
        },
        {
          "label": "Главные притоки",
          "value": "Пилькомайо, Рио-Бермехо"
        }
      ],
      "backNote": "Река Парагвай: Плато Мату-Гросу (болота Пантанал) ➔ Парана."
    }
  },
  {
    "id": "m4_riv_rio_negro_arg",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_south_america",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Рио-Негро (Аргентина)",
    "aliases": [],
    "region": "Южная Америка",
    "locationDesc": "Южная Америка (Патагония (слияние Лимай и Неукен) ➔ Атлантический океан)",
    "mapPrompt": "Покажите реку: Рио-Негро (Аргентина)",
    "geometryType": "polyline",
    "lat": -40.0,
    "lng": -65.0,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        -38.9,
        -68.0
      ],
      [
        -40.0,
        -64.5
      ],
      [
        -41.0,
        -62.8
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "south_america",
    "lengthKm": 635,
    "sourceMouth": "Патагония (слияние Лимай и Неукен) ➔ Атлантический океан",
    "tributaries": [],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Рио-Негро (Аргентина)",
      "backMainAnswer": "Южная Америка • Патагония (слияние Лимай и Неукен) ➔ Атлантический океан",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Южная Америка"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Патагония (слияние Лимай и Неукен) ➔ Атлантический океан"
        },
        {
          "label": "Длина",
          "value": "635 км"
        },
        {
          "label": "Главные притоки",
          "value": "—"
        }
      ],
      "backNote": "Река Рио-Негро (Аргентина): Патагония (слияние Лимай и Неукен) ➔ Атлантический океан."
    }
  },
  {
    "id": "m4_riv_sao_francisco",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_south_america",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Сан-Франсиску",
    "aliases": [],
    "region": "Южная Америка",
    "locationDesc": "Южная Америка (Бразильское плоскогорье (Серра-да-Канастра) ➔ Атлантический океан)",
    "mapPrompt": "Покажите реку: Сан-Франсиску",
    "geometryType": "polyline",
    "lat": -13.0,
    "lng": -43.0,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        -20.0,
        -46.5
      ],
      [
        -12.0,
        -43.0
      ],
      [
        -9.4,
        -38.2
      ],
      [
        -10.5,
        -36.4
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "south_america",
    "lengthKm": 2830,
    "sourceMouth": "Бразильское плоскогорье (Серра-да-Канастра) ➔ Атлантический океан",
    "tributaries": [],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Сан-Франсиску",
      "backMainAnswer": "Южная Америка • Бразильское плоскогорье (Серра-да-Канастра) ➔ Атлантический океан",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Южная Америка"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Бразильское плоскогорье (Серра-да-Канастра) ➔ Атлантический океан"
        },
        {
          "label": "Длина",
          "value": "2830 км"
        },
        {
          "label": "Главные притоки",
          "value": "—"
        }
      ],
      "backNote": "Река Сан-Франсиску: Бразильское плоскогорье (Серра-да-Канастра) ➔ Атлантический океан."
    }
  },
  {
    "id": "m4_riv_uruguay_river",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_south_america",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Уругвай",
    "aliases": [],
    "region": "Южная Америка",
    "locationDesc": "Южная Америка (Бразильское плоскогорье (Серра-ду-Мар) ➔ залив Ла-Плата)",
    "mapPrompt": "Покажите реку: Уругвай",
    "geometryType": "polyline",
    "lat": -30.0,
    "lng": -57.0,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        -27.5,
        -51.5
      ],
      [
        -29.0,
        -56.5
      ],
      [
        -33.5,
        -58.4
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "south_america",
    "lengthKm": 1838,
    "sourceMouth": "Бразильское плоскогорье (Серра-ду-Мар) ➔ залив Ла-Плата",
    "tributaries": [
      "Рио-Негро (Уругвай)"
    ],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Уругвай",
      "backMainAnswer": "Южная Америка • Бразильское плоскогорье (Серра-ду-Мар) ➔ залив Ла-Плата",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Южная Америка"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Бразильское плоскогорье (Серра-ду-Мар) ➔ залив Ла-Плата"
        },
        {
          "label": "Длина",
          "value": "1838 км"
        },
        {
          "label": "Главные притоки",
          "value": "Рио-Негро (Уругвай)"
        }
      ],
      "backNote": "Река Уругвай: Бразильское плоскогорье (Серра-ду-Мар) ➔ залив Ла-Плата."
    }
  },
  {
    "id": "m4_riv_coopers_creek",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_australia",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Куперс-Крик (Барку)",
    "aliases": [],
    "region": "Австралия",
    "locationDesc": "Австралия (Большой Водораздельный хребет ➔ бессточное озеро Эйр (крик, пересыхающая река))",
    "mapPrompt": "Покажите реку: Куперс-Крик (Барку)",
    "geometryType": "polyline",
    "lat": -26.0,
    "lng": 141.0,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        -23.0,
        145.0
      ],
      [
        -27.0,
        142.0
      ],
      [
        -28.5,
        138.0
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "australia",
    "lengthKm": 1420,
    "sourceMouth": "Большой Водораздельный хребет ➔ бессточное озеро Эйр (крик, пересыхающая река)",
    "tributaries": [
      "Барку",
      "Томсон"
    ],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Куперс-Крик (Барку)",
      "backMainAnswer": "Австралия • Большой Водораздельный хребет ➔ бессточное озеро Эйр (крик, пересыхающая река)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Австралия"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Большой Водораздельный хребет ➔ бессточное озеро Эйр (крик, пересыхающая река)"
        },
        {
          "label": "Длина",
          "value": "1420 км"
        },
        {
          "label": "Главные притоки",
          "value": "Барку, Томсон"
        }
      ],
      "backNote": "Река Куперс-Крик (Барку): Большой Водораздельный хребет ➔ бессточное озеро Эйр (крик, пересыхающая река)."
    }
  },
  {
    "id": "m4_riv_murray",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_australia",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Муррей (Марри)",
    "aliases": [
      "Марри"
    ],
    "region": "Австралия",
    "locationDesc": "Австралия (Австралийские Альпы (г. Косцюшко) ➔ залив Энкантер (Индийский океан, главная река Австралии))",
    "mapPrompt": "Покажите реку: Муррей (Марри)",
    "geometryType": "polyline",
    "lat": -35.0,
    "lng": 142.0,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        -36.5,
        148.0
      ],
      [
        -35.8,
        144.5
      ],
      [
        -34.1,
        141.0
      ],
      [
        -35.5,
        139.0
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "australia",
    "lengthKm": 2508,
    "sourceMouth": "Австралийские Альпы (г. Косцюшко) ➔ залив Энкантер (Индийский океан, главная река Австралии)",
    "tributaries": [
      "Дарлинг",
      "Маррамбиджи",
      "Гоулберн"
    ],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Муррей (Марри)",
      "backMainAnswer": "Австралия • Австралийские Альпы (г. Косцюшко) ➔ залив Энкантер (Индийский океан, главная река Австралии)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Австралия"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Австралийские Альпы (г. Косцюшко) ➔ залив Энкантер (Индийский океан, главная река Австралии)"
        },
        {
          "label": "Длина",
          "value": "2508 км"
        },
        {
          "label": "Главные притоки",
          "value": "Дарлинг, Маррамбиджи, Гоулберн"
        }
      ],
      "backNote": "Река Муррей (Марри): Австралийские Альпы (г. Косцюшко) ➔ залив Энкантер (Индийский океан, главная река Австралии)."
    }
  },
  {
    "id": "m4_riv_darling",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_australia",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Дарлинг",
    "aliases": [],
    "region": "Австралия",
    "locationDesc": "Австралия (Большой Водораздельный хребет ➔ Муррей (Уэнтворт, длиннейший приток))",
    "mapPrompt": "Покажите реку: Дарлинг",
    "geometryType": "polyline",
    "lat": -31.0,
    "lng": 144.0,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        -28.5,
        151.0
      ],
      [
        -30.0,
        146.0
      ],
      [
        -32.0,
        142.5
      ],
      [
        -34.1,
        141.9
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "australia",
    "lengthKm": 2739,
    "sourceMouth": "Большой Водораздельный хребет ➔ Муррей (Уэнтворт, длиннейший приток)",
    "tributaries": [],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Дарлинг",
      "backMainAnswer": "Австралия • Большой Водораздельный хребет ➔ Муррей (Уэнтворт, длиннейший приток)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Австралия"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Большой Водораздельный хребет ➔ Муррей (Уэнтворт, длиннейший приток)"
        },
        {
          "label": "Длина",
          "value": "2739 км"
        },
        {
          "label": "Главные притоки",
          "value": "—"
        }
      ],
      "backNote": "Река Дарлинг: Большой Водораздельный хребет ➔ Муррей (Уэнтворт, длиннейший приток)."
    }
  },
  {
    "id": "m4_riv_murrumbidgee",
    "moduleId": "module4",
    "submoduleId": "m4_rivers_australia",
    "category": "rivers",
    "categoryRu": "Реки",
    "difficulty": "Стандартный",
    "name": "Маррамбиджи",
    "aliases": [],
    "region": "Австралия",
    "locationDesc": "Австралия (Снежные горы (Австралийские Альпы) ➔ Муррей (протекает через Канберру))",
    "mapPrompt": "Покажите реку: Маррамбиджи",
    "geometryType": "polyline",
    "lat": -35.0,
    "lng": 146.0,
    "hitRadiusKm": 220,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        -35.8,
        148.5
      ],
      [
        -35.0,
        146.0
      ],
      [
        -34.7,
        143.2
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "river"
    },
    "badgeColor": "cyan",
    "continent": "australia",
    "lengthKm": 1485,
    "sourceMouth": "Снежные горы (Австралийские Альпы) ➔ Муррей (протекает через Канберру)",
    "tributaries": [
      "Лаклан"
    ],
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, исток/устье и главные притоки реки: Маррамбиджи",
      "backMainAnswer": "Австралия • Снежные горы (Австралийские Альпы) ➔ Муррей (протекает через Канберру)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Австралия"
        },
        {
          "label": "Бассейн / Устье",
          "value": "Снежные горы (Австралийские Альпы) ➔ Муррей (протекает через Канберру)"
        },
        {
          "label": "Длина",
          "value": "1485 км"
        },
        {
          "label": "Главные притоки",
          "value": "Лаклан"
        }
      ],
      "backNote": "Река Маррамбиджи: Снежные горы (Австралийские Альпы) ➔ Муррей (протекает через Канберру)."
    }
  },
  {
    "id": "m4_wf_ilya_muromets",
    "moduleId": "module4",
    "submoduleId": "m4_waterfalls",
    "category": "waterfalls",
    "categoryRu": "Водопады",
    "difficulty": "Стандартный",
    "name": "Илья Муромец",
    "aliases": [],
    "region": "Евразия",
    "locationDesc": "Евразия (Северо-восточная окраина о. Итуруп (Курильские острова, Россия), высота 141 м)",
    "mapPrompt": "Покажите водопад: Илья Муромец",
    "geometryType": "point",
    "lat": 45.52,
    "lng": 148.88,
    "hitRadiusKm": 90,
    "bounds": null,
    "badgeColor": "teal",
    "dropHeightM": 141,
    "riverName": "Северо-восточная окраина о. Итуруп (Курильские острова, Россия)",
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите высоту падения и реку/местоположение водопада: Илья Муромец",
      "backMainAnswer": "141 м • Северо-восточная окраина о. Итуруп (Курильские острова, Россия) (Евразия)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Высота падения",
          "value": "141 м"
        },
        {
          "label": "Река / Локация",
          "value": "Северо-восточная окраина о. Итуруп (Курильские острова, Россия)"
        }
      ],
      "backNote": "Водопад Илья Муромец: высота падения 141 м (Северо-восточная окраина о. Итуруп (Курильские острова, Россия))."
    }
  },
  {
    "id": "m4_wf_kivach",
    "moduleId": "module4",
    "submoduleId": "m4_waterfalls",
    "category": "waterfalls",
    "categoryRu": "Водопады",
    "difficulty": "Стандартный",
    "name": "Кивач",
    "aliases": [],
    "region": "Евразия",
    "locationDesc": "Евразия (Река Суна, Карелия (Россия), северо-западнее Онежского озера, высота 11 м)",
    "mapPrompt": "Покажите водопад: Кивач",
    "geometryType": "point",
    "lat": 62.27,
    "lng": 33.98,
    "hitRadiusKm": 90,
    "bounds": null,
    "badgeColor": "teal",
    "dropHeightM": 11,
    "riverName": "Река Суна, Карелия (Россия), северо-западнее Онежского озера",
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите высоту падения и реку/местоположение водопада: Кивач",
      "backMainAnswer": "11 м • Река Суна, Карелия (Россия), северо-западнее Онежского озера (Евразия)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Высота падения",
          "value": "11 м"
        },
        {
          "label": "Река / Локация",
          "value": "Река Суна, Карелия (Россия), северо-западнее Онежского озера"
        }
      ],
      "backNote": "Водопад Кивач: высота падения 11 м (Река Суна, Карелия (Россия), северо-западнее Онежского озера)."
    }
  },
  {
    "id": "m4_wf_utigard",
    "moduleId": "module4",
    "submoduleId": "m4_waterfalls",
    "category": "waterfalls",
    "categoryRu": "Водопады",
    "difficulty": "Стандартный",
    "name": "Утигард (Рамнефьеллсфоссен)",
    "aliases": [
      "Рамнефьеллсфоссен"
    ],
    "region": "Евразия",
    "locationDesc": "Евразия (Норвегия, западнее г. Гальхёпигген (ледник Йостедалсбреен), высота 818 м)",
    "mapPrompt": "Покажите водопад: Утигард (Рамнефьеллсфоссен)",
    "geometryType": "point",
    "lat": 61.88,
    "lng": 6.97,
    "hitRadiusKm": 90,
    "bounds": null,
    "badgeColor": "teal",
    "dropHeightM": 818,
    "riverName": "Норвегия, западнее г. Гальхёпигген (ледник Йостедалсбреен)",
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите высоту падения и реку/местоположение водопада: Утигард (Рамнефьеллсфоссен)",
      "backMainAnswer": "818 м • Норвегия, западнее г. Гальхёпигген (ледник Йостедалсбреен) (Евразия)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Высота падения",
          "value": "818 м"
        },
        {
          "label": "Река / Локация",
          "value": "Норвегия, западнее г. Гальхёпигген (ледник Йостедалсбреен)"
        }
      ],
      "backNote": "Водопад Утигард (Рамнефьеллсфоссен): высота падения 818 м (Норвегия, западнее г. Гальхёпигген (ледник Йостедалсбреен))."
    }
  },
  {
    "id": "m4_wf_victoria_falls",
    "moduleId": "module4",
    "submoduleId": "m4_waterfalls",
    "category": "waterfalls",
    "categoryRu": "Водопады",
    "difficulty": "Стандартный",
    "name": "Виктория",
    "aliases": [
      "Моси-оа-Тунья"
    ],
    "region": "Африка",
    "locationDesc": "Африка (Река Замбези, граница Замбии и Зимбабве ('Гремящий дым' Моси-оа-Тунья), высота 120 м)",
    "mapPrompt": "Покажите водопад: Виктория",
    "geometryType": "point",
    "lat": -17.92,
    "lng": 25.85,
    "hitRadiusKm": 90,
    "bounds": null,
    "badgeColor": "teal",
    "dropHeightM": 120,
    "riverName": "Река Замбези, граница Замбии и Зимбабве ('Гремящий дым' Моси-оа-Тунья)",
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите высоту падения и реку/местоположение водопада: Виктория",
      "backMainAnswer": "120 м • Река Замбези, граница Замбии и Зимбабве ('Гремящий дым' Моси-оа-Тунья) (Африка)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Африка"
        },
        {
          "label": "Высота падения",
          "value": "120 м"
        },
        {
          "label": "Река / Локация",
          "value": "Река Замбези, граница Замбии и Зимбабве ('Гремящий дым' Моси-оа-Тунья)"
        }
      ],
      "backNote": "Водопад Виктория: высота падения 120 м (Река Замбези, граница Замбии и Зимбабве ('Гремящий дым' Моси-оа-Тунья))."
    }
  },
  {
    "id": "m4_wf_kabarega",
    "moduleId": "module4",
    "submoduleId": "m4_waterfalls",
    "category": "waterfalls",
    "categoryRu": "Водопады",
    "difficulty": "Стандартный",
    "name": "Кабарега (Мерчисон)",
    "aliases": [
      "Мерчисон"
    ],
    "region": "Африка",
    "locationDesc": "Африка (Река Виктория-Нил, Уганда (национальный парк Мерчисон-Фоллс), высота 40 м)",
    "mapPrompt": "Покажите водопад: Кабарега (Мерчисон)",
    "geometryType": "point",
    "lat": 2.28,
    "lng": 31.68,
    "hitRadiusKm": 90,
    "bounds": null,
    "badgeColor": "teal",
    "dropHeightM": 40,
    "riverName": "Река Виктория-Нил, Уганда (национальный парк Мерчисон-Фоллс)",
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите высоту падения и реку/местоположение водопада: Кабарега (Мерчисон)",
      "backMainAnswer": "40 м • Река Виктория-Нил, Уганда (национальный парк Мерчисон-Фоллс) (Африка)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Африка"
        },
        {
          "label": "Высота падения",
          "value": "40 м"
        },
        {
          "label": "Река / Локация",
          "value": "Река Виктория-Нил, Уганда (национальный парк Мерчисон-Фоллс)"
        }
      ],
      "backNote": "Водопад Кабарега (Мерчисон): высота падения 40 м (Река Виктория-Нил, Уганда (национальный парк Мерчисон-Фоллс))."
    }
  },
  {
    "id": "m4_wf_livingstone_falls",
    "moduleId": "module4",
    "submoduleId": "m4_waterfalls",
    "category": "waterfalls",
    "categoryRu": "Водопады",
    "difficulty": "Стандартный",
    "name": "Водопады Ливингстона",
    "aliases": [],
    "region": "Африка",
    "locationDesc": "Африка (Нижнее течение р. Конго, ДР Конго (серия порогов с падением 270 м), высота 270 м)",
    "mapPrompt": "Покажите водопад: Водопады Ливингстона",
    "geometryType": "point",
    "lat": -4.83,
    "lng": 14.43,
    "hitRadiusKm": 90,
    "bounds": null,
    "badgeColor": "teal",
    "dropHeightM": 270,
    "riverName": "Нижнее течение р. Конго, ДР Конго (серия порогов с падением 270 м)",
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите высоту падения и реку/местоположение водопада: Водопады Ливингстона",
      "backMainAnswer": "270 м • Нижнее течение р. Конго, ДР Конго (серия порогов с падением 270 м) (Африка)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Африка"
        },
        {
          "label": "Высота падения",
          "value": "270 м"
        },
        {
          "label": "Река / Локация",
          "value": "Нижнее течение р. Конго, ДР Конго (серия порогов с падением 270 м)"
        }
      ],
      "backNote": "Водопад Водопады Ливингстона: высота падения 270 м (Нижнее течение р. Конго, ДР Конго (серия порогов с падением 270 м))."
    }
  },
  {
    "id": "m4_wf_mutarazi",
    "moduleId": "module4",
    "submoduleId": "m4_waterfalls",
    "category": "waterfalls",
    "categoryRu": "Водопады",
    "difficulty": "Стандартный",
    "name": "Мутарази",
    "aliases": [],
    "region": "Африка",
    "locationDesc": "Африка (Восток Зимбабве, парк Ньянга (второй по высоте в Африке), высота 762 м)",
    "mapPrompt": "Покажите водопад: Мутарази",
    "geometryType": "point",
    "lat": -18.48,
    "lng": 32.78,
    "hitRadiusKm": 90,
    "bounds": null,
    "badgeColor": "teal",
    "dropHeightM": 762,
    "riverName": "Восток Зимбабве, парк Ньянга (второй по высоте в Африке)",
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите высоту падения и реку/местоположение водопада: Мутарази",
      "backMainAnswer": "762 м • Восток Зимбабве, парк Ньянга (второй по высоте в Африке) (Африка)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Африка"
        },
        {
          "label": "Высота падения",
          "value": "762 м"
        },
        {
          "label": "Река / Локация",
          "value": "Восток Зимбабве, парк Ньянга (второй по высоте в Африке)"
        }
      ],
      "backNote": "Водопад Мутарази: высота падения 762 м (Восток Зимбабве, парк Ньянга (второй по высоте в Африке))."
    }
  },
  {
    "id": "m4_wf_yellowstone_falls",
    "moduleId": "module4",
    "submoduleId": "m4_waterfalls",
    "category": "waterfalls",
    "categoryRu": "Водопады",
    "difficulty": "Стандартный",
    "name": "Йеллоустон (каскад)",
    "aliases": [],
    "region": "Северная Америка",
    "locationDesc": "Северная Америка (Река Йеллоустон, США, Вайоминг (Верхний 33 м и Нижний 94 м водопады), высота 93 м)",
    "mapPrompt": "Покажите водопад: Йеллоустон (каскад)",
    "geometryType": "point",
    "lat": 44.71,
    "lng": -110.49,
    "hitRadiusKm": 90,
    "bounds": null,
    "badgeColor": "teal",
    "dropHeightM": 93,
    "riverName": "Река Йеллоустон, США, Вайоминг (Верхний 33 м и Нижний 94 м водопады)",
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите высоту падения и реку/местоположение водопада: Йеллоустон (каскад)",
      "backMainAnswer": "93 м • Река Йеллоустон, США, Вайоминг (Верхний 33 м и Нижний 94 м водопады) (Северная Америка)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Северная Америка"
        },
        {
          "label": "Высота падения",
          "value": "93 м"
        },
        {
          "label": "Река / Локация",
          "value": "Река Йеллоустон, США, Вайоминг (Верхний 33 м и Нижний 94 м водопады)"
        }
      ],
      "backNote": "Водопад Йеллоустон (каскад): высота падения 93 м (Река Йеллоустон, США, Вайоминг (Верхний 33 м и Нижний 94 м водопады))."
    }
  },
  {
    "id": "m4_wf_yosemite_falls",
    "moduleId": "module4",
    "submoduleId": "m4_waterfalls",
    "category": "waterfalls",
    "categoryRu": "Водопады",
    "difficulty": "Стандартный",
    "name": "Йосемитский водопад",
    "aliases": [],
    "region": "Северная Америка",
    "locationDesc": "Северная Америка (Горы Сьерра-Невада, США, Калифорния (Йосемитский национальный парк), высота 739 м)",
    "mapPrompt": "Покажите водопад: Йосемитский водопад",
    "geometryType": "point",
    "lat": 37.75,
    "lng": -119.59,
    "hitRadiusKm": 90,
    "bounds": null,
    "badgeColor": "teal",
    "dropHeightM": 739,
    "riverName": "Горы Сьерра-Невада, США, Калифорния (Йосемитский национальный парк)",
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите высоту падения и реку/местоположение водопада: Йосемитский водопад",
      "backMainAnswer": "739 м • Горы Сьерра-Невада, США, Калифорния (Йосемитский национальный парк) (Северная Америка)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Северная Америка"
        },
        {
          "label": "Высота падения",
          "value": "739 м"
        },
        {
          "label": "Река / Локация",
          "value": "Горы Сьерра-Невада, США, Калифорния (Йосемитский национальный парк)"
        }
      ],
      "backNote": "Водопад Йосемитский водопад: высота падения 739 м (Горы Сьерра-Невада, США, Калифорния (Йосемитский национальный парк))."
    }
  },
  {
    "id": "m4_wf_niagara_falls",
    "moduleId": "module4",
    "submoduleId": "m4_waterfalls",
    "category": "waterfalls",
    "categoryRu": "Водопады",
    "difficulty": "Стандартный",
    "name": "Ниагарский водопад",
    "aliases": [
      "Подкова"
    ],
    "region": "Северная Америка",
    "locationDesc": "Северная Америка (Река Ниагара, граница США и Канады (водопады Подкова и Американский), высота 51 м)",
    "mapPrompt": "Покажите водопад: Ниагарский водопад",
    "geometryType": "point",
    "lat": 43.08,
    "lng": -79.07,
    "hitRadiusKm": 90,
    "bounds": null,
    "badgeColor": "teal",
    "dropHeightM": 51,
    "riverName": "Река Ниагара, граница США и Канады (водопады Подкова и Американский)",
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите высоту падения и реку/местоположение водопада: Ниагарский водопад",
      "backMainAnswer": "51 м • Река Ниагара, граница США и Канады (водопады Подкова и Американский) (Северная Америка)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Северная Америка"
        },
        {
          "label": "Высота падения",
          "value": "51 м"
        },
        {
          "label": "Река / Локация",
          "value": "Река Ниагара, граница США и Канады (водопады Подкова и Американский)"
        }
      ],
      "backNote": "Водопад Ниагарский водопад: высота падения 51 м (Река Ниагара, граница США и Канады (водопады Подкова и Американский))."
    }
  },
  {
    "id": "m4_wf_shoshone_falls",
    "moduleId": "module4",
    "submoduleId": "m4_waterfalls",
    "category": "waterfalls",
    "categoryRu": "Водопады",
    "difficulty": "Стандартный",
    "name": "Шошони (Шошоне)",
    "aliases": [
      "Шошоне"
    ],
    "region": "Северная Америка",
    "locationDesc": "Северная Америка (Река Снейк, США, Айдахо ('Ниагара Запада'), высота 59 м)",
    "mapPrompt": "Покажите водопад: Шошони (Шошоне)",
    "geometryType": "point",
    "lat": 42.59,
    "lng": -114.4,
    "hitRadiusKm": 90,
    "bounds": null,
    "badgeColor": "teal",
    "dropHeightM": 59,
    "riverName": "Река Снейк, США, Айдахо ('Ниагара Запада')",
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите высоту падения и реку/местоположение водопада: Шошони (Шошоне)",
      "backMainAnswer": "59 м • Река Снейк, США, Айдахо ('Ниагара Запада') (Северная Америка)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Северная Америка"
        },
        {
          "label": "Высота падения",
          "value": "59 м"
        },
        {
          "label": "Река / Локация",
          "value": "Река Снейк, США, Айдахо ('Ниагара Запада')"
        }
      ],
      "backNote": "Водопад Шошони (Шошоне): высота падения 59 м (Река Снейк, США, Айдахо ('Ниагара Запада'))."
    }
  },
  {
    "id": "m4_wf_kukenan",
    "moduleId": "module4",
    "submoduleId": "m4_waterfalls",
    "category": "waterfalls",
    "categoryRu": "Водопады",
    "difficulty": "Стандартный",
    "name": "Кукенан",
    "aliases": [],
    "region": "Южная Америка",
    "locationDesc": "Южная Америка (Венесуэла, тепуи Кукенан рядом с горой Рорайма, высота 610 м)",
    "mapPrompt": "Покажите водопад: Кукенан",
    "geometryType": "point",
    "lat": 5.2,
    "lng": -60.83,
    "hitRadiusKm": 90,
    "bounds": null,
    "badgeColor": "teal",
    "dropHeightM": 610,
    "riverName": "Венесуэла, тепуи Кукенан рядом с горой Рорайма",
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите высоту падения и реку/местоположение водопада: Кукенан",
      "backMainAnswer": "610 м • Венесуэла, тепуи Кукенан рядом с горой Рорайма (Южная Америка)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Южная Америка"
        },
        {
          "label": "Высота падения",
          "value": "610 м"
        },
        {
          "label": "Река / Локация",
          "value": "Венесуэла, тепуи Кукенан рядом с горой Рорайма"
        }
      ],
      "backNote": "Водопад Кукенан: высота падения 610 м (Венесуэла, тепуи Кукенан рядом с горой Рорайма)."
    }
  },
  {
    "id": "m4_wf_yumbilla",
    "moduleId": "module4",
    "submoduleId": "m4_waterfalls",
    "category": "waterfalls",
    "categoryRu": "Водопады",
    "difficulty": "Стандартный",
    "name": "Умбилла (Юмбилья)",
    "aliases": [
      "Юмбилья"
    ],
    "region": "Южная Америка",
    "locationDesc": "Южная Америка (Северо-запад Перу, регион Амасонас (многокаскадный водопад), высота 895 м)",
    "mapPrompt": "Покажите водопад: Умбилла (Юмбилья)",
    "geometryType": "point",
    "lat": -5.92,
    "lng": -77.9,
    "hitRadiusKm": 90,
    "bounds": null,
    "badgeColor": "teal",
    "dropHeightM": 895,
    "riverName": "Северо-запад Перу, регион Амасонас (многокаскадный водопад)",
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите высоту падения и реку/местоположение водопада: Умбилла (Юмбилья)",
      "backMainAnswer": "895 м • Северо-запад Перу, регион Амасонас (многокаскадный водопад) (Южная Америка)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Южная Америка"
        },
        {
          "label": "Высота падения",
          "value": "895 м"
        },
        {
          "label": "Река / Локация",
          "value": "Северо-запад Перу, регион Амасонас (многокаскадный водопад)"
        }
      ],
      "backNote": "Водопад Умбилла (Юмбилья): высота падения 895 м (Северо-запад Перу, регион Амасонас (многокаскадный водопад))."
    }
  },
  {
    "id": "m4_wf_oloupena",
    "moduleId": "module4",
    "submoduleId": "m4_waterfalls",
    "category": "waterfalls",
    "categoryRu": "Водопады",
    "difficulty": "Стандартный",
    "name": "Олоупена",
    "aliases": [],
    "region": "Австралия и Океания",
    "locationDesc": "Австралия и Океания (Северо-восток острова Молокаи, Гавайские острова (с высочайших морских утесов), высота 900 м)",
    "mapPrompt": "Покажите водопад: Олоупена",
    "geometryType": "point",
    "lat": 21.16,
    "lng": -156.81,
    "hitRadiusKm": 90,
    "bounds": null,
    "badgeColor": "teal",
    "dropHeightM": 900,
    "riverName": "Северо-восток острова Молокаи, Гавайские острова (с высочайших морских утесов)",
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите высоту падения и реку/местоположение водопада: Олоупена",
      "backMainAnswer": "900 м • Северо-восток острова Молокаи, Гавайские острова (с высочайших морских утесов) (Австралия и Океания)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Австралия и Океания"
        },
        {
          "label": "Высота падения",
          "value": "900 м"
        },
        {
          "label": "Река / Локация",
          "value": "Северо-восток острова Молокаи, Гавайские острова (с высочайших морских утесов)"
        }
      ],
      "backNote": "Водопад Олоупена: высота падения 900 м (Северо-восток острова Молокаи, Гавайские острова (с высочайших морских утесов))."
    }
  },
  {
    "id": "m4_wf_sutherland_falls",
    "moduleId": "module4",
    "submoduleId": "m4_waterfalls",
    "category": "waterfalls",
    "categoryRu": "Водопады",
    "difficulty": "Стандартный",
    "name": "Сатерленд",
    "aliases": [],
    "region": "Австралия и Океания",
    "locationDesc": "Австралия и Океания (Новая Зеландия, юго-запад острова Южный (Милфорд-Саунд), высота 580 м)",
    "mapPrompt": "Покажите водопад: Сатерленд",
    "geometryType": "point",
    "lat": -44.8,
    "lng": 167.73,
    "hitRadiusKm": 90,
    "bounds": null,
    "badgeColor": "teal",
    "dropHeightM": 580,
    "riverName": "Новая Зеландия, юго-запад острова Южный (Милфорд-Саунд)",
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите высоту падения и реку/местоположение водопада: Сатерленд",
      "backMainAnswer": "580 м • Новая Зеландия, юго-запад острова Южный (Милфорд-Саунд) (Австралия и Океания)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Австралия и Океания"
        },
        {
          "label": "Высота падения",
          "value": "580 м"
        },
        {
          "label": "Река / Локация",
          "value": "Новая Зеландия, юго-запад острова Южный (Милфорд-Саунд)"
        }
      ],
      "backNote": "Водопад Сатерленд: высота падения 580 м (Новая Зеландия, юго-запад острова Южный (Милфорд-Саунд))."
    }
  },
  {
    "id": "m4_wf_angel_falls",
    "moduleId": "module4",
    "submoduleId": "m4_waterfalls",
    "category": "waterfalls",
    "categoryRu": "Водопады",
    "difficulty": "Стандартный",
    "name": "Анхель (Керепакупаи-Меру)",
    "aliases": [
      "Керепакупаи-Меру",
      "Сальто Анхель"
    ],
    "region": "Южная Америка",
    "locationDesc": "Южная Америка (Бассейн р. Ориноко (на р. Чурун — приток р. Карони, Венесуэла, высочайший водопад Земли), высота 1054 м)",
    "mapPrompt": "Покажите водопад: Анхель (Керепакупаи-Меру)",
    "geometryType": "point",
    "lat": 5.97,
    "lng": -62.53,
    "hitRadiusKm": 90,
    "bounds": null,
    "badgeColor": "teal",
    "dropHeightM": 1054,
    "riverName": "Бассейн р. Ориноко (на р. Чурун — приток р. Карони, Венесуэла, высочайший водопад Земли)",
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите высоту падения и реку/местоположение водопада: Анхель (Керепакупаи-Меру)",
      "backMainAnswer": "1054 м • Бассейн р. Ориноко (на р. Чурун — приток р. Карони, Венесуэла, высочайший водопад Земли) (Южная Америка)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Южная Америка"
        },
        {
          "label": "Высота падения",
          "value": "1054 м"
        },
        {
          "label": "Река / Локация",
          "value": "Бассейн р. Ориноко (на р. Чурун — приток р. Карони, Венесуэла, высочайший водопад Земли)"
        }
      ],
      "backNote": "Высочайший водопад в мире (1 054 м, высота непрерывного падения 807 м). Назван в честь лётчика Джеймса Эйнджела."
    }
  },
  {
    "id": "m4_wf_tugela_falls",
    "moduleId": "module4",
    "submoduleId": "m4_waterfalls",
    "category": "waterfalls",
    "categoryRu": "Водопады",
    "difficulty": "Стандартный",
    "name": "Тугела",
    "aliases": [],
    "region": "Африка",
    "locationDesc": "Африка (Восточный обрыв Драконовых гор, р. Тугела, ЮАР (2-й по высоте водопад Земли), высота 933 м)",
    "mapPrompt": "Покажите водопад: Тугела",
    "geometryType": "point",
    "lat": -28.75,
    "lng": 28.89,
    "hitRadiusKm": 90,
    "bounds": null,
    "badgeColor": "teal",
    "dropHeightM": 933,
    "riverName": "Восточный обрыв Драконовых гор, р. Тугела, ЮАР (2-й по высоте водопад Земли)",
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите высоту падения и реку/местоположение водопада: Тугела",
      "backMainAnswer": "933 м • Восточный обрыв Драконовых гор, р. Тугела, ЮАР (2-й по высоте водопад Земли) (Африка)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Африка"
        },
        {
          "label": "Высота падения",
          "value": "933 м"
        },
        {
          "label": "Река / Локация",
          "value": "Восточный обрыв Драконовых гор, р. Тугела, ЮАР (2-й по высоте водопад Земли)"
        }
      ],
      "backNote": "Второй по высоте водопад мира (933 м, 5 каскадов)."
    }
  },
  {
    "id": "m4_wf_tres_hermanas",
    "moduleId": "module4",
    "submoduleId": "m4_waterfalls",
    "category": "waterfalls",
    "categoryRu": "Водопады",
    "difficulty": "Стандартный",
    "name": "Три сестры (Лас-Трес-Эрманас)",
    "aliases": [
      "Лас-Трес-Эрманас"
    ],
    "region": "Южная Америка",
    "locationDesc": "Южная Америка (Юг Перу, регион Хунин, бассейн реки Апуримак (3-й по высоте водопад Земли), высота 914 м)",
    "mapPrompt": "Покажите водопад: Три сестры (Лас-Трес-Эрманас)",
    "geometryType": "point",
    "lat": -12.43,
    "lng": -73.3,
    "hitRadiusKm": 90,
    "bounds": null,
    "badgeColor": "teal",
    "dropHeightM": 914,
    "riverName": "Юг Перу, регион Хунин, бассейн реки Апуримак (3-й по высоте водопад Земли)",
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите высоту падения и реку/местоположение водопада: Три сестры (Лас-Трес-Эрманас)",
      "backMainAnswer": "914 м • Юг Перу, регион Хунин, бассейн реки Апуримак (3-й по высоте водопад Земли) (Южная Америка)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Южная Америка"
        },
        {
          "label": "Высота падения",
          "value": "914 м"
        },
        {
          "label": "Река / Локация",
          "value": "Юг Перу, регион Хунин, бассейн реки Апуримак (3-й по высоте водопад Земли)"
        }
      ],
      "backNote": "Третий по высоте водопад мира (914 м)."
    }
  },
  {
    "id": "m4_wf_khone_falls",
    "moduleId": "module4",
    "submoduleId": "m4_waterfalls",
    "category": "waterfalls",
    "categoryRu": "Водопады",
    "difficulty": "Стандартный",
    "name": "Кхон (Кон)",
    "aliases": [
      "водопады Кон"
    ],
    "region": "Евразия",
    "locationDesc": "Евразия (Река Меконг, граница Лаоса и Камбоджи (самый широкий водопад Земли — ширина 12-13 км), высота 21 м)",
    "mapPrompt": "Покажите водопад: Кхон (Кон)",
    "geometryType": "point",
    "lat": 13.95,
    "lng": 105.93,
    "hitRadiusKm": 90,
    "bounds": null,
    "badgeColor": "teal",
    "dropHeightM": 21,
    "riverName": "Река Меконг, граница Лаоса и Камбоджи (самый широкий водопад Земли — ширина 12-13 км)",
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите высоту падения и реку/местоположение водопада: Кхон (Кон)",
      "backMainAnswer": "21 м • Река Меконг, граница Лаоса и Камбоджи (самый широкий водопад Земли — ширина 12-13 км) (Евразия)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Высота падения",
          "value": "21 м"
        },
        {
          "label": "Река / Локация",
          "value": "Река Меконг, граница Лаоса и Камбоджи (самый широкий водопад Земли — ширина 12-13 км)"
        }
      ],
      "backNote": "Самый широкий водопад в мире (12-13 км вдоль русла Меконга). Расход воды до 11 000 м³/с."
    }
  },
  {
    "id": "m4_wf_iguazu_falls",
    "moduleId": "module4",
    "submoduleId": "m4_waterfalls",
    "category": "waterfalls",
    "categoryRu": "Водопады",
    "difficulty": "Стандартный",
    "name": "Игуасу",
    "aliases": [
      "Глотка Дьявола"
    ],
    "region": "Южная Америка",
    "locationDesc": "Южная Америка (Река Игуасу, граница Бразилии и Аргентины (самый мощный водопад Земли, 275 протоков), высота 82 м)",
    "mapPrompt": "Покажите водопад: Игуасу",
    "geometryType": "point",
    "lat": -25.69,
    "lng": -54.43,
    "hitRadiusKm": 90,
    "bounds": null,
    "badgeColor": "teal",
    "dropHeightM": 82,
    "riverName": "Река Игуасу, граница Бразилии и Аргентины (самый мощный водопад Земли, 275 протоков)",
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите высоту падения и реку/местоположение водопада: Игуасу",
      "backMainAnswer": "82 м • Река Игуасу, граница Бразилии и Аргентины (самый мощный водопад Земли, 275 протоков) (Южная Америка)",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Южная Америка"
        },
        {
          "label": "Высота падения",
          "value": "82 м"
        },
        {
          "label": "Река / Локация",
          "value": "Река Игуасу, граница Бразилии и Аргентины (самый мощный водопад Земли, 275 протоков)"
        }
      ],
      "backNote": "Самый мощный водопад в мире: расход воды в паводок до 13 000 м³/с (рекорд 45 700 м³/с в июне 2014 г.)."
    }
  },
  {
    "id": "m4_lk_alakol",
    "moduleId": "module4",
    "submoduleId": "m4_lakes_eurasia",
    "category": "lakes",
    "categoryRu": "Озёра",
    "difficulty": "Стандартный",
    "name": "Алаколь",
    "aliases": [],
    "region": "Евразия",
    "locationDesc": "Евразия (Тектоническое (солёное), глубина 54 м)",
    "mapPrompt": "Покажите озеро: Алаколь",
    "geometryType": "point",
    "lat": 46.1,
    "lng": 81.8,
    "hitRadiusKm": 200,
    "bounds": null,
    "badgeColor": "blue",
    "continent": "eurasia",
    "basinGenesis": "Тектоническое (солёное)",
    "maxDepthM": 54,
    "areaKm2": 2696,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, происхождение котловины и макс. глубину озера: Алаколь",
      "backMainAnswer": "Евразия • Тектоническое (солёное) • 54 м",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Генезис котловины",
          "value": "Тектоническое (солёное)"
        },
        {
          "label": "Максимальная глубина",
          "value": "54 м"
        },
        {
          "label": "Площадь",
          "value": "2696 км²"
        }
      ],
      "backNote": "Озеро Алаколь: котловина Тектоническое (солёное), макс. глубина 54 м."
    }
  },
  {
    "id": "m4_lk_aral_sea",
    "moduleId": "module4",
    "submoduleId": "m4_lakes_eurasia",
    "category": "lakes",
    "categoryRu": "Озёра",
    "difficulty": "Стандартный",
    "name": "Аральское море",
    "aliases": [
      "Малое Аральское",
      "Большой Арал"
    ],
    "region": "Евразия",
    "locationDesc": "Евразия (Реликтовое тектоническое (остаточное), глубина 68 м)",
    "mapPrompt": "Покажите озеро: Аральское море",
    "geometryType": "point",
    "lat": 45.0,
    "lng": 60.0,
    "hitRadiusKm": 200,
    "bounds": null,
    "badgeColor": "blue",
    "continent": "eurasia",
    "basinGenesis": "Реликтовое тектоническое (остаточное)",
    "maxDepthM": 68,
    "areaKm2": 8300,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, происхождение котловины и макс. глубину озера: Аральское море",
      "backMainAnswer": "Евразия • Реликтовое тектоническое (остаточное) • 68 м",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Генезис котловины",
          "value": "Реликтовое тектоническое (остаточное)"
        },
        {
          "label": "Максимальная глубина",
          "value": "68 м"
        },
        {
          "label": "Площадь",
          "value": "8300 км²"
        }
      ],
      "backNote": "Озеро Аральское море: котловина Реликтовое тектоническое (остаточное), макс. глубина 68 м."
    }
  },
  {
    "id": "m4_lk_baikal",
    "moduleId": "module4",
    "submoduleId": "m4_lakes_eurasia",
    "category": "lakes",
    "categoryRu": "Озёра",
    "difficulty": "Стандартный",
    "name": "Байкал",
    "aliases": [],
    "region": "Евразия",
    "locationDesc": "Евразия (Тектонический грабен (рифтовое), глубина 1642 м)",
    "mapPrompt": "Покажите озеро: Байкал",
    "geometryType": "point",
    "lat": 53.5,
    "lng": 108.0,
    "hitRadiusKm": 300,
    "bounds": null,
    "badgeColor": "blue",
    "continent": "eurasia",
    "basinGenesis": "Тектонический грабен (рифтовое)",
    "maxDepthM": 1642,
    "areaKm2": 31722,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, происхождение котловины и макс. глубину озера: Байкал",
      "backMainAnswer": "Евразия • Тектонический грабен (рифтовое) • 1642 м",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Генезис котловины",
          "value": "Тектонический грабен (рифтовое)"
        },
        {
          "label": "Максимальная глубина",
          "value": "1642 м"
        },
        {
          "label": "Площадь",
          "value": "31722 км²"
        }
      ],
      "backNote": "Глубочайшее озеро мира (1 642 м), древнейшее (25-30 млн лет) и самое чистое. 20% мировых запасов незамёрзшей пресной воды."
    }
  },
  {
    "id": "m4_lk_balaton",
    "moduleId": "module4",
    "submoduleId": "m4_lakes_eurasia",
    "category": "lakes",
    "categoryRu": "Озёра",
    "difficulty": "Стандартный",
    "name": "Балатон",
    "aliases": [],
    "region": "Евразия",
    "locationDesc": "Евразия (Тектоническое ('Венгерское море'), глубина 12 м)",
    "mapPrompt": "Покажите озеро: Балатон",
    "geometryType": "point",
    "lat": 46.85,
    "lng": 17.75,
    "hitRadiusKm": 200,
    "bounds": null,
    "badgeColor": "blue",
    "continent": "eurasia",
    "basinGenesis": "Тектоническое ('Венгерское море')",
    "maxDepthM": 12,
    "areaKm2": 594,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, происхождение котловины и макс. глубину озера: Балатон",
      "backMainAnswer": "Евразия • Тектоническое ('Венгерское море') • 12 м",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Генезис котловины",
          "value": "Тектоническое ('Венгерское море')"
        },
        {
          "label": "Максимальная глубина",
          "value": "12 м"
        },
        {
          "label": "Площадь",
          "value": "594 км²"
        }
      ],
      "backNote": "Озеро Балатон: котловина Тектоническое ('Венгерское море'), макс. глубина 12 м."
    }
  },
  {
    "id": "m4_lk_balkhash",
    "moduleId": "module4",
    "submoduleId": "m4_lakes_eurasia",
    "category": "lakes",
    "categoryRu": "Озёра",
    "difficulty": "Стандартный",
    "name": "Балхаш",
    "aliases": [],
    "region": "Евразия",
    "locationDesc": "Евразия (Тектоническое полубессточное, глубина 26 м)",
    "mapPrompt": "Покажите озеро: Балхаш",
    "geometryType": "point",
    "lat": 46.5,
    "lng": 74.5,
    "hitRadiusKm": 280,
    "bounds": null,
    "badgeColor": "blue",
    "continent": "eurasia",
    "basinGenesis": "Тектоническое полубессточное",
    "maxDepthM": 26,
    "areaKm2": 18200,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, происхождение котловины и макс. глубину озера: Балхаш",
      "backMainAnswer": "Евразия • Тектоническое полубессточное • 26 м",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Генезис котловины",
          "value": "Тектоническое полубессточное"
        },
        {
          "label": "Максимальная глубина",
          "value": "26 м"
        },
        {
          "label": "Площадь",
          "value": "18200 км²"
        }
      ],
      "backNote": "Уникальное озеро: западная половина пресная (питается р. Или), восточная — солоноватая."
    }
  },
  {
    "id": "m4_lk_baskunchak",
    "moduleId": "module4",
    "submoduleId": "m4_lakes_eurasia",
    "category": "lakes",
    "categoryRu": "Озёра",
    "difficulty": "Стандартный",
    "name": "Баскунчак",
    "aliases": [],
    "region": "Евразия",
    "locationDesc": "Евразия (Тектоническое соляное (соляной купол), глубина 3 м)",
    "mapPrompt": "Покажите озеро: Баскунчак",
    "geometryType": "point",
    "lat": 48.2,
    "lng": 46.9,
    "hitRadiusKm": 120,
    "bounds": null,
    "badgeColor": "blue",
    "continent": "eurasia",
    "basinGenesis": "Тектоническое соляное (соляной купол)",
    "maxDepthM": 3,
    "areaKm2": 115,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, происхождение котловины и макс. глубину озера: Баскунчак",
      "backMainAnswer": "Евразия • Тектоническое соляное (соляной купол) • 3 м",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Генезис котловины",
          "value": "Тектоническое соляное (соляной купол)"
        },
        {
          "label": "Максимальная глубина",
          "value": "3 м"
        },
        {
          "label": "Площадь",
          "value": "115 км²"
        }
      ],
      "backNote": "Крупнейшее самосадочное соляное озеро России (солёность до 300‰)."
    }
  },
  {
    "id": "m4_lk_lake_constance",
    "moduleId": "module4",
    "submoduleId": "m4_lakes_eurasia",
    "category": "lakes",
    "categoryRu": "Озёра",
    "difficulty": "Стандартный",
    "name": "Боденское озеро",
    "aliases": [],
    "region": "Евразия",
    "locationDesc": "Евразия (Ледниково-тектоническое (Альпы, Рейн), глубина 254 м)",
    "mapPrompt": "Покажите озеро: Боденское озеро",
    "geometryType": "point",
    "lat": 47.6,
    "lng": 9.4,
    "hitRadiusKm": 200,
    "bounds": null,
    "badgeColor": "blue",
    "continent": "eurasia",
    "basinGenesis": "Ледниково-тектоническое (Альпы, Рейн)",
    "maxDepthM": 254,
    "areaKm2": 536,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, происхождение котловины и макс. глубину озера: Боденское озеро",
      "backMainAnswer": "Евразия • Ледниково-тектоническое (Альпы, Рейн) • 254 м",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Генезис котловины",
          "value": "Ледниково-тектоническое (Альпы, Рейн)"
        },
        {
          "label": "Максимальная глубина",
          "value": "254 м"
        },
        {
          "label": "Площадь",
          "value": "536 км²"
        }
      ],
      "backNote": "Озеро Боденское озеро: котловина Ледниково-тектоническое (Альпы, Рейн), макс. глубина 254 м."
    }
  },
  {
    "id": "m4_lk_lake_van",
    "moduleId": "module4",
    "submoduleId": "m4_lakes_eurasia",
    "category": "lakes",
    "categoryRu": "Озёра",
    "difficulty": "Стандартный",
    "name": "Ван",
    "aliases": [],
    "region": "Евразия",
    "locationDesc": "Евразия (Вулканическое подпрудное (содовое), глубина 451 м)",
    "mapPrompt": "Покажите озеро: Ван",
    "geometryType": "point",
    "lat": 38.6,
    "lng": 42.9,
    "hitRadiusKm": 220,
    "bounds": null,
    "badgeColor": "blue",
    "continent": "eurasia",
    "basinGenesis": "Вулканическое подпрудное (содовое)",
    "maxDepthM": 451,
    "areaKm2": 3755,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, происхождение котловины и макс. глубину озера: Ван",
      "backMainAnswer": "Евразия • Вулканическое подпрудное (содовое) • 451 м",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Генезис котловины",
          "value": "Вулканическое подпрудное (содовое)"
        },
        {
          "label": "Максимальная глубина",
          "value": "451 м"
        },
        {
          "label": "Площадь",
          "value": "3755 км²"
        }
      ],
      "backNote": "Крупнейшее содовое озеро в мире (Армянское нагорье, Турция)."
    }
  },
  {
    "id": "m4_lk_vanern",
    "moduleId": "module4",
    "submoduleId": "m4_lakes_eurasia",
    "category": "lakes",
    "categoryRu": "Озёра",
    "difficulty": "Стандартный",
    "name": "Венерн",
    "aliases": [],
    "region": "Евразия",
    "locationDesc": "Евразия (Ледниково-тектоническое (крупнейшее в ЕС), глубина 106 м)",
    "mapPrompt": "Покажите озеро: Венерн",
    "geometryType": "point",
    "lat": 58.9,
    "lng": 13.2,
    "hitRadiusKm": 200,
    "bounds": null,
    "badgeColor": "blue",
    "continent": "eurasia",
    "basinGenesis": "Ледниково-тектоническое (крупнейшее в ЕС)",
    "maxDepthM": 106,
    "areaKm2": 5650,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, происхождение котловины и макс. глубину озера: Венерн",
      "backMainAnswer": "Евразия • Ледниково-тектоническое (крупнейшее в ЕС) • 106 м",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Генезис котловины",
          "value": "Ледниково-тектоническое (крупнейшее в ЕС)"
        },
        {
          "label": "Максимальная глубина",
          "value": "106 м"
        },
        {
          "label": "Площадь",
          "value": "5650 км²"
        }
      ],
      "backNote": "Озеро Венерн: котловина Ледниково-тектоническое (крупнейшее в ЕС), макс. глубина 106 м."
    }
  },
  {
    "id": "m4_lk_vattern",
    "moduleId": "module4",
    "submoduleId": "m4_lakes_eurasia",
    "category": "lakes",
    "categoryRu": "Озёра",
    "difficulty": "Стандартный",
    "name": "Веттерн",
    "aliases": [],
    "region": "Евразия",
    "locationDesc": "Евразия (Тектонический грабен (Швеция), глубина 128 м)",
    "mapPrompt": "Покажите озеро: Веттерн",
    "geometryType": "point",
    "lat": 58.4,
    "lng": 14.5,
    "hitRadiusKm": 200,
    "bounds": null,
    "badgeColor": "blue",
    "continent": "eurasia",
    "basinGenesis": "Тектонический грабен (Швеция)",
    "maxDepthM": 128,
    "areaKm2": 1893,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, происхождение котловины и макс. глубину озера: Веттерн",
      "backMainAnswer": "Евразия • Тектонический грабен (Швеция) • 128 м",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Генезис котловины",
          "value": "Тектонический грабен (Швеция)"
        },
        {
          "label": "Максимальная глубина",
          "value": "128 м"
        },
        {
          "label": "Площадь",
          "value": "1893 км²"
        }
      ],
      "backNote": "Озеро Веттерн: котловина Тектонический грабен (Швеция), макс. глубина 128 м."
    }
  },
  {
    "id": "m4_lk_dongting",
    "moduleId": "module4",
    "submoduleId": "m4_lakes_eurasia",
    "category": "lakes",
    "categoryRu": "Озёра",
    "difficulty": "Стандартный",
    "name": "Дунтинху",
    "aliases": [],
    "region": "Евразия",
    "locationDesc": "Евразия (Пойменно-тектоническое (бассейн Янцзы, Китай), глубина 31 м)",
    "mapPrompt": "Покажите озеро: Дунтинху",
    "geometryType": "point",
    "lat": 29.3,
    "lng": 112.9,
    "hitRadiusKm": 200,
    "bounds": null,
    "badgeColor": "blue",
    "continent": "eurasia",
    "basinGenesis": "Пойменно-тектоническое (бассейн Янцзы, Китай)",
    "maxDepthM": 31,
    "areaKm2": 2820,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, происхождение котловины и макс. глубину озера: Дунтинху",
      "backMainAnswer": "Евразия • Пойменно-тектоническое (бассейн Янцзы, Китай) • 31 м",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Генезис котловины",
          "value": "Пойменно-тектоническое (бассейн Янцзы, Китай)"
        },
        {
          "label": "Максимальная глубина",
          "value": "31 м"
        },
        {
          "label": "Площадь",
          "value": "2820 км²"
        }
      ],
      "backNote": "Озеро Дунтинху: котловина Пойменно-тектоническое (бассейн Янцзы, Китай), макс. глубина 31 м."
    }
  },
  {
    "id": "m4_lk_lake_geneva",
    "moduleId": "module4",
    "submoduleId": "m4_lakes_eurasia",
    "category": "lakes",
    "categoryRu": "Озёра",
    "difficulty": "Стандартный",
    "name": "Женевское озеро (Леман)",
    "aliases": [
      "Леман"
    ],
    "region": "Евразия",
    "locationDesc": "Евразия (Ледниково-тектоническое (Альпы, Рона), глубина 310 м)",
    "mapPrompt": "Покажите озеро: Женевское озеро (Леман)",
    "geometryType": "point",
    "lat": 46.4,
    "lng": 6.5,
    "hitRadiusKm": 200,
    "bounds": null,
    "badgeColor": "blue",
    "continent": "eurasia",
    "basinGenesis": "Ледниково-тектоническое (Альпы, Рона)",
    "maxDepthM": 310,
    "areaKm2": 580,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, происхождение котловины и макс. глубину озера: Женевское озеро (Леман)",
      "backMainAnswer": "Евразия • Ледниково-тектоническое (Альпы, Рона) • 310 м",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Генезис котловины",
          "value": "Ледниково-тектоническое (Альпы, Рона)"
        },
        {
          "label": "Максимальная глубина",
          "value": "310 м"
        },
        {
          "label": "Площадь",
          "value": "580 км²"
        }
      ],
      "backNote": "Озеро Женевское озеро (Леман): котловина Ледниково-тектоническое (Альпы, Рона), макс. глубина 310 м."
    }
  },
  {
    "id": "m4_lk_zaysan",
    "moduleId": "module4",
    "submoduleId": "m4_lakes_eurasia",
    "category": "lakes",
    "categoryRu": "Озёра",
    "difficulty": "Стандартный",
    "name": "Зайсан",
    "aliases": [],
    "region": "Евразия",
    "locationDesc": "Евразия (Тектоническое (бассейн Иртыша, Казахстан), глубина 15 м)",
    "mapPrompt": "Покажите озеро: Зайсан",
    "geometryType": "point",
    "lat": 48.0,
    "lng": 84.0,
    "hitRadiusKm": 200,
    "bounds": null,
    "badgeColor": "blue",
    "continent": "eurasia",
    "basinGenesis": "Тектоническое (бассейн Иртыша, Казахстан)",
    "maxDepthM": 15,
    "areaKm2": 1810,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, происхождение котловины и макс. глубину озера: Зайсан",
      "backMainAnswer": "Евразия • Тектоническое (бассейн Иртыша, Казахстан) • 15 м",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Генезис котловины",
          "value": "Тектоническое (бассейн Иртыша, Казахстан)"
        },
        {
          "label": "Максимальная глубина",
          "value": "15 м"
        },
        {
          "label": "Площадь",
          "value": "1810 км²"
        }
      ],
      "backNote": "Озеро Зайсан: котловина Тектоническое (бассейн Иртыша, Казахстан), макс. глубина 15 м."
    }
  },
  {
    "id": "m4_lk_issyk_kul",
    "moduleId": "module4",
    "submoduleId": "m4_lakes_eurasia",
    "category": "lakes",
    "categoryRu": "Озёра",
    "difficulty": "Стандартный",
    "name": "Иссык-Куль",
    "aliases": [],
    "region": "Евразия",
    "locationDesc": "Евразия (Тектоническое бессточное горное, глубина 702 м)",
    "mapPrompt": "Покажите озеро: Иссык-Куль",
    "geometryType": "point",
    "lat": 42.4,
    "lng": 77.2,
    "hitRadiusKm": 220,
    "bounds": null,
    "badgeColor": "blue",
    "continent": "eurasia",
    "basinGenesis": "Тектоническое бессточное горное",
    "maxDepthM": 702,
    "areaKm2": 6236,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, происхождение котловины и макс. глубину озера: Иссык-Куль",
      "backMainAnswer": "Евразия • Тектоническое бессточное горное • 702 м",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Генезис котловины",
          "value": "Тектоническое бессточное горное"
        },
        {
          "label": "Максимальная глубина",
          "value": "702 м"
        },
        {
          "label": "Площадь",
          "value": "6236 км²"
        }
      ],
      "backNote": "Глубочайшее горное озеро мира (702 м, горы Тянь-Шань, 'горячее озеро' — не замерзает)."
    }
  },
  {
    "id": "m4_lk_caspian_sea",
    "moduleId": "module4",
    "submoduleId": "m4_lakes_eurasia",
    "category": "lakes",
    "categoryRu": "Озёра",
    "difficulty": "Стандартный",
    "name": "Каспийское море-озеро",
    "aliases": [],
    "region": "Евразия",
    "locationDesc": "Евразия (Остаточное реликтовое (океан Тетис), глубина 1025 м)",
    "mapPrompt": "Покажите озеро: Каспийское море-озеро",
    "geometryType": "point",
    "lat": 42.0,
    "lng": 51.0,
    "hitRadiusKm": 500,
    "bounds": null,
    "badgeColor": "blue",
    "continent": "eurasia",
    "basinGenesis": "Остаточное реликтовое (океан Тетис)",
    "maxDepthM": 1025,
    "areaKm2": 371000,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, происхождение котловины и макс. глубину озера: Каспийское море-озеро",
      "backMainAnswer": "Евразия • Остаточное реликтовое (океан Тетис) • 1025 м",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Генезис котловины",
          "value": "Остаточное реликтовое (океан Тетис)"
        },
        {
          "label": "Максимальная глубина",
          "value": "1025 м"
        },
        {
          "label": "Площадь",
          "value": "371000 км²"
        }
      ],
      "backNote": "Крупнейшее по площади озеро мира (371 тыс. км²). Самое длинное озеро Земли (~1 200 км)."
    }
  },
  {
    "id": "m4_lk_qinghai_lake",
    "moduleId": "module4",
    "submoduleId": "m4_lakes_eurasia",
    "category": "lakes",
    "categoryRu": "Озёра",
    "difficulty": "Стандартный",
    "name": "Кукунор (Цинхай)",
    "aliases": [
      "Цинхай"
    ],
    "region": "Евразия",
    "locationDesc": "Евразия (Тектоническое горное бессточное, глубина 33 м)",
    "mapPrompt": "Покажите озеро: Кукунор (Цинхай)",
    "geometryType": "point",
    "lat": 36.9,
    "lng": 100.2,
    "hitRadiusKm": 200,
    "bounds": null,
    "badgeColor": "blue",
    "continent": "eurasia",
    "basinGenesis": "Тектоническое горное бессточное",
    "maxDepthM": 33,
    "areaKm2": 4489,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, происхождение котловины и макс. глубину озера: Кукунор (Цинхай)",
      "backMainAnswer": "Евразия • Тектоническое горное бессточное • 33 м",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Генезис котловины",
          "value": "Тектоническое горное бессточное"
        },
        {
          "label": "Максимальная глубина",
          "value": "33 м"
        },
        {
          "label": "Площадь",
          "value": "4489 км²"
        }
      ],
      "backNote": "Озеро Кукунор (Цинхай): котловина Тектоническое горное бессточное, макс. глубина 33 м."
    }
  },
  {
    "id": "m4_lk_ladoga",
    "moduleId": "module4",
    "submoduleId": "m4_lakes_eurasia",
    "category": "lakes",
    "categoryRu": "Озёра",
    "difficulty": "Стандартный",
    "name": "Ладожское озеро",
    "aliases": [],
    "region": "Евразия",
    "locationDesc": "Евразия (Ледниково-тектоническое (крупнейшее в Европе), глубина 230 м)",
    "mapPrompt": "Покажите озеро: Ладожское озеро",
    "geometryType": "point",
    "lat": 61.0,
    "lng": 31.5,
    "hitRadiusKm": 250,
    "bounds": null,
    "badgeColor": "blue",
    "continent": "eurasia",
    "basinGenesis": "Ледниково-тектоническое (крупнейшее в Европе)",
    "maxDepthM": 230,
    "areaKm2": 17700,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, происхождение котловины и макс. глубину озера: Ладожское озеро",
      "backMainAnswer": "Евразия • Ледниково-тектоническое (крупнейшее в Европе) • 230 м",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Генезис котловины",
          "value": "Ледниково-тектоническое (крупнейшее в Европе)"
        },
        {
          "label": "Максимальная глубина",
          "value": "230 м"
        },
        {
          "label": "Площадь",
          "value": "17700 км²"
        }
      ],
      "backNote": "Крупнейшее пресноводное озеро Европы (бассейн р. Нева)."
    }
  },
  {
    "id": "m4_lk_lop_nor",
    "moduleId": "module4",
    "submoduleId": "m4_lakes_eurasia",
    "category": "lakes",
    "categoryRu": "Озёра",
    "difficulty": "Стандартный",
    "name": "Лобнор",
    "aliases": [],
    "region": "Евразия",
    "locationDesc": "Евразия (Блуждающее бессточное солончаковое, глубина 10 м)",
    "mapPrompt": "Покажите озеро: Лобнор",
    "geometryType": "point",
    "lat": 40.2,
    "lng": 90.5,
    "hitRadiusKm": 200,
    "bounds": null,
    "badgeColor": "blue",
    "continent": "eurasia",
    "basinGenesis": "Блуждающее бессточное солончаковое",
    "maxDepthM": 10,
    "areaKm2": 3000,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, происхождение котловины и макс. глубину озера: Лобнор",
      "backMainAnswer": "Евразия • Блуждающее бессточное солончаковое • 10 м",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Генезис котловины",
          "value": "Блуждающее бессточное солончаковое"
        },
        {
          "label": "Максимальная глубина",
          "value": "10 м"
        },
        {
          "label": "Площадь",
          "value": "3000 км²"
        }
      ],
      "backNote": "Блуждающее озеро в пустыне Такла-Макан, принимает р. Тарим."
    }
  },
  {
    "id": "m4_lk_dead_sea",
    "moduleId": "module4",
    "submoduleId": "m4_lakes_eurasia",
    "category": "lakes",
    "categoryRu": "Озёра",
    "difficulty": "Стандартный",
    "name": "Мёртвое море (озеро)",
    "aliases": [],
    "region": "Евразия",
    "locationDesc": "Евразия (Тектонический рифт (грабен Эль-Гхор), глубина 306 м)",
    "mapPrompt": "Покажите озеро: Мёртвое море (озеро)",
    "geometryType": "point",
    "lat": 31.5,
    "lng": 35.5,
    "hitRadiusKm": 180,
    "bounds": null,
    "badgeColor": "blue",
    "continent": "eurasia",
    "basinGenesis": "Тектонический рифт (грабен Эль-Гхор)",
    "maxDepthM": 306,
    "areaKm2": 605,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, происхождение котловины и макс. глубину озера: Мёртвое море (озеро)",
      "backMainAnswer": "Евразия • Тектонический рифт (грабен Эль-Гхор) • 306 м",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Генезис котловины",
          "value": "Тектонический рифт (грабен Эль-Гхор)"
        },
        {
          "label": "Максимальная глубина",
          "value": "306 м"
        },
        {
          "label": "Площадь",
          "value": "605 км²"
        }
      ],
      "backNote": "Лежит в глубочайшей впадине суши (-430 м), самое солёное из больших озёр (до 270-340‰)."
    }
  },
  {
    "id": "m4_lk_onega",
    "moduleId": "module4",
    "submoduleId": "m4_lakes_eurasia",
    "category": "lakes",
    "categoryRu": "Озёра",
    "difficulty": "Стандартный",
    "name": "Онежское озеро",
    "aliases": [],
    "region": "Евразия",
    "locationDesc": "Евразия (Ледниково-тектоническое (второе в Европе), глубина 127 м)",
    "mapPrompt": "Покажите озеро: Онежское озеро",
    "geometryType": "point",
    "lat": 61.7,
    "lng": 35.4,
    "hitRadiusKm": 220,
    "bounds": null,
    "badgeColor": "blue",
    "continent": "eurasia",
    "basinGenesis": "Ледниково-тектоническое (второе в Европе)",
    "maxDepthM": 127,
    "areaKm2": 9720,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, происхождение котловины и макс. глубину озера: Онежское озеро",
      "backMainAnswer": "Евразия • Ледниково-тектоническое (второе в Европе) • 127 м",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Генезис котловины",
          "value": "Ледниково-тектоническое (второе в Европе)"
        },
        {
          "label": "Максимальная глубина",
          "value": "127 м"
        },
        {
          "label": "Площадь",
          "value": "9720 км²"
        }
      ],
      "backNote": "Озеро Онежское озеро: котловина Ледниково-тектоническое (второе в Европе), макс. глубина 127 м."
    }
  },
  {
    "id": "m4_lk_poyang_lake",
    "moduleId": "module4",
    "submoduleId": "m4_lakes_eurasia",
    "category": "lakes",
    "categoryRu": "Озёра",
    "difficulty": "Стандартный",
    "name": "Поянху",
    "aliases": [],
    "region": "Евразия",
    "locationDesc": "Евразия (Тектоническое пойменное (крупнейшее пресноводное Китая), глубина 25 м)",
    "mapPrompt": "Покажите озеро: Поянху",
    "geometryType": "point",
    "lat": 29.1,
    "lng": 116.3,
    "hitRadiusKm": 200,
    "bounds": null,
    "badgeColor": "blue",
    "continent": "eurasia",
    "basinGenesis": "Тектоническое пойменное (крупнейшее пресноводное Китая)",
    "maxDepthM": 25,
    "areaKm2": 3585,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, происхождение котловины и макс. глубину озера: Поянху",
      "backMainAnswer": "Евразия • Тектоническое пойменное (крупнейшее пресноводное Китая) • 25 м",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Генезис котловины",
          "value": "Тектоническое пойменное (крупнейшее пресноводное Китая)"
        },
        {
          "label": "Максимальная глубина",
          "value": "25 м"
        },
        {
          "label": "Площадь",
          "value": "3585 км²"
        }
      ],
      "backNote": "Озеро Поянху: котловина Тектоническое пойменное (крупнейшее пресноводное Китая), макс. глубина 25 м."
    }
  },
  {
    "id": "m4_lk_saimaa",
    "moduleId": "module4",
    "submoduleId": "m4_lakes_eurasia",
    "category": "lakes",
    "categoryRu": "Озёра",
    "difficulty": "Стандартный",
    "name": "Сайма",
    "aliases": [],
    "region": "Евразия",
    "locationDesc": "Евразия (Ледниково-подпрудное (озерная система Финляндии), глубина 82 м)",
    "mapPrompt": "Покажите озеро: Сайма",
    "geometryType": "point",
    "lat": 61.2,
    "lng": 28.3,
    "hitRadiusKm": 200,
    "bounds": null,
    "badgeColor": "blue",
    "continent": "eurasia",
    "basinGenesis": "Ледниково-подпрудное (озерная система Финляндии)",
    "maxDepthM": 82,
    "areaKm2": 4400,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, происхождение котловины и макс. глубину озера: Сайма",
      "backMainAnswer": "Евразия • Ледниково-подпрудное (озерная система Финляндии) • 82 м",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Генезис котловины",
          "value": "Ледниково-подпрудное (озерная система Финляндии)"
        },
        {
          "label": "Максимальная глубина",
          "value": "82 м"
        },
        {
          "label": "Площадь",
          "value": "4400 км²"
        }
      ],
      "backNote": "Озеро Сайма: котловина Ледниково-подпрудное (озерная система Финляндии), макс. глубина 82 м."
    }
  },
  {
    "id": "m4_lk_sarez_lake",
    "moduleId": "module4",
    "submoduleId": "m4_lakes_eurasia",
    "category": "lakes",
    "categoryRu": "Озёра",
    "difficulty": "Стандартный",
    "name": "Сарезское озеро",
    "aliases": [],
    "region": "Евразия",
    "locationDesc": "Евразия (Завальное подпрудное (Усойский завал 1911 г.), глубина 505 м)",
    "mapPrompt": "Покажите озеро: Сарезское озеро",
    "geometryType": "point",
    "lat": 38.2,
    "lng": 72.6,
    "hitRadiusKm": 120,
    "bounds": null,
    "badgeColor": "blue",
    "continent": "eurasia",
    "basinGenesis": "Завальное подпрудное (Усойский завал 1911 г.)",
    "maxDepthM": 505,
    "areaKm2": 80,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, происхождение котловины и макс. глубину озера: Сарезское озеро",
      "backMainAnswer": "Евразия • Завальное подпрудное (Усойский завал 1911 г.) • 505 м",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Генезис котловины",
          "value": "Завальное подпрудное (Усойский завал 1911 г.)"
        },
        {
          "label": "Максимальная глубина",
          "value": "505 м"
        },
        {
          "label": "Площадь",
          "value": "80 км²"
        }
      ],
      "backNote": "Глубочайшее высокогорное озеро мира (Памир, h=3263 м, глубина до 505 м). Возникло в 1911 г."
    }
  },
  {
    "id": "m4_lk_sevan",
    "moduleId": "module4",
    "submoduleId": "m4_lakes_eurasia",
    "category": "lakes",
    "categoryRu": "Озёра",
    "difficulty": "Стандартный",
    "name": "Севан",
    "aliases": [],
    "region": "Евразия",
    "locationDesc": "Евразия (Вулканическо-тектоническое (Кавказ, Армения), глубина 83 м)",
    "mapPrompt": "Покажите озеро: Севан",
    "geometryType": "point",
    "lat": 40.3,
    "lng": 45.3,
    "hitRadiusKm": 200,
    "bounds": null,
    "badgeColor": "blue",
    "continent": "eurasia",
    "basinGenesis": "Вулканическо-тектоническое (Кавказ, Армения)",
    "maxDepthM": 83,
    "areaKm2": 1240,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, происхождение котловины и макс. глубину озера: Севан",
      "backMainAnswer": "Евразия • Вулканическо-тектоническое (Кавказ, Армения) • 83 м",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Генезис котловины",
          "value": "Вулканическо-тектоническое (Кавказ, Армения)"
        },
        {
          "label": "Максимальная глубина",
          "value": "83 м"
        },
        {
          "label": "Площадь",
          "value": "1240 км²"
        }
      ],
      "backNote": "Озеро Севан: котловина Вулканическо-тектоническое (Кавказ, Армения), макс. глубина 83 м."
    }
  },
  {
    "id": "m4_lk_teletskoye",
    "moduleId": "module4",
    "submoduleId": "m4_lakes_eurasia",
    "category": "lakes",
    "categoryRu": "Озёра",
    "difficulty": "Стандартный",
    "name": "Телецкое озеро (Алтын-Кёль)",
    "aliases": [
      "Алтын-Кёль"
    ],
    "region": "Евразия",
    "locationDesc": "Евразия (Тектонический грабен (Алтай, исток р. Бия), глубина 325 м)",
    "mapPrompt": "Покажите озеро: Телецкое озеро (Алтын-Кёль)",
    "geometryType": "point",
    "lat": 51.5,
    "lng": 87.7,
    "hitRadiusKm": 200,
    "bounds": null,
    "badgeColor": "blue",
    "continent": "eurasia",
    "basinGenesis": "Тектонический грабен (Алтай, исток р. Бия)",
    "maxDepthM": 325,
    "areaKm2": 223,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, происхождение котловины и макс. глубину озера: Телецкое озеро (Алтын-Кёль)",
      "backMainAnswer": "Евразия • Тектонический грабен (Алтай, исток р. Бия) • 325 м",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Генезис котловины",
          "value": "Тектонический грабен (Алтай, исток р. Бия)"
        },
        {
          "label": "Максимальная глубина",
          "value": "325 м"
        },
        {
          "label": "Площадь",
          "value": "223 км²"
        }
      ],
      "backNote": "Озеро Телецкое озеро (Алтын-Кёль): котловина Тектонический грабен (Алтай, исток р. Бия), макс. глубина 325 м."
    }
  },
  {
    "id": "m4_lk_tengiz",
    "moduleId": "module4",
    "submoduleId": "m4_lakes_eurasia",
    "category": "lakes",
    "categoryRu": "Озёра",
    "difficulty": "Стандартный",
    "name": "Тенгиз",
    "aliases": [],
    "region": "Евразия",
    "locationDesc": "Евразия (Тектоническое горько-солёное (Казахстан), глубина 8 м)",
    "mapPrompt": "Покажите озеро: Тенгиз",
    "geometryType": "point",
    "lat": 50.4,
    "lng": 68.9,
    "hitRadiusKm": 200,
    "bounds": null,
    "badgeColor": "blue",
    "continent": "eurasia",
    "basinGenesis": "Тектоническое горько-солёное (Казахстан)",
    "maxDepthM": 8,
    "areaKm2": 1590,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, происхождение котловины и макс. глубину озера: Тенгиз",
      "backMainAnswer": "Евразия • Тектоническое горько-солёное (Казахстан) • 8 м",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Генезис котловины",
          "value": "Тектоническое горько-солёное (Казахстан)"
        },
        {
          "label": "Максимальная глубина",
          "value": "8 м"
        },
        {
          "label": "Площадь",
          "value": "1590 км²"
        }
      ],
      "backNote": "Озеро Тенгиз: котловина Тектоническое горько-солёное (Казахстан), макс. глубина 8 м."
    }
  },
  {
    "id": "m4_lk_lake_tuz",
    "moduleId": "module4",
    "submoduleId": "m4_lakes_eurasia",
    "category": "lakes",
    "categoryRu": "Озёра",
    "difficulty": "Стандартный",
    "name": "Туз",
    "aliases": [],
    "region": "Евразия",
    "locationDesc": "Евразия (Тектоническое соляное бессточное (Анатолия, Турция), глубина 2 м)",
    "mapPrompt": "Покажите озеро: Туз",
    "geometryType": "point",
    "lat": 38.8,
    "lng": 33.3,
    "hitRadiusKm": 200,
    "bounds": null,
    "badgeColor": "blue",
    "continent": "eurasia",
    "basinGenesis": "Тектоническое соляное бессточное (Анатолия, Турция)",
    "maxDepthM": 2,
    "areaKm2": 1665,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, происхождение котловины и макс. глубину озера: Туз",
      "backMainAnswer": "Евразия • Тектоническое соляное бессточное (Анатолия, Турция) • 2 м",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Генезис котловины",
          "value": "Тектоническое соляное бессточное (Анатолия, Турция)"
        },
        {
          "label": "Максимальная глубина",
          "value": "2 м"
        },
        {
          "label": "Площадь",
          "value": "1665 км²"
        }
      ],
      "backNote": "Озеро Туз: котловина Тектоническое соляное бессточное (Анатолия, Турция), макс. глубина 2 м."
    }
  },
  {
    "id": "m4_lk_lake_tai",
    "moduleId": "module4",
    "submoduleId": "m4_lakes_eurasia",
    "category": "lakes",
    "categoryRu": "Озёра",
    "difficulty": "Стандартный",
    "name": "Тайху",
    "aliases": [],
    "region": "Евразия",
    "locationDesc": "Евразия (Дельтовое пойменное (Китай, дельта Янцзы), глубина 5 м)",
    "mapPrompt": "Покажите озеро: Тайху",
    "geometryType": "point",
    "lat": 31.2,
    "lng": 120.2,
    "hitRadiusKm": 200,
    "bounds": null,
    "badgeColor": "blue",
    "continent": "eurasia",
    "basinGenesis": "Дельтовое пойменное (Китай, дельта Янцзы)",
    "maxDepthM": 5,
    "areaKm2": 2250,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, происхождение котловины и макс. глубину озера: Тайху",
      "backMainAnswer": "Евразия • Дельтовое пойменное (Китай, дельта Янцзы) • 5 м",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Генезис котловины",
          "value": "Дельтовое пойменное (Китай, дельта Янцзы)"
        },
        {
          "label": "Максимальная глубина",
          "value": "5 м"
        },
        {
          "label": "Площадь",
          "value": "2250 км²"
        }
      ],
      "backNote": "Озеро Тайху: котловина Дельтовое пойменное (Китай, дельта Янцзы), макс. глубина 5 м."
    }
  },
  {
    "id": "m4_lk_taymyr_lake",
    "moduleId": "module4",
    "submoduleId": "m4_lakes_eurasia",
    "category": "lakes",
    "categoryRu": "Озёра",
    "difficulty": "Стандартный",
    "name": "Таймыр",
    "aliases": [],
    "region": "Евразия",
    "locationDesc": "Евразия (Ледниково-тектоническое (п-ов Таймыр), глубина 26 м)",
    "mapPrompt": "Покажите озеро: Таймыр",
    "geometryType": "point",
    "lat": 74.5,
    "lng": 101.5,
    "hitRadiusKm": 220,
    "bounds": null,
    "badgeColor": "blue",
    "continent": "eurasia",
    "basinGenesis": "Ледниково-тектоническое (п-ов Таймыр)",
    "maxDepthM": 26,
    "areaKm2": 4560,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, происхождение котловины и макс. глубину озера: Таймыр",
      "backMainAnswer": "Евразия • Ледниково-тектоническое (п-ов Таймыр) • 26 м",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Генезис котловины",
          "value": "Ледниково-тектоническое (п-ов Таймыр)"
        },
        {
          "label": "Максимальная глубина",
          "value": "26 м"
        },
        {
          "label": "Площадь",
          "value": "4560 км²"
        }
      ],
      "backNote": "Самое крупное озеро мира, расположенное за Полярным кругом (74° с.ш.)."
    }
  },
  {
    "id": "m4_lk_tonle_sap",
    "moduleId": "module4",
    "submoduleId": "m4_lakes_eurasia",
    "category": "lakes",
    "categoryRu": "Озёра",
    "difficulty": "Стандартный",
    "name": "Тонлесап (Сап)",
    "aliases": [
      "Большое озеро Камбоджи"
    ],
    "region": "Евразия",
    "locationDesc": "Евразия (Пойменное пульсирующее ('Большое озеро' Камбоджи), глубина 12 м)",
    "mapPrompt": "Покажите озеро: Тонлесап (Сап)",
    "geometryType": "point",
    "lat": 12.9,
    "lng": 104.1,
    "hitRadiusKm": 200,
    "bounds": null,
    "badgeColor": "blue",
    "continent": "eurasia",
    "basinGenesis": "Пойменное пульсирующее ('Большое озеро' Камбоджи)",
    "maxDepthM": 12,
    "areaKm2": 2700,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, происхождение котловины и макс. глубину озера: Тонлесап (Сап)",
      "backMainAnswer": "Евразия • Пойменное пульсирующее ('Большое озеро' Камбоджи) • 12 м",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Генезис котловины",
          "value": "Пойменное пульсирующее ('Большое озеро' Камбоджи)"
        },
        {
          "label": "Максимальная глубина",
          "value": "12 м"
        },
        {
          "label": "Площадь",
          "value": "2700 км²"
        }
      ],
      "backNote": "Озеро Тонлесап (Сап): котловина Пойменное пульсирующее ('Большое озеро' Камбоджи), макс. глубина 12 м."
    }
  },
  {
    "id": "m4_lk_uvs_lake",
    "moduleId": "module4",
    "submoduleId": "m4_lakes_eurasia",
    "category": "lakes",
    "categoryRu": "Озёра",
    "difficulty": "Стандартный",
    "name": "Убсу-Нур (Увс-Нуур)",
    "aliases": [],
    "region": "Евразия",
    "locationDesc": "Евразия (Тектоническое бессточное солёное (Монголия/Тува), глубина 20 м)",
    "mapPrompt": "Покажите озеро: Убсу-Нур (Увс-Нуур)",
    "geometryType": "point",
    "lat": 50.3,
    "lng": 92.8,
    "hitRadiusKm": 200,
    "bounds": null,
    "badgeColor": "blue",
    "continent": "eurasia",
    "basinGenesis": "Тектоническое бессточное солёное (Монголия/Тува)",
    "maxDepthM": 20,
    "areaKm2": 3350,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, происхождение котловины и макс. глубину озера: Убсу-Нур (Увс-Нуур)",
      "backMainAnswer": "Евразия • Тектоническое бессточное солёное (Монголия/Тува) • 20 м",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Генезис котловины",
          "value": "Тектоническое бессточное солёное (Монголия/Тува)"
        },
        {
          "label": "Максимальная глубина",
          "value": "20 м"
        },
        {
          "label": "Площадь",
          "value": "3350 км²"
        }
      ],
      "backNote": "Озеро Убсу-Нур (Увс-Нуур): котловина Тектоническое бессточное солёное (Монголия/Тува), макс. глубина 20 м."
    }
  },
  {
    "id": "m4_lk_lake_urmia",
    "moduleId": "module4",
    "submoduleId": "m4_lakes_eurasia",
    "category": "lakes",
    "categoryRu": "Озёра",
    "difficulty": "Стандартный",
    "name": "Урмия (Резайе)",
    "aliases": [
      "Резайе"
    ],
    "region": "Евразия",
    "locationDesc": "Евразия (Тектоническое бессточное гиперсолёное (Иран), глубина 16 м)",
    "mapPrompt": "Покажите озеро: Урмия (Резайе)",
    "geometryType": "point",
    "lat": 37.7,
    "lng": 45.3,
    "hitRadiusKm": 200,
    "bounds": null,
    "badgeColor": "blue",
    "continent": "eurasia",
    "basinGenesis": "Тектоническое бессточное гиперсолёное (Иран)",
    "maxDepthM": 16,
    "areaKm2": 5200,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, происхождение котловины и макс. глубину озера: Урмия (Резайе)",
      "backMainAnswer": "Евразия • Тектоническое бессточное гиперсолёное (Иран) • 16 м",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Генезис котловины",
          "value": "Тектоническое бессточное гиперсолёное (Иран)"
        },
        {
          "label": "Максимальная глубина",
          "value": "16 м"
        },
        {
          "label": "Площадь",
          "value": "5200 км²"
        }
      ],
      "backNote": "Озеро Урмия (Резайе): котловина Тектоническое бессточное гиперсолёное (Иран), макс. глубина 16 м."
    }
  },
  {
    "id": "m4_lk_khanka",
    "moduleId": "module4",
    "submoduleId": "m4_lakes_eurasia",
    "category": "lakes",
    "categoryRu": "Озёра",
    "difficulty": "Стандартный",
    "name": "Ханка",
    "aliases": [],
    "region": "Евразия",
    "locationDesc": "Евразия (Тектоническое (Россия, Приморский край / Китай), глубина 11 м)",
    "mapPrompt": "Покажите озеро: Ханка",
    "geometryType": "point",
    "lat": 45.0,
    "lng": 132.4,
    "hitRadiusKm": 200,
    "bounds": null,
    "badgeColor": "blue",
    "continent": "eurasia",
    "basinGenesis": "Тектоническое (Россия, Приморский край / Китай)",
    "maxDepthM": 11,
    "areaKm2": 4070,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, происхождение котловины и макс. глубину озера: Ханка",
      "backMainAnswer": "Евразия • Тектоническое (Россия, Приморский край / Китай) • 11 м",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Генезис котловины",
          "value": "Тектоническое (Россия, Приморский край / Китай)"
        },
        {
          "label": "Максимальная глубина",
          "value": "11 м"
        },
        {
          "label": "Площадь",
          "value": "4070 км²"
        }
      ],
      "backNote": "Озеро Ханка: котловина Тектоническое (Россия, Приморский край / Китай), макс. глубина 11 м."
    }
  },
  {
    "id": "m4_lk_khovsgol",
    "moduleId": "module4",
    "submoduleId": "m4_lakes_eurasia",
    "category": "lakes",
    "categoryRu": "Озёра",
    "difficulty": "Стандартный",
    "name": "Хубсугул",
    "aliases": [],
    "region": "Евразия",
    "locationDesc": "Евразия (Тектонический рифт ('младший брат Байкала', Монголия), глубина 262 м)",
    "mapPrompt": "Покажите озеро: Хубсугул",
    "geometryType": "point",
    "lat": 51.1,
    "lng": 100.5,
    "hitRadiusKm": 200,
    "bounds": null,
    "badgeColor": "blue",
    "continent": "eurasia",
    "basinGenesis": "Тектонический рифт ('младший брат Байкала', Монголия)",
    "maxDepthM": 262,
    "areaKm2": 2760,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, происхождение котловины и макс. глубину озера: Хубсугул",
      "backMainAnswer": "Евразия • Тектонический рифт ('младший брат Байкала', Монголия) • 262 м",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Генезис котловины",
          "value": "Тектонический рифт ('младший брат Байкала', Монголия)"
        },
        {
          "label": "Максимальная глубина",
          "value": "262 м"
        },
        {
          "label": "Площадь",
          "value": "2760 км²"
        }
      ],
      "backNote": "Озеро Хубсугул: котловина Тектонический рифт ('младший брат Байкала', Монголия), макс. глубина 262 м."
    }
  },
  {
    "id": "m4_lk_chany_lake",
    "moduleId": "module4",
    "submoduleId": "m4_lakes_eurasia",
    "category": "lakes",
    "categoryRu": "Озёра",
    "difficulty": "Стандартный",
    "name": "Чаны",
    "aliases": [],
    "region": "Евразия",
    "locationDesc": "Евразия (Суффозионно-тектоническое бессточное (Барабинская низменность), глубина 7 м)",
    "mapPrompt": "Покажите озеро: Чаны",
    "geometryType": "point",
    "lat": 54.8,
    "lng": 77.5,
    "hitRadiusKm": 200,
    "bounds": null,
    "badgeColor": "blue",
    "continent": "eurasia",
    "basinGenesis": "Суффозионно-тектоническое бессточное (Барабинская низменность)",
    "maxDepthM": 7,
    "areaKm2": 2000,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, происхождение котловины и макс. глубину озера: Чаны",
      "backMainAnswer": "Евразия • Суффозионно-тектоническое бессточное (Барабинская низменность) • 7 м",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Генезис котловины",
          "value": "Суффозионно-тектоническое бессточное (Барабинская низменность)"
        },
        {
          "label": "Максимальная глубина",
          "value": "7 м"
        },
        {
          "label": "Площадь",
          "value": "2000 км²"
        }
      ],
      "backNote": "Озеро Чаны: котловина Суффозионно-тектоническое бессточное (Барабинская низменность), макс. глубина 7 м."
    }
  },
  {
    "id": "m4_lk_peipus",
    "moduleId": "module4",
    "submoduleId": "m4_lakes_eurasia",
    "category": "lakes",
    "categoryRu": "Озёра",
    "difficulty": "Стандартный",
    "name": "Чудско-Псковское озеро",
    "aliases": [],
    "region": "Евразия",
    "locationDesc": "Евразия (Ледниково-тектоническое реликтовое (Эстония/Россия), глубина 15 м)",
    "mapPrompt": "Покажите озеро: Чудско-Псковское озеро",
    "geometryType": "point",
    "lat": 58.7,
    "lng": 27.5,
    "hitRadiusKm": 200,
    "bounds": null,
    "badgeColor": "blue",
    "continent": "eurasia",
    "basinGenesis": "Ледниково-тектоническое реликтовое (Эстония/Россия)",
    "maxDepthM": 15,
    "areaKm2": 3555,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, происхождение котловины и макс. глубину озера: Чудско-Псковское озеро",
      "backMainAnswer": "Евразия • Ледниково-тектоническое реликтовое (Эстония/Россия) • 15 м",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Генезис котловины",
          "value": "Ледниково-тектоническое реликтовое (Эстония/Россия)"
        },
        {
          "label": "Максимальная глубина",
          "value": "15 м"
        },
        {
          "label": "Площадь",
          "value": "3555 км²"
        }
      ],
      "backNote": "Озеро Чудско-Псковское озеро: котловина Ледниково-тектоническое реликтовое (Эстония/Россия), макс. глубина 15 м."
    }
  },
  {
    "id": "m4_lk_elton",
    "moduleId": "module4",
    "submoduleId": "m4_lakes_eurasia",
    "category": "lakes",
    "categoryRu": "Озёра",
    "difficulty": "Стандартный",
    "name": "Эльтон",
    "aliases": [],
    "region": "Евразия",
    "locationDesc": "Евразия (Тектоническое соляное бессточное (Прикаспийская низменность), глубина 1.5 м)",
    "mapPrompt": "Покажите озеро: Эльтон",
    "geometryType": "point",
    "lat": 49.1,
    "lng": 46.7,
    "hitRadiusKm": 120,
    "bounds": null,
    "badgeColor": "blue",
    "continent": "eurasia",
    "basinGenesis": "Тектоническое соляное бессточное (Прикаспийская низменность)",
    "maxDepthM": 1.5,
    "areaKm2": 152,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, происхождение котловины и макс. глубину озера: Эльтон",
      "backMainAnswer": "Евразия • Тектоническое соляное бессточное (Прикаспийская низменность) • 1.5 м",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Евразия"
        },
        {
          "label": "Генезис котловины",
          "value": "Тектоническое соляное бессточное (Прикаспийская низменность)"
        },
        {
          "label": "Максимальная глубина",
          "value": "1.5 м"
        },
        {
          "label": "Площадь",
          "value": "152 км²"
        }
      ],
      "backNote": "Крупнейшее соляное озеро Европы (рапа, целебная грязь)."
    }
  },
  {
    "id": "m4_lk_bangweulu",
    "moduleId": "module4",
    "submoduleId": "m4_lakes_africa",
    "category": "lakes",
    "categoryRu": "Озёра",
    "difficulty": "Стандартный",
    "name": "Бангвеулу",
    "aliases": [],
    "region": "Африка",
    "locationDesc": "Африка (Тектоническое мелководное болотное (Замбия), глубина 4 м)",
    "mapPrompt": "Покажите озеро: Бангвеулу",
    "geometryType": "point",
    "lat": -11.2,
    "lng": 29.8,
    "hitRadiusKm": 200,
    "bounds": null,
    "badgeColor": "blue",
    "continent": "africa",
    "basinGenesis": "Тектоническое мелководное болотное (Замбия)",
    "maxDepthM": 4,
    "areaKm2": 9840,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, происхождение котловины и макс. глубину озера: Бангвеулу",
      "backMainAnswer": "Африка • Тектоническое мелководное болотное (Замбия) • 4 м",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Африка"
        },
        {
          "label": "Генезис котловины",
          "value": "Тектоническое мелководное болотное (Замбия)"
        },
        {
          "label": "Максимальная глубина",
          "value": "4 м"
        },
        {
          "label": "Площадь",
          "value": "9840 км²"
        }
      ],
      "backNote": "Озеро Бангвеулу: котловина Тектоническое мелководное болотное (Замбия), макс. глубина 4 м."
    }
  },
  {
    "id": "m4_lk_lake_victoria",
    "moduleId": "module4",
    "submoduleId": "m4_lakes_africa",
    "category": "lakes",
    "categoryRu": "Озёра",
    "difficulty": "Стандартный",
    "name": "Виктория (Укереве)",
    "aliases": [
      "Укереве"
    ],
    "region": "Африка",
    "locationDesc": "Африка (Тектонический прогиб платформы (крупнейшее в Африке), глубина 84 м)",
    "mapPrompt": "Покажите озеро: Виктория (Укереве)",
    "geometryType": "point",
    "lat": -1.0,
    "lng": 33.0,
    "hitRadiusKm": 350,
    "bounds": null,
    "badgeColor": "blue",
    "continent": "africa",
    "basinGenesis": "Тектонический прогиб платформы (крупнейшее в Африке)",
    "maxDepthM": 84,
    "areaKm2": 68800,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, происхождение котловины и макс. глубину озера: Виктория (Укереве)",
      "backMainAnswer": "Африка • Тектонический прогиб платформы (крупнейшее в Африке) • 84 м",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Африка"
        },
        {
          "label": "Генезис котловины",
          "value": "Тектонический прогиб платформы (крупнейшее в Африке)"
        },
        {
          "label": "Максимальная глубина",
          "value": "84 м"
        },
        {
          "label": "Площадь",
          "value": "68800 км²"
        }
      ],
      "backNote": "Крупнейшее по площади озеро Африки (68,8 тыс. км²) и 2-е пресноводное озеро Земли. Исток Белого Нила."
    }
  },
  {
    "id": "m4_lk_lake_edward",
    "moduleId": "module4",
    "submoduleId": "m4_lakes_africa",
    "category": "lakes",
    "categoryRu": "Озёра",
    "difficulty": "Стандартный",
    "name": "Иди-Амин-Дада (Эдуард)",
    "aliases": [
      "Эдуард"
    ],
    "region": "Африка",
    "locationDesc": "Африка (Тектонический рифт (Восточно-Африканский рифт), глубина 112 м)",
    "mapPrompt": "Покажите озеро: Иди-Амин-Дада (Эдуард)",
    "geometryType": "point",
    "lat": -0.3,
    "lng": 29.6,
    "hitRadiusKm": 200,
    "bounds": null,
    "badgeColor": "blue",
    "continent": "africa",
    "basinGenesis": "Тектонический рифт (Восточно-Африканский рифт)",
    "maxDepthM": 112,
    "areaKm2": 2325,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, происхождение котловины и макс. глубину озера: Иди-Амин-Дада (Эдуард)",
      "backMainAnswer": "Африка • Тектонический рифт (Восточно-Африканский рифт) • 112 м",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Африка"
        },
        {
          "label": "Генезис котловины",
          "value": "Тектонический рифт (Восточно-Африканский рифт)"
        },
        {
          "label": "Максимальная глубина",
          "value": "112 м"
        },
        {
          "label": "Площадь",
          "value": "2325 км²"
        }
      ],
      "backNote": "Озеро Иди-Амин-Дада (Эдуард): котловина Тектонический рифт (Восточно-Африканский рифт), макс. глубина 112 м."
    }
  },
  {
    "id": "m4_lk_lake_kivu",
    "moduleId": "module4",
    "submoduleId": "m4_lakes_africa",
    "category": "lakes",
    "categoryRu": "Озёра",
    "difficulty": "Стандартный",
    "name": "Киву",
    "aliases": [],
    "region": "Африка",
    "locationDesc": "Африка (Тектонический рифт (запружено лавой Вирунга), глубина 480 м)",
    "mapPrompt": "Покажите озеро: Киву",
    "geometryType": "point",
    "lat": -2.0,
    "lng": 29.2,
    "hitRadiusKm": 180,
    "bounds": null,
    "badgeColor": "blue",
    "continent": "africa",
    "basinGenesis": "Тектонический рифт (запружено лавой Вирунга)",
    "maxDepthM": 480,
    "areaKm2": 2700,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, происхождение котловины и макс. глубину озера: Киву",
      "backMainAnswer": "Африка • Тектонический рифт (запружено лавой Вирунга) • 480 м",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Африка"
        },
        {
          "label": "Генезис котловины",
          "value": "Тектонический рифт (запружено лавой Вирунга)"
        },
        {
          "label": "Максимальная глубина",
          "value": "480 м"
        },
        {
          "label": "Площадь",
          "value": "2700 км²"
        }
      ],
      "backNote": "Озеро со слоями растворенного метана и углекислого газа."
    }
  },
  {
    "id": "m4_lk_lake_kyoga",
    "moduleId": "module4",
    "submoduleId": "m4_lakes_africa",
    "category": "lakes",
    "categoryRu": "Озёра",
    "difficulty": "Стандартный",
    "name": "Кьога",
    "aliases": [],
    "region": "Африка",
    "locationDesc": "Африка (Тектоническое мелководное озерно-болотное (Уганда, р. Нил), глубина 5 м)",
    "mapPrompt": "Покажите озеро: Кьога",
    "geometryType": "point",
    "lat": 1.5,
    "lng": 33.0,
    "hitRadiusKm": 200,
    "bounds": null,
    "badgeColor": "blue",
    "continent": "africa",
    "basinGenesis": "Тектоническое мелководное озерно-болотное (Уганда, р. Нил)",
    "maxDepthM": 5,
    "areaKm2": 1720,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, происхождение котловины и макс. глубину озера: Кьога",
      "backMainAnswer": "Африка • Тектоническое мелководное озерно-болотное (Уганда, р. Нил) • 5 м",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Африка"
        },
        {
          "label": "Генезис котловины",
          "value": "Тектоническое мелководное озерно-болотное (Уганда, р. Нил)"
        },
        {
          "label": "Максимальная глубина",
          "value": "5 м"
        },
        {
          "label": "Площадь",
          "value": "1720 км²"
        }
      ],
      "backNote": "Озеро Кьога: котловина Тектоническое мелководное озерно-болотное (Уганда, р. Нил), макс. глубина 5 м."
    }
  },
  {
    "id": "m4_lk_lake_mweru",
    "moduleId": "module4",
    "submoduleId": "m4_lakes_africa",
    "category": "lakes",
    "categoryRu": "Озёра",
    "difficulty": "Стандартный",
    "name": "Мверу",
    "aliases": [],
    "region": "Африка",
    "locationDesc": "Африка (Тектонический грабен (бассейн Конго, Замбия/ДРК), глубина 27 м)",
    "mapPrompt": "Покажите озеро: Мверу",
    "geometryType": "point",
    "lat": -9.1,
    "lng": 28.7,
    "hitRadiusKm": 200,
    "bounds": null,
    "badgeColor": "blue",
    "continent": "africa",
    "basinGenesis": "Тектонический грабен (бассейн Конго, Замбия/ДРК)",
    "maxDepthM": 27,
    "areaKm2": 5120,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, происхождение котловины и макс. глубину озера: Мверу",
      "backMainAnswer": "Африка • Тектонический грабен (бассейн Конго, Замбия/ДРК) • 27 м",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Африка"
        },
        {
          "label": "Генезис котловины",
          "value": "Тектонический грабен (бассейн Конго, Замбия/ДРК)"
        },
        {
          "label": "Максимальная глубина",
          "value": "27 м"
        },
        {
          "label": "Площадь",
          "value": "5120 км²"
        }
      ],
      "backNote": "Озеро Мверу: котловина Тектонический грабен (бассейн Конго, Замбия/ДРК), макс. глубина 27 м."
    }
  },
  {
    "id": "m4_lk_lake_albert",
    "moduleId": "module4",
    "submoduleId": "m4_lakes_africa",
    "category": "lakes",
    "categoryRu": "Озёра",
    "difficulty": "Стандартный",
    "name": "Мобуту-Сесе-Секо (Альберт)",
    "aliases": [
      "Альберт"
    ],
    "region": "Африка",
    "locationDesc": "Африка (Тектонический рифт (Западный рифт), глубина 58 м)",
    "mapPrompt": "Покажите озеро: Мобуту-Сесе-Секо (Альберт)",
    "geometryType": "point",
    "lat": 1.7,
    "lng": 31.0,
    "hitRadiusKm": 200,
    "bounds": null,
    "badgeColor": "blue",
    "continent": "africa",
    "basinGenesis": "Тектонический рифт (Западный рифт)",
    "maxDepthM": 58,
    "areaKm2": 5300,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, происхождение котловины и макс. глубину озера: Мобуту-Сесе-Секо (Альберт)",
      "backMainAnswer": "Африка • Тектонический рифт (Западный рифт) • 58 м",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Африка"
        },
        {
          "label": "Генезис котловины",
          "value": "Тектонический рифт (Западный рифт)"
        },
        {
          "label": "Максимальная глубина",
          "value": "58 м"
        },
        {
          "label": "Площадь",
          "value": "5300 км²"
        }
      ],
      "backNote": "Озеро Мобуту-Сесе-Секо (Альберт): котловина Тектонический рифт (Западный рифт), макс. глубина 58 м."
    }
  },
  {
    "id": "m4_lk_lake_malawi",
    "moduleId": "module4",
    "submoduleId": "m4_lakes_africa",
    "category": "lakes",
    "categoryRu": "Озёра",
    "difficulty": "Стандартный",
    "name": "Ньяса (Малави)",
    "aliases": [
      "Малави"
    ],
    "region": "Африка",
    "locationDesc": "Африка (Тектонический рифтовый грабен, глубина 706 м)",
    "mapPrompt": "Покажите озеро: Ньяса (Малави)",
    "geometryType": "point",
    "lat": -12.0,
    "lng": 34.5,
    "hitRadiusKm": 280,
    "bounds": null,
    "badgeColor": "blue",
    "continent": "africa",
    "basinGenesis": "Тектонический рифтовый грабен",
    "maxDepthM": 706,
    "areaKm2": 29600,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, происхождение котловины и макс. глубину озера: Ньяса (Малави)",
      "backMainAnswer": "Африка • Тектонический рифтовый грабен • 706 м",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Африка"
        },
        {
          "label": "Генезис котловины",
          "value": "Тектонический рифтовый грабен"
        },
        {
          "label": "Максимальная глубина",
          "value": "706 м"
        },
        {
          "label": "Площадь",
          "value": "29600 км²"
        }
      ],
      "backNote": "3-е по глубине озеро мира (706 м). Богатейшая эндемичная ихтиофауна (цихлиды)."
    }
  },
  {
    "id": "m4_lk_lake_turkana",
    "moduleId": "module4",
    "submoduleId": "m4_lakes_africa",
    "category": "lakes",
    "categoryRu": "Озёра",
    "difficulty": "Стандартный",
    "name": "Рудольф (Туркана)",
    "aliases": [
      "Туркана"
    ],
    "region": "Африка",
    "locationDesc": "Африка (Тектонический рифт ('Нефритовое море', Кения), глубина 73 м)",
    "mapPrompt": "Покажите озеро: Рудольф (Туркана)",
    "geometryType": "point",
    "lat": 3.5,
    "lng": 36.0,
    "hitRadiusKm": 200,
    "bounds": null,
    "badgeColor": "blue",
    "continent": "africa",
    "basinGenesis": "Тектонический рифт ('Нефритовое море', Кения)",
    "maxDepthM": 73,
    "areaKm2": 6405,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, происхождение котловины и макс. глубину озера: Рудольф (Туркана)",
      "backMainAnswer": "Африка • Тектонический рифт ('Нефритовое море', Кения) • 73 м",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Африка"
        },
        {
          "label": "Генезис котловины",
          "value": "Тектонический рифт ('Нефритовое море', Кения)"
        },
        {
          "label": "Максимальная глубина",
          "value": "73 м"
        },
        {
          "label": "Площадь",
          "value": "6405 км²"
        }
      ],
      "backNote": "Озеро Рудольф (Туркана): котловина Тектонический рифт ('Нефритовое море', Кения), макс. глубина 73 м."
    }
  },
  {
    "id": "m4_lk_lake_tana",
    "moduleId": "module4",
    "submoduleId": "m4_lakes_africa",
    "category": "lakes",
    "categoryRu": "Озёра",
    "difficulty": "Стандартный",
    "name": "Тана (Цана, Дамбеа)",
    "aliases": [
      "Цана",
      "Дамбеа"
    ],
    "region": "Африка",
    "locationDesc": "Африка (Вулканическое подпрудное (Эфиопское нагорье, исток Голубого Нила), глубина 15 м)",
    "mapPrompt": "Покажите озеро: Тана (Цана, Дамбеа)",
    "geometryType": "point",
    "lat": 12.0,
    "lng": 37.3,
    "hitRadiusKm": 200,
    "bounds": null,
    "badgeColor": "blue",
    "continent": "africa",
    "basinGenesis": "Вулканическое подпрудное (Эфиопское нагорье, исток Голубого Нила)",
    "maxDepthM": 15,
    "areaKm2": 3156,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, происхождение котловины и макс. глубину озера: Тана (Цана, Дамбеа)",
      "backMainAnswer": "Африка • Вулканическое подпрудное (Эфиопское нагорье, исток Голубого Нила) • 15 м",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Африка"
        },
        {
          "label": "Генезис котловины",
          "value": "Вулканическое подпрудное (Эфиопское нагорье, исток Голубого Нила)"
        },
        {
          "label": "Максимальная глубина",
          "value": "15 м"
        },
        {
          "label": "Площадь",
          "value": "3156 км²"
        }
      ],
      "backNote": "Озеро Тана (Цана, Дамбеа): котловина Вулканическое подпрудное (Эфиопское нагорье, исток Голубого Нила), макс. глубина 15 м."
    }
  },
  {
    "id": "m4_lk_tanganyika",
    "moduleId": "module4",
    "submoduleId": "m4_lakes_africa",
    "category": "lakes",
    "categoryRu": "Озёра",
    "difficulty": "Стандартный",
    "name": "Танганьика",
    "aliases": [],
    "region": "Африка",
    "locationDesc": "Африка (Тектонический рифтовый грабен (Восточно-Африканский рифт), глубина 1470 м)",
    "mapPrompt": "Покажите озеро: Танганьика",
    "geometryType": "point",
    "lat": -6.0,
    "lng": 29.5,
    "hitRadiusKm": 300,
    "bounds": null,
    "badgeColor": "blue",
    "continent": "africa",
    "basinGenesis": "Тектонический рифтовый грабен (Восточно-Африканский рифт)",
    "maxDepthM": 1470,
    "areaKm2": 32900,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, происхождение котловины и макс. глубину озера: Танганьика",
      "backMainAnswer": "Африка • Тектонический рифтовый грабен (Восточно-Африканский рифт) • 1470 м",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Африка"
        },
        {
          "label": "Генезис котловины",
          "value": "Тектонический рифтовый грабен (Восточно-Африканский рифт)"
        },
        {
          "label": "Максимальная глубина",
          "value": "1470 м"
        },
        {
          "label": "Площадь",
          "value": "32900 км²"
        }
      ],
      "backNote": "Самое длинное пресноводное озеро мира (650 км) и 2-е по глубине (1 470 м) после Байкала."
    }
  },
  {
    "id": "m4_lk_lake_chad",
    "moduleId": "module4",
    "submoduleId": "m4_lakes_africa",
    "category": "lakes",
    "categoryRu": "Озёра",
    "difficulty": "Стандартный",
    "name": "Чад",
    "aliases": [],
    "region": "Африка",
    "locationDesc": "Африка (Реликтовое тектоническое бессточное (Сахель), глубина 11 м)",
    "mapPrompt": "Покажите озеро: Чад",
    "geometryType": "point",
    "lat": 13.0,
    "lng": 14.5,
    "hitRadiusKm": 250,
    "bounds": null,
    "badgeColor": "blue",
    "continent": "africa",
    "basinGenesis": "Реликтовое тектоническое бессточное (Сахель)",
    "maxDepthM": 11,
    "areaKm2": 1500,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, происхождение котловины и макс. глубину озера: Чад",
      "backMainAnswer": "Африка • Реликтовое тектоническое бессточное (Сахель) • 11 м",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Африка"
        },
        {
          "label": "Генезис котловины",
          "value": "Реликтовое тектоническое бессточное (Сахель)"
        },
        {
          "label": "Максимальная глубина",
          "value": "11 м"
        },
        {
          "label": "Площадь",
          "value": "1500 км²"
        }
      ],
      "backNote": "Остаток древнего водоёма Мега-Чад, пульсирующая площадь."
    }
  },
  {
    "id": "m4_lk_lake_athabasca",
    "moduleId": "module4",
    "submoduleId": "m4_lakes_north_america",
    "category": "lakes",
    "categoryRu": "Озёра",
    "difficulty": "Стандартный",
    "name": "Атабаска",
    "aliases": [],
    "region": "Северная Америка",
    "locationDesc": "Северная Америка (Ледниково-тектоническое (Канада, Канадский щит), глубина 124 м)",
    "mapPrompt": "Покажите озеро: Атабаска",
    "geometryType": "point",
    "lat": 59.2,
    "lng": -109.5,
    "hitRadiusKm": 200,
    "bounds": null,
    "badgeColor": "blue",
    "continent": "north_america",
    "basinGenesis": "Ледниково-тектоническое (Канада, Канадский щит)",
    "maxDepthM": 124,
    "areaKm2": 7850,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, происхождение котловины и макс. глубину озера: Атабаска",
      "backMainAnswer": "Северная Америка • Ледниково-тектоническое (Канада, Канадский щит) • 124 м",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Северная Америка"
        },
        {
          "label": "Генезис котловины",
          "value": "Ледниково-тектоническое (Канада, Канадский щит)"
        },
        {
          "label": "Максимальная глубина",
          "value": "124 м"
        },
        {
          "label": "Площадь",
          "value": "7850 км²"
        }
      ],
      "backNote": "Озеро Атабаска: котловина Ледниково-тектоническое (Канада, Канадский щит), макс. глубина 124 м."
    }
  },
  {
    "id": "m4_lk_great_bear_lake",
    "moduleId": "module4",
    "submoduleId": "m4_lakes_north_america",
    "category": "lakes",
    "categoryRu": "Озёра",
    "difficulty": "Стандартный",
    "name": "Большое Медвежье озеро",
    "aliases": [],
    "region": "Северная Америка",
    "locationDesc": "Северная Америка (Ледниково-тектоническое (крупнейшее целиком в Канаде), глубина 446 м)",
    "mapPrompt": "Покажите озеро: Большое Медвежье озеро",
    "geometryType": "point",
    "lat": 66.0,
    "lng": -121.0,
    "hitRadiusKm": 280,
    "bounds": null,
    "badgeColor": "blue",
    "continent": "north_america",
    "basinGenesis": "Ледниково-тектоническое (крупнейшее целиком в Канаде)",
    "maxDepthM": 446,
    "areaKm2": 31153,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, происхождение котловины и макс. глубину озера: Большое Медвежье озеро",
      "backMainAnswer": "Северная Америка • Ледниково-тектоническое (крупнейшее целиком в Канаде) • 446 м",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Северная Америка"
        },
        {
          "label": "Генезис котловины",
          "value": "Ледниково-тектоническое (крупнейшее целиком в Канаде)"
        },
        {
          "label": "Максимальная глубина",
          "value": "446 м"
        },
        {
          "label": "Площадь",
          "value": "31153 км²"
        }
      ],
      "backNote": "Озеро Большое Медвежье озеро: котловина Ледниково-тектоническое (крупнейшее целиком в Канаде), макс. глубина 446 м."
    }
  },
  {
    "id": "m4_lk_great_slave_lake",
    "moduleId": "module4",
    "submoduleId": "m4_lakes_north_america",
    "category": "lakes",
    "categoryRu": "Озёра",
    "difficulty": "Стандартный",
    "name": "Большое Невольничье озеро",
    "aliases": [],
    "region": "Северная Америка",
    "locationDesc": "Северная Америка (Ледниково-тектоническое (глубочайшее в Сев. Америке), глубина 614 м)",
    "mapPrompt": "Покажите озеро: Большое Невольничье озеро",
    "geometryType": "point",
    "lat": 61.5,
    "lng": -114.0,
    "hitRadiusKm": 280,
    "bounds": null,
    "badgeColor": "blue",
    "continent": "north_america",
    "basinGenesis": "Ледниково-тектоническое (глубочайшее в Сев. Америке)",
    "maxDepthM": 614,
    "areaKm2": 27200,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, происхождение котловины и макс. глубину озера: Большое Невольничье озеро",
      "backMainAnswer": "Северная Америка • Ледниково-тектоническое (глубочайшее в Сев. Америке) • 614 м",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Северная Америка"
        },
        {
          "label": "Генезис котловины",
          "value": "Ледниково-тектоническое (глубочайшее в Сев. Америке)"
        },
        {
          "label": "Максимальная глубина",
          "value": "614 м"
        },
        {
          "label": "Площадь",
          "value": "27200 км²"
        }
      ],
      "backNote": "Глубочайшее озеро Северной Америки (614 м). Исток реки Маккензи."
    }
  },
  {
    "id": "m4_lk_great_salt_lake",
    "moduleId": "module4",
    "submoduleId": "m4_lakes_north_america",
    "category": "lakes",
    "categoryRu": "Озёра",
    "difficulty": "Стандартный",
    "name": "Большое Солёное озеро",
    "aliases": [],
    "region": "Северная Америка",
    "locationDesc": "Северная Америка (Реликтовое бессточное (остаток древнего оз. Бонневилль), глубина 10 м)",
    "mapPrompt": "Покажите озеро: Большое Солёное озеро",
    "geometryType": "point",
    "lat": 41.2,
    "lng": -112.6,
    "hitRadiusKm": 220,
    "bounds": null,
    "badgeColor": "blue",
    "continent": "north_america",
    "basinGenesis": "Реликтовое бессточное (остаток древнего оз. Бонневилль)",
    "maxDepthM": 10,
    "areaKm2": 4400,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, происхождение котловины и макс. глубину озера: Большое Солёное озеро",
      "backMainAnswer": "Северная Америка • Реликтовое бессточное (остаток древнего оз. Бонневилль) • 10 м",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Северная Америка"
        },
        {
          "label": "Генезис котловины",
          "value": "Реликтовое бессточное (остаток древнего оз. Бонневилль)"
        },
        {
          "label": "Максимальная глубина",
          "value": "10 м"
        },
        {
          "label": "Площадь",
          "value": "4400 км²"
        }
      ],
      "backNote": "Озеро Большое Солёное озеро: котловина Реликтовое бессточное (остаток древнего оз. Бонневилль), макс. глубина 10 м."
    }
  },
  {
    "id": "m4_lk_lake_superior",
    "moduleId": "module4",
    "submoduleId": "m4_lakes_north_america",
    "category": "lakes",
    "categoryRu": "Озёра",
    "difficulty": "Стандартный",
    "name": "Верхнее",
    "aliases": [],
    "region": "Северная Америка",
    "locationDesc": "Северная Америка (Ледниково-тектоническое (Великие озёра), глубина 406 м)",
    "mapPrompt": "Покажите озеро: Верхнее",
    "geometryType": "point",
    "lat": 47.7,
    "lng": -87.5,
    "hitRadiusKm": 350,
    "bounds": null,
    "badgeColor": "blue",
    "continent": "north_america",
    "basinGenesis": "Ледниково-тектоническое (Великие озёра)",
    "maxDepthM": 406,
    "areaKm2": 82414,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, происхождение котловины и макс. глубину озера: Верхнее",
      "backMainAnswer": "Северная Америка • Ледниково-тектоническое (Великие озёра) • 406 м",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Северная Америка"
        },
        {
          "label": "Генезис котловины",
          "value": "Ледниково-тектоническое (Великие озёра)"
        },
        {
          "label": "Максимальная глубина",
          "value": "406 м"
        },
        {
          "label": "Площадь",
          "value": "82414 км²"
        }
      ],
      "backNote": "Крупнейшее по площади пресноводное озеро мира (82,4 тыс. км²). Часть системы Великих озёр."
    }
  },
  {
    "id": "m4_lk_lake_winnipeg",
    "moduleId": "module4",
    "submoduleId": "m4_lakes_north_america",
    "category": "lakes",
    "categoryRu": "Озёра",
    "difficulty": "Стандартный",
    "name": "Виннипег",
    "aliases": [],
    "region": "Северная Америка",
    "locationDesc": "Северная Америка (Ледниковое реликтовое (остаток ледникового оз. Агассис), глубина 18 м)",
    "mapPrompt": "Покажите озеро: Виннипег",
    "geometryType": "point",
    "lat": 52.0,
    "lng": -97.0,
    "hitRadiusKm": 280,
    "bounds": null,
    "badgeColor": "blue",
    "continent": "north_america",
    "basinGenesis": "Ледниковое реликтовое (остаток ледникового оз. Агассис)",
    "maxDepthM": 18,
    "areaKm2": 24514,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, происхождение котловины и макс. глубину озера: Виннипег",
      "backMainAnswer": "Северная Америка • Ледниковое реликтовое (остаток ледникового оз. Агассис) • 18 м",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Северная Америка"
        },
        {
          "label": "Генезис котловины",
          "value": "Ледниковое реликтовое (остаток ледникового оз. Агассис)"
        },
        {
          "label": "Максимальная глубина",
          "value": "18 м"
        },
        {
          "label": "Площадь",
          "value": "24514 км²"
        }
      ],
      "backNote": "Озеро Виннипег: котловина Ледниковое реликтовое (остаток ледникового оз. Агассис), макс. глубина 18 м."
    }
  },
  {
    "id": "m4_lk_lake_winnipegosis",
    "moduleId": "module4",
    "submoduleId": "m4_lakes_north_america",
    "category": "lakes",
    "categoryRu": "Озёра",
    "difficulty": "Стандартный",
    "name": "Виннипегосис",
    "aliases": [],
    "region": "Северная Америка",
    "locationDesc": "Северная Америка (Ледниковое реликтовое (остаток оз. Агассис), глубина 12 м)",
    "mapPrompt": "Покажите озеро: Виннипегосис",
    "geometryType": "point",
    "lat": 52.5,
    "lng": -100.0,
    "hitRadiusKm": 200,
    "bounds": null,
    "badgeColor": "blue",
    "continent": "north_america",
    "basinGenesis": "Ледниковое реликтовое (остаток оз. Агассис)",
    "maxDepthM": 12,
    "areaKm2": 5370,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, происхождение котловины и макс. глубину озера: Виннипегосис",
      "backMainAnswer": "Северная Америка • Ледниковое реликтовое (остаток оз. Агассис) • 12 м",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Северная Америка"
        },
        {
          "label": "Генезис котловины",
          "value": "Ледниковое реликтовое (остаток оз. Агассис)"
        },
        {
          "label": "Максимальная глубина",
          "value": "12 м"
        },
        {
          "label": "Площадь",
          "value": "5370 км²"
        }
      ],
      "backNote": "Озеро Виннипегосис: котловина Ледниковое реликтовое (остаток оз. Агассис), макс. глубина 12 м."
    }
  },
  {
    "id": "m4_lk_lake_huron",
    "moduleId": "module4",
    "submoduleId": "m4_lakes_north_america",
    "category": "lakes",
    "categoryRu": "Озёра",
    "difficulty": "Стандартный",
    "name": "Гурон",
    "aliases": [],
    "region": "Северная Америка",
    "locationDesc": "Северная Америка (Ледниково-тектоническое (Великие озёра, о. Манитулин), глубина 229 м)",
    "mapPrompt": "Покажите озеро: Гурон",
    "geometryType": "point",
    "lat": 44.8,
    "lng": -82.4,
    "hitRadiusKm": 300,
    "bounds": null,
    "badgeColor": "blue",
    "continent": "north_america",
    "basinGenesis": "Ледниково-тектоническое (Великие озёра, о. Манитулин)",
    "maxDepthM": 229,
    "areaKm2": 59600,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, происхождение котловины и макс. глубину озера: Гурон",
      "backMainAnswer": "Северная Америка • Ледниково-тектоническое (Великие озёра, о. Манитулин) • 229 м",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Северная Америка"
        },
        {
          "label": "Генезис котловины",
          "value": "Ледниково-тектоническое (Великие озёра, о. Манитулин)"
        },
        {
          "label": "Максимальная глубина",
          "value": "229 м"
        },
        {
          "label": "Площадь",
          "value": "59600 км²"
        }
      ],
      "backNote": "Озеро Гурон: котловина Ледниково-тектоническое (Великие озёра, о. Манитулин), макс. глубина 229 м."
    }
  },
  {
    "id": "m4_lk_lake_manitoba",
    "moduleId": "module4",
    "submoduleId": "m4_lakes_north_america",
    "category": "lakes",
    "categoryRu": "Озёра",
    "difficulty": "Стандартный",
    "name": "Манитоба",
    "aliases": [],
    "region": "Северная Америка",
    "locationDesc": "Северная Америка (Ледниковое реликтовое (остаток оз. Агассис), глубина 7 м)",
    "mapPrompt": "Покажите озеро: Манитоба",
    "geometryType": "point",
    "lat": 51.0,
    "lng": -98.5,
    "hitRadiusKm": 200,
    "bounds": null,
    "badgeColor": "blue",
    "continent": "north_america",
    "basinGenesis": "Ледниковое реликтовое (остаток оз. Агассис)",
    "maxDepthM": 7,
    "areaKm2": 4624,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, происхождение котловины и макс. глубину озера: Манитоба",
      "backMainAnswer": "Северная Америка • Ледниковое реликтовое (остаток оз. Агассис) • 7 м",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Северная Америка"
        },
        {
          "label": "Генезис котловины",
          "value": "Ледниковое реликтовое (остаток оз. Агассис)"
        },
        {
          "label": "Максимальная глубина",
          "value": "7 м"
        },
        {
          "label": "Площадь",
          "value": "4624 км²"
        }
      ],
      "backNote": "Озеро Манитоба: котловина Ледниковое реликтовое (остаток оз. Агассис), макс. глубина 7 м."
    }
  },
  {
    "id": "m4_lk_lake_michigan",
    "moduleId": "module4",
    "submoduleId": "m4_lakes_north_america",
    "category": "lakes",
    "categoryRu": "Озёра",
    "difficulty": "Стандартный",
    "name": "Мичиган",
    "aliases": [],
    "region": "Северная Америка",
    "locationDesc": "Северная Америка (Ледниково-тектоническое (Великие озёра, целиком в США), глубина 281 м)",
    "mapPrompt": "Покажите озеро: Мичиган",
    "geometryType": "point",
    "lat": 44.0,
    "lng": -87.0,
    "hitRadiusKm": 300,
    "bounds": null,
    "badgeColor": "blue",
    "continent": "north_america",
    "basinGenesis": "Ледниково-тектоническое (Великие озёра, целиком в США)",
    "maxDepthM": 281,
    "areaKm2": 58000,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, происхождение котловины и макс. глубину озера: Мичиган",
      "backMainAnswer": "Северная Америка • Ледниково-тектоническое (Великие озёра, целиком в США) • 281 м",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Северная Америка"
        },
        {
          "label": "Генезис котловины",
          "value": "Ледниково-тектоническое (Великие озёра, целиком в США)"
        },
        {
          "label": "Максимальная глубина",
          "value": "281 м"
        },
        {
          "label": "Площадь",
          "value": "58000 км²"
        }
      ],
      "backNote": "Озеро Мичиган: котловина Ледниково-тектоническое (Великие озёра, целиком в США), макс. глубина 281 м."
    }
  },
  {
    "id": "m4_lk_lake_nicaragua",
    "moduleId": "module4",
    "submoduleId": "m4_lakes_north_america",
    "category": "lakes",
    "categoryRu": "Озёра",
    "difficulty": "Стандартный",
    "name": "Никарагуа (Косиболька)",
    "aliases": [
      "Косиболька"
    ],
    "region": "Северная Америка",
    "locationDesc": "Северная Америка (Тектоническое (крупнейшее в Центр. Америке, пресноводные акулы), глубина 70 м)",
    "mapPrompt": "Покажите озеро: Никарагуа (Косиболька)",
    "geometryType": "point",
    "lat": 11.5,
    "lng": -85.5,
    "hitRadiusKm": 200,
    "bounds": null,
    "badgeColor": "blue",
    "continent": "north_america",
    "basinGenesis": "Тектоническое (крупнейшее в Центр. Америке, пресноводные акулы)",
    "maxDepthM": 70,
    "areaKm2": 8157,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, происхождение котловины и макс. глубину озера: Никарагуа (Косиболька)",
      "backMainAnswer": "Северная Америка • Тектоническое (крупнейшее в Центр. Америке, пресноводные акулы) • 70 м",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Северная Америка"
        },
        {
          "label": "Генезис котловины",
          "value": "Тектоническое (крупнейшее в Центр. Америке, пресноводные акулы)"
        },
        {
          "label": "Максимальная глубина",
          "value": "70 м"
        },
        {
          "label": "Площадь",
          "value": "8157 км²"
        }
      ],
      "backNote": "Озеро Никарагуа (Косиболька): котловина Тектоническое (крупнейшее в Центр. Америке, пресноводные акулы), макс. глубина 70 м."
    }
  },
  {
    "id": "m4_lk_reindeer_lake",
    "moduleId": "module4",
    "submoduleId": "m4_lakes_north_america",
    "category": "lakes",
    "categoryRu": "Озёра",
    "difficulty": "Стандартный",
    "name": "Оленье озеро (Рейндир)",
    "aliases": [],
    "region": "Северная Америка",
    "locationDesc": "Северная Америка (Ледниково-тектоническое (метеоритный кратер Дип-Бей), глубина 219 м)",
    "mapPrompt": "Покажите озеро: Оленье озеро (Рейндир)",
    "geometryType": "point",
    "lat": 57.2,
    "lng": -102.3,
    "hitRadiusKm": 200,
    "bounds": null,
    "badgeColor": "blue",
    "continent": "north_america",
    "basinGenesis": "Ледниково-тектоническое (метеоритный кратер Дип-Бей)",
    "maxDepthM": 219,
    "areaKm2": 6500,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, происхождение котловины и макс. глубину озера: Оленье озеро (Рейндир)",
      "backMainAnswer": "Северная Америка • Ледниково-тектоническое (метеоритный кратер Дип-Бей) • 219 м",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Северная Америка"
        },
        {
          "label": "Генезис котловины",
          "value": "Ледниково-тектоническое (метеоритный кратер Дип-Бей)"
        },
        {
          "label": "Максимальная глубина",
          "value": "219 м"
        },
        {
          "label": "Площадь",
          "value": "6500 км²"
        }
      ],
      "backNote": "Озеро Оленье озеро (Рейндир): котловина Ледниково-тектоническое (метеоритный кратер Дип-Бей), макс. глубина 219 м."
    }
  },
  {
    "id": "m4_lk_lake_ontario",
    "moduleId": "module4",
    "submoduleId": "m4_lakes_north_america",
    "category": "lakes",
    "categoryRu": "Озёра",
    "difficulty": "Стандартный",
    "name": "Онтарио",
    "aliases": [],
    "region": "Северная Америка",
    "locationDesc": "Северная Америка (Ледниково-тектоническое (Великие озёра, исток р. Св. Лаврентия), глубина 244 м)",
    "mapPrompt": "Покажите озеро: Онтарио",
    "geometryType": "point",
    "lat": 43.7,
    "lng": -77.9,
    "hitRadiusKm": 250,
    "bounds": null,
    "badgeColor": "blue",
    "continent": "north_america",
    "basinGenesis": "Ледниково-тектоническое (Великие озёра, исток р. Св. Лаврентия)",
    "maxDepthM": 244,
    "areaKm2": 18960,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, происхождение котловины и макс. глубину озера: Онтарио",
      "backMainAnswer": "Северная Америка • Ледниково-тектоническое (Великие озёра, исток р. Св. Лаврентия) • 244 м",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Северная Америка"
        },
        {
          "label": "Генезис котловины",
          "value": "Ледниково-тектоническое (Великие озёра, исток р. Св. Лаврентия)"
        },
        {
          "label": "Максимальная глубина",
          "value": "244 м"
        },
        {
          "label": "Площадь",
          "value": "18960 км²"
        }
      ],
      "backNote": "Озеро Онтарио: котловина Ледниково-тектоническое (Великие озёра, исток р. Св. Лаврентия), макс. глубина 244 м."
    }
  },
  {
    "id": "m4_lk_lake_erie",
    "moduleId": "module4",
    "submoduleId": "m4_lakes_north_america",
    "category": "lakes",
    "categoryRu": "Озёра",
    "difficulty": "Стандартный",
    "name": "Эри",
    "aliases": [],
    "region": "Северная Америка",
    "locationDesc": "Северная Америка (Ледниково-тектоническое (самое южное и мелкое из Великих озёр), глубина 64 м)",
    "mapPrompt": "Покажите озеро: Эри",
    "geometryType": "point",
    "lat": 42.2,
    "lng": -81.2,
    "hitRadiusKm": 250,
    "bounds": null,
    "badgeColor": "blue",
    "continent": "north_america",
    "basinGenesis": "Ледниково-тектоническое (самое южное и мелкое из Великих озёр)",
    "maxDepthM": 64,
    "areaKm2": 25700,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, происхождение котловины и макс. глубину озера: Эри",
      "backMainAnswer": "Северная Америка • Ледниково-тектоническое (самое южное и мелкое из Великих озёр) • 64 м",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Северная Америка"
        },
        {
          "label": "Генезис котловины",
          "value": "Ледниково-тектоническое (самое южное и мелкое из Великих озёр)"
        },
        {
          "label": "Максимальная глубина",
          "value": "64 м"
        },
        {
          "label": "Площадь",
          "value": "25700 км²"
        }
      ],
      "backNote": "Озеро Эри: котловина Ледниково-тектоническое (самое южное и мелкое из Великих озёр), макс. глубина 64 м."
    }
  },
  {
    "id": "m4_lk_lagoa_mirim",
    "moduleId": "module4",
    "submoduleId": "m4_lakes_south_america",
    "category": "lakes",
    "categoryRu": "Озёра",
    "difficulty": "Стандартный",
    "name": "Лагоа-Мирин",
    "aliases": [],
    "region": "Южная Америка",
    "locationDesc": "Южная Америка (Лагунное реликтовое (Бразилия/Уругвай), глубина 30 м)",
    "mapPrompt": "Покажите озеро: Лагоа-Мирин",
    "geometryType": "point",
    "lat": -32.5,
    "lng": -52.8,
    "hitRadiusKm": 200,
    "bounds": null,
    "badgeColor": "blue",
    "continent": "south_america",
    "basinGenesis": "Лагунное реликтовое (Бразилия/Уругвай)",
    "maxDepthM": 30,
    "areaKm2": 3750,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, происхождение котловины и макс. глубину озера: Лагоа-Мирин",
      "backMainAnswer": "Южная Америка • Лагунное реликтовое (Бразилия/Уругвай) • 30 м",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Южная Америка"
        },
        {
          "label": "Генезис котловины",
          "value": "Лагунное реликтовое (Бразилия/Уругвай)"
        },
        {
          "label": "Максимальная глубина",
          "value": "30 м"
        },
        {
          "label": "Площадь",
          "value": "3750 км²"
        }
      ],
      "backNote": "Озеро Лагоа-Мирин: котловина Лагунное реликтовое (Бразилия/Уругвай), макс. глубина 30 м."
    }
  },
  {
    "id": "m4_lk_lake_maracaibo",
    "moduleId": "module4",
    "submoduleId": "m4_lakes_south_america",
    "category": "lakes",
    "categoryRu": "Озёра",
    "difficulty": "Стандартный",
    "name": "Маракайбо",
    "aliases": [],
    "region": "Южная Америка",
    "locationDesc": "Южная Америка (Тектоническое солоноватое озеро-залив (Венесуэла), глубина 60 м)",
    "mapPrompt": "Покажите озеро: Маракайбо",
    "geometryType": "point",
    "lat": 9.8,
    "lng": -71.5,
    "hitRadiusKm": 250,
    "bounds": null,
    "badgeColor": "blue",
    "continent": "south_america",
    "basinGenesis": "Тектоническое солоноватое озеро-залив (Венесуэла)",
    "maxDepthM": 60,
    "areaKm2": 13210,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, происхождение котловины и макс. глубину озера: Маракайбо",
      "backMainAnswer": "Южная Америка • Тектоническое солоноватое озеро-залив (Венесуэла) • 60 м",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Южная Америка"
        },
        {
          "label": "Генезис котловины",
          "value": "Тектоническое солоноватое озеро-залив (Венесуэла)"
        },
        {
          "label": "Максимальная глубина",
          "value": "60 м"
        },
        {
          "label": "Площадь",
          "value": "13210 км²"
        }
      ],
      "backNote": "Крупнейшее озеро Южной Америки, соединено проливом с Венесуэльским заливом."
    }
  },
  {
    "id": "m4_lk_lagoa_dos_patos",
    "moduleId": "module4",
    "submoduleId": "m4_lakes_south_america",
    "category": "lakes",
    "categoryRu": "Озёра",
    "difficulty": "Стандартный",
    "name": "Патус (лагуна Патус)",
    "aliases": [
      "лагуна Патус"
    ],
    "region": "Южная Америка",
    "locationDesc": "Южная Америка (Лагунное реликтовое (крупнейшая лагуна Земли, Бразилия), глубина 7 м)",
    "mapPrompt": "Покажите озеро: Патус (лагуна Патус)",
    "geometryType": "point",
    "lat": -31.2,
    "lng": -51.2,
    "hitRadiusKm": 200,
    "bounds": null,
    "badgeColor": "blue",
    "continent": "south_america",
    "basinGenesis": "Лагунное реликтовое (крупнейшая лагуна Земли, Бразилия)",
    "maxDepthM": 7,
    "areaKm2": 10140,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, происхождение котловины и макс. глубину озера: Патус (лагуна Патус)",
      "backMainAnswer": "Южная Америка • Лагунное реликтовое (крупнейшая лагуна Земли, Бразилия) • 7 м",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Южная Америка"
        },
        {
          "label": "Генезис котловины",
          "value": "Лагунное реликтовое (крупнейшая лагуна Земли, Бразилия)"
        },
        {
          "label": "Максимальная глубина",
          "value": "7 м"
        },
        {
          "label": "Площадь",
          "value": "10140 км²"
        }
      ],
      "backNote": "Озеро Патус (лагуна Патус): котловина Лагунное реликтовое (крупнейшая лагуна Земли, Бразилия), макс. глубина 7 м."
    }
  },
  {
    "id": "m4_lk_lake_poopo",
    "moduleId": "module4",
    "submoduleId": "m4_lakes_south_america",
    "category": "lakes",
    "categoryRu": "Озёра",
    "difficulty": "Стандартный",
    "name": "Поопо",
    "aliases": [],
    "region": "Южная Америка",
    "locationDesc": "Южная Америка (Тектоническое бессточное соленое (плато Альтиплано, Боливия), глубина 3 м)",
    "mapPrompt": "Покажите озеро: Поопо",
    "geometryType": "point",
    "lat": -18.7,
    "lng": -67.1,
    "hitRadiusKm": 200,
    "bounds": null,
    "badgeColor": "blue",
    "continent": "south_america",
    "basinGenesis": "Тектоническое бессточное соленое (плато Альтиплано, Боливия)",
    "maxDepthM": 3,
    "areaKm2": 1000,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, происхождение котловины и макс. глубину озера: Поопо",
      "backMainAnswer": "Южная Америка • Тектоническое бессточное соленое (плато Альтиплано, Боливия) • 3 м",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Южная Америка"
        },
        {
          "label": "Генезис котловины",
          "value": "Тектоническое бессточное соленое (плато Альтиплано, Боливия)"
        },
        {
          "label": "Максимальная глубина",
          "value": "3 м"
        },
        {
          "label": "Площадь",
          "value": "1000 км²"
        }
      ],
      "backNote": "Озеро Поопо: котловина Тектоническое бессточное соленое (плато Альтиплано, Боливия), макс. глубина 3 м."
    }
  },
  {
    "id": "m4_lk_lake_titicaca",
    "moduleId": "module4",
    "submoduleId": "m4_lakes_south_america",
    "category": "lakes",
    "categoryRu": "Озёра",
    "difficulty": "Стандартный",
    "name": "Титикака",
    "aliases": [],
    "region": "Южная Америка",
    "locationDesc": "Южная Америка (Тектоническое высокогорное (Анды, Альтиплано, Перу/Боливия), глубина 281 м)",
    "mapPrompt": "Покажите озеро: Титикака",
    "geometryType": "point",
    "lat": -15.8,
    "lng": -69.4,
    "hitRadiusKm": 220,
    "bounds": null,
    "badgeColor": "blue",
    "continent": "south_america",
    "basinGenesis": "Тектоническое высокогорное (Анды, Альтиплано, Перу/Боливия)",
    "maxDepthM": 281,
    "areaKm2": 8372,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, происхождение котловины и макс. глубину озера: Титикака",
      "backMainAnswer": "Южная Америка • Тектоническое высокогорное (Анды, Альтиплано, Перу/Боливия) • 281 м",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Южная Америка"
        },
        {
          "label": "Генезис котловины",
          "value": "Тектоническое высокогорное (Анды, Альтиплано, Перу/Боливия)"
        },
        {
          "label": "Максимальная глубина",
          "value": "281 м"
        },
        {
          "label": "Площадь",
          "value": "8372 км²"
        }
      ],
      "backNote": "Крупнейшее высокогорное и судоходное озеро мира (высота 3 812 м, площадь 8,3 тыс. км²)."
    }
  },
  {
    "id": "m4_lk_lake_torrens",
    "moduleId": "module4",
    "submoduleId": "m4_lakes_australia",
    "category": "lakes",
    "categoryRu": "Озёра",
    "difficulty": "Стандартный",
    "name": "Торренс",
    "aliases": [],
    "region": "Австралия",
    "locationDesc": "Австралия (Тектоническое бессточное соляное рифтовое, глубина 1 м)",
    "mapPrompt": "Покажите озеро: Торренс",
    "geometryType": "point",
    "lat": -31.0,
    "lng": 137.8,
    "hitRadiusKm": 200,
    "bounds": null,
    "badgeColor": "blue",
    "continent": "australia",
    "basinGenesis": "Тектоническое бессточное соляное рифтовое",
    "maxDepthM": 1,
    "areaKm2": 5700,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, происхождение котловины и макс. глубину озера: Торренс",
      "backMainAnswer": "Австралия • Тектоническое бессточное соляное рифтовое • 1 м",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Австралия"
        },
        {
          "label": "Генезис котловины",
          "value": "Тектоническое бессточное соляное рифтовое"
        },
        {
          "label": "Максимальная глубина",
          "value": "1 м"
        },
        {
          "label": "Площадь",
          "value": "5700 км²"
        }
      ],
      "backNote": "Озеро Торренс: котловина Тектоническое бессточное соляное рифтовое, макс. глубина 1 м."
    }
  },
  {
    "id": "m4_lk_lake_frome",
    "moduleId": "module4",
    "submoduleId": "m4_lakes_australia",
    "category": "lakes",
    "categoryRu": "Озёра",
    "difficulty": "Стандартный",
    "name": "Фром",
    "aliases": [],
    "region": "Австралия",
    "locationDesc": "Австралия (Тектоническое бессточное соляное (Южная Австралия), глубина 1 м)",
    "mapPrompt": "Покажите озеро: Фром",
    "geometryType": "point",
    "lat": -30.6,
    "lng": 139.8,
    "hitRadiusKm": 200,
    "bounds": null,
    "badgeColor": "blue",
    "continent": "australia",
    "basinGenesis": "Тектоническое бессточное соляное (Южная Австралия)",
    "maxDepthM": 1,
    "areaKm2": 2596,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, происхождение котловины и макс. глубину озера: Фром",
      "backMainAnswer": "Австралия • Тектоническое бессточное соляное (Южная Австралия) • 1 м",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Австралия"
        },
        {
          "label": "Генезис котловины",
          "value": "Тектоническое бессточное соляное (Южная Австралия)"
        },
        {
          "label": "Максимальная глубина",
          "value": "1 м"
        },
        {
          "label": "Площадь",
          "value": "2596 км²"
        }
      ],
      "backNote": "Озеро Фром: котловина Тектоническое бессточное соляное (Южная Австралия), макс. глубина 1 м."
    }
  },
  {
    "id": "m4_lk_lake_eyre",
    "moduleId": "module4",
    "submoduleId": "m4_lakes_australia",
    "category": "lakes",
    "categoryRu": "Озёра",
    "difficulty": "Стандартный",
    "name": "Эйр (Кати-Танда)",
    "aliases": [
      "Кати-Танда"
    ],
    "region": "Австралия",
    "locationDesc": "Австралия (Тектоническое бессточное соляное (низшая точка Австралии -16 м), глубина 4 м)",
    "mapPrompt": "Покажите озеро: Эйр (Кати-Танда)",
    "geometryType": "point",
    "lat": -28.4,
    "lng": 137.4,
    "hitRadiusKm": 250,
    "bounds": null,
    "badgeColor": "blue",
    "continent": "australia",
    "basinGenesis": "Тектоническое бессточное соляное (низшая точка Австралии -16 м)",
    "maxDepthM": 4,
    "areaKm2": 9500,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите материк, происхождение котловины и макс. глубину озера: Эйр (Кати-Танда)",
      "backMainAnswer": "Австралия • Тектоническое бессточное соляное (низшая точка Австралии -16 м) • 4 м",
      "backMetrics": [
        {
          "label": "Материк",
          "value": "Австралия"
        },
        {
          "label": "Генезис котловины",
          "value": "Тектоническое бессточное соляное (низшая точка Австралии -16 м)"
        },
        {
          "label": "Максимальная глубина",
          "value": "4 м"
        },
        {
          "label": "Площадь",
          "value": "9500 км²"
        }
      ],
      "backNote": "Крупнейшее озеро Австралии (периодически пересыхающее соляное плато в центре Большого Артезианского бассейна)."
    }
  }
];

window.GEO_MODULES_REGISTRY.module4 = {
  id: "module4",
  title: "4. Реки, озёра, водопады",
  shortTitle: "Внутренние воды",
  semesterOrder: 4,
  badge: "Раздел 4",
  color: "cyan",
  decks: [
    { id: "m4_all", title: "Весь Раздел 4 (Все объекты)", count: MODULE4_ITEMS.length },
    { id: "m4_rivers", title: "Реки мира (134 реки и притока)", count: MODULE4_ITEMS.filter(i => i.category === "rivers").length },
    { id: "m4_rivers_eurasia", title: "Реки Евразии", count: MODULE4_ITEMS.filter(i => i.submoduleId === "m4_rivers_eurasia").length },
    { id: "m4_rivers_africa", title: "Реки Африки", count: MODULE4_ITEMS.filter(i => i.submoduleId === "m4_rivers_africa").length },
    { id: "m4_rivers_north_america", title: "Реки Северной Америки", count: MODULE4_ITEMS.filter(i => i.submoduleId === "m4_rivers_north_america").length },
    { id: "m4_rivers_south_america", title: "Реки Южной Америки", count: MODULE4_ITEMS.filter(i => i.submoduleId === "m4_rivers_south_america").length },
    { id: "m4_rivers_australia", title: "Реки Австралии", count: MODULE4_ITEMS.filter(i => i.submoduleId === "m4_rivers_australia").length },
    { id: "m4_waterfalls", title: "Водопады мира (20 водопадов)", count: MODULE4_ITEMS.filter(i => i.category === "waterfalls").length },
    { id: "m4_lakes", title: "Озёра мира (71 озеро)", count: MODULE4_ITEMS.filter(i => i.category === "lakes").length }
  ],
  items: MODULE4_ITEMS
};
