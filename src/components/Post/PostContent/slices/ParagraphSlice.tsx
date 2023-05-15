import { ParagraphSlice as ParagraphSliceType } from "@/prismicio-types";
import {
  PrismicRichText,
  PrismicRichTextProps,
  SliceComponentProps,
} from "@prismicio/react";

const Paragraph: React.FC<PrismicRichTextProps> = () => <div>DOPE</div>;

function ParagraphSlice({ slice }: SliceComponentProps<ParagraphSliceType>) {
  console.dir(slice, { depth: null });
  return (
    <section>
      <PrismicRichText field={slice.items[0].paragraph} />
    </section>
  );
}

export default ParagraphSlice;
