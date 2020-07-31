import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Holiday } from 'src/app/_models/holiday';
import { AuthService } from 'src/app/authentification/auth.service';
import {StartEndValidator} from './StartEndDateValidator';
import { SnackbarService } from 'src/app/snackbar.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-edit-Holiday',
  templateUrl: './create-edit-Holiday.component.html',
  styleUrls: ['./create-edit-Holiday.component.css']
})
export class CreateEditHolidayComponent implements OnInit {
  form: FormGroup;
  @Input() formTitle: string;
  @Input() displayButton;
  @Input() childmessage: string;
  @Input() buttonName: string;
   constructor(private formBuilder: FormBuilder,
               private authService: AuthService,
               private snackBar: SnackbarService,
               private route: Router,
               ) { }

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
    this.snackBar.message(this.childmessage);
    this.route.navigate(['/holiday/colleagues']);

  }
  deleteHoliday(): void
  {
    if (this.authService.deleteHoliday()){
      this.snackBar.message('Holiday deleted ! GET BACK TO WORK' );
      this.route.navigate(['/home']);
    }
    else
    {
      this.snackBar.error('You dont have a Holiday scheduled yet');
    }
    
  }
}
