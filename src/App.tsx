import React, { FC } from "react";
import { Row, Col } from "antd";
import { EmailCardsContainer } from "./container/EmailCardsContainer";
import "./App.css";

const App: FC = () => (
  <div className="App">
    <Row>
      <Col span={12} offset={6}>
        <EmailCardsContainer />
      </Col>
    </Row>
  </div>
);

export default App;
