import { forwardRef } from "react";

export const QuestionMark = forwardRef<
  SVGSVGElement,
  React.SVGProps<SVGSVGElement>
>((props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 30 30"
      {...props}
      ref={ref}
    >
      <defs>
        <style>{`.cls-1{fill:#f8b916;}.cls-2{fill:#fcc63f;}.cls-3{fill:#fff;`}</style>
      </defs>
      <g id="Layer_2" data-name="Layer 2">
        <path
          className="cls-1"
          d="M15.40776,19.27923l.02049.02049-1.45341,2.98865-.8597-1.6172-.73689-1.41243.02049-.02036c-3.828-1.044-6.141-5.73167-2.82485-10.15311A7.69024,7.69024,0,0,1,12.99233,7.55a5.99108,5.99108,0,0,1,2.41543,11.72921Z"
        />
        <path
          className="cls-2"
          d="M18.33494,13.50671a5.99238,5.99238,0,0,1-4.56475,5.8135v.02049l-.655,1.33047-.73689-1.41243.02049-.02036c-3.828-1.044-6.141-5.73167-2.82485-10.15311A7.69024,7.69024,0,0,1,12.99233,7.55,5.99019,5.99019,0,0,1,18.33494,13.50671Z"
        />
        <path
          className="cls-3"
          d="M14.49025,14.90585H13.48049q-.004-.21778-.004-.26531a1.76628,1.76628,0,0,1,.16236-.8078A2.463,2.463,0,0,1,14.2883,13.12a4.86118,4.86118,0,0,0,.58209-.51874.69355.69355,0,0,0,.14652-.42766.72067.72067,0,0,0-.25937-.55636,1.01063,1.01063,0,0,0-.69891-.23165,1.01359,1.01359,0,0,0-.97975.60735.5366.5366,0,0,1-.54878.31768h0a.52455.52455,0,0,1-.40639-.7578,1.836,1.836,0,0,1,.41632-.51965,2.14012,2.14012,0,0,1,1.47108-.495,2.21783,2.21783,0,0,1,1.52453.50092,1.51659,1.51659,0,0,1,.56626,1.16617,1.28224,1.28224,0,0,1-.20789.69693,4.56324,4.56324,0,0,1-.889.89492,1.69686,1.69686,0,0,0-.43756.47122A1.58012,1.58012,0,0,0,14.49025,14.90585Zm-1.00976.97123v-.06153a.5256.5256,0,0,1,.52559-.5256h.06153a.5256.5256,0,0,1,.5256.5256v.06153a.5256.5256,0,0,1-.5256.52559h-.06153A.5256.5256,0,0,1,13.48049,15.87708Z"
        />
      </g>
    </svg>
  );
});
