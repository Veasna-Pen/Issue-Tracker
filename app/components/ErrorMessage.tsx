import { Text } from "@radix-ui/themes";
import { PropsWithChildren, ReactNode } from "react";

export const ErrorMessage = ({ children }: PropsWithChildren) => {
  if (!children) return null;

  return (
    <div>
      <Text color="red" as="p">
        {children}
      </Text>
    </div>
  );
};
