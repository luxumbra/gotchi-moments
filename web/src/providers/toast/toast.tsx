import React, { createContext, ReactNode } from 'react'

import { Toaster, ToastBar, toast, useToasterStore } from '@redwoodjs/web/toast'

import LoadingDots from 'src/components/LoadingDots'

interface ToastContextType {
  mintStatus: null
  mintError: null
}

const ToastContext = createContext<ToastContextType>({
  mintStatus: null,
  mintError: null,
})

interface ToastProviderProps {
  children: ReactNode
}

// https://react-hot-toast.com/docs/toaster

const ToastProvider: React.FC<ToastProviderProps> = ({
  children,
}): React.ReactElement => {
  const { toasts } = useToasterStore()

  return (
    <ToastContext.Provider
      value={{
        toast,
        toasts,
      }}
    >
      <Toaster
        position="top-right"
        toastOptions={{
          className: '',
          style: {
            color: '#000',
            fontSize: '14px',
          },
          success: { duration: 5000 },
          error: { duration: 10000 },
        }}
      >
        {(t) => (
          <ToastBar toast={t}>
            {({ icon, message }) => (
              <>
                <div className="mr-2">
                  {t.type === 'loading' ? <LoadingDots /> : icon}
                </div>
                {message}
                {t.type === 'loading' && (
                  <button className="ml-2" onClick={() => toast.dismiss(t.id)}>
                    X
                  </button>
                )}
              </>
            )}
          </ToastBar>
        )}
      </Toaster>
      {children}
    </ToastContext.Provider>
  )
}

const useToast = () => React.useContext(ToastContext)

export { ToastProvider, useToast }
