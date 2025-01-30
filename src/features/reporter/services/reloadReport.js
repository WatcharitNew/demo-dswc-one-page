import { useMutation } from '@tanstack/react-query'

export const reloadReport = async () => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("")
    }, 5000)
  })
}

export const useReloadReport = () => {
  return useMutation({
    mutationFn: reloadReport,
  })
}
