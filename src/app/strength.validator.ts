import { AbstractControl, ValidatorFn } from '@angular/forms';

export function passwordStrengthValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const password = control.value;

    const regex = /[$-/:-?{-~!"^_@`\[\]]/g;
    const hasLetters = /[a-zA-Z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSymbols = regex.test(password);

    if (!password) {
      return null;
    }

    if (password.length < 8) {
      return {
        weak: true,
      };
    } else if (hasLetters && hasNumbers && hasSymbols) {
      return {
        strong: true,
      };
    } else if (
      (hasLetters && hasNumbers) ||
      (hasLetters && hasSymbols) ||
      (hasNumbers && hasSymbols)
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
