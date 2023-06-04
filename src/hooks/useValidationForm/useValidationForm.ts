import { ChangeEvent, useLayoutEffect, useState } from "react";
import { IFormData } from "./useValidationForm.types.ts";
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
    const copyArray = [...formState];
    const foundInput = copyArray.find((item) => item.uniqueName === uniqueName);
    if (!foundInput) return;

    try {
      foundInput.value = newValue;
      foundInput.isEmpty = newValue.length === 0;
      validateInputValue(
        newValue,
        foundInput.prefix,
        foundInput.validationData
      );
      foundInput.isValid = true;
      foundInput.error = null;
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unknown error";
      foundInput.isValid = false;
      foundInput.error = message;
    }
    setFormState(copyArray);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    updateValue(value, name);
  };

  return {
    formState,
    isFormValid,
    onChange: handleChange,
  };
};
