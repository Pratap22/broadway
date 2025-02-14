import { useColor } from "../context/theme";

const ZD = () => {
  const color = useColor();

  return (
    <div style={{ backgroundColor: color.currentColor }}>Component ZD</div>
  );
};

const ZC = () => (
  <div>
    Component ZC
    <ZD />
  </div>
);

const ZB = () => (
  <div>
    Component ZB
    <ZC />
  </div>
);

const ZA = () => (
  <div>
    Component ZA
    <ZB />
  </div>
);

const Z = () => {
  const color = useColor();
  return (
    <div>
      <div style={{ backgroundColor: color.currentColor }}>Component Z</div>
      <ZA />
    </div>
  );
};

const Y = () => (
  <div>
    Component Y
    <Z />
  </div>
);

const X = () => (
  <div>
    Component X
    <Y />
  </div>
);

const W = () => (
  <div>
    Component W
    <X />
  </div>
);

const V = () => (
  <div>
    Component V
    <W />
  </div>
);

const U = () => (
  <div>
    Component U
    <V />
  </div>
);

const T = () => (
  <div>
    Component T
    <U />
  </div>
);

const S = () => (
  <div>
    Component S
    <T />
  </div>
);

const R = () => (
  <div>
    Component R
    <S />
  </div>
);

const Q = () => (
  <div>
    Component Q
    <R />
  </div>
);

const P = () => {
  const color = useColor();
  return (
    <div>
      <button onClick={() => color.toggleColor()}>
        Change Color from comp P
      </button>
      Component P
      <Q />
    </div>
  );
};

const O = () => (
  <div>
    Component O
    <P />
  </div>
);

const N = () => (
  <div>
    Component N
    <O />
  </div>
);

const M = () => (
  <div>
    Component M
    <N />
  </div>
);

const L = () => (
  <div>
    Component L
    <M />
  </div>
);

const K = () => (
  <div>
    Component K
    <L />
  </div>
);

const J = () => (
  <div>
    Component J
    <K />
  </div>
);

const I = () => (
  <div>
    Component I
    <J />
  </div>
);

const H = () => (
  <div>
    Component H
    <I />
  </div>
);

const G = () => (
  <div>
    Component G
    <H />
  </div>
);

const F = () => (
  <div>
    Component F
    <G />
  </div>
);

const E = ({ color, setColor }) => (
  <div>
    <div style={{ backgroundColor: color }}>
      <button onClick={() => setColor(color === "red" ? "green" : "red")}>
        Change Color
      </button>
    </div>
    Component E
    <F />
  </div>
);

const D = ({ color, setColor }) => (
  <div>
    Component D
    <E color={color} setColor={setColor} />
  </div>
);

const C = ({ color, setColor }) => (
  <div>
    Component C
    <D color={color} setColor={setColor} />
  </div>
);

const B = ({ color, setColor }) => (
  <div>
    Component B
    <C color={color} setColor={setColor} />
  </div>
);

const A = ({ color, setColor }) => (
  <div>
    Component A
    <B color={color} setColor={setColor} />
  </div>
);

export default A;
