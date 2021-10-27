/**
 * @Author: ZEESHAN AHMAD
 * @Date:   2021-10-26 10:23:58
 * @Last Modified by:   ZEESHAN AHMAD
 * @Last Modified time: 2021-10-26 10:31:18
 */
import React from "react";
import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

const options = {
  timeout: 5000,
  position: positions.MIDDLE,
};
function Routes() {
  return <Provider template={AlertTemplate} {...options}></Provider>;
}

export default Routes;
