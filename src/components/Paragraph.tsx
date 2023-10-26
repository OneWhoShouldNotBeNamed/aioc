import React from "react";

interface Props {
  content: {
    desc: string;
    heading: string;
    id: string;
  };
}

function Paragraph(content: Props) {
  return (
    <div className="bg-white my-8 p-8 rounded-2xl" id={`${content.content.id}`}>
      <div className="text-[#AB5F27] text-[25px] mb-4">
        {content.content.heading}
      </div>
      <div className="text-black text-base">{content.content.desc}</div>
    </div>
  );
}

export default Paragraph;
