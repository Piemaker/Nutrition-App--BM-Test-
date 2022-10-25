import { NutritionService } from './../../../../services/nutrition.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  // this will handle form auto sizing upon exceeding 10 rows
  @ViewChild('autosize') autosize: CdkTextareaAutosize | undefined;

  ingredientsForm!: FormGroup;
  isLoading = false;
  nutritionSubscription: Subscription | undefined;

  constructor(
    private _nutritionService: NutritionService,
    private _snackBar: MatSnackBar,
    private router: Router
  ) {
    this.initForm();
  }
  private initForm() {
    this.ingredientsForm = new FormGroup({
      ingredients: new FormControl(null, Validators.required),
    });
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000,
    });
  }
  onSubmit(event: SubmitEvent) {
    this.isLoading = true;
    event.preventDefault();
    let ingredientsArr = this.ingredientsForm
      .get('ingredients')
      ?.value.split('\n');

    let ingredientsObj = { ingr: ingredientsArr };

    this._nutritionService
      .postNutritionData({ formData: ingredientsObj })
      .subscribe({
        next: (data) => {
          this._nutritionService.nutritionsChange.next(data);
          this.router.navigate(['/details']);
        },
        error: (err: Error) => {
          this.openSnackBar(err.message, 'Close');
          this.isLoading = false;
        },
        complete: () => {
          this.isLoading = false;
        },
      });
  }
  ngOnInit(): void {}

  ngOnDestroy() {
    this.nutritionSubscription?.unsubscribe();
  }
}
