export const BasicFunction = () => {
  const increaseBy = (a: number, b: number): string => {
    return (a + b).toString();
  };

  return (
    <>
      <h1>Funciones</h1>
      <span>El resultado de sumar es : {increaseBy(2, 4)}</span>
    </>
  );
};
