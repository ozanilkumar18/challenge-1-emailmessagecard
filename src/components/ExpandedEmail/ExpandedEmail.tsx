import React, { FC } from "react";
import { Row, Col } from "antd";
import DOMPurify from "dompurify";
import { ReplyMenu } from "../ReplyMenu";
import { formatDate } from "../../helpers";
import { EmailAddress } from "../EmailAddress";

type ExpandedEmailProps = {
  to: {
    name?: string | undefined;
    email: string;
  }[];
  from: {
    name?: string | undefined;
    email: string;
  };
  date: number;
  cc: {
    name?: string | undefined;
    email: string;
  }[];
  content: string;
  defaultExpanded: boolean;
  cardViewToggle: (key: any) => void;
  onReply: (message: string) => void;
  onReplyAll: (message: string) => void;
  onForward: (message: string) => void;
  onDiscard: (message: string) => void;
  onEscalate: (message: string) => void;
};

const ExpandedEmail: FC<ExpandedEmailProps> = ({
  to,
  from,
  date,
  cc,
  content,
  onReply,
  onForward,
  onDiscard,
  onReplyAll,
  onEscalate,
  defaultExpanded,
  cardViewToggle,
}) => {
  return (
    <>
      <Row justify="start">
        <Col span={10} onClick={cardViewToggle}>
          <Row justify="start">
            <b>{`${from.name} (${from.email})`}</b>
            <div>{formatDate(date)}</div>
          </Row>
        </Col>
        <Col span={8}></Col>
        <Col span={6}>
          <Row justify="end">
            <ReplyMenu
              onReply={onReply}
              onReplyAll={onReplyAll}
              onForward={onForward}
              onDiscard={onDiscard}
              onEscalate={onEscalate}
            />
          </Row>
        </Col>
        <Row>
          <Col span={24} onClick={cardViewToggle}>
            <EmailAddress type="To" emails={to} />
            <EmailAddress type="Cc" emails={cc} />
          </Col>
        </Row>
        <div
          onClick={(event: any) => event.stopPropagation()}
          style={{ marginTop: "15px" }}
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(content),
          }}
        ></div>
      </Row>
    </>
  );
};
export default ExpandedEmail;
