import {Component} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
    selector: 'app-new-user-form',
    templateUrl: './new-user-form.component.html',
    styleUrls: ['./new-user-form.component.css'],
})
export class NewUserFormComponent {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
}
