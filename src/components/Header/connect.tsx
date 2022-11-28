import React from "react";
import { Button } from "@chakra-ui/react";

interface AppButtonProps {
  label: string;
  onClick?: () => void;
  size?: "sm" | "md" | "lg";
  variant?: "solid" | "outline" | "ghost" | "link" | "unstyled";
  colorScheme?: "yellow" | "gray";
}

export const AppButton = ({
  label,
  onClick,
  size,
  variant,
  colorScheme,
}: AppButtonProps) => {
  return (
    <Button
      onClick={onClick}
      size={size}
      variant={variant}
      colorScheme={colorScheme}
    >
      {label}
    </Button>
  );
};
