import { supabase } from "./supabase"
import { SafeParseReturnType, z, ZodSchema } from "zod";

const signUpCredentialsSchema: ZodSchema = z.object({
  emailAddr: z.string().email(),
  password: z.string(),
  userName: z.string().max(10).min(3)
}) 

// type SignUpCredentials = z.infer<typeof signUpCredentialsSchema>
type SignUpCredentials = {
  emailAddr: string, 
  password: string,
  userName: string
}

async function getSignedUpEmail(signUpData: SignUpCredentials) {

  const credentialsValidation: SafeParseReturnType<any, SignUpCredentials> = signUpCredentialsSchema.safeParse(signUpData)

  if ( !credentialsValidation.success ){
    return credentialsValidation.error
  }

  const credentialData: SignUpCredentials = credentialsValidation.data

  const { user, session, error } = await supabase.auth.signUp(
    {
      email: credentialData.emailAddr,
      password: credentialData.password,
    },
    {
      data: {
       user_name: credentialData.userName,
    }
   }
  )
  if (error?.status) {
    return error
  }
  return session 
}

// async function getSignedUpGoogle() {
//   
// }

export { getSignedUpEmail }
