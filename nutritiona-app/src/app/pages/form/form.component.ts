import { NutritionService } from './../../services/nutrition.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  ingredientsForm!: FormGroup;
  payload = { ingr: ['1 cup rice,', '10 oz chickpeas', '2 apples'] };

  constructor(private _nutritionService: NutritionService) {
    this.initForm()
    _nutritionService.postNutritionData(this.payload).subscribe(console.log);
  }
  private initForm() {
    this.ingredientsForm = new FormGroup({
      "ingredients" : new FormControl(null, Validators.required)
    })
  }
  onSubmit() {
    console.log("🚀 ~ file: form.component.ts ~ line 25 ~ FormComponent ~ onSubmit ~ this.ingredientsForm", this.ingredientsForm)
  }
  ngOnInit(): void {}
}
