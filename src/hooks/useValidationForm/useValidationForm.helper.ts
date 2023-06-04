import {
  IFormData,
  IFormInput,
  IValidationOptions,
} from "./useValidationForm.types.ts";
export const generateInitialFormState = (
  inputData: IFormData[]
): IFormInput[] =>
  inputData.map((item) => ({
    uniqueName: item.uniqueName,
    value: item.defaultValue ?? "",
    isEmpty: item.defaultValue === "",
    isValid: true,
    error: null,
    validationData: item.validationData,
    prefix: item.errorPrefix,
    attributes: item.attributes,
  }));

export const validateInputValue = (
  inputValue: string,
  inputName: string,
  validationData: IValidationOptions
) => {
  const {
    minLength,
    maxLength,
    specialChars,
    includeSpace = false,
    match,
  } = validationData;
  const { length } = inputValue;
  let message = "Unknown error";
  switch (true) {
    case length < minLength:
      message = `${inputName} must have min. ${
        minLength <= 4 ? `${minLength} characters.` : `${minLength} characters.`
      }`;
      break;

    case maxLength && length > maxLength:
      message = `${inputName} must have max. ${
        (maxLength as number) <= 4
          ? `${maxLength} characters.`
          : `${maxLength} characters.`
      }`;
      break;
    case !includeSpace && inputValue.includes(" "):
      message = `${inputName} cannot contain spaces.`;
      break;
    case specialChars?.some((char) => !inputValue.includes(char)):
      message = `${inputName} must contain ${specialChars?.join("; ")}`;
      break;
    case !!match && !inputValue.match(match.regexp):
      message = match?.errorMessage ?? "Unknown error";
      break;
    default:
      return true;
  }
  throw new Error(message);
};
