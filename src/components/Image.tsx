import { CSSProperties, FC } from "react";
import { Stack, StackProps } from "@mui/material";

type ImageProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  blur?: boolean;
  style?: CSSProperties;
  slotProps?: {
    container: StackProps;
  };
};

const Image: FC<ImageProps> = ({ src, alt, width = 4, height = 4, blur = false, style, slotProps }) => {
  return (
    <Stack position="relative" {...slotProps?.container}>
      {blur && (
        <img
          src={src}
          alt={alt}
          width={8 * width}
          height={8 * height}
          style={{
            ...style,
            position: "absolute",
            zIndex: -1,
            inset: 0,
            filter: "blur(12px) saturate(1.5)",
          }}
        />
      )}
      <img src={src} alt={alt} width={8 * width} height={8 * height} style={style} />
    </Stack>
  );
};

export default Image;
