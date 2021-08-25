import React, { FC } from "react";
import { EmailMessageCard } from "../../components/EmailMessageCard";

const input = {
  id: "1234",
  dateTimeCreated: 1560120300000,
  from: { name: "Sianna Hallas", email: "shallas@gmail.com" },
  to: [
    { email: "support@company.com" },
    { name: "FirstName LastName", email: "name@gmail.com" },
  ],
  cc: [
    { name: "Support", email: "support@company.com" },
    { email: "name@gmail.com" },
  ],
  defaultExpanded: false,
  contentPreview:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in",
  content:
    "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p><p>Thanks,<br />Sianna</p>",
};

type EmailCardsProps = {};

const EmailCardsContainer: FC<EmailCardsProps> = () => {
  return <EmailMessageCard message={input} />;
};

export default EmailCardsContainer;
