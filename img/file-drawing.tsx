import * as React from 'react'
import styled from 'styled-components'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FileDrawing: React.SFC<{ SVGElement?: any }> = ({
  SVGElement = styled.svg``,
}) => {
  return (
    <SVGElement
      width="939"
      height="965"
      viewBox="0 0 939 965"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M339.923 296.46C245.899 286.516 103.765 355.859 68.9234 466.96C44.9235 543.491 112.546 648.651 186.923 684.96C261.301 721.27 464.924 615.46 548.505 615.46C598.505 615.46 559.053 745.28 798.421 638.682C989.915 553.404 909.878 433.611 845.923 404.385C784.837 362.188 760.5 296.46 784.246 228.46C816.184 137 534.027 95.8528 548.505 242.776C562.983 389.699 457.454 308.891 339.923 296.46Z"
        stroke="#0C7983"
        strokeWidth="10"
      />
      <path
        d="M175.023 582.039C112.86 513.798 33.6033 374.249 213.874 361.976C394.145 349.703 313.693 285.271 422.477 249.299C512.732 230.784 712.369 224.119 788.876 345.577C884.511 497.4 866.357 570.442 800.923 615.96C754.923 647.96 757.135 502.184 606.423 733.862C529.923 851.46 280.923 812.96 295.163 733.862C312.445 637.867 262.887 668.795 175.023 582.039Z"
        fill="#36AB8A"
      />
      <path
        d="M351.366 646.489V264.489H536.755L610.366 338.16V646.489H351.366Z"
        fill="#68C281"
      />
      <path
        d="M392.26 338.16H561.292M392.26 460.946C462.53 460.946 501.927 460.946 572.197 460.946M392.26 529.16H572.197M392.26 586.46H572.197M392.26 398.189C462.53 398.189 501.927 398.189 572.197 398.189M351.366 264.489V646.489H610.366C610.366 526.079 610.366 458.57 610.366 338.16L536.755 264.489H351.366Z"
        stroke="#2F4858"
        strokeWidth="10"
      />
      <path
        d="M315.923 681.96V299.96H501.313L574.923 373.632V681.96H315.923Z"
        fill="#68C281"
      />
      <path
        d="M356.818 373.632H525.85M356.818 496.418C427.088 496.418 466.485 496.418 536.755 496.418M356.818 564.632H536.755M356.818 621.932H536.755M356.818 433.66C427.088 433.66 466.485 433.66 536.755 433.66M315.923 299.96V681.96H574.923C574.923 561.551 574.923 494.042 574.923 373.632L501.313 299.96H315.923Z"
        stroke="#2F4858"
        strokeWidth="10"
      />
    </SVGElement>
  )
}

export default FileDrawing
