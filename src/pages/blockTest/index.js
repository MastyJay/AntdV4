import React, { PureComponent } from 'react';
import { Button } from 'antd';

class BlockTest extends PureComponent {
  render() {
    const { aa } = this.props;
    return (
      <div>
        111
        <Button>click me</Button>
      </div>
    )
  }
}

export default BlockTest;
