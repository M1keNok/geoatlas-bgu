/**
 * data/data_module3.js — Раздел 3: Океаны, моря, заливы, проливы; глубоководные желоба; течения
 * ГеоАтлас v9.0 (Общее землеведение и картография)
 */

window.GEO_MODULES_REGISTRY = window.GEO_MODULES_REGISTRY || {};

const MODULE3_ITEMS = [
  {
    "id": "m3_sea_pacific_ocean",
    "moduleId": "module3",
    "submoduleId": "m3_seas_pacific",
    "category": "seas",
    "categoryRu": "Моря и океаны",
    "difficulty": "Стандартный",
    "name": "Тихий океан",
    "aliases": [
      "Великий океан"
    ],
    "region": "Тихий океан",
    "locationDesc": "Бассейн: Тихий океан",
    "mapPrompt": "Покажите на карте: Тихий океан",
    "geometryType": "point",
    "lat": 0,
    "lng": -160,
    "hitRadiusKm": 800,
    "bounds": null,
    "badgeColor": "blue",
    "oceanBasin": "pacific",
    "areaThousandKm2": 178680,
    "maxDepthM": 11022,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите океанический бассейн, площадь и наибольшую глубину: Тихий океан",
      "backMainAnswer": "Тихий океан • 11022 м (пл. 178680 тыс. км²)",
      "backMetrics": [
        {
          "label": "Океанический бассейн",
          "value": "Тихий океан"
        },
        {
          "label": "Наибольшая глубина",
          "value": "11022 м"
        },
        {
          "label": "Площадь",
          "value": "178680 тыс. км²"
        }
      ],
      "backNote": "Площадь 178,68 млн км² (~50% Мирового океана), макс. глубина 11 022 м (Марианский желоб)."
    },
    "isCoreLandmark": true
  },
  {
    "id": "m3_sea_atlantic_ocean",
    "moduleId": "module3",
    "submoduleId": "m3_seas_atlantic",
    "category": "seas",
    "categoryRu": "Моря и океаны",
    "difficulty": "Стандартный",
    "name": "Атлантический океан",
    "aliases": [],
    "region": "Атлантический океан",
    "locationDesc": "Бассейн: Атлантический океан",
    "mapPrompt": "Покажите на карте: Атлантический океан",
    "geometryType": "point",
    "lat": 10,
    "lng": -30,
    "hitRadiusKm": 800,
    "bounds": null,
    "badgeColor": "blue",
    "oceanBasin": "atlantic",
    "areaThousandKm2": 91660,
    "maxDepthM": 8742,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите океанический бассейн, площадь и наибольшую глубину: Атлантический океан",
      "backMainAnswer": "Атлантический океан • 8742 м (пл. 91660 тыс. км²)",
      "backMetrics": [
        {
          "label": "Океанический бассейн",
          "value": "Атлантический океан"
        },
        {
          "label": "Наибольшая глубина",
          "value": "8742 м"
        },
        {
          "label": "Площадь",
          "value": "91660 тыс. км²"
        }
      ],
      "backNote": "Площадь 91,66 млн км² (~25% Мирового океана), макс. глубина 8 742 м (желоб Пуэрто-Рико)."
    },
    "isCoreLandmark": true
  },
  {
    "id": "m3_sea_indian_ocean",
    "moduleId": "module3",
    "submoduleId": "m3_seas_indian",
    "category": "seas",
    "categoryRu": "Моря и океаны",
    "difficulty": "Стандартный",
    "name": "Индийский океан",
    "aliases": [],
    "region": "Индийский океан",
    "locationDesc": "Бассейн: Индийский океан",
    "mapPrompt": "Покажите на карте: Индийский океан",
    "geometryType": "point",
    "lat": -15,
    "lng": 75,
    "hitRadiusKm": 800,
    "bounds": null,
    "badgeColor": "blue",
    "oceanBasin": "indian",
    "areaThousandKm2": 76170,
    "maxDepthM": 7729,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите океанический бассейн, площадь и наибольшую глубину: Индийский океан",
      "backMainAnswer": "Индийский океан • 7729 м (пл. 76170 тыс. км²)",
      "backMetrics": [
        {
          "label": "Океанический бассейн",
          "value": "Индийский океан"
        },
        {
          "label": "Наибольшая глубина",
          "value": "7729 м"
        },
        {
          "label": "Площадь",
          "value": "76170 тыс. км²"
        }
      ],
      "backNote": "Площадь 76,17 млн км² (~21% Мирового океана), макс. глубина 7 729 м (Зондский желоб)."
    },
    "isCoreLandmark": true
  },
  {
    "id": "m3_sea_arctic_ocean",
    "moduleId": "module3",
    "submoduleId": "m3_seas_arctic",
    "category": "seas",
    "categoryRu": "Моря и океаны",
    "difficulty": "Стандартный",
    "name": "Северный Ледовитый океан",
    "aliases": [
      "СЛО"
    ],
    "region": "Северный Ледовитый океан",
    "locationDesc": "Бассейн: Северный Ледовитый океан",
    "mapPrompt": "Покажите на карте: Северный Ледовитый океан",
    "geometryType": "point",
    "lat": 85,
    "lng": 40,
    "hitRadiusKm": 700,
    "bounds": null,
    "badgeColor": "blue",
    "oceanBasin": "arctic",
    "areaThousandKm2": 14750,
    "maxDepthM": 5527,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите океанический бассейн, площадь и наибольшую глубину: Северный Ледовитый океан",
      "backMainAnswer": "Северный Ледовитый океан • 5527 м (пл. 14750 тыс. км²)",
      "backMetrics": [
        {
          "label": "Океанический бассейн",
          "value": "Северный Ледовитый океан"
        },
        {
          "label": "Наибольшая глубина",
          "value": "5527 м"
        },
        {
          "label": "Площадь",
          "value": "14750 тыс. км²"
        }
      ],
      "backNote": "Площадь 14,75 млн км² (~4% Мирового океана), макс. глубина 5 527 м (Гренландское море) / ущелье Литке 5 449 м."
    },
    "isCoreLandmark": true
  },
  {
    "id": "m3_sea_southern_ocean",
    "moduleId": "module3",
    "submoduleId": "m3_seas_southern",
    "category": "seas",
    "categoryRu": "Моря и океаны",
    "difficulty": "Стандартный",
    "name": "Южный океан (по Рылюку и Еловичевой)",
    "aliases": [
      "Антарктический океан"
    ],
    "region": "Южный океан",
    "locationDesc": "Бассейн: Южный океан",
    "mapPrompt": "Покажите на карте: Южный океан (по Рылюку и Еловичевой)",
    "geometryType": "point",
    "lat": -60,
    "lng": 0,
    "hitRadiusKm": 800,
    "bounds": null,
    "badgeColor": "blue",
    "oceanBasin": "southern",
    "areaThousandKm2": 86000,
    "maxDepthM": 8264,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите океанический бассейн, площадь и наибольшую глубину: Южный океан (по Рылюку и Еловичевой)",
      "backMainAnswer": "Южный океан • 8264 м (пл. 86000 тыс. км²)",
      "backMetrics": [
        {
          "label": "Океанический бассейн",
          "value": "Южный океан"
        },
        {
          "label": "Наибольшая глубина",
          "value": "8264 м"
        },
        {
          "label": "Площадь",
          "value": "86000 тыс. км²"
        }
      ],
      "backNote": "Площадь ~86 млн км² (по Г.Я. Рылюку и Я.К. Еловичевой, 2005). Северная граница — линия антарктической конвергенции (40-60° ю.ш.)."
    },
    "isCoreLandmark": true
  },
  {
    "id": "m3_sea_amundsen",
    "moduleId": "module3",
    "submoduleId": "m3_seas_pacific",
    "category": "seas",
    "categoryRu": "Моря и океаны",
    "difficulty": "Стандартный",
    "name": "Море Амундсена",
    "aliases": [],
    "region": "Тихий океан",
    "locationDesc": "Бассейн: Тихий океан",
    "mapPrompt": "Покажите на карте: Море Амундсена",
    "geometryType": "point",
    "lat": -73,
    "lng": -112,
    "hitRadiusKm": 320,
    "bounds": null,
    "badgeColor": "blue",
    "oceanBasin": "pacific",
    "areaThousandKm2": 98,
    "maxDepthM": 585,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите океанический бассейн, площадь и наибольшую глубину: Море Амундсена",
      "backMainAnswer": "Тихий океан • 585 м (пл. 98 тыс. км²)",
      "backMetrics": [
        {
          "label": "Океанический бассейн",
          "value": "Тихий океан"
        },
        {
          "label": "Наибольшая глубина",
          "value": "585 м"
        },
        {
          "label": "Площадь",
          "value": "98 тыс. км²"
        }
      ],
      "backNote": "Море Амундсена (Тихий океан), глубина до 585 м."
    },
    "isCoreLandmark": false
  },
  {
    "id": "m3_sea_banda",
    "moduleId": "module3",
    "submoduleId": "m3_seas_pacific",
    "category": "seas",
    "categoryRu": "Моря и океаны",
    "difficulty": "Стандартный",
    "name": "Море Банда",
    "aliases": [],
    "region": "Тихий океан",
    "locationDesc": "Бассейн: Тихий океан",
    "mapPrompt": "Покажите на карте: Море Банда",
    "geometryType": "point",
    "lat": -5.5,
    "lng": 127,
    "hitRadiusKm": 320,
    "bounds": null,
    "badgeColor": "blue",
    "oceanBasin": "pacific",
    "areaThousandKm2": 714,
    "maxDepthM": 7440,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите океанический бассейн, площадь и наибольшую глубину: Море Банда",
      "backMainAnswer": "Тихий океан • 7440 м (пл. 714 тыс. км²)",
      "backMetrics": [
        {
          "label": "Океанический бассейн",
          "value": "Тихий океан"
        },
        {
          "label": "Наибольшая глубина",
          "value": "7440 м"
        },
        {
          "label": "Площадь",
          "value": "714 тыс. км²"
        }
      ],
      "backNote": "Море Банда (Тихий океан), глубина до 7440 м."
    },
    "isCoreLandmark": false
  },
  {
    "id": "m3_sea_bellingshausen",
    "moduleId": "module3",
    "submoduleId": "m3_seas_pacific",
    "category": "seas",
    "categoryRu": "Моря и океаны",
    "difficulty": "Стандартный",
    "name": "Море Беллинсгаузена",
    "aliases": [],
    "region": "Тихий океан",
    "locationDesc": "Бассейн: Тихий океан",
    "mapPrompt": "Покажите на карте: Море Беллинсгаузена",
    "geometryType": "point",
    "lat": -71,
    "lng": -85,
    "hitRadiusKm": 320,
    "bounds": null,
    "badgeColor": "blue",
    "oceanBasin": "pacific",
    "areaThousandKm2": 487,
    "maxDepthM": 4115,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите океанический бассейн, площадь и наибольшую глубину: Море Беллинсгаузена",
      "backMainAnswer": "Тихий океан • 4115 м (пл. 487 тыс. км²)",
      "backMetrics": [
        {
          "label": "Океанический бассейн",
          "value": "Тихий океан"
        },
        {
          "label": "Наибольшая глубина",
          "value": "4115 м"
        },
        {
          "label": "Площадь",
          "value": "487 тыс. км²"
        }
      ],
      "backNote": "Море Беллинсгаузена (Тихий океан), глубина до 4115 м."
    },
    "isCoreLandmark": false
  },
  {
    "id": "m3_sea_bering",
    "moduleId": "module3",
    "submoduleId": "m3_seas_pacific",
    "category": "seas",
    "categoryRu": "Моря и океаны",
    "difficulty": "Стандартный",
    "name": "Берингово море",
    "aliases": [],
    "region": "Тихий океан",
    "locationDesc": "Бассейн: Тихий океан",
    "mapPrompt": "Покажите на карте: Берингово море",
    "geometryType": "point",
    "lat": 58,
    "lng": 175,
    "hitRadiusKm": 320,
    "bounds": [
      52,
      162,
      65.5,
      -162
    ],
    "badgeColor": "blue",
    "oceanBasin": "pacific",
    "areaThousandKm2": 2315,
    "maxDepthM": 5500,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите океанический бассейн, площадь и наибольшую глубину: Берингово море",
      "backMainAnswer": "Тихий океан • 5500 м (пл. 2315 тыс. км²)",
      "backMetrics": [
        {
          "label": "Океанический бассейн",
          "value": "Тихий океан"
        },
        {
          "label": "Наибольшая глубина",
          "value": "5500 м"
        },
        {
          "label": "Площадь",
          "value": "2315 тыс. км²"
        }
      ],
      "backNote": "Берингово море (Тихий океан), глубина до 5500 м."
    },
    "isCoreLandmark": true
  },
  {
    "id": "m3_sea_seto_inland",
    "moduleId": "module3",
    "submoduleId": "m3_seas_pacific",
    "category": "seas",
    "categoryRu": "Моря и океаны",
    "difficulty": "Стандартный",
    "name": "Внутреннее Японское море (Сето-Найкай)",
    "aliases": [
      "Сето-Найкай"
    ],
    "region": "Тихий океан",
    "locationDesc": "Бассейн: Тихий океан",
    "mapPrompt": "Покажите на карте: Внутреннее Японское море (Сето-Найкай)",
    "geometryType": "point",
    "lat": 34.3,
    "lng": 133.5,
    "hitRadiusKm": 320,
    "bounds": null,
    "badgeColor": "blue",
    "oceanBasin": "pacific",
    "areaThousandKm2": 18,
    "maxDepthM": 74,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите океанический бассейн, площадь и наибольшую глубину: Внутреннее Японское море (Сето-Найкай)",
      "backMainAnswer": "Тихий океан • 74 м (пл. 18 тыс. км²)",
      "backMetrics": [
        {
          "label": "Океанический бассейн",
          "value": "Тихий океан"
        },
        {
          "label": "Наибольшая глубина",
          "value": "74 м"
        },
        {
          "label": "Площадь",
          "value": "18 тыс. км²"
        }
      ],
      "backNote": "Внутреннее Японское море (Сето-Найкай) (Тихий океан), глубина до 74 м."
    },
    "isCoreLandmark": true
  },
  {
    "id": "m3_sea_east_china",
    "moduleId": "module3",
    "submoduleId": "m3_seas_pacific",
    "category": "seas",
    "categoryRu": "Моря и океаны",
    "difficulty": "Стандартный",
    "name": "Восточно-Китайское море",
    "aliases": [],
    "region": "Тихий океан",
    "locationDesc": "Бассейн: Тихий океан",
    "mapPrompt": "Покажите на карте: Восточно-Китайское море",
    "geometryType": "point",
    "lat": 29,
    "lng": 125,
    "hitRadiusKm": 320,
    "bounds": [
      24,
      120,
      33.5,
      130
    ],
    "badgeColor": "blue",
    "oceanBasin": "pacific",
    "areaThousandKm2": 836,
    "maxDepthM": 2719,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите океанический бассейн, площадь и наибольшую глубину: Восточно-Китайское море",
      "backMainAnswer": "Тихий океан • 2719 м (пл. 836 тыс. км²)",
      "backMetrics": [
        {
          "label": "Океанический бассейн",
          "value": "Тихий океан"
        },
        {
          "label": "Наибольшая глубина",
          "value": "2719 м"
        },
        {
          "label": "Площадь",
          "value": "836 тыс. км²"
        }
      ],
      "backNote": "Восточно-Китайское море (Тихий океан), глубина до 2719 м."
    },
    "isCoreLandmark": true
  },
  {
    "id": "m3_sea_yellow",
    "moduleId": "module3",
    "submoduleId": "m3_seas_pacific",
    "category": "seas",
    "categoryRu": "Моря и океаны",
    "difficulty": "Стандартный",
    "name": "Жёлтое море",
    "aliases": [],
    "region": "Тихий океан",
    "locationDesc": "Бассейн: Тихий океан",
    "mapPrompt": "Покажите на карте: Жёлтое море",
    "geometryType": "point",
    "lat": 35,
    "lng": 123,
    "hitRadiusKm": 320,
    "bounds": [
      33.5,
      118,
      40.5,
      126.5
    ],
    "badgeColor": "blue",
    "oceanBasin": "pacific",
    "areaThousandKm2": 416,
    "maxDepthM": 106,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите океанический бассейн, площадь и наибольшую глубину: Жёлтое море",
      "backMainAnswer": "Тихий океан • 106 м (пл. 416 тыс. км²)",
      "backMetrics": [
        {
          "label": "Океанический бассейн",
          "value": "Тихий океан"
        },
        {
          "label": "Наибольшая глубина",
          "value": "106 м"
        },
        {
          "label": "Площадь",
          "value": "416 тыс. км²"
        }
      ],
      "backNote": "Жёлтое море (Тихий океан), глубина до 106 м."
    },
    "isCoreLandmark": true
  },
  {
    "id": "m3_sea_coral",
    "moduleId": "module3",
    "submoduleId": "m3_seas_pacific",
    "category": "seas",
    "categoryRu": "Моря и океаны",
    "difficulty": "Стандартный",
    "name": "Коралловое море",
    "aliases": [],
    "region": "Тихий океан",
    "locationDesc": "Бассейн: Тихий океан",
    "mapPrompt": "Покажите на карте: Коралловое море",
    "geometryType": "point",
    "lat": -18,
    "lng": 153,
    "hitRadiusKm": 320,
    "bounds": [
      -24,
      143,
      -9,
      166
    ],
    "badgeColor": "blue",
    "oceanBasin": "pacific",
    "areaThousandKm2": 4068,
    "maxDepthM": 9174,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите океанический бассейн, площадь и наибольшую глубину: Коралловое море",
      "backMainAnswer": "Тихий океан • 9174 м (пл. 4068 тыс. км²)",
      "backMetrics": [
        {
          "label": "Океанический бассейн",
          "value": "Тихий океан"
        },
        {
          "label": "Наибольшая глубина",
          "value": "9174 м"
        },
        {
          "label": "Площадь",
          "value": "4068 тыс. км²"
        }
      ],
      "backNote": "Коралловое море (Тихий океан), глубина до 9174 м."
    },
    "isCoreLandmark": true
  },
  {
    "id": "m3_sea_molucca",
    "moduleId": "module3",
    "submoduleId": "m3_seas_pacific",
    "category": "seas",
    "categoryRu": "Моря и океаны",
    "difficulty": "Стандартный",
    "name": "Молуккское море",
    "aliases": [],
    "region": "Тихий океан",
    "locationDesc": "Бассейн: Тихий океан",
    "mapPrompt": "Покажите на карте: Молуккское море",
    "geometryType": "point",
    "lat": 1,
    "lng": 126,
    "hitRadiusKm": 320,
    "bounds": null,
    "badgeColor": "blue",
    "oceanBasin": "pacific",
    "areaThousandKm2": 291,
    "maxDepthM": 4180,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите океанический бассейн, площадь и наибольшую глубину: Молуккское море",
      "backMainAnswer": "Тихий океан • 4180 м (пл. 291 тыс. км²)",
      "backMetrics": [
        {
          "label": "Океанический бассейн",
          "value": "Тихий океан"
        },
        {
          "label": "Наибольшая глубина",
          "value": "4180 м"
        },
        {
          "label": "Площадь",
          "value": "291 тыс. км²"
        }
      ],
      "backNote": "Молуккское море (Тихий океан), глубина до 4180 м."
    },
    "isCoreLandmark": false
  },
  {
    "id": "m3_sea_okhotsk",
    "moduleId": "module3",
    "submoduleId": "m3_seas_pacific",
    "category": "seas",
    "categoryRu": "Моря и океаны",
    "difficulty": "Стандартный",
    "name": "Охотское море",
    "aliases": [],
    "region": "Тихий океан",
    "locationDesc": "Бассейн: Тихий океан",
    "mapPrompt": "Покажите на карте: Охотское море",
    "geometryType": "point",
    "lat": 54,
    "lng": 150,
    "hitRadiusKm": 320,
    "bounds": [
      44,
      136,
      62,
      162
    ],
    "badgeColor": "blue",
    "oceanBasin": "pacific",
    "areaThousandKm2": 1603,
    "maxDepthM": 3521,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите океанический бассейн, площадь и наибольшую глубину: Охотское море",
      "backMainAnswer": "Тихий океан • 3521 м (пл. 1603 тыс. км²)",
      "backMetrics": [
        {
          "label": "Океанический бассейн",
          "value": "Тихий океан"
        },
        {
          "label": "Наибольшая глубина",
          "value": "3521 м"
        },
        {
          "label": "Площадь",
          "value": "1603 тыс. км²"
        }
      ],
      "backNote": "Охотское море (Тихий океан), глубина до 3521 м."
    },
    "isCoreLandmark": true
  },
  {
    "id": "m3_sea_ross",
    "moduleId": "module3",
    "submoduleId": "m3_seas_pacific",
    "category": "seas",
    "categoryRu": "Моря и океаны",
    "difficulty": "Стандартный",
    "name": "Море Росса",
    "aliases": [],
    "region": "Тихий океан",
    "locationDesc": "Бассейн: Тихий океан",
    "mapPrompt": "Покажите на карте: Море Росса",
    "geometryType": "point",
    "lat": -75,
    "lng": 175,
    "hitRadiusKm": 320,
    "bounds": [
      -78.5,
      162,
      -69,
      -158
    ],
    "badgeColor": "blue",
    "oceanBasin": "pacific",
    "areaThousandKm2": 440,
    "maxDepthM": 2972,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите океанический бассейн, площадь и наибольшую глубину: Море Росса",
      "backMainAnswer": "Тихий океан • 2972 м (пл. 440 тыс. км²)",
      "backMetrics": [
        {
          "label": "Океанический бассейн",
          "value": "Тихий океан"
        },
        {
          "label": "Наибольшая глубина",
          "value": "2972 м"
        },
        {
          "label": "Площадь",
          "value": "440 тыс. км²"
        }
      ],
      "backNote": "Море Росса (Тихий океан), глубина до 2972 м."
    },
    "isCoreLandmark": true
  },
  {
    "id": "m3_sea_seram",
    "moduleId": "module3",
    "submoduleId": "m3_seas_pacific",
    "category": "seas",
    "categoryRu": "Моря и океаны",
    "difficulty": "Стандартный",
    "name": "Море Серам",
    "aliases": [],
    "region": "Тихий океан",
    "locationDesc": "Бассейн: Тихий океан",
    "mapPrompt": "Покажите на карте: Море Серам",
    "geometryType": "point",
    "lat": -2.5,
    "lng": 128.5,
    "hitRadiusKm": 320,
    "bounds": null,
    "badgeColor": "blue",
    "oceanBasin": "pacific",
    "areaThousandKm2": 161,
    "maxDepthM": 5319,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите океанический бассейн, площадь и наибольшую глубину: Море Серам",
      "backMainAnswer": "Тихий океан • 5319 м (пл. 161 тыс. км²)",
      "backMetrics": [
        {
          "label": "Океанический бассейн",
          "value": "Тихий океан"
        },
        {
          "label": "Наибольшая глубина",
          "value": "5319 м"
        },
        {
          "label": "Площадь",
          "value": "161 тыс. км²"
        }
      ],
      "backNote": "Море Серам (Тихий океан), глубина до 5319 м."
    },
    "isCoreLandmark": false
  },
  {
    "id": "m3_sea_sulawesi",
    "moduleId": "module3",
    "submoduleId": "m3_seas_pacific",
    "category": "seas",
    "categoryRu": "Моря и океаны",
    "difficulty": "Стандартный",
    "name": "Море Сулавеси (Целебесское)",
    "aliases": [
      "Целебесское море"
    ],
    "region": "Тихий океан",
    "locationDesc": "Бассейн: Тихий океан",
    "mapPrompt": "Покажите на карте: Море Сулавеси (Целебесское)",
    "geometryType": "point",
    "lat": 3.5,
    "lng": 122,
    "hitRadiusKm": 320,
    "bounds": null,
    "badgeColor": "blue",
    "oceanBasin": "pacific",
    "areaThousandKm2": 453,
    "maxDepthM": 5914,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите океанический бассейн, площадь и наибольшую глубину: Море Сулавеси (Целебесское)",
      "backMainAnswer": "Тихий океан • 5914 м (пл. 453 тыс. км²)",
      "backMetrics": [
        {
          "label": "Океанический бассейн",
          "value": "Тихий океан"
        },
        {
          "label": "Наибольшая глубина",
          "value": "5914 м"
        },
        {
          "label": "Площадь",
          "value": "453 тыс. км²"
        }
      ],
      "backNote": "Море Сулавеси (Целебесское) (Тихий океан), глубина до 5914 м."
    },
    "isCoreLandmark": false
  },
  {
    "id": "m3_sea_sulu",
    "moduleId": "module3",
    "submoduleId": "m3_seas_pacific",
    "category": "seas",
    "categoryRu": "Моря и океаны",
    "difficulty": "Стандартный",
    "name": "Море Сулу",
    "aliases": [],
    "region": "Тихий океан",
    "locationDesc": "Бассейн: Тихий океан",
    "mapPrompt": "Покажите на карте: Море Сулу",
    "geometryType": "point",
    "lat": 8.5,
    "lng": 120,
    "hitRadiusKm": 320,
    "bounds": null,
    "badgeColor": "blue",
    "oceanBasin": "pacific",
    "areaThousandKm2": 335,
    "maxDepthM": 5576,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите океанический бассейн, площадь и наибольшую глубину: Море Сулу",
      "backMainAnswer": "Тихий океан • 5576 м (пл. 335 тыс. км²)",
      "backMetrics": [
        {
          "label": "Океанический бассейн",
          "value": "Тихий океан"
        },
        {
          "label": "Наибольшая глубина",
          "value": "5576 м"
        },
        {
          "label": "Площадь",
          "value": "335 тыс. км²"
        }
      ],
      "backNote": "Море Сулу (Тихий океан), глубина до 5576 м."
    },
    "isCoreLandmark": false
  },
  {
    "id": "m3_sea_tasman",
    "moduleId": "module3",
    "submoduleId": "m3_seas_pacific",
    "category": "seas",
    "categoryRu": "Моря и океаны",
    "difficulty": "Стандартный",
    "name": "Тасманово море",
    "aliases": [],
    "region": "Тихий океан",
    "locationDesc": "Бассейн: Тихий океан",
    "mapPrompt": "Покажите на карте: Тасманово море",
    "geometryType": "point",
    "lat": -38,
    "lng": 160,
    "hitRadiusKm": 320,
    "bounds": [
      -46,
      148,
      -28,
      173
    ],
    "badgeColor": "blue",
    "oceanBasin": "pacific",
    "areaThousandKm2": 3336,
    "maxDepthM": 6015,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите океанический бассейн, площадь и наибольшую глубину: Тасманово море",
      "backMainAnswer": "Тихий океан • 6015 м (пл. 3336 тыс. км²)",
      "backMetrics": [
        {
          "label": "Океанический бассейн",
          "value": "Тихий океан"
        },
        {
          "label": "Наибольшая глубина",
          "value": "6015 м"
        },
        {
          "label": "Площадь",
          "value": "3336 тыс. км²"
        }
      ],
      "backNote": "Тасманово море (Тихий океан), глубина до 6015 м."
    },
    "isCoreLandmark": true
  },
  {
    "id": "m3_sea_fiji",
    "moduleId": "module3",
    "submoduleId": "m3_seas_pacific",
    "category": "seas",
    "categoryRu": "Моря и океаны",
    "difficulty": "Стандартный",
    "name": "Море Фиджи",
    "aliases": [],
    "region": "Тихий океан",
    "locationDesc": "Бассейн: Тихий океан",
    "mapPrompt": "Покажите на карте: Море Фиджи",
    "geometryType": "point",
    "lat": -20,
    "lng": 175,
    "hitRadiusKm": 320,
    "bounds": null,
    "badgeColor": "blue",
    "oceanBasin": "pacific",
    "areaThousandKm2": 3177,
    "maxDepthM": 7633,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите океанический бассейн, площадь и наибольшую глубину: Море Фиджи",
      "backMainAnswer": "Тихий океан • 7633 м (пл. 3177 тыс. км²)",
      "backMetrics": [
        {
          "label": "Океанический бассейн",
          "value": "Тихий океан"
        },
        {
          "label": "Наибольшая глубина",
          "value": "7633 м"
        },
        {
          "label": "Площадь",
          "value": "3177 тыс. км²"
        }
      ],
      "backNote": "Море Фиджи (Тихий океан), глубина до 7633 м."
    },
    "isCoreLandmark": false
  },
  {
    "id": "m3_sea_philippine",
    "moduleId": "module3",
    "submoduleId": "m3_seas_pacific",
    "category": "seas",
    "categoryRu": "Моря и океаны",
    "difficulty": "Стандартный",
    "name": "Филиппинское море",
    "aliases": [],
    "region": "Тихий океан",
    "locationDesc": "Бассейн: Тихий океан",
    "mapPrompt": "Покажите на карте: Филиппинское море",
    "geometryType": "point",
    "lat": 18,
    "lng": 134,
    "hitRadiusKm": 320,
    "bounds": [
      5,
      122,
      32,
      146
    ],
    "badgeColor": "blue",
    "oceanBasin": "pacific",
    "areaThousandKm2": 5726,
    "maxDepthM": 10265,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите океанический бассейн, площадь и наибольшую глубину: Филиппинское море",
      "backMainAnswer": "Тихий океан • 10265 м (пл. 5726 тыс. км²)",
      "backMetrics": [
        {
          "label": "Океанический бассейн",
          "value": "Тихий океан"
        },
        {
          "label": "Наибольшая глубина",
          "value": "10265 м"
        },
        {
          "label": "Площадь",
          "value": "5726 тыс. км²"
        }
      ],
      "backNote": "Филиппинское море (Тихий океан), глубина до 10265 м."
    },
    "isCoreLandmark": true
  },
  {
    "id": "m3_sea_south_china",
    "moduleId": "module3",
    "submoduleId": "m3_seas_pacific",
    "category": "seas",
    "categoryRu": "Моря и океаны",
    "difficulty": "Стандартный",
    "name": "Южно-Китайское море",
    "aliases": [],
    "region": "Тихий океан",
    "locationDesc": "Бассейн: Тихий океан",
    "mapPrompt": "Покажите на карте: Южно-Китайское море",
    "geometryType": "point",
    "lat": 12,
    "lng": 114,
    "hitRadiusKm": 320,
    "bounds": [
      1,
      104,
      23,
      121
    ],
    "badgeColor": "blue",
    "oceanBasin": "pacific",
    "areaThousandKm2": 3537,
    "maxDepthM": 5560,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите океанический бассейн, площадь и наибольшую глубину: Южно-Китайское море",
      "backMainAnswer": "Тихий океан • 5560 м (пл. 3537 тыс. км²)",
      "backMetrics": [
        {
          "label": "Океанический бассейн",
          "value": "Тихий океан"
        },
        {
          "label": "Наибольшая глубина",
          "value": "5560 м"
        },
        {
          "label": "Площадь",
          "value": "3537 тыс. км²"
        }
      ],
      "backNote": "Южно-Китайское море (Тихий океан), глубина до 5560 м."
    },
    "isCoreLandmark": true
  },
  {
    "id": "m3_sea_java",
    "moduleId": "module3",
    "submoduleId": "m3_seas_pacific",
    "category": "seas",
    "categoryRu": "Моря и океаны",
    "difficulty": "Стандартный",
    "name": "Яванское море",
    "aliases": [],
    "region": "Тихий океан",
    "locationDesc": "Бассейн: Тихий океан",
    "mapPrompt": "Покажите на карте: Яванское море",
    "geometryType": "point",
    "lat": -5,
    "lng": 111,
    "hitRadiusKm": 320,
    "bounds": [
      -7.5,
      105,
      -3,
      118
    ],
    "badgeColor": "blue",
    "oceanBasin": "pacific",
    "areaThousandKm2": 552,
    "maxDepthM": 1272,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите океанический бассейн, площадь и наибольшую глубину: Яванское море",
      "backMainAnswer": "Тихий океан • 1272 м (пл. 552 тыс. км²)",
      "backMetrics": [
        {
          "label": "Океанический бассейн",
          "value": "Тихий океан"
        },
        {
          "label": "Наибольшая глубина",
          "value": "1272 м"
        },
        {
          "label": "Площадь",
          "value": "552 тыс. км²"
        }
      ],
      "backNote": "Яванское море (Тихий океан), глубина до 1272 м."
    },
    "isCoreLandmark": true
  },
  {
    "id": "m3_sea_japan",
    "moduleId": "module3",
    "submoduleId": "m3_seas_pacific",
    "category": "seas",
    "categoryRu": "Моря и океаны",
    "difficulty": "Стандартный",
    "name": "Японское море",
    "aliases": [],
    "region": "Тихий океан",
    "locationDesc": "Бассейн: Тихий океан",
    "mapPrompt": "Покажите на карте: Японское море",
    "geometryType": "point",
    "lat": 40,
    "lng": 135,
    "hitRadiusKm": 320,
    "bounds": [
      34.5,
      128,
      51,
      141.5
    ],
    "badgeColor": "blue",
    "oceanBasin": "pacific",
    "areaThousandKm2": 1062,
    "maxDepthM": 3720,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите океанический бассейн, площадь и наибольшую глубину: Японское море",
      "backMainAnswer": "Тихий океан • 3720 м (пл. 1062 тыс. км²)",
      "backMetrics": [
        {
          "label": "Океанический бассейн",
          "value": "Тихий океан"
        },
        {
          "label": "Наибольшая глубина",
          "value": "3720 м"
        },
        {
          "label": "Площадь",
          "value": "1062 тыс. км²"
        }
      ],
      "backNote": "Японское море (Тихий океан), глубина до 3720 м."
    },
    "isCoreLandmark": true
  },
  {
    "id": "m3_sea_azov",
    "moduleId": "module3",
    "submoduleId": "m3_seas_atlantic",
    "category": "seas",
    "categoryRu": "Моря и океаны",
    "difficulty": "Стандартный",
    "name": "Азовское море",
    "aliases": [],
    "region": "Атлантический океан",
    "locationDesc": "Бассейн: Атлантический океан",
    "mapPrompt": "Покажите на карте: Азовское море",
    "geometryType": "point",
    "lat": 46,
    "lng": 36.5,
    "hitRadiusKm": 180,
    "bounds": null,
    "badgeColor": "blue",
    "oceanBasin": "atlantic",
    "areaThousandKm2": 39,
    "maxDepthM": 15,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите океанический бассейн, площадь и наибольшую глубину: Азовское море",
      "backMainAnswer": "Атлантический океан • 15 м (пл. 39 тыс. км²)",
      "backMetrics": [
        {
          "label": "Океанический бассейн",
          "value": "Атлантический океан"
        },
        {
          "label": "Наибольшая глубина",
          "value": "15 м"
        },
        {
          "label": "Площадь",
          "value": "39 тыс. км²"
        }
      ],
      "backNote": "Самое мелкое море мира (макс. глубина 15 м, средняя около 7-8 м)."
    },
    "isCoreLandmark": true
  },
  {
    "id": "m3_sea_baltic",
    "moduleId": "module3",
    "submoduleId": "m3_seas_atlantic",
    "category": "seas",
    "categoryRu": "Моря и океаны",
    "difficulty": "Стандартный",
    "name": "Балтийское море",
    "aliases": [],
    "region": "Атлантический океан",
    "locationDesc": "Бассейн: Атлантический океан",
    "mapPrompt": "Покажите на карте: Балтийское море",
    "geometryType": "point",
    "lat": 58,
    "lng": 20,
    "hitRadiusKm": 320,
    "bounds": [
      53.5,
      10,
      65.5,
      29.5
    ],
    "badgeColor": "blue",
    "oceanBasin": "atlantic",
    "areaThousandKm2": 419,
    "maxDepthM": 470,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите океанический бассейн, площадь и наибольшую глубину: Балтийское море",
      "backMainAnswer": "Атлантический океан • 470 м (пл. 419 тыс. км²)",
      "backMetrics": [
        {
          "label": "Океанический бассейн",
          "value": "Атлантический океан"
        },
        {
          "label": "Наибольшая глубина",
          "value": "470 м"
        },
        {
          "label": "Площадь",
          "value": "419 тыс. км²"
        }
      ],
      "backNote": "Балтийское море (Атлантический океан), глубина до 470 м."
    },
    "isCoreLandmark": true
  },
  {
    "id": "m3_sea_irish",
    "moduleId": "module3",
    "submoduleId": "m3_seas_atlantic",
    "category": "seas",
    "categoryRu": "Моря и океаны",
    "difficulty": "Стандартный",
    "name": "Ирландское море",
    "aliases": [],
    "region": "Атлантический океан",
    "locationDesc": "Бассейн: Атлантический океан",
    "mapPrompt": "Покажите на карте: Ирландское море",
    "geometryType": "point",
    "lat": 53.5,
    "lng": -5.5,
    "hitRadiusKm": 320,
    "bounds": null,
    "badgeColor": "blue",
    "oceanBasin": "atlantic",
    "areaThousandKm2": 47,
    "maxDepthM": 197,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите океанический бассейн, площадь и наибольшую глубину: Ирландское море",
      "backMainAnswer": "Атлантический океан • 197 м (пл. 47 тыс. км²)",
      "backMetrics": [
        {
          "label": "Океанический бассейн",
          "value": "Атлантический океан"
        },
        {
          "label": "Наибольшая глубина",
          "value": "197 м"
        },
        {
          "label": "Площадь",
          "value": "47 тыс. км²"
        }
      ],
      "backNote": "Ирландское море (Атлантический океан), глубина до 197 м."
    },
    "isCoreLandmark": false
  },
  {
    "id": "m3_sea_caribbean",
    "moduleId": "module3",
    "submoduleId": "m3_seas_atlantic",
    "category": "seas",
    "categoryRu": "Моря и океаны",
    "difficulty": "Стандартный",
    "name": "Карибское море",
    "aliases": [],
    "region": "Атлантический океан",
    "locationDesc": "Бассейн: Атлантический океан",
    "mapPrompt": "Покажите на карте: Карибское море",
    "geometryType": "point",
    "lat": 15,
    "lng": -75,
    "hitRadiusKm": 320,
    "bounds": [
      9,
      -88,
      22,
      -60
    ],
    "badgeColor": "blue",
    "oceanBasin": "atlantic",
    "areaThousandKm2": 2777,
    "maxDepthM": 7090,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите океанический бассейн, площадь и наибольшую глубину: Карибское море",
      "backMainAnswer": "Атлантический океан • 7090 м (пл. 2777 тыс. км²)",
      "backMetrics": [
        {
          "label": "Океанический бассейн",
          "value": "Атлантический океан"
        },
        {
          "label": "Наибольшая глубина",
          "value": "7090 м"
        },
        {
          "label": "Площадь",
          "value": "2777 тыс. км²"
        }
      ],
      "backNote": "Карибское море (Атлантический океан), глубина до 7090 м."
    },
    "isCoreLandmark": true
  },
  {
    "id": "m3_sea_lazarev",
    "moduleId": "module3",
    "submoduleId": "m3_seas_atlantic",
    "category": "seas",
    "categoryRu": "Моря и океаны",
    "difficulty": "Стандартный",
    "name": "Море Лазарева",
    "aliases": [],
    "region": "Атлантический океан",
    "locationDesc": "Бассейн: Атлантический океан",
    "mapPrompt": "Покажите на карте: Море Лазарева",
    "geometryType": "point",
    "lat": -68,
    "lng": 7,
    "hitRadiusKm": 320,
    "bounds": null,
    "badgeColor": "blue",
    "oceanBasin": "atlantic",
    "areaThousandKm2": 335,
    "maxDepthM": 4500,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите океанический бассейн, площадь и наибольшую глубину: Море Лазарева",
      "backMainAnswer": "Атлантический океан • 4500 м (пл. 335 тыс. км²)",
      "backMetrics": [
        {
          "label": "Океанический бассейн",
          "value": "Атлантический океан"
        },
        {
          "label": "Наибольшая глубина",
          "value": "4500 м"
        },
        {
          "label": "Площадь",
          "value": "335 тыс. км²"
        }
      ],
      "backNote": "Море Лазарева (Атлантический океан), глубина до 4500 м."
    },
    "isCoreLandmark": false
  },
  {
    "id": "m3_sea_marmara",
    "moduleId": "module3",
    "submoduleId": "m3_seas_atlantic",
    "category": "seas",
    "categoryRu": "Моря и океаны",
    "difficulty": "Стандартный",
    "name": "Мраморное море",
    "aliases": [],
    "region": "Атлантический океан",
    "locationDesc": "Бассейн: Атлантический океан",
    "mapPrompt": "Покажите на карте: Мраморное море",
    "geometryType": "point",
    "lat": 40.7,
    "lng": 28,
    "hitRadiusKm": 320,
    "bounds": null,
    "badgeColor": "blue",
    "oceanBasin": "atlantic",
    "areaThousandKm2": 12,
    "maxDepthM": 1273,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите океанический бассейн, площадь и наибольшую глубину: Мраморное море",
      "backMainAnswer": "Атлантический океан • 1273 м (пл. 12 тыс. км²)",
      "backMetrics": [
        {
          "label": "Океанический бассейн",
          "value": "Атлантический океан"
        },
        {
          "label": "Наибольшая глубина",
          "value": "1273 м"
        },
        {
          "label": "Площадь",
          "value": "12 тыс. км²"
        }
      ],
      "backNote": "Мраморное море (Атлантический океан), глубина до 1273 м."
    },
    "isCoreLandmark": false
  },
  {
    "id": "m3_sea_sargasso",
    "moduleId": "module3",
    "submoduleId": "m3_seas_atlantic",
    "category": "seas",
    "categoryRu": "Моря и океаны",
    "difficulty": "Стандартный",
    "name": "Саргассово море",
    "aliases": [],
    "region": "Атлантический океан",
    "locationDesc": "Бассейн: Атлантический океан",
    "mapPrompt": "Покажите на карте: Саргассово море",
    "geometryType": "point",
    "lat": 28,
    "lng": -66,
    "hitRadiusKm": 450,
    "bounds": [
      20,
      -76,
      35,
      -45
    ],
    "badgeColor": "blue",
    "oceanBasin": "atlantic",
    "areaThousandKm2": 6500,
    "maxDepthM": 7110,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите океанический бассейн, площадь и наибольшую глубину: Саргассово море",
      "backMainAnswer": "Атлантический океан • 7110 м (пл. 6500 тыс. км²)",
      "backMetrics": [
        {
          "label": "Океанический бассейн",
          "value": "Атлантический океан"
        },
        {
          "label": "Наибольшая глубина",
          "value": "7110 м"
        },
        {
          "label": "Площадь",
          "value": "6500 тыс. км²"
        }
      ],
      "backNote": "Море без берегов в центре Атлантического круговорота."
    },
    "isCoreLandmark": true
  },
  {
    "id": "m3_sea_north_sea",
    "moduleId": "module3",
    "submoduleId": "m3_seas_atlantic",
    "category": "seas",
    "categoryRu": "Моря и океаны",
    "difficulty": "Стандартный",
    "name": "Северное море",
    "aliases": [],
    "region": "Атлантический океан",
    "locationDesc": "Бассейн: Атлантический океан",
    "mapPrompt": "Покажите на карте: Северное море",
    "geometryType": "point",
    "lat": 56,
    "lng": 3,
    "hitRadiusKm": 320,
    "bounds": [
      51,
      -3,
      61.5,
      9
    ],
    "badgeColor": "blue",
    "oceanBasin": "atlantic",
    "areaThousandKm2": 565,
    "maxDepthM": 725,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите океанический бассейн, площадь и наибольшую глубину: Северное море",
      "backMainAnswer": "Атлантический океан • 725 м (пл. 565 тыс. км²)",
      "backMetrics": [
        {
          "label": "Океанический бассейн",
          "value": "Атлантический океан"
        },
        {
          "label": "Наибольшая глубина",
          "value": "725 м"
        },
        {
          "label": "Площадь",
          "value": "565 тыс. км²"
        }
      ],
      "backNote": "Северное море (Атлантический океан), глубина до 725 м."
    },
    "isCoreLandmark": true
  },
  {
    "id": "m3_sea_scotia",
    "moduleId": "module3",
    "submoduleId": "m3_seas_atlantic",
    "category": "seas",
    "categoryRu": "Моря и океаны",
    "difficulty": "Стандартный",
    "name": "Море Скоша (Скотия)",
    "aliases": [
      "Скотия"
    ],
    "region": "Атлантический океан",
    "locationDesc": "Бассейн: Атлантический океан",
    "mapPrompt": "Покажите на карте: Море Скоша (Скотия)",
    "geometryType": "point",
    "lat": -57,
    "lng": -45,
    "hitRadiusKm": 320,
    "bounds": [
      -62,
      -66,
      -52,
      -26
    ],
    "badgeColor": "blue",
    "oceanBasin": "atlantic",
    "areaThousandKm2": 1335,
    "maxDepthM": 6022,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите океанический бассейн, площадь и наибольшую глубину: Море Скоша (Скотия)",
      "backMainAnswer": "Атлантический океан • 6022 м (пл. 1335 тыс. км²)",
      "backMetrics": [
        {
          "label": "Океанический бассейн",
          "value": "Атлантический океан"
        },
        {
          "label": "Наибольшая глубина",
          "value": "6022 м"
        },
        {
          "label": "Площадь",
          "value": "1335 тыс. км²"
        }
      ],
      "backNote": "Море Скоша (Скотия) (Атлантический океан), глубина до 6022 м."
    },
    "isCoreLandmark": false
  },
  {
    "id": "m3_sea_mediterranean",
    "moduleId": "module3",
    "submoduleId": "m3_seas_atlantic",
    "category": "seas",
    "categoryRu": "Моря и океаны",
    "difficulty": "Стандартный",
    "name": "Средиземное море (Романское)",
    "aliases": [],
    "region": "Атлантический океан",
    "locationDesc": "Бассейн: Атлантический океан",
    "mapPrompt": "Покажите на карте: Средиземное море (Романское)",
    "geometryType": "point",
    "lat": 35,
    "lng": 18,
    "hitRadiusKm": 320,
    "bounds": [
      30.5,
      -5.5,
      44.5,
      36
    ],
    "badgeColor": "blue",
    "oceanBasin": "atlantic",
    "areaThousandKm2": 2505,
    "maxDepthM": 5121,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите океанический бассейн, площадь и наибольшую глубину: Средиземное море (Романское)",
      "backMainAnswer": "Атлантический океан • 5121 м (пл. 2505 тыс. км²)",
      "backMetrics": [
        {
          "label": "Океанический бассейн",
          "value": "Атлантический океан"
        },
        {
          "label": "Наибольшая глубина",
          "value": "5121 м"
        },
        {
          "label": "Площадь",
          "value": "2505 тыс. км²"
        }
      ],
      "backNote": "Средиземное море (Романское) (Атлантический океан), глубина до 5121 м."
    },
    "isCoreLandmark": true
  },
  {
    "id": "m3_sea_adriatic",
    "moduleId": "module3",
    "submoduleId": "m3_seas_atlantic",
    "category": "seas",
    "categoryRu": "Моря и океаны",
    "difficulty": "Стандартный",
    "name": "Адриатическое море",
    "aliases": [],
    "region": "Атлантический океан",
    "locationDesc": "Бассейн: Атлантический океан",
    "mapPrompt": "Покажите на карте: Адриатическое море",
    "geometryType": "point",
    "lat": 43,
    "lng": 15,
    "hitRadiusKm": 320,
    "bounds": [
      40,
      12.2,
      45.8,
      19.5
    ],
    "badgeColor": "blue",
    "oceanBasin": "atlantic",
    "areaThousandKm2": 144,
    "maxDepthM": 1230,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите океанический бассейн, площадь и наибольшую глубину: Адриатическое море",
      "backMainAnswer": "Атлантический океан • 1230 м (пл. 144 тыс. км²)",
      "backMetrics": [
        {
          "label": "Океанический бассейн",
          "value": "Атлантический океан"
        },
        {
          "label": "Наибольшая глубина",
          "value": "1230 м"
        },
        {
          "label": "Площадь",
          "value": "144 тыс. км²"
        }
      ],
      "backNote": "Адриатическое море (Атлантический океан), глубина до 1230 м."
    },
    "isCoreLandmark": false
  },
  {
    "id": "m3_sea_alboran",
    "moduleId": "module3",
    "submoduleId": "m3_seas_atlantic",
    "category": "seas",
    "categoryRu": "Моря и океаны",
    "difficulty": "Стандартный",
    "name": "Море Альборан",
    "aliases": [],
    "region": "Атлантический океан",
    "locationDesc": "Бассейн: Атлантический океан",
    "mapPrompt": "Покажите на карте: Море Альборан",
    "geometryType": "point",
    "lat": 36,
    "lng": -3,
    "hitRadiusKm": 320,
    "bounds": null,
    "badgeColor": "blue",
    "oceanBasin": "atlantic",
    "areaThousandKm2": 53,
    "maxDepthM": 2407,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите океанический бассейн, площадь и наибольшую глубину: Море Альборан",
      "backMainAnswer": "Атлантический океан • 2407 м (пл. 53 тыс. км²)",
      "backMetrics": [
        {
          "label": "Океанический бассейн",
          "value": "Атлантический океан"
        },
        {
          "label": "Наибольшая глубина",
          "value": "2407 м"
        },
        {
          "label": "Площадь",
          "value": "53 тыс. км²"
        }
      ],
      "backNote": "Море Альборан (Атлантический океан), глубина до 2407 м."
    },
    "isCoreLandmark": false
  },
  {
    "id": "m3_sea_ionian",
    "moduleId": "module3",
    "submoduleId": "m3_seas_atlantic",
    "category": "seas",
    "categoryRu": "Моря и океаны",
    "difficulty": "Стандартный",
    "name": "Ионическое море",
    "aliases": [],
    "region": "Атлантический океан",
    "locationDesc": "Бассейн: Атлантический океан",
    "mapPrompt": "Покажите на карте: Ионическое море",
    "geometryType": "point",
    "lat": 38,
    "lng": 18,
    "hitRadiusKm": 250,
    "bounds": null,
    "badgeColor": "blue",
    "oceanBasin": "atlantic",
    "areaThousandKm2": 169,
    "maxDepthM": 5121,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите океанический бассейн, площадь и наибольшую глубину: Ионическое море",
      "backMainAnswer": "Атлантический океан • 5121 м (пл. 169 тыс. км²)",
      "backMetrics": [
        {
          "label": "Океанический бассейн",
          "value": "Атлантический океан"
        },
        {
          "label": "Наибольшая глубина",
          "value": "5121 м"
        },
        {
          "label": "Площадь",
          "value": "169 тыс. км²"
        }
      ],
      "backNote": "Здесь находится глубочайшая впадина Средиземного моря — впадина Гелла (5 121 м)."
    },
    "isCoreLandmark": false
  },
  {
    "id": "m3_sea_ligurian",
    "moduleId": "module3",
    "submoduleId": "m3_seas_atlantic",
    "category": "seas",
    "categoryRu": "Моря и океаны",
    "difficulty": "Стандартный",
    "name": "Лигурийское море",
    "aliases": [],
    "region": "Атлантический океан",
    "locationDesc": "Бассейн: Атлантический океан",
    "mapPrompt": "Покажите на карте: Лигурийское море",
    "geometryType": "point",
    "lat": 43.5,
    "lng": 9,
    "hitRadiusKm": 320,
    "bounds": null,
    "badgeColor": "blue",
    "oceanBasin": "atlantic",
    "areaThousandKm2": 15,
    "maxDepthM": 2546,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите океанический бассейн, площадь и наибольшую глубину: Лигурийское море",
      "backMainAnswer": "Атлантический океан • 2546 м (пл. 15 тыс. км²)",
      "backMetrics": [
        {
          "label": "Океанический бассейн",
          "value": "Атлантический океан"
        },
        {
          "label": "Наибольшая глубина",
          "value": "2546 м"
        },
        {
          "label": "Площадь",
          "value": "15 тыс. км²"
        }
      ],
      "backNote": "Лигурийское море (Атлантический океан), глубина до 2546 м."
    },
    "isCoreLandmark": false
  },
  {
    "id": "m3_sea_tyrrhenian",
    "moduleId": "module3",
    "submoduleId": "m3_seas_atlantic",
    "category": "seas",
    "categoryRu": "Моря и океаны",
    "difficulty": "Стандартный",
    "name": "Тирренское море",
    "aliases": [],
    "region": "Атлантический океан",
    "locationDesc": "Бассейн: Атлантический океан",
    "mapPrompt": "Покажите на карте: Тирренское море",
    "geometryType": "point",
    "lat": 40,
    "lng": 12,
    "hitRadiusKm": 320,
    "bounds": null,
    "badgeColor": "blue",
    "oceanBasin": "atlantic",
    "areaThousandKm2": 214,
    "maxDepthM": 3830,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите океанический бассейн, площадь и наибольшую глубину: Тирренское море",
      "backMainAnswer": "Атлантический океан • 3830 м (пл. 214 тыс. км²)",
      "backMetrics": [
        {
          "label": "Океанический бассейн",
          "value": "Атлантический океан"
        },
        {
          "label": "Наибольшая глубина",
          "value": "3830 м"
        },
        {
          "label": "Площадь",
          "value": "214 тыс. км²"
        }
      ],
      "backNote": "Тирренское море (Атлантический океан), глубина до 3830 м."
    },
    "isCoreLandmark": false
  },
  {
    "id": "m3_sea_aegean",
    "moduleId": "module3",
    "submoduleId": "m3_seas_atlantic",
    "category": "seas",
    "categoryRu": "Моря и океаны",
    "difficulty": "Стандартный",
    "name": "Эгейское море",
    "aliases": [],
    "region": "Атлантический океан",
    "locationDesc": "Бассейн: Атлантический океан",
    "mapPrompt": "Покажите на карте: Эгейское море",
    "geometryType": "point",
    "lat": 38.5,
    "lng": 25,
    "hitRadiusKm": 320,
    "bounds": [
      35,
      22.8,
      41,
      27.2
    ],
    "badgeColor": "blue",
    "oceanBasin": "atlantic",
    "areaThousandKm2": 191,
    "maxDepthM": 2561,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите океанический бассейн, площадь и наибольшую глубину: Эгейское море",
      "backMainAnswer": "Атлантический океан • 2561 м (пл. 191 тыс. км²)",
      "backMetrics": [
        {
          "label": "Океанический бассейн",
          "value": "Атлантический океан"
        },
        {
          "label": "Наибольшая глубина",
          "value": "2561 м"
        },
        {
          "label": "Площадь",
          "value": "191 тыс. км²"
        }
      ],
      "backNote": "Эгейское море (Атлантический океан), глубина до 2561 м."
    },
    "isCoreLandmark": false
  },
  {
    "id": "m3_sea_weddell",
    "moduleId": "module3",
    "submoduleId": "m3_seas_atlantic",
    "category": "seas",
    "categoryRu": "Моря и океаны",
    "difficulty": "Стандартный",
    "name": "Море Уэдделла",
    "aliases": [],
    "region": "Атлантический океан",
    "locationDesc": "Бассейн: Атлантический океан",
    "mapPrompt": "Покажите на карте: Море Уэдделла",
    "geometryType": "point",
    "lat": -72,
    "lng": -45,
    "hitRadiusKm": 320,
    "bounds": [
      -78,
      -62,
      -63,
      -15
    ],
    "badgeColor": "blue",
    "oceanBasin": "atlantic",
    "areaThousandKm2": 2910,
    "maxDepthM": 6820,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите океанический бассейн, площадь и наибольшую глубину: Море Уэдделла",
      "backMainAnswer": "Атлантический океан • 6820 м (пл. 2910 тыс. км²)",
      "backMetrics": [
        {
          "label": "Океанический бассейн",
          "value": "Атлантический океан"
        },
        {
          "label": "Наибольшая глубина",
          "value": "6820 м"
        },
        {
          "label": "Площадь",
          "value": "2910 тыс. км²"
        }
      ],
      "backNote": "Море Уэдделла (Атлантический океан), глубина до 6820 м."
    },
    "isCoreLandmark": true
  },
  {
    "id": "m3_sea_black_sea",
    "moduleId": "module3",
    "submoduleId": "m3_seas_atlantic",
    "category": "seas",
    "categoryRu": "Моря и океаны",
    "difficulty": "Стандартный",
    "name": "Чёрное море",
    "aliases": [],
    "region": "Атлантический океан",
    "locationDesc": "Бассейн: Атлантический океан",
    "mapPrompt": "Покажите на карте: Чёрное море",
    "geometryType": "point",
    "lat": 43,
    "lng": 35,
    "hitRadiusKm": 280,
    "bounds": [
      41,
      27.5,
      46.5,
      41.5
    ],
    "badgeColor": "blue",
    "oceanBasin": "atlantic",
    "areaThousandKm2": 422,
    "maxDepthM": 2210,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите океанический бассейн, площадь и наибольшую глубину: Чёрное море",
      "backMainAnswer": "Атлантический океан • 2210 м (пл. 422 тыс. км²)",
      "backMetrics": [
        {
          "label": "Океанический бассейн",
          "value": "Атлантический океан"
        },
        {
          "label": "Наибольшая глубина",
          "value": "2210 м"
        },
        {
          "label": "Площадь",
          "value": "422 тыс. км²"
        }
      ],
      "backNote": "Сероводородный слой глубже 150-200 м."
    },
    "isCoreLandmark": true
  },
  {
    "id": "m3_sea_andaman",
    "moduleId": "module3",
    "submoduleId": "m3_seas_indian",
    "category": "seas",
    "categoryRu": "Моря и океаны",
    "difficulty": "Стандартный",
    "name": "Андаманское море",
    "aliases": [],
    "region": "Индийский океан",
    "locationDesc": "Бассейн: Индийский океан",
    "mapPrompt": "Покажите на карте: Андаманское море",
    "geometryType": "point",
    "lat": 10,
    "lng": 96,
    "hitRadiusKm": 320,
    "bounds": [
      6,
      92,
      16.5,
      98.5
    ],
    "badgeColor": "blue",
    "oceanBasin": "indian",
    "areaThousandKm2": 605,
    "maxDepthM": 4507,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите океанический бассейн, площадь и наибольшую глубину: Андаманское море",
      "backMainAnswer": "Индийский океан • 4507 м (пл. 605 тыс. км²)",
      "backMetrics": [
        {
          "label": "Океанический бассейн",
          "value": "Индийский океан"
        },
        {
          "label": "Наибольшая глубина",
          "value": "4507 м"
        },
        {
          "label": "Площадь",
          "value": "605 тыс. км²"
        }
      ],
      "backNote": "Андаманское море (Индийский океан), глубина до 4507 м."
    },
    "isCoreLandmark": false
  },
  {
    "id": "m3_sea_arabian",
    "moduleId": "module3",
    "submoduleId": "m3_seas_indian",
    "category": "seas",
    "categoryRu": "Моря и океаны",
    "difficulty": "Стандартный",
    "name": "Аравийское море",
    "aliases": [],
    "region": "Индийский океан",
    "locationDesc": "Бассейн: Индийский океан",
    "mapPrompt": "Покажите на карте: Аравийское море",
    "geometryType": "point",
    "lat": 16,
    "lng": 64,
    "hitRadiusKm": 320,
    "bounds": [
      5,
      52,
      25,
      76
    ],
    "badgeColor": "blue",
    "oceanBasin": "indian",
    "areaThousandKm2": 4832,
    "maxDepthM": 5803,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите океанический бассейн, площадь и наибольшую глубину: Аравийское море",
      "backMainAnswer": "Индийский океан • 5803 м (пл. 4832 тыс. км²)",
      "backMetrics": [
        {
          "label": "Океанический бассейн",
          "value": "Индийский океан"
        },
        {
          "label": "Наибольшая глубина",
          "value": "5803 м"
        },
        {
          "label": "Площадь",
          "value": "4832 тыс. км²"
        }
      ],
      "backNote": "Аравийское море (Индийский океан), глубина до 5803 м."
    },
    "isCoreLandmark": true
  },
  {
    "id": "m3_sea_arafura",
    "moduleId": "module3",
    "submoduleId": "m3_seas_indian",
    "category": "seas",
    "categoryRu": "Моря и океаны",
    "difficulty": "Стандартный",
    "name": "Арафурское море",
    "aliases": [],
    "region": "Индийский океан",
    "locationDesc": "Бассейн: Индийский океан",
    "mapPrompt": "Покажите на карте: Арафурское море",
    "geometryType": "point",
    "lat": -9.5,
    "lng": 135,
    "hitRadiusKm": 320,
    "bounds": null,
    "badgeColor": "blue",
    "oceanBasin": "indian",
    "areaThousandKm2": 1017,
    "maxDepthM": 3680,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите океанический бассейн, площадь и наибольшую глубину: Арафурское море",
      "backMainAnswer": "Индийский океан • 3680 м (пл. 1017 тыс. км²)",
      "backMetrics": [
        {
          "label": "Океанический бассейн",
          "value": "Индийский океан"
        },
        {
          "label": "Наибольшая глубина",
          "value": "3680 м"
        },
        {
          "label": "Площадь",
          "value": "1017 тыс. км²"
        }
      ],
      "backNote": "Арафурское море (Индийский океан), глубина до 3680 м."
    },
    "isCoreLandmark": false
  },
  {
    "id": "m3_sea_davis",
    "moduleId": "module3",
    "submoduleId": "m3_seas_indian",
    "category": "seas",
    "categoryRu": "Моря и океаны",
    "difficulty": "Стандартный",
    "name": "Море Дейвиса",
    "aliases": [],
    "region": "Индийский океан",
    "locationDesc": "Бассейн: Индийский океан",
    "mapPrompt": "Покажите на карте: Море Дейвиса",
    "geometryType": "point",
    "lat": -66,
    "lng": 92,
    "hitRadiusKm": 320,
    "bounds": null,
    "badgeColor": "blue",
    "oceanBasin": "indian",
    "areaThousandKm2": 21,
    "maxDepthM": 1369,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите океанический бассейн, площадь и наибольшую глубину: Море Дейвиса",
      "backMainAnswer": "Индийский океан • 1369 м (пл. 21 тыс. км²)",
      "backMetrics": [
        {
          "label": "Океанический бассейн",
          "value": "Индийский океан"
        },
        {
          "label": "Наибольшая глубина",
          "value": "1369 м"
        },
        {
          "label": "Площадь",
          "value": "21 тыс. км²"
        }
      ],
      "backNote": "Море Дейвиса (Индийский океан), глубина до 1369 м."
    },
    "isCoreLandmark": true
  },
  {
    "id": "m3_sea_cosmonauts",
    "moduleId": "module3",
    "submoduleId": "m3_seas_indian",
    "category": "seas",
    "categoryRu": "Моря и океаны",
    "difficulty": "Стандартный",
    "name": "Море Космонавтов",
    "aliases": [],
    "region": "Индийский океан",
    "locationDesc": "Бассейн: Индийский океан",
    "mapPrompt": "Покажите на карте: Море Космонавтов",
    "geometryType": "point",
    "lat": -65,
    "lng": 45,
    "hitRadiusKm": 320,
    "bounds": null,
    "badgeColor": "blue",
    "oceanBasin": "indian",
    "areaThousandKm2": 698,
    "maxDepthM": 4798,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите океанический бассейн, площадь и наибольшую глубину: Море Космонавтов",
      "backMainAnswer": "Индийский океан • 4798 м (пл. 698 тыс. км²)",
      "backMetrics": [
        {
          "label": "Океанический бассейн",
          "value": "Индийский океан"
        },
        {
          "label": "Наибольшая глубина",
          "value": "4798 м"
        },
        {
          "label": "Площадь",
          "value": "698 тыс. км²"
        }
      ],
      "backNote": "Море Космонавтов (Индийский океан), глубина до 4798 м."
    },
    "isCoreLandmark": false
  },
  {
    "id": "m3_sea_red_sea",
    "moduleId": "module3",
    "submoduleId": "m3_seas_indian",
    "category": "seas",
    "categoryRu": "Моря и океаны",
    "difficulty": "Стандартный",
    "name": "Красное море",
    "aliases": [],
    "region": "Индийский океан",
    "locationDesc": "Бассейн: Индийский океан",
    "mapPrompt": "Покажите на карте: Красное море",
    "geometryType": "point",
    "lat": 22,
    "lng": 38,
    "hitRadiusKm": 250,
    "bounds": [
      12.5,
      32.5,
      28,
      43.5
    ],
    "badgeColor": "blue",
    "oceanBasin": "indian",
    "areaThousandKm2": 460,
    "maxDepthM": 3039,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите океанический бассейн, площадь и наибольшую глубину: Красное море",
      "backMainAnswer": "Индийский океан • 3039 м (пл. 460 тыс. км²)",
      "backMetrics": [
        {
          "label": "Океанический бассейн",
          "value": "Индийский океан"
        },
        {
          "label": "Наибольшая глубина",
          "value": "3039 м"
        },
        {
          "label": "Площадь",
          "value": "460 тыс. км²"
        }
      ],
      "backNote": "Самое солёное море Мирового океана (до 42‰) из имеющих связь с океаном."
    },
    "isCoreLandmark": true
  },
  {
    "id": "m3_sea_commonwealth",
    "moduleId": "module3",
    "submoduleId": "m3_seas_indian",
    "category": "seas",
    "categoryRu": "Моря и океаны",
    "difficulty": "Стандартный",
    "name": "Море Содружества",
    "aliases": [],
    "region": "Индийский океан",
    "locationDesc": "Бассейн: Индийский океан",
    "mapPrompt": "Покажите на карте: Море Содружества",
    "geometryType": "point",
    "lat": -65,
    "lng": 72,
    "hitRadiusKm": 320,
    "bounds": null,
    "badgeColor": "blue",
    "oceanBasin": "indian",
    "areaThousandKm2": 258,
    "maxDepthM": 3000,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите океанический бассейн, площадь и наибольшую глубину: Море Содружества",
      "backMainAnswer": "Индийский океан • 3000 м (пл. 258 тыс. км²)",
      "backMetrics": [
        {
          "label": "Океанический бассейн",
          "value": "Индийский океан"
        },
        {
          "label": "Наибольшая глубина",
          "value": "3000 м"
        },
        {
          "label": "Площадь",
          "value": "258 тыс. км²"
        }
      ],
      "backNote": "Море Содружества (Индийский океан), глубина до 3000 м."
    },
    "isCoreLandmark": false
  },
  {
    "id": "m3_sea_timor",
    "moduleId": "module3",
    "submoduleId": "m3_seas_indian",
    "category": "seas",
    "categoryRu": "Моря и океаны",
    "difficulty": "Стандартный",
    "name": "Тиморское море",
    "aliases": [],
    "region": "Индийский океан",
    "locationDesc": "Бассейн: Индийский океан",
    "mapPrompt": "Покажите на карте: Тиморское море",
    "geometryType": "point",
    "lat": -11,
    "lng": 128,
    "hitRadiusKm": 320,
    "bounds": null,
    "badgeColor": "blue",
    "oceanBasin": "indian",
    "areaThousandKm2": 432,
    "maxDepthM": 3310,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите океанический бассейн, площадь и наибольшую глубину: Тиморское море",
      "backMainAnswer": "Индийский океан • 3310 м (пл. 432 тыс. км²)",
      "backMetrics": [
        {
          "label": "Океанический бассейн",
          "value": "Индийский океан"
        },
        {
          "label": "Наибольшая глубина",
          "value": "3310 м"
        },
        {
          "label": "Площадь",
          "value": "432 тыс. км²"
        }
      ],
      "backNote": "Тиморское море (Индийский океан), глубина до 3310 м."
    },
    "isCoreLandmark": false
  },
  {
    "id": "m3_sea_barents",
    "moduleId": "module3",
    "submoduleId": "m3_seas_arctic",
    "category": "seas",
    "categoryRu": "Моря и океаны",
    "difficulty": "Стандартный",
    "name": "Баренцево море",
    "aliases": [],
    "region": "Северный Ледовитый океан",
    "locationDesc": "Бассейн: Северный Ледовитый океан",
    "mapPrompt": "Покажите на карте: Баренцево море",
    "geometryType": "point",
    "lat": 72,
    "lng": 40,
    "hitRadiusKm": 320,
    "bounds": [
      67,
      20,
      80.5,
      62
    ],
    "badgeColor": "blue",
    "oceanBasin": "arctic",
    "areaThousandKm2": 1424,
    "maxDepthM": 600,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите океанический бассейн, площадь и наибольшую глубину: Баренцево море",
      "backMainAnswer": "Северный Ледовитый океан • 600 м (пл. 1424 тыс. км²)",
      "backMetrics": [
        {
          "label": "Океанический бассейн",
          "value": "Северный Ледовитый океан"
        },
        {
          "label": "Наибольшая глубина",
          "value": "600 м"
        },
        {
          "label": "Площадь",
          "value": "1424 тыс. км²"
        }
      ],
      "backNote": "Баренцево море (Северный Ледовитый океан), глубина до 600 м."
    },
    "isCoreLandmark": true
  },
  {
    "id": "m3_sea_baffin",
    "moduleId": "module3",
    "submoduleId": "m3_seas_arctic",
    "category": "seas",
    "categoryRu": "Моря и океаны",
    "difficulty": "Стандартный",
    "name": "Море Баффина",
    "aliases": [],
    "region": "Северный Ледовитый океан",
    "locationDesc": "Бассейн: Северный Ледовитый океан",
    "mapPrompt": "Покажите на карте: Море Баффина",
    "geometryType": "point",
    "lat": 73,
    "lng": -67,
    "hitRadiusKm": 320,
    "bounds": [
      66,
      -78,
      78,
      -53
    ],
    "badgeColor": "blue",
    "oceanBasin": "arctic",
    "areaThousandKm2": 530,
    "maxDepthM": 2414,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите океанический бассейн, площадь и наибольшую глубину: Море Баффина",
      "backMainAnswer": "Северный Ледовитый океан • 2414 м (пл. 530 тыс. км²)",
      "backMetrics": [
        {
          "label": "Океанический бассейн",
          "value": "Северный Ледовитый океан"
        },
        {
          "label": "Наибольшая глубина",
          "value": "2414 м"
        },
        {
          "label": "Площадь",
          "value": "530 тыс. км²"
        }
      ],
      "backNote": "Море Баффина (Северный Ледовитый океан), глубина до 2414 м."
    },
    "isCoreLandmark": false
  },
  {
    "id": "m3_sea_white_sea",
    "moduleId": "module3",
    "submoduleId": "m3_seas_arctic",
    "category": "seas",
    "categoryRu": "Моря и океаны",
    "difficulty": "Стандартный",
    "name": "Белое море",
    "aliases": [],
    "region": "Северный Ледовитый океан",
    "locationDesc": "Бассейн: Северный Ледовитый океан",
    "mapPrompt": "Покажите на карте: Белое море",
    "geometryType": "point",
    "lat": 65.5,
    "lng": 37.5,
    "hitRadiusKm": 180,
    "bounds": [
      63.8,
      32,
      68.5,
      44
    ],
    "badgeColor": "blue",
    "oceanBasin": "arctic",
    "areaThousandKm2": 90,
    "maxDepthM": 350,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите океанический бассейн, площадь и наибольшую глубину: Белое море",
      "backMainAnswer": "Северный Ледовитый океан • 350 м (пл. 90 тыс. км²)",
      "backMetrics": [
        {
          "label": "Океанический бассейн",
          "value": "Северный Ледовитый океан"
        },
        {
          "label": "Наибольшая глубина",
          "value": "350 м"
        },
        {
          "label": "Площадь",
          "value": "90 тыс. км²"
        }
      ],
      "backNote": "Белое море (Северный Ледовитый океан), глубина до 350 м."
    },
    "isCoreLandmark": true
  },
  {
    "id": "m3_sea_beaufort",
    "moduleId": "module3",
    "submoduleId": "m3_seas_arctic",
    "category": "seas",
    "categoryRu": "Моря и океаны",
    "difficulty": "Стандартный",
    "name": "Море Бофорта",
    "aliases": [],
    "region": "Северный Ледовитый океан",
    "locationDesc": "Бассейн: Северный Ледовитый океан",
    "mapPrompt": "Покажите на карте: Море Бофорта",
    "geometryType": "point",
    "lat": 72,
    "lng": -135,
    "hitRadiusKm": 320,
    "bounds": [
      69,
      -156,
      76,
      -124
    ],
    "badgeColor": "blue",
    "oceanBasin": "arctic",
    "areaThousandKm2": 481,
    "maxDepthM": 3749,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите океанический бассейн, площадь и наибольшую глубину: Море Бофорта",
      "backMainAnswer": "Северный Ледовитый океан • 3749 м (пл. 481 тыс. км²)",
      "backMetrics": [
        {
          "label": "Океанический бассейн",
          "value": "Северный Ледовитый океан"
        },
        {
          "label": "Наибольшая глубина",
          "value": "3749 м"
        },
        {
          "label": "Площадь",
          "value": "481 тыс. км²"
        }
      ],
      "backNote": "Море Бофорта (Северный Ледовитый океан), глубина до 3749 м."
    },
    "isCoreLandmark": false
  },
  {
    "id": "m3_sea_east_siberian",
    "moduleId": "module3",
    "submoduleId": "m3_seas_arctic",
    "category": "seas",
    "categoryRu": "Моря и океаны",
    "difficulty": "Стандартный",
    "name": "Восточно-Сибирское море",
    "aliases": [],
    "region": "Северный Ледовитый океан",
    "locationDesc": "Бассейн: Северный Ледовитый океан",
    "mapPrompt": "Покажите на карте: Восточно-Сибирское море",
    "geometryType": "point",
    "lat": 72,
    "lng": 163,
    "hitRadiusKm": 320,
    "bounds": [
      69,
      142,
      78,
      179
    ],
    "badgeColor": "blue",
    "oceanBasin": "arctic",
    "areaThousandKm2": 913,
    "maxDepthM": 915,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите океанический бассейн, площадь и наибольшую глубину: Восточно-Сибирское море",
      "backMainAnswer": "Северный Ледовитый океан • 915 м (пл. 913 тыс. км²)",
      "backMetrics": [
        {
          "label": "Океанический бассейн",
          "value": "Северный Ледовитый океан"
        },
        {
          "label": "Наибольшая глубина",
          "value": "915 м"
        },
        {
          "label": "Площадь",
          "value": "913 тыс. км²"
        }
      ],
      "backNote": "Восточно-Сибирское море (Северный Ледовитый океан), глубина до 915 м."
    },
    "isCoreLandmark": true
  },
  {
    "id": "m3_sea_greenland",
    "moduleId": "module3",
    "submoduleId": "m3_seas_arctic",
    "category": "seas",
    "categoryRu": "Моря и океаны",
    "difficulty": "Стандартный",
    "name": "Гренландское море",
    "aliases": [],
    "region": "Северный Ледовитый океан",
    "locationDesc": "Бассейн: Северный Ледовитый океан",
    "mapPrompt": "Покажите на карте: Гренландское море",
    "geometryType": "point",
    "lat": 75,
    "lng": -5,
    "hitRadiusKm": 320,
    "bounds": [
      67,
      -24,
      81,
      14
    ],
    "badgeColor": "blue",
    "oceanBasin": "arctic",
    "areaThousandKm2": 1195,
    "maxDepthM": 5527,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите океанический бассейн, площадь и наибольшую глубину: Гренландское море",
      "backMainAnswer": "Северный Ледовитый океан • 5527 м (пл. 1195 тыс. км²)",
      "backMetrics": [
        {
          "label": "Океанический бассейн",
          "value": "Северный Ледовитый океан"
        },
        {
          "label": "Наибольшая глубина",
          "value": "5527 м"
        },
        {
          "label": "Площадь",
          "value": "1195 тыс. км²"
        }
      ],
      "backNote": "Гренландское море (Северный Ледовитый океан), глубина до 5527 м."
    },
    "isCoreLandmark": true
  },
  {
    "id": "m3_sea_kara",
    "moduleId": "module3",
    "submoduleId": "m3_seas_arctic",
    "category": "seas",
    "categoryRu": "Моря и океаны",
    "difficulty": "Стандартный",
    "name": "Карское море",
    "aliases": [],
    "region": "Северный Ледовитый океан",
    "locationDesc": "Бассейн: Северный Ледовитый океан",
    "mapPrompt": "Покажите на карте: Карское море",
    "geometryType": "point",
    "lat": 75,
    "lng": 75,
    "hitRadiusKm": 320,
    "bounds": [
      68,
      56,
      81,
      102
    ],
    "badgeColor": "blue",
    "oceanBasin": "arctic",
    "areaThousandKm2": 883,
    "maxDepthM": 600,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите океанический бассейн, площадь и наибольшую глубину: Карское море",
      "backMainAnswer": "Северный Ледовитый океан • 600 м (пл. 883 тыс. км²)",
      "backMetrics": [
        {
          "label": "Океанический бассейн",
          "value": "Северный Ледовитый океан"
        },
        {
          "label": "Наибольшая глубина",
          "value": "600 м"
        },
        {
          "label": "Площадь",
          "value": "883 тыс. км²"
        }
      ],
      "backNote": "Карское море (Северный Ледовитый океан), глубина до 600 м."
    },
    "isCoreLandmark": true
  },
  {
    "id": "m3_sea_laptev",
    "moduleId": "module3",
    "submoduleId": "m3_seas_arctic",
    "category": "seas",
    "categoryRu": "Моря и океаны",
    "difficulty": "Стандартный",
    "name": "Море Лаптевых",
    "aliases": [],
    "region": "Северный Ледовитый океан",
    "locationDesc": "Бассейн: Северный Ледовитый океан",
    "mapPrompt": "Покажите на карте: Море Лаптевых",
    "geometryType": "point",
    "lat": 75,
    "lng": 125,
    "hitRadiusKm": 320,
    "bounds": [
      71,
      102,
      81,
      142
    ],
    "badgeColor": "blue",
    "oceanBasin": "arctic",
    "areaThousandKm2": 662,
    "maxDepthM": 3385,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите океанический бассейн, площадь и наибольшую глубину: Море Лаптевых",
      "backMainAnswer": "Северный Ледовитый океан • 3385 м (пл. 662 тыс. км²)",
      "backMetrics": [
        {
          "label": "Океанический бассейн",
          "value": "Северный Ледовитый океан"
        },
        {
          "label": "Наибольшая глубина",
          "value": "3385 м"
        },
        {
          "label": "Площадь",
          "value": "662 тыс. км²"
        }
      ],
      "backNote": "Море Лаптевых (Северный Ледовитый океан), глубина до 3385 м."
    },
    "isCoreLandmark": true
  },
  {
    "id": "m3_sea_lincoln",
    "moduleId": "module3",
    "submoduleId": "m3_seas_arctic",
    "category": "seas",
    "categoryRu": "Моря и океаны",
    "difficulty": "Стандартный",
    "name": "Море Линкольна",
    "aliases": [],
    "region": "Северный Ледовитый океан",
    "locationDesc": "Бассейн: Северный Ледовитый океан",
    "mapPrompt": "Покажите на карте: Море Линкольна",
    "geometryType": "point",
    "lat": 83.5,
    "lng": -57,
    "hitRadiusKm": 320,
    "bounds": null,
    "badgeColor": "blue",
    "oceanBasin": "arctic",
    "areaThousandKm2": 38,
    "maxDepthM": 582,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите океанический бассейн, площадь и наибольшую глубину: Море Линкольна",
      "backMainAnswer": "Северный Ледовитый океан • 582 м (пл. 38 тыс. км²)",
      "backMetrics": [
        {
          "label": "Океанический бассейн",
          "value": "Северный Ледовитый океан"
        },
        {
          "label": "Наибольшая глубина",
          "value": "582 м"
        },
        {
          "label": "Площадь",
          "value": "38 тыс. км²"
        }
      ],
      "backNote": "Море Линкольна (Северный Ледовитый океан), глубина до 582 м."
    },
    "isCoreLandmark": false
  },
  {
    "id": "m3_sea_norwegian",
    "moduleId": "module3",
    "submoduleId": "m3_seas_arctic",
    "category": "seas",
    "categoryRu": "Моря и океаны",
    "difficulty": "Стандартный",
    "name": "Норвежское море",
    "aliases": [],
    "region": "Северный Ледовитый океан",
    "locationDesc": "Бассейн: Северный Ледовитый океан",
    "mapPrompt": "Покажите на карте: Норвежское море",
    "geometryType": "point",
    "lat": 66,
    "lng": 3,
    "hitRadiusKm": 320,
    "bounds": [
      61,
      -10,
      73,
      18
    ],
    "badgeColor": "blue",
    "oceanBasin": "arctic",
    "areaThousandKm2": 1340,
    "maxDepthM": 3970,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите океанический бассейн, площадь и наибольшую глубину: Норвежское море",
      "backMainAnswer": "Северный Ледовитый океан • 3970 м (пл. 1340 тыс. км²)",
      "backMetrics": [
        {
          "label": "Океанический бассейн",
          "value": "Северный Ледовитый океан"
        },
        {
          "label": "Наибольшая глубина",
          "value": "3970 м"
        },
        {
          "label": "Площадь",
          "value": "1340 тыс. км²"
        }
      ],
      "backNote": "Норвежское море (Северный Ледовитый океан), глубина до 3970 м."
    },
    "isCoreLandmark": true
  },
  {
    "id": "m3_sea_chukchi",
    "moduleId": "module3",
    "submoduleId": "m3_seas_arctic",
    "category": "seas",
    "categoryRu": "Моря и океаны",
    "difficulty": "Стандартный",
    "name": "Чукотское море",
    "aliases": [],
    "region": "Северный Ледовитый океан",
    "locationDesc": "Бассейн: Северный Ледовитый океан",
    "mapPrompt": "Покажите на карте: Чукотское море",
    "geometryType": "point",
    "lat": 69,
    "lng": -172,
    "hitRadiusKm": 320,
    "bounds": [
      66,
      178,
      74,
      -158
    ],
    "badgeColor": "blue",
    "oceanBasin": "arctic",
    "areaThousandKm2": 595,
    "maxDepthM": 1256,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите океанический бассейн, площадь и наибольшую глубину: Чукотское море",
      "backMainAnswer": "Северный Ледовитый океан • 1256 м (пл. 595 тыс. км²)",
      "backMetrics": [
        {
          "label": "Океанический бассейн",
          "value": "Северный Ледовитый океан"
        },
        {
          "label": "Наибольшая глубина",
          "value": "1256 м"
        },
        {
          "label": "Площадь",
          "value": "595 тыс. км²"
        }
      ],
      "backNote": "Чукотское море (Северный Ледовитый океан), глубина до 1256 м."
    },
    "isCoreLandmark": true
  },
  {
    "id": "m3_str_bass",
    "moduleId": "module3",
    "submoduleId": "m3_straits_pacific",
    "category": "straits",
    "categoryRu": "Проливы",
    "difficulty": "Стандартный",
    "name": "Бассов пролив",
    "aliases": [
      "пролив Басса"
    ],
    "region": "Тихий океан",
    "locationDesc": "Тихий океан (длина 490 км, наим. ширина 213 км)",
    "mapPrompt": "Покажите пролив: Бассов пролив",
    "geometryType": "point",
    "lat": -39.3,
    "lng": 146,
    "hitRadiusKm": 120,
    "bounds": null,
    "badgeColor": "teal",
    "lengthKm": 490,
    "minWidthKm": 213,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите параметры пролива (длина, наим. ширина) и бассейн: Бассов пролив",
      "backMainAnswer": "Длина: 490 км • Наим. ширина: 213 км (Тихий океан)",
      "backMetrics": [
        {
          "label": "Бассейн",
          "value": "Тихий океан"
        },
        {
          "label": "Длина",
          "value": "490 км"
        },
        {
          "label": "Наименьшая ширина",
          "value": "213 км"
        }
      ],
      "backNote": "Пролив Бассов пролив: длина 490 км, ширина от 213 км."
    },
    "isCoreLandmark": true
  },
  {
    "id": "m3_str_bering_strait",
    "moduleId": "module3",
    "submoduleId": "m3_straits_pacific",
    "category": "straits",
    "categoryRu": "Проливы",
    "difficulty": "Стандартный",
    "name": "Берингов пролив",
    "aliases": [
      "Берингов"
    ],
    "region": "Тихий океан",
    "locationDesc": "Тихий океан (длина 96 км, наим. ширина 86 км)",
    "mapPrompt": "Покажите пролив: Берингов пролив",
    "geometryType": "point",
    "lat": 65.8,
    "lng": -168.8,
    "hitRadiusKm": 120,
    "bounds": null,
    "badgeColor": "teal",
    "lengthKm": 96,
    "minWidthKm": 86,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите параметры пролива (длина, наим. ширина) и бассейн: Берингов пролив",
      "backMainAnswer": "Длина: 96 км • Наим. ширина: 86 км (Тихий океан)",
      "backMetrics": [
        {
          "label": "Бассейн",
          "value": "Тихий океан"
        },
        {
          "label": "Длина",
          "value": "96 км"
        },
        {
          "label": "Наименьшая ширина",
          "value": "86 км"
        }
      ],
      "backNote": "Пролив Берингов пролив: длина 96 км, ширина от 86 км."
    },
    "isCoreLandmark": true
  },
  {
    "id": "m3_str_sunda",
    "moduleId": "module3",
    "submoduleId": "m3_straits_pacific",
    "category": "straits",
    "categoryRu": "Проливы",
    "difficulty": "Стандартный",
    "name": "Зондский пролив",
    "aliases": [
      "Зондский"
    ],
    "region": "Тихий океан",
    "locationDesc": "Тихий океан (длина 130 км, наим. ширина 26 км)",
    "mapPrompt": "Покажите пролив: Зондский пролив",
    "geometryType": "point",
    "lat": -5.9,
    "lng": 105.7,
    "hitRadiusKm": 120,
    "bounds": null,
    "badgeColor": "teal",
    "lengthKm": 130,
    "minWidthKm": 26,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите параметры пролива (длина, наим. ширина) и бассейн: Зондский пролив",
      "backMainAnswer": "Длина: 130 км • Наим. ширина: 26 км (Тихий океан)",
      "backMetrics": [
        {
          "label": "Бассейн",
          "value": "Тихий океан"
        },
        {
          "label": "Длина",
          "value": "130 км"
        },
        {
          "label": "Наименьшая ширина",
          "value": "26 км"
        }
      ],
      "backNote": "Пролив Зондский пролив: длина 130 км, ширина от 26 км."
    },
    "isCoreLandmark": true
  },
  {
    "id": "m3_str_korea",
    "moduleId": "module3",
    "submoduleId": "m3_straits_pacific",
    "category": "straits",
    "categoryRu": "Проливы",
    "difficulty": "Стандартный",
    "name": "Корейский пролив",
    "aliases": [
      "Цусимский пролив"
    ],
    "region": "Тихий океан",
    "locationDesc": "Тихий океан (длина 324 км, наим. ширина 180 км)",
    "mapPrompt": "Покажите пролив: Корейский пролив",
    "geometryType": "point",
    "lat": 34.5,
    "lng": 129.5,
    "hitRadiusKm": 120,
    "bounds": null,
    "badgeColor": "teal",
    "lengthKm": 324,
    "minWidthKm": 180,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите параметры пролива (длина, наим. ширина) и бассейн: Корейский пролив",
      "backMainAnswer": "Длина: 324 км • Наим. ширина: 180 км (Тихий океан)",
      "backMetrics": [
        {
          "label": "Бассейн",
          "value": "Тихий океан"
        },
        {
          "label": "Длина",
          "value": "324 км"
        },
        {
          "label": "Наименьшая ширина",
          "value": "180 км"
        }
      ],
      "backNote": "Пролив Корейский пролив: длина 324 км, ширина от 180 км."
    },
    "isCoreLandmark": false
  },
  {
    "id": "m3_str_cook",
    "moduleId": "module3",
    "submoduleId": "m3_straits_pacific",
    "category": "straits",
    "categoryRu": "Проливы",
    "difficulty": "Стандартный",
    "name": "Пролив Кука",
    "aliases": [],
    "region": "Тихий океан",
    "locationDesc": "Тихий океан (длина 107 км, наим. ширина 22 км)",
    "mapPrompt": "Покажите пролив: Пролив Кука",
    "geometryType": "point",
    "lat": -41.2,
    "lng": 174.5,
    "hitRadiusKm": 120,
    "bounds": null,
    "badgeColor": "teal",
    "lengthKm": 107,
    "minWidthKm": 22,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите параметры пролива (длина, наим. ширина) и бассейн: Пролив Кука",
      "backMainAnswer": "Длина: 107 км • Наим. ширина: 22 км (Тихий океан)",
      "backMetrics": [
        {
          "label": "Бассейн",
          "value": "Тихий океан"
        },
        {
          "label": "Длина",
          "value": "107 км"
        },
        {
          "label": "Наименьшая ширина",
          "value": "22 км"
        }
      ],
      "backNote": "Пролив Пролив Кука: длина 107 км, ширина от 22 км."
    },
    "isCoreLandmark": false
  },
  {
    "id": "m3_str_la_perouse",
    "moduleId": "module3",
    "submoduleId": "m3_straits_pacific",
    "category": "straits",
    "categoryRu": "Проливы",
    "difficulty": "Стандартный",
    "name": "Пролив Лаперуза",
    "aliases": [
      "Лаперуза"
    ],
    "region": "Тихий океан",
    "locationDesc": "Тихий океан (длина 94 км, наим. ширина 43 км)",
    "mapPrompt": "Покажите пролив: Пролив Лаперуза",
    "geometryType": "point",
    "lat": 45.7,
    "lng": 142,
    "hitRadiusKm": 120,
    "bounds": null,
    "badgeColor": "teal",
    "lengthKm": 94,
    "minWidthKm": 43,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите параметры пролива (длина, наим. ширина) и бассейн: Пролив Лаперуза",
      "backMainAnswer": "Длина: 94 км • Наим. ширина: 43 км (Тихий океан)",
      "backMetrics": [
        {
          "label": "Бассейн",
          "value": "Тихий океан"
        },
        {
          "label": "Длина",
          "value": "94 км"
        },
        {
          "label": "Наименьшая ширина",
          "value": "43 км"
        }
      ],
      "backNote": "Пролив Пролив Лаперуза: длина 94 км, ширина от 43 км."
    },
    "isCoreLandmark": true
  },
  {
    "id": "m3_str_magellan",
    "moduleId": "module3",
    "submoduleId": "m3_straits_pacific",
    "category": "straits",
    "categoryRu": "Проливы",
    "difficulty": "Стандартный",
    "name": "Магелланов пролив",
    "aliases": [],
    "region": "Тихий океан",
    "locationDesc": "Тихий океан (длина 575 км, наим. ширина 2.2 км)",
    "mapPrompt": "Покажите пролив: Магелланов пролив",
    "geometryType": "point",
    "lat": -53.5,
    "lng": -71,
    "hitRadiusKm": 120,
    "bounds": null,
    "badgeColor": "teal",
    "lengthKm": 575,
    "minWidthKm": 2.2,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите параметры пролива (длина, наим. ширина) и бассейн: Магелланов пролив",
      "backMainAnswer": "Длина: 575 км • Наим. ширина: 2.2 км (Тихий океан)",
      "backMetrics": [
        {
          "label": "Бассейн",
          "value": "Тихий океан"
        },
        {
          "label": "Длина",
          "value": "575 км"
        },
        {
          "label": "Наименьшая ширина",
          "value": "2.2 км"
        }
      ],
      "backNote": "Пролив Магелланов пролив: длина 575 км, ширина от 2.2 км."
    },
    "isCoreLandmark": true
  },
  {
    "id": "m3_str_makassar",
    "moduleId": "module3",
    "submoduleId": "m3_straits_pacific",
    "category": "straits",
    "categoryRu": "Проливы",
    "difficulty": "Стандартный",
    "name": "Макасарский пролив",
    "aliases": [],
    "region": "Тихий океан",
    "locationDesc": "Тихий океан (длина 710 км, наим. ширина 120 км)",
    "mapPrompt": "Покажите пролив: Макасарский пролив",
    "geometryType": "point",
    "lat": -1,
    "lng": 118.5,
    "hitRadiusKm": 120,
    "bounds": null,
    "badgeColor": "teal",
    "lengthKm": 710,
    "minWidthKm": 120,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите параметры пролива (длина, наим. ширина) и бассейн: Макасарский пролив",
      "backMainAnswer": "Длина: 710 км • Наим. ширина: 120 км (Тихий океан)",
      "backMetrics": [
        {
          "label": "Бассейн",
          "value": "Тихий океан"
        },
        {
          "label": "Длина",
          "value": "710 км"
        },
        {
          "label": "Наименьшая ширина",
          "value": "120 км"
        }
      ],
      "backNote": "Пролив Макасарский пролив: длина 710 км, ширина от 120 км."
    },
    "isCoreLandmark": false
  },
  {
    "id": "m3_str_malacca",
    "moduleId": "module3",
    "submoduleId": "m3_straits_pacific",
    "category": "straits",
    "categoryRu": "Проливы",
    "difficulty": "Стандартный",
    "name": "Малаккский пролив",
    "aliases": [],
    "region": "Тихий океан",
    "locationDesc": "Тихий океан (длина 937 км, наим. ширина 15 км)",
    "mapPrompt": "Покажите пролив: Малаккский пролив",
    "geometryType": "point",
    "lat": 3,
    "lng": 101,
    "hitRadiusKm": 120,
    "bounds": null,
    "badgeColor": "teal",
    "lengthKm": 937,
    "minWidthKm": 15,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите параметры пролива (длина, наим. ширина) и бассейн: Малаккский пролив",
      "backMainAnswer": "Длина: 937 км • Наим. ширина: 15 км (Тихий океан)",
      "backMetrics": [
        {
          "label": "Бассейн",
          "value": "Тихий океан"
        },
        {
          "label": "Длина",
          "value": "937 км"
        },
        {
          "label": "Наименьшая ширина",
          "value": "15 км"
        }
      ],
      "backNote": "Пролив Малаккский пролив: длина 937 км, ширина от 15 км."
    },
    "isCoreLandmark": true
  },
  {
    "id": "m3_str_singapore",
    "moduleId": "module3",
    "submoduleId": "m3_straits_pacific",
    "category": "straits",
    "categoryRu": "Проливы",
    "difficulty": "Стандартный",
    "name": "Сингапурский пролив",
    "aliases": [],
    "region": "Тихий океан",
    "locationDesc": "Тихий океан (длина 114 км, наим. ширина 12 км)",
    "mapPrompt": "Покажите пролив: Сингапурский пролив",
    "geometryType": "point",
    "lat": 1.2,
    "lng": 103.8,
    "hitRadiusKm": 120,
    "bounds": null,
    "badgeColor": "teal",
    "lengthKm": 114,
    "minWidthKm": 12,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите параметры пролива (длина, наим. ширина) и бассейн: Сингапурский пролив",
      "backMainAnswer": "Длина: 114 км • Наим. ширина: 12 км (Тихий океан)",
      "backMetrics": [
        {
          "label": "Бассейн",
          "value": "Тихий океан"
        },
        {
          "label": "Длина",
          "value": "114 км"
        },
        {
          "label": "Наименьшая ширина",
          "value": "12 км"
        }
      ],
      "backNote": "Пролив Сингапурский пролив: длина 114 км, ширина от 12 км."
    },
    "isCoreLandmark": false
  },
  {
    "id": "m3_str_taiwan",
    "moduleId": "module3",
    "submoduleId": "m3_straits_pacific",
    "category": "straits",
    "categoryRu": "Проливы",
    "difficulty": "Стандартный",
    "name": "Тайваньский пролив",
    "aliases": [
      "Формозский"
    ],
    "region": "Тихий океан",
    "locationDesc": "Тихий океан (длина 398 км, наим. ширина 139 км)",
    "mapPrompt": "Покажите пролив: Тайваньский пролив",
    "geometryType": "point",
    "lat": 24.5,
    "lng": 119.5,
    "hitRadiusKm": 120,
    "bounds": null,
    "badgeColor": "teal",
    "lengthKm": 398,
    "minWidthKm": 139,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите параметры пролива (длина, наим. ширина) и бассейн: Тайваньский пролив",
      "backMainAnswer": "Длина: 398 км • Наим. ширина: 139 км (Тихий океан)",
      "backMetrics": [
        {
          "label": "Бассейн",
          "value": "Тихий океан"
        },
        {
          "label": "Длина",
          "value": "398 км"
        },
        {
          "label": "Наименьшая ширина",
          "value": "139 км"
        }
      ],
      "backNote": "Пролив Тайваньский пролив: длина 398 км, ширина от 139 км."
    },
    "isCoreLandmark": false
  },
  {
    "id": "m3_str_tatar",
    "moduleId": "module3",
    "submoduleId": "m3_straits_pacific",
    "category": "straits",
    "categoryRu": "Проливы",
    "difficulty": "Стандартный",
    "name": "Татарский пролив",
    "aliases": [
      "пролив Невельского"
    ],
    "region": "Тихий океан",
    "locationDesc": "Тихий океан (длина 663 км, наим. ширина 40 км)",
    "mapPrompt": "Покажите пролив: Татарский пролив",
    "geometryType": "point",
    "lat": 50,
    "lng": 141.5,
    "hitRadiusKm": 120,
    "bounds": null,
    "badgeColor": "teal",
    "lengthKm": 663,
    "minWidthKm": 40,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите параметры пролива (длина, наим. ширина) и бассейн: Татарский пролив",
      "backMainAnswer": "Длина: 663 км • Наим. ширина: 40 км (Тихий океан)",
      "backMetrics": [
        {
          "label": "Бассейн",
          "value": "Тихий океан"
        },
        {
          "label": "Длина",
          "value": "663 км"
        },
        {
          "label": "Наименьшая ширина",
          "value": "40 км"
        }
      ],
      "backNote": "Пролив Татарский пролив: длина 663 км, ширина от 40 км."
    },
    "isCoreLandmark": true
  },
  {
    "id": "m3_str_torres",
    "moduleId": "module3",
    "submoduleId": "m3_straits_pacific",
    "category": "straits",
    "categoryRu": "Проливы",
    "difficulty": "Стандартный",
    "name": "Торресов пролив",
    "aliases": [],
    "region": "Тихий океан",
    "locationDesc": "Тихий океан (длина 74 км, наим. ширина 150 км)",
    "mapPrompt": "Покажите пролив: Торресов пролив",
    "geometryType": "point",
    "lat": -10,
    "lng": 142.5,
    "hitRadiusKm": 120,
    "bounds": null,
    "badgeColor": "teal",
    "lengthKm": 74,
    "minWidthKm": 150,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите параметры пролива (длина, наим. ширина) и бассейн: Торресов пролив",
      "backMainAnswer": "Длина: 74 км • Наим. ширина: 150 км (Тихий океан)",
      "backMetrics": [
        {
          "label": "Бассейн",
          "value": "Тихий океан"
        },
        {
          "label": "Длина",
          "value": "74 км"
        },
        {
          "label": "Наименьшая ширина",
          "value": "150 км"
        }
      ],
      "backNote": "Пролив Торресов пролив: длина 74 км, ширина от 150 км."
    },
    "isCoreLandmark": true
  },
  {
    "id": "m3_str_tsugaru",
    "moduleId": "module3",
    "submoduleId": "m3_straits_pacific",
    "category": "straits",
    "categoryRu": "Проливы",
    "difficulty": "Стандартный",
    "name": "Цугару (Сангарский пролив)",
    "aliases": [
      "Сангарский"
    ],
    "region": "Тихий океан",
    "locationDesc": "Тихий океан (длина 96 км, наим. ширина 18 км)",
    "mapPrompt": "Покажите пролив: Цугару (Сангарский пролив)",
    "geometryType": "point",
    "lat": 41.5,
    "lng": 140.7,
    "hitRadiusKm": 120,
    "bounds": null,
    "badgeColor": "teal",
    "lengthKm": 96,
    "minWidthKm": 18,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите параметры пролива (длина, наим. ширина) и бассейн: Цугару (Сангарский пролив)",
      "backMainAnswer": "Длина: 96 км • Наим. ширина: 18 км (Тихий океан)",
      "backMetrics": [
        {
          "label": "Бассейн",
          "value": "Тихий океан"
        },
        {
          "label": "Длина",
          "value": "96 км"
        },
        {
          "label": "Наименьшая ширина",
          "value": "18 км"
        }
      ],
      "backNote": "Пролив Цугару (Сангарский пролив): длина 96 км, ширина от 18 км."
    },
    "isCoreLandmark": false
  },
  {
    "id": "m3_str_belle_isle",
    "moduleId": "module3",
    "submoduleId": "m3_straits_atlantic",
    "category": "straits",
    "categoryRu": "Проливы",
    "difficulty": "Стандартный",
    "name": "Пролив Белл-Айл",
    "aliases": [],
    "region": "Атлантический океан",
    "locationDesc": "Атлантический океан (длина 125 км, наим. ширина 15 км)",
    "mapPrompt": "Покажите пролив: Пролив Белл-Айл",
    "geometryType": "point",
    "lat": 51.7,
    "lng": -56.5,
    "hitRadiusKm": 120,
    "bounds": null,
    "badgeColor": "teal",
    "lengthKm": 125,
    "minWidthKm": 15,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите параметры пролива (длина, наим. ширина) и бассейн: Пролив Белл-Айл",
      "backMainAnswer": "Длина: 125 км • Наим. ширина: 15 км (Атлантический океан)",
      "backMetrics": [
        {
          "label": "Бассейн",
          "value": "Атлантический океан"
        },
        {
          "label": "Длина",
          "value": "125 км"
        },
        {
          "label": "Наименьшая ширина",
          "value": "15 км"
        }
      ],
      "backNote": "Пролив Пролив Белл-Айл: длина 125 км, ширина от 15 км."
    },
    "isCoreLandmark": false
  },
  {
    "id": "m3_str_great_belt",
    "moduleId": "module3",
    "submoduleId": "m3_straits_atlantic",
    "category": "straits",
    "categoryRu": "Проливы",
    "difficulty": "Стандартный",
    "name": "Большой Бельт",
    "aliases": [],
    "region": "Атлантический океан",
    "locationDesc": "Атлантический океан (длина 120 км, наим. ширина 11 км)",
    "mapPrompt": "Покажите пролив: Большой Бельт",
    "geometryType": "point",
    "lat": 55.3,
    "lng": 11,
    "hitRadiusKm": 120,
    "bounds": null,
    "badgeColor": "teal",
    "lengthKm": 120,
    "minWidthKm": 11,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите параметры пролива (длина, наим. ширина) и бассейн: Большой Бельт",
      "backMainAnswer": "Длина: 120 км • Наим. ширина: 11 км (Атлантический океан)",
      "backMetrics": [
        {
          "label": "Бассейн",
          "value": "Атлантический океан"
        },
        {
          "label": "Длина",
          "value": "120 км"
        },
        {
          "label": "Наименьшая ширина",
          "value": "11 км"
        }
      ],
      "backNote": "Пролив Большой Бельт: длина 120 км, ширина от 11 км."
    },
    "isCoreLandmark": false
  },
  {
    "id": "m3_str_bonifacio",
    "moduleId": "module3",
    "submoduleId": "m3_straits_atlantic",
    "category": "straits",
    "categoryRu": "Проливы",
    "difficulty": "Стандартный",
    "name": "Пролив Бонифачо",
    "aliases": [],
    "region": "Атлантический океан",
    "locationDesc": "Атлантический океан (длина 80 км, наим. ширина 11 км)",
    "mapPrompt": "Покажите пролив: Пролив Бонифачо",
    "geometryType": "point",
    "lat": 41.3,
    "lng": 9.2,
    "hitRadiusKm": 90,
    "bounds": null,
    "badgeColor": "teal",
    "lengthKm": 80,
    "minWidthKm": 11,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите параметры пролива (длина, наим. ширина) и бассейн: Пролив Бонифачо",
      "backMainAnswer": "Длина: 80 км • Наим. ширина: 11 км (Атлантический океан)",
      "backMetrics": [
        {
          "label": "Бассейн",
          "value": "Атлантический океан"
        },
        {
          "label": "Длина",
          "value": "80 км"
        },
        {
          "label": "Наименьшая ширина",
          "value": "11 км"
        }
      ],
      "backNote": "Между Корсикой и Сардинией."
    },
    "isCoreLandmark": false
  },
  {
    "id": "m3_str_bosphorus",
    "moduleId": "module3",
    "submoduleId": "m3_straits_atlantic",
    "category": "straits",
    "categoryRu": "Проливы",
    "difficulty": "Стандартный",
    "name": "Босфор (Константинопольский)",
    "aliases": [
      "Константинопольский"
    ],
    "region": "Атлантический океан",
    "locationDesc": "Атлантический океан (длина 30 км, наим. ширина 0.7 км)",
    "mapPrompt": "Покажите пролив: Босфор (Константинопольский)",
    "geometryType": "point",
    "lat": 41.1,
    "lng": 29.1,
    "hitRadiusKm": 120,
    "bounds": null,
    "badgeColor": "teal",
    "lengthKm": 30,
    "minWidthKm": 0.7,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите параметры пролива (длина, наим. ширина) и бассейн: Босфор (Константинопольский)",
      "backMainAnswer": "Длина: 30 км • Наим. ширина: 0.7 км (Атлантический океан)",
      "backMetrics": [
        {
          "label": "Бассейн",
          "value": "Атлантический океан"
        },
        {
          "label": "Длина",
          "value": "30 км"
        },
        {
          "label": "Наименьшая ширина",
          "value": "0.7 км"
        }
      ],
      "backNote": "Пролив Босфор (Константинопольский): длина 30 км, ширина от 0.7 км."
    },
    "isCoreLandmark": true
  },
  {
    "id": "m3_str_gibraltar",
    "moduleId": "module3",
    "submoduleId": "m3_straits_atlantic",
    "category": "straits",
    "categoryRu": "Проливы",
    "difficulty": "Стандартный",
    "name": "Гибралтарский пролив",
    "aliases": [],
    "region": "Атлантический океан",
    "locationDesc": "Атлантический океан (длина 59 км, наим. ширина 14 км)",
    "mapPrompt": "Покажите пролив: Гибралтарский пролив",
    "geometryType": "point",
    "lat": 35.95,
    "lng": -5.6,
    "hitRadiusKm": 120,
    "bounds": null,
    "badgeColor": "teal",
    "lengthKm": 59,
    "minWidthKm": 14,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите параметры пролива (длина, наим. ширина) и бассейн: Гибралтарский пролив",
      "backMainAnswer": "Длина: 59 км • Наим. ширина: 14 км (Атлантический океан)",
      "backMetrics": [
        {
          "label": "Бассейн",
          "value": "Атлантический океан"
        },
        {
          "label": "Длина",
          "value": "59 км"
        },
        {
          "label": "Наименьшая ширина",
          "value": "14 км"
        }
      ],
      "backNote": "Пролив Гибралтарский пролив: длина 59 км, ширина от 14 км."
    },
    "isCoreLandmark": true
  },
  {
    "id": "m3_str_dardanelles",
    "moduleId": "module3",
    "submoduleId": "m3_straits_atlantic",
    "category": "straits",
    "categoryRu": "Проливы",
    "difficulty": "Стандартный",
    "name": "Дарданеллы",
    "aliases": [
      "Геллеспонт"
    ],
    "region": "Атлантический океан",
    "locationDesc": "Атлантический океан (длина 120 км, наим. ширина 0.3 км)",
    "mapPrompt": "Покажите пролив: Дарданеллы",
    "geometryType": "point",
    "lat": 40.2,
    "lng": 26.4,
    "hitRadiusKm": 120,
    "bounds": null,
    "badgeColor": "teal",
    "lengthKm": 120,
    "minWidthKm": 0.3,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите параметры пролива (длина, наим. ширина) и бассейн: Дарданеллы",
      "backMainAnswer": "Длина: 120 км • Наим. ширина: 0.3 км (Атлантический океан)",
      "backMetrics": [
        {
          "label": "Бассейн",
          "value": "Атлантический океан"
        },
        {
          "label": "Длина",
          "value": "120 км"
        },
        {
          "label": "Наименьшая ширина",
          "value": "0.3 км"
        }
      ],
      "backNote": "Пролив Дарданеллы: длина 120 км, ширина от 0.3 км."
    },
    "isCoreLandmark": true
  },
  {
    "id": "m3_str_denmark_strait",
    "moduleId": "module3",
    "submoduleId": "m3_straits_atlantic",
    "category": "straits",
    "categoryRu": "Проливы",
    "difficulty": "Стандартный",
    "name": "Датский пролив",
    "aliases": [],
    "region": "Атлантический океан",
    "locationDesc": "Атлантический океан (длина 530 км, наим. ширина 287 км)",
    "mapPrompt": "Покажите пролив: Датский пролив",
    "geometryType": "point",
    "lat": 66.5,
    "lng": -27,
    "hitRadiusKm": 120,
    "bounds": null,
    "badgeColor": "teal",
    "lengthKm": 530,
    "minWidthKm": 287,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите параметры пролива (длина, наим. ширина) и бассейн: Датский пролив",
      "backMainAnswer": "Длина: 530 км • Наим. ширина: 287 км (Атлантический океан)",
      "backMetrics": [
        {
          "label": "Бассейн",
          "value": "Атлантический океан"
        },
        {
          "label": "Длина",
          "value": "530 км"
        },
        {
          "label": "Наименьшая ширина",
          "value": "287 км"
        }
      ],
      "backNote": "Пролив Датский пролив: длина 530 км, ширина от 287 км."
    },
    "isCoreLandmark": true
  },
  {
    "id": "m3_str_davis_strait",
    "moduleId": "module3",
    "submoduleId": "m3_straits_atlantic",
    "category": "straits",
    "categoryRu": "Проливы",
    "difficulty": "Стандартный",
    "name": "Девисов пролив",
    "aliases": [],
    "region": "Атлантический океан",
    "locationDesc": "Атлантический океан (длина 1170 км, наим. ширина 360 км)",
    "mapPrompt": "Покажите пролив: Девисов пролив",
    "geometryType": "point",
    "lat": 65,
    "lng": -58,
    "hitRadiusKm": 120,
    "bounds": null,
    "badgeColor": "teal",
    "lengthKm": 1170,
    "minWidthKm": 360,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите параметры пролива (длина, наим. ширина) и бассейн: Девисов пролив",
      "backMainAnswer": "Длина: 1170 км • Наим. ширина: 360 км (Атлантический океан)",
      "backMetrics": [
        {
          "label": "Бассейн",
          "value": "Атлантический океан"
        },
        {
          "label": "Длина",
          "value": "1170 км"
        },
        {
          "label": "Наименьшая ширина",
          "value": "360 км"
        }
      ],
      "backNote": "Пролив Девисов пролив: длина 1170 км, ширина от 360 км."
    },
    "isCoreLandmark": false
  },
  {
    "id": "m3_str_drake_passage",
    "moduleId": "module3",
    "submoduleId": "m3_straits_atlantic",
    "category": "straits",
    "categoryRu": "Проливы",
    "difficulty": "Стандартный",
    "name": "Пролив Дрейка",
    "aliases": [],
    "region": "Атлантический океан",
    "locationDesc": "Атлантический океан (длина 460 км, наим. ширина 818 км)",
    "mapPrompt": "Покажите пролив: Пролив Дрейка",
    "geometryType": "point",
    "lat": -58.5,
    "lng": -65,
    "hitRadiusKm": 200,
    "bounds": null,
    "badgeColor": "teal",
    "lengthKm": 460,
    "minWidthKm": 818,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите параметры пролива (длина, наим. ширина) и бассейн: Пролив Дрейка",
      "backMainAnswer": "Длина: 460 км • Наим. ширина: 818 км (Атлантический океан)",
      "backMetrics": [
        {
          "label": "Бассейн",
          "value": "Атлантический океан"
        },
        {
          "label": "Длина",
          "value": "460 км"
        },
        {
          "label": "Наименьшая ширина",
          "value": "818 км"
        }
      ],
      "backNote": "Самый широкий пролив на Земле (до 818-1000 км)."
    },
    "isCoreLandmark": true
  },
  {
    "id": "m3_str_cabot",
    "moduleId": "module3",
    "submoduleId": "m3_straits_atlantic",
    "category": "straits",
    "categoryRu": "Проливы",
    "difficulty": "Стандартный",
    "name": "Пролив Кабота",
    "aliases": [],
    "region": "Атлантический океан",
    "locationDesc": "Атлантический океан (длина 195 км, наим. ширина 107 км)",
    "mapPrompt": "Покажите пролив: Пролив Кабота",
    "geometryType": "point",
    "lat": 47.5,
    "lng": -59.5,
    "hitRadiusKm": 120,
    "bounds": null,
    "badgeColor": "teal",
    "lengthKm": 195,
    "minWidthKm": 107,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите параметры пролива (длина, наим. ширина) и бассейн: Пролив Кабота",
      "backMainAnswer": "Длина: 195 км • Наим. ширина: 107 км (Атлантический океан)",
      "backMetrics": [
        {
          "label": "Бассейн",
          "value": "Атлантический океан"
        },
        {
          "label": "Длина",
          "value": "195 км"
        },
        {
          "label": "Наименьшая ширина",
          "value": "107 км"
        }
      ],
      "backNote": "Пролив Пролив Кабота: длина 195 км, ширина от 107 км."
    },
    "isCoreLandmark": false
  },
  {
    "id": "m3_str_kattegat",
    "moduleId": "module3",
    "submoduleId": "m3_straits_atlantic",
    "category": "straits",
    "categoryRu": "Проливы",
    "difficulty": "Стандартный",
    "name": "Каттегат",
    "aliases": [],
    "region": "Атлантический океан",
    "locationDesc": "Атлантический океан (длина 270 км, наим. ширина 60 км)",
    "mapPrompt": "Покажите пролив: Каттегат",
    "geometryType": "point",
    "lat": 56.9,
    "lng": 11.5,
    "hitRadiusKm": 120,
    "bounds": null,
    "badgeColor": "teal",
    "lengthKm": 270,
    "minWidthKm": 60,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите параметры пролива (длина, наим. ширина) и бассейн: Каттегат",
      "backMainAnswer": "Длина: 270 км • Наим. ширина: 60 км (Атлантический океан)",
      "backMetrics": [
        {
          "label": "Бассейн",
          "value": "Атлантический океан"
        },
        {
          "label": "Длина",
          "value": "270 км"
        },
        {
          "label": "Наименьшая ширина",
          "value": "60 км"
        }
      ],
      "backNote": "Пролив Каттегат: длина 270 км, ширина от 60 км."
    },
    "isCoreLandmark": false
  },
  {
    "id": "m3_str_kerch",
    "moduleId": "module3",
    "submoduleId": "m3_straits_atlantic",
    "category": "straits",
    "categoryRu": "Проливы",
    "difficulty": "Стандартный",
    "name": "Керченский пролив",
    "aliases": [],
    "region": "Атлантический океан",
    "locationDesc": "Атлантический океан (длина 41 км, наим. ширина 4 км)",
    "mapPrompt": "Покажите пролив: Керченский пролив",
    "geometryType": "point",
    "lat": 45.3,
    "lng": 36.6,
    "hitRadiusKm": 120,
    "bounds": null,
    "badgeColor": "teal",
    "lengthKm": 41,
    "minWidthKm": 4,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите параметры пролива (длина, наим. ширина) и бассейн: Керченский пролив",
      "backMainAnswer": "Длина: 41 км • Наим. ширина: 4 км (Атлантический океан)",
      "backMetrics": [
        {
          "label": "Бассейн",
          "value": "Атлантический океан"
        },
        {
          "label": "Длина",
          "value": "41 км"
        },
        {
          "label": "Наименьшая ширина",
          "value": "4 км"
        }
      ],
      "backNote": "Пролив Керченский пролив: длина 41 км, ширина от 4 км."
    },
    "isCoreLandmark": true
  },
  {
    "id": "m3_str_english_channel",
    "moduleId": "module3",
    "submoduleId": "m3_straits_atlantic",
    "category": "straits",
    "categoryRu": "Проливы",
    "difficulty": "Стандартный",
    "name": "Ла-Манш (Английский канал)",
    "aliases": [
      "Английский канал"
    ],
    "region": "Атлантический океан",
    "locationDesc": "Атлантический океан (длина 578 км, наим. ширина 32 км)",
    "mapPrompt": "Покажите пролив: Ла-Манш (Английский канал)",
    "geometryType": "point",
    "lat": 50,
    "lng": -1,
    "hitRadiusKm": 120,
    "bounds": null,
    "badgeColor": "teal",
    "lengthKm": 578,
    "minWidthKm": 32,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите параметры пролива (длина, наим. ширина) и бассейн: Ла-Манш (Английский канал)",
      "backMainAnswer": "Длина: 578 км • Наим. ширина: 32 км (Атлантический океан)",
      "backMetrics": [
        {
          "label": "Бассейн",
          "value": "Атлантический океан"
        },
        {
          "label": "Длина",
          "value": "578 км"
        },
        {
          "label": "Наименьшая ширина",
          "value": "32 км"
        }
      ],
      "backNote": "Пролив Ла-Манш (Английский канал): длина 578 км, ширина от 32 км."
    },
    "isCoreLandmark": true
  },
  {
    "id": "m3_str_strait_of_dover",
    "moduleId": "module3",
    "submoduleId": "m3_straits_atlantic",
    "category": "straits",
    "categoryRu": "Проливы",
    "difficulty": "Стандартный",
    "name": "Па-де-Кале (Дуврский пролив)",
    "aliases": [
      "Дуврский пролив"
    ],
    "region": "Атлантический океан",
    "locationDesc": "Атлантический океан (длина 37 км, наим. ширина 32 км)",
    "mapPrompt": "Покажите пролив: Па-де-Кале (Дуврский пролив)",
    "geometryType": "point",
    "lat": 51,
    "lng": 1.4,
    "hitRadiusKm": 120,
    "bounds": null,
    "badgeColor": "teal",
    "lengthKm": 37,
    "minWidthKm": 32,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите параметры пролива (длина, наим. ширина) и бассейн: Па-де-Кале (Дуврский пролив)",
      "backMainAnswer": "Длина: 37 км • Наим. ширина: 32 км (Атлантический океан)",
      "backMetrics": [
        {
          "label": "Бассейн",
          "value": "Атлантический океан"
        },
        {
          "label": "Длина",
          "value": "37 км"
        },
        {
          "label": "Наименьшая ширина",
          "value": "32 км"
        }
      ],
      "backNote": "Пролив Па-де-Кале (Дуврский пролив): длина 37 км, ширина от 32 км."
    },
    "isCoreLandmark": false
  },
  {
    "id": "m3_str_little_belt",
    "moduleId": "module3",
    "submoduleId": "m3_straits_atlantic",
    "category": "straits",
    "categoryRu": "Проливы",
    "difficulty": "Стандартный",
    "name": "Малый Бельт",
    "aliases": [],
    "region": "Атлантический океан",
    "locationDesc": "Атлантический океан (длина 130 км, наим. ширина 0.5 км)",
    "mapPrompt": "Покажите пролив: Малый Бельт",
    "geometryType": "point",
    "lat": 55.4,
    "lng": 9.8,
    "hitRadiusKm": 120,
    "bounds": null,
    "badgeColor": "teal",
    "lengthKm": 130,
    "minWidthKm": 0.5,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите параметры пролива (длина, наим. ширина) и бассейн: Малый Бельт",
      "backMainAnswer": "Длина: 130 км • Наим. ширина: 0.5 км (Атлантический океан)",
      "backMetrics": [
        {
          "label": "Бассейн",
          "value": "Атлантический океан"
        },
        {
          "label": "Длина",
          "value": "130 км"
        },
        {
          "label": "Наименьшая ширина",
          "value": "0.5 км"
        }
      ],
      "backNote": "Пролив Малый Бельт: длина 130 км, ширина от 0.5 км."
    },
    "isCoreLandmark": false
  },
  {
    "id": "m3_str_messina",
    "moduleId": "module3",
    "submoduleId": "m3_straits_atlantic",
    "category": "straits",
    "categoryRu": "Проливы",
    "difficulty": "Стандартный",
    "name": "Мессинский пролив",
    "aliases": [],
    "region": "Атлантический океан",
    "locationDesc": "Атлантический океан (длина 33 км, наим. ширина 3 км)",
    "mapPrompt": "Покажите пролив: Мессинский пролив",
    "geometryType": "point",
    "lat": 38.2,
    "lng": 15.6,
    "hitRadiusKm": 120,
    "bounds": null,
    "badgeColor": "teal",
    "lengthKm": 33,
    "minWidthKm": 3,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите параметры пролива (длина, наим. ширина) и бассейн: Мессинский пролив",
      "backMainAnswer": "Длина: 33 км • Наим. ширина: 3 км (Атлантический океан)",
      "backMetrics": [
        {
          "label": "Бассейн",
          "value": "Атлантический океан"
        },
        {
          "label": "Длина",
          "value": "33 км"
        },
        {
          "label": "Наименьшая ширина",
          "value": "3 км"
        }
      ],
      "backNote": "Пролив Мессинский пролив: длина 33 км, ширина от 3 км."
    },
    "isCoreLandmark": false
  },
  {
    "id": "m3_str_otrant",
    "moduleId": "module3",
    "submoduleId": "m3_straits_atlantic",
    "category": "straits",
    "categoryRu": "Проливы",
    "difficulty": "Стандартный",
    "name": "Пролив Отранто",
    "aliases": [],
    "region": "Атлантический океан",
    "locationDesc": "Атлантический океан (длина 130 км, наим. ширина 75 км)",
    "mapPrompt": "Покажите пролив: Пролив Отранто",
    "geometryType": "point",
    "lat": 40,
    "lng": 19,
    "hitRadiusKm": 120,
    "bounds": null,
    "badgeColor": "teal",
    "lengthKm": 130,
    "minWidthKm": 75,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите параметры пролива (длина, наим. ширина) и бассейн: Пролив Отранто",
      "backMainAnswer": "Длина: 130 км • Наим. ширина: 75 км (Атлантический океан)",
      "backMetrics": [
        {
          "label": "Бассейн",
          "value": "Атлантический океан"
        },
        {
          "label": "Длина",
          "value": "130 км"
        },
        {
          "label": "Наименьшая ширина",
          "value": "75 км"
        }
      ],
      "backNote": "Пролив Пролив Отранто: длина 130 км, ширина от 75 км."
    },
    "isCoreLandmark": false
  },
  {
    "id": "m3_str_st_george",
    "moduleId": "module3",
    "submoduleId": "m3_straits_atlantic",
    "category": "straits",
    "categoryRu": "Проливы",
    "difficulty": "Стандартный",
    "name": "Пролив Святого Георга",
    "aliases": [],
    "region": "Атлантический океан",
    "locationDesc": "Атлантический океан (длина 160 км, наим. ширина 75 км)",
    "mapPrompt": "Покажите пролив: Пролив Святого Георга",
    "geometryType": "point",
    "lat": 52.1,
    "lng": -5.8,
    "hitRadiusKm": 120,
    "bounds": null,
    "badgeColor": "teal",
    "lengthKm": 160,
    "minWidthKm": 75,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите параметры пролива (длина, наим. ширина) и бассейн: Пролив Святого Георга",
      "backMainAnswer": "Длина: 160 км • Наим. ширина: 75 км (Атлантический океан)",
      "backMetrics": [
        {
          "label": "Бассейн",
          "value": "Атлантический океан"
        },
        {
          "label": "Длина",
          "value": "160 км"
        },
        {
          "label": "Наименьшая ширина",
          "value": "75 км"
        }
      ],
      "backNote": "Пролив Пролив Святого Георга: длина 160 км, ширина от 75 км."
    },
    "isCoreLandmark": false
  },
  {
    "id": "m3_str_skagerrak",
    "moduleId": "module3",
    "submoduleId": "m3_straits_atlantic",
    "category": "straits",
    "categoryRu": "Проливы",
    "difficulty": "Стандартный",
    "name": "Скагеррак",
    "aliases": [],
    "region": "Атлантический океан",
    "locationDesc": "Атлантический океан (длина 225 км, наим. ширина 60 км)",
    "mapPrompt": "Покажите пролив: Скагеррак",
    "geometryType": "point",
    "lat": 58,
    "lng": 9.5,
    "hitRadiusKm": 120,
    "bounds": null,
    "badgeColor": "teal",
    "lengthKm": 225,
    "minWidthKm": 60,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите параметры пролива (длина, наим. ширина) и бассейн: Скагеррак",
      "backMainAnswer": "Длина: 225 км • Наим. ширина: 60 км (Атлантический океан)",
      "backMetrics": [
        {
          "label": "Бассейн",
          "value": "Атлантический океан"
        },
        {
          "label": "Длина",
          "value": "225 км"
        },
        {
          "label": "Наименьшая ширина",
          "value": "60 км"
        }
      ],
      "backNote": "Пролив Скагеррак: длина 225 км, ширина от 60 км."
    },
    "isCoreLandmark": false
  },
  {
    "id": "m3_str_florida_strait",
    "moduleId": "module3",
    "submoduleId": "m3_straits_atlantic",
    "category": "straits",
    "categoryRu": "Проливы",
    "difficulty": "Стандартный",
    "name": "Флоридский пролив",
    "aliases": [],
    "region": "Атлантический океан",
    "locationDesc": "Атлантический океан (длина 651 км, наим. ширина 80 км)",
    "mapPrompt": "Покажите пролив: Флоридский пролив",
    "geometryType": "point",
    "lat": 24.5,
    "lng": -80.5,
    "hitRadiusKm": 120,
    "bounds": null,
    "badgeColor": "teal",
    "lengthKm": 651,
    "minWidthKm": 80,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите параметры пролива (длина, наим. ширина) и бассейн: Флоридский пролив",
      "backMainAnswer": "Длина: 651 км • Наим. ширина: 80 км (Атлантический океан)",
      "backMetrics": [
        {
          "label": "Бассейн",
          "value": "Атлантический океан"
        },
        {
          "label": "Длина",
          "value": "651 км"
        },
        {
          "label": "Наименьшая ширина",
          "value": "80 км"
        }
      ],
      "backNote": "Пролив Флоридский пролив: длина 651 км, ширина от 80 км."
    },
    "isCoreLandmark": true
  },
  {
    "id": "m3_str_oresund",
    "moduleId": "module3",
    "submoduleId": "m3_straits_atlantic",
    "category": "straits",
    "categoryRu": "Проливы",
    "difficulty": "Стандартный",
    "name": "Эресунн (Зунд)",
    "aliases": [
      "Зунд"
    ],
    "region": "Атлантический океан",
    "locationDesc": "Атлантический океан (длина 102 км, наим. ширина 3.4 км)",
    "mapPrompt": "Покажите пролив: Эресунн (Зунд)",
    "geometryType": "point",
    "lat": 55.7,
    "lng": 12.8,
    "hitRadiusKm": 120,
    "bounds": null,
    "badgeColor": "teal",
    "lengthKm": 102,
    "minWidthKm": 3.4,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите параметры пролива (длина, наим. ширина) и бассейн: Эресунн (Зунд)",
      "backMainAnswer": "Длина: 102 км • Наим. ширина: 3.4 км (Атлантический океан)",
      "backMetrics": [
        {
          "label": "Бассейн",
          "value": "Атлантический океан"
        },
        {
          "label": "Длина",
          "value": "102 км"
        },
        {
          "label": "Наименьшая ширина",
          "value": "3.4 км"
        }
      ],
      "backNote": "Пролив Эресунн (Зунд): длина 102 км, ширина от 3.4 км."
    },
    "isCoreLandmark": false
  },
  {
    "id": "m3_str_yucatan_channel",
    "moduleId": "module3",
    "submoduleId": "m3_straits_atlantic",
    "category": "straits",
    "categoryRu": "Проливы",
    "difficulty": "Стандартный",
    "name": "Юкатанский пролив",
    "aliases": [],
    "region": "Атлантический океан",
    "locationDesc": "Атлантический океан (длина 55 км, наим. ширина 200 км)",
    "mapPrompt": "Покажите пролив: Юкатанский пролив",
    "geometryType": "point",
    "lat": 21.8,
    "lng": -85.5,
    "hitRadiusKm": 120,
    "bounds": null,
    "badgeColor": "teal",
    "lengthKm": 55,
    "minWidthKm": 200,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите параметры пролива (длина, наим. ширина) и бассейн: Юкатанский пролив",
      "backMainAnswer": "Длина: 55 км • Наим. ширина: 200 км (Атлантический океан)",
      "backMetrics": [
        {
          "label": "Бассейн",
          "value": "Атлантический океан"
        },
        {
          "label": "Длина",
          "value": "55 км"
        },
        {
          "label": "Наименьшая ширина",
          "value": "200 км"
        }
      ],
      "backNote": "Пролив Юкатанский пролив: длина 55 км, ширина от 200 км."
    },
    "isCoreLandmark": true
  },
  {
    "id": "m3_str_bab_el_mandeb",
    "moduleId": "module3",
    "submoduleId": "m3_straits_indian",
    "category": "straits",
    "categoryRu": "Проливы",
    "difficulty": "Стандартный",
    "name": "Баб-эль-Мандебский пролив",
    "aliases": [
      "Врата слёз"
    ],
    "region": "Индийский океан",
    "locationDesc": "Индийский океан (длина 109 км, наим. ширина 26 км)",
    "mapPrompt": "Покажите пролив: Баб-эль-Мандебский пролив",
    "geometryType": "point",
    "lat": 12.6,
    "lng": 43.4,
    "hitRadiusKm": 120,
    "bounds": null,
    "badgeColor": "teal",
    "lengthKm": 109,
    "minWidthKm": 26,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите параметры пролива (длина, наим. ширина) и бассейн: Баб-эль-Мандебский пролив",
      "backMainAnswer": "Длина: 109 км • Наим. ширина: 26 км (Индийский океан)",
      "backMetrics": [
        {
          "label": "Бассейн",
          "value": "Индийский океан"
        },
        {
          "label": "Длина",
          "value": "109 км"
        },
        {
          "label": "Наименьшая ширина",
          "value": "26 км"
        }
      ],
      "backNote": "Пролив Баб-эль-Мандебский пролив: длина 109 км, ширина от 26 км."
    },
    "isCoreLandmark": true
  },
  {
    "id": "m3_str_mozambique_channel",
    "moduleId": "module3",
    "submoduleId": "m3_straits_indian",
    "category": "straits",
    "categoryRu": "Проливы",
    "difficulty": "Стандартный",
    "name": "Мозамбикский пролив",
    "aliases": [],
    "region": "Индийский океан",
    "locationDesc": "Индийский океан (длина 1760 км, наим. ширина 422 км)",
    "mapPrompt": "Покажите пролив: Мозамбикский пролив",
    "geometryType": "point",
    "lat": -18,
    "lng": 41,
    "hitRadiusKm": 200,
    "bounds": null,
    "badgeColor": "teal",
    "lengthKm": 1760,
    "minWidthKm": 422,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите параметры пролива (длина, наим. ширина) и бассейн: Мозамбикский пролив",
      "backMainAnswer": "Длина: 1760 км • Наим. ширина: 422 км (Индийский океан)",
      "backMetrics": [
        {
          "label": "Бассейн",
          "value": "Индийский океан"
        },
        {
          "label": "Длина",
          "value": "1760 км"
        },
        {
          "label": "Наименьшая ширина",
          "value": "422 км"
        }
      ],
      "backNote": "Самый длинный пролив на Земле (1 760 км)."
    },
    "isCoreLandmark": true
  },
  {
    "id": "m3_str_hormuz",
    "moduleId": "module3",
    "submoduleId": "m3_straits_indian",
    "category": "straits",
    "categoryRu": "Проливы",
    "difficulty": "Стандартный",
    "name": "Ормузский (Хормузский) пролив",
    "aliases": [
      "Хормузский"
    ],
    "region": "Индийский океан",
    "locationDesc": "Индийский океан (длина 195 км, наим. ширина 54 км)",
    "mapPrompt": "Покажите пролив: Ормузский (Хормузский) пролив",
    "geometryType": "point",
    "lat": 26.5,
    "lng": 56.4,
    "hitRadiusKm": 120,
    "bounds": null,
    "badgeColor": "teal",
    "lengthKm": 195,
    "minWidthKm": 54,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите параметры пролива (длина, наим. ширина) и бассейн: Ормузский (Хормузский) пролив",
      "backMainAnswer": "Длина: 195 км • Наим. ширина: 54 км (Индийский океан)",
      "backMetrics": [
        {
          "label": "Бассейн",
          "value": "Индийский океан"
        },
        {
          "label": "Длина",
          "value": "195 км"
        },
        {
          "label": "Наименьшая ширина",
          "value": "54 км"
        }
      ],
      "backNote": "Пролив Ормузский (Хормузский) пролив: длина 195 км, ширина от 54 км."
    },
    "isCoreLandmark": true
  },
  {
    "id": "m3_str_palk_strait",
    "moduleId": "module3",
    "submoduleId": "m3_straits_indian",
    "category": "straits",
    "categoryRu": "Проливы",
    "difficulty": "Стандартный",
    "name": "Полкский пролив",
    "aliases": [],
    "region": "Индийский океан",
    "locationDesc": "Индийский океан (длина 150 км, наим. ширина 55 км)",
    "mapPrompt": "Покажите пролив: Полкский пролив",
    "geometryType": "point",
    "lat": 9.8,
    "lng": 79.5,
    "hitRadiusKm": 120,
    "bounds": null,
    "badgeColor": "teal",
    "lengthKm": 150,
    "minWidthKm": 55,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите параметры пролива (длина, наим. ширина) и бассейн: Полкский пролив",
      "backMainAnswer": "Длина: 150 км • Наим. ширина: 55 км (Индийский океан)",
      "backMetrics": [
        {
          "label": "Бассейн",
          "value": "Индийский океан"
        },
        {
          "label": "Длина",
          "value": "150 км"
        },
        {
          "label": "Наименьшая ширина",
          "value": "55 км"
        }
      ],
      "backNote": "Пролив Полкский пролив: длина 150 км, ширина от 55 км."
    },
    "isCoreLandmark": false
  },
  {
    "id": "m3_str_vilkitsky",
    "moduleId": "module3",
    "submoduleId": "m3_straits_arctic",
    "category": "straits",
    "categoryRu": "Проливы",
    "difficulty": "Стандартный",
    "name": "Пролив Вилькицкого",
    "aliases": [],
    "region": "Северный Ледовитый океан",
    "locationDesc": "Северный Ледовитый океан (длина 104 км, наим. ширина 55 км)",
    "mapPrompt": "Покажите пролив: Пролив Вилькицкого",
    "geometryType": "point",
    "lat": 77.9,
    "lng": 103,
    "hitRadiusKm": 120,
    "bounds": null,
    "badgeColor": "teal",
    "lengthKm": 104,
    "minWidthKm": 55,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите параметры пролива (длина, наим. ширина) и бассейн: Пролив Вилькицкого",
      "backMainAnswer": "Длина: 104 км • Наим. ширина: 55 км (Северный Ледовитый океан)",
      "backMetrics": [
        {
          "label": "Бассейн",
          "value": "Северный Ледовитый океан"
        },
        {
          "label": "Длина",
          "value": "104 км"
        },
        {
          "label": "Наименьшая ширина",
          "value": "55 км"
        }
      ],
      "backNote": "Пролив Пролив Вилькицкого: длина 104 км, ширина от 55 км."
    },
    "isCoreLandmark": false
  },
  {
    "id": "m3_str_hudson_strait",
    "moduleId": "module3",
    "submoduleId": "m3_straits_arctic",
    "category": "straits",
    "categoryRu": "Проливы",
    "difficulty": "Стандартный",
    "name": "Гудзонов пролив",
    "aliases": [],
    "region": "Северный Ледовитый океан",
    "locationDesc": "Северный Ледовитый океан (длина 806 км, наим. ширина 115 км)",
    "mapPrompt": "Покажите пролив: Гудзонов пролив",
    "geometryType": "point",
    "lat": 62.5,
    "lng": -71,
    "hitRadiusKm": 120,
    "bounds": null,
    "badgeColor": "teal",
    "lengthKm": 806,
    "minWidthKm": 115,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите параметры пролива (длина, наим. ширина) и бассейн: Гудзонов пролив",
      "backMainAnswer": "Длина: 806 км • Наим. ширина: 115 км (Северный Ледовитый океан)",
      "backMetrics": [
        {
          "label": "Бассейн",
          "value": "Северный Ледовитый океан"
        },
        {
          "label": "Длина",
          "value": "806 км"
        },
        {
          "label": "Наименьшая ширина",
          "value": "115 км"
        }
      ],
      "backNote": "Пролив Гудзонов пролив: длина 806 км, ширина от 115 км."
    },
    "isCoreLandmark": true
  },
  {
    "id": "m3_str_dmitry_laptev",
    "moduleId": "module3",
    "submoduleId": "m3_straits_arctic",
    "category": "straits",
    "categoryRu": "Проливы",
    "difficulty": "Стандартный",
    "name": "Пролив Дмитрия Лаптева",
    "aliases": [],
    "region": "Северный Ледовитый океан",
    "locationDesc": "Северный Ледовитый океан (длина 115 км, наим. ширина 50 км)",
    "mapPrompt": "Покажите пролив: Пролив Дмитрия Лаптева",
    "geometryType": "point",
    "lat": 73,
    "lng": 142,
    "hitRadiusKm": 120,
    "bounds": null,
    "badgeColor": "teal",
    "lengthKm": 115,
    "minWidthKm": 50,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите параметры пролива (длина, наим. ширина) и бассейн: Пролив Дмитрия Лаптева",
      "backMainAnswer": "Длина: 115 км • Наим. ширина: 50 км (Северный Ледовитый океан)",
      "backMetrics": [
        {
          "label": "Бассейн",
          "value": "Северный Ледовитый океан"
        },
        {
          "label": "Длина",
          "value": "115 км"
        },
        {
          "label": "Наименьшая ширина",
          "value": "50 км"
        }
      ],
      "backNote": "Пролив Пролив Дмитрия Лаптева: длина 115 км, ширина от 50 км."
    },
    "isCoreLandmark": false
  },
  {
    "id": "m3_str_kara_gates",
    "moduleId": "module3",
    "submoduleId": "m3_straits_arctic",
    "category": "straits",
    "categoryRu": "Проливы",
    "difficulty": "Стандартный",
    "name": "Карские Ворота",
    "aliases": [],
    "region": "Северный Ледовитый океан",
    "locationDesc": "Северный Ледовитый океан (длина 33 км, наим. ширина 45 км)",
    "mapPrompt": "Покажите пролив: Карские Ворота",
    "geometryType": "point",
    "lat": 70.5,
    "lng": 58,
    "hitRadiusKm": 120,
    "bounds": null,
    "badgeColor": "teal",
    "lengthKm": 33,
    "minWidthKm": 45,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите параметры пролива (длина, наим. ширина) и бассейн: Карские Ворота",
      "backMainAnswer": "Длина: 33 км • Наим. ширина: 45 км (Северный Ледовитый океан)",
      "backMetrics": [
        {
          "label": "Бассейн",
          "value": "Северный Ледовитый океан"
        },
        {
          "label": "Длина",
          "value": "33 км"
        },
        {
          "label": "Наименьшая ширина",
          "value": "45 км"
        }
      ],
      "backNote": "Пролив Карские Ворота: длина 33 км, ширина от 45 км."
    },
    "isCoreLandmark": false
  },
  {
    "id": "m3_str_long_strait",
    "moduleId": "module3",
    "submoduleId": "m3_straits_arctic",
    "category": "straits",
    "categoryRu": "Проливы",
    "difficulty": "Стандартный",
    "name": "Пролив Лонга",
    "aliases": [],
    "region": "Северный Ледовитый океан",
    "locationDesc": "Северный Ледовитый океан (длина 128 км, наим. ширина 146 км)",
    "mapPrompt": "Покажите пролив: Пролив Лонга",
    "geometryType": "point",
    "lat": 70.2,
    "lng": 178,
    "hitRadiusKm": 120,
    "bounds": null,
    "badgeColor": "teal",
    "lengthKm": 128,
    "minWidthKm": 146,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите параметры пролива (длина, наим. ширина) и бассейн: Пролив Лонга",
      "backMainAnswer": "Длина: 128 км • Наим. ширина: 146 км (Северный Ледовитый океан)",
      "backMetrics": [
        {
          "label": "Бассейн",
          "value": "Северный Ледовитый океан"
        },
        {
          "label": "Длина",
          "value": "128 км"
        },
        {
          "label": "Наименьшая ширина",
          "value": "146 км"
        }
      ],
      "backNote": "Пролив Пролив Лонга: длина 128 км, ширина от 146 км."
    },
    "isCoreLandmark": false
  },
  {
    "id": "m3_str_matochkin_shar",
    "moduleId": "module3",
    "submoduleId": "m3_straits_arctic",
    "category": "straits",
    "categoryRu": "Проливы",
    "difficulty": "Стандартный",
    "name": "Маточкин Шар",
    "aliases": [],
    "region": "Северный Ледовитый океан",
    "locationDesc": "Северный Ледовитый океан (длина 98 км, наим. ширина 0.6 км)",
    "mapPrompt": "Покажите пролив: Маточкин Шар",
    "geometryType": "point",
    "lat": 73.3,
    "lng": 55,
    "hitRadiusKm": 120,
    "bounds": null,
    "badgeColor": "teal",
    "lengthKm": 98,
    "minWidthKm": 0.6,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите параметры пролива (длина, наим. ширина) и бассейн: Маточкин Шар",
      "backMainAnswer": "Длина: 98 км • Наим. ширина: 0.6 км (Северный Ледовитый океан)",
      "backMetrics": [
        {
          "label": "Бассейн",
          "value": "Северный Ледовитый океан"
        },
        {
          "label": "Длина",
          "value": "98 км"
        },
        {
          "label": "Наименьшая ширина",
          "value": "0.6 км"
        }
      ],
      "backNote": "Пролив Маточкин Шар: длина 98 км, ширина от 0.6 км."
    },
    "isCoreLandmark": false
  },
  {
    "id": "m3_str_sannikov",
    "moduleId": "module3",
    "submoduleId": "m3_straits_arctic",
    "category": "straits",
    "categoryRu": "Проливы",
    "difficulty": "Стандартный",
    "name": "Пролив Санникова",
    "aliases": [],
    "region": "Северный Ледовитый океан",
    "locationDesc": "Северный Ледовитый океан (длина 238 км, наим. ширина 55 км)",
    "mapPrompt": "Покажите пролив: Пролив Санникова",
    "geometryType": "point",
    "lat": 74.5,
    "lng": 140,
    "hitRadiusKm": 120,
    "bounds": null,
    "badgeColor": "teal",
    "lengthKm": 238,
    "minWidthKm": 55,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите параметры пролива (длина, наим. ширина) и бассейн: Пролив Санникова",
      "backMainAnswer": "Длина: 238 км • Наим. ширина: 55 км (Северный Ледовитый океан)",
      "backMetrics": [
        {
          "label": "Бассейн",
          "value": "Северный Ледовитый океан"
        },
        {
          "label": "Длина",
          "value": "238 км"
        },
        {
          "label": "Наименьшая ширина",
          "value": "55 км"
        }
      ],
      "backNote": "Пролив Пролив Санникова: длина 238 км, ширина от 55 км."
    },
    "isCoreLandmark": false
  },
  {
    "id": "m3_str_shokalsky",
    "moduleId": "module3",
    "submoduleId": "m3_straits_arctic",
    "category": "straits",
    "categoryRu": "Проливы",
    "difficulty": "Стандартный",
    "name": "Пролив Шокальского",
    "aliases": [],
    "region": "Северный Ледовитый океан",
    "locationDesc": "Северный Ледовитый океан (длина 106 км, наим. ширина 19 км)",
    "mapPrompt": "Покажите пролив: Пролив Шокальского",
    "geometryType": "point",
    "lat": 79,
    "lng": 100,
    "hitRadiusKm": 120,
    "bounds": null,
    "badgeColor": "teal",
    "lengthKm": 106,
    "minWidthKm": 19,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите параметры пролива (длина, наим. ширина) и бассейн: Пролив Шокальского",
      "backMainAnswer": "Длина: 106 км • Наим. ширина: 19 км (Северный Ледовитый океан)",
      "backMetrics": [
        {
          "label": "Бассейн",
          "value": "Северный Ледовитый океан"
        },
        {
          "label": "Длина",
          "value": "106 км"
        },
        {
          "label": "Наименьшая ширина",
          "value": "19 км"
        }
      ],
      "backNote": "Пролив Пролив Шокальского: длина 106 км, ширина от 19 км."
    },
    "isCoreLandmark": false
  },
  {
    "id": "m3_str_yugorsky_shar",
    "moduleId": "module3",
    "submoduleId": "m3_straits_arctic",
    "category": "straits",
    "categoryRu": "Проливы",
    "difficulty": "Стандартный",
    "name": "Югорский Шар",
    "aliases": [],
    "region": "Северный Ледовитый океан",
    "locationDesc": "Северный Ледовитый океан (длина 40 км, наим. ширина 2.8 км)",
    "mapPrompt": "Покажите пролив: Югорский Шар",
    "geometryType": "point",
    "lat": 69.8,
    "lng": 60.5,
    "hitRadiusKm": 120,
    "bounds": null,
    "badgeColor": "teal",
    "lengthKm": 40,
    "minWidthKm": 2.8,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите параметры пролива (длина, наим. ширина) и бассейн: Югорский Шар",
      "backMainAnswer": "Длина: 40 км • Наим. ширина: 2.8 км (Северный Ледовитый океан)",
      "backMetrics": [
        {
          "label": "Бассейн",
          "value": "Северный Ледовитый океан"
        },
        {
          "label": "Длина",
          "value": "40 км"
        },
        {
          "label": "Наименьшая ширина",
          "value": "2.8 км"
        }
      ],
      "backNote": "Пролив Югорский Шар: длина 40 км, ширина от 2.8 км."
    },
    "isCoreLandmark": false
  },
  {
    "id": "m3_gulf_alaska_gulf",
    "moduleId": "module3",
    "submoduleId": "m3_gulfs_pacific",
    "category": "gulfs",
    "categoryRu": "Заливы",
    "difficulty": "Стандартный",
    "name": "Залив Аляска",
    "aliases": [],
    "region": "Северная Америка, юг Аляски",
    "locationDesc": "Тихий океан (Северная Америка, юг Аляски)",
    "mapPrompt": "Покажите залив: Залив Аляска",
    "geometryType": "point",
    "lat": 57,
    "lng": -145,
    "hitRadiusKm": 220,
    "bounds": [
      54,
      -155,
      60.5,
      -135
    ],
    "badgeColor": "sky",
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "К какому океаническому бассейну и региону относится: Залив Аляска?",
      "backMainAnswer": "Залив Аляска • Тихий океан (Северная Америка, юг Аляски)",
      "backMetrics": [
        {
          "label": "Океанический бассейн",
          "value": "Тихий океан"
        },
        {
          "label": "Местоположение",
          "value": "Северная Америка, юг Аляски"
        }
      ],
      "backNote": "Залив Залив Аляска: Северная Америка, юг Аляски (Тихий океан)."
    },
    "isCoreLandmark": true
  },
  {
    "id": "m3_gulf_anadyr_gulf",
    "moduleId": "module3",
    "submoduleId": "m3_gulfs_pacific",
    "category": "gulfs",
    "categoryRu": "Заливы",
    "difficulty": "Стандартный",
    "name": "Анадырский залив",
    "aliases": [],
    "region": "Берингово море, Чукотка",
    "locationDesc": "Тихий океан (Берингово море, Чукотка)",
    "mapPrompt": "Покажите залив: Анадырский залив",
    "geometryType": "point",
    "lat": 64,
    "lng": 178,
    "hitRadiusKm": 220,
    "bounds": null,
    "badgeColor": "sky",
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "К какому океаническому бассейну и региону относится: Анадырский залив?",
      "backMainAnswer": "Анадырский залив • Тихий океан (Берингово море, Чукотка)",
      "backMetrics": [
        {
          "label": "Океанический бассейн",
          "value": "Тихий океан"
        },
        {
          "label": "Местоположение",
          "value": "Берингово море, Чукотка"
        }
      ],
      "backNote": "Залив Анадырский залив: Берингово море, Чукотка (Тихий океан)."
    },
    "isCoreLandmark": false
  },
  {
    "id": "m3_gulf_tonkin_gulf",
    "moduleId": "module3",
    "submoduleId": "m3_gulfs_pacific",
    "category": "gulfs",
    "categoryRu": "Заливы",
    "difficulty": "Стандартный",
    "name": "Бакбо (Тонкинский залив)",
    "aliases": [
      "Тонкинский"
    ],
    "region": "Южно-Китайское море (Вьетнам, Китай)",
    "locationDesc": "Тихий океан (Южно-Китайское море (Вьетнам, Китай))",
    "mapPrompt": "Покажите залив: Бакбо (Тонкинский залив)",
    "geometryType": "point",
    "lat": 19.5,
    "lng": 107.5,
    "hitRadiusKm": 220,
    "bounds": null,
    "badgeColor": "sky",
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "К какому океаническому бассейну и региону относится: Бакбо (Тонкинский залив)?",
      "backMainAnswer": "Бакбо (Тонкинский залив) • Тихий океан (Южно-Китайское море (Вьетнам, Китай))",
      "backMetrics": [
        {
          "label": "Океанический бассейн",
          "value": "Тихий океан"
        },
        {
          "label": "Местоположение",
          "value": "Южно-Китайское море (Вьетнам, Китай)"
        }
      ],
      "backNote": "Залив Бакбо (Тонкинский залив): Южно-Китайское море (Вьетнам, Китай) (Тихий океан)."
    },
    "isCoreLandmark": false
  },
  {
    "id": "m3_gulf_bohai_sea",
    "moduleId": "module3",
    "submoduleId": "m3_gulfs_pacific",
    "category": "gulfs",
    "categoryRu": "Заливы",
    "difficulty": "Стандартный",
    "name": "Бохайвань",
    "aliases": [
      "Бохайский залив"
    ],
    "region": "Жёлтое море, северный залив",
    "locationDesc": "Тихий океан (Жёлтое море, северный залив)",
    "mapPrompt": "Покажите залив: Бохайвань",
    "geometryType": "point",
    "lat": 38.5,
    "lng": 119,
    "hitRadiusKm": 220,
    "bounds": null,
    "badgeColor": "sky",
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "К какому океаническому бассейну и региону относится: Бохайвань?",
      "backMainAnswer": "Бохайвань • Тихий океан (Жёлтое море, северный залив)",
      "backMetrics": [
        {
          "label": "Океанический бассейн",
          "value": "Тихий океан"
        },
        {
          "label": "Местоположение",
          "value": "Жёлтое море, северный залив"
        }
      ],
      "backNote": "Залив Бохайвань: Жёлтое море, северный залив (Тихий океан)."
    },
    "isCoreLandmark": false
  },
  {
    "id": "m3_gulf_guayaquil",
    "moduleId": "module3",
    "submoduleId": "m3_gulfs_pacific",
    "category": "gulfs",
    "categoryRu": "Заливы",
    "difficulty": "Стандартный",
    "name": "Залив Гуаякиль",
    "aliases": [],
    "region": "Побережье Эквадора",
    "locationDesc": "Тихий океан (Побережье Эквадора)",
    "mapPrompt": "Покажите залив: Залив Гуаякиль",
    "geometryType": "point",
    "lat": -3,
    "lng": -80.5,
    "hitRadiusKm": 220,
    "bounds": null,
    "badgeColor": "sky",
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "К какому океаническому бассейну и региону относится: Залив Гуаякиль?",
      "backMainAnswer": "Залив Гуаякиль • Тихий океан (Побережье Эквадора)",
      "backMetrics": [
        {
          "label": "Океанический бассейн",
          "value": "Тихий океан"
        },
        {
          "label": "Местоположение",
          "value": "Побережье Эквадора"
        }
      ],
      "backNote": "Залив Залив Гуаякиль: Побережье Эквадора (Тихий океан)."
    },
    "isCoreLandmark": false
  },
  {
    "id": "m3_gulf_corcovado",
    "moduleId": "module3",
    "submoduleId": "m3_gulfs_pacific",
    "category": "gulfs",
    "categoryRu": "Заливы",
    "difficulty": "Стандартный",
    "name": "Залив Корковадо",
    "aliases": [],
    "region": "Чили, восточнее острова Чилоэ",
    "locationDesc": "Тихий океан (Чили, восточнее острова Чилоэ)",
    "mapPrompt": "Покажите залив: Залив Корковадо",
    "geometryType": "point",
    "lat": -43.5,
    "lng": -73.5,
    "hitRadiusKm": 220,
    "bounds": null,
    "badgeColor": "sky",
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "К какому океаническому бассейну и региону относится: Залив Корковадо?",
      "backMainAnswer": "Залив Корковадо • Тихий океан (Чили, восточнее острова Чилоэ)",
      "backMetrics": [
        {
          "label": "Океанический бассейн",
          "value": "Тихий океан"
        },
        {
          "label": "Местоположение",
          "value": "Чили, восточнее острова Чилоэ"
        }
      ],
      "backNote": "Залив Залив Корковадо: Чили, восточнее острова Чилоэ (Тихий океан)."
    },
    "isCoreLandmark": false
  },
  {
    "id": "m3_gulf_california_gulf",
    "moduleId": "module3",
    "submoduleId": "m3_gulfs_pacific",
    "category": "gulfs",
    "categoryRu": "Заливы",
    "difficulty": "Стандартный",
    "name": "Калифорнийский залив",
    "aliases": [
      "Море Кортеса"
    ],
    "region": "Запад Северной Америки (море Кортеса, Мексика)",
    "locationDesc": "Тихий океан (Запад Северной Америки (море Кортеса, Мексика))",
    "mapPrompt": "Покажите залив: Калифорнийский залив",
    "geometryType": "point",
    "lat": 26.5,
    "lng": -110.5,
    "hitRadiusKm": 220,
    "bounds": [
      23,
      -114.8,
      31.8,
      -106
    ],
    "badgeColor": "sky",
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "К какому океаническому бассейну и региону относится: Калифорнийский залив?",
      "backMainAnswer": "Калифорнийский залив • Тихий океан (Запад Северной Америки (море Кортеса, Мексика))",
      "backMetrics": [
        {
          "label": "Океанический бассейн",
          "value": "Тихий океан"
        },
        {
          "label": "Местоположение",
          "value": "Запад Северной Америки (море Кортеса, Мексика)"
        }
      ],
      "backNote": "Залив Калифорнийский залив: Запад Северной Америки (море Кортеса, Мексика) (Тихий океан)."
    },
    "isCoreLandmark": true
  },
  {
    "id": "m3_gulf_cook_inlet",
    "moduleId": "module3",
    "submoduleId": "m3_gulfs_pacific",
    "category": "gulfs",
    "categoryRu": "Заливы",
    "difficulty": "Стандартный",
    "name": "Залив Кука (Кенайский)",
    "aliases": [
      "Кенайский"
    ],
    "region": "Северо-запад Северной Америки, юг Аляски",
    "locationDesc": "Тихий океан (Северо-запад Северной Америки, юг Аляски)",
    "mapPrompt": "Покажите залив: Залив Кука (Кенайский)",
    "geometryType": "point",
    "lat": 60,
    "lng": -152,
    "hitRadiusKm": 220,
    "bounds": null,
    "badgeColor": "sky",
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "К какому океаническому бассейну и региону относится: Залив Кука (Кенайский)?",
      "backMainAnswer": "Залив Кука (Кенайский) • Тихий океан (Северо-запад Северной Америки, юг Аляски)",
      "backMetrics": [
        {
          "label": "Океанический бассейн",
          "value": "Тихий океан"
        },
        {
          "label": "Местоположение",
          "value": "Северо-запад Северной Америки, юг Аляски"
        }
      ],
      "backNote": "Залив Залив Кука (Кенайский): Северо-запад Северной Америки, юг Аляски (Тихий океан)."
    },
    "isCoreLandmark": false
  },
  {
    "id": "m3_gulf_liaodong",
    "moduleId": "module3",
    "submoduleId": "m3_gulfs_pacific",
    "category": "gulfs",
    "categoryRu": "Заливы",
    "difficulty": "Стандартный",
    "name": "Ляодунский залив",
    "aliases": [],
    "region": "Жёлтое море, северо-восток Бохайваня",
    "locationDesc": "Тихий океан (Жёлтое море, северо-восток Бохайваня)",
    "mapPrompt": "Покажите залив: Ляодунский залив",
    "geometryType": "point",
    "lat": 40,
    "lng": 121,
    "hitRadiusKm": 220,
    "bounds": null,
    "badgeColor": "sky",
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "К какому океаническому бассейну и региону относится: Ляодунский залив?",
      "backMainAnswer": "Ляодунский залив • Тихий океан (Жёлтое море, северо-восток Бохайваня)",
      "backMetrics": [
        {
          "label": "Океанический бассейн",
          "value": "Тихий океан"
        },
        {
          "label": "Местоположение",
          "value": "Жёлтое море, северо-восток Бохайваня"
        }
      ],
      "backNote": "Залив Ляодунский залив: Жёлтое море, северо-восток Бохайваня (Тихий океан)."
    },
    "isCoreLandmark": false
  },
  {
    "id": "m3_gulf_panama_gulf",
    "moduleId": "module3",
    "submoduleId": "m3_gulfs_pacific",
    "category": "gulfs",
    "categoryRu": "Заливы",
    "difficulty": "Стандартный",
    "name": "Панамский залив",
    "aliases": [],
    "region": "Панамский перешеек, южное побережье",
    "locationDesc": "Тихий океан (Панамский перешеек, южное побережье)",
    "mapPrompt": "Покажите залив: Панамский залив",
    "geometryType": "point",
    "lat": 8,
    "lng": -79.5,
    "hitRadiusKm": 220,
    "bounds": null,
    "badgeColor": "sky",
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "К какому океаническому бассейну и региону относится: Панамский залив?",
      "backMainAnswer": "Панамский залив • Тихий океан (Панамский перешеек, южное побережье)",
      "backMetrics": [
        {
          "label": "Океанический бассейн",
          "value": "Тихий океан"
        },
        {
          "label": "Местоположение",
          "value": "Панамский перешеек, южное побережье"
        }
      ],
      "backNote": "Залив Панамский залив: Панамский перешеек, южное побережье (Тихий океан)."
    },
    "isCoreLandmark": false
  },
  {
    "id": "m3_gulf_papua_gulf",
    "moduleId": "module3",
    "submoduleId": "m3_gulfs_pacific",
    "category": "gulfs",
    "categoryRu": "Заливы",
    "difficulty": "Стандартный",
    "name": "Залив Папуа",
    "aliases": [],
    "region": "Коралловое море, юг Новой Гвинеи",
    "locationDesc": "Тихий океан (Коралловое море, юг Новой Гвинеи)",
    "mapPrompt": "Покажите залив: Залив Папуа",
    "geometryType": "point",
    "lat": -9,
    "lng": 145,
    "hitRadiusKm": 220,
    "bounds": null,
    "badgeColor": "sky",
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "К какому океаническому бассейну и региону относится: Залив Папуа?",
      "backMainAnswer": "Залив Папуа • Тихий океан (Коралловое море, юг Новой Гвинеи)",
      "backMetrics": [
        {
          "label": "Океанический бассейн",
          "value": "Тихий океан"
        },
        {
          "label": "Местоположение",
          "value": "Коралловое море, юг Новой Гвинеи"
        }
      ],
      "backNote": "Залив Залив Папуа: Коралловое море, юг Новой Гвинеи (Тихий океан)."
    },
    "isCoreLandmark": false
  },
  {
    "id": "m3_gulf_penzhina_bay",
    "moduleId": "module3",
    "submoduleId": "m3_gulfs_pacific",
    "category": "gulfs",
    "categoryRu": "Заливы",
    "difficulty": "Стандартный",
    "name": "Пенжинская губа",
    "aliases": [],
    "region": "Охотское море, залив Шелихова (макс. приливы до 13 м)",
    "locationDesc": "Тихий океан (Охотское море, залив Шелихова (макс. приливы до 13 м))",
    "mapPrompt": "Покажите залив: Пенжинская губа",
    "geometryType": "point",
    "lat": 62,
    "lng": 162,
    "hitRadiusKm": 220,
    "bounds": null,
    "badgeColor": "sky",
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "К какому океаническому бассейну и региону относится: Пенжинская губа?",
      "backMainAnswer": "Пенжинская губа • Тихий океан (Охотское море, залив Шелихова (макс. приливы до 13 м))",
      "backMetrics": [
        {
          "label": "Океанический бассейн",
          "value": "Тихий океан"
        },
        {
          "label": "Местоположение",
          "value": "Охотское море, залив Шелихова (макс. приливы до 13 м)"
        }
      ],
      "backNote": "Залив Пенжинская губа: Охотское море, залив Шелихова (макс. приливы до 13 м) (Тихий океан)."
    },
    "isCoreLandmark": false
  },
  {
    "id": "m3_gulf_peter_the_great",
    "moduleId": "module3",
    "submoduleId": "m3_gulfs_pacific",
    "category": "gulfs",
    "categoryRu": "Заливы",
    "difficulty": "Стандартный",
    "name": "Залив Петра Великого",
    "aliases": [],
    "region": "Японское море, Приморский край (Владивосток)",
    "locationDesc": "Тихий океан (Японское море, Приморский край (Владивосток))",
    "mapPrompt": "Покажите залив: Залив Петра Великого",
    "geometryType": "point",
    "lat": 42.8,
    "lng": 132,
    "hitRadiusKm": 220,
    "bounds": null,
    "badgeColor": "sky",
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "К какому океаническому бассейну и региону относится: Залив Петра Великого?",
      "backMainAnswer": "Залив Петра Великого • Тихий океан (Японское море, Приморский край (Владивосток))",
      "backMetrics": [
        {
          "label": "Океанический бассейн",
          "value": "Тихий океан"
        },
        {
          "label": "Местоположение",
          "value": "Японское море, Приморский край (Владивосток)"
        }
      ],
      "backNote": "Залив Залив Петра Великого: Японское море, Приморский край (Владивосток) (Тихий океан)."
    },
    "isCoreLandmark": false
  },
  {
    "id": "m3_gulf_sakhalin_gulf",
    "moduleId": "module3",
    "submoduleId": "m3_gulfs_pacific",
    "category": "gulfs",
    "categoryRu": "Заливы",
    "difficulty": "Стандартный",
    "name": "Сахалинский залив",
    "aliases": [],
    "region": "Охотское море, севернее Сахалина",
    "locationDesc": "Тихий океан (Охотское море, севернее Сахалина)",
    "mapPrompt": "Покажите залив: Сахалинский залив",
    "geometryType": "point",
    "lat": 53.5,
    "lng": 141.5,
    "hitRadiusKm": 220,
    "bounds": null,
    "badgeColor": "sky",
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "К какому океаническому бассейну и региону относится: Сахалинский залив?",
      "backMainAnswer": "Сахалинский залив • Тихий океан (Охотское море, севернее Сахалина)",
      "backMetrics": [
        {
          "label": "Океанический бассейн",
          "value": "Тихий океан"
        },
        {
          "label": "Местоположение",
          "value": "Охотское море, севернее Сахалина"
        }
      ],
      "backNote": "Залив Сахалинский залив: Охотское море, севернее Сахалина (Тихий океан)."
    },
    "isCoreLandmark": false
  },
  {
    "id": "m3_gulf_thailand_gulf",
    "moduleId": "module3",
    "submoduleId": "m3_gulfs_pacific",
    "category": "gulfs",
    "categoryRu": "Заливы",
    "difficulty": "Стандартный",
    "name": "Сиамский залив",
    "aliases": [
      "залив Таиланд"
    ],
    "region": "Южно-Китайское море (Таиланд, Камбоджа, Вьетнам)",
    "locationDesc": "Тихий океан (Южно-Китайское море (Таиланд, Камбоджа, Вьетнам))",
    "mapPrompt": "Покажите залив: Сиамский залив",
    "geometryType": "point",
    "lat": 10,
    "lng": 101,
    "hitRadiusKm": 220,
    "bounds": [
      6.5,
      99,
      13.5,
      105
    ],
    "badgeColor": "sky",
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "К какому океаническому бассейну и региону относится: Сиамский залив?",
      "backMainAnswer": "Сиамский залив • Тихий океан (Южно-Китайское море (Таиланд, Камбоджа, Вьетнам))",
      "backMetrics": [
        {
          "label": "Океанический бассейн",
          "value": "Тихий океан"
        },
        {
          "label": "Местоположение",
          "value": "Южно-Китайское море (Таиланд, Камбоджа, Вьетнам)"
        }
      ],
      "backNote": "Залив Сиамский залив: Южно-Китайское море (Таиланд, Камбоджа, Вьетнам) (Тихий океан)."
    },
    "isCoreLandmark": true
  },
  {
    "id": "m3_gulf_tasman_bay",
    "moduleId": "module3",
    "submoduleId": "m3_gulfs_pacific",
    "category": "gulfs",
    "categoryRu": "Заливы",
    "difficulty": "Стандартный",
    "name": "Залив Тасман",
    "aliases": [],
    "region": "Новая Зеландия, север Южного острова",
    "locationDesc": "Тихий океан (Новая Зеландия, север Южного острова)",
    "mapPrompt": "Покажите залив: Залив Тасман",
    "geometryType": "point",
    "lat": -41,
    "lng": 173.2,
    "hitRadiusKm": 220,
    "bounds": null,
    "badgeColor": "sky",
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "К какому океаническому бассейну и региону относится: Залив Тасман?",
      "backMainAnswer": "Залив Тасман • Тихий океан (Новая Зеландия, север Южного острова)",
      "backMetrics": [
        {
          "label": "Океанический бассейн",
          "value": "Тихий океан"
        },
        {
          "label": "Местоположение",
          "value": "Новая Зеландия, север Южного острова"
        }
      ],
      "backNote": "Залив Залив Тасман: Новая Зеландия, север Южного острова (Тихий океан)."
    },
    "isCoreLandmark": false
  },
  {
    "id": "m3_gulf_patience_bay",
    "moduleId": "module3",
    "submoduleId": "m3_gulfs_pacific",
    "category": "gulfs",
    "categoryRu": "Заливы",
    "difficulty": "Стандартный",
    "name": "Залив Терпения",
    "aliases": [],
    "region": "Юго-восток Сахалина, Охотское море",
    "locationDesc": "Тихий океан (Юго-восток Сахалина, Охотское море)",
    "mapPrompt": "Покажите залив: Залив Терпения",
    "geometryType": "point",
    "lat": 48.5,
    "lng": 143.5,
    "hitRadiusKm": 220,
    "bounds": null,
    "badgeColor": "sky",
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "К какому океаническому бассейну и региону относится: Залив Терпения?",
      "backMainAnswer": "Залив Терпения • Тихий океан (Юго-восток Сахалина, Охотское море)",
      "backMetrics": [
        {
          "label": "Океанический бассейн",
          "value": "Тихий океан"
        },
        {
          "label": "Местоположение",
          "value": "Юго-восток Сахалина, Охотское море"
        }
      ],
      "backNote": "Залив Залив Терпения: Юго-восток Сахалина, Охотское море (Тихий океан)."
    },
    "isCoreLandmark": false
  },
  {
    "id": "m3_gulf_shelikhov_gulf",
    "moduleId": "module3",
    "submoduleId": "m3_gulfs_pacific",
    "category": "gulfs",
    "categoryRu": "Заливы",
    "difficulty": "Стандартный",
    "name": "Залив Шелихова",
    "aliases": [],
    "region": "Охотское море, между Камчаткой и материком",
    "locationDesc": "Тихий океан (Охотское море, между Камчаткой и материком)",
    "mapPrompt": "Покажите залив: Залив Шелихова",
    "geometryType": "point",
    "lat": 59.5,
    "lng": 158,
    "hitRadiusKm": 220,
    "bounds": null,
    "badgeColor": "sky",
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "К какому океаническому бассейну и региону относится: Залив Шелихова?",
      "backMainAnswer": "Залив Шелихова • Тихий океан (Охотское море, между Камчаткой и материком)",
      "backMetrics": [
        {
          "label": "Океанический бассейн",
          "value": "Тихий океан"
        },
        {
          "label": "Местоположение",
          "value": "Охотское море, между Камчаткой и материком"
        }
      ],
      "backNote": "Залив Залив Шелихова: Охотское море, между Камчаткой и материком (Тихий океан)."
    },
    "isCoreLandmark": false
  },
  {
    "id": "m3_gulf_biafra_bight",
    "moduleId": "module3",
    "submoduleId": "m3_gulfs_atlantic",
    "category": "gulfs",
    "categoryRu": "Заливы",
    "difficulty": "Стандартный",
    "name": "Залив Биафра (Бони)",
    "aliases": [
      "залив Бони"
    ],
    "region": "Гвинейский залив, побережье Камеруна/Нигерии",
    "locationDesc": "Атлантический океан (Гвинейский залив, побережье Камеруна/Нигерии)",
    "mapPrompt": "Покажите залив: Залив Биафра (Бони)",
    "geometryType": "point",
    "lat": 4,
    "lng": 8,
    "hitRadiusKm": 220,
    "bounds": null,
    "badgeColor": "sky",
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "К какому океаническому бассейну и региону относится: Залив Биафра (Бони)?",
      "backMainAnswer": "Залив Биафра (Бони) • Атлантический океан (Гвинейский залив, побережье Камеруна/Нигерии)",
      "backMetrics": [
        {
          "label": "Океанический бассейн",
          "value": "Атлантический океан"
        },
        {
          "label": "Местоположение",
          "value": "Гвинейский залив, побережье Камеруна/Нигерии"
        }
      ],
      "backNote": "Залив Залив Биафра (Бони): Гвинейский залив, побережье Камеруна/Нигерии (Атлантический океан)."
    },
    "isCoreLandmark": false
  },
  {
    "id": "m3_gulf_biscay_bay",
    "moduleId": "module3",
    "submoduleId": "m3_gulfs_atlantic",
    "category": "gulfs",
    "categoryRu": "Заливы",
    "difficulty": "Стандартный",
    "name": "Бискайский залив",
    "aliases": [],
    "region": "Европа, Франция, Испания",
    "locationDesc": "Атлантический океан (Европа, Франция, Испания)",
    "mapPrompt": "Покажите залив: Бискайский залив",
    "geometryType": "point",
    "lat": 45.5,
    "lng": -4,
    "hitRadiusKm": 220,
    "bounds": [
      43.2,
      -9,
      48,
      -1.2
    ],
    "badgeColor": "sky",
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "К какому океаническому бассейну и региону относится: Бискайский залив?",
      "backMainAnswer": "Бискайский залив • Атлантический океан (Европа, Франция, Испания)",
      "backMetrics": [
        {
          "label": "Океанический бассейн",
          "value": "Атлантический океан"
        },
        {
          "label": "Местоположение",
          "value": "Европа, Франция, Испания"
        }
      ],
      "backNote": "Залив Бискайский залив: Европа, Франция, Испания (Атлантический океан)."
    },
    "isCoreLandmark": true
  },
  {
    "id": "m3_gulf_bothnia_gulf",
    "moduleId": "module3",
    "submoduleId": "m3_gulfs_atlantic",
    "category": "gulfs",
    "categoryRu": "Заливы",
    "difficulty": "Стандартный",
    "name": "Ботнический залив",
    "aliases": [],
    "region": "Балтийское море, между Швецией и Финляндией",
    "locationDesc": "Атлантический океан (Балтийское море, между Швецией и Финляндией)",
    "mapPrompt": "Покажите залив: Ботнический залив",
    "geometryType": "point",
    "lat": 63,
    "lng": 20,
    "hitRadiusKm": 220,
    "bounds": [
      60.2,
      17.5,
      65.8,
      25
    ],
    "badgeColor": "sky",
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "К какому океаническому бассейну и региону относится: Ботнический залив?",
      "backMainAnswer": "Ботнический залив • Атлантический океан (Балтийское море, между Швецией и Финляндией)",
      "backMetrics": [
        {
          "label": "Океанический бассейн",
          "value": "Атлантический океан"
        },
        {
          "label": "Местоположение",
          "value": "Балтийское море, между Швецией и Финляндией"
        }
      ],
      "backNote": "Залив Ботнический залив: Балтийское море, между Швецией и Финляндией (Атлантический океан)."
    },
    "isCoreLandmark": false
  },
  {
    "id": "m3_gulf_bristol_channel",
    "moduleId": "module3",
    "submoduleId": "m3_gulfs_atlantic",
    "category": "gulfs",
    "categoryRu": "Заливы",
    "difficulty": "Стандартный",
    "name": "Бристольский залив",
    "aliases": [],
    "region": "Великобритания (Уэльс и Англия)",
    "locationDesc": "Атлантический океан (Великобритания (Уэльс и Англия))",
    "mapPrompt": "Покажите залив: Бристольский залив",
    "geometryType": "point",
    "lat": 51.3,
    "lng": -4,
    "hitRadiusKm": 220,
    "bounds": null,
    "badgeColor": "sky",
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "К какому океаническому бассейну и региону относится: Бристольский залив?",
      "backMainAnswer": "Бристольский залив • Атлантический океан (Великобритания (Уэльс и Англия))",
      "backMetrics": [
        {
          "label": "Океанический бассейн",
          "value": "Атлантический океан"
        },
        {
          "label": "Местоположение",
          "value": "Великобритания (Уэльс и Англия)"
        }
      ],
      "backNote": "Залив Бристольский залив: Великобритания (Уэльс и Англия) (Атлантический океан)."
    },
    "isCoreLandmark": false
  },
  {
    "id": "m3_gulf_valencia_gulf",
    "moduleId": "module3",
    "submoduleId": "m3_gulfs_atlantic",
    "category": "gulfs",
    "categoryRu": "Заливы",
    "difficulty": "Стандартный",
    "name": "Валенсийский залив",
    "aliases": [],
    "region": "Средиземное море, восток Испании",
    "locationDesc": "Атлантический океан (Средиземное море, восток Испании)",
    "mapPrompt": "Покажите залив: Валенсийский залив",
    "geometryType": "point",
    "lat": 39.5,
    "lng": -0.1,
    "hitRadiusKm": 220,
    "bounds": null,
    "badgeColor": "sky",
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "К какому океаническому бассейну и региону относится: Валенсийский залив?",
      "backMainAnswer": "Валенсийский залив • Атлантический океан (Средиземное море, восток Испании)",
      "backMetrics": [
        {
          "label": "Океанический бассейн",
          "value": "Атлантический океан"
        },
        {
          "label": "Местоположение",
          "value": "Средиземное море, восток Испании"
        }
      ],
      "backNote": "Залив Валенсийский залив: Средиземное море, восток Испании (Атлантический океан)."
    },
    "isCoreLandmark": false
  },
  {
    "id": "m3_gulf_venezuela_gulf",
    "moduleId": "module3",
    "submoduleId": "m3_gulfs_atlantic",
    "category": "gulfs",
    "categoryRu": "Заливы",
    "difficulty": "Стандартный",
    "name": "Венесуэльский залив (Маракайбо)",
    "aliases": [],
    "region": "Карибское море, вход в озеро Маракайбо",
    "locationDesc": "Атлантический океан (Карибское море, вход в озеро Маракайбо)",
    "mapPrompt": "Покажите залив: Венесуэльский залив (Маракайбо)",
    "geometryType": "point",
    "lat": 11.5,
    "lng": -71,
    "hitRadiusKm": 220,
    "bounds": null,
    "badgeColor": "sky",
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "К какому океаническому бассейну и региону относится: Венесуэльский залив (Маракайбо)?",
      "backMainAnswer": "Венесуэльский залив (Маракайбо) • Атлантический океан (Карибское море, вход в озеро Маракайбо)",
      "backMetrics": [
        {
          "label": "Океанический бассейн",
          "value": "Атлантический океан"
        },
        {
          "label": "Местоположение",
          "value": "Карибское море, вход в озеро Маракайбо"
        }
      ],
      "backNote": "Залив Венесуэльский залив (Маракайбо): Карибское море, вход в озеро Маракайбо (Атлантический океан)."
    },
    "isCoreLandmark": false
  },
  {
    "id": "m3_gulf_venice_gulf",
    "moduleId": "module3",
    "submoduleId": "m3_gulfs_atlantic",
    "category": "gulfs",
    "categoryRu": "Заливы",
    "difficulty": "Стандартный",
    "name": "Венецианский залив",
    "aliases": [],
    "region": "Адриатическое море, северная часть (Италия)",
    "locationDesc": "Атлантический океан (Адриатическое море, северная часть (Италия))",
    "mapPrompt": "Покажите залив: Венецианский залив",
    "geometryType": "point",
    "lat": 45.2,
    "lng": 13,
    "hitRadiusKm": 220,
    "bounds": null,
    "badgeColor": "sky",
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "К какому океаническому бассейну и региону относится: Венецианский залив?",
      "backMainAnswer": "Венецианский залив • Атлантический океан (Адриатическое море, северная часть (Италия))",
      "backMetrics": [
        {
          "label": "Океанический бассейн",
          "value": "Атлантический океан"
        },
        {
          "label": "Местоположение",
          "value": "Адриатическое море, северная часть (Италия)"
        }
      ],
      "backNote": "Залив Венецианский залив: Адриатическое море, северная часть (Италия) (Атлантический океан)."
    },
    "isCoreLandmark": false
  },
  {
    "id": "m3_gulf_gabes_gulf",
    "moduleId": "module3",
    "submoduleId": "m3_gulfs_atlantic",
    "category": "gulfs",
    "categoryRu": "Заливы",
    "difficulty": "Стандартный",
    "name": "Залив Габес (Малый Сирт)",
    "aliases": [
      "Малый Сирт"
    ],
    "region": "Средиземное море, побережье Туниса",
    "locationDesc": "Атлантический океан (Средиземное море, побережье Туниса)",
    "mapPrompt": "Покажите залив: Залив Габес (Малый Сирт)",
    "geometryType": "point",
    "lat": 34,
    "lng": 10.5,
    "hitRadiusKm": 220,
    "bounds": null,
    "badgeColor": "sky",
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "К какому океаническому бассейну и региону относится: Залив Габес (Малый Сирт)?",
      "backMainAnswer": "Залив Габес (Малый Сирт) • Атлантический океан (Средиземное море, побережье Туниса)",
      "backMetrics": [
        {
          "label": "Океанический бассейн",
          "value": "Атлантический океан"
        },
        {
          "label": "Местоположение",
          "value": "Средиземное море, побережье Туниса"
        }
      ],
      "backNote": "Залив Залив Габес (Малый Сирт): Средиземное море, побережье Туниса (Атлантический океан)."
    },
    "isCoreLandmark": false
  },
  {
    "id": "m3_gulf_guinea_gulf",
    "moduleId": "module3",
    "submoduleId": "m3_gulfs_atlantic",
    "category": "gulfs",
    "categoryRu": "Заливы",
    "difficulty": "Стандартный",
    "name": "Гвинейский залив",
    "aliases": [],
    "region": "Атлантический океан, экваториальная Западная Африка (пересечение экватора и 0° меридиана)",
    "locationDesc": "Атлантический океан (Атлантический океан, экваториальная Западная Африка (пересечение экватора и 0° меридиана))",
    "mapPrompt": "Покажите залив: Гвинейский залив",
    "geometryType": "point",
    "lat": 2,
    "lng": 2,
    "hitRadiusKm": 220,
    "bounds": [
      -4,
      -8,
      6.5,
      10
    ],
    "badgeColor": "sky",
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "К какому океаническому бассейну и региону относится: Гвинейский залив?",
      "backMainAnswer": "Гвинейский залив • Атлантический океан (Атлантический океан, экваториальная Западная Африка (пересечение экватора и 0° меридиана))",
      "backMetrics": [
        {
          "label": "Океанический бассейн",
          "value": "Атлантический океан"
        },
        {
          "label": "Местоположение",
          "value": "Атлантический океан, экваториальная Западная Африка (пересечение экватора и 0° меридиана)"
        }
      ],
      "backNote": "Залив Гвинейский залив: Атлантический океан, экваториальная Западная Африка (пересечение экватора и 0° меридиана) (Атлантический океан)."
    },
    "isCoreLandmark": true
  },
  {
    "id": "m3_gulf_genoa_gulf",
    "moduleId": "module3",
    "submoduleId": "m3_gulfs_atlantic",
    "category": "gulfs",
    "categoryRu": "Заливы",
    "difficulty": "Стандартный",
    "name": "Генуэзский залив",
    "aliases": [],
    "region": "Лигурийское море, Италия",
    "locationDesc": "Атлантический океан (Лигурийское море, Италия)",
    "mapPrompt": "Покажите залив: Генуэзский залив",
    "geometryType": "point",
    "lat": 44.2,
    "lng": 8.9,
    "hitRadiusKm": 220,
    "bounds": null,
    "badgeColor": "sky",
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "К какому океаническому бассейну и региону относится: Генуэзский залив?",
      "backMainAnswer": "Генуэзский залив • Атлантический океан (Лигурийское море, Италия)",
      "backMetrics": [
        {
          "label": "Океанический бассейн",
          "value": "Атлантический океан"
        },
        {
          "label": "Местоположение",
          "value": "Лигурийское море, Италия"
        }
      ],
      "backNote": "Залив Генуэзский залив: Лигурийское море, Италия (Атлантический океан)."
    },
    "isCoreLandmark": false
  },
  {
    "id": "m3_gulf_cardigan_bay",
    "moduleId": "module3",
    "submoduleId": "m3_gulfs_atlantic",
    "category": "gulfs",
    "categoryRu": "Заливы",
    "difficulty": "Стандартный",
    "name": "Залив Кардиган",
    "aliases": [],
    "region": "Пролив Святого Георга, запад Уэльса",
    "locationDesc": "Атлантический океан (Пролив Святого Георга, запад Уэльса)",
    "mapPrompt": "Покажите залив: Залив Кардиган",
    "geometryType": "point",
    "lat": 52.5,
    "lng": -4.5,
    "hitRadiusKm": 220,
    "bounds": null,
    "badgeColor": "sky",
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "К какому океаническому бассейну и региону относится: Залив Кардиган?",
      "backMainAnswer": "Залив Кардиган • Атлантический океан (Пролив Святого Георга, запад Уэльса)",
      "backMetrics": [
        {
          "label": "Океанический бассейн",
          "value": "Атлантический океан"
        },
        {
          "label": "Местоположение",
          "value": "Пролив Святого Георга, запад Уэльса"
        }
      ],
      "backNote": "Залив Залив Кардиган: Пролив Святого Георга, запад Уэльса (Атлантический океан)."
    },
    "isCoreLandmark": false
  },
  {
    "id": "m3_gulf_campeche_bay",
    "moduleId": "module3",
    "submoduleId": "m3_gulfs_atlantic",
    "category": "gulfs",
    "categoryRu": "Заливы",
    "difficulty": "Стандартный",
    "name": "Залив Кампече",
    "aliases": [],
    "region": "Мексиканский залив, южная часть (Мексика)",
    "locationDesc": "Атлантический океан (Мексиканский залив, южная часть (Мексика))",
    "mapPrompt": "Покажите залив: Залив Кампече",
    "geometryType": "point",
    "lat": 19.5,
    "lng": -93.5,
    "hitRadiusKm": 220,
    "bounds": null,
    "badgeColor": "sky",
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "К какому океаническому бассейну и региону относится: Залив Кампече?",
      "backMainAnswer": "Залив Кампече • Атлантический океан (Мексиканский залив, южная часть (Мексика))",
      "backMetrics": [
        {
          "label": "Океанический бассейн",
          "value": "Атлантический океан"
        },
        {
          "label": "Местоположение",
          "value": "Мексиканский залив, южная часть (Мексика)"
        }
      ],
      "backNote": "Залив Залив Кампече: Мексиканский залив, южная часть (Мексика) (Атлантический океан)."
    },
    "isCoreLandmark": false
  },
  {
    "id": "m3_gulf_la_plata_estuary",
    "moduleId": "module3",
    "submoduleId": "m3_gulfs_atlantic",
    "category": "gulfs",
    "categoryRu": "Заливы",
    "difficulty": "Стандартный",
    "name": "Ла-Плата (эстуарий)",
    "aliases": [],
    "region": "Южная Америка, эстуарий рек Парана и Уругвай",
    "locationDesc": "Атлантический океан (Южная Америка, эстуарий рек Парана и Уругвай)",
    "mapPrompt": "Покажите залив: Ла-Плата (эстуарий)",
    "geometryType": "point",
    "lat": -35.2,
    "lng": -56.5,
    "hitRadiusKm": 220,
    "bounds": null,
    "badgeColor": "sky",
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "К какому океаническому бассейну и региону относится: Ла-Плата (эстуарий)?",
      "backMainAnswer": "Ла-Плата (эстуарий) • Атлантический океан (Южная Америка, эстуарий рек Парана и Уругвай)",
      "backMetrics": [
        {
          "label": "Океанический бассейн",
          "value": "Атлантический океан"
        },
        {
          "label": "Местоположение",
          "value": "Южная Америка, эстуарий рек Парана и Уругвай"
        }
      ],
      "backNote": "Залив Ла-Плата (эстуарий): Южная Америка, эстуарий рек Парана и Уругвай (Атлантический океан)."
    },
    "isCoreLandmark": false
  },
  {
    "id": "m3_gulf_lyon_gulf",
    "moduleId": "module3",
    "submoduleId": "m3_gulfs_atlantic",
    "category": "gulfs",
    "categoryRu": "Заливы",
    "difficulty": "Стандартный",
    "name": "Лионский залив",
    "aliases": [],
    "region": "Средиземное море, юг Франции",
    "locationDesc": "Атлантический океан (Средиземное море, юг Франции)",
    "mapPrompt": "Покажите залив: Лионский залив",
    "geometryType": "point",
    "lat": 43,
    "lng": 4,
    "hitRadiusKm": 220,
    "bounds": null,
    "badgeColor": "sky",
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "К какому океаническому бассейну и региону относится: Лионский залив?",
      "backMainAnswer": "Лионский залив • Атлантический океан (Средиземное море, юг Франции)",
      "backMetrics": [
        {
          "label": "Океанический бассейн",
          "value": "Атлантический океан"
        },
        {
          "label": "Местоположение",
          "value": "Средиземное море, юг Франции"
        }
      ],
      "backNote": "Залив Лионский залив: Средиземное море, юг Франции (Атлантический океан)."
    },
    "isCoreLandmark": false
  },
  {
    "id": "m3_gulf_mexico_gulf",
    "moduleId": "module3",
    "submoduleId": "m3_gulfs_atlantic",
    "category": "gulfs",
    "categoryRu": "Заливы",
    "difficulty": "Стандартный",
    "name": "Мексиканский залив",
    "aliases": [],
    "region": "Северная Америка, полузамкнутое море Атлантики",
    "locationDesc": "Атлантический океан (Северная Америка, полузамкнутое море Атлантики)",
    "mapPrompt": "Покажите залив: Мексиканский залив",
    "geometryType": "point",
    "lat": 25,
    "lng": -90,
    "hitRadiusKm": 220,
    "bounds": [
      18.5,
      -97.8,
      30.5,
      -81
    ],
    "badgeColor": "sky",
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "К какому океаническому бассейну и региону относится: Мексиканский залив?",
      "backMainAnswer": "Мексиканский залив • Атлантический океан (Северная Америка, полузамкнутое море Атлантики)",
      "backMetrics": [
        {
          "label": "Океанический бассейн",
          "value": "Атлантический океан"
        },
        {
          "label": "Местоположение",
          "value": "Северная Америка, полузамкнутое море Атлантики"
        }
      ],
      "backNote": "Залив Мексиканский залив: Северная Америка, полузамкнутое море Атлантики (Атлантический океан)."
    },
    "isCoreLandmark": true
  },
  {
    "id": "m3_gulf_maine_gulf",
    "moduleId": "module3",
    "submoduleId": "m3_gulfs_atlantic",
    "category": "gulfs",
    "categoryRu": "Заливы",
    "difficulty": "Стандартный",
    "name": "Залив Мэн",
    "aliases": [],
    "region": "США и Канада (включает залив Фанди)",
    "locationDesc": "Атлантический океан (США и Канада (включает залив Фанди))",
    "mapPrompt": "Покажите залив: Залив Мэн",
    "geometryType": "point",
    "lat": 43,
    "lng": -68,
    "hitRadiusKm": 220,
    "bounds": null,
    "badgeColor": "sky",
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "К какому океаническому бассейну и региону относится: Залив Мэн?",
      "backMainAnswer": "Залив Мэн • Атлантический океан (США и Канада (включает залив Фанди))",
      "backMetrics": [
        {
          "label": "Океанический бассейн",
          "value": "Атлантический океан"
        },
        {
          "label": "Местоположение",
          "value": "США и Канада (включает залив Фанди)"
        }
      ],
      "backNote": "Залив Залив Мэн: США и Канада (включает залив Фанди) (Атлантический океан)."
    },
    "isCoreLandmark": false
  },
  {
    "id": "m3_gulf_riga_gulf",
    "moduleId": "module3",
    "submoduleId": "m3_gulfs_atlantic",
    "category": "gulfs",
    "categoryRu": "Заливы",
    "difficulty": "Стандартный",
    "name": "Рижский залив",
    "aliases": [],
    "region": "Балтийское море, Латвия, Эстония",
    "locationDesc": "Атлантический океан (Балтийское море, Латвия, Эстония)",
    "mapPrompt": "Покажите залив: Рижский залив",
    "geometryType": "point",
    "lat": 57.6,
    "lng": 23.5,
    "hitRadiusKm": 220,
    "bounds": null,
    "badgeColor": "sky",
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "К какому океаническому бассейну и региону относится: Рижский залив?",
      "backMainAnswer": "Рижский залив • Атлантический океан (Балтийское море, Латвия, Эстония)",
      "backMetrics": [
        {
          "label": "Океанический бассейн",
          "value": "Атлантический океан"
        },
        {
          "label": "Местоположение",
          "value": "Балтийское море, Латвия, Эстония"
        }
      ],
      "backNote": "Залив Рижский залив: Балтийское море, Латвия, Эстония (Атлантический океан)."
    },
    "isCoreLandmark": false
  },
  {
    "id": "m3_gulf_st_lawrence_gulf",
    "moduleId": "module3",
    "submoduleId": "m3_gulfs_atlantic",
    "category": "gulfs",
    "categoryRu": "Заливы",
    "difficulty": "Стандартный",
    "name": "Залив Святого Лаврентия",
    "aliases": [],
    "region": "Канада, устье реки Святого Лаврентия",
    "locationDesc": "Атлантический океан (Канада, устье реки Святого Лаврентия)",
    "mapPrompt": "Покажите залив: Залив Святого Лаврентия",
    "geometryType": "point",
    "lat": 48,
    "lng": -62,
    "hitRadiusKm": 220,
    "bounds": [
      45.5,
      -66.5,
      51.5,
      -57
    ],
    "badgeColor": "sky",
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "К какому океаническому бассейну и региону относится: Залив Святого Лаврентия?",
      "backMainAnswer": "Залив Святого Лаврентия • Атлантический океан (Канада, устье реки Святого Лаврентия)",
      "backMetrics": [
        {
          "label": "Океанический бассейн",
          "value": "Атлантический океан"
        },
        {
          "label": "Местоположение",
          "value": "Канада, устье реки Святого Лаврентия"
        }
      ],
      "backNote": "Залив Залив Святого Лаврентия: Канада, устье реки Святого Лаврентия (Атлантический океан)."
    },
    "isCoreLandmark": false
  },
  {
    "id": "m3_gulf_st_malo_gulf",
    "moduleId": "module3",
    "submoduleId": "m3_gulfs_atlantic",
    "category": "gulfs",
    "categoryRu": "Заливы",
    "difficulty": "Стандартный",
    "name": "Залив Сен-Мало",
    "aliases": [],
    "region": "Пролив Ла-Манш, побережье Бретани и Нормандии",
    "locationDesc": "Атлантический океан (Пролив Ла-Манш, побережье Бретани и Нормандии)",
    "mapPrompt": "Покажите залив: Залив Сен-Мало",
    "geometryType": "point",
    "lat": 48.8,
    "lng": -2,
    "hitRadiusKm": 220,
    "bounds": null,
    "badgeColor": "sky",
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "К какому океаническому бассейну и региону относится: Залив Сен-Мало?",
      "backMainAnswer": "Залив Сен-Мало • Атлантический океан (Пролив Ла-Манш, побережье Бретани и Нормандии)",
      "backMetrics": [
        {
          "label": "Океанический бассейн",
          "value": "Атлантический океан"
        },
        {
          "label": "Местоположение",
          "value": "Пролив Ла-Манш, побережье Бретани и Нормандии"
        }
      ],
      "backNote": "Залив Залив Сен-Мало: Пролив Ла-Манш, побережье Бретани и Нормандии (Атлантический океан)."
    },
    "isCoreLandmark": false
  },
  {
    "id": "m3_gulf_sivash",
    "moduleId": "module3",
    "submoduleId": "m3_gulfs_atlantic",
    "category": "gulfs",
    "categoryRu": "Заливы",
    "difficulty": "Стандартный",
    "name": "Залив Сиваш (Гнилое море)",
    "aliases": [
      "Гнилое море"
    ],
    "region": "Азовское море, запад Крыма",
    "locationDesc": "Атлантический океан (Азовское море, запад Крыма)",
    "mapPrompt": "Покажите залив: Залив Сиваш (Гнилое море)",
    "geometryType": "point",
    "lat": 46.1,
    "lng": 34.5,
    "hitRadiusKm": 220,
    "bounds": null,
    "badgeColor": "sky",
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "К какому океаническому бассейну и региону относится: Залив Сиваш (Гнилое море)?",
      "backMainAnswer": "Залив Сиваш (Гнилое море) • Атлантический океан (Азовское море, запад Крыма)",
      "backMetrics": [
        {
          "label": "Океанический бассейн",
          "value": "Атлантический океан"
        },
        {
          "label": "Местоположение",
          "value": "Азовское море, запад Крыма"
        }
      ],
      "backNote": "Залив Залив Сиваш (Гнилое море): Азовское море, запад Крыма (Атлантический океан)."
    },
    "isCoreLandmark": false
  },
  {
    "id": "m3_gulf_sidra_gulf",
    "moduleId": "module3",
    "submoduleId": "m3_gulfs_atlantic",
    "category": "gulfs",
    "categoryRu": "Заливы",
    "difficulty": "Стандартный",
    "name": "Залив Сидра (Большой Сирт)",
    "aliases": [
      "Большой Сирт"
    ],
    "region": "Средиземное море, побережье Ливии",
    "locationDesc": "Атлантический океан (Средиземное море, побережье Ливии)",
    "mapPrompt": "Покажите залив: Залив Сидра (Большой Сирт)",
    "geometryType": "point",
    "lat": 31.5,
    "lng": 18,
    "hitRadiusKm": 220,
    "bounds": null,
    "badgeColor": "sky",
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "К какому океаническому бассейну и региону относится: Залив Сидра (Большой Сирт)?",
      "backMainAnswer": "Залив Сидра (Большой Сирт) • Атлантический океан (Средиземное море, побережье Ливии)",
      "backMetrics": [
        {
          "label": "Океанический бассейн",
          "value": "Атлантический океан"
        },
        {
          "label": "Местоположение",
          "value": "Средиземное море, побережье Ливии"
        }
      ],
      "backNote": "Залив Залив Сидра (Большой Сирт): Средиземное море, побережье Ливии (Атлантический океан)."
    },
    "isCoreLandmark": false
  },
  {
    "id": "m3_gulf_sognefjord",
    "moduleId": "module3",
    "submoduleId": "m3_gulfs_atlantic",
    "category": "gulfs",
    "categoryRu": "Заливы",
    "difficulty": "Стандартный",
    "name": "Согне-Фьорд",
    "aliases": [],
    "region": "Северное море, побережье Норвегии (крупнейший фьорд Европы, глубина до 1308 м)",
    "locationDesc": "Атлантический океан (Северное море, побережье Норвегии (крупнейший фьорд Европы, глубина до 1308 м))",
    "mapPrompt": "Покажите залив: Согне-Фьорд",
    "geometryType": "point",
    "lat": 61.1,
    "lng": 6,
    "hitRadiusKm": 220,
    "bounds": null,
    "badgeColor": "sky",
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "К какому океаническому бассейну и региону относится: Согне-Фьорд?",
      "backMainAnswer": "Согне-Фьорд • Атлантический океан (Северное море, побережье Норвегии (крупнейший фьорд Европы, глубина до 1308 м))",
      "backMetrics": [
        {
          "label": "Океанический бассейн",
          "value": "Атлантический океан"
        },
        {
          "label": "Местоположение",
          "value": "Северное море, побережье Норвегии (крупнейший фьорд Европы, глубина до 1308 м)"
        }
      ],
      "backNote": "Залив Согне-Фьорд: Северное море, побережье Норвегии (крупнейший фьорд Европы, глубина до 1308 м) (Атлантический океан)."
    },
    "isCoreLandmark": false
  },
  {
    "id": "m3_gulf_taganrog_bay",
    "moduleId": "module3",
    "submoduleId": "m3_gulfs_atlantic",
    "category": "gulfs",
    "categoryRu": "Заливы",
    "difficulty": "Стандартный",
    "name": "Таганрогский залив",
    "aliases": [],
    "region": "Азовское море, северо-восточная часть, устье Дона",
    "locationDesc": "Атлантический океан (Азовское море, северо-восточная часть, устье Дона)",
    "mapPrompt": "Покажите залив: Таганрогский залив",
    "geometryType": "point",
    "lat": 46.9,
    "lng": 38,
    "hitRadiusKm": 220,
    "bounds": null,
    "badgeColor": "sky",
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "К какому океаническому бассейну и региону относится: Таганрогский залив?",
      "backMainAnswer": "Таганрогский залив • Атлантический океан (Азовское море, северо-восточная часть, устье Дона)",
      "backMetrics": [
        {
          "label": "Океанический бассейн",
          "value": "Атлантический океан"
        },
        {
          "label": "Местоположение",
          "value": "Азовское море, северо-восточная часть, устье Дона"
        }
      ],
      "backNote": "Залив Таганрогский залив: Азовское море, северо-восточная часть, устье Дона (Атлантический океан)."
    },
    "isCoreLandmark": false
  },
  {
    "id": "m3_gulf_taranto_gulf",
    "moduleId": "module3",
    "submoduleId": "m3_gulfs_atlantic",
    "category": "gulfs",
    "categoryRu": "Заливы",
    "difficulty": "Стандартный",
    "name": "Залив Таранто",
    "aliases": [],
    "region": "Ионическое море, 'подъём итальянского сапога'",
    "locationDesc": "Атлантический океан (Ионическое море, 'подъём итальянского сапога')",
    "mapPrompt": "Покажите залив: Залив Таранто",
    "geometryType": "point",
    "lat": 40,
    "lng": 17.2,
    "hitRadiusKm": 220,
    "bounds": null,
    "badgeColor": "sky",
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "К какому океаническому бассейну и региону относится: Залив Таранто?",
      "backMainAnswer": "Залив Таранто • Атлантический океан (Ионическое море, 'подъём итальянского сапога')",
      "backMetrics": [
        {
          "label": "Океанический бассейн",
          "value": "Атлантический океан"
        },
        {
          "label": "Местоположение",
          "value": "Ионическое море, 'подъём итальянского сапога'"
        }
      ],
      "backNote": "Залив Залив Таранто: Ионическое море, 'подъём итальянского сапога' (Атлантический океан)."
    },
    "isCoreLandmark": false
  },
  {
    "id": "m3_gulf_fundy_bay",
    "moduleId": "module3",
    "submoduleId": "m3_gulfs_atlantic",
    "category": "gulfs",
    "categoryRu": "Заливы",
    "difficulty": "Стандартный",
    "name": "Залив Фанди",
    "aliases": [],
    "region": "Северная Америка, Канада (высочайшие приливы в мире — до 18 м)",
    "locationDesc": "Атлантический океан (Северная Америка, Канада (высочайшие приливы в мире — до 18 м))",
    "mapPrompt": "Покажите залив: Залив Фанди",
    "geometryType": "point",
    "lat": 45,
    "lng": -65.5,
    "hitRadiusKm": 220,
    "bounds": null,
    "badgeColor": "sky",
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "К какому океаническому бассейну и региону относится: Залив Фанди?",
      "backMainAnswer": "Залив Фанди • Атлантический океан (Северная Америка, Канада (высочайшие приливы в мире — до 18 м))",
      "backMetrics": [
        {
          "label": "Океанический бассейн",
          "value": "Атлантический океан"
        },
        {
          "label": "Местоположение",
          "value": "Северная Америка, Канада (высочайшие приливы в мире — до 18 м)"
        }
      ],
      "backNote": "Залив Залив Фанди: Северная Америка, Канада (высочайшие приливы в мире — до 18 м) (Атлантический океан)."
    },
    "isCoreLandmark": false
  },
  {
    "id": "m3_gulf_firth_of_forth",
    "moduleId": "module3",
    "submoduleId": "m3_gulfs_atlantic",
    "category": "gulfs",
    "categoryRu": "Заливы",
    "difficulty": "Стандартный",
    "name": "Фёрт-оф-Форт",
    "aliases": [],
    "region": "Северное море, восток Шотландии (Эдинбург)",
    "locationDesc": "Атлантический океан (Северное море, восток Шотландии (Эдинбург))",
    "mapPrompt": "Покажите залив: Фёрт-оф-Форт",
    "geometryType": "point",
    "lat": 56.1,
    "lng": -3,
    "hitRadiusKm": 220,
    "bounds": null,
    "badgeColor": "sky",
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "К какому океаническому бассейну и региону относится: Фёрт-оф-Форт?",
      "backMainAnswer": "Фёрт-оф-Форт • Атлантический океан (Северное море, восток Шотландии (Эдинбург))",
      "backMetrics": [
        {
          "label": "Океанический бассейн",
          "value": "Атлантический океан"
        },
        {
          "label": "Местоположение",
          "value": "Северное море, восток Шотландии (Эдинбург)"
        }
      ],
      "backNote": "Залив Фёрт-оф-Форт: Северное море, восток Шотландии (Эдинбург) (Атлантический океан)."
    },
    "isCoreLandmark": false
  },
  {
    "id": "m3_gulf_finland_gulf",
    "moduleId": "module3",
    "submoduleId": "m3_gulfs_atlantic",
    "category": "gulfs",
    "categoryRu": "Заливы",
    "difficulty": "Стандартный",
    "name": "Финский залив",
    "aliases": [],
    "region": "Балтийское море (Россия, Финляндия, Эстония)",
    "locationDesc": "Атлантический океан (Балтийское море (Россия, Финляндия, Эстония))",
    "mapPrompt": "Покажите залив: Финский залив",
    "geometryType": "point",
    "lat": 60,
    "lng": 26,
    "hitRadiusKm": 220,
    "bounds": null,
    "badgeColor": "sky",
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "К какому океаническому бассейну и региону относится: Финский залив?",
      "backMainAnswer": "Финский залив • Атлантический океан (Балтийское море (Россия, Финляндия, Эстония))",
      "backMetrics": [
        {
          "label": "Океанический бассейн",
          "value": "Атлантический океан"
        },
        {
          "label": "Местоположение",
          "value": "Балтийское море (Россия, Финляндия, Эстония)"
        }
      ],
      "backNote": "Залив Финский залив: Балтийское море (Россия, Финляндия, Эстония) (Атлантический океан)."
    },
    "isCoreLandmark": true
  },
  {
    "id": "m3_gulf_chesapeake_bay",
    "moduleId": "module3",
    "submoduleId": "m3_gulfs_atlantic",
    "category": "gulfs",
    "categoryRu": "Заливы",
    "difficulty": "Стандартный",
    "name": "Чесапикский залив",
    "aliases": [],
    "region": "Восточное побережье США (г. Балтимор, эстуарий р. Саскуэханна)",
    "locationDesc": "Атлантический океан (Восточное побережье США (г. Балтимор, эстуарий р. Саскуэханна))",
    "mapPrompt": "Покажите залив: Чесапикский залив",
    "geometryType": "point",
    "lat": 37.5,
    "lng": -76,
    "hitRadiusKm": 220,
    "bounds": null,
    "badgeColor": "sky",
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "К какому океаническому бассейну и региону относится: Чесапикский залив?",
      "backMainAnswer": "Чесапикский залив • Атлантический океан (Восточное побережье США (г. Балтимор, эстуарий р. Саскуэханна))",
      "backMetrics": [
        {
          "label": "Океанический бассейн",
          "value": "Атлантический океан"
        },
        {
          "label": "Местоположение",
          "value": "Восточное побережье США (г. Балтимор, эстуарий р. Саскуэханна)"
        }
      ],
      "backNote": "Залив Чесапикский залив: Восточное побережье США (г. Балтимор, эстуарий р. Саскуэханна) (Атлантический океан)."
    },
    "isCoreLandmark": false
  },
  {
    "id": "m3_gulf_aden_gulf",
    "moduleId": "module3",
    "submoduleId": "m3_gulfs_indian",
    "category": "gulfs",
    "categoryRu": "Заливы",
    "difficulty": "Стандартный",
    "name": "Аденский залив",
    "aliases": [],
    "region": "Аравийское море (между Аравией и Африканским Рогом)",
    "locationDesc": "Индийский океан (Аравийское море (между Аравией и Африканским Рогом))",
    "mapPrompt": "Покажите залив: Аденский залив",
    "geometryType": "point",
    "lat": 12.5,
    "lng": 48,
    "hitRadiusKm": 220,
    "bounds": [
      10.5,
      43,
      15,
      52
    ],
    "badgeColor": "sky",
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "К какому океаническому бассейну и региону относится: Аденский залив?",
      "backMainAnswer": "Аденский залив • Индийский океан (Аравийское море (между Аравией и Африканским Рогом))",
      "backMetrics": [
        {
          "label": "Океанический бассейн",
          "value": "Индийский океан"
        },
        {
          "label": "Местоположение",
          "value": "Аравийское море (между Аравией и Африканским Рогом)"
        }
      ],
      "backNote": "Залив Аденский залив: Аравийское море (между Аравией и Африканским Рогом) (Индийский океан)."
    },
    "isCoreLandmark": true
  },
  {
    "id": "m3_gulf_aqaba_gulf",
    "moduleId": "module3",
    "submoduleId": "m3_gulfs_indian",
    "category": "gulfs",
    "categoryRu": "Заливы",
    "difficulty": "Стандартный",
    "name": "Залив Акаба",
    "aliases": [],
    "region": "Красное море, восточный рукав Синая (Иордания, Израиль, Египет)",
    "locationDesc": "Индийский океан (Красное море, восточный рукав Синая (Иордания, Израиль, Египет))",
    "mapPrompt": "Покажите залив: Залив Акаба",
    "geometryType": "point",
    "lat": 28.8,
    "lng": 34.7,
    "hitRadiusKm": 220,
    "bounds": null,
    "badgeColor": "sky",
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "К какому океаническому бассейну и региону относится: Залив Акаба?",
      "backMainAnswer": "Залив Акаба • Индийский океан (Красное море, восточный рукав Синая (Иордания, Израиль, Египет))",
      "backMetrics": [
        {
          "label": "Океанический бассейн",
          "value": "Индийский океан"
        },
        {
          "label": "Местоположение",
          "value": "Красное море, восточный рукав Синая (Иордания, Израиль, Египет)"
        }
      ],
      "backNote": "Залив Залив Акаба: Красное море, восточный рукав Синая (Иордания, Израиль, Египет) (Индийский океан)."
    },
    "isCoreLandmark": false
  },
  {
    "id": "m3_gulf_bengal_bay",
    "moduleId": "module3",
    "submoduleId": "m3_gulfs_indian",
    "category": "gulfs",
    "categoryRu": "Заливы",
    "difficulty": "Стандартный",
    "name": "Бенгальский залив",
    "aliases": [],
    "region": "Индийский океан, на восток от п-ова Индостан (крупнейший залив мира)",
    "locationDesc": "Индийский океан (Индийский океан, на восток от п-ова Индостан (крупнейший залив мира))",
    "mapPrompt": "Покажите залив: Бенгальский залив",
    "geometryType": "point",
    "lat": 15,
    "lng": 88,
    "hitRadiusKm": 220,
    "bounds": [
      6,
      80,
      22.5,
      96
    ],
    "badgeColor": "sky",
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "К какому океаническому бассейну и региону относится: Бенгальский залив?",
      "backMainAnswer": "Бенгальский залив • Индийский океан (Индийский океан, на восток от п-ова Индостан (крупнейший залив мира))",
      "backMetrics": [
        {
          "label": "Океанический бассейн",
          "value": "Индийский океан"
        },
        {
          "label": "Местоположение",
          "value": "Индийский океан, на восток от п-ова Индостан (крупнейший залив мира)"
        }
      ],
      "backNote": "Залив Бенгальский залив: Индийский океан, на восток от п-ова Индостан (крупнейший залив мира) (Индийский океан)."
    },
    "isCoreLandmark": true
  },
  {
    "id": "m3_gulf_great_australian_bight",
    "moduleId": "module3",
    "submoduleId": "m3_gulfs_indian",
    "category": "gulfs",
    "categoryRu": "Заливы",
    "difficulty": "Стандартный",
    "name": "Большой Австралийский залив",
    "aliases": [],
    "region": "Юг Австралии, открытый шельфовый залив",
    "locationDesc": "Индийский океан (Юг Австралии, открытый шельфовый залив)",
    "mapPrompt": "Покажите залив: Большой Австралийский залив",
    "geometryType": "point",
    "lat": -34,
    "lng": 130,
    "hitRadiusKm": 220,
    "bounds": [
      -36.5,
      118,
      -31.5,
      138
    ],
    "badgeColor": "sky",
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "К какому океаническому бассейну и региону относится: Большой Австралийский залив?",
      "backMainAnswer": "Большой Австралийский залив • Индийский океан (Юг Австралии, открытый шельфовый залив)",
      "backMetrics": [
        {
          "label": "Океанический бассейн",
          "value": "Индийский океан"
        },
        {
          "label": "Местоположение",
          "value": "Юг Австралии, открытый шельфовый залив"
        }
      ],
      "backNote": "Залив Большой Австралийский залив: Юг Австралии, открытый шельфовый залив (Индийский океан)."
    },
    "isCoreLandmark": true
  },
  {
    "id": "m3_gulf_geographe_bay",
    "moduleId": "module3",
    "submoduleId": "m3_gulfs_indian",
    "category": "gulfs",
    "categoryRu": "Заливы",
    "difficulty": "Стандартный",
    "name": "Залив Географа",
    "aliases": [],
    "region": "Юго-запад Австралии",
    "locationDesc": "Индийский океан (Юго-запад Австралии)",
    "mapPrompt": "Покажите залив: Залив Географа",
    "geometryType": "point",
    "lat": -33.5,
    "lng": 115.3,
    "hitRadiusKm": 220,
    "bounds": null,
    "badgeColor": "sky",
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "К какому океаническому бассейну и региону относится: Залив Географа?",
      "backMainAnswer": "Залив Географа • Индийский океан (Юго-запад Австралии)",
      "backMetrics": [
        {
          "label": "Океанический бассейн",
          "value": "Индийский океан"
        },
        {
          "label": "Местоположение",
          "value": "Юго-запад Австралии"
        }
      ],
      "backNote": "Залив Залив Географа: Юго-запад Австралии (Индийский океан)."
    },
    "isCoreLandmark": false
  },
  {
    "id": "m3_gulf_joseph_bonaparte_gulf",
    "moduleId": "module3",
    "submoduleId": "m3_gulfs_indian",
    "category": "gulfs",
    "categoryRu": "Заливы",
    "difficulty": "Стандартный",
    "name": "Залив Жозеф-Бонапарт",
    "aliases": [],
    "region": "Тиморское море, север Австралии",
    "locationDesc": "Индийский океан (Тиморское море, север Австралии)",
    "mapPrompt": "Покажите залив: Залив Жозеф-Бонапарт",
    "geometryType": "point",
    "lat": -14.5,
    "lng": 128.5,
    "hitRadiusKm": 220,
    "bounds": null,
    "badgeColor": "sky",
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "К какому океаническому бассейну и региону относится: Залив Жозеф-Бонапарт?",
      "backMainAnswer": "Залив Жозеф-Бонапарт • Индийский океан (Тиморское море, север Австралии)",
      "backMetrics": [
        {
          "label": "Океанический бассейн",
          "value": "Индийский океан"
        },
        {
          "label": "Местоположение",
          "value": "Тиморское море, север Австралии"
        }
      ],
      "backNote": "Залив Залив Жозеф-Бонапарт: Тиморское море, север Австралии (Индийский океан)."
    },
    "isCoreLandmark": false
  },
  {
    "id": "m3_gulf_carpentaria_gulf",
    "moduleId": "module3",
    "submoduleId": "m3_gulfs_indian",
    "category": "gulfs",
    "categoryRu": "Заливы",
    "difficulty": "Стандартный",
    "name": "Залив Карпентария",
    "aliases": [],
    "region": "Арафурское море, между п-овом Кейп-Йорк и Арнем-Лендом",
    "locationDesc": "Индийский океан (Арафурское море, между п-овом Кейп-Йорк и Арнем-Лендом)",
    "mapPrompt": "Покажите залив: Залив Карпентария",
    "geometryType": "point",
    "lat": -14,
    "lng": 139,
    "hitRadiusKm": 220,
    "bounds": [
      -17.6,
      135.5,
      -10.5,
      142
    ],
    "badgeColor": "sky",
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "К какому океаническому бассейну и региону относится: Залив Карпентария?",
      "backMainAnswer": "Залив Карпентария • Индийский океан (Арафурское море, между п-овом Кейп-Йорк и Арнем-Лендом)",
      "backMetrics": [
        {
          "label": "Океанический бассейн",
          "value": "Индийский океан"
        },
        {
          "label": "Местоположение",
          "value": "Арафурское море, между п-овом Кейп-Йорк и Арнем-Лендом"
        }
      ],
      "backNote": "Залив Залив Карпентария: Арафурское море, между п-овом Кейп-Йорк и Арнем-Лендом (Индийский океан)."
    },
    "isCoreLandmark": false
  },
  {
    "id": "m3_gulf_oman_gulf",
    "moduleId": "module3",
    "submoduleId": "m3_gulfs_indian",
    "category": "gulfs",
    "categoryRu": "Заливы",
    "difficulty": "Стандартный",
    "name": "Оманский залив",
    "aliases": [],
    "region": "Аравийское море, вход в Ормузский пролив",
    "locationDesc": "Индийский океан (Аравийское море, вход в Ормузский пролив)",
    "mapPrompt": "Покажите залив: Оманский залив",
    "geometryType": "point",
    "lat": 24.5,
    "lng": 58.5,
    "hitRadiusKm": 220,
    "bounds": null,
    "badgeColor": "sky",
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "К какому океаническому бассейну и региону относится: Оманский залив?",
      "backMainAnswer": "Оманский залив • Индийский океан (Аравийское море, вход в Ормузский пролив)",
      "backMetrics": [
        {
          "label": "Океанический бассейн",
          "value": "Индийский океан"
        },
        {
          "label": "Местоположение",
          "value": "Аравийское море, вход в Ормузский пролив"
        }
      ],
      "backNote": "Залив Оманский залив: Аравийское море, вход в Ормузский пролив (Индийский океан)."
    },
    "isCoreLandmark": false
  },
  {
    "id": "m3_gulf_persian_gulf",
    "moduleId": "module3",
    "submoduleId": "m3_gulfs_indian",
    "category": "gulfs",
    "categoryRu": "Заливы",
    "difficulty": "Стандартный",
    "name": "Персидский залив",
    "aliases": [],
    "region": "На северо-восток от Аравийского полуострова",
    "locationDesc": "Индийский океан (На северо-восток от Аравийского полуострова)",
    "mapPrompt": "Покажите залив: Персидский залив",
    "geometryType": "point",
    "lat": 27,
    "lng": 51,
    "hitRadiusKm": 220,
    "bounds": [
      24,
      48,
      30.2,
      56.5
    ],
    "badgeColor": "sky",
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "К какому океаническому бассейну и региону относится: Персидский залив?",
      "backMainAnswer": "Персидский залив • Индийский океан (На северо-восток от Аравийского полуострова)",
      "backMetrics": [
        {
          "label": "Океанический бассейн",
          "value": "Индийский океан"
        },
        {
          "label": "Местоположение",
          "value": "На северо-восток от Аравийского полуострова"
        }
      ],
      "backNote": "Залив Персидский залив: На северо-восток от Аравийского полуострова (Индийский океан)."
    },
    "isCoreLandmark": true
  },
  {
    "id": "m3_gulf_spencer_gulf",
    "moduleId": "module3",
    "submoduleId": "m3_gulfs_indian",
    "category": "gulfs",
    "categoryRu": "Заливы",
    "difficulty": "Стандартный",
    "name": "Залив Спенсер",
    "aliases": [],
    "region": "Юг Австралии, глубоко вдаётся в сушу",
    "locationDesc": "Индийский океан (Юг Австралии, глубоко вдаётся в сушу)",
    "mapPrompt": "Покажите залив: Залив Спенсер",
    "geometryType": "point",
    "lat": -34,
    "lng": 136.5,
    "hitRadiusKm": 220,
    "bounds": null,
    "badgeColor": "sky",
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "К какому океаническому бассейну и региону относится: Залив Спенсер?",
      "backMainAnswer": "Залив Спенсер • Индийский океан (Юг Австралии, глубоко вдаётся в сушу)",
      "backMetrics": [
        {
          "label": "Океанический бассейн",
          "value": "Индийский океан"
        },
        {
          "label": "Местоположение",
          "value": "Юг Австралии, глубоко вдаётся в сушу"
        }
      ],
      "backNote": "Залив Залив Спенсер: Юг Австралии, глубоко вдаётся в сушу (Индийский океан)."
    },
    "isCoreLandmark": false
  },
  {
    "id": "m3_gulf_suez_gulf",
    "moduleId": "module3",
    "submoduleId": "m3_gulfs_indian",
    "category": "gulfs",
    "categoryRu": "Заливы",
    "difficulty": "Стандартный",
    "name": "Суэцкий залив",
    "aliases": [],
    "region": "Красное море, западный рукав Синайского полуострова (вход в Суэцкий канал)",
    "locationDesc": "Индийский океан (Красное море, западный рукав Синайского полуострова (вход в Суэцкий канал))",
    "mapPrompt": "Покажите залив: Суэцкий залив",
    "geometryType": "point",
    "lat": 28.5,
    "lng": 33.2,
    "hitRadiusKm": 220,
    "bounds": null,
    "badgeColor": "sky",
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "К какому океаническому бассейну и региону относится: Суэцкий залив?",
      "backMainAnswer": "Суэцкий залив • Индийский океан (Красное море, западный рукав Синайского полуострова (вход в Суэцкий канал))",
      "backMetrics": [
        {
          "label": "Океанический бассейн",
          "value": "Индийский океан"
        },
        {
          "label": "Местоположение",
          "value": "Красное море, западный рукав Синайского полуострова (вход в Суэцкий канал)"
        }
      ],
      "backNote": "Залив Суэцкий залив: Красное море, западный рукав Синайского полуострова (вход в Суэцкий канал) (Индийский океан)."
    },
    "isCoreLandmark": false
  },
  {
    "id": "m3_gulf_hudson_bay",
    "moduleId": "module3",
    "submoduleId": "m3_gulfs_arctic",
    "category": "gulfs",
    "categoryRu": "Заливы",
    "difficulty": "Стандартный",
    "name": "Гудзонов залив",
    "aliases": [],
    "region": "Северная Америка, Канада ('внутреннее море Канады')",
    "locationDesc": "Северный Ледовитый океан (Северная Америка, Канада ('внутреннее море Канады'))",
    "mapPrompt": "Покажите залив: Гудзонов залив",
    "geometryType": "point",
    "lat": 60,
    "lng": -85,
    "hitRadiusKm": 220,
    "bounds": [
      51.5,
      -94,
      64.5,
      -76.5
    ],
    "badgeColor": "sky",
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "К какому океаническому бассейну и региону относится: Гудзонов залив?",
      "backMainAnswer": "Гудзонов залив • Северный Ледовитый океан (Северная Америка, Канада ('внутреннее море Канады'))",
      "backMetrics": [
        {
          "label": "Океанический бассейн",
          "value": "Северный Ледовитый океан"
        },
        {
          "label": "Местоположение",
          "value": "Северная Америка, Канада ('внутреннее море Канады')"
        }
      ],
      "backNote": "Залив Гудзонов залив: Северная Америка, Канада ('внутреннее море Канады') (Северный Ледовитый океан)."
    },
    "isCoreLandmark": true
  },
  {
    "id": "m3_gulf_kandalaksha_gulf",
    "moduleId": "module3",
    "submoduleId": "m3_gulfs_arctic",
    "category": "gulfs",
    "categoryRu": "Заливы",
    "difficulty": "Стандартный",
    "name": "Кандалакшский залив",
    "aliases": [],
    "region": "Белое море, Кольский полуостров",
    "locationDesc": "Северный Ледовитый океан (Белое море, Кольский полуостров)",
    "mapPrompt": "Покажите залив: Кандалакшский залив",
    "geometryType": "point",
    "lat": 66.8,
    "lng": 33.5,
    "hitRadiusKm": 220,
    "bounds": null,
    "badgeColor": "sky",
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "К какому океаническому бассейну и региону относится: Кандалакшский залив?",
      "backMainAnswer": "Кандалакшский залив • Северный Ледовитый океан (Белое море, Кольский полуостров)",
      "backMetrics": [
        {
          "label": "Океанический бассейн",
          "value": "Северный Ледовитый океан"
        },
        {
          "label": "Местоположение",
          "value": "Белое море, Кольский полуостров"
        }
      ],
      "backNote": "Залив Кандалакшский залив: Белое море, Кольский полуостров (Северный Ледовитый океан)."
    },
    "isCoreLandmark": false
  },
  {
    "id": "m3_gulf_kotzebue_sound",
    "moduleId": "module3",
    "submoduleId": "m3_gulfs_arctic",
    "category": "gulfs",
    "categoryRu": "Заливы",
    "difficulty": "Стандартный",
    "name": "Залив Коцебу",
    "aliases": [],
    "region": "Чукотское море, Аляска",
    "locationDesc": "Северный Ледовитый океан (Чукотское море, Аляска)",
    "mapPrompt": "Покажите залив: Залив Коцебу",
    "geometryType": "point",
    "lat": 66.5,
    "lng": -163.5,
    "hitRadiusKm": 220,
    "bounds": null,
    "badgeColor": "sky",
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "К какому океаническому бассейну и региону относится: Залив Коцебу?",
      "backMainAnswer": "Залив Коцебу • Северный Ледовитый океан (Чукотское море, Аляска)",
      "backMetrics": [
        {
          "label": "Океанический бассейн",
          "value": "Северный Ледовитый океан"
        },
        {
          "label": "Местоположение",
          "value": "Чукотское море, Аляска"
        }
      ],
      "backNote": "Залив Залив Коцебу: Чукотское море, Аляска (Северный Ледовитый океан)."
    },
    "isCoreLandmark": false
  },
  {
    "id": "m3_gulf_ob_bay",
    "moduleId": "module3",
    "submoduleId": "m3_gulfs_arctic",
    "category": "gulfs",
    "categoryRu": "Заливы",
    "difficulty": "Стандартный",
    "name": "Обская губа",
    "aliases": [],
    "region": "Карское море, гигантский эстуарий реки Обь (длина >800 км)",
    "locationDesc": "Северный Ледовитый океан (Карское море, гигантский эстуарий реки Обь (длина >800 км))",
    "mapPrompt": "Покажите залив: Обская губа",
    "geometryType": "point",
    "lat": 69,
    "lng": 73.5,
    "hitRadiusKm": 220,
    "bounds": [
      66.5,
      70,
      73,
      76
    ],
    "badgeColor": "sky",
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "К какому океаническому бассейну и региону относится: Обская губа?",
      "backMainAnswer": "Обская губа • Северный Ледовитый океан (Карское море, гигантский эстуарий реки Обь (длина >800 км))",
      "backMetrics": [
        {
          "label": "Океанический бассейн",
          "value": "Северный Ледовитый океан"
        },
        {
          "label": "Местоположение",
          "value": "Карское море, гигантский эстуарий реки Обь (длина >800 км)"
        }
      ],
      "backNote": "Залив Обская губа: Карское море, гигантский эстуарий реки Обь (длина >800 км) (Северный Ледовитый океан)."
    },
    "isCoreLandmark": true
  },
  {
    "id": "m3_gulf_trondheim_fjord",
    "moduleId": "module3",
    "submoduleId": "m3_gulfs_arctic",
    "category": "gulfs",
    "categoryRu": "Заливы",
    "difficulty": "Стандартный",
    "name": "Тронхеймс-Фьорд",
    "aliases": [],
    "region": "Норвежское море, побережье Норвегии (Тронхейм)",
    "locationDesc": "Северный Ледовитый океан (Норвежское море, побережье Норвегии (Тронхейм))",
    "mapPrompt": "Покажите залив: Тронхеймс-Фьорд",
    "geometryType": "point",
    "lat": 63.6,
    "lng": 10.5,
    "hitRadiusKm": 220,
    "bounds": null,
    "badgeColor": "sky",
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "К какому океаническому бассейну и региону относится: Тронхеймс-Фьорд?",
      "backMainAnswer": "Тронхеймс-Фьорд • Северный Ледовитый океан (Норвежское море, побережье Норвегии (Тронхейм))",
      "backMetrics": [
        {
          "label": "Океанический бассейн",
          "value": "Северный Ледовитый океан"
        },
        {
          "label": "Местоположение",
          "value": "Норвежское море, побережье Норвегии (Тронхейм)"
        }
      ],
      "backNote": "Залив Тронхеймс-Фьорд: Норвежское море, побережье Норвегии (Тронхейм) (Северный Ледовитый океан)."
    },
    "isCoreLandmark": false
  },
  {
    "id": "m3_gulf_ungava_bay",
    "moduleId": "module3",
    "submoduleId": "m3_gulfs_arctic",
    "category": "gulfs",
    "categoryRu": "Заливы",
    "difficulty": "Стандартный",
    "name": "Залив Унгава",
    "aliases": [],
    "region": "Гудзонов пролив, север полуострова Лабрадор",
    "locationDesc": "Северный Ледовитый океан (Гудзонов пролив, север полуострова Лабрадор)",
    "mapPrompt": "Покажите залив: Залив Унгава",
    "geometryType": "point",
    "lat": 59.5,
    "lng": -67,
    "hitRadiusKm": 220,
    "bounds": null,
    "badgeColor": "sky",
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "К какому океаническому бассейну и региону относится: Залив Унгава?",
      "backMainAnswer": "Залив Унгава • Северный Ледовитый океан (Гудзонов пролив, север полуострова Лабрадор)",
      "backMetrics": [
        {
          "label": "Океанический бассейн",
          "value": "Северный Ледовитый океан"
        },
        {
          "label": "Местоположение",
          "value": "Гудзонов пролив, север полуострова Лабрадор"
        }
      ],
      "backNote": "Залив Залив Унгава: Гудзонов пролив, север полуострова Лабрадор (Северный Ледовитый океан)."
    },
    "isCoreLandmark": false
  },
  {
    "id": "m3_gulf_chesha_bay",
    "moduleId": "module3",
    "submoduleId": "m3_gulfs_arctic",
    "category": "gulfs",
    "categoryRu": "Заливы",
    "difficulty": "Стандартный",
    "name": "Чёшская губа",
    "aliases": [],
    "region": "Баренцево море, восточнее полуострова Канин",
    "locationDesc": "Северный Ледовитый океан (Баренцево море, восточнее полуострова Канин)",
    "mapPrompt": "Покажите залив: Чёшская губа",
    "geometryType": "point",
    "lat": 67.2,
    "lng": 47,
    "hitRadiusKm": 220,
    "bounds": null,
    "badgeColor": "sky",
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "К какому океаническому бассейну и региону относится: Чёшская губа?",
      "backMainAnswer": "Чёшская губа • Северный Ледовитый океан (Баренцево море, восточнее полуострова Канин)",
      "backMetrics": [
        {
          "label": "Океанический бассейн",
          "value": "Северный Ледовитый океан"
        },
        {
          "label": "Местоположение",
          "value": "Баренцево море, восточнее полуострова Канин"
        }
      ],
      "backNote": "Залив Чёшская губа: Баренцево море, восточнее полуострова Канин (Северный Ледовитый океан)."
    },
    "isCoreLandmark": false
  },
  {
    "id": "m3_gulf_kara_bogaz_gol",
    "moduleId": "module3",
    "submoduleId": "m3_gulfs_caspian",
    "category": "gulfs",
    "categoryRu": "Заливы",
    "difficulty": "Стандартный",
    "name": "Кара-Богаз-Гол",
    "aliases": [],
    "region": "Каспийское море, соляной залив-лагуна на западе Туркменистана",
    "locationDesc": "Каспийское море (Каспийское море, соляной залив-лагуна на западе Туркменистана)",
    "mapPrompt": "Покажите залив: Кара-Богаз-Гол",
    "geometryType": "point",
    "lat": 41.3,
    "lng": 53.5,
    "hitRadiusKm": 200,
    "bounds": null,
    "badgeColor": "sky",
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "К какому океаническому бассейну и региону относится: Кара-Богаз-Гол?",
      "backMainAnswer": "Кара-Богаз-Гол • Каспийское море (Каспийское море, соляной залив-лагуна на западе Туркменистана)",
      "backMetrics": [
        {
          "label": "Океанический бассейн",
          "value": "Каспийское море"
        },
        {
          "label": "Местоположение",
          "value": "Каспийское море, соляной залив-лагуна на западе Туркменистана"
        }
      ],
      "backNote": "Залив-лагуна Каспийского моря с экстремальной солёностью (до 300‰)."
    },
    "isCoreLandmark": false
  },
  {
    "id": "m3_tr_puerto_rico",
    "moduleId": "module3",
    "submoduleId": "m3_trenches",
    "category": "trenches",
    "categoryRu": "Глубоководные желоба",
    "difficulty": "Стандартный",
    "name": "Желоб Пуэрто-Рико",
    "aliases": [
      "Пуэрто-Рико"
    ],
    "region": "Атлантический океан",
    "locationDesc": "Атлантический океан (макс. глубина 8742 м)",
    "mapPrompt": "Покажите глубоководный желоб: Желоб Пуэрто-Рико",
    "geometryType": "polyline",
    "lat": 19.6,
    "lng": -68.33,
    "hitRadiusKm": 180,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        19.2,
        -64
      ],
      [
        19.6,
        -68.33
      ],
      [
        20,
        -72
      ]
    ],
    "flowStyle": {
      "hasDirection": false,
      "tempType": "trench"
    },
    "badgeColor": "indigo",
    "maxDepthM": 8742,
    "lengthKm": 1070,
    "meanWidthKm": 87,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите наибольшую глубину, протяжённость и океан для: Желоб Пуэрто-Рико",
      "backMainAnswer": "8742 м • длина 1070 км (Атлантический океан)",
      "backMetrics": [
        {
          "label": "Океан",
          "value": "Атлантический океан"
        },
        {
          "label": "Наибольшая глубина",
          "value": "8742 м"
        },
        {
          "label": "Протяжённость",
          "value": "1070 км"
        },
        {
          "label": "Средняя ширина",
          "value": "87 км"
        },
        {
          "label": "Координаты макс. глубины",
          "value": "19.60°, -68.33°"
        }
      ],
      "backNote": "Желоб Желоб Пуэрто-Рико: максимальная глубина 8742 м, протяжённость 1070 км."
    },
    "isCoreLandmark": true
  },
  {
    "id": "m3_tr_south_sandwich",
    "moduleId": "module3",
    "submoduleId": "m3_trenches",
    "category": "trenches",
    "categoryRu": "Глубоководные желоба",
    "difficulty": "Стандартный",
    "name": "Южно-Сандвичев желоб",
    "aliases": [
      "Южно-Сандвичев"
    ],
    "region": "Атлантический океан",
    "locationDesc": "Атлантический океан (макс. глубина 8264 м)",
    "mapPrompt": "Покажите глубоководный желоб: Южно-Сандвичев желоб",
    "geometryType": "polyline",
    "lat": -55.12,
    "lng": -26.8,
    "hitRadiusKm": 180,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        -54,
        -28
      ],
      [
        -55.12,
        -26.8
      ],
      [
        -58,
        -25
      ],
      [
        -60,
        -27
      ]
    ],
    "flowStyle": {
      "hasDirection": false,
      "tempType": "trench"
    },
    "badgeColor": "indigo",
    "maxDepthM": 8264,
    "lengthKm": 1380,
    "meanWidthKm": 68,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите наибольшую глубину, протяжённость и океан для: Южно-Сандвичев желоб",
      "backMainAnswer": "8264 м • длина 1380 км (Атлантический океан)",
      "backMetrics": [
        {
          "label": "Океан",
          "value": "Атлантический океан"
        },
        {
          "label": "Наибольшая глубина",
          "value": "8264 м"
        },
        {
          "label": "Протяжённость",
          "value": "1380 км"
        },
        {
          "label": "Средняя ширина",
          "value": "68 км"
        },
        {
          "label": "Координаты макс. глубины",
          "value": "-55.12°, -26.80°"
        }
      ],
      "backNote": "Желоб Южно-Сандвичев желоб: максимальная глубина 8264 м, протяжённость 1380 км."
    },
    "isCoreLandmark": true
  },
  {
    "id": "m3_tr_romanche",
    "moduleId": "module3",
    "submoduleId": "m3_trenches",
    "category": "trenches",
    "categoryRu": "Глубоководные желоба",
    "difficulty": "Стандартный",
    "name": "Желоб Романш (впадина Романш)",
    "aliases": [
      "Романш"
    ],
    "region": "Атлантический океан",
    "locationDesc": "Атлантический океан (макс. глубина 7856 м)",
    "mapPrompt": "Покажите глубоководный желоб: Желоб Романш (впадина Романш)",
    "geometryType": "polyline",
    "lat": -0.27,
    "lng": -18.58,
    "hitRadiusKm": 180,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        -0.2,
        -17.5
      ],
      [
        -0.27,
        -18.58
      ],
      [
        -0.35,
        -19.5
      ]
    ],
    "flowStyle": {
      "hasDirection": false,
      "tempType": "trench"
    },
    "badgeColor": "indigo",
    "maxDepthM": 7856,
    "lengthKm": 230,
    "meanWidthKm": 9,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите наибольшую глубину, протяжённость и океан для: Желоб Романш (впадина Романш)",
      "backMainAnswer": "7856 м • длина 230 км (Атлантический океан)",
      "backMetrics": [
        {
          "label": "Океан",
          "value": "Атлантический океан"
        },
        {
          "label": "Наибольшая глубина",
          "value": "7856 м"
        },
        {
          "label": "Протяжённость",
          "value": "230 км"
        },
        {
          "label": "Средняя ширина",
          "value": "9 км"
        },
        {
          "label": "Координаты макс. глубины",
          "value": "-0.27°, -18.58°"
        }
      ],
      "backNote": "Желоб Желоб Романш (впадина Романш): максимальная глубина 7856 м, протяжённость 230 км."
    },
    "isCoreLandmark": false
  },
  {
    "id": "m3_tr_cayman",
    "moduleId": "module3",
    "submoduleId": "m3_trenches",
    "category": "trenches",
    "categoryRu": "Глубоководные желоба",
    "difficulty": "Стандартный",
    "name": "Желоб Кайман",
    "aliases": [
      "Кайман"
    ],
    "region": "Атлантический океан",
    "locationDesc": "Атлантический океан (макс. глубина 7090 м)",
    "mapPrompt": "Покажите глубоководный желоб: Желоб Кайман",
    "geometryType": "polyline",
    "lat": 19.08,
    "lng": -80.13,
    "hitRadiusKm": 180,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        18.5,
        -77
      ],
      [
        19.08,
        -80.13
      ],
      [
        19.5,
        -83.5
      ]
    ],
    "flowStyle": {
      "hasDirection": false,
      "tempType": "trench"
    },
    "badgeColor": "indigo",
    "maxDepthM": 7090,
    "lengthKm": 790,
    "meanWidthKm": 54,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите наибольшую глубину, протяжённость и океан для: Желоб Кайман",
      "backMainAnswer": "7090 м • длина 790 км (Атлантический океан)",
      "backMetrics": [
        {
          "label": "Океан",
          "value": "Атлантический океан"
        },
        {
          "label": "Наибольшая глубина",
          "value": "7090 м"
        },
        {
          "label": "Протяжённость",
          "value": "790 км"
        },
        {
          "label": "Средняя ширина",
          "value": "54 км"
        },
        {
          "label": "Координаты макс. глубины",
          "value": "19.08°, -80.13°"
        }
      ],
      "backNote": "Желоб Желоб Кайман: максимальная глубина 7090 м, протяжённость 790 км."
    },
    "isCoreLandmark": false
  },
  {
    "id": "m3_tr_hellenic",
    "moduleId": "module3",
    "submoduleId": "m3_trenches",
    "category": "trenches",
    "categoryRu": "Глубоководные желоба",
    "difficulty": "Стандартный",
    "name": "Гелленский желоб (впадина Гелла)",
    "aliases": [
      "Гелленский"
    ],
    "region": "Атлантический океан",
    "locationDesc": "Атлантический океан (макс. глубина 5121 м)",
    "mapPrompt": "Покажите глубоководный желоб: Гелленский желоб (впадина Гелла)",
    "geometryType": "polyline",
    "lat": 36.53,
    "lng": 21.08,
    "hitRadiusKm": 180,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        36,
        20.5
      ],
      [
        36.53,
        21.08
      ],
      [
        37,
        22
      ]
    ],
    "flowStyle": {
      "hasDirection": false,
      "tempType": "trench"
    },
    "badgeColor": "indigo",
    "maxDepthM": 5121,
    "lengthKm": 343,
    "meanWidthKm": 12,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите наибольшую глубину, протяжённость и океан для: Гелленский желоб (впадина Гелла)",
      "backMainAnswer": "5121 м • длина 343 км (Атлантический океан)",
      "backMetrics": [
        {
          "label": "Океан",
          "value": "Атлантический океан"
        },
        {
          "label": "Наибольшая глубина",
          "value": "5121 м"
        },
        {
          "label": "Протяжённость",
          "value": "343 км"
        },
        {
          "label": "Средняя ширина",
          "value": "12 км"
        },
        {
          "label": "Координаты макс. глубины",
          "value": "36.53°, 21.08°"
        }
      ],
      "backNote": "Желоб Гелленский желоб (впадина Гелла): максимальная глубина 5121 м, протяжённость 343 км."
    },
    "isCoreLandmark": false
  },
  {
    "id": "m3_tr_sunda_trench",
    "moduleId": "module3",
    "submoduleId": "m3_trenches",
    "category": "trenches",
    "categoryRu": "Глубоководные желоба",
    "difficulty": "Стандартный",
    "name": "Зондский (Яванский) желоб",
    "aliases": [
      "Яванский желоб"
    ],
    "region": "Индийский океан",
    "locationDesc": "Индийский океан (макс. глубина 7729 м)",
    "mapPrompt": "Покажите глубоководный желоб: Зондский (Яванский) желоб",
    "geometryType": "polyline",
    "lat": -11.17,
    "lng": 114.95,
    "hitRadiusKm": 180,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        -4,
        101
      ],
      [
        -8,
        107
      ],
      [
        -11.17,
        114.95
      ],
      [
        -12,
        119
      ]
    ],
    "flowStyle": {
      "hasDirection": false,
      "tempType": "trench"
    },
    "badgeColor": "indigo",
    "maxDepthM": 7729,
    "lengthKm": 2900,
    "meanWidthKm": 49,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите наибольшую глубину, протяжённость и океан для: Зондский (Яванский) желоб",
      "backMainAnswer": "7729 м • длина 2900 км (Индийский океан)",
      "backMetrics": [
        {
          "label": "Океан",
          "value": "Индийский океан"
        },
        {
          "label": "Наибольшая глубина",
          "value": "7729 м"
        },
        {
          "label": "Протяжённость",
          "value": "2900 км"
        },
        {
          "label": "Средняя ширина",
          "value": "49 км"
        },
        {
          "label": "Координаты макс. глубины",
          "value": "-11.17°, 114.95°"
        }
      ],
      "backNote": "Желоб Зондский (Яванский) желоб: максимальная глубина 7729 м, протяжённость 2900 км."
    },
    "isCoreLandmark": true
  },
  {
    "id": "m3_tr_east_indian",
    "moduleId": "module3",
    "submoduleId": "m3_trenches",
    "category": "trenches",
    "categoryRu": "Глубоководные желоба",
    "difficulty": "Стандартный",
    "name": "Восточно-Индийский желоб",
    "aliases": [],
    "region": "Индийский океан",
    "locationDesc": "Индийский океан (макс. глубина 6335 м)",
    "mapPrompt": "Покажите глубоководный желоб: Восточно-Индийский желоб",
    "geometryType": "polyline",
    "lat": -11.23,
    "lng": 90.25,
    "hitRadiusKm": 180,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        -5,
        89
      ],
      [
        -11.23,
        90.25
      ],
      [
        -15,
        91.5
      ]
    ],
    "flowStyle": {
      "hasDirection": false,
      "tempType": "trench"
    },
    "badgeColor": "indigo",
    "maxDepthM": 6335,
    "lengthKm": 1244,
    "meanWidthKm": 27,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите наибольшую глубину, протяжённость и океан для: Восточно-Индийский желоб",
      "backMainAnswer": "6335 м • длина 1244 км (Индийский океан)",
      "backMetrics": [
        {
          "label": "Океан",
          "value": "Индийский океан"
        },
        {
          "label": "Наибольшая глубина",
          "value": "6335 м"
        },
        {
          "label": "Протяжённость",
          "value": "1244 км"
        },
        {
          "label": "Средняя ширина",
          "value": "27 км"
        },
        {
          "label": "Координаты макс. глубины",
          "value": "-11.23°, 90.25°"
        }
      ],
      "backNote": "Желоб Восточно-Индийский желоб: максимальная глубина 6335 м, протяжённость 1244 км."
    },
    "isCoreLandmark": false
  },
  {
    "id": "m3_tr_ob_trench",
    "moduleId": "module3",
    "submoduleId": "m3_trenches",
    "category": "trenches",
    "categoryRu": "Глубоководные желоба",
    "difficulty": "Стандартный",
    "name": "Желоб Оби (Обь)",
    "aliases": [
      "желоб Обь"
    ],
    "region": "Индийский океан",
    "locationDesc": "Индийский океан (макс. глубина 5880 м)",
    "mapPrompt": "Покажите глубоководный желоб: Желоб Оби (Обь)",
    "geometryType": "polyline",
    "lat": -32.87,
    "lng": 100.08,
    "hitRadiusKm": 180,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        -30,
        99
      ],
      [
        -32.87,
        100.08
      ],
      [
        -35,
        101.5
      ]
    ],
    "flowStyle": {
      "hasDirection": false,
      "tempType": "trench"
    },
    "badgeColor": "indigo",
    "maxDepthM": 5880,
    "lengthKm": 560,
    "meanWidthKm": 18,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите наибольшую глубину, протяжённость и океан для: Желоб Оби (Обь)",
      "backMainAnswer": "5880 м • длина 560 км (Индийский океан)",
      "backMetrics": [
        {
          "label": "Океан",
          "value": "Индийский океан"
        },
        {
          "label": "Наибольшая глубина",
          "value": "5880 м"
        },
        {
          "label": "Протяжённость",
          "value": "560 км"
        },
        {
          "label": "Средняя ширина",
          "value": "18 км"
        },
        {
          "label": "Координаты макс. глубины",
          "value": "-32.87°, 100.08°"
        }
      ],
      "backNote": "Желоб Желоб Оби (Обь): максимальная глубина 5880 м, протяжённость 560 км."
    },
    "isCoreLandmark": false
  },
  {
    "id": "m3_tr_amirante",
    "moduleId": "module3",
    "submoduleId": "m3_trenches",
    "category": "trenches",
    "categoryRu": "Глубоководные желоба",
    "difficulty": "Стандартный",
    "name": "Амирантский желоб",
    "aliases": [],
    "region": "Индийский океан",
    "locationDesc": "Индийский океан (макс. глубина 5477 м)",
    "mapPrompt": "Покажите глубоководный желоб: Амирантский желоб",
    "geometryType": "polyline",
    "lat": -7.83,
    "lng": 52.83,
    "hitRadiusKm": 180,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        -5,
        53
      ],
      [
        -7.83,
        52.83
      ],
      [
        -10,
        52
      ]
    ],
    "flowStyle": {
      "hasDirection": false,
      "tempType": "trench"
    },
    "badgeColor": "indigo",
    "maxDepthM": 5477,
    "lengthKm": 630,
    "meanWidthKm": 119,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите наибольшую глубину, протяжённость и океан для: Амирантский желоб",
      "backMainAnswer": "5477 м • длина 630 км (Индийский океан)",
      "backMetrics": [
        {
          "label": "Океан",
          "value": "Индийский океан"
        },
        {
          "label": "Наибольшая глубина",
          "value": "5477 м"
        },
        {
          "label": "Протяжённость",
          "value": "630 км"
        },
        {
          "label": "Средняя ширина",
          "value": "119 км"
        },
        {
          "label": "Координаты макс. глубины",
          "value": "-7.83°, 52.83°"
        }
      ],
      "backNote": "Желоб Амирантский желоб: максимальная глубина 5477 м, протяжённость 630 км."
    },
    "isCoreLandmark": false
  },
  {
    "id": "m3_tr_chagos",
    "moduleId": "module3",
    "submoduleId": "m3_trenches",
    "category": "trenches",
    "categoryRu": "Глубоководные желоба",
    "difficulty": "Стандартный",
    "name": "Желоб Чагос",
    "aliases": [],
    "region": "Индийский океан",
    "locationDesc": "Индийский океан (макс. глубина 5431 м)",
    "mapPrompt": "Покажите глубоководный желоб: Желоб Чагос",
    "geometryType": "polyline",
    "lat": -6,
    "lng": 73.75,
    "hitRadiusKm": 180,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        -4,
        73
      ],
      [
        -6,
        73.75
      ],
      [
        -8,
        74.5
      ]
    ],
    "flowStyle": {
      "hasDirection": false,
      "tempType": "trench"
    },
    "badgeColor": "indigo",
    "maxDepthM": 5431,
    "lengthKm": 510,
    "meanWidthKm": 25,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите наибольшую глубину, протяжённость и океан для: Желоб Чагос",
      "backMainAnswer": "5431 м • длина 510 км (Индийский океан)",
      "backMetrics": [
        {
          "label": "Океан",
          "value": "Индийский океан"
        },
        {
          "label": "Наибольшая глубина",
          "value": "5431 м"
        },
        {
          "label": "Протяжённость",
          "value": "510 км"
        },
        {
          "label": "Средняя ширина",
          "value": "25 км"
        },
        {
          "label": "Координаты макс. глубины",
          "value": "-6.00°, 73.75°"
        }
      ],
      "backNote": "Желоб Желоб Чагос: максимальная глубина 5431 м, протяжённость 510 км."
    },
    "isCoreLandmark": false
  },
  {
    "id": "m3_tr_mariana",
    "moduleId": "module3",
    "submoduleId": "m3_trenches",
    "category": "trenches",
    "categoryRu": "Глубоководные желоба",
    "difficulty": "Стандартный",
    "name": "Марианский желоб (Бездна Челленджера)",
    "aliases": [
      "Бездна Челленджера",
      "Марианская впадина"
    ],
    "region": "Тихий океан",
    "locationDesc": "Тихий океан (макс. глубина 11022 м)",
    "mapPrompt": "Покажите глубоководный желоб: Марианский желоб (Бездна Челленджера)",
    "geometryType": "polyline",
    "lat": 11.32,
    "lng": 142.12,
    "hitRadiusKm": 180,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        11,
        142
      ],
      [
        11.32,
        142.12
      ],
      [
        14,
        144
      ],
      [
        18,
        145
      ]
    ],
    "flowStyle": {
      "hasDirection": false,
      "tempType": "trench"
    },
    "badgeColor": "indigo",
    "maxDepthM": 11022,
    "lengthKm": 1340,
    "meanWidthKm": 59,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите наибольшую глубину, протяжённость и океан для: Марианский желоб (Бездна Челленджера)",
      "backMainAnswer": "11022 м • длина 1340 км (Тихий океан)",
      "backMetrics": [
        {
          "label": "Океан",
          "value": "Тихий океан"
        },
        {
          "label": "Наибольшая глубина",
          "value": "11022 м"
        },
        {
          "label": "Протяжённость",
          "value": "1340 км"
        },
        {
          "label": "Средняя ширина",
          "value": "59 км"
        },
        {
          "label": "Координаты макс. глубины",
          "value": "11.32°, 142.12°"
        }
      ],
      "backNote": "Желоб Марианский желоб (Бездна Челленджера): максимальная глубина 11022 м, протяжённость 1340 км."
    },
    "isCoreLandmark": true
  },
  {
    "id": "m3_tr_tonga",
    "moduleId": "module3",
    "submoduleId": "m3_trenches",
    "category": "trenches",
    "categoryRu": "Глубоководные желоба",
    "difficulty": "Стандартный",
    "name": "Желоб Тонга (впадина Горизонт)",
    "aliases": [
      "Тонга",
      "впадина Горизонт"
    ],
    "region": "Тихий океан",
    "locationDesc": "Тихий океан (макс. глубина 10882 м)",
    "mapPrompt": "Покажите глубоководный желоб: Желоб Тонга (впадина Горизонт)",
    "geometryType": "polyline",
    "lat": -23.22,
    "lng": -174.7,
    "hitRadiusKm": 180,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        -18,
        -173
      ],
      [
        -23.22,
        -174.7
      ],
      [
        -26,
        -175.5
      ]
    ],
    "flowStyle": {
      "hasDirection": false,
      "tempType": "trench"
    },
    "badgeColor": "indigo",
    "maxDepthM": 10882,
    "lengthKm": 860,
    "meanWidthKm": 78,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите наибольшую глубину, протяжённость и океан для: Желоб Тонга (впадина Горизонт)",
      "backMainAnswer": "10882 м • длина 860 км (Тихий океан)",
      "backMetrics": [
        {
          "label": "Океан",
          "value": "Тихий океан"
        },
        {
          "label": "Наибольшая глубина",
          "value": "10882 м"
        },
        {
          "label": "Протяжённость",
          "value": "860 км"
        },
        {
          "label": "Средняя ширина",
          "value": "78 км"
        },
        {
          "label": "Координаты макс. глубины",
          "value": "-23.22°, -174.70°"
        }
      ],
      "backNote": "Желоб Желоб Тонга (впадина Горизонт): максимальная глубина 10882 м, протяжённость 860 км."
    },
    "isCoreLandmark": true
  },
  {
    "id": "m3_tr_philippine_trench",
    "moduleId": "module3",
    "submoduleId": "m3_trenches",
    "category": "trenches",
    "categoryRu": "Глубоководные желоба",
    "difficulty": "Стандартный",
    "name": "Филиппинский желоб",
    "aliases": [
      "Филиппинский"
    ],
    "region": "Тихий океан",
    "locationDesc": "Тихий океан (макс. глубина 10265 м)",
    "mapPrompt": "Покажите глубоководный желоб: Филиппинский желоб",
    "geometryType": "polyline",
    "lat": 10.4,
    "lng": 126.67,
    "hitRadiusKm": 180,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        6,
        127
      ],
      [
        10.4,
        126.67
      ],
      [
        15,
        124
      ]
    ],
    "flowStyle": {
      "hasDirection": false,
      "tempType": "trench"
    },
    "badgeColor": "indigo",
    "maxDepthM": 10265,
    "lengthKm": 1330,
    "meanWidthKm": 65,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите наибольшую глубину, протяжённость и океан для: Филиппинский желоб",
      "backMainAnswer": "10265 м • длина 1330 км (Тихий океан)",
      "backMetrics": [
        {
          "label": "Океан",
          "value": "Тихий океан"
        },
        {
          "label": "Наибольшая глубина",
          "value": "10265 м"
        },
        {
          "label": "Протяжённость",
          "value": "1330 км"
        },
        {
          "label": "Средняя ширина",
          "value": "65 км"
        },
        {
          "label": "Координаты макс. глубины",
          "value": "10.40°, 126.67°"
        }
      ],
      "backNote": "Желоб Филиппинский желоб: максимальная глубина 10265 м, протяжённость 1330 км."
    },
    "isCoreLandmark": true
  },
  {
    "id": "m3_tr_kermadec",
    "moduleId": "module3",
    "submoduleId": "m3_trenches",
    "category": "trenches",
    "categoryRu": "Глубоководные желоба",
    "difficulty": "Стандартный",
    "name": "Желоб Кермадек",
    "aliases": [
      "Кермадек"
    ],
    "region": "Тихий океан",
    "locationDesc": "Тихий океан (макс. глубина 10047 м)",
    "mapPrompt": "Покажите глубоководный желоб: Желоб Кермадек",
    "geometryType": "polyline",
    "lat": -31.97,
    "lng": -177.43,
    "hitRadiusKm": 180,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        -28,
        -176
      ],
      [
        -31.97,
        -177.43
      ],
      [
        -36,
        -178.5
      ]
    ],
    "flowStyle": {
      "hasDirection": false,
      "tempType": "trench"
    },
    "badgeColor": "indigo",
    "maxDepthM": 10047,
    "lengthKm": 1270,
    "meanWidthKm": 88,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите наибольшую глубину, протяжённость и океан для: Желоб Кермадек",
      "backMainAnswer": "10047 м • длина 1270 км (Тихий океан)",
      "backMetrics": [
        {
          "label": "Океан",
          "value": "Тихий океан"
        },
        {
          "label": "Наибольшая глубина",
          "value": "10047 м"
        },
        {
          "label": "Протяжённость",
          "value": "1270 км"
        },
        {
          "label": "Средняя ширина",
          "value": "88 км"
        },
        {
          "label": "Координаты макс. глубины",
          "value": "-31.97°, -177.43°"
        }
      ],
      "backNote": "Желоб Желоб Кермадек: максимальная глубина 10047 м, протяжённость 1270 км."
    },
    "isCoreLandmark": true
  },
  {
    "id": "m3_tr_izu_bonin",
    "moduleId": "module3",
    "submoduleId": "m3_trenches",
    "category": "trenches",
    "categoryRu": "Глубоководные желоба",
    "difficulty": "Стандартный",
    "name": "Идзу-Бонинский желоб",
    "aliases": [
      "Идзу-Бонин"
    ],
    "region": "Тихий океан",
    "locationDesc": "Тихий океан (макс. глубина 9810 м)",
    "mapPrompt": "Покажите глубоководный желоб: Идзу-Бонинский желоб",
    "geometryType": "polyline",
    "lat": 29.1,
    "lng": 142.9,
    "hitRadiusKm": 180,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        26,
        143.5
      ],
      [
        29.1,
        142.9
      ],
      [
        34,
        142
      ]
    ],
    "flowStyle": {
      "hasDirection": false,
      "tempType": "trench"
    },
    "badgeColor": "indigo",
    "maxDepthM": 9810,
    "lengthKm": 1030,
    "meanWidthKm": 82,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите наибольшую глубину, протяжённость и океан для: Идзу-Бонинский желоб",
      "backMainAnswer": "9810 м • длина 1030 км (Тихий океан)",
      "backMetrics": [
        {
          "label": "Океан",
          "value": "Тихий океан"
        },
        {
          "label": "Наибольшая глубина",
          "value": "9810 м"
        },
        {
          "label": "Протяжённость",
          "value": "1030 км"
        },
        {
          "label": "Средняя ширина",
          "value": "82 км"
        },
        {
          "label": "Координаты макс. глубины",
          "value": "29.10°, 142.90°"
        }
      ],
      "backNote": "Желоб Идзу-Бонинский желоб: максимальная глубина 9810 м, протяжённость 1030 км."
    },
    "isCoreLandmark": false
  },
  {
    "id": "m3_tr_kuril_kamchatka",
    "moduleId": "module3",
    "submoduleId": "m3_trenches",
    "category": "trenches",
    "categoryRu": "Глубоководные желоба",
    "difficulty": "Стандартный",
    "name": "Курило-Камчатский желоб",
    "aliases": [
      "Курило-Камчатский"
    ],
    "region": "Тихий океан",
    "locationDesc": "Тихий океан (макс. глубина 9717 м)",
    "mapPrompt": "Покажите глубоководный желоб: Курило-Камчатский желоб",
    "geometryType": "polyline",
    "lat": 42.42,
    "lng": 152.75,
    "hitRadiusKm": 180,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        42.42,
        152.75
      ],
      [
        47,
        155
      ],
      [
        52,
        160
      ]
    ],
    "flowStyle": {
      "hasDirection": false,
      "tempType": "trench"
    },
    "badgeColor": "indigo",
    "maxDepthM": 9717,
    "lengthKm": 2170,
    "meanWidthKm": 59,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите наибольшую глубину, протяжённость и океан для: Курило-Камчатский желоб",
      "backMainAnswer": "9717 м • длина 2170 км (Тихий океан)",
      "backMetrics": [
        {
          "label": "Океан",
          "value": "Тихий океан"
        },
        {
          "label": "Наибольшая глубина",
          "value": "9717 м"
        },
        {
          "label": "Протяжённость",
          "value": "2170 км"
        },
        {
          "label": "Средняя ширина",
          "value": "59 км"
        },
        {
          "label": "Координаты макс. глубины",
          "value": "42.42°, 152.75°"
        }
      ],
      "backNote": "Желоб Курило-Камчатский желоб: максимальная глубина 9717 м, протяжённость 2170 км."
    },
    "isCoreLandmark": true
  },
  {
    "id": "m3_tr_santa_cruz",
    "moduleId": "module3",
    "submoduleId": "m3_trenches",
    "category": "trenches",
    "categoryRu": "Глубоководные желоба",
    "difficulty": "Стандартный",
    "name": "Желоб Санта-Крус",
    "aliases": [],
    "region": "Тихий океан",
    "locationDesc": "Тихий океан (макс. глубина 9174 м)",
    "mapPrompt": "Покажите глубоководный желоб: Желоб Санта-Крус",
    "geometryType": "polyline",
    "lat": -12.47,
    "lng": 165.85,
    "hitRadiusKm": 180,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        -11,
        165
      ],
      [
        -12.47,
        165.85
      ],
      [
        -14,
        167
      ]
    ],
    "flowStyle": {
      "hasDirection": false,
      "tempType": "trench"
    },
    "badgeColor": "indigo",
    "maxDepthM": 9174,
    "lengthKm": 292,
    "meanWidthKm": 31,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите наибольшую глубину, протяжённость и океан для: Желоб Санта-Крус",
      "backMainAnswer": "9174 м • длина 292 км (Тихий океан)",
      "backMetrics": [
        {
          "label": "Океан",
          "value": "Тихий океан"
        },
        {
          "label": "Наибольшая глубина",
          "value": "9174 м"
        },
        {
          "label": "Протяжённость",
          "value": "292 км"
        },
        {
          "label": "Средняя ширина",
          "value": "31 км"
        },
        {
          "label": "Координаты макс. глубины",
          "value": "-12.47°, 165.85°"
        }
      ],
      "backNote": "Желоб Желоб Санта-Крус: максимальная глубина 9174 м, протяжённость 292 км."
    },
    "isCoreLandmark": false
  },
  {
    "id": "m3_tr_volcano_trench",
    "moduleId": "module3",
    "submoduleId": "m3_trenches",
    "category": "trenches",
    "categoryRu": "Глубоководные желоба",
    "difficulty": "Стандартный",
    "name": "Желоб Волкано",
    "aliases": [],
    "region": "Тихий океан",
    "locationDesc": "Тихий океан (макс. глубина 9157 м)",
    "mapPrompt": "Покажите глубоководный желоб: Желоб Волкано",
    "geometryType": "polyline",
    "lat": 24.28,
    "lng": 143.38,
    "hitRadiusKm": 180,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        22,
        143.8
      ],
      [
        24.28,
        143.38
      ],
      [
        26,
        143
      ]
    ],
    "flowStyle": {
      "hasDirection": false,
      "tempType": "trench"
    },
    "badgeColor": "indigo",
    "maxDepthM": 9157,
    "lengthKm": 820,
    "meanWidthKm": 109,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите наибольшую глубину, протяжённость и океан для: Желоб Волкано",
      "backMainAnswer": "9157 м • длина 820 км (Тихий океан)",
      "backMetrics": [
        {
          "label": "Океан",
          "value": "Тихий океан"
        },
        {
          "label": "Наибольшая глубина",
          "value": "9157 м"
        },
        {
          "label": "Протяжённость",
          "value": "820 км"
        },
        {
          "label": "Средняя ширина",
          "value": "109 км"
        },
        {
          "label": "Координаты макс. глубины",
          "value": "24.28°, 143.38°"
        }
      ],
      "backNote": "Желоб Желоб Волкано: максимальная глубина 9157 м, протяжённость 820 км."
    },
    "isCoreLandmark": false
  },
  {
    "id": "m3_tr_bougainville",
    "moduleId": "module3",
    "submoduleId": "m3_trenches",
    "category": "trenches",
    "categoryRu": "Глубоководные желоба",
    "difficulty": "Стандартный",
    "name": "Бугенвильский желоб",
    "aliases": [],
    "region": "Тихий океан",
    "locationDesc": "Тихий океан (макс. глубина 9103 м)",
    "mapPrompt": "Покажите глубоководный желоб: Бугенвильский желоб",
    "geometryType": "polyline",
    "lat": -6.3,
    "lng": 153.72,
    "hitRadiusKm": 180,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        -5,
        152.5
      ],
      [
        -6.3,
        153.72
      ],
      [
        -7.5,
        155
      ]
    ],
    "flowStyle": {
      "hasDirection": false,
      "tempType": "trench"
    },
    "badgeColor": "indigo",
    "maxDepthM": 9103,
    "lengthKm": 330,
    "meanWidthKm": 39,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите наибольшую глубину, протяжённость и океан для: Бугенвильский желоб",
      "backMainAnswer": "9103 м • длина 330 км (Тихий океан)",
      "backMetrics": [
        {
          "label": "Океан",
          "value": "Тихий океан"
        },
        {
          "label": "Наибольшая глубина",
          "value": "9103 м"
        },
        {
          "label": "Протяжённость",
          "value": "330 км"
        },
        {
          "label": "Средняя ширина",
          "value": "39 км"
        },
        {
          "label": "Координаты макс. глубины",
          "value": "-6.30°, 153.72°"
        }
      ],
      "backNote": "Желоб Бугенвильский желоб: максимальная глубина 9103 м, протяжённость 330 км."
    },
    "isCoreLandmark": false
  },
  {
    "id": "m3_tr_yap_trench",
    "moduleId": "module3",
    "submoduleId": "m3_trenches",
    "category": "trenches",
    "categoryRu": "Глубоководные желоба",
    "difficulty": "Стандартный",
    "name": "Желоб Яп",
    "aliases": [
      "Яп"
    ],
    "region": "Тихий океан",
    "locationDesc": "Тихий океан (макс. глубина 8850 м)",
    "mapPrompt": "Покажите глубоководный желоб: Желоб Яп",
    "geometryType": "polyline",
    "lat": 8.42,
    "lng": 137.93,
    "hitRadiusKm": 180,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        7,
        137
      ],
      [
        8.42,
        137.93
      ],
      [
        10,
        139
      ]
    ],
    "flowStyle": {
      "hasDirection": false,
      "tempType": "trench"
    },
    "badgeColor": "indigo",
    "maxDepthM": 8850,
    "lengthKm": 460,
    "meanWidthKm": 72,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите наибольшую глубину, протяжённость и океан для: Желоб Яп",
      "backMainAnswer": "8850 м • длина 460 км (Тихий океан)",
      "backMetrics": [
        {
          "label": "Океан",
          "value": "Тихий океан"
        },
        {
          "label": "Наибольшая глубина",
          "value": "8850 м"
        },
        {
          "label": "Протяжённость",
          "value": "460 км"
        },
        {
          "label": "Средняя ширина",
          "value": "72 км"
        },
        {
          "label": "Координаты макс. глубины",
          "value": "8.42°, 137.93°"
        }
      ],
      "backNote": "Желоб Желоб Яп: максимальная глубина 8850 м, протяжённость 460 км."
    },
    "isCoreLandmark": false
  },
  {
    "id": "m3_tr_san_cristobal",
    "moduleId": "module3",
    "submoduleId": "m3_trenches",
    "category": "trenches",
    "categoryRu": "Глубоководные желоба",
    "difficulty": "Стандартный",
    "name": "Желоб Сан-Кристобаль",
    "aliases": [],
    "region": "Тихий океан",
    "locationDesc": "Тихий океан (макс. глубина 8487 м)",
    "mapPrompt": "Покажите глубоководный желоб: Желоб Сан-Кристобаль",
    "geometryType": "polyline",
    "lat": -11.32,
    "lng": 162.83,
    "hitRadiusKm": 180,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        -10,
        161
      ],
      [
        -11.32,
        162.83
      ],
      [
        -12.5,
        164
      ]
    ],
    "flowStyle": {
      "hasDirection": false,
      "tempType": "trench"
    },
    "badgeColor": "indigo",
    "maxDepthM": 8487,
    "lengthKm": 605,
    "meanWidthKm": 28,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите наибольшую глубину, протяжённость и океан для: Желоб Сан-Кристобаль",
      "backMainAnswer": "8487 м • длина 605 км (Тихий океан)",
      "backMetrics": [
        {
          "label": "Океан",
          "value": "Тихий океан"
        },
        {
          "label": "Наибольшая глубина",
          "value": "8487 м"
        },
        {
          "label": "Протяжённость",
          "value": "605 км"
        },
        {
          "label": "Средняя ширина",
          "value": "28 км"
        },
        {
          "label": "Координаты макс. глубины",
          "value": "-11.32°, 162.83°"
        }
      ],
      "backNote": "Желоб Желоб Сан-Кристобаль: максимальная глубина 8487 м, протяжённость 605 км."
    },
    "isCoreLandmark": false
  },
  {
    "id": "m3_tr_japan_trench",
    "moduleId": "module3",
    "submoduleId": "m3_trenches",
    "category": "trenches",
    "categoryRu": "Глубоководные желоба",
    "difficulty": "Стандартный",
    "name": "Японский желоб",
    "aliases": [],
    "region": "Тихий океан",
    "locationDesc": "Тихий океан (макс. глубина 8412 м)",
    "mapPrompt": "Покажите глубоководный желоб: Японский желоб",
    "geometryType": "polyline",
    "lat": 36.07,
    "lng": 142.68,
    "hitRadiusKm": 180,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        34,
        142
      ],
      [
        36.07,
        142.68
      ],
      [
        40,
        144
      ]
    ],
    "flowStyle": {
      "hasDirection": false,
      "tempType": "trench"
    },
    "badgeColor": "indigo",
    "maxDepthM": 8412,
    "lengthKm": 680,
    "meanWidthKm": 59,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите наибольшую глубину, протяжённость и океан для: Японский желоб",
      "backMainAnswer": "8412 м • длина 680 км (Тихий океан)",
      "backMetrics": [
        {
          "label": "Океан",
          "value": "Тихий океан"
        },
        {
          "label": "Наибольшая глубина",
          "value": "8412 м"
        },
        {
          "label": "Протяжённость",
          "value": "680 км"
        },
        {
          "label": "Средняя ширина",
          "value": "59 км"
        },
        {
          "label": "Координаты макс. глубины",
          "value": "36.07°, 142.68°"
        }
      ],
      "backNote": "Желоб Японский желоб: максимальная глубина 8412 м, протяжённость 680 км."
    },
    "isCoreLandmark": true
  },
  {
    "id": "m3_tr_new_britain",
    "moduleId": "module3",
    "submoduleId": "m3_trenches",
    "category": "trenches",
    "categoryRu": "Глубоководные желоба",
    "difficulty": "Стандартный",
    "name": "Новобританский желоб",
    "aliases": [],
    "region": "Тихий океан",
    "locationDesc": "Тихий океан (макс. глубина 8320 м)",
    "mapPrompt": "Покажите глубоководный желоб: Новобританский желоб",
    "geometryType": "polyline",
    "lat": -5.87,
    "lng": 152.37,
    "hitRadiusKm": 180,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        -5,
        151
      ],
      [
        -5.87,
        152.37
      ],
      [
        -6.5,
        154
      ]
    ],
    "flowStyle": {
      "hasDirection": false,
      "tempType": "trench"
    },
    "badgeColor": "indigo",
    "maxDepthM": 8320,
    "lengthKm": 510,
    "meanWidthKm": 25,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите наибольшую глубину, протяжённость и океан для: Новобританский желоб",
      "backMainAnswer": "8320 м • длина 510 км (Тихий океан)",
      "backMetrics": [
        {
          "label": "Океан",
          "value": "Тихий океан"
        },
        {
          "label": "Наибольшая глубина",
          "value": "8320 м"
        },
        {
          "label": "Протяжённость",
          "value": "510 км"
        },
        {
          "label": "Средняя ширина",
          "value": "25 км"
        },
        {
          "label": "Координаты макс. глубины",
          "value": "-5.87°, 152.37°"
        }
      ],
      "backNote": "Желоб Новобританский желоб: максимальная глубина 8320 м, протяжённость 510 км."
    },
    "isCoreLandmark": false
  },
  {
    "id": "m3_tr_chile_trench",
    "moduleId": "module3",
    "submoduleId": "m3_trenches",
    "category": "trenches",
    "categoryRu": "Глубоководные желоба",
    "difficulty": "Стандартный",
    "name": "Чилийский желоб (Атакамский)",
    "aliases": [
      "Атакамский желоб"
    ],
    "region": "Тихий океан",
    "locationDesc": "Тихий океан (макс. глубина 8180 м)",
    "mapPrompt": "Покажите глубоководный желоб: Чилийский желоб (Атакамский)",
    "geometryType": "polyline",
    "lat": -23.47,
    "lng": -71.35,
    "hitRadiusKm": 180,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        -18,
        -71
      ],
      [
        -23.47,
        -71.35
      ],
      [
        -30,
        -72
      ],
      [
        -38,
        -74
      ]
    ],
    "flowStyle": {
      "hasDirection": false,
      "tempType": "trench"
    },
    "badgeColor": "indigo",
    "maxDepthM": 8180,
    "lengthKm": 2690,
    "meanWidthKm": 64,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите наибольшую глубину, протяжённость и океан для: Чилийский желоб (Атакамский)",
      "backMainAnswer": "8180 м • длина 2690 км (Тихий океан)",
      "backMetrics": [
        {
          "label": "Океан",
          "value": "Тихий океан"
        },
        {
          "label": "Наибольшая глубина",
          "value": "8180 м"
        },
        {
          "label": "Протяжённость",
          "value": "2690 км"
        },
        {
          "label": "Средняя ширина",
          "value": "64 км"
        },
        {
          "label": "Координаты макс. глубины",
          "value": "-23.47°, -71.35°"
        }
      ],
      "backNote": "Желоб Чилийский желоб (Атакамский): максимальная глубина 8180 м, протяжённость 2690 км."
    },
    "isCoreLandmark": true
  },
  {
    "id": "m3_tr_palau_trench",
    "moduleId": "module3",
    "submoduleId": "m3_trenches",
    "category": "trenches",
    "categoryRu": "Глубоководные желоба",
    "difficulty": "Стандартный",
    "name": "Желоб Палау",
    "aliases": [],
    "region": "Тихий океан",
    "locationDesc": "Тихий океан (макс. глубина 8138 м)",
    "mapPrompt": "Покажите глубоководный желоб: Желоб Палау",
    "geometryType": "polyline",
    "lat": 7.68,
    "lng": 135.07,
    "hitRadiusKm": 180,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        6.5,
        134.5
      ],
      [
        7.68,
        135.07
      ],
      [
        8.5,
        135.5
      ]
    ],
    "flowStyle": {
      "hasDirection": false,
      "tempType": "trench"
    },
    "badgeColor": "indigo",
    "maxDepthM": 8138,
    "lengthKm": 350,
    "meanWidthKm": 86,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите наибольшую глубину, протяжённость и океан для: Желоб Палау",
      "backMainAnswer": "8138 м • длина 350 км (Тихий океан)",
      "backMetrics": [
        {
          "label": "Океан",
          "value": "Тихий океан"
        },
        {
          "label": "Наибольшая глубина",
          "value": "8138 м"
        },
        {
          "label": "Протяжённость",
          "value": "350 км"
        },
        {
          "label": "Средняя ширина",
          "value": "86 км"
        },
        {
          "label": "Координаты макс. глубины",
          "value": "7.68°, 135.07°"
        }
      ],
      "backNote": "Желоб Желоб Палау: максимальная глубина 8138 м, протяжённость 350 км."
    },
    "isCoreLandmark": false
  },
  {
    "id": "m3_tr_aleutian_trench",
    "moduleId": "module3",
    "submoduleId": "m3_trenches",
    "category": "trenches",
    "categoryRu": "Глубоководные желоба",
    "difficulty": "Стандартный",
    "name": "Алеутский желоб",
    "aliases": [
      "Алеутский"
    ],
    "region": "Тихий океан",
    "locationDesc": "Тихий океан (макс. глубина 7855 м)",
    "mapPrompt": "Покажите глубоководный желоб: Алеутский желоб",
    "geometryType": "polyline",
    "lat": 51.57,
    "lng": 173.3,
    "hitRadiusKm": 180,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        52,
        -170
      ],
      [
        51.57,
        173.3
      ],
      [
        52.5,
        165
      ]
    ],
    "flowStyle": {
      "hasDirection": false,
      "tempType": "trench"
    },
    "badgeColor": "indigo",
    "maxDepthM": 7855,
    "lengthKm": 3570,
    "meanWidthKm": 64,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите наибольшую глубину, протяжённость и океан для: Алеутский желоб",
      "backMainAnswer": "7855 м • длина 3570 км (Тихий океан)",
      "backMetrics": [
        {
          "label": "Океан",
          "value": "Тихий океан"
        },
        {
          "label": "Наибольшая глубина",
          "value": "7855 м"
        },
        {
          "label": "Протяжённость",
          "value": "3570 км"
        },
        {
          "label": "Средняя ширина",
          "value": "64 км"
        },
        {
          "label": "Координаты макс. глубины",
          "value": "51.57°, 173.30°"
        }
      ],
      "backNote": "Желоб Алеутский желоб: максимальная глубина 7855 м, протяжённость 3570 км."
    },
    "isCoreLandmark": true
  },
  {
    "id": "m3_tr_ryukyu_trench",
    "moduleId": "module3",
    "submoduleId": "m3_trenches",
    "category": "trenches",
    "categoryRu": "Глубоководные желоба",
    "difficulty": "Стандартный",
    "name": "Желоб Рюкю (Нансей)",
    "aliases": [
      "Нансей"
    ],
    "region": "Тихий океан",
    "locationDesc": "Тихий океан (макс. глубина 7790 м)",
    "mapPrompt": "Покажите глубоководный желоб: Желоб Рюкю (Нансей)",
    "geometryType": "polyline",
    "lat": 24.48,
    "lng": 127.33,
    "hitRadiusKm": 180,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        23,
        125
      ],
      [
        24.48,
        127.33
      ],
      [
        28,
        130
      ]
    ],
    "flowStyle": {
      "hasDirection": false,
      "tempType": "trench"
    },
    "badgeColor": "indigo",
    "maxDepthM": 7790,
    "lengthKm": 603,
    "meanWidthKm": 38,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите наибольшую глубину, протяжённость и океан для: Желоб Рюкю (Нансей)",
      "backMainAnswer": "7790 м • длина 603 км (Тихий океан)",
      "backMetrics": [
        {
          "label": "Океан",
          "value": "Тихий океан"
        },
        {
          "label": "Наибольшая глубина",
          "value": "7790 м"
        },
        {
          "label": "Протяжённость",
          "value": "603 км"
        },
        {
          "label": "Средняя ширина",
          "value": "38 км"
        },
        {
          "label": "Координаты макс. глубины",
          "value": "24.48°, 127.33°"
        }
      ],
      "backNote": "Желоб Желоб Рюкю (Нансей): максимальная глубина 7790 м, протяжённость 603 км."
    },
    "isCoreLandmark": false
  },
  {
    "id": "m3_tr_new_hebrides",
    "moduleId": "module3",
    "submoduleId": "m3_trenches",
    "category": "trenches",
    "categoryRu": "Глубоководные желоба",
    "difficulty": "Стандартный",
    "name": "Новогебридский желоб",
    "aliases": [],
    "region": "Тихий океан",
    "locationDesc": "Тихий океан (макс. глубина 7633 м)",
    "mapPrompt": "Покажите глубоководный желоб: Новогебридский желоб",
    "geometryType": "polyline",
    "lat": -22.33,
    "lng": 169.9,
    "hitRadiusKm": 180,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        -16,
        167
      ],
      [
        -22.33,
        169.9
      ],
      [
        -24,
        170.5
      ]
    ],
    "flowStyle": {
      "hasDirection": false,
      "tempType": "trench"
    },
    "badgeColor": "indigo",
    "maxDepthM": 7633,
    "lengthKm": 870,
    "meanWidthKm": 29,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите наибольшую глубину, протяжённость и океан для: Новогебридский желоб",
      "backMainAnswer": "7633 м • длина 870 км (Тихий океан)",
      "backMetrics": [
        {
          "label": "Океан",
          "value": "Тихий океан"
        },
        {
          "label": "Наибольшая глубина",
          "value": "7633 м"
        },
        {
          "label": "Протяжённость",
          "value": "870 км"
        },
        {
          "label": "Средняя ширина",
          "value": "29 км"
        },
        {
          "label": "Координаты макс. глубины",
          "value": "-22.33°, 169.90°"
        }
      ],
      "backNote": "Желоб Новогебридский желоб: максимальная глубина 7633 м, протяжённость 870 км."
    },
    "isCoreLandmark": false
  },
  {
    "id": "m3_tr_weber_deep",
    "moduleId": "module3",
    "submoduleId": "m3_trenches",
    "category": "trenches",
    "categoryRu": "Глубоководные желоба",
    "difficulty": "Стандартный",
    "name": "Впадина Вебер (желоб Банда)",
    "aliases": [
      "впадина Вебера"
    ],
    "region": "Тихий океан",
    "locationDesc": "Тихий океан (макс. глубина 7440 м)",
    "mapPrompt": "Покажите глубоководный желоб: Впадина Вебер (желоб Банда)",
    "geometryType": "polyline",
    "lat": -5.58,
    "lng": 130.83,
    "hitRadiusKm": 180,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        -5,
        130
      ],
      [
        -5.58,
        130.83
      ],
      [
        -6,
        131.5
      ]
    ],
    "flowStyle": {
      "hasDirection": false,
      "tempType": "trench"
    },
    "badgeColor": "indigo",
    "maxDepthM": 7440,
    "lengthKm": 430,
    "meanWidthKm": 126,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите наибольшую глубину, протяжённость и океан для: Впадина Вебер (желоб Банда)",
      "backMainAnswer": "7440 м • длина 430 км (Тихий океан)",
      "backMetrics": [
        {
          "label": "Океан",
          "value": "Тихий океан"
        },
        {
          "label": "Наибольшая глубина",
          "value": "7440 м"
        },
        {
          "label": "Протяжённость",
          "value": "430 км"
        },
        {
          "label": "Средняя ширина",
          "value": "126 км"
        },
        {
          "label": "Координаты макс. глубины",
          "value": "-5.58°, 130.83°"
        }
      ],
      "backNote": "Желоб Впадина Вебер (желоб Банда): максимальная глубина 7440 м, протяжённость 430 км."
    },
    "isCoreLandmark": false
  },
  {
    "id": "m3_tr_west_melanesian",
    "moduleId": "module3",
    "submoduleId": "m3_trenches",
    "category": "trenches",
    "categoryRu": "Глубоководные желоба",
    "difficulty": "Стандартный",
    "name": "Западно-Меланезийский желоб",
    "aliases": [],
    "region": "Тихий океан",
    "locationDesc": "Тихий океан (макс. глубина 7030 м)",
    "mapPrompt": "Покажите глубоководный желоб: Западно-Меланезийский желоб",
    "geometryType": "polyline",
    "lat": -0.47,
    "lng": 149.32,
    "hitRadiusKm": 180,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        -0.2,
        147
      ],
      [
        -0.47,
        149.32
      ],
      [
        -1,
        151
      ]
    ],
    "flowStyle": {
      "hasDirection": false,
      "tempType": "trench"
    },
    "badgeColor": "indigo",
    "maxDepthM": 7030,
    "lengthKm": 800,
    "meanWidthKm": 40,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите наибольшую глубину, протяжённость и океан для: Западно-Меланезийский желоб",
      "backMainAnswer": "7030 м • длина 800 км (Тихий океан)",
      "backMetrics": [
        {
          "label": "Океан",
          "value": "Тихий океан"
        },
        {
          "label": "Наибольшая глубина",
          "value": "7030 м"
        },
        {
          "label": "Протяжённость",
          "value": "800 км"
        },
        {
          "label": "Средняя ширина",
          "value": "40 км"
        },
        {
          "label": "Координаты макс. глубины",
          "value": "-0.47°, 149.32°"
        }
      ],
      "backNote": "Желоб Западно-Меланезийский желоб: максимальная глубина 7030 м, протяжённость 800 км."
    },
    "isCoreLandmark": false
  },
  {
    "id": "m3_tr_peru_trench",
    "moduleId": "module3",
    "submoduleId": "m3_trenches",
    "category": "trenches",
    "categoryRu": "Глубоководные желоба",
    "difficulty": "Стандартный",
    "name": "Перуанский желоб",
    "aliases": [],
    "region": "Тихий океан",
    "locationDesc": "Тихий океан (макс. глубина 6601 м)",
    "mapPrompt": "Покажите глубоководный желоб: Перуанский желоб",
    "geometryType": "polyline",
    "lat": -11.17,
    "lng": -79.6,
    "hitRadiusKm": 180,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        -6,
        -81
      ],
      [
        -11.17,
        -79.6
      ],
      [
        -15,
        -76
      ]
    ],
    "flowStyle": {
      "hasDirection": false,
      "tempType": "trench"
    },
    "badgeColor": "indigo",
    "maxDepthM": 6601,
    "lengthKm": 1340,
    "meanWidthKm": 61,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите наибольшую глубину, протяжённость и океан для: Перуанский желоб",
      "backMainAnswer": "6601 м • длина 1340 км (Тихий океан)",
      "backMetrics": [
        {
          "label": "Океан",
          "value": "Тихий океан"
        },
        {
          "label": "Наибольшая глубина",
          "value": "6601 м"
        },
        {
          "label": "Протяжённость",
          "value": "1340 км"
        },
        {
          "label": "Средняя ширина",
          "value": "61 км"
        },
        {
          "label": "Координаты макс. глубины",
          "value": "-11.17°, -79.60°"
        }
      ],
      "backNote": "Желоб Перуанский желоб: максимальная глубина 6601 м, протяжённость 1340 км."
    },
    "isCoreLandmark": true
  },
  {
    "id": "m3_tr_middle_america",
    "moduleId": "module3",
    "submoduleId": "m3_trenches",
    "category": "trenches",
    "categoryRu": "Глубоководные желоба",
    "difficulty": "Стандартный",
    "name": "Центральноамериканский желоб",
    "aliases": [],
    "region": "Тихий океан",
    "locationDesc": "Тихий океан (макс. глубина 6639 м)",
    "mapPrompt": "Покажите глубоководный желоб: Центральноамериканский желоб",
    "geometryType": "polyline",
    "lat": 14.45,
    "lng": -94.42,
    "hitRadiusKm": 180,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        18,
        -104
      ],
      [
        14.45,
        -94.42
      ],
      [
        10,
        -86
      ]
    ],
    "flowStyle": {
      "hasDirection": false,
      "tempType": "trench"
    },
    "badgeColor": "indigo",
    "maxDepthM": 6639,
    "lengthKm": 2530,
    "meanWidthKm": 34,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите наибольшую глубину, протяжённость и океан для: Центральноамериканский желоб",
      "backMainAnswer": "6639 м • длина 2530 км (Тихий океан)",
      "backMetrics": [
        {
          "label": "Океан",
          "value": "Тихий океан"
        },
        {
          "label": "Наибольшая глубина",
          "value": "6639 м"
        },
        {
          "label": "Протяжённость",
          "value": "2530 км"
        },
        {
          "label": "Средняя ширина",
          "value": "34 км"
        },
        {
          "label": "Координаты макс. глубины",
          "value": "14.45°, -94.42°"
        }
      ],
      "backNote": "Желоб Центральноамериканский желоб: максимальная глубина 6639 м, протяжённость 2530 км."
    },
    "isCoreLandmark": false
  },
  {
    "id": "m3_tr_vityaz_trench",
    "moduleId": "module3",
    "submoduleId": "m3_trenches",
    "category": "trenches",
    "categoryRu": "Глубоководные желоба",
    "difficulty": "Стандартный",
    "name": "Желоб Витязя (Восточно-Меланезийский)",
    "aliases": [],
    "region": "Тихий океан",
    "locationDesc": "Тихий океан (макс. глубина 6150 м)",
    "mapPrompt": "Покажите глубоководный желоб: Желоб Витязя (Восточно-Меланезийский)",
    "geometryType": "polyline",
    "lat": -10.45,
    "lng": 170.28,
    "hitRadiusKm": 180,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        -9,
        168
      ],
      [
        -10.45,
        170.28
      ],
      [
        -12,
        172
      ]
    ],
    "flowStyle": {
      "hasDirection": false,
      "tempType": "trench"
    },
    "badgeColor": "indigo",
    "maxDepthM": 6150,
    "lengthKm": 870,
    "meanWidthKm": 11,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите наибольшую глубину, протяжённость и океан для: Желоб Витязя (Восточно-Меланезийский)",
      "backMainAnswer": "6150 м • длина 870 км (Тихий океан)",
      "backMetrics": [
        {
          "label": "Океан",
          "value": "Тихий океан"
        },
        {
          "label": "Наибольшая глубина",
          "value": "6150 м"
        },
        {
          "label": "Протяжённость",
          "value": "870 км"
        },
        {
          "label": "Средняя ширина",
          "value": "11 км"
        },
        {
          "label": "Координаты макс. глубины",
          "value": "-10.45°, 170.28°"
        }
      ],
      "backNote": "Желоб Желоб Витязя (Восточно-Меланезийский): максимальная глубина 6150 м, протяжённость 870 км."
    },
    "isCoreLandmark": false
  },
  {
    "id": "m3_tr_new_guinea_trench",
    "moduleId": "module3",
    "submoduleId": "m3_trenches",
    "category": "trenches",
    "categoryRu": "Глубоководные желоба",
    "difficulty": "Стандартный",
    "name": "Новогвинейский желоб",
    "aliases": [],
    "region": "Тихий океан",
    "locationDesc": "Тихий океан (макс. глубина 5310 м)",
    "mapPrompt": "Покажите глубоководный желоб: Новогвинейский желоб",
    "geometryType": "polyline",
    "lat": 0.23,
    "lng": 135.3,
    "hitRadiusKm": 180,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        -0.5,
        133
      ],
      [
        0.23,
        135.3
      ],
      [
        1,
        137
      ]
    ],
    "flowStyle": {
      "hasDirection": false,
      "tempType": "trench"
    },
    "badgeColor": "indigo",
    "maxDepthM": 5310,
    "lengthKm": 600,
    "meanWidthKm": 30,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите наибольшую глубину, протяжённость и океан для: Новогвинейский желоб",
      "backMainAnswer": "5310 м • длина 600 км (Тихий океан)",
      "backMetrics": [
        {
          "label": "Океан",
          "value": "Тихий океан"
        },
        {
          "label": "Наибольшая глубина",
          "value": "5310 м"
        },
        {
          "label": "Протяжённость",
          "value": "600 км"
        },
        {
          "label": "Средняя ширина",
          "value": "30 км"
        },
        {
          "label": "Координаты макс. глубины",
          "value": "0.23°, 135.30°"
        }
      ],
      "backNote": "Желоб Новогвинейский желоб: максимальная глубина 5310 м, протяжённость 600 км."
    },
    "isCoreLandmark": true
  },
  {
    "id": "m3_tr_litke_deep",
    "moduleId": "module3",
    "submoduleId": "m3_trenches",
    "category": "trenches",
    "categoryRu": "Глубоководные желоба",
    "difficulty": "Стандартный",
    "name": "Ущелье Литке (желоб Литке)",
    "aliases": [
      "Бездна Литке"
    ],
    "region": "Северный Ледовитый океан",
    "locationDesc": "Северный Ледовитый океан (макс. глубина 5449 м)",
    "mapPrompt": "Покажите глубоководный желоб: Ущелье Литке (желоб Литке)",
    "geometryType": "polyline",
    "lat": 82.35,
    "lng": 19.52,
    "hitRadiusKm": 180,
    "crossTrackBufferKm": 130,
    "coords": [
      [
        82,
        18
      ],
      [
        82.35,
        19.52
      ],
      [
        82.8,
        22
      ]
    ],
    "flowStyle": {
      "hasDirection": false,
      "tempType": "trench"
    },
    "badgeColor": "indigo",
    "maxDepthM": 5449,
    "lengthKm": 300,
    "meanWidthKm": 20,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите наибольшую глубину, протяжённость и океан для: Ущелье Литке (желоб Литке)",
      "backMainAnswer": "5449 м • длина 300 км (Северный Ледовитый океан)",
      "backMetrics": [
        {
          "label": "Океан",
          "value": "Северный Ледовитый океан"
        },
        {
          "label": "Наибольшая глубина",
          "value": "5449 м"
        },
        {
          "label": "Протяжённость",
          "value": "300 км"
        },
        {
          "label": "Средняя ширина",
          "value": "20 км"
        },
        {
          "label": "Координаты макс. глубины",
          "value": "82.35°, 19.52°"
        }
      ],
      "backNote": "Желоб Ущелье Литке (желоб Литке): максимальная глубина 5449 м, протяжённость 300 км."
    },
    "isCoreLandmark": true
  },
  {
    "id": "m3_cur_aleutian_cur",
    "moduleId": "module3",
    "submoduleId": "m3_currents_pacific",
    "category": "currents",
    "categoryRu": "Течения (Нейтральное)",
    "difficulty": "Стандартный",
    "name": "Алеутское течение",
    "aliases": [],
    "region": "Тихий океан",
    "locationDesc": "Тихий океан (Нейтральное, Сточное, 15 см/с)",
    "mapPrompt": "Покажите течение: Алеутское течение",
    "geometryType": "polyline",
    "lat": 51,
    "lng": 180,
    "hitRadiusKm": 250,
    "crossTrackBufferKm": 140,
    "coords": [
      [
        50,
        165
      ],
      [
        51,
        180
      ],
      [
        51.5,
        -165
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "neutral"
    },
    "badgeColor": "purple",
    "tempGrade": "Н",
    "genesis": "С",
    "velocityCmS": 15,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите температуру (Т/Х/Н), генезис (Д/К/С) и скорость течения: Алеутское течение",
      "backMainAnswer": "Нейтральное • Сточное • 15 см/с",
      "backMetrics": [
        {
          "label": "Океан",
          "value": "Тихий океан"
        },
        {
          "label": "Температурная градация",
          "value": "Н (Нейтральное)"
        },
        {
          "label": "Генезис",
          "value": "С (Сточное)"
        },
        {
          "label": "Средняя скорость",
          "value": "15 см/с"
        }
      ],
      "backNote": "Течение Алеутское течение: Нейтральное, генезис Сточное, скорость 15 см/с."
    },
    "isCoreLandmark": true
  },
  {
    "id": "m3_cur_alaska_cur",
    "moduleId": "module3",
    "submoduleId": "m3_currents_pacific",
    "category": "currents",
    "categoryRu": "Течения (Тёплое)",
    "difficulty": "Стандартный",
    "name": "Аляскинское течение",
    "aliases": [],
    "region": "Тихий океан",
    "locationDesc": "Тихий океан (Тёплое, Сточное, 15 см/с)",
    "mapPrompt": "Покажите течение: Аляскинское течение",
    "geometryType": "polyline",
    "lat": 56,
    "lng": -145,
    "hitRadiusKm": 250,
    "crossTrackBufferKm": 140,
    "coords": [
      [
        52,
        -135
      ],
      [
        56,
        -145
      ],
      [
        58,
        -152
      ],
      [
        55,
        -160
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "warm"
    },
    "badgeColor": "rose",
    "tempGrade": "Т",
    "genesis": "С",
    "velocityCmS": 15,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите температуру (Т/Х/Н), генезис (Д/К/С) и скорость течения: Аляскинское течение",
      "backMainAnswer": "Тёплое • Сточное • 15 см/с",
      "backMetrics": [
        {
          "label": "Океан",
          "value": "Тихий океан"
        },
        {
          "label": "Температурная градация",
          "value": "Т (Тёплое)"
        },
        {
          "label": "Генезис",
          "value": "С (Сточное)"
        },
        {
          "label": "Средняя скорость",
          "value": "15 см/с"
        }
      ],
      "backNote": "Течение Аляскинское течение: Тёплое, генезис Сточное, скорость 15 см/с."
    },
    "isCoreLandmark": true
  },
  {
    "id": "m3_cur_east_australian_cur",
    "moduleId": "module3",
    "submoduleId": "m3_currents_pacific",
    "category": "currents",
    "categoryRu": "Течения (Тёплое)",
    "difficulty": "Стандартный",
    "name": "Восточно-Австралийское течение",
    "aliases": [],
    "region": "Тихий океан",
    "locationDesc": "Тихий океан (Тёплое, Сточное, 20 см/с)",
    "mapPrompt": "Покажите течение: Восточно-Австралийское течение",
    "geometryType": "polyline",
    "lat": -28,
    "lng": 155,
    "hitRadiusKm": 250,
    "crossTrackBufferKm": 140,
    "coords": [
      [
        -15,
        152
      ],
      [
        -25,
        155
      ],
      [
        -35,
        154
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "warm"
    },
    "badgeColor": "rose",
    "tempGrade": "Т",
    "genesis": "С",
    "velocityCmS": 20,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите температуру (Т/Х/Н), генезис (Д/К/С) и скорость течения: Восточно-Австралийское течение",
      "backMainAnswer": "Тёплое • Сточное • 20 см/с",
      "backMetrics": [
        {
          "label": "Океан",
          "value": "Тихий океан"
        },
        {
          "label": "Температурная градация",
          "value": "Т (Тёплое)"
        },
        {
          "label": "Генезис",
          "value": "С (Сточное)"
        },
        {
          "label": "Средняя скорость",
          "value": "20 см/с"
        }
      ],
      "backNote": "Течение Восточно-Австралийское течение: Тёплое, генезис Сточное, скорость 20 см/с."
    },
    "isCoreLandmark": true
  },
  {
    "id": "m3_cur_west_wind_drift_pac",
    "moduleId": "module3",
    "submoduleId": "m3_currents_pacific",
    "category": "currents",
    "categoryRu": "Течения (Холодное)",
    "difficulty": "Стандартный",
    "name": "Течение Западных ветров (Тихий океан)",
    "aliases": [
      "Антарктическое циркумполярное"
    ],
    "region": "Тихий океан",
    "locationDesc": "Тихий океан (Холодное, Дрейфовое (ветровое), 25-75 см/с)",
    "mapPrompt": "Покажите течение: Течение Западных ветров (Тихий океан)",
    "geometryType": "polyline",
    "lat": -52,
    "lng": -140,
    "hitRadiusKm": 250,
    "crossTrackBufferKm": 140,
    "coords": [
      [
        -50,
        160
      ],
      [
        -52,
        -160
      ],
      [
        -54,
        -120
      ],
      [
        -55,
        -80
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "cold"
    },
    "badgeColor": "sky",
    "tempGrade": "Х",
    "genesis": "Д",
    "velocityCmS": "25-75",
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите температуру (Т/Х/Н), генезис (Д/К/С) и скорость течения: Течение Западных ветров (Тихий океан)",
      "backMainAnswer": "Холодное • Дрейфовое (ветровое) • 25-75 см/с",
      "backMetrics": [
        {
          "label": "Океан",
          "value": "Тихий океан"
        },
        {
          "label": "Температурная градация",
          "value": "Х (Холодное)"
        },
        {
          "label": "Генезис",
          "value": "Д (Дрейфовое (ветровое))"
        },
        {
          "label": "Средняя скорость",
          "value": "25-75 см/с"
        }
      ],
      "backNote": "Течение Течение Западных ветров (Тихий океан): Холодное, генезис Дрейфовое (ветровое), скорость 25-75 см/с."
    },
    "isCoreLandmark": true
  },
  {
    "id": "m3_cur_california_cur",
    "moduleId": "module3",
    "submoduleId": "m3_currents_pacific",
    "category": "currents",
    "categoryRu": "Течения (Холодное)",
    "difficulty": "Стандартный",
    "name": "Калифорнийское течение",
    "aliases": [],
    "region": "Тихий океан",
    "locationDesc": "Тихий океан (Холодное, Компенсационное, 12 см/с)",
    "mapPrompt": "Покажите течение: Калифорнийское течение",
    "geometryType": "polyline",
    "lat": 32,
    "lng": -122,
    "hitRadiusKm": 250,
    "crossTrackBufferKm": 140,
    "coords": [
      [
        42,
        -126
      ],
      [
        35,
        -123
      ],
      [
        25,
        -115
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "cold"
    },
    "badgeColor": "sky",
    "tempGrade": "Х",
    "genesis": "К",
    "velocityCmS": 12,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите температуру (Т/Х/Н), генезис (Д/К/С) и скорость течения: Калифорнийское течение",
      "backMainAnswer": "Холодное • Компенсационное • 12 см/с",
      "backMetrics": [
        {
          "label": "Океан",
          "value": "Тихий океан"
        },
        {
          "label": "Температурная градация",
          "value": "Х (Холодное)"
        },
        {
          "label": "Генезис",
          "value": "К (Компенсационное)"
        },
        {
          "label": "Средняя скорость",
          "value": "12 см/с"
        }
      ],
      "backNote": "Течение Калифорнийское течение: Холодное, генезис Компенсационное, скорость 12 см/с."
    },
    "isCoreLandmark": true
  },
  {
    "id": "m3_cur_oyashio",
    "moduleId": "module3",
    "submoduleId": "m3_currents_pacific",
    "category": "currents",
    "categoryRu": "Течения (Холодное)",
    "difficulty": "Стандартный",
    "name": "Курило-Камчатское течение (Ойясио)",
    "aliases": [
      "Ойясио"
    ],
    "region": "Тихий океан",
    "locationDesc": "Тихий океан (Холодное, Компенсационное, 25 см/с)",
    "mapPrompt": "Покажите течение: Курило-Камчатское течение (Ойясио)",
    "geometryType": "polyline",
    "lat": 46,
    "lng": 152,
    "hitRadiusKm": 250,
    "crossTrackBufferKm": 140,
    "coords": [
      [
        52,
        160
      ],
      [
        47,
        153
      ],
      [
        40,
        144
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "cold"
    },
    "badgeColor": "sky",
    "tempGrade": "Х",
    "genesis": "К",
    "velocityCmS": 25,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите температуру (Т/Х/Н), генезис (Д/К/С) и скорость течения: Курило-Камчатское течение (Ойясио)",
      "backMainAnswer": "Холодное • Компенсационное • 25 см/с",
      "backMetrics": [
        {
          "label": "Океан",
          "value": "Тихий океан"
        },
        {
          "label": "Температурная градация",
          "value": "Х (Холодное)"
        },
        {
          "label": "Генезис",
          "value": "К (Компенсационное)"
        },
        {
          "label": "Средняя скорость",
          "value": "25 см/с"
        }
      ],
      "backNote": "Течение Курило-Камчатское течение (Ойясио): Холодное, генезис Компенсационное, скорость 25 см/с."
    },
    "isCoreLandmark": true
  },
  {
    "id": "m3_cur_kuroshio",
    "moduleId": "module3",
    "submoduleId": "m3_currents_pacific",
    "category": "currents",
    "categoryRu": "Течения (Тёплое)",
    "difficulty": "Стандартный",
    "name": "Куросио",
    "aliases": [
      "Японское течение"
    ],
    "region": "Тихий океан",
    "locationDesc": "Тихий океан (Тёплое, Сточное, 35 см/с)",
    "mapPrompt": "Покажите течение: Куросио",
    "geometryType": "polyline",
    "lat": 30,
    "lng": 135,
    "hitRadiusKm": 250,
    "crossTrackBufferKm": 140,
    "coords": [
      [
        22,
        123
      ],
      [
        28,
        130
      ],
      [
        35,
        142
      ],
      [
        38,
        150
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "warm"
    },
    "badgeColor": "rose",
    "tempGrade": "Т",
    "genesis": "С",
    "velocityCmS": 35,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите температуру (Т/Х/Н), генезис (Д/К/С) и скорость течения: Куросио",
      "backMainAnswer": "Тёплое • Сточное • 35 см/с",
      "backMetrics": [
        {
          "label": "Океан",
          "value": "Тихий океан"
        },
        {
          "label": "Температурная градация",
          "value": "Т (Тёплое)"
        },
        {
          "label": "Генезис",
          "value": "С (Сточное)"
        },
        {
          "label": "Средняя скорость",
          "value": "35 см/с"
        }
      ],
      "backNote": "Течение Куросио: Тёплое, генезис Сточное, скорость 35 см/с."
    },
    "isCoreLandmark": true
  },
  {
    "id": "m3_cur_inter_counter_pac",
    "moduleId": "module3",
    "submoduleId": "m3_currents_pacific",
    "category": "currents",
    "categoryRu": "Течения (Нейтральное)",
    "difficulty": "Стандартный",
    "name": "Межпассатное противотечение (Тихий океан)",
    "aliases": [],
    "region": "Тихий океан",
    "locationDesc": "Тихий океан (Нейтральное, Компенсационное, 50-130 см/с)",
    "mapPrompt": "Покажите течение: Межпассатное противотечение (Тихий океан)",
    "geometryType": "polyline",
    "lat": 6,
    "lng": -140,
    "hitRadiusKm": 250,
    "crossTrackBufferKm": 140,
    "coords": [
      [
        6,
        130
      ],
      [
        6,
        170
      ],
      [
        6,
        -150
      ],
      [
        6,
        -110
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "neutral"
    },
    "badgeColor": "purple",
    "tempGrade": "Н",
    "genesis": "К",
    "velocityCmS": "50-130",
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите температуру (Т/Х/Н), генезис (Д/К/С) и скорость течения: Межпассатное противотечение (Тихий океан)",
      "backMainAnswer": "Нейтральное • Компенсационное • 50-130 см/с",
      "backMetrics": [
        {
          "label": "Океан",
          "value": "Тихий океан"
        },
        {
          "label": "Температурная градация",
          "value": "Н (Нейтральное)"
        },
        {
          "label": "Генезис",
          "value": "К (Компенсационное)"
        },
        {
          "label": "Средняя скорость",
          "value": "50-130 см/с"
        }
      ],
      "backNote": "Течение Межпассатное противотечение (Тихий океан): Нейтральное, генезис Компенсационное, скорость 50-130 см/с."
    },
    "isCoreLandmark": true
  },
  {
    "id": "m3_cur_peru_cur",
    "moduleId": "module3",
    "submoduleId": "m3_currents_pacific",
    "category": "currents",
    "categoryRu": "Течения (Холодное)",
    "difficulty": "Стандартный",
    "name": "Перуанское течение (Гумбольдта)",
    "aliases": [
      "течение Гумбольдта"
    ],
    "region": "Тихий океан",
    "locationDesc": "Тихий океан (Холодное, Компенсационное, 10 см/с)",
    "mapPrompt": "Покажите течение: Перуанское течение (Гумбольдта)",
    "geometryType": "polyline",
    "lat": -20,
    "lng": -75,
    "hitRadiusKm": 250,
    "crossTrackBufferKm": 140,
    "coords": [
      [
        -40,
        -75
      ],
      [
        -30,
        -73
      ],
      [
        -15,
        -77
      ],
      [
        -5,
        -82
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "cold"
    },
    "badgeColor": "sky",
    "tempGrade": "Х",
    "genesis": "К",
    "velocityCmS": 10,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите температуру (Т/Х/Н), генезис (Д/К/С) и скорость течения: Перуанское течение (Гумбольдта)",
      "backMainAnswer": "Холодное • Компенсационное • 10 см/с",
      "backMetrics": [
        {
          "label": "Океан",
          "value": "Тихий океан"
        },
        {
          "label": "Температурная градация",
          "value": "Х (Холодное)"
        },
        {
          "label": "Генезис",
          "value": "К (Компенсационное)"
        },
        {
          "label": "Средняя скорость",
          "value": "10 см/с"
        }
      ],
      "backNote": "Течение Перуанское течение (Гумбольдта): Холодное, генезис Компенсационное, скорость 10 см/с."
    },
    "isCoreLandmark": true
  },
  {
    "id": "m3_cur_north_equatorial_pac",
    "moduleId": "module3",
    "submoduleId": "m3_currents_pacific",
    "category": "currents",
    "categoryRu": "Течения (Нейтральное)",
    "difficulty": "Стандартный",
    "name": "Северное Пассатное течение (Тихий океан)",
    "aliases": [],
    "region": "Тихий океан",
    "locationDesc": "Тихий океан (Нейтральное, Дрейфовое (ветровое), 80 см/с)",
    "mapPrompt": "Покажите течение: Северное Пассатное течение (Тихий океан)",
    "geometryType": "polyline",
    "lat": 12,
    "lng": -150,
    "hitRadiusKm": 250,
    "crossTrackBufferKm": 140,
    "coords": [
      [
        12,
        -100
      ],
      [
        12,
        -140
      ],
      [
        12,
        180
      ],
      [
        12,
        140
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "neutral"
    },
    "badgeColor": "purple",
    "tempGrade": "Н",
    "genesis": "Д",
    "velocityCmS": 80,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите температуру (Т/Х/Н), генезис (Д/К/С) и скорость течения: Северное Пассатное течение (Тихий океан)",
      "backMainAnswer": "Нейтральное • Дрейфовое (ветровое) • 80 см/с",
      "backMetrics": [
        {
          "label": "Океан",
          "value": "Тихий океан"
        },
        {
          "label": "Температурная градация",
          "value": "Н (Нейтральное)"
        },
        {
          "label": "Генезис",
          "value": "Д (Дрейфовое (ветровое))"
        },
        {
          "label": "Средняя скорость",
          "value": "80 см/с"
        }
      ],
      "backNote": "Течение Северное Пассатное течение (Тихий океан): Нейтральное, генезис Дрейфовое (ветровое), скорость 80 см/с."
    },
    "isCoreLandmark": true
  },
  {
    "id": "m3_cur_north_pacific_cur",
    "moduleId": "module3",
    "submoduleId": "m3_currents_pacific",
    "category": "currents",
    "categoryRu": "Течения (Тёплое)",
    "difficulty": "Стандартный",
    "name": "Северо-Тихоокеанское течение",
    "aliases": [],
    "region": "Тихий океан",
    "locationDesc": "Тихий океан (Тёплое, Дрейфовое (ветровое), 35 см/с)",
    "mapPrompt": "Покажите течение: Северо-Тихоокеанское течение",
    "geometryType": "polyline",
    "lat": 40,
    "lng": 175,
    "hitRadiusKm": 250,
    "crossTrackBufferKm": 140,
    "coords": [
      [
        38,
        145
      ],
      [
        40,
        170
      ],
      [
        42,
        -160
      ],
      [
        45,
        -135
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "warm"
    },
    "badgeColor": "rose",
    "tempGrade": "Т",
    "genesis": "Д",
    "velocityCmS": 35,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите температуру (Т/Х/Н), генезис (Д/К/С) и скорость течения: Северо-Тихоокеанское течение",
      "backMainAnswer": "Тёплое • Дрейфовое (ветровое) • 35 см/с",
      "backMetrics": [
        {
          "label": "Океан",
          "value": "Тихий океан"
        },
        {
          "label": "Температурная градация",
          "value": "Т (Тёплое)"
        },
        {
          "label": "Генезис",
          "value": "Д (Дрейфовое (ветровое))"
        },
        {
          "label": "Средняя скорость",
          "value": "35 см/с"
        }
      ],
      "backNote": "Течение Северо-Тихоокеанское течение: Тёплое, генезис Дрейфовое (ветровое), скорость 35 см/с."
    },
    "isCoreLandmark": false
  },
  {
    "id": "m3_cur_el_nino",
    "moduleId": "module3",
    "submoduleId": "m3_currents_pacific",
    "category": "currents",
    "categoryRu": "Течения (Тёплое)",
    "difficulty": "Стандартный",
    "name": "Эль-Ниньо (эпизодическое)",
    "aliases": [
      "El Nino"
    ],
    "region": "Тихий океан",
    "locationDesc": "Тихий океан (Тёплое, Сточное, до 100 см/с)",
    "mapPrompt": "Покажите течение: Эль-Ниньо (эпизодическое)",
    "geometryType": "polyline",
    "lat": -4,
    "lng": -85,
    "hitRadiusKm": 250,
    "crossTrackBufferKm": 140,
    "coords": [
      [
        -1,
        -90
      ],
      [
        -4,
        -85
      ],
      [
        -8,
        -82
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "warm"
    },
    "badgeColor": "rose",
    "tempGrade": "Т",
    "genesis": "С",
    "velocityCmS": "до 100",
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите температуру (Т/Х/Н), генезис (Д/К/С) и скорость течения: Эль-Ниньо (эпизодическое)",
      "backMainAnswer": "Тёплое • Сточное • до 100 см/с",
      "backMetrics": [
        {
          "label": "Океан",
          "value": "Тихий океан"
        },
        {
          "label": "Температурная градация",
          "value": "Т (Тёплое)"
        },
        {
          "label": "Генезис",
          "value": "С (Сточное)"
        },
        {
          "label": "Средняя скорость",
          "value": "до 100 см/с"
        }
      ],
      "backNote": "Течение Эль-Ниньо (эпизодическое): Тёплое, генезис Сточное, скорость до 100 см/с."
    },
    "isCoreLandmark": false
  },
  {
    "id": "m3_cur_south_equatorial_pac",
    "moduleId": "module3",
    "submoduleId": "m3_currents_pacific",
    "category": "currents",
    "categoryRu": "Течения (Нейтральное)",
    "difficulty": "Стандартный",
    "name": "Южное Пассатное течение (Тихий океан)",
    "aliases": [],
    "region": "Тихий океан",
    "locationDesc": "Тихий океан (Нейтральное, Дрейфовое (ветровое), 95 см/с)",
    "mapPrompt": "Покажите течение: Южное Пассатное течение (Тихий океан)",
    "geometryType": "polyline",
    "lat": -8,
    "lng": -140,
    "hitRadiusKm": 250,
    "crossTrackBufferKm": 140,
    "coords": [
      [
        -8,
        -90
      ],
      [
        -8,
        -130
      ],
      [
        -8,
        -170
      ],
      [
        -8,
        160
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "neutral"
    },
    "badgeColor": "purple",
    "tempGrade": "Н",
    "genesis": "Д",
    "velocityCmS": 95,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите температуру (Т/Х/Н), генезис (Д/К/С) и скорость течения: Южное Пассатное течение (Тихий океан)",
      "backMainAnswer": "Нейтральное • Дрейфовое (ветровое) • 95 см/с",
      "backMetrics": [
        {
          "label": "Океан",
          "value": "Тихий океан"
        },
        {
          "label": "Температурная градация",
          "value": "Н (Нейтральное)"
        },
        {
          "label": "Генезис",
          "value": "Д (Дрейфовое (ветровое))"
        },
        {
          "label": "Средняя скорость",
          "value": "95 см/с"
        }
      ],
      "backNote": "Течение Южное Пассатное течение (Тихий океан): Нейтральное, генезис Дрейфовое (ветровое), скорость 95 см/с."
    },
    "isCoreLandmark": true
  },
  {
    "id": "m3_cur_south_pacific_cur",
    "moduleId": "module3",
    "submoduleId": "m3_currents_pacific",
    "category": "currents",
    "categoryRu": "Течения (Нейтральное)",
    "difficulty": "Стандартный",
    "name": "Южно-Тихоокеанское течение",
    "aliases": [],
    "region": "Тихий океан",
    "locationDesc": "Тихий океан (Нейтральное, Дрейфовое (ветровое), 5 см/с)",
    "mapPrompt": "Покажите течение: Южно-Тихоокеанское течение",
    "geometryType": "polyline",
    "lat": -40,
    "lng": -130,
    "hitRadiusKm": 250,
    "crossTrackBufferKm": 140,
    "coords": [
      [
        -40,
        170
      ],
      [
        -42,
        -150
      ],
      [
        -40,
        -110
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "neutral"
    },
    "badgeColor": "purple",
    "tempGrade": "Н",
    "genesis": "Д",
    "velocityCmS": 5,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите температуру (Т/Х/Н), генезис (Д/К/С) и скорость течения: Южно-Тихоокеанское течение",
      "backMainAnswer": "Нейтральное • Дрейфовое (ветровое) • 5 см/с",
      "backMetrics": [
        {
          "label": "Океан",
          "value": "Тихий океан"
        },
        {
          "label": "Температурная градация",
          "value": "Н (Нейтральное)"
        },
        {
          "label": "Генезис",
          "value": "Д (Дрейфовое (ветровое))"
        },
        {
          "label": "Средняя скорость",
          "value": "5 см/с"
        }
      ],
      "backNote": "Течение Южно-Тихоокеанское течение: Нейтральное, генезис Дрейфовое (ветровое), скорость 5 см/с."
    },
    "isCoreLandmark": false
  },
  {
    "id": "m3_cur_antilles_cur",
    "moduleId": "module3",
    "submoduleId": "m3_currents_atlantic",
    "category": "currents",
    "categoryRu": "Течения (Тёплое)",
    "difficulty": "Стандартный",
    "name": "Антильское течение",
    "aliases": [],
    "region": "Атлантический океан",
    "locationDesc": "Атлантический океан (Тёплое, Сточное, 30-50 см/с)",
    "mapPrompt": "Покажите течение: Антильское течение",
    "geometryType": "polyline",
    "lat": 22,
    "lng": -72,
    "hitRadiusKm": 250,
    "crossTrackBufferKm": 140,
    "coords": [
      [
        18,
        -65
      ],
      [
        22,
        -72
      ],
      [
        26,
        -77
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "warm"
    },
    "badgeColor": "rose",
    "tempGrade": "Т",
    "genesis": "С",
    "velocityCmS": "30-50",
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите температуру (Т/Х/Н), генезис (Д/К/С) и скорость течения: Антильское течение",
      "backMainAnswer": "Тёплое • Сточное • 30-50 см/с",
      "backMetrics": [
        {
          "label": "Океан",
          "value": "Атлантический океан"
        },
        {
          "label": "Температурная градация",
          "value": "Т (Тёплое)"
        },
        {
          "label": "Генезис",
          "value": "С (Сточное)"
        },
        {
          "label": "Средняя скорость",
          "value": "30-50 см/с"
        }
      ],
      "backNote": "Течение Антильское течение: Тёплое, генезис Сточное, скорость 30-50 см/с."
    },
    "isCoreLandmark": true
  },
  {
    "id": "m3_cur_benguela_cur",
    "moduleId": "module3",
    "submoduleId": "m3_currents_atlantic",
    "category": "currents",
    "categoryRu": "Течения (Холодное)",
    "difficulty": "Стандартный",
    "name": "Бенгельское течение",
    "aliases": [],
    "region": "Атлантический океан",
    "locationDesc": "Атлантический океан (Холодное, Компенсационное, 25 см/с)",
    "mapPrompt": "Покажите течение: Бенгельское течение",
    "geometryType": "polyline",
    "lat": -22,
    "lng": 10,
    "hitRadiusKm": 250,
    "crossTrackBufferKm": 140,
    "coords": [
      [
        -34,
        18
      ],
      [
        -25,
        12
      ],
      [
        -15,
        8
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "cold"
    },
    "badgeColor": "sky",
    "tempGrade": "Х",
    "genesis": "К",
    "velocityCmS": 25,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите температуру (Т/Х/Н), генезис (Д/К/С) и скорость течения: Бенгельское течение",
      "backMainAnswer": "Холодное • Компенсационное • 25 см/с",
      "backMetrics": [
        {
          "label": "Океан",
          "value": "Атлантический океан"
        },
        {
          "label": "Температурная градация",
          "value": "Х (Холодное)"
        },
        {
          "label": "Генезис",
          "value": "К (Компенсационное)"
        },
        {
          "label": "Средняя скорость",
          "value": "25 см/с"
        }
      ],
      "backNote": "Течение Бенгельское течение: Холодное, генезис Компенсационное, скорость 25 см/с."
    },
    "isCoreLandmark": true
  },
  {
    "id": "m3_cur_brazil_cur",
    "moduleId": "module3",
    "submoduleId": "m3_currents_atlantic",
    "category": "currents",
    "categoryRu": "Течения (Тёплое)",
    "difficulty": "Стандартный",
    "name": "Бразильское течение",
    "aliases": [],
    "region": "Атлантический океан",
    "locationDesc": "Атлантический океан (Тёплое, Сточное, 25 см/с)",
    "mapPrompt": "Покажите течение: Бразильское течение",
    "geometryType": "polyline",
    "lat": -20,
    "lng": -38,
    "hitRadiusKm": 250,
    "crossTrackBufferKm": 140,
    "coords": [
      [
        -10,
        -35
      ],
      [
        -20,
        -38
      ],
      [
        -30,
        -45
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "warm"
    },
    "badgeColor": "rose",
    "tempGrade": "Т",
    "genesis": "С",
    "velocityCmS": 25,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите температуру (Т/Х/Н), генезис (Д/К/С) и скорость течения: Бразильское течение",
      "backMainAnswer": "Тёплое • Сточное • 25 см/с",
      "backMetrics": [
        {
          "label": "Океан",
          "value": "Атлантический океан"
        },
        {
          "label": "Температурная градация",
          "value": "Т (Тёплое)"
        },
        {
          "label": "Генезис",
          "value": "С (Сточное)"
        },
        {
          "label": "Средняя скорость",
          "value": "25 см/с"
        }
      ],
      "backNote": "Течение Бразильское течение: Тёплое, генезис Сточное, скорость 25 см/с."
    },
    "isCoreLandmark": true
  },
  {
    "id": "m3_cur_guiana_cur",
    "moduleId": "module3",
    "submoduleId": "m3_currents_atlantic",
    "category": "currents",
    "categoryRu": "Течения (Тёплое)",
    "difficulty": "Стандартный",
    "name": "Гвианское течение",
    "aliases": [],
    "region": "Атлантический океан",
    "locationDesc": "Атлантический океан (Тёплое, Сточное, 40-60 см/с)",
    "mapPrompt": "Покажите течение: Гвианское течение",
    "geometryType": "polyline",
    "lat": 6,
    "lng": -48,
    "hitRadiusKm": 250,
    "crossTrackBufferKm": 140,
    "coords": [
      [
        2,
        -42
      ],
      [
        6,
        -48
      ],
      [
        11,
        -58
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "warm"
    },
    "badgeColor": "rose",
    "tempGrade": "Т",
    "genesis": "С",
    "velocityCmS": "40-60",
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите температуру (Т/Х/Н), генезис (Д/К/С) и скорость течения: Гвианское течение",
      "backMainAnswer": "Тёплое • Сточное • 40-60 см/с",
      "backMetrics": [
        {
          "label": "Океан",
          "value": "Атлантический океан"
        },
        {
          "label": "Температурная градация",
          "value": "Т (Тёплое)"
        },
        {
          "label": "Генезис",
          "value": "С (Сточное)"
        },
        {
          "label": "Средняя скорость",
          "value": "40-60 см/с"
        }
      ],
      "backNote": "Течение Гвианское течение: Тёплое, генезис Сточное, скорость 40-60 см/с."
    },
    "isCoreLandmark": false
  },
  {
    "id": "m3_cur_guinea_cur",
    "moduleId": "module3",
    "submoduleId": "m3_currents_atlantic",
    "category": "currents",
    "categoryRu": "Течения (Тёплое)",
    "difficulty": "Стандартный",
    "name": "Гвинейское течение",
    "aliases": [],
    "region": "Атлантический океан",
    "locationDesc": "Атлантический океан (Тёплое, Компенсационное, 30-50 см/с)",
    "mapPrompt": "Покажите течение: Гвинейское течение",
    "geometryType": "polyline",
    "lat": 4,
    "lng": -2,
    "hitRadiusKm": 250,
    "crossTrackBufferKm": 140,
    "coords": [
      [
        4,
        -12
      ],
      [
        4,
        -2
      ],
      [
        3,
        6
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "warm"
    },
    "badgeColor": "rose",
    "tempGrade": "Т",
    "genesis": "К",
    "velocityCmS": "30-50",
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите температуру (Т/Х/Н), генезис (Д/К/С) и скорость течения: Гвинейское течение",
      "backMainAnswer": "Тёплое • Компенсационное • 30-50 см/с",
      "backMetrics": [
        {
          "label": "Океан",
          "value": "Атлантический океан"
        },
        {
          "label": "Температурная градация",
          "value": "Т (Тёплое)"
        },
        {
          "label": "Генезис",
          "value": "К (Компенсационное)"
        },
        {
          "label": "Средняя скорость",
          "value": "30-50 см/с"
        }
      ],
      "backNote": "Течение Гвинейское течение: Тёплое, генезис Компенсационное, скорость 30-50 см/с."
    },
    "isCoreLandmark": true
  },
  {
    "id": "m3_cur_gulf_stream",
    "moduleId": "module3",
    "submoduleId": "m3_currents_atlantic",
    "category": "currents",
    "categoryRu": "Течения (Тёплое)",
    "difficulty": "Стандартный",
    "name": "Гольфстрим (в т.ч. Флоридское)",
    "aliases": [
      "Флоридское течение"
    ],
    "region": "Атлантический океан",
    "locationDesc": "Атлантический океан (Тёплое, Сточное, 75 см/с)",
    "mapPrompt": "Покажите течение: Гольфстрим (в т.ч. Флоридское)",
    "geometryType": "polyline",
    "lat": 32,
    "lng": -76,
    "hitRadiusKm": 250,
    "crossTrackBufferKm": 140,
    "coords": [
      [
        25,
        -80
      ],
      [
        30,
        -78
      ],
      [
        35,
        -74
      ],
      [
        39,
        -65
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "warm"
    },
    "badgeColor": "rose",
    "tempGrade": "Т",
    "genesis": "С",
    "velocityCmS": 75,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите температуру (Т/Х/Н), генезис (Д/К/С) и скорость течения: Гольфстрим (в т.ч. Флоридское)",
      "backMainAnswer": "Тёплое • Сточное • 75 см/с",
      "backMetrics": [
        {
          "label": "Океан",
          "value": "Атлантический океан"
        },
        {
          "label": "Температурная градация",
          "value": "Т (Тёплое)"
        },
        {
          "label": "Генезис",
          "value": "С (Сточное)"
        },
        {
          "label": "Средняя скорость",
          "value": "75 см/с"
        }
      ],
      "backNote": "Течение Гольфстрим (в т.ч. Флоридское): Тёплое, генезис Сточное, скорость 75 см/с."
    },
    "isCoreLandmark": true
  },
  {
    "id": "m3_cur_west_wind_drift_atl",
    "moduleId": "module3",
    "submoduleId": "m3_currents_atlantic",
    "category": "currents",
    "categoryRu": "Течения (Холодное)",
    "difficulty": "Стандартный",
    "name": "Течение Западных ветров (Атлантический океан)",
    "aliases": [],
    "region": "Атлантический океан",
    "locationDesc": "Атлантический океан (Холодное, Дрейфовое (ветровое), 25-75 см/с)",
    "mapPrompt": "Покажите течение: Течение Западных ветров (Атлантический океан)",
    "geometryType": "polyline",
    "lat": -52,
    "lng": -15,
    "hitRadiusKm": 250,
    "crossTrackBufferKm": 140,
    "coords": [
      [
        -52,
        -40
      ],
      [
        -52,
        -15
      ],
      [
        -50,
        10
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "cold"
    },
    "badgeColor": "sky",
    "tempGrade": "Х",
    "genesis": "Д",
    "velocityCmS": "25-75",
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите температуру (Т/Х/Н), генезис (Д/К/С) и скорость течения: Течение Западных ветров (Атлантический океан)",
      "backMainAnswer": "Холодное • Дрейфовое (ветровое) • 25-75 см/с",
      "backMetrics": [
        {
          "label": "Океан",
          "value": "Атлантический океан"
        },
        {
          "label": "Температурная градация",
          "value": "Х (Холодное)"
        },
        {
          "label": "Генезис",
          "value": "Д (Дрейфовое (ветровое))"
        },
        {
          "label": "Средняя скорость",
          "value": "25-75 см/с"
        }
      ],
      "backNote": "Течение Течение Западных ветров (Атлантический океан): Холодное, генезис Дрейфовое (ветровое), скорость 25-75 см/с."
    },
    "isCoreLandmark": true
  },
  {
    "id": "m3_cur_irminger_cur",
    "moduleId": "module3",
    "submoduleId": "m3_currents_atlantic",
    "category": "currents",
    "categoryRu": "Течения (Тёплое)",
    "difficulty": "Стандартный",
    "name": "Течение Ирмингера",
    "aliases": [],
    "region": "Атлантический океан",
    "locationDesc": "Атлантический океан (Тёплое, Сточное, 20-30 см/с)",
    "mapPrompt": "Покажите течение: Течение Ирмингера",
    "geometryType": "polyline",
    "lat": 62,
    "lng": -28,
    "hitRadiusKm": 250,
    "crossTrackBufferKm": 140,
    "coords": [
      [
        58,
        -24
      ],
      [
        62,
        -28
      ],
      [
        64,
        -34
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "warm"
    },
    "badgeColor": "rose",
    "tempGrade": "Т",
    "genesis": "С",
    "velocityCmS": "20-30",
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите температуру (Т/Х/Н), генезис (Д/К/С) и скорость течения: Течение Ирмингера",
      "backMainAnswer": "Тёплое • Сточное • 20-30 см/с",
      "backMetrics": [
        {
          "label": "Океан",
          "value": "Атлантический океан"
        },
        {
          "label": "Температурная градация",
          "value": "Т (Тёплое)"
        },
        {
          "label": "Генезис",
          "value": "С (Сточное)"
        },
        {
          "label": "Средняя скорость",
          "value": "20-30 см/с"
        }
      ],
      "backNote": "Течение Течение Ирмингера: Тёплое, генезис Сточное, скорость 20-30 см/с."
    },
    "isCoreLandmark": false
  },
  {
    "id": "m3_cur_canary_cur",
    "moduleId": "module3",
    "submoduleId": "m3_currents_atlantic",
    "category": "currents",
    "categoryRu": "Течения (Холодное)",
    "difficulty": "Стандартный",
    "name": "Канарское течение",
    "aliases": [],
    "region": "Атлантический океан",
    "locationDesc": "Атлантический океан (Холодное, Компенсационное, 50 см/с)",
    "mapPrompt": "Покажите течение: Канарское течение",
    "geometryType": "polyline",
    "lat": 24,
    "lng": -20,
    "hitRadiusKm": 250,
    "crossTrackBufferKm": 140,
    "coords": [
      [
        34,
        -14
      ],
      [
        26,
        -18
      ],
      [
        18,
        -22
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "cold"
    },
    "badgeColor": "sky",
    "tempGrade": "Х",
    "genesis": "К",
    "velocityCmS": 50,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите температуру (Т/Х/Н), генезис (Д/К/С) и скорость течения: Канарское течение",
      "backMainAnswer": "Холодное • Компенсационное • 50 см/с",
      "backMetrics": [
        {
          "label": "Океан",
          "value": "Атлантический океан"
        },
        {
          "label": "Температурная градация",
          "value": "Х (Холодное)"
        },
        {
          "label": "Генезис",
          "value": "К (Компенсационное)"
        },
        {
          "label": "Средняя скорость",
          "value": "50 см/с"
        }
      ],
      "backNote": "Течение Канарское течение: Холодное, генезис Компенсационное, скорость 50 см/с."
    },
    "isCoreLandmark": true
  },
  {
    "id": "m3_cur_labrador_cur",
    "moduleId": "module3",
    "submoduleId": "m3_currents_atlantic",
    "category": "currents",
    "categoryRu": "Течения (Холодное)",
    "difficulty": "Стандартный",
    "name": "Лабрадорское течение",
    "aliases": [],
    "region": "Атлантический океан",
    "locationDesc": "Атлантический океан (Холодное, Компенсационное, 75 см/с)",
    "mapPrompt": "Покажите течение: Лабрадорское течение",
    "geometryType": "polyline",
    "lat": 52,
    "lng": -52,
    "hitRadiusKm": 250,
    "crossTrackBufferKm": 140,
    "coords": [
      [
        60,
        -60
      ],
      [
        53,
        -53
      ],
      [
        44,
        -50
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "cold"
    },
    "badgeColor": "sky",
    "tempGrade": "Х",
    "genesis": "К",
    "velocityCmS": 75,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите температуру (Т/Х/Н), генезис (Д/К/С) и скорость течения: Лабрадорское течение",
      "backMainAnswer": "Холодное • Компенсационное • 75 см/с",
      "backMetrics": [
        {
          "label": "Океан",
          "value": "Атлантический океан"
        },
        {
          "label": "Температурная градация",
          "value": "Х (Холодное)"
        },
        {
          "label": "Генезис",
          "value": "К (Компенсационное)"
        },
        {
          "label": "Средняя скорость",
          "value": "75 см/с"
        }
      ],
      "backNote": "Течение Лабрадорское течение: Холодное, генезис Компенсационное, скорость 75 см/с."
    },
    "isCoreLandmark": true
  },
  {
    "id": "m3_cur_norwegian_cur",
    "moduleId": "module3",
    "submoduleId": "m3_currents_atlantic",
    "category": "currents",
    "categoryRu": "Течения (Тёплое)",
    "difficulty": "Стандартный",
    "name": "Норвежское течение",
    "aliases": [],
    "region": "Атлантический океан",
    "locationDesc": "Атлантический океан (Тёплое, Сточное, 30-40 см/с)",
    "mapPrompt": "Покажите течение: Норвежское течение",
    "geometryType": "polyline",
    "lat": 65,
    "lng": 4,
    "hitRadiusKm": 250,
    "crossTrackBufferKm": 140,
    "coords": [
      [
        61,
        1
      ],
      [
        66,
        6
      ],
      [
        70,
        15
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "warm"
    },
    "badgeColor": "rose",
    "tempGrade": "Т",
    "genesis": "С",
    "velocityCmS": "30-40",
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите температуру (Т/Х/Н), генезис (Д/К/С) и скорость течения: Норвежское течение",
      "backMainAnswer": "Тёплое • Сточное • 30-40 см/с",
      "backMetrics": [
        {
          "label": "Океан",
          "value": "Атлантический океан"
        },
        {
          "label": "Температурная градация",
          "value": "Т (Тёплое)"
        },
        {
          "label": "Генезис",
          "value": "С (Сточное)"
        },
        {
          "label": "Средняя скорость",
          "value": "30-40 см/с"
        }
      ],
      "backNote": "Течение Норвежское течение: Тёплое, генезис Сточное, скорость 30-40 см/с."
    },
    "isCoreLandmark": true
  },
  {
    "id": "m3_cur_north_atlantic_cur",
    "moduleId": "module3",
    "submoduleId": "m3_currents_atlantic",
    "category": "currents",
    "categoryRu": "Течения (Тёплое)",
    "difficulty": "Стандартный",
    "name": "Северо-Атлантическое течение",
    "aliases": [],
    "region": "Атлантический океан",
    "locationDesc": "Атлантический океан (Тёплое, Дрейфовое (ветровое), 50 см/с)",
    "mapPrompt": "Покажите течение: Северо-Атлантическое течение",
    "geometryType": "polyline",
    "lat": 48,
    "lng": -30,
    "hitRadiusKm": 250,
    "crossTrackBufferKm": 140,
    "coords": [
      [
        40,
        -50
      ],
      [
        46,
        -35
      ],
      [
        52,
        -20
      ],
      [
        56,
        -10
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "warm"
    },
    "badgeColor": "rose",
    "tempGrade": "Т",
    "genesis": "Д",
    "velocityCmS": 50,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите температуру (Т/Х/Н), генезис (Д/К/С) и скорость течения: Северо-Атлантическое течение",
      "backMainAnswer": "Тёплое • Дрейфовое (ветровое) • 50 см/с",
      "backMetrics": [
        {
          "label": "Океан",
          "value": "Атлантический океан"
        },
        {
          "label": "Температурная градация",
          "value": "Т (Тёплое)"
        },
        {
          "label": "Генезис",
          "value": "Д (Дрейфовое (ветровое))"
        },
        {
          "label": "Средняя скорость",
          "value": "50 см/с"
        }
      ],
      "backNote": "Течение Северо-Атлантическое течение: Тёплое, генезис Дрейфовое (ветровое), скорость 50 см/с."
    },
    "isCoreLandmark": true
  },
  {
    "id": "m3_cur_north_equatorial_atl",
    "moduleId": "module3",
    "submoduleId": "m3_currents_atlantic",
    "category": "currents",
    "categoryRu": "Течения (Нейтральное)",
    "difficulty": "Стандартный",
    "name": "Северное Пассатное течение (Атлантика)",
    "aliases": [],
    "region": "Атлантический океан",
    "locationDesc": "Атлантический океан (Нейтральное, Дрейфовое (ветровое), 25 см/с)",
    "mapPrompt": "Покажите течение: Северное Пассатное течение (Атлантика)",
    "geometryType": "polyline",
    "lat": 14,
    "lng": -35,
    "hitRadiusKm": 250,
    "crossTrackBufferKm": 140,
    "coords": [
      [
        14,
        -20
      ],
      [
        14,
        -35
      ],
      [
        14,
        -50
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "neutral"
    },
    "badgeColor": "purple",
    "tempGrade": "Н",
    "genesis": "Д",
    "velocityCmS": 25,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите температуру (Т/Х/Н), генезис (Д/К/С) и скорость течения: Северное Пассатное течение (Атлантика)",
      "backMainAnswer": "Нейтральное • Дрейфовое (ветровое) • 25 см/с",
      "backMetrics": [
        {
          "label": "Океан",
          "value": "Атлантический океан"
        },
        {
          "label": "Температурная градация",
          "value": "Н (Нейтральное)"
        },
        {
          "label": "Генезис",
          "value": "Д (Дрейфовое (ветровое))"
        },
        {
          "label": "Средняя скорость",
          "value": "25 см/с"
        }
      ],
      "backNote": "Течение Северное Пассатное течение (Атлантика): Нейтральное, генезис Дрейфовое (ветровое), скорость 25 см/с."
    },
    "isCoreLandmark": true
  },
  {
    "id": "m3_cur_falkland_cur",
    "moduleId": "module3",
    "submoduleId": "m3_currents_atlantic",
    "category": "currents",
    "categoryRu": "Течения (Холодное)",
    "difficulty": "Стандартный",
    "name": "Фолклендское течение (Мальвинское)",
    "aliases": [
      "Мальвинское течение"
    ],
    "region": "Атлантический океан",
    "locationDesc": "Атлантический океан (Холодное, Компенсационное, 30-50 см/с)",
    "mapPrompt": "Покажите течение: Фолклендское течение (Мальвинское)",
    "geometryType": "polyline",
    "lat": -48,
    "lng": -58,
    "hitRadiusKm": 250,
    "crossTrackBufferKm": 140,
    "coords": [
      [
        -54,
        -60
      ],
      [
        -48,
        -58
      ],
      [
        -40,
        -54
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "cold"
    },
    "badgeColor": "sky",
    "tempGrade": "Х",
    "genesis": "К",
    "velocityCmS": "30-50",
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите температуру (Т/Х/Н), генезис (Д/К/С) и скорость течения: Фолклендское течение (Мальвинское)",
      "backMainAnswer": "Холодное • Компенсационное • 30-50 см/с",
      "backMetrics": [
        {
          "label": "Океан",
          "value": "Атлантический океан"
        },
        {
          "label": "Температурная градация",
          "value": "Х (Холодное)"
        },
        {
          "label": "Генезис",
          "value": "К (Компенсационное)"
        },
        {
          "label": "Средняя скорость",
          "value": "30-50 см/с"
        }
      ],
      "backNote": "Течение Фолклендское течение (Мальвинское): Холодное, генезис Компенсационное, скорость 30-50 см/с."
    },
    "isCoreLandmark": false
  },
  {
    "id": "m3_cur_inter_counter_atl",
    "moduleId": "module3",
    "submoduleId": "m3_currents_atlantic",
    "category": "currents",
    "categoryRu": "Течения (Нейтральное)",
    "difficulty": "Стандартный",
    "name": "Межпассатное противотечение (Атлантика)",
    "aliases": [],
    "region": "Атлантический океан",
    "locationDesc": "Атлантический океан (Нейтральное, Компенсационное, 75 см/с)",
    "mapPrompt": "Покажите течение: Межпассатное противотечение (Атлантика)",
    "geometryType": "polyline",
    "lat": 6,
    "lng": -25,
    "hitRadiusKm": 250,
    "crossTrackBufferKm": 140,
    "coords": [
      [
        6,
        -40
      ],
      [
        6,
        -25
      ],
      [
        5,
        -10
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "neutral"
    },
    "badgeColor": "purple",
    "tempGrade": "Н",
    "genesis": "К",
    "velocityCmS": 75,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите температуру (Т/Х/Н), генезис (Д/К/С) и скорость течения: Межпассатное противотечение (Атлантика)",
      "backMainAnswer": "Нейтральное • Компенсационное • 75 см/с",
      "backMetrics": [
        {
          "label": "Океан",
          "value": "Атлантический океан"
        },
        {
          "label": "Температурная градация",
          "value": "Н (Нейтральное)"
        },
        {
          "label": "Генезис",
          "value": "К (Компенсационное)"
        },
        {
          "label": "Средняя скорость",
          "value": "75 см/с"
        }
      ],
      "backNote": "Течение Межпассатное противотечение (Атлантика): Нейтральное, генезис Компенсационное, скорость 75 см/с."
    },
    "isCoreLandmark": true
  },
  {
    "id": "m3_cur_south_atlantic_cur",
    "moduleId": "module3",
    "submoduleId": "m3_currents_atlantic",
    "category": "currents",
    "categoryRu": "Течения (Нейтральное)",
    "difficulty": "Стандартный",
    "name": "Южно-Атлантическое течение",
    "aliases": [],
    "region": "Атлантический океан",
    "locationDesc": "Атлантический океан (Нейтральное, Дрейфовое (ветровое), 65 см/с)",
    "mapPrompt": "Покажите течение: Южно-Атлантическое течение",
    "geometryType": "polyline",
    "lat": -38,
    "lng": -15,
    "hitRadiusKm": 250,
    "crossTrackBufferKm": 140,
    "coords": [
      [
        -40,
        -35
      ],
      [
        -38,
        -15
      ],
      [
        -35,
        5
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "neutral"
    },
    "badgeColor": "purple",
    "tempGrade": "Н",
    "genesis": "Д",
    "velocityCmS": 65,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите температуру (Т/Х/Н), генезис (Д/К/С) и скорость течения: Южно-Атлантическое течение",
      "backMainAnswer": "Нейтральное • Дрейфовое (ветровое) • 65 см/с",
      "backMetrics": [
        {
          "label": "Океан",
          "value": "Атлантический океан"
        },
        {
          "label": "Температурная градация",
          "value": "Н (Нейтральное)"
        },
        {
          "label": "Генезис",
          "value": "Д (Дрейфовое (ветровое))"
        },
        {
          "label": "Средняя скорость",
          "value": "65 см/с"
        }
      ],
      "backNote": "Течение Южно-Атлантическое течение: Нейтральное, генезис Дрейфовое (ветровое), скорость 65 см/с."
    },
    "isCoreLandmark": false
  },
  {
    "id": "m3_cur_south_equatorial_atl",
    "moduleId": "module3",
    "submoduleId": "m3_currents_atlantic",
    "category": "currents",
    "categoryRu": "Течения (Нейтральное)",
    "difficulty": "Стандартный",
    "name": "Южное Пассатное течение (Атлантика)",
    "aliases": [],
    "region": "Атлантический океан",
    "locationDesc": "Атлантический океан (Нейтральное, Дрейфовое (ветровое), 95 см/с)",
    "mapPrompt": "Покажите течение: Южное Пассатное течение (Атлантика)",
    "geometryType": "polyline",
    "lat": -5,
    "lng": -20,
    "hitRadiusKm": 250,
    "crossTrackBufferKm": 140,
    "coords": [
      [
        -5,
        5
      ],
      [
        -5,
        -15
      ],
      [
        -5,
        -32
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "neutral"
    },
    "badgeColor": "purple",
    "tempGrade": "Н",
    "genesis": "Д",
    "velocityCmS": 95,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите температуру (Т/Х/Н), генезис (Д/К/С) и скорость течения: Южное Пассатное течение (Атлантика)",
      "backMainAnswer": "Нейтральное • Дрейфовое (ветровое) • 95 см/с",
      "backMetrics": [
        {
          "label": "Океан",
          "value": "Атлантический океан"
        },
        {
          "label": "Температурная градация",
          "value": "Н (Нейтральное)"
        },
        {
          "label": "Генезис",
          "value": "Д (Дрейфовое (ветровое))"
        },
        {
          "label": "Средняя скорость",
          "value": "95 см/с"
        }
      ],
      "backNote": "Течение Южное Пассатное течение (Атлантика): Нейтральное, генезис Дрейфовое (ветровое), скорость 95 см/с."
    },
    "isCoreLandmark": true
  },
  {
    "id": "m3_cur_agulhas_cur",
    "moduleId": "module3",
    "submoduleId": "m3_currents_indian",
    "category": "currents",
    "categoryRu": "Течения (Тёплое)",
    "difficulty": "Стандартный",
    "name": "Течение Мыса Игольного (Агульясское)",
    "aliases": [
      "Агульясское течение"
    ],
    "region": "Индийский океан",
    "locationDesc": "Индийский океан (Тёплое, Сточное, 70 см/с)",
    "mapPrompt": "Покажите течение: Течение Мыса Игольного (Агульясское)",
    "geometryType": "polyline",
    "lat": -32,
    "lng": 29,
    "hitRadiusKm": 250,
    "crossTrackBufferKm": 140,
    "coords": [
      [
        -26,
        34
      ],
      [
        -32,
        29
      ],
      [
        -36,
        22
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "warm"
    },
    "badgeColor": "rose",
    "tempGrade": "Т",
    "genesis": "С",
    "velocityCmS": 70,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите температуру (Т/Х/Н), генезис (Д/К/С) и скорость течения: Течение Мыса Игольного (Агульясское)",
      "backMainAnswer": "Тёплое • Сточное • 70 см/с",
      "backMetrics": [
        {
          "label": "Океан",
          "value": "Индийский океан"
        },
        {
          "label": "Температурная градация",
          "value": "Т (Тёплое)"
        },
        {
          "label": "Генезис",
          "value": "С (Сточное)"
        },
        {
          "label": "Средняя скорость",
          "value": "70 см/с"
        }
      ],
      "backNote": "Течение Течение Мыса Игольного (Агульясское): Тёплое, генезис Сточное, скорость 70 см/с."
    },
    "isCoreLandmark": false
  },
  {
    "id": "m3_cur_west_australian_cur",
    "moduleId": "module3",
    "submoduleId": "m3_currents_indian",
    "category": "currents",
    "categoryRu": "Течения (Холодное)",
    "difficulty": "Стандартный",
    "name": "Западно-Австралийское течение",
    "aliases": [],
    "region": "Индийский океан",
    "locationDesc": "Индийский океан (Холодное, Компенсационное, 20-30 см/с)",
    "mapPrompt": "Покажите течение: Западно-Австралийское течение",
    "geometryType": "polyline",
    "lat": -24,
    "lng": 110,
    "hitRadiusKm": 250,
    "crossTrackBufferKm": 140,
    "coords": [
      [
        -33,
        113
      ],
      [
        -25,
        110
      ],
      [
        -17,
        108
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "cold"
    },
    "badgeColor": "sky",
    "tempGrade": "Х",
    "genesis": "К",
    "velocityCmS": "20-30",
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите температуру (Т/Х/Н), генезис (Д/К/С) и скорость течения: Западно-Австралийское течение",
      "backMainAnswer": "Холодное • Компенсационное • 20-30 см/с",
      "backMetrics": [
        {
          "label": "Океан",
          "value": "Индийский океан"
        },
        {
          "label": "Температурная градация",
          "value": "Х (Холодное)"
        },
        {
          "label": "Генезис",
          "value": "К (Компенсационное)"
        },
        {
          "label": "Средняя скорость",
          "value": "20-30 см/с"
        }
      ],
      "backNote": "Течение Западно-Австралийское течение: Холодное, генезис Компенсационное, скорость 20-30 см/с."
    },
    "isCoreLandmark": true
  },
  {
    "id": "m3_cur_west_wind_drift_ind",
    "moduleId": "module3",
    "submoduleId": "m3_currents_indian",
    "category": "currents",
    "categoryRu": "Течения (Холодное)",
    "difficulty": "Стандартный",
    "name": "Течение Западных ветров (Индийский океан)",
    "aliases": [],
    "region": "Индийский океан",
    "locationDesc": "Индийский океан (Холодное, Дрейфовое (ветровое), 25-75 см/с)",
    "mapPrompt": "Покажите течение: Течение Западных ветров (Индийский океан)",
    "geometryType": "polyline",
    "lat": -50,
    "lng": 75,
    "hitRadiusKm": 250,
    "crossTrackBufferKm": 140,
    "coords": [
      [
        -50,
        30
      ],
      [
        -50,
        75
      ],
      [
        -50,
        115
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "cold"
    },
    "badgeColor": "sky",
    "tempGrade": "Х",
    "genesis": "Д",
    "velocityCmS": "25-75",
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите температуру (Т/Х/Н), генезис (Д/К/С) и скорость течения: Течение Западных ветров (Индийский океан)",
      "backMainAnswer": "Холодное • Дрейфовое (ветровое) • 25-75 см/с",
      "backMetrics": [
        {
          "label": "Океан",
          "value": "Индийский океан"
        },
        {
          "label": "Температурная градация",
          "value": "Х (Холодное)"
        },
        {
          "label": "Генезис",
          "value": "Д (Дрейфовое (ветровое))"
        },
        {
          "label": "Средняя скорость",
          "value": "25-75 см/с"
        }
      ],
      "backNote": "Течение Течение Западных ветров (Индийский океан): Холодное, генезис Дрейфовое (ветровое), скорость 25-75 см/с."
    },
    "isCoreLandmark": true
  },
  {
    "id": "m3_cur_madagascar_cur",
    "moduleId": "module3",
    "submoduleId": "m3_currents_indian",
    "category": "currents",
    "categoryRu": "Течения (Тёплое)",
    "difficulty": "Стандартный",
    "name": "Мадагаскарское течение",
    "aliases": [],
    "region": "Индийский океан",
    "locationDesc": "Индийский океан (Тёплое, Сточное, 50-100 см/с)",
    "mapPrompt": "Покажите течение: Мадагаскарское течение",
    "geometryType": "polyline",
    "lat": -20,
    "lng": 50,
    "hitRadiusKm": 250,
    "crossTrackBufferKm": 140,
    "coords": [
      [
        -14,
        52
      ],
      [
        -20,
        50
      ],
      [
        -26,
        48
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "warm"
    },
    "badgeColor": "rose",
    "tempGrade": "Т",
    "genesis": "С",
    "velocityCmS": "50-100",
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите температуру (Т/Х/Н), генезис (Д/К/С) и скорость течения: Мадагаскарское течение",
      "backMainAnswer": "Тёплое • Сточное • 50-100 см/с",
      "backMetrics": [
        {
          "label": "Океан",
          "value": "Индийский океан"
        },
        {
          "label": "Температурная градация",
          "value": "Т (Тёплое)"
        },
        {
          "label": "Генезис",
          "value": "С (Сточное)"
        },
        {
          "label": "Средняя скорость",
          "value": "50-100 см/с"
        }
      ],
      "backNote": "Течение Мадагаскарское течение: Тёплое, генезис Сточное, скорость 50-100 см/с."
    },
    "isCoreLandmark": true
  },
  {
    "id": "m3_cur_inter_counter_ind",
    "moduleId": "module3",
    "submoduleId": "m3_currents_indian",
    "category": "currents",
    "categoryRu": "Течения (Нейтральное)",
    "difficulty": "Стандартный",
    "name": "Межпассатное противотечение (Индийский океан)",
    "aliases": [],
    "region": "Индийский океан",
    "locationDesc": "Индийский океан (Нейтральное, Компенсационное, 40-60 см/с)",
    "mapPrompt": "Покажите течение: Межпассатное противотечение (Индийский океан)",
    "geometryType": "polyline",
    "lat": -3,
    "lng": 70,
    "hitRadiusKm": 250,
    "crossTrackBufferKm": 140,
    "coords": [
      [
        -3,
        55
      ],
      [
        -3,
        70
      ],
      [
        -3,
        85
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "neutral"
    },
    "badgeColor": "purple",
    "tempGrade": "Н",
    "genesis": "К",
    "velocityCmS": "40-60",
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите температуру (Т/Х/Н), генезис (Д/К/С) и скорость течения: Межпассатное противотечение (Индийский океан)",
      "backMainAnswer": "Нейтральное • Компенсационное • 40-60 см/с",
      "backMetrics": [
        {
          "label": "Океан",
          "value": "Индийский океан"
        },
        {
          "label": "Температурная градация",
          "value": "Н (Нейтральное)"
        },
        {
          "label": "Генезис",
          "value": "К (Компенсационное)"
        },
        {
          "label": "Средняя скорость",
          "value": "40-60 см/с"
        }
      ],
      "backNote": "Течение Межпассатное противотечение (Индийский океан): Нейтральное, генезис Компенсационное, скорость 40-60 см/с."
    },
    "isCoreLandmark": true
  },
  {
    "id": "m3_cur_mozambique_cur",
    "moduleId": "module3",
    "submoduleId": "m3_currents_indian",
    "category": "currents",
    "categoryRu": "Течения (Тёплое)",
    "difficulty": "Стандартный",
    "name": "Мозамбикское течение",
    "aliases": [],
    "region": "Индийский океан",
    "locationDesc": "Индийский океан (Тёплое, Сточное, 25-50 см/с)",
    "mapPrompt": "Покажите течение: Мозамбикское течение",
    "geometryType": "polyline",
    "lat": -18,
    "lng": 38,
    "hitRadiusKm": 250,
    "crossTrackBufferKm": 140,
    "coords": [
      [
        -12,
        41
      ],
      [
        -18,
        38
      ],
      [
        -24,
        36
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "warm"
    },
    "badgeColor": "rose",
    "tempGrade": "Т",
    "genesis": "С",
    "velocityCmS": "25-50",
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите температуру (Т/Х/Н), генезис (Д/К/С) и скорость течения: Мозамбикское течение",
      "backMainAnswer": "Тёплое • Сточное • 25-50 см/с",
      "backMetrics": [
        {
          "label": "Океан",
          "value": "Индийский океан"
        },
        {
          "label": "Температурная градация",
          "value": "Т (Тёплое)"
        },
        {
          "label": "Генезис",
          "value": "С (Сточное)"
        },
        {
          "label": "Средняя скорость",
          "value": "25-50 см/с"
        }
      ],
      "backNote": "Течение Мозамбикское течение: Тёплое, генезис Сточное, скорость 25-50 см/с."
    },
    "isCoreLandmark": true
  },
  {
    "id": "m3_cur_monsoon_cur",
    "moduleId": "module3",
    "submoduleId": "m3_currents_indian",
    "category": "currents",
    "categoryRu": "Течения (Нейтральное)",
    "difficulty": "Стандартный",
    "name": "Муссонное течение (меняет направление по сезонам)",
    "aliases": [
      "Муссонное (Индийский океан)"
    ],
    "region": "Индийский океан",
    "locationDesc": "Индийский океан (Нейтральное, Дрейфовое (ветровое), 40-70 см/с)",
    "mapPrompt": "Покажите течение: Муссонное течение (меняет направление по сезонам)",
    "geometryType": "polyline",
    "lat": 8,
    "lng": 75,
    "hitRadiusKm": 250,
    "crossTrackBufferKm": 140,
    "coords": [
      [
        8,
        60
      ],
      [
        8,
        75
      ],
      [
        8,
        90
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "neutral"
    },
    "badgeColor": "purple",
    "tempGrade": "Н",
    "genesis": "Д",
    "velocityCmS": "40-70",
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите температуру (Т/Х/Н), генезис (Д/К/С) и скорость течения: Муссонное течение (меняет направление по сезонам)",
      "backMainAnswer": "Нейтральное • Дрейфовое (ветровое) • 40-70 см/с",
      "backMetrics": [
        {
          "label": "Океан",
          "value": "Индийский океан"
        },
        {
          "label": "Температурная градация",
          "value": "Н (Нейтральное)"
        },
        {
          "label": "Генезис",
          "value": "Д (Дрейфовое (ветровое))"
        },
        {
          "label": "Средняя скорость",
          "value": "40-70 см/с"
        }
      ],
      "backNote": "Течение Муссонное течение (меняет направление по сезонам): Нейтральное, генезис Дрейфовое (ветровое), скорость 40-70 см/с."
    },
    "isCoreLandmark": true
  },
  {
    "id": "m3_cur_somali_cur",
    "moduleId": "module3",
    "submoduleId": "m3_currents_indian",
    "category": "currents",
    "categoryRu": "Течения (Холодное)",
    "difficulty": "Стандартный",
    "name": "Сомалийское течение (меняет направление по сезонам)",
    "aliases": [],
    "region": "Индийский океан",
    "locationDesc": "Индийский океан (Холодное, Компенсационное, 30-80 см/с)",
    "mapPrompt": "Покажите течение: Сомалийское течение (меняет направление по сезонам)",
    "geometryType": "polyline",
    "lat": 5,
    "lng": 50,
    "hitRadiusKm": 250,
    "crossTrackBufferKm": 140,
    "coords": [
      [
        -2,
        44
      ],
      [
        5,
        50
      ],
      [
        11,
        52
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "cold"
    },
    "badgeColor": "sky",
    "tempGrade": "Х",
    "genesis": "К",
    "velocityCmS": "30-80",
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите температуру (Т/Х/Н), генезис (Д/К/С) и скорость течения: Сомалийское течение (меняет направление по сезонам)",
      "backMainAnswer": "Холодное • Компенсационное • 30-80 см/с",
      "backMetrics": [
        {
          "label": "Океан",
          "value": "Индийский океан"
        },
        {
          "label": "Температурная градация",
          "value": "Х (Холодное)"
        },
        {
          "label": "Генезис",
          "value": "К (Компенсационное)"
        },
        {
          "label": "Средняя скорость",
          "value": "30-80 см/с"
        }
      ],
      "backNote": "Течение Сомалийское течение (меняет направление по сезонам): Холодное, генезис Компенсационное, скорость 30-80 см/с."
    },
    "isCoreLandmark": true
  },
  {
    "id": "m3_cur_south_equatorial_ind",
    "moduleId": "module3",
    "submoduleId": "m3_currents_indian",
    "category": "currents",
    "categoryRu": "Течения (Нейтральное)",
    "difficulty": "Стандартный",
    "name": "Южное Пассатное течение (Индийский океан)",
    "aliases": [],
    "region": "Индийский океан",
    "locationDesc": "Индийский океан (Нейтральное, Дрейфовое (ветровое), 60-80 см/с)",
    "mapPrompt": "Покажите течение: Южное Пассатное течение (Индийский океан)",
    "geometryType": "polyline",
    "lat": -12,
    "lng": 75,
    "hitRadiusKm": 250,
    "crossTrackBufferKm": 140,
    "coords": [
      [
        -12,
        100
      ],
      [
        -12,
        75
      ],
      [
        -12,
        55
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "neutral"
    },
    "badgeColor": "purple",
    "tempGrade": "Н",
    "genesis": "Д",
    "velocityCmS": "60-80",
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите температуру (Т/Х/Н), генезис (Д/К/С) и скорость течения: Южное Пассатное течение (Индийский океан)",
      "backMainAnswer": "Нейтральное • Дрейфовое (ветровое) • 60-80 см/с",
      "backMetrics": [
        {
          "label": "Океан",
          "value": "Индийский океан"
        },
        {
          "label": "Температурная градация",
          "value": "Н (Нейтральное)"
        },
        {
          "label": "Генезис",
          "value": "Д (Дрейфовое (ветровое))"
        },
        {
          "label": "Средняя скорость",
          "value": "60-80 см/с"
        }
      ],
      "backNote": "Течение Южное Пассатное течение (Индийский океан): Нейтральное, генезис Дрейфовое (ветровое), скорость 60-80 см/с."
    },
    "isCoreLandmark": true
  },
  {
    "id": "m3_cur_east_greenland_cur",
    "moduleId": "module3",
    "submoduleId": "m3_currents_arctic",
    "category": "currents",
    "categoryRu": "Течения (Холодное)",
    "difficulty": "Стандартный",
    "name": "Восточно-Гренландское течение",
    "aliases": [],
    "region": "Северный Ледовитый океан",
    "locationDesc": "Северный Ледовитый океан (Холодное, Компенсационное, 30 см/с)",
    "mapPrompt": "Покажите течение: Восточно-Гренландское течение",
    "geometryType": "polyline",
    "lat": 73,
    "lng": -18,
    "hitRadiusKm": 250,
    "crossTrackBufferKm": 140,
    "coords": [
      [
        80,
        -10
      ],
      [
        74,
        -18
      ],
      [
        66,
        -28
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "cold"
    },
    "badgeColor": "sky",
    "tempGrade": "Х",
    "genesis": "К",
    "velocityCmS": 30,
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите температуру (Т/Х/Н), генезис (Д/К/С) и скорость течения: Восточно-Гренландское течение",
      "backMainAnswer": "Холодное • Компенсационное • 30 см/с",
      "backMetrics": [
        {
          "label": "Океан",
          "value": "Северный Ледовитый океан"
        },
        {
          "label": "Температурная градация",
          "value": "Х (Холодное)"
        },
        {
          "label": "Генезис",
          "value": "К (Компенсационное)"
        },
        {
          "label": "Средняя скорость",
          "value": "30 см/с"
        }
      ],
      "backNote": "Течение Восточно-Гренландское течение: Холодное, генезис Компенсационное, скорость 30 см/с."
    },
    "isCoreLandmark": true
  },
  {
    "id": "m3_cur_west_greenland_cur",
    "moduleId": "module3",
    "submoduleId": "m3_currents_arctic",
    "category": "currents",
    "categoryRu": "Течения (Тёплое)",
    "difficulty": "Стандартный",
    "name": "Западно-Гренландское течение",
    "aliases": [],
    "region": "Северный Ледовитый океан",
    "locationDesc": "Северный Ледовитый океан (Тёплое, Сточное, 30-50 см/с)",
    "mapPrompt": "Покажите течение: Западно-Гренландское течение",
    "geometryType": "polyline",
    "lat": 64,
    "lng": -54,
    "hitRadiusKm": 250,
    "crossTrackBufferKm": 140,
    "coords": [
      [
        60,
        -46
      ],
      [
        64,
        -54
      ],
      [
        68,
        -56
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "warm"
    },
    "badgeColor": "rose",
    "tempGrade": "Т",
    "genesis": "С",
    "velocityCmS": "30-50",
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите температуру (Т/Х/Н), генезис (Д/К/С) и скорость течения: Западно-Гренландское течение",
      "backMainAnswer": "Тёплое • Сточное • 30-50 см/с",
      "backMetrics": [
        {
          "label": "Океан",
          "value": "Северный Ледовитый океан"
        },
        {
          "label": "Температурная градация",
          "value": "Т (Тёплое)"
        },
        {
          "label": "Генезис",
          "value": "С (Сточное)"
        },
        {
          "label": "Средняя скорость",
          "value": "30-50 см/с"
        }
      ],
      "backNote": "Течение Западно-Гренландское течение: Тёплое, генезис Сточное, скорость 30-50 см/с."
    },
    "isCoreLandmark": true
  },
  {
    "id": "m3_cur_transpolar_drift",
    "moduleId": "module3",
    "submoduleId": "m3_currents_arctic",
    "category": "currents",
    "categoryRu": "Течения (Холодное)",
    "difficulty": "Стандартный",
    "name": "Западное Арктическое (Трансарктическое) течение",
    "aliases": [
      "Трансарктическое течение"
    ],
    "region": "Северный Ледовитый океан",
    "locationDesc": "Северный Ледовитый океан (Холодное, Дрейфовое (ветровое), 10-20 см/с)",
    "mapPrompt": "Покажите течение: Западное Арктическое (Трансарктическое) течение",
    "geometryType": "polyline",
    "lat": 84,
    "lng": 160,
    "hitRadiusKm": 250,
    "crossTrackBufferKm": 140,
    "coords": [
      [
        75,
        175
      ],
      [
        82,
        180
      ],
      [
        86,
        40
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "cold"
    },
    "badgeColor": "sky",
    "tempGrade": "Х",
    "genesis": "Д",
    "velocityCmS": "10-20",
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите температуру (Т/Х/Н), генезис (Д/К/С) и скорость течения: Западное Арктическое (Трансарктическое) течение",
      "backMainAnswer": "Холодное • Дрейфовое (ветровое) • 10-20 см/с",
      "backMetrics": [
        {
          "label": "Океан",
          "value": "Северный Ледовитый океан"
        },
        {
          "label": "Температурная градация",
          "value": "Х (Холодное)"
        },
        {
          "label": "Генезис",
          "value": "Д (Дрейфовое (ветровое))"
        },
        {
          "label": "Средняя скорость",
          "value": "10-20 см/с"
        }
      ],
      "backNote": "Течение Западное Арктическое (Трансарктическое) течение: Холодное, генезис Дрейфовое (ветровое), скорость 10-20 см/с."
    },
    "isCoreLandmark": false
  },
  {
    "id": "m3_cur_north_cape_cur",
    "moduleId": "module3",
    "submoduleId": "m3_currents_arctic",
    "category": "currents",
    "categoryRu": "Течения (Тёплое)",
    "difficulty": "Стандартный",
    "name": "Нордкапское течение",
    "aliases": [],
    "region": "Северный Ледовитый океан",
    "locationDesc": "Северный Ледовитый океан (Тёплое, Сточное, 20-30 см/с)",
    "mapPrompt": "Покажите течение: Нордкапское течение",
    "geometryType": "polyline",
    "lat": 72,
    "lng": 26,
    "hitRadiusKm": 250,
    "crossTrackBufferKm": 140,
    "coords": [
      [
        70.5,
        20
      ],
      [
        72,
        26
      ],
      [
        72.5,
        34
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "warm"
    },
    "badgeColor": "rose",
    "tempGrade": "Т",
    "genesis": "С",
    "velocityCmS": "20-30",
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите температуру (Т/Х/Н), генезис (Д/К/С) и скорость течения: Нордкапское течение",
      "backMainAnswer": "Тёплое • Сточное • 20-30 см/с",
      "backMetrics": [
        {
          "label": "Океан",
          "value": "Северный Ледовитый океан"
        },
        {
          "label": "Температурная градация",
          "value": "Т (Тёплое)"
        },
        {
          "label": "Генезис",
          "value": "С (Сточное)"
        },
        {
          "label": "Средняя скорость",
          "value": "20-30 см/с"
        }
      ],
      "backNote": "Течение Нордкапское течение: Тёплое, генезис Сточное, скорость 20-30 см/с."
    },
    "isCoreLandmark": false
  },
  {
    "id": "m3_cur_spitsbergen_cur",
    "moduleId": "module3",
    "submoduleId": "m3_currents_arctic",
    "category": "currents",
    "categoryRu": "Течения (Тёплое)",
    "difficulty": "Стандартный",
    "name": "Шпицбергенское течение",
    "aliases": [],
    "region": "Северный Ледовитый океан",
    "locationDesc": "Северный Ледовитый океан (Тёплое, Сточное, 20-30 см/с)",
    "mapPrompt": "Покажите течение: Шпицбергенское течение",
    "geometryType": "polyline",
    "lat": 77,
    "lng": 10,
    "hitRadiusKm": 250,
    "crossTrackBufferKm": 140,
    "coords": [
      [
        74,
        12
      ],
      [
        77,
        10
      ],
      [
        80,
        10
      ]
    ],
    "flowStyle": {
      "hasDirection": true,
      "tempType": "warm"
    },
    "badgeColor": "rose",
    "tempGrade": "Т",
    "genesis": "С",
    "velocityCmS": "20-30",
    "ankiCard": {
      "hasTheoryStep": true,
      "frontQuestion": "Укажите температуру (Т/Х/Н), генезис (Д/К/С) и скорость течения: Шпицбергенское течение",
      "backMainAnswer": "Тёплое • Сточное • 20-30 см/с",
      "backMetrics": [
        {
          "label": "Океан",
          "value": "Северный Ледовитый океан"
        },
        {
          "label": "Температурная градация",
          "value": "Т (Тёплое)"
        },
        {
          "label": "Генезис",
          "value": "С (Сточное)"
        },
        {
          "label": "Средняя скорость",
          "value": "20-30 см/с"
        }
      ],
      "backNote": "Течение Шпицбергенское течение: Тёплое, генезис Сточное, скорость 20-30 см/с."
    },
    "isCoreLandmark": false
  }
];

const M3_BOUNDARY_THEORY = [
  {
    id: "m3_bound_arctic_atlantic",
    name: "Граница Северного Ледовитого и Атлантического океанов",
    frontQuestion: "Как проходит граница между Северным Ледовитым и Атлантическим океанами?",
    backMainAnswer: "Вост. вход Гудзонова прол. — о. Баффинова Земля — Девисов прол. (севернее полярного круга) — о. Гренландия — Датский прол. — о. Исландия — Фарерские и Шетландские о-ва — по 61° с.ш. до Скандинавского п-ова",
    lat: 64, lng: -25
  },
  {
    id: "m3_bound_arctic_pacific",
    name: "Граница Северного Ледовитого и Тихого океанов",
    frontQuestion: "Как проходит граница между Северным Ледовитым и Тихим океанами?",
    backMainAnswer: "Поперёк Берингова пролива (наименьшая ширина 14 км по методичке / между м. Дежнёва и м. Принца Уэльского)",
    lat: 65.8, lng: -169
  },
  {
    id: "m3_bound_pacific_atlantic",
    name: "Граница Тихого и Атлантического океанов",
    frontQuestion: "Как проходит граница между Тихим и Атлантическим океанами?",
    backMainAnswer: "От мыса Горн (о. Огненная Земля) по меридиану (~67° з.д.) на юг до Антарктического полуострова",
    lat: -58, lng: -67
  },
  {
    id: "m3_bound_atlantic_indian",
    name: "Граница Атлантического и Индийского океанов",
    frontQuestion: "Как проходит граница между Атлантическим и Индийским океанами?",
    backMainAnswer: "От мыса Игольный (20° в.д.) по меридиану на юг до побережья Антарктиды",
    lat: -45, lng: 20
  },
  {
    id: "m3_bound_indian_pacific",
    name: "Граница Индийского и Тихого океанов",
    frontQuestion: "Как проходит граница между Индийским и Тихим океанами?",
    backMainAnswer: "Сев. вход Малаккского прол. — зап. берег о. Суматра — Зондский прол. — юж. берег о. Ява — юж. берега Малых Зондских о-вов — о. Новая Гвинея — зап. вход Торресова прол. — Австралия — зап. вход Бассова прол. — о. Тасмания — от мыса Южный по меридиану до Антарктиды",
    lat: -15, lng: 130
  },
  {
    id: "m3_bound_southern_north",
    name: "Северная граница Южного океана",
    frontQuestion: "Где проходит северная граница Южного океана?",
    backMainAnswer: "По линии антарктической конвергенции (полоса схождения тёплых и холодных вод ~40–60° ю.ш.), близкой к северной границе Антарктического циркумполярного течения (Западных ветров)",
    lat: -52, lng: 0
  }
].map((b) => ({
  id: b.id,
  moduleId: "module3",
  submoduleId: "m3_oceans_theory",
  category: "oceans_theory",
  categoryRu: "Границы океанов",
  difficulty: "Базовый",
  isCoreLandmark: true,
  name: b.name,
  shortName: b.name,
  region: "Мировой океан",
  locationDesc: b.backMainAnswer,
  mapPrompt: b.frontQuestion,
  geometryType: "region_focus",
  lat: b.lat,
  lng: b.lng,
  ankiCard: {
    hasTheoryStep: true,
    frontQuestion: b.frontQuestion,
    backMainAnswer: b.backMainAnswer,
    backMetrics: [{ label: "Рубеж (по методичке)", value: b.backMainAnswer }],
    backNote: ""
  }
}));

const MODULE3_ALL_ITEMS = [...MODULE3_ITEMS, ...M3_BOUNDARY_THEORY];

window.GEO_MODULES_REGISTRY.module3 = {
  id: "module3",
  title: "3. Океаны, моря, заливы, проливы; желоба; течения",
  shortTitle: "Мировой океан",
  semesterOrder: 3,
  badge: "Раздел 3",
  color: "sky",
  decks: [
    { id: "m3_oceans_theory", title: "Океаны и границы (теория)", count: 5 + M3_BOUNDARY_THEORY.length, isTheoryDeck: true },
    { id: "m3_seas_straits_gulfs", title: "Моря, проливы и заливы", count: MODULE3_ITEMS.filter(i => (i.category === "seas" || i.category === "straits" || i.category === "gulfs") && !/^m3_sea_[a-z_]+_ocean$/.test(i.id)).length },
    { id: "m3_trenches", title: "Глубоководные желоба", count: MODULE3_ITEMS.filter(i => i.category === "trenches").length },
    { id: "m3_currents", title: "Океанические течения", count: MODULE3_ITEMS.filter(i => i.category === "currents").length }
  ],
  items: MODULE3_ALL_ITEMS
};
