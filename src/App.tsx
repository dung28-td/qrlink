import { useMemo, useState } from "react";
import { QRCodeSVG } from 'qrcode.react'

function App() {
  const [value, setValue] = useState('')
  const isUrl = useMemo(() => {
    try {
      new URL(value)
      return true
    } catch (error) {
      return false
    }
  }, [value])

  return (
    <div className="container mx-auto py-6 px-4 lg:px-0">
      <div className="flex flex-col items-center space-y-4">
        <h1 className="text-3xl	">Hello An!</h1>
        <input
          autoFocus
          type='text'
          value={value}
          onChange={e => {
            setValue(e.currentTarget.value)
          }}
          placeholder='Paste your link here'
          className="mt-1 block w-1/2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-center"
        />
        {isUrl && (
          <>
            <p>
              Link:{' '}
              <a
                href={value}
                target='_blank'
                rel='noreferrer'
                className="text-indigo-600"
              >
                {value}
              </a>
            </p>
            <QRCodeSVG
              value={value}
              width={180}
              height={180}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
