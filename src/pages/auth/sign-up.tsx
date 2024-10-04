import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const signUpForm = z.object({
  restaurantName: z.string(),
  managerName: z.string(),
  phone: z.string(),
  email: z.string().email(),
})

type SignUpForm = z.infer<typeof signUpForm>

export function SignUp() {
  const navigate = useNavigate()

  const {
    formState: { isSubmitting },
    handleSubmit,
    register,
  } = useForm<SignUpForm>()

  async function handleSignUp(data: SignUpForm) {
    try {
      console.info('🔴 data: ', data)
      await new Promise((resolve) => setTimeout(resolve, 2000))
      toast.success('Restaurant successfully registered.', {
        action: {
          label: 'Login',
          onClick: () => navigate('/sign-in'),
        },
      })
    } catch {
      toast.error('Error registering restaurant.')
    }
  }

  return (
    <>
      <Helmet title="Register" />
      <div className="p-8">
        <Button variant="ghost" asChild className="absolute right-8 top-8">
          <Link to="/sign-in">Sign in</Link>
        </Button>

        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Register free account
            </h1>

            <p className="text-sm text-muted-foreground">
              Become a partner and start your sales
            </p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit(handleSignUp)}>
            <div className="space-y-2">
              <Label htmlFor="restaurantName">Establishment name</Label>
              <Input
                id="text"
                type="restaurantName"
                {...register('restaurantName')}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="managerName">Your name</Label>
              <Input
                id="managerName"
                type="text"
                {...register('managerName')}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Your e-mail</Label>
              <Input id="email" type="email" {...register('email')} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Your phone number</Label>
              <Input id="phone" type="tel" {...register('phone')} />
            </div>

            <Button disabled={isSubmitting} className="w-full" type="submit">
              Complete registration
            </Button>

            <p className="px-6 text-center text-sm leading-relaxed text-muted-foreground">
              By continuing, you deliberately agree to our{' '}
              <a href="" className="underline underline-offset-4">
                Terms of Service
              </a>{' '}
              and{' '}
              <a href="" className="underline underline-offset-4">
                Privacy Policies
              </a>
              .
            </p>
          </form>
        </div>
      </div>
    </>
  )
}
