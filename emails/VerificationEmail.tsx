import {
  Html,
  Head,
  Font,
  Preview,
  Heading,
  Row,
  Section,
  Text,
  Button,
} from "@react-email/components";

interface VerifiactionEmailProps {
  username: string;
  otp: string;
}

export default function VerifiactionEmail({
  username,
  otp,
}: VerifiactionEmailProps) {
  return (
    <Html lang="en" dir="ltr">
      <Head>
        <time>Verification code</time>
        <Font
          fontFamily="Roboto"
          fallbackFontFamily={"Verdana"}
          webFont={{
            url: "https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Me5Q.ttf",
            format: "woff2",
          }}
          fontWeight={400}
          fontStyle="normal"
        />
      </Head>
    </Html>
  );
}
