import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from "@angular/forms";
import { Router } from "@angular/router";
import { TripDataService } from '../services/trip-data.service';
import { Trip } from '../models/trip';

@Component({
  selector: 'app-edit-trip',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-trip.component.html',
  styleUrl: './edit-trip.component.css'
})
export class EditTripComponent implements OnInit {
  public editForm!: FormGroup;
  trip!: Trip;
  submitted = false;
  message : string = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private tripDataService: TripDataService
  ) { }

  ngOnInit(): void {
      // Retrieve stashed trip ID
      let tripCode = localStorage.getItem("tripCode");
      if (!tripCode) {
        alert("Something wrong, couldn't find where I stashed tripCode!");
        this.router.navigate(['']);
        return;
      }

      // Build form
      this.editForm = this.formBuilder.group({
        _id: [],
        code: [tripCode, Validators.required],
        name: ['', Validators.required],
        length: ['', Validators.required],
        start: ['', Validators.required],
        resort: ['', Validators.required],
        perPerson: ['', Validators.required],
        image: ['', Validators.required],
        description: ['', Validators.required],
      })

      this.tripDataService.getTrip(tripCode).subscribe({
          next: (value: any) => {
            
            const rec: Trip | undefined = Array.isArray(value) ? value[0] : value;

            if (!rec) {
              this.message = 'No Trip Retrieved!';
              console.log(this.message);
              return;
            }

            this.trip = rec;

            // Normalize date for date input (yyyy-MM-dd)
            const fmt = (d?: string) => (d ? d.slice(0, 10) : '');

            this.editForm.patchValue({
              ...rec,
              start: fmt((rec as any).start)
            });

            this.message = `Trip: ${tripCode} retrieved`;
            console.log(this.message);
          },
          error: (error: any) => {
            console.log('Error:', error);
          }
        });
      }

      public onSubmit(): void {
        this.submitted = true;

        if (this.editForm.valid) {

          this.tripDataService.updateTrip(this.editForm.value).subscribe({
            next: (value: any) => {
              console.log('Update response:', value);
              localStorage.removeItem('tripCode');
              this.router.navigate(['']);
            },
            error: (error: any) => {
              console.log('Error:', error);
            }
          })
        }
      }

      get f() {
        return this.editForm.controls;
      }
    }