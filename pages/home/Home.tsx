import { Testimonials } from "@/components/testimonials/Testimonials";
import { FunctionComponent } from "react";
import { homePage } from "./styles/Home.styles";

export const Home: FunctionComponent = () => {
  return (
    <div css={homePage}>
      <Testimonials />
    </div>
  );
};
