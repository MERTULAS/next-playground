import React, {memo} from 'react'

// Eger cagirilan komponente bagli bir method yoksa sadece 'memo' kullanimi yeterli olur.
const header = memo(() => {
    console.log('header rendered');
  return (
    <div>header</div>
  )
});

export default header