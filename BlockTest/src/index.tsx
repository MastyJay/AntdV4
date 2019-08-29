import React, { Component, Suspense } from 'react';
import TextExtend from './components/TextExtend';

class MainComponent extends Component {
  state = {}

  render() {
    return (
      <>
        <TextExtend title='标题1' text='内容1' />
        <TextExtend title='标题2' text='内容2' />
      </>
    )
  }
}

export default MainComponent;