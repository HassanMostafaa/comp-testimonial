"use client";
import React, { type FunctionComponent } from "react";

export const TestimonialCard: FunctionComponent<{
  title: String;
  role: String;
}> = ({ title, role }) => {
  return (
    <div className="">
      <p>
        Very simple to use, great automation and keeps me on track with all I
        need to do. I also like that it can be shared with others.
      </p>
      <div className="">
        <div>
          {title && <p>{title}</p>}
          {role && <p>{role}</p>}
        </div>
      </div>
    </div>
  );
};
