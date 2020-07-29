import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Holiday } from 'src/app/_models/holiday';
import { AuthService } from 'src/app/authentification/auth.service';
import {StartEndValidator} from './StartEndDateValidator';
@Component({
  selector: 'app-create-edit-Holiday',
  templateUrl: './create-edit-Holiday.component.html',
  styleUrls: ['./create-edit-Holiday.component.css']
})
export class CreateEditHolidayComponent implements OnInit {
  form: FormGroup;
  @Input() formTitle: string;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService) { }

  ngOnInit(): void  {
    this.form = this.formBuilder.group({
      startDate: ['', [Validators.required]],
      endDate: ['', [Validators.required]]}, 
    {validator: StartEndValidator});}

  get startDate(): AbstractControl {return this.form.get('startDate'); }
  get endDate(): AbstractControl {return this.form.get('endDate'); }

  createHoliday(): void
  {
    const holiday = new Holiday(this.startDate.value, this.endDate.value);
    this.authService.addHoliday(holiday);

  }
  
  method2()
  {
  
    console.log(this.form.controls);
  }
}
