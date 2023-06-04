import {
  IFormData,
  IFormInput,
  IValidationOptions,
} from "./useValidationForm.types.ts";

export const generateInitialFormState = (
  inputData: IFormData[]
): { [key: string]: IFormInput } => {
  const initialState: { [key: string]: IFormInput } = {};
  inputData.forEach((item) => {
    initialState[item.uniqueName] = {
      value: item.defaultValue ?? "",
      isEmpty: item.defaultValue === "",
      isValid: true,
      error: null,
      validationData: item.validationData,
      prefix: item.errorPrefix,
    };
  });
  return initialState;
};

// export const updateLinkItem = (
//   value: IFormInput,
//   formData: { [key: string]: IFormInput }
// ) => {
//   const { linkWith } = obj.validationData;
//   if (!linkWith) return;
//   const { uniqueName, isConfirm } = linkWith;
//   const linkObj = { ...formData[uniqueName] };
//   if (!linkObj) return;
//   const { value: linkValue } = linkObj;
//   const isLinkSame = linkValue === obj.value;
//   if (isLinkSame) return;
//
//   const error = `${obj.prefix} must be the same as ${linkObj.prefix}`;
//
//   if (isConfirm) {
//     obj.isValid = false;
//     obj.error = error;
//     return undefined;
//   }
//   linkObj.isValid = false;
//   linkObj.error = error;
//   return { [uniqueName]: linkObj };
// };

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
