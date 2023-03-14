import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

//Form validation
import * as Yup from "yup";
const passwordSchema = Yup.object().shape({
  passwordLength: Yup.number()
    .min(4, "should be minimum 4 characters")
    .max(16, "should be max of 16 characters")
    .required("This is required"),
});

export default function App() {
  const [password, setPassword] = useState("");
  const [isPassGenerated, setIsPassGenerated] = useState(false);
  const [lowercase, setLowercase] = useState(true);
  const [upperCase, setUpperCase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);

  const generatePasswordString = (passLength: number) => {
    let characterList = "";
    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTWXYZ";
    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    const digits = "0123456789";
    const specialChars = "!@#$%^&*()_+-/:";
    if (upperCase) {
      characterList += upperCaseChars;
    }
    if (lowercase) {
      characterList += lowerCaseChars;
    }
    if (numbers) {
      characterList += digits;
    }
    if (symbols) {
      characterList += specialChars;
    }
    const passwordResult = createPassword(characterList, passLength);
    setPassword(passwordResult);
    setIsPassGenerated(true);
  };

  const createPassword = (characters: string, passwordLength: number) => {
    let result = "";
    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.round(Math.random() * characters.length);
      result += characters.charAt(characterIndex);
    }
    return result;
  };

  const resetPasswordState = () => {
    setPassword("");
    setIsPassGenerated(false);
    setLowercase(true);
    setUpperCase(false);
    setNumbers(false);
    setSymbols(false);
  };

  return (
    <View>
      <Text>App</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
