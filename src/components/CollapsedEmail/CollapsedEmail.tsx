import React, { FC } from "react";
import { Row, Col } from "antd";
import { formatDate, getFiveWords } from "../../helpers";

type CollapsedEmailProps = {
  to: {
    name?: string | undefined;
    email: string;
  }[];
  date: number;
  preview: string;
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};

const CollapsedEmail: FC<CollapsedEmailProps> = ({
  to,
  preview,
  date,
  onClick,
}) => {
  function formatEmail(name: string | undefined, email: string) {
    return name ? name : email;
  }

  return (
    <Row justify="space-around" align="middle" onClick={onClick}>
      <Col span={16}>
        <b>{formatEmail(to[0].name, to[0].email)}</b>
        <div>{getFiveWords(preview)}</div>
      </Col>
      <Col span={8}>{formatDate(date)}</Col>
    </Row>
  );
};
export default CollapsedEmail;
