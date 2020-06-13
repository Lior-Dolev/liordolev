import React from 'react'
import { storiesOf } from '@storybook/react' 
import { Button } from '../index'

storiesOf('Semantic', module)
.add('Button', () => (
  <div style={{padding: 10}}>
    <p>Default</p>
    <Button></Button>
    <hr />
  </ div>
))

