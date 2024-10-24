import { FormControl } from '@angular/forms';

export interface registerFromInterface {
  firstname: FormControl<string | null>;
  lastname: FormControl<string | null>;
  email: FormControl<string | null>;
  password: FormControl<string | null>;
  phoneNumber: FormControl<number | null>;
  passwordConfirm: FormControl<string | null>;
}
