import React from 'react'
import Player from './Player'

export default {
  title: 'Player',
  component: Player,
}

const Template = args => <Player {...args} />

export const DefaultPlayer = Template.bind({})
DefaultPlayer.args = {
  name: 'peter pan',
  score: 0,
}

export const SecondPlayer = Template.bind({})
SecondPlayer.args = {
  name: 'marie moon',
  score: 20,
}
