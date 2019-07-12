import React, { useEffect } from "react";

import {
  Container,
  SectionForm,
  Title,
  DivIcons,
  ButtonSocial,
  IconFacebook,
  IconGoogle,
  TextForm,
  Form,
  Input
} from "./styles";

export default function Login() {
  useEffect(() => {
    document.title = "Login";
  }, []);

  return (
    <Container>
      <SectionForm>
        <Title>Entre</Title>
        <DivIcons>
          <ButtonSocial>
            <IconFacebook />
          </ButtonSocial>
          <ButtonSocial>
            <IconGoogle />
          </ButtonSocial>
        </DivIcons>
        <TextForm>ou use sua conta de email</TextForm>
        <Form>
          <Input type="email" placeholder="Email" />
        </Form>
      </SectionForm>
    </Container>
  );
}
