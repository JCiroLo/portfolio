import { CSSProperties, FC } from "react";
import Stack from "@mui/material/Stack";
import { type StackProps } from "@mui/material/Stack";

type ImageProps = {
  src: string;
  alt: string;
  width?: number | string;
  height?: number | string;
  borderRadius?: number | string;
  aspect?: number;
  blur?: boolean;
  style?: CSSProperties;
  slotProps?: {
    container: StackProps;
  };
};

const Image: FC<ImageProps> = ({ src, alt, width = 4, height = 4, borderRadius = 0, aspect, blur = false, style, slotProps }) => {
  const realWidth = typeof width === "string" ? width : 8 * width;
  const realHeight = typeof height === "string" ? height : 8 * height;
  const realBorderRadius = typeof borderRadius === "string" ? borderRadius : 8 * borderRadius;

  return (
    <Stack position="relative" {...slotProps?.container}>
      {blur && (
        <img
          src={src}
          alt={alt}
          width={realWidth}
          height={aspect ? undefined : realHeight}
          style={{
            ...style,
            position: "absolute",
            zIndex: -1,
            inset: 0,
            filter: "blur(12px) saturate(1.5)",
            borderRadius: realBorderRadius,
            aspectRatio: aspect,
          }}
        />
      )}
      <img
        src={src}
        alt={alt}
        width={realWidth}
        height={aspect ? undefined : realHeight}
        style={{ ...style, borderRadius: realBorderRadius, aspectRatio: aspect }}
      />
    </Stack>
  );
};

export default Image;
