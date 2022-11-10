import { Parsed } from './../models/interfaces/interfaces';
import { ResponseI } from '../models/interfaces/interfaces';

export const apiResponse: ResponseI = {
  uri: 'http://www.edamam.com/ontologies/edamam.owl#recipe_4cd0ec1d6b4d4ea49c0664bedc7cd2bd',
  yield: 4,
  calories: 702,
  totalWeight: 195,
  dietLabels: ['LOW_FAT', 'LOW_SODIUM'],
  healthLabels: [
    'FAT_FREE',
    'LOW_FAT_ABS',
    'SUGAR_CONSCIOUS',
    'LOW_SUGAR',
    'LOW_POTASSIUM',
    'KIDNEY_FRIENDLY',
    'VEGAN',
    'VEGETARIAN',
    'PESCATARIAN',
    'MEDITERRANEAN',
    'DASH',
    'DAIRY_FREE',
    'GLUTEN_FREE',
    'WHEAT_FREE',
    'EGG_FREE',
    'MILK_FREE',
    'PEANUT_FREE',
    'TREE_NUT_FREE',
    'SOY_FREE',
    'FISH_FREE',
    'SHELLFISH_FREE',
    'PORK_FREE',
    'RED_MEAT_FREE',
    'CRUSTACEAN_FREE',
    'CELERY_FREE',
    'MUSTARD_FREE',
    'SESAME_FREE',
    'LUPINE_FREE',
    'MOLLUSK_FREE',
    'ALCOHOL_FREE',
    'NO_OIL_ADDED',
    'NO_SUGAR_ADDED',
    'SULPHITE_FREE',
    'FODMAP_FREE',
    'KOSHER',
  ],
  cautions: [],
  totalNutrients: {
    ENERC_KCAL: {
      label: 'Energy',
      quantity: 702,
      unit: 'kcal',
    },
    FAT: {
      label: 'Total lipid (fat)',
      quantity: 1.131,
      unit: 'g',
    },
    FASAT: {
      label: 'Fatty acids, total saturated',
      quantity: 0.3081,
      unit: 'g',
    },
    FAMS: {
      label: 'Fatty acids, total monounsaturated',
      quantity: 0.35295,
      unit: 'g',
    },
    FAPU: {
      label: 'Fatty acids, total polyunsaturated',
      quantity: 0.30225,
      unit: 'g',
    },
    CHOCDF: {
      label: 'Carbohydrate, by difference',
      quantity: 154.713,
      unit: 'g',
    },
    'CHOCDF.net': {
      label: 'Carbohydrates (net)',
      quantity: 154.713,
      unit: 'g',
    },
    PROCNT: {
      label: 'Protein',
      quantity: 12.8895,
      unit: 'g',
    },
    CHOLE: {
      label: 'Cholesterol',
      quantity: 0,
      unit: 'mg',
    },
    NA: {
      label: 'Sodium, Na',
      quantity: 1.95,
      unit: 'mg',
    },
    CA: {
      label: 'Calcium, Ca',
      quantity: 17.55,
      unit: 'mg',
    },
    MG: {
      label: 'Magnesium, Mg',
      quantity: 68.25,
      unit: 'mg',
    },
    K: {
      label: 'Potassium, K',
      quantity: 167.7,
      unit: 'mg',
    },
    FE: {
      label: 'Iron, Fe',
      quantity: 1.56,
      unit: 'mg',
    },
    ZN: {
      label: 'Zinc, Zn',
      quantity: 2.262,
      unit: 'mg',
    },
    P: {
      label: 'Phosphorus, P',
      quantity: 210.6,
      unit: 'mg',
    },
    VITC: {
      label: 'Vitamin C, total ascorbic acid',
      quantity: 0,
      unit: 'mg',
    },
    THIA: {
      label: 'Thiamin',
      quantity: 0.1365,
      unit: 'mg',
    },
    RIBF: {
      label: 'Riboflavin',
      quantity: 0.0936,
      unit: 'mg',
    },
    NIA: {
      label: 'Niacin',
      quantity: 3.12,
      unit: 'mg',
    },
    VITB6A: {
      label: 'Vitamin B-6',
      quantity: 0.28275,
      unit: 'mg',
    },
    FOLDFE: {
      label: 'Folate, DFE',
      quantity: 17.55,
      unit: 'µg',
    },
    FOLFD: {
      label: 'Folate, food',
      quantity: 17.55,
      unit: 'µg',
    },
    FOLAC: {
      label: 'Folic acid',
      quantity: 0,
      unit: 'µg',
    },
    VITB12: {
      label: 'Vitamin B-12',
      quantity: 0,
      unit: 'µg',
    },
    VITD: {
      label: 'Vitamin D (D2 + D3)',
      quantity: 0,
      unit: 'µg',
    },
    WATER: {
      label: 'Water',
      quantity: 25.1355,
      unit: 'g',
    },
  },
  totalDaily: {
    ENERC_KCAL: {
      label: 'Energy',
      quantity: 35.1,
      unit: '%',
    },
    FAT: {
      label: 'Fat',
      quantity: 1.74,
      unit: '%',
    },
    FASAT: {
      label: 'Saturated',
      quantity: 1.5405,
      unit: '%',
    },
    CHOCDF: {
      label: 'Carbs',
      quantity: 51.571,
      unit: '%',
    },
    PROCNT: {
      label: 'Protein',
      quantity: 25.779,
      unit: '%',
    },
    CHOLE: {
      label: 'Cholesterol',
      quantity: 0,
      unit: '%',
    },
    NA: {
      label: 'Sodium',
      quantity: 0.08125,
      unit: '%',
    },
    CA: {
      label: 'Calcium',
      quantity: 1.755,
      unit: '%',
    },
    MG: {
      label: 'Magnesium',
      quantity: 16.25,
      unit: '%',
    },
    K: {
      label: 'Potassium',
      quantity: 3.568085106382979,
      unit: '%',
    },
    FE: {
      label: 'Iron',
      quantity: 8.666666666666666,
      unit: '%',
    },
    ZN: {
      label: 'Zinc',
      quantity: 20.563636363636363,
      unit: '%',
    },
    P: {
      label: 'Phosphorus',
      quantity: 30.085714285714285,
      unit: '%',
    },
    VITC: {
      label: 'Vitamin C',
      quantity: 0,
      unit: '%',
    },
    THIA: {
      label: 'Thiamin (B1)',
      quantity: 11.375,
      unit: '%',
    },
    RIBF: {
      label: 'Riboflavin (B2)',
      quantity: 7.199999999999999,
      unit: '%',
    },
    NIA: {
      label: 'Niacin (B3)',
      quantity: 19.5,
      unit: '%',
    },
    VITB6A: {
      label: 'Vitamin B6',
      quantity: 21.749999999999996,
      unit: '%',
    },
    FOLDFE: {
      label: 'Folate equivalent (total)',
      quantity: 4.3875,
      unit: '%',
    },
    VITB12: {
      label: 'Vitamin B12',
      quantity: 0,
      unit: '%',
    },
    VITD: {
      label: 'Vitamin D',
      quantity: 0,
      unit: '%',
    },
  },
  ingredients: [
    {
      text: '1 cup rice',
      parsed: [
        {
          quantity: 1,
          measure: 'cup',
          foodMatch: 'rice',
          food: 'rice',
          foodId: 'food_bpumdjzb5rtqaeabb0kbgbcgr4t9',
          weight: 195,
          retainedWeight: 195,
          nutrients: {
            RIBF: {
              label: 'Riboflavin',
              quantity: 0.09359999999999999,
              unit: 'mg',
            },
            VITD: {
              label: 'Vitamin D',
              quantity: 0,
              unit: 'IU',
            },
            THIA: {
              label: 'Thiamin',
              quantity: 0.1365,
              unit: 'mg',
            },
            FAPU: {
              label: 'Fatty acids, total polyunsaturated',
              quantity: 0.30225,
              unit: 'g',
            },
            NIA: {
              label: 'Niacin',
              quantity: 3.12,
              unit: 'mg',
            },
            ENERC_KCAL: {
              label: 'Energy',
              quantity: 702,
              unit: 'kcal',
            },
            FASAT: {
              label: 'Fatty acids, total saturated',
              quantity: 0.3081,
              unit: 'g',
            },
            VITC: {
              label: 'Vitamin C, total ascorbic acid',
              quantity: 0,
              unit: 'mg',
            },
            PROCNT: {
              label: 'Protein',
              quantity: 12.8895,
              unit: 'g',
            },
            CHOLE: {
              label: 'Cholesterol',
              quantity: 0,
              unit: 'mg',
            },
            FAMS: {
              label: 'Fatty acids, total monounsaturated',
              quantity: 0.35295000000000004,
              unit: 'g',
            },
            CHOCDF: {
              label: 'Carbohydrate, by difference',
              quantity: 154.71300000000002,
              unit: 'g',
            },
            FAT: {
              label: 'Total lipid (fat)',
              quantity: 1.131,
              unit: 'g',
            },
            VITB6A: {
              label: 'Vitamin B-6',
              quantity: 0.28275,
              unit: 'mg',
            },
            VITB12: {
              label: 'Vitamin B-12',
              quantity: 0,
              unit: 'µg',
            },
            WATER: {
              label: 'Water',
              quantity: 25.1355,
              unit: 'g',
            },
            K: {
              label: 'Potassium, K',
              quantity: 167.7,
              unit: 'mg',
            },
            P: {
              label: 'Phosphorus, P',
              quantity: 210.6,
              unit: 'mg',
            },
            NA: {
              label: 'Sodium, Na',
              quantity: 1.95,
              unit: 'mg',
            },
            ZN: {
              label: 'Zinc, Zn',
              quantity: 2.262,
              unit: 'mg',
            },
            CA: {
              label: 'Calcium, Ca',
              quantity: 17.55,
              unit: 'mg',
            },
            MG: {
              label: 'Magnesium, Mg',
              quantity: 68.25,
              unit: 'mg',
            },
            FE: {
              label: 'Iron, Fe',
              quantity: 1.56,
              unit: 'mg',
            },
            FOLFD: {
              label: 'Folate, food',
              quantity: 17.55,
              unit: 'µg',
            },
            FOLAC: {
              label: 'Folic acid',
              quantity: 0,
              unit: 'µg',
            },
            FOLDFE: {
              label: 'Folate, DFE',
              quantity: 17.55,
              unit: 'µg',
            },
          },
          measureURI: 'http://www.edamam.com/ontologies/edamam.owl#Measure_cup',
          status: 'OK',
        },
      ],
    },
  ],
  totalNutrientsKCal: {
    ENERC_KCAL: {
      label: 'Energy',
      quantity: 701,
      unit: 'kcal',
    },
    PROCNT_KCAL: {
      label: 'Calories from protein',
      quantity: 53,
      unit: 'kcal',
    },
    FAT_KCAL: {
      label: 'Calories from fat',
      quantity: 10,
      unit: 'kcal',
    },
    CHOCDF_KCAL: {
      label: 'Calories from carbohydrates',
      quantity: 638,
      unit: 'kcal',
    },
  },
};

export const parsed: Parsed[] = [
  {
    quantity: 1,
    measure: 'cup',
    foodMatch: 'rice',
    food: 'rice',
    foodId: 'food_bpumdjzb5rtqaeabb0kbgbcgr4t9',
    weight: 195,
    retainedWeight: 195,
    nutrients: {
      RIBF: {
        label: 'Riboflavin',
        quantity: 0.09359999999999999,
        unit: 'mg',
      },
      VITD: {
        label: 'Vitamin D',
        quantity: 0,
        unit: 'IU',
      },
      THIA: {
        label: 'Thiamin',
        quantity: 0.1365,
        unit: 'mg',
      },
      FAPU: {
        label: 'Fatty acids, total polyunsaturated',
        quantity: 0.30225,
        unit: 'g',
      },
      NIA: {
        label: 'Niacin',
        quantity: 3.12,
        unit: 'mg',
      },
      ENERC_KCAL: {
        label: 'Energy',
        quantity: 702,
        unit: 'kcal',
      },
      FASAT: {
        label: 'Fatty acids, total saturated',
        quantity: 0.3081,
        unit: 'g',
      },
      VITC: {
        label: 'Vitamin C, total ascorbic acid',
        quantity: 0,
        unit: 'mg',
      },
      PROCNT: {
        label: 'Protein',
        quantity: 12.8895,
        unit: 'g',
      },
      CHOLE: {
        label: 'Cholesterol',
        quantity: 0,
        unit: 'mg',
      },
      FAMS: {
        label: 'Fatty acids, total monounsaturated',
        quantity: 0.35295000000000004,
        unit: 'g',
      },
      CHOCDF: {
        label: 'Carbohydrate, by difference',
        quantity: 154.71300000000002,
        unit: 'g',
      },
      FAT: {
        label: 'Total lipid (fat)',
        quantity: 1.131,
        unit: 'g',
      },
      VITB6A: {
        label: 'Vitamin B-6',
        quantity: 0.28275,
        unit: 'mg',
      },
      VITB12: {
        label: 'Vitamin B-12',
        quantity: 0,
        unit: 'µg',
      },
      WATER: {
        label: 'Water',
        quantity: 25.1355,
        unit: 'g',
      },
      K: {
        label: 'Potassium, K',
        quantity: 167.7,
        unit: 'mg',
      },
      P: {
        label: 'Phosphorus, P',
        quantity: 210.6,
        unit: 'mg',
      },
      NA: {
        label: 'Sodium, Na',
        quantity: 1.95,
        unit: 'mg',
      },
      ZN: {
        label: 'Zinc, Zn',
        quantity: 2.262,
        unit: 'mg',
      },
      CA: {
        label: 'Calcium, Ca',
        quantity: 17.55,
        unit: 'mg',
      },
      MG: {
        label: 'Magnesium, Mg',
        quantity: 68.25,
        unit: 'mg',
      },
      FE: {
        label: 'Iron, Fe',
        quantity: 1.56,
        unit: 'mg',
      },
      FOLFD: {
        label: 'Folate, food',
        quantity: 17.55,
        unit: 'µg',
      },
      FOLAC: {
        label: 'Folic acid',
        quantity: 0,
        unit: 'µg',
      },
      FOLDFE: {
        label: 'Folate, DFE',
        quantity: 17.55,
        unit: 'µg',
      },
    },
    measureURI: 'http://www.edamam.com/ontologies/edamam.owl#Measure_cup',
    status: 'OK',
  },
];

export const ingredients: Parsed[] = [
  {
    quantity: 1,
    measure: 'cup',
    foodMatch: 'rice',
    food: 'rice',
    foodId: 'food_bpumdjzb5rtqaeabb0kbgbcgr4t9',
    weight: 195,
    retainedWeight: 195,
    nutrients: {
      RIBF: {
        label: 'Riboflavin',
        quantity: 0.09359999999999999,
        unit: 'mg',
      },
      VITD: {
        label: 'Vitamin D',
        quantity: 0,
        unit: 'IU',
      },
      THIA: {
        label: 'Thiamin',
        quantity: 0.1365,
        unit: 'mg',
      },
      FAPU: {
        label: 'Fatty acids, total polyunsaturated',
        quantity: 0.30225,
        unit: 'g',
      },
      NIA: {
        label: 'Niacin',
        quantity: 3.12,
        unit: 'mg',
      },
      ENERC_KCAL: {
        label: 'Energy',
        quantity: 702,
        unit: 'kcal',
      },
      FASAT: {
        label: 'Fatty acids, total saturated',
        quantity: 0.3081,
        unit: 'g',
      },
      VITC: {
        label: 'Vitamin C, total ascorbic acid',
        quantity: 0,
        unit: 'mg',
      },
      PROCNT: {
        label: 'Protein',
        quantity: 12.8895,
        unit: 'g',
      },
      CHOLE: {
        label: 'Cholesterol',
        quantity: 0,
        unit: 'mg',
      },
      FAMS: {
        label: 'Fatty acids, total monounsaturated',
        quantity: 0.35295000000000004,
        unit: 'g',
      },
      CHOCDF: {
        label: 'Carbohydrate, by difference',
        quantity: 154.71300000000002,
        unit: 'g',
      },
      FAT: {
        label: 'Total lipid (fat)',
        quantity: 1.131,
        unit: 'g',
      },
      VITB6A: {
        label: 'Vitamin B-6',
        quantity: 0.28275,
        unit: 'mg',
      },
      VITB12: {
        label: 'Vitamin B-12',
        quantity: 0,
        unit: 'µg',
      },
      WATER: {
        label: 'Water',
        quantity: 25.1355,
        unit: 'g',
      },
      K: {
        label: 'Potassium, K',
        quantity: 167.7,
        unit: 'mg',
      },
      P: {
        label: 'Phosphorus, P',
        quantity: 210.6,
        unit: 'mg',
      },
      NA: {
        label: 'Sodium, Na',
        quantity: 1.95,
        unit: 'mg',
      },
      ZN: {
        label: 'Zinc, Zn',
        quantity: 2.262,
        unit: 'mg',
      },
      CA: {
        label: 'Calcium, Ca',
        quantity: 17.55,
        unit: 'mg',
      },
      MG: {
        label: 'Magnesium, Mg',
        quantity: 68.25,
        unit: 'mg',
      },
      FE: {
        label: 'Iron, Fe',
        quantity: 1.56,
        unit: 'mg',
      },
      FOLFD: {
        label: 'Folate, food',
        quantity: 17.55,
        unit: 'µg',
      },
      FOLAC: {
        label: 'Folic acid',
        quantity: 0,
        unit: 'µg',
      },
      FOLDFE: {
        label: 'Folate, DFE',
        quantity: 17.55,
        unit: 'µg',
      },
    },
    measureURI: 'http://www.edamam.com/ontologies/edamam.owl#Measure_cup',
    status: 'OK',
  },
  {
    quantity: 2,
    measure: 'whole',
    foodMatch: 'potatoes',
    food: 'potato',
    foodId: 'food_abiw5baauresjmb6xpap2bg3otzu',
    weight: 426,
    retainedWeight: 426,
    nutrients: {
      VITD: {
        label: 'Vitamin D',
        quantity: 0,
        unit: 'IU',
      },
      ENERC_KCAL: {
        label: 'Energy',
        quantity: 328.02,
        unit: 'kcal',
      },
      FASAT: {
        label: 'Fatty acids, total saturated',
        quantity: 0.11075999999999998,
        unit: 'g',
      },
      VITA_RAE: {
        label: 'Vitamin A, RAE',
        quantity: 0,
        unit: 'µg',
      },
      PROCNT: {
        label: 'Protein',
        quantity: 8.6052,
        unit: 'g',
      },
      TOCPHA: {
        label: 'Vitamin E (alpha-tocopherol)',
        quantity: 0.0426,
        unit: 'mg',
      },
      CHOLE: {
        label: 'Cholesterol',
        quantity: 0,
        unit: 'mg',
      },
      CHOCDF: {
        label: 'Carbohydrate, by difference',
        quantity: 74.42219999999999,
        unit: 'g',
      },
      FAT: {
        label: 'Total lipid (fat)',
        quantity: 0.38339999999999996,
        unit: 'g',
      },
      FIBTG: {
        label: 'Fiber, total dietary',
        quantity: 9.372,
        unit: 'g',
      },
      RIBF: {
        label: 'Riboflavin',
        quantity: 0.13632,
        unit: 'mg',
      },
      THIA: {
        label: 'Thiamin',
        quantity: 0.3408,
        unit: 'mg',
      },
      FAPU: {
        label: 'Fatty acids, total polyunsaturated',
        quantity: 0.18317999999999998,
        unit: 'g',
      },
      NIA: {
        label: 'Niacin',
        quantity: 4.4900400000000005,
        unit: 'mg',
      },
      VITC: {
        label: 'Vitamin C, total ascorbic acid',
        quantity: 83.92199999999998,
        unit: 'mg',
      },
      FAMS: {
        label: 'Fatty acids, total monounsaturated',
        quantity: 0.00852,
        unit: 'g',
      },
      VITB6A: {
        label: 'Vitamin B-6',
        quantity: 1.2567,
        unit: 'mg',
      },
      VITB12: {
        label: 'Vitamin B-12',
        quantity: 0,
        unit: 'µg',
      },
      WATER: {
        label: 'Water',
        quantity: 337.9884,
        unit: 'g',
      },
      K: {
        label: 'Potassium, K',
        quantity: 1793.46,
        unit: 'mg',
      },
      P: {
        label: 'Phosphorus, P',
        quantity: 242.82,
        unit: 'mg',
      },
      NA: {
        label: 'Sodium, Na',
        quantity: 25.56,
        unit: 'mg',
      },
      ZN: {
        label: 'Zinc, Zn',
        quantity: 1.2353999999999998,
        unit: 'mg',
      },
      SUGAR: {
        label: 'Sugars, total',
        quantity: 3.3228000000000004,
        unit: 'g',
      },
      CA: {
        label: 'Calcium, Ca',
        quantity: 51.12,
        unit: 'mg',
      },
      MG: {
        label: 'Magnesium, Mg',
        quantity: 97.98,
        unit: 'mg',
      },
      FE: {
        label: 'Iron, Fe',
        quantity: 3.3228000000000004,
        unit: 'mg',
      },
      VITK1: {
        label: 'Vitamin K (phylloquinone)',
        quantity: 8.094,
        unit: 'µg',
      },
      FOLFD: {
        label: 'Folate, food',
        quantity: 68.16,
        unit: 'µg',
      },
      FOLAC: {
        label: 'Folic acid',
        quantity: 0,
        unit: 'µg',
      },
      FOLDFE: {
        label: 'Folate, DFE',
        quantity: 68.16,
        unit: 'µg',
      },
    },
    measureURI: 'http://www.edamam.com/ontologies/edamam.owl#Measure_unit',
    status: 'OK',
  },
  {
    quantity: 10,
    measure: 'whole',
    foodMatch: 'onions',
    food: 'onions',
    foodId: 'food_bmrvi4ob4binw9a5m7l07amlfcoy',
    weight: 1250,
    retainedWeight: 1250,
    nutrients: {
      VITD: {
        label: 'Vitamin D',
        quantity: 0,
        unit: 'IU',
      },
      ENERC_KCAL: {
        label: 'Energy',
        quantity: 500,
        unit: 'kcal',
      },
      FASAT: {
        label: 'Fatty acids, total saturated',
        quantity: 0.525,
        unit: 'g',
      },
      VITA_RAE: {
        label: 'Vitamin A, RAE',
        quantity: 0,
        unit: 'µg',
      },
      PROCNT: {
        label: 'Protein',
        quantity: 13.75,
        unit: 'g',
      },
      TOCPHA: {
        label: 'Vitamin E (alpha-tocopherol)',
        quantity: 0.25,
        unit: 'mg',
      },
      CHOLE: {
        label: 'Cholesterol',
        quantity: 0,
        unit: 'mg',
      },
      CHOCDF: {
        label: 'Carbohydrate, by difference',
        quantity: 116.75,
        unit: 'g',
      },
      FAT: {
        label: 'Total lipid (fat)',
        quantity: 1.25,
        unit: 'g',
      },
      FIBTG: {
        label: 'Fiber, total dietary',
        quantity: 21.25,
        unit: 'g',
      },
      RIBF: {
        label: 'Riboflavin',
        quantity: 0.3375,
        unit: 'mg',
      },
      THIA: {
        label: 'Thiamin',
        quantity: 0.575,
        unit: 'mg',
      },
      FAPU: {
        label: 'Fatty acids, total polyunsaturated',
        quantity: 0.2125,
        unit: 'g',
      },
      NIA: {
        label: 'Niacin',
        quantity: 1.45,
        unit: 'mg',
      },
      VITC: {
        label: 'Vitamin C, total ascorbic acid',
        quantity: 92.5,
        unit: 'mg',
      },
      FAMS: {
        label: 'Fatty acids, total monounsaturated',
        quantity: 0.1625,
        unit: 'g',
      },
      VITB6A: {
        label: 'Vitamin B-6',
        quantity: 1.5,
        unit: 'mg',
      },
      VITB12: {
        label: 'Vitamin B-12',
        quantity: 0,
        unit: 'µg',
      },
      WATER: {
        label: 'Water',
        quantity: 1113.875,
        unit: 'g',
      },
      K: {
        label: 'Potassium, K',
        quantity: 1825,
        unit: 'mg',
      },
      P: {
        label: 'Phosphorus, P',
        quantity: 362.5,
        unit: 'mg',
      },
      NA: {
        label: 'Sodium, Na',
        quantity: 50,
        unit: 'mg',
      },
      ZN: {
        label: 'Zinc, Zn',
        quantity: 2.1250000000000004,
        unit: 'mg',
      },
      SUGAR: {
        label: 'Sugars, total',
        quantity: 53,
        unit: 'g',
      },
      CA: {
        label: 'Calcium, Ca',
        quantity: 287.5,
        unit: 'mg',
      },
      MG: {
        label: 'Magnesium, Mg',
        quantity: 125,
        unit: 'mg',
      },
      FE: {
        label: 'Iron, Fe',
        quantity: 2.625,
        unit: 'mg',
      },
      VITK1: {
        label: 'Vitamin K (phylloquinone)',
        quantity: 5,
        unit: 'µg',
      },
      FOLFD: {
        label: 'Folate, food',
        quantity: 237.5,
        unit: 'µg',
      },
      FOLAC: {
        label: 'Folic acid',
        quantity: 0,
        unit: 'µg',
      },
      FOLDFE: {
        label: 'Folate, DFE',
        quantity: 237.5,
        unit: 'µg',
      },
    },
    measureURI: 'http://www.edamam.com/ontologies/edamam.owl#Measure_unit',
    status: 'OK',
  },
];
