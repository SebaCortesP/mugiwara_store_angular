import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { CommonModule } from '@angular/common';

import {
  ReactiveFormsModule,
  FormBuilder,
  Validators,
  FormGroup,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HeroComponent, FooterComponent],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.scss',
})
export class RegistroComponent {
  form: FormGroup;
  errores: string[] = [];
  enviado = false;
  mostrarErrores = false;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group(
      {
        nombre: ['', Validators.required],
        apellido: ['', Validators.required],
        fechaNacimiento: ['', [Validators.required, this.mayorDeEdadValidator]],
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(16),
            Validators.pattern(/^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/),
          ],
        ],
        confirmarPassword: ['', Validators.required],
        direccion: [''],
      },
      { validators: this.contraseñasCoinciden }
    );
  }

  // Validator personalizado: mayor de 18 años
  mayorDeEdadValidator(control: AbstractControl): ValidationErrors | null {
    if (!control.value) return null;

    const fecha = new Date(control.value);
    const hoy = new Date();
    let edad = hoy.getFullYear() - fecha.getFullYear();
    const m = hoy.getMonth() - fecha.getMonth();

    if (m < 0 || (m === 0 && hoy.getDate() < fecha.getDate())) {
      edad--;
    }

    return edad >= 18 ? null : { menorDeEdad: true };
  }

  // Validator personalizado: contraseñas coinciden
  contraseñasCoinciden(group: AbstractControl): ValidationErrors | null {
    const pass = group.get('password')?.value;
    const confirm = group.get('confirmarPassword')?.value;
    return pass === confirm ? null : { contrasenaNoCoincide: true };
  }

  enviar() {
    this.enviado = true;
    this.errores = [];

    if (this.form.invalid) {
      const c = this.form.controls;

      if (c['nombre'].errors?.['required']) {
        this.errores.push('El nombre es obligatorio.');
      }
      if (c['apellido'].errors?.['required']) {
        this.errores.push('El apellido es obligatorio.');
      }
      if (c['fechaNacimiento'].errors?.['required']) {
        this.errores.push('La fecha de nacimiento es obligatoria.');
      }
      if (c['fechaNacimiento'].errors?.['menorDeEdad']) {
        this.errores.push('Debes tener al menos 18 años.');
      }
      if (c['email'].errors?.['required']) {
        this.errores.push('El email es obligatorio.');
      }
      if (c['email'].errors?.['email']) {
        this.errores.push('El email no tiene un formato válido.');
      }
      if (c['password'].errors?.['required']) {
        this.errores.push('La contraseña es obligatoria.');
      }
      if (c['password'].errors?.['minlength']) {
        this.errores.push('La contraseña debe tener al menos 8 caracteres.');
      }
      if (c['password'].errors?.['maxlength']) {
        this.errores.push('La contraseña no puede tener más de 16 caracteres.');
      }
      if (c['password'].errors?.['pattern']) {
        this.errores.push(
          'La contraseña debe incluir al menos una mayúscula, un número y un símbolo.'
        );
      }
      if (c['confirmarPassword'].errors?.['required']) {
        this.errores.push('Debes confirmar la contraseña.');
      }
      if (this.form.errors?.['contrasenaNoCoincide']) {
        this.errores.push('Las contraseñas no coinciden.');
      }
      this.mostrarErrores = true;
      setTimeout(() => {
        this.mostrarErrores = false;
      }, 5000);
      return;
    }

    alert('Formulario enviado con éxito.');
    // console.log(this.form.value);
    // this.form.reset();
    // this.enviado = false;
    this.resetFormulario();
  }


  resetFormulario() {
    this.form.reset();
    this.enviado = false;
    this.errores = [];
    this.mostrarErrores = false;

    Object.keys(this.form.controls).forEach(key => {
      const control = this.form.get(key);
      control?.markAsPristine();
      control?.markAsUntouched();
      control?.updateValueAndValidity();
    });
  }

}
