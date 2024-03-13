import { AbstractControl, ValidatorFn } from '@angular/forms';

export function passwordStrengthValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const password = control.value;

    const regex = /[$-/:-?{-~!"^_@`\[\]]/g;
    const letters = /[a-zA-Z]/.test(password);
    const numbers = /\d/.test(password);
    const symbols = regex.test(password);

    if (!password) {
      return null;
    }

    if (password.length < 8) {
      return {
        weak: true,
      };
    } else if (letters && numbers && symbols) {
      return {
        strong: true,
      };
    } else if (
      (letters && numbers) ||
      (letters && symbols) ||
      (numbers && symbols)
    ) {
      return {
        medium: true,
      };
    }

    return {
      easy: true,
    };
  };
}
