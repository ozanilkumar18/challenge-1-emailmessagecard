import React, { FC } from "react";
import { ReplyAllIcon, ForwardIcon, EscalateIcon, DiscardIcon } from "./_/";

type IconProps = {
  type: string;
};

type IconProp = {
  replyAll: React.ComponentType;
  forward: React.ComponentType;
  escalate: React.ComponentType;
  discard: React.ComponentType;
};

const IconLibrary: IconProp = {
  replyAll: ReplyAllIcon,
  forward: ForwardIcon,
  escalate: EscalateIcon,
  discard: DiscardIcon,
};

const Icon: FC<IconProps> = ({ type }) => {
  const SelectedIcon = IconLibrary[type as keyof IconProp];
  return (
    <>
      <SelectedIcon />
    </>
  );
};

export default Icon;
