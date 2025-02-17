import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup , ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-usuario',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent {
    fb=inject(FormBuilder);
    ocultarpassword: boolean=true;
    form: FormGroup=this.fb.group({
      usuario:['', [Validators.required]],
      password:['',[Validators.required, Validators.minLength(5)]]
    });
    onSubmit():void {
      console.log('Form Submitted: ', this.form.value);
    }
    goToListProduct()
    {
         window.history.back();
    }
}
