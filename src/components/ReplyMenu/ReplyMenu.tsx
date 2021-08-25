import React, { FC } from "react";
import { Dropdown, Menu, Row, Col, Button } from "antd";
import { Icon } from "../Icon";
import { ReplyIcon } from "../Icon/_/";

type OptionsProps = {
  onReplyAll: (message: string) => void;
  onForward: (message: string) => void;
  onDiscard: (message: string) => void;
  onEscalate: (message: string) => void;
};

const Options: FC<OptionsProps> = ({
  onReplyAll,
  onForward,
  onDiscard,
  onEscalate,
}) => (
  <Menu style={{ border: "1px solid #e7e7e7", boxShadow: "1px 1px #e7e8e8" }}>
    <Menu.Item key="1" style={{ fontSize: "16px", width: 135 }}>
      <Row
        justify="space-around"
        align="middle"
        onClick={(event: any) => {
          event.stopPropagation();
          onReplyAll(" called");
        }}
      >
        <Icon type="replyAll" />
        Reply all
      </Row>
    </Menu.Item>
    <Menu.Item key="2" style={{ fontSize: "16px", marginTop: "-10px" }}>
      <Row
        justify="space-around"
        align="middle"
        onClick={(event: any) => {
          event.stopPropagation();
          onForward(" called");
        }}
      >
        <Icon type="forward" />
        Forward
      </Row>
    </Menu.Item>
    <Menu.Item key="3" style={{ fontSize: "16px", marginTop: "-10px" }}>
      <Row
        justify="space-around"
        align="middle"
        onClick={(event: any) => {
          event.stopPropagation();
          onEscalate(" called");
        }}
      >
        <Icon type="escalate" />
        Escalate
      </Row>
    </Menu.Item>
    <Menu.Item key="4" style={{ fontSize: "16px", marginTop: "-10px" }}>
      <Row
        justify="space-around"
        align="middle"
        onClick={(event: any) => {
          event.stopPropagation();
          onDiscard(" called");
        }}
      >
        <Icon type="discard" />
        Discard
      </Row>
    </Menu.Item>
  </Menu>
);

type ToEmail = {
  onReply: (message: string) => void;
  onReplyAll: (message: string) => void;
  onForward: (message: string) => void;
  onDiscard: (message: string) => void;
  onEscalate: (message: string) => void;
};

const ReplyMenu: FC<ToEmail> = ({
  onReply,
  onReplyAll,
  onForward,
  onDiscard,
  onEscalate,
}) => {
  return (
    <>
      <div>
        <Dropdown.Button
          size="large"
          style={{ fontSize: "16px" }}
          overlay={
            <Options
              onReplyAll={onReplyAll}
              onForward={onForward}
              onDiscard={onDiscard}
              onEscalate={onEscalate}
            />
          }
          buttonsRender={([leftButton, rightButton]) => [
            <Button
              onClick={(event: any) => {
                onReply(" called");
                event.stopPropagation();
              }}
              size="large"
              icon={<ReplyIcon />}
            >
              Reply
            </Button>,
            rightButton,
          ]}
        >
          <Row>
            <Col span={8}>
              <ReplyIcon />
            </Col>
            <Col offset={4} span={8}>
              Reply
            </Col>
          </Row>
        </Dropdown.Button>
      </div>
    </>
  );
};

export default ReplyMenu;
