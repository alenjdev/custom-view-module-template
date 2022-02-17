import { Component, ReactNode } from "react";
import { Device } from "@formant/data-sdk";
import { Button } from "../common/Button";

interface ICommandIssuerProps {
  device: Device;
  command: string;
}

export class CommandIssuer extends Component<ICommandIssuerProps> {
  private issueCommand = async () => {
    const { device, command } = this.props;
    if (!device) return;
    device.sendCommand(command, "");
  };

  render(): ReactNode {
    const { command } = this.props;
    return (
      <div>
        <Button onClick={this.issueCommand} type="primary" size="large">
          {command}
        </Button>
      </div>
    );
  }
}
