import { useForm } from "react-hook-form";
type FormImputs = {
  email: string;
  password: string;
};
export const FormPage = () => {
  const { register, handleSubmit, formState, watch } = useForm<FormImputs>({
    defaultValues: {
      email: "brasanluc122@gmail.com",
      password: "ABC123",
    },
  });

  const onSubmit = (myForm: FormImputs) => {
    console.log({ myForm });
  };

  console.log(watch("email"));

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3 style={{ textAlign: "center" }}>Formularios</h3>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <input
            type="text"
            placeholder="Email"
            {...(register("email"), { required: true })}
          />
          <input type="text" placeholder="password" {...register("password")} />

          <button type="submit">Ingresar</button>
        </div>
      </form>

      <pre>{JSON.stringify(formState, null, 2)}</pre>
    </>
  );
};
