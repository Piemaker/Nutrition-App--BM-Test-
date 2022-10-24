export interface ResponseI {
  uri: string;
  yield: number;
  calories: number;
  totalWeight: number;
  dietLabels: string[];
  healthLabels: string[];
  cautions: any[];
  totalNutrients: TotalNutrients;
  totalDaily: TotalDaily;
  ingredients: Ingredient[];
  totalNutrientsKCal: TotalNutrientsKCal;
}
export interface FactList {
  totalNutrients: TotalNutrients;
  totalDaily: TotalDaily;
}
interface TotalNutrientsKCal {
  ENERC_KCAL: ENERCKCAL;
  PROCNT_KCAL: ENERCKCAL;
  FAT_KCAL: ENERCKCAL;
  CHOCDF_KCAL: ENERCKCAL;
}

interface Ingredient {
  text: string;
  parsed: Parsed[];
}

export interface Parsed {
  quantity: number;
  measure: string;
  foodMatch: string;
  food: string;
  foodId: string;
  weight: number;
  retainedWeight: number;
  nutrients: Nutrients;
  measureURI: string;
  status: string;
}

interface Nutrients {
  RIBF: ENERCKCAL;
  VITD: ENERCKCAL;
  THIA: ENERCKCAL;
  FAPU: ENERCKCAL;
  NIA: ENERCKCAL;
  ENERC_KCAL: ENERCKCAL;
  FASAT: ENERCKCAL;
  VITC: ENERCKCAL;
  PROCNT: ENERCKCAL;
  CHOLE: ENERCKCAL;
  FAMS: ENERCKCAL;
  CHOCDF: ENERCKCAL;
  FAT: ENERCKCAL;
  VITB6A: ENERCKCAL;
  VITB12: ENERCKCAL;
  WATER: ENERCKCAL;
  K: ENERCKCAL;
  P: ENERCKCAL;
  NA: ENERCKCAL;
  ZN: ENERCKCAL;
  CA: ENERCKCAL;
  MG: ENERCKCAL;
  FE: ENERCKCAL;
  FOLFD: ENERCKCAL;
  FOLAC: ENERCKCAL;
  FOLDFE: ENERCKCAL;
  VITA_RAE?: ENERCKCAL;
  TOCPHA?: ENERCKCAL;
  FIBTG?: ENERCKCAL;
  SUGAR?: ENERCKCAL;
  VITK1?: ENERCKCAL;
}

interface TotalDaily {
  ENERC_KCAL?: ENERCKCAL;
  FAT?: ENERCKCAL;
  FASAT?: ENERCKCAL;
  CHOCDF?: ENERCKCAL;
  FIBTG?: ENERCKCAL;
  PROCNT?: ENERCKCAL;
  CHOLE?: ENERCKCAL;
  NA?: ENERCKCAL;
  CA?: ENERCKCAL;
  MG?: ENERCKCAL;
  K?: ENERCKCAL;
  FE?: ENERCKCAL;
  ZN?: ENERCKCAL;
  P?: ENERCKCAL;
  VITA_RAE?: ENERCKCAL;
  VITC?: ENERCKCAL;
  THIA?: ENERCKCAL;
  RIBF?: ENERCKCAL;
  NIA?: ENERCKCAL;
  VITB6A?: ENERCKCAL;
  FOLDFE?: ENERCKCAL;
  VITB12?: ENERCKCAL;
  VITD?: ENERCKCAL;
  TOCPHA?: ENERCKCAL;
  VITK1?: ENERCKCAL;
}

interface TotalNutrients {
  ENERC_KCAL?: ENERCKCAL;
  FAT?: ENERCKCAL;
  FASAT?: ENERCKCAL;
  FAMS?: ENERCKCAL;
  FAPU?: ENERCKCAL;
  CHOCDF?: ENERCKCAL;
  'CHOCDF.net'?: ENERCKCAL;
  FIBTG?: ENERCKCAL;
  SUGAR?: ENERCKCAL;
  PROCNT?: ENERCKCAL;
  CHOLE?: ENERCKCAL;
  NA?: ENERCKCAL;
  CA?: ENERCKCAL;
  MG?: ENERCKCAL;
  K?: ENERCKCAL;
  FE?: ENERCKCAL;
  ZN?: ENERCKCAL;
  P?: ENERCKCAL;
  VITA_RAE?: ENERCKCAL;
  VITC?: ENERCKCAL;
  THIA?: ENERCKCAL;
  RIBF?: ENERCKCAL;
  NIA?: ENERCKCAL;
  VITB6A?: ENERCKCAL;
  FOLDFE?: ENERCKCAL;
  FOLFD?: ENERCKCAL;
  FOLAC?: ENERCKCAL;
  VITB12?: ENERCKCAL;
  VITD?: ENERCKCAL;
  TOCPHA?: ENERCKCAL;
  VITK1?: ENERCKCAL;
  WATER?: ENERCKCAL;
}

interface ENERCKCAL {
  label: string;
  quantity: number;
  unit: string;
}

export interface FormDataI {
  ingr: string[];
}

export const resp = {
  uri: 'http://www.edamam.com/ontologies/edamam.owl#recipe_b9a5ca9355264ab5973c675d71ff13c1',
  yield: 6,
  calories: 1773,
  totalWeight: 478.49523125,
  dietLabels: ['HIGH_FIBER', 'LOW_FAT', 'LOW_SODIUM'],
  healthLabels: [
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
    'KOSHER',
  ],
  cautions: [],
  totalNutrients: {
    ENERC_KCAL: {
      label: 'Energy',
      quantity: 1773.611974125,
      unit: 'kcal',
    },
    FAT: {
      label: 'Total lipid (fat)',
      quantity: 18.254111967500002,
      unit: 'g',
    },
    FASAT: {
      label: 'Fatty acids, total saturated',
      quantity: 2.0175762444375,
      unit: 'g',
    },
    FAMS: {
      label: 'Fatty acids, total monounsaturated',
      quantity: 4.2566793343125005,
      unit: 'g',
    },
    FAPU: {
      label: 'Fatty acids, total polyunsaturated',
      quantity: 8.0445047654375,
      unit: 'g',
    },
    CHOCDF: {
      label: 'Carbohydrate, by difference',
      quantity: 333.17324807187504,
      unit: 'g',
    },
    'CHOCDF.net': {
      label: 'Carbohydrates (net)',
      quantity: 298.58682985937503,
      unit: 'g',
    },
    FIBTG: {
      label: 'Fiber, total dietary',
      quantity: 34.5864182125,
      unit: 'g',
    },
    SUGAR: {
      label: 'Sugars, total',
      quantity: 30.33398974375,
      unit: 'g',
    },
    PROCNT: {
      label: 'Protein',
      quantity: 70.92097383687499,
      unit: 'g',
    },
    CHOLE: {
      label: 'Cholesterol',
      quantity: 0,
      unit: 'mg',
    },
    NA: {
      label: 'Sodium, Na',
      quantity: 69.9888555,
      unit: 'mg',
    },
    CA: {
      label: 'Calcium, Ca',
      quantity: 179.14228181250002,
      unit: 'mg',
    },
    MG: {
      label: 'Magnesium, Mg',
      quantity: 292.2112326875,
      unit: 'mg',
    },
    K: {
      label: 'Potassium, K',
      quantity: 2203.1957603749997,
      unit: 'mg',
    },
    FE: {
      label: 'Iron, Fe',
      quantity: 13.778644466874999,
      unit: 'mg',
    },
    ZN: {
      label: 'Zinc, Zn',
      quantity: 10.0864683825,
      unit: 'mg',
    },
    P: {
      label: 'Phosphorus, P',
      quantity: 925.00798275,
      unit: 'mg',
    },
    VITA_RAE: {
      label: 'Vitamin A, RAE',
      quantity: 8.5048569375,
      unit: 'µg',
    },
    VITC: {
      label: 'Vitamin C, total ascorbic acid',
      quantity: 11.33980925,
      unit: 'mg',
    },
    THIA: {
      label: 'Thiamin',
      quantity: 1.4887722530625,
      unit: 'mg',
    },
    RIBF: {
      label: 'Riboflavin',
      quantity: 0.69460989025,
      unit: 'mg',
    },
    NIA: {
      label: 'Niacin',
      quantity: 7.4886615135625,
      unit: 'mg',
    },
    VITB6A: {
      label: 'Vitamin B-6',
      quantity: 1.7994494871875002,
      unit: 'mg',
    },
    FOLDFE: {
      label: 'Folate, DFE',
      quantity: 1596.6184380625,
      unit: 'µg',
    },
    FOLFD: {
      label: 'Folate, food',
      quantity: 1596.6184380625,
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
    TOCPHA: {
      label: 'Vitamin E (alpha-tocopherol)',
      quantity: 2.3246608962499997,
      unit: 'mg',
    },
    VITK1: {
      label: 'Vitamin K (phylloquinone)',
      quantity: 25.5145708125,
      unit: 'µg',
    },
    WATER: {
      label: 'Water',
      quantity: 46.90793376,
      unit: 'g',
    },
  },
  totalDaily: {
    ENERC_KCAL: {
      label: 'Energy',
      quantity: 88.68059870625,
      unit: '%',
    },
    FAT: {
      label: 'Fat',
      quantity: 28.083249180769236,
      unit: '%',
    },
    FASAT: {
      label: 'Saturated',
      quantity: 10.087881222187502,
      unit: '%',
    },
    CHOCDF: {
      label: 'Carbs',
      quantity: 111.05774935729168,
      unit: '%',
    },
    FIBTG: {
      label: 'Fiber',
      quantity: 138.34567285,
      unit: '%',
    },
    PROCNT: {
      label: 'Protein',
      quantity: 141.84194767374998,
      unit: '%',
    },
    CHOLE: {
      label: 'Cholesterol',
      quantity: 0,
      unit: '%',
    },
    NA: {
      label: 'Sodium',
      quantity: 2.9162023125,
      unit: '%',
    },
    CA: {
      label: 'Calcium',
      quantity: 17.91422818125,
      unit: '%',
    },
    MG: {
      label: 'Magnesium',
      quantity: 69.57410302083333,
      unit: '%',
    },
    K: {
      label: 'Potassium',
      quantity: 46.87650553989361,
      unit: '%',
    },
    FE: {
      label: 'Iron',
      quantity: 76.54802481597221,
      unit: '%',
    },
    ZN: {
      label: 'Zinc',
      quantity: 91.69516711363636,
      unit: '%',
    },
    P: {
      label: 'Phosphorus',
      quantity: 132.14399753571428,
      unit: '%',
    },
    VITA_RAE: {
      label: 'Vitamin A',
      quantity: 0.9449841041666667,
      unit: '%',
    },
    VITC: {
      label: 'Vitamin C',
      quantity: 12.599788055555557,
      unit: '%',
    },
    THIA: {
      label: 'Thiamin (B1)',
      quantity: 124.06435442187501,
      unit: '%',
    },
    RIBF: {
      label: 'Riboflavin (B2)',
      quantity: 53.43153001923077,
      unit: '%',
    },
    NIA: {
      label: 'Niacin (B3)',
      quantity: 46.80413445976562,
      unit: '%',
    },
    VITB6A: {
      label: 'Vitamin B6',
      quantity: 138.4191913221154,
      unit: '%',
    },
    FOLDFE: {
      label: 'Folate equivalent (total)',
      quantity: 399.154609515625,
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
    TOCPHA: {
      label: 'Vitamin E',
      quantity: 15.497739308333331,
      unit: '%',
    },
    VITK1: {
      label: 'Vitamin K',
      quantity: 21.26214234375,
      unit: '%',
    },
  },
  ingredients: [
    {
      text: '1 cup rice,',
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
    {
      text: '10 oz chickpeas',
      parsed: [
        {
          quantity: 10,
          measure: 'ounce',
          foodMatch: 'chickpeas',
          food: 'chickpeas',
          foodId: 'food_baux5rqbkto336asd7w3lbbi1koo',
          weight: 283.49523125,
          retainedWeight: 283.49523125,
          nutrients: {
            RIBF: {
              label: 'Riboflavin',
              quantity: 0.6010098902500001,
              unit: 'mg',
            },
            VITD: {
              label: 'Vitamin D',
              quantity: 0,
              unit: 'IU',
            },
            THIA: {
              label: 'Thiamin',
              quantity: 1.3522722530625,
              unit: 'mg',
            },
            FAPU: {
              label: 'Fatty acids, total polyunsaturated',
              quantity: 7.7422547654375,
              unit: 'g',
            },
            NIA: {
              label: 'Niacin',
              quantity: 4.3686615135624995,
              unit: 'mg',
            },
            ENERC_KCAL: {
              label: 'Energy',
              quantity: 1071.6119741250002,
              unit: 'kcal',
            },
            FASAT: {
              label: 'Fatty acids, total saturated',
              quantity: 1.7094762444375002,
              unit: 'g',
            },
            VITA_RAE: {
              label: 'Vitamin A, RAE',
              quantity: 8.504856937500001,
              unit: 'µg',
            },
            VITC: {
              label: 'Vitamin C, total ascorbic acid',
              quantity: 11.33980925,
              unit: 'mg',
            },
            PROCNT: {
              label: 'Protein',
              quantity: 58.031473836875,
              unit: 'g',
            },
            TOCPHA: {
              label: 'Vitamin E (alpha-tocopherol)',
              quantity: 2.32466089625,
              unit: 'mg',
            },
            CHOLE: {
              label: 'Cholesterol',
              quantity: 0,
              unit: 'mg',
            },
            FAMS: {
              label: 'Fatty acids, total monounsaturated',
              quantity: 3.9037293343125,
              unit: 'g',
            },
            CHOCDF: {
              label: 'Carbohydrate, by difference',
              quantity: 178.46024807187504,
              unit: 'g',
            },
            FAT: {
              label: 'Total lipid (fat)',
              quantity: 17.1231119675,
              unit: 'g',
            },
            VITB6A: {
              label: 'Vitamin B-6',
              quantity: 1.5166994871875001,
              unit: 'mg',
            },
            VITB12: {
              label: 'Vitamin B-12',
              quantity: 0,
              unit: 'µg',
            },
            FIBTG: {
              label: 'Fiber, total dietary',
              quantity: 34.5864182125,
              unit: 'g',
            },
            WATER: {
              label: 'Water',
              quantity: 21.77243376,
              unit: 'g',
            },
            K: {
              label: 'Potassium, K',
              quantity: 2035.4957603750001,
              unit: 'mg',
            },
            P: {
              label: 'Phosphorus, P',
              quantity: 714.4079827500001,
              unit: 'mg',
            },
            NA: {
              label: 'Sodium, Na',
              quantity: 68.03885550000001,
              unit: 'mg',
            },
            ZN: {
              label: 'Zinc, Zn',
              quantity: 7.8244683825,
              unit: 'mg',
            },
            SUGAR: {
              label: 'Sugars, total',
              quantity: 30.33398974375,
              unit: 'g',
            },
            CA: {
              label: 'Calcium, Ca',
              quantity: 161.5922818125,
              unit: 'mg',
            },
            MG: {
              label: 'Magnesium, Mg',
              quantity: 223.9612326875,
              unit: 'mg',
            },
            FE: {
              label: 'Iron, Fe',
              quantity: 12.218644466875,
              unit: 'mg',
            },
            VITK1: {
              label: 'Vitamin K (phylloquinone)',
              quantity: 25.5145708125,
              unit: 'µg',
            },
            FOLFD: {
              label: 'Folate, food',
              quantity: 1579.0684380625003,
              unit: 'µg',
            },
            FOLAC: {
              label: 'Folic acid',
              quantity: 0,
              unit: 'µg',
            },
            FOLDFE: {
              label: 'Folate, DFE',
              quantity: 1579.0684380625003,
              unit: 'µg',
            },
          },
          measureURI:
            'http://www.edamam.com/ontologies/edamam.owl#Measure_ounce',
          status: 'OK',
        },
      ],
    },
  ],
  totalNutrientsKCal: {
    ENERC_KCAL: {
      label: 'Energy',
      quantity: 1774,
      unit: 'kcal',
    },
    PROCNT_KCAL: {
      label: 'Calories from protein',
      quantity: 283,
      unit: 'kcal',
    },
    FAT_KCAL: {
      label: 'Calories from fat',
      quantity: 164,
      unit: 'kcal',
    },
    CHOCDF_KCAL: {
      label: 'Calories from carbohydrates',
      quantity: 1327,
      unit: 'kcal',
    },
  },
};


const singleResp = {
  uri: 'http://www.edamam.com/ontologies/edamam.owl#recipe_0eb622915c424f6ab1a1e4f6b4a67728',
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

const riceResp = {
  uri: 'http://www.edamam.com/ontologies/edamam.owl#recipe_1af03457b14441d1a0c98139f1feed53',
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
      text: '1 cup rice,',
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
    {},
  ],
};