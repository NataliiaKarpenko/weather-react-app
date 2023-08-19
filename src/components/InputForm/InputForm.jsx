import { useState } from "react";
import { useSearchParams } from "react-router-dom";

import InputSearch from "./InputIcons/InputSearch";
import InputClose from "./InputIcons/InputClose";
import {
  FormContainer,
  InputContainer,
  Input,
  Button,
  ErrorMessage,
} from "./InputForm.styled";
import { useEffect } from "react";

const InputForm = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const urlSearchParams = searchParams.get("city");
  const city = urlSearchParams
    ? urlSearchParams.charAt(0).toUpperCase() + urlSearchParams.slice(1)
    : "";
  // const [inputValue, setInputValue] = useState(city);
  const [inputValue, setInputValue] = useState(city);

  useEffect(() => {
    if (!city) {
      setInputValue("");
    }
  }, [city]);

  const [message, setMessage] = useState("");
  const [close, setClose] = useState(() => {
    if (!inputValue) {
      return false;
    } else {
      return true;
    }
  });
  const isError = message ? true : false;

  const onInputChange = (event) => {
    const newInputValue = event.target.value;
    setInputValue(newInputValue);
    const letterTest = /^[a-zA-Z\s'-]+$/;

    if (newInputValue.length !== 0) {
      setClose(true);
    } else {
      setClose(false);
    }

    if (!letterTest.test(newInputValue) && newInputValue.length !== 0) {
      setMessage(
        "Invalid name. May contain only letters,  apostrophes, hyphens and spaces."
      );
    } else {
      setMessage("");
    }
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    const inputValue = event.target[0].value;

    if (event.target[0].value === "") {
      setMessage("Required");
    } else {
      setSearchParams({ city: inputValue.trim().toLowerCase() });
    }
  };

  return (
    <FormContainer onSubmit={onFormSubmit}>
      <InputContainer isError={isError}>
        <Input
          type="text"
          name="city"
          value={inputValue ? inputValue : ""}
          placeholder="Enter a city"
          autoComplete="off"
          onChange={onInputChange}
        />
        <ErrorMessage>{message}</ErrorMessage>
        {close && (
          <Button
            type="button"
            onClick={() => {
              setInputValue("");
              setClose(false);
            }}
          >
            <InputClose />
          </Button>
        )}
        <Button type="submit">
          <InputSearch />
        </Button>
      </InputContainer>
    </FormContainer>
  );
};

export default InputForm;
