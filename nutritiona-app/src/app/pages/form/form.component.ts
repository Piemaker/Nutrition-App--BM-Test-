import { NutritionService } from './../../services/nutrition.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  // this will handle form auto sizing upon exceeding 10 rows
  @ViewChild('autosize') autosize: CdkTextareaAutosize | undefined;

  ingredientsForm!: FormGroup;
  payload = { ingr: ['1 cup rice,', '10 oz chickpeas', '2 apples'] };
  isLoading = false;

  constructor(private _nutritionService: NutritionService) {
    this.initForm();
  }
  private initForm() {
    this.ingredientsForm = new FormGroup({
      ingredients: new FormControl(null, Validators.required),
    });
  }
  onSubmit(event: SubmitEvent) {
    this.isLoading = true;
    event.preventDefault();
    let ingredientsArr = this.ingredientsForm
      .get('ingredients')
      ?.value.split('\n');

    let ingredientsObj = { ingr: ingredientsArr };

    this._nutritionService.postNutritionData(ingredientsObj).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (err: Error) => {
        this.isLoading = false;
      },
      complete: () => {
        this.isLoading = false;
      },
    });
  }
  ngOnInit(): void {}
}
