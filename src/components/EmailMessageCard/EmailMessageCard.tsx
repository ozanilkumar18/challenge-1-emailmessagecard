import React, { FC, useState, useEffect } from "react";
import { Space, Card } from "antd";
import { CollapsedEmail } from "../CollapsedEmail";
import { ExpandedEmail } from "../ExpandedEmail";

type EmailMessageCardProps = {
  message: {
    to: {
      name?: string | undefined;
      email: string;
    }[];
    from: {
      name?: string | undefined;
      email: string;
    };
    cc: {
      name?: string | undefined;
      email: string;
    }[];
    dateTimeCreated: number;
    contentPreview: string;
    content: string;
    defaultExpanded: boolean;
  };
};

const EmailMessageCard: FC<EmailMessageCardProps> = ({
  message: {
    to,
    from,
    cc,
    content,
    defaultExpanded,
    dateTimeCreated,
    contentPreview,
  },
}) => {
  const [isCollapse, setIsCollapse] = useState<boolean>(true);

  function cardViewToggle(e: any) {
    e.stopPropagation();
    setIsCollapse(!isCollapse);
  }

  useEffect(() => {
    setIsCollapse(!defaultExpanded);
  }, [defaultExpanded]);

  return (
    <Space direction="vertical">
      <Card style={{ width: 650, cursor: "pointer" }}>
        {isCollapse ? (
          <CollapsedEmail
            onClick={cardViewToggle}
            to={to}
            date={dateTimeCreated}
            preview={contentPreview}
          />
        ) : (
          <ExpandedEmail
            cardViewToggle={cardViewToggle}
            defaultExpanded={defaultExpanded}
            to={to}
            from={from}
            date={dateTimeCreated}
            cc={cc}
            content={content}
            onReply={(message) => console.log("onReply", message)}
            onReplyAll={(message) => console.log("onReplyAll", message)}
            onForward={(message) => console.log("onForward", message)}
            onDiscard={(message) => console.log("onDiscard", message)}
            onEscalate={(message) => console.log("onEscalate", message)}
          />
        )}
      </Card>
    </Space>
  );
};
export default EmailMessageCard;
