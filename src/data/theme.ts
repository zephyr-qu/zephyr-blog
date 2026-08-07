import type { TailwindColor } from "@/utils/types/tailwind";
import { MAP_COLOR_VARIANT_TO_TEXT } from "@/utils/mapVariants";

type Theme = {
  colors: {
    primary: TailwindColor;
    blur: {
      top: TailwindColor;
      bottom: TailwindColor;
    };
  };
};

const theme: Theme = {
  colors: {
    primary: "orange",
    blur: {
      top: "orange",
      bottom: "violet",
    },
  },
};

export const primaryTextClass = MAP_COLOR_VARIANT_TO_TEXT[theme.colors.primary];

export default theme;
