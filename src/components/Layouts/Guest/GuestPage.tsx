const GuestPage = ({
  children,
  title,
}: {
  children: React.ReactElement;
  title: string;
}) => {
  return (
    <div className="space-y-8">
      <h2 className="text-center text-3xl font-bold tracking-tight">{title}</h2>
      {children}
    </div>
  );
};

export default GuestPage;
