import { useForm } from "react-hook-form";
type FormImputs = {
  email: string;
  password: string;
};
export const FormPage = () => {
  const { register } = useForm<FormImputs>({
    defaultValues: {
      email: "brasanluc122@gmail.com",
      password: "ABC123",
    },
  });

  return (
    <>
      <form>
        <h3 style={{ textAlign: "center" }}>Formularios</h3>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <input type="text" placeholder="Email" {...register("email")} />
          <input type="text" placeholder="password" {...register("password")} />

          <button type="submit">Ingresar</button>
        </div>
      </form>
    </>
  );
};
