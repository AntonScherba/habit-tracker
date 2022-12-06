const Default = ({ children }: { children: JSX.Element }) => {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello Default!</h1>
      <main>{children}</main>
    </>
  );
};

export default Default;
