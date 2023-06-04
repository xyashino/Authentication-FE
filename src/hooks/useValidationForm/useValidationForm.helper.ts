import {
  IFormData,
  IFormInput,
  IValidationOptions,
} from "./useValidationForm.types.ts";
export const generateInitialFormState = (
  inputData: IFormData[]
): IFormInput[] =>
  inputData.map(
    ({
      uniqueName,
      defaultValue,
      validationData,
      attributes,
      errorPrefix,
    }) => ({
      uniqueName,
      value: defaultValue ?? "",
      isEmpty: defaultValue === "",
      isValid: true,
      error: null,
      validationData,
      prefix: errorPrefix,
      attributes,
    })
  );

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
    canBeEmpty,
  } = validationData;
  const { length } = inputValue;
  let message = "Unknown error";
  switch (true) {
    case canBeEmpty && inputValue.length === 0:
      return true;

    case !!minLength && length < minLength:
      message = `${inputName} must have min. ${minLength} characters.`;
      break;

    case maxLength && length > maxLength:
      message = `${inputName} must have max. ${maxLength} characters.`;
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
