interface Props {
  children?: string;
}
const Btn = ({ children = "btn" }: Props) => {
  return <a href={`/${children}`}>{children} </a>;
};

export default Btn;
