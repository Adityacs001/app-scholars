import tw, { css } from "twin.macro";

const hoverStyles = css`
  &:hover {
    border-color: black;
    ${tw`text-black`}
  }
`;
const Input = ({ hasHover }) => (
  <input css={[tw`border`, hasHover && hoverStyles]} />
);

const InputStyled = tw.input`border hover:border-black`;

const Index = () => (
  <div className="">
    <div tw="max-w-4xl mx-auto p-5 mt-5">
      <h1 tw="text-blue-900 text-7xl">Hello world</h1>
      <Input hasHover={true} />
    </div>
  </div>
);

export default Index;
