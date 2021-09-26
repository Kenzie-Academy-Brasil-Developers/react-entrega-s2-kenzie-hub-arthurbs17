import { TextField } from "@material-ui/core";
import Button from "../Button";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
const FormLogin = () => {
  const schema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Campo obrigatório!"),
    password: yup
      .string()
      .min(8, "8 caracteres no minímo")
      .matches(
        /^((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "A senha deve conter: uma letra maiúscula, uma minúscula, um número e um caracter especial!"
      )
      .required("Campo obrigatório!"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleForm = (data) => {
    axios
      .post("https://kenziehub.herokuapp.com/sessions", data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(handleForm)}>
        <TextField
          label="E-mail"
          variant="outlined"
          size="small"
          margin="dense"
          {...register("email")}
          error={!!errors.email}
          helperText={errors.email?.message}
        />
        <TextField
          label="Senha"
          variant="outlined"
          size="small"
          margin="dense"
          {...register("password")}
          error={!!errors.password}
          helperText={errors.password?.message}
        />
        <Button type="submit">Login</Button>
      </form>
    </div>
  );
};

export default FormLogin;
