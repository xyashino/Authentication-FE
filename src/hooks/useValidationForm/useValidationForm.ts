import { useLayoutEffect, useState } from "react";
import { IFormData, IFormInput } from "./useValidationForm.types.ts";
import {
  generateInitialFormState,
  validateInputValue,
} from "./useValidationForm.helper.ts";

export const useValidationForm = (inputData: IFormData[]) => {
  const [formState, setFormState] = useState(
    generateInitialFormState(inputData)
  );
  const [isFormValid, setIsFormValid] = useState(false);

  useLayoutEffect(() => {
    let isValid = true;
    for (const { isValid: isFieldValid } of Object.values(formState)) {
      if (!isFieldValid) {
        isValid = false;
        break;
      }
    }
    setIsFormValid(!isValid);
  }, [formState]);

  const updateValue = (newValue: string, uniqueName: string) => {
    if (!formState[uniqueName]) return;
    const copyObj: IFormInput = { ...formState[uniqueName] };
    try {
      copyObj.value = newValue;
      copyObj.isEmpty = newValue.length === 0;
      validateInputValue(newValue, copyObj.prefix, copyObj.validationData);
      copyObj.isValid = true;
      copyObj.error = null;
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unknown error";
      copyObj.isValid = false;
      copyObj.error = message;
    }
    setFormState((prevState) => ({
      ...prevState,
      [uniqueName]: copyObj,
    }));
  };

  return {
    formState,
    updateValue,
    isFormValid,
  };
};
