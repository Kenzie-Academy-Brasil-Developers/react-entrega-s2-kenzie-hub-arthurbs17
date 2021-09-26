import { TextField } from "@material-ui/core";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../Button";
const FormRegister = () => {
  const schema = yup.object().shape({
    name: yup
      .string()
      .max(18, "18 caracteres no máximo")
      .required("Campo obrigatório!")
      .matches(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/),
    email: yup.string().email("Email inválido").required("Campo obrigatório!"),
    password: yup
      .string()
      .min(8, "8 caracteres no minímo")
      .matches(
        /^((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "A senha deve conter: uma letra maiúscula, uma minúscula, um número e um caracter especial!"
      )
      .required("Campo obrigatório!"),
    course_module: yup.string().required("Campo obrigatório!"),
    contact: yup.string(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleForm = (data) => {
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(handleForm)}>
        <TextField
          label="Nome"
          variant="outlined"
          size="small"
          margin="dense"
          {...register("name")}
          error={!!errors.name}
          helperText={errors.name?.message}
        />
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
        <TextField
          label="Módulo do Curso"
          variant="outlined"
          size="small"
          margin="dense"
          {...register("course_module")}
          error={!!errors.course_module}
          helperText={errors.course_module?.message}
        />
        <TextField
          label="Link Perfil"
          variant="outlined"
          size="small"
          margin="dense"
          {...register("contact")}
          error={!!errors.contact}
          helperText={errors.contact?.message}
        />
        <Button type="submit">Enviar</Button>
      </form>
    </div>
  );
};

export default FormRegister;
