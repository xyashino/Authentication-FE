export interface IValidationOptions {
  minLength?: number;
  maxLength?: number;
  specialChars?: string[];
  includeSpace?: boolean;
  match?: {
    regexp: RegExp;
    errorMessage: string;
  };
  canBeEmpty?: true;
}

export interface IFormInput {
  value: string;
  isEmpty: boolean;
  isValid: boolean;
  error: null | string;
  validationData: IValidationOptions;
  uniqueName: string;
  prefix: string;
  attributes?: {
    [key: string]: any;
  };
}

export interface IFormData {
  errorPrefix: string;
  validationData: IValidationOptions;
  defaultValue?: string;
  uniqueName: string;
  attributes?: {
    [key: string]: any;
  };
}
