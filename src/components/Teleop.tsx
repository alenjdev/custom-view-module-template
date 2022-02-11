import { Component, ReactNode } from "react";
import { Fleet, Device, Authentication, App } from "@formant/data-sdk";

interface ITeleopProps {
  device: Device | undefined;
}

export class Teleop extends Component<{}, ITeleopProps> {
  public constructor(props: any) {
    super(props);
    this.state = {
      device: undefined,
    };
  }

  public componentDidMount = async () => {
    if (await Authentication.waitTilAuthenticated()) {
      this.setState({ device: await Fleet.getCurrentDevice() });
    }
  };

  render(): ReactNode {
    const { device } = this.state;
    return (
      <div>
        <p>{device?.name || "Device.Name"}</p>
      </div>
    );
  }
}
