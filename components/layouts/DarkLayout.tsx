import { FC } from "react";




export const DarkLayout: FC<any> = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: "rgba(0,0,0,0.3",
        borderRadius: "5px",
        padding: "50px",
      }}
    >
      <h3 className="code">Dar-Layout</h3>
      <div>{children} </div>
    </div>
  );
};
