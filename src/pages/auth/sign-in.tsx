import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const signInForm = z.object({
  email: z.string().email(),
})

type SignInForm = z.infer<typeof signInForm>

export function SignIn() {
  const {
    formState: { isSubmitting },
    handleSubmit,
    register,
  } = useForm<SignInForm>()

  async function handleSignIn(data: SignInForm) {
    try {
      console.info('🔴 data: ', data)
      await new Promise((resolve) => setTimeout(resolve, 2000))
      toast.success('Auth link has been sent to your e-mail.', {
        action: {
          label: 'Resend',
          onClick: () => handleSignIn(data),
        },
      })
    } catch {
      toast.error('Invalid credentials provided.')
    }
  }

  return (
    <>
      <Helmet title="Login" />
      <div className="p-8">
        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Access panel
            </h1>

            <p className="text-sm text-muted-foreground">
              Track your sales through the partner panel
            </p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit(handleSignIn)}>
            <div className="space-y-2">
              <Label htmlFor="email">Your e-mail</Label>
              <Input id="email" type="email" {...register('email')} />
            </div>

            <Button disabled={isSubmitting} className="w-full" type="submit">
              Access panel
            </Button>
          </form>
        </div>
      </div>
    </>
  )
}
