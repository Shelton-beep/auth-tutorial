import CardWrapper from "./card-wrapper";

export function LoginForm() {
  return (
    <CardWrapper
      headerLabel="Welcome Back"
      backButtonHref="/auth/register"
      backButtonLabel="Don't have an account?"
      showSocial
    >
      LoginForm
    </CardWrapper>
  );
}
