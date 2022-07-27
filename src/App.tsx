import { useMemo } from "react";
import { useSearchParams } from 'react-router-dom'
import { QRCodeSVG } from 'qrcode.react'

function App() {
  const [searchParams, setSearchParams] = useSearchParams()
  const link = searchParams.get('link') || ''

  const isUrl = useMemo(() => {
    try {
      new URL(link)
      return true
    } catch (error) {
      return false
    }
  }, [link])

  return (
    <div className="container mx-auto py-6 px-4 lg:px-0">
      <div className="flex flex-col items-center space-y-4">
        <h1 className="text-3xl	">Hello An!</h1>
        <input
          autoFocus
          type='text'
          value={link}
          onChange={e => {
            const { value } = e.currentTarget
            if (value) {
              searchParams.set('link', value)
            } else {
              searchParams.delete('link')
            }
            setSearchParams(searchParams)
          }}
          placeholder='Paste your link here'
          className="mt-1 block w-1/2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-center"
        />
        {isUrl && (
          <>
            <p>
              Link:{' '}
              <a
                href={link}
                target='_blank'
                rel='noreferrer'
                className="text-indigo-600"
              >
                {link}
              </a>
            </p>
            <QRCodeSVG
              value={link}
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
