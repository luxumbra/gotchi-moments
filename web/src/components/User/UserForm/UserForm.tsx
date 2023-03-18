import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  CheckboxField,
  Submit,
} from '@redwoodjs/forms'

import type { EditUserById, UpdateUserInput } from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'




type FormUser = NonNullable<EditUserById['user']>

interface UserFormProps {
  user?: EditUserById['user']
  onSave: (data: UpdateUserInput, id?: FormUser['id']) => void
  error: RWGqlError
  loading: boolean
}

const UserForm = (props: UserFormProps) => {
  const onSubmit = (data: FormUser) => {
  
    
    
  
    
    
  
    
    
  
    
    
  
    
    
  
    
    
  
    
    
  
    
    
  
    
    
  
    
    
  
    
    
  
    
    
  
    props.onSave(data, props?.user?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormUser> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />
      
        <Label
          name="username"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Username
        </Label>
        
          <TextField
            name="username"
            defaultValue={props.user?.username}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
        

        <FieldError name="username" className="rw-field-error" />

        <Label
          name="address"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Address
        </Label>
        
          <TextField
            name="address"
            defaultValue={props.user?.address}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
        

        <FieldError name="address" className="rw-field-error" />

        <Label
          name="locale"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Locale
        </Label>
        
          <TextField
            name="locale"
            defaultValue={props.user?.locale}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
        

        <FieldError name="locale" className="rw-field-error" />

        <Label
          name="email"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Email
        </Label>
        
          <TextField
            name="email"
            defaultValue={props.user?.email}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
        

        <FieldError name="email" className="rw-field-error" />

        <Label
          name="mfa_enabled"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Mfa enabled
        </Label>
        
          <CheckboxField
            name="mfa_enabled"
            defaultChecked={props.user?.mfa_enabled}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
        

        <FieldError name="mfa_enabled" className="rw-field-error" />

        <Label
          name="imageSrc"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Image src
        </Label>
        
          <TextField
            name="imageSrc"
            defaultValue={props.user?.imageSrc}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
        

        <FieldError name="imageSrc" className="rw-field-error" />

        <Label
          name="country"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Country
        </Label>
        
          <TextField
            name="country"
            defaultValue={props.user?.country}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
        

        <FieldError name="country" className="rw-field-error" />

        <Label
          name="banned"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Banned
        </Label>
        
          <CheckboxField
            name="banned"
            defaultChecked={props.user?.banned}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
        

        <FieldError name="banned" className="rw-field-error" />

        <Label
          name="blocked"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Blocked
        </Label>
        
          <CheckboxField
            name="blocked"
            defaultChecked={props.user?.blocked}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
        

        <FieldError name="blocked" className="rw-field-error" />

        <Label
          name="betaAccess"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Beta access
        </Label>
        
          <CheckboxField
            name="betaAccess"
            defaultChecked={props.user?.betaAccess}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
        

        <FieldError name="betaAccess" className="rw-field-error" />

        <Label
          name="refreshToken"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Refresh token
        </Label>
        
          <TextField
            name="refreshToken"
            defaultValue={props.user?.refreshToken}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
        

        <FieldError name="refreshToken" className="rw-field-error" />

        <Label
          name="accessToken"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Access token
        </Label>
        
          <TextField
            name="accessToken"
            defaultValue={props.user?.accessToken}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
        

        <FieldError name="accessToken" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit
            disabled={props.loading}
            className="rw-button rw-button-blue"
          >
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default UserForm
