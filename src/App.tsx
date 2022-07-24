import { useState } from "react";
import { QRCodeSVG } from 'qrcode.react'

function App() {
  const [value, setValue] = useState('')

  return (
    <div>
      <input
        autoFocus
        value={value}
        onChange={e => {
          setValue(e.currentTarget.value)
        }}
        placeholder='https://example.com/'
      />
      {value && (
        <div>
          <p>
            <a
              href={value}
              target='_blank'
              rel='noreferrer'
            >
              {value}
            </a>
          </p>
          <QRCodeSVG
            value={value}
          />
        </div>
      )}
    </div>
  );
}

export default App;
