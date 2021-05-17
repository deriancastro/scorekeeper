import React from 'react'
import Button from './Button'

export default {
  title: 'Button',
  component: Button,
  argTypes: { onClick: { action: 'onClick' } },
}

const Template = args => <Button {...args}>Reset scores</Button>
export const DefaultForm = Template.bind({})
DefaultForm.arg = {}
