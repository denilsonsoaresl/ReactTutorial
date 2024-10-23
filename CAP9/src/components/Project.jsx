import { useState, useRef } from "react";

export default function Project({project}) {
  
  return (
   <>
    <h1>{project.name}</h1>
    {project.date_of_creation}
    

   </>
  );
}