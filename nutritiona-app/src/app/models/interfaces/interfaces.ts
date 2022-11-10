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

export interface ingredientsDataI {
  quantity: number;
  measure: string;
  food: string;
  weight: number;
  nutrients: {
    ENERC_KCAL: {
      quantity : number
    }
  };
}
