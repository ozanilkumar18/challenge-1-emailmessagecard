import React, { FC } from "react";

type EmailAddressProps = {
  type: string;
  emails: {
    name?: string;
    email: string;
  }[];
};

const EmailAddress: FC<EmailAddressProps> = ({ type, emails }) => {
  function formatEmail(name: string | undefined, email: string) {
    return name ? `${name} (${email}); ` : `${email}; `;
  }
  return (
    <div>
      <b>{type}</b>
      <span style={{ color: "#979797" }}>{` ${emails
        .map((item) => formatEmail(item.name, item.email))
        .join("")}`}</span>
    </div>
  );
};
export default EmailAddress;
