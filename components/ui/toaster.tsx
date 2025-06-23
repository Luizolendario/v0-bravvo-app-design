"use client"

import { Toast, ToastClose, ToastDescription, ToastProvider, ToastTitle, ToastViewport } from "@/components/ui/toast"
import { useToast } from "@/hooks/use-toast"

export function Toaster() {
  const { toasts } = useToast()

  return (
    <ToastProvider>
      {toasts.map(({ id, title, description, action, ...props }) => (
        <Toast key={id} {...props} className="dark:bg-gray-800 dark:border-gray-700">
          <div className="grid gap-1">
            {title && <ToastTitle className="dark:text-white">{title}</ToastTitle>}
            {description && <ToastDescription className="dark:text-gray-300">{description}</ToastDescription>}
          </div>
          {action}
          <ToastClose className="dark:text-gray-400 dark:hover:text-white" />
        </Toast>
      ))}
      <ToastViewport />
    </ToastProvider>
  )
}
