import React, { memo } from 'react'

// Arrayden mapledigimiz bir component, bu componenti 'memo' ile sarmalarsak liste her guncellendiginde her itemi guncellemez sadece yeni gelen, farkli olan item i render eder.
const todoItem = memo(({todoItem}) => {
    console.log('todo item rendered', todoItem);
  return (
    <li>{todoItem}</li>
  )
});

export default todoItem