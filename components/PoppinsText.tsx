import React from "react";
import { Text as RNText, TextProps } from "react-native";
import { twMerge } from "tailwind-merge";

interface CustomTextProps extends TextProps {
  className?: string;
}

export function Text({ className, children, ...rest }: CustomTextProps) {
  // Classe padrão
  const defaultClass = "font-poppins-regular";
  // O twMerge combina as classes, fazendo com que "font-poppins-bold" sobrescreva o default, se presente.
  const mergedClassName = twMerge(defaultClass, className);

  return (
    <RNText {...rest} className={mergedClassName}>
      {children}
    </RNText>
  );
}
