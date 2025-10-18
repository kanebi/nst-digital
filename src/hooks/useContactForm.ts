import { useState } from 'react'
import { supabase, type ContactFormData } from '../lib/supabase'

export const useContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const submitContactForm = async (formData: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    try {
      const { data, error } = await supabase
        .from('contact_submissions')
        .insert([
          {
            full_name: formData.full_name,
            email: formData.email,
            phone: formData.phone,
            business_name: formData.business_name,
            package_interest: formData.package_interest,
            project_description: formData.project_description,
            how_did_you_hear: formData.how_did_you_hear,
            status: 'new'
          }
        ])
        .select()

      if (error) {
        throw error
      }

      setSubmitStatus('success')
      return { success: true, data }
    } catch (error: any) {
      console.error('Error submitting contact form:', error)
      setErrorMessage(error.message || 'An error occurred while submitting the form')
      setSubmitStatus('error')
      return { success: false, error: error.message }
    } finally {
      setIsSubmitting(false)
    }
  }

  const resetForm = () => {
    setSubmitStatus('idle')
    setErrorMessage('')
  }

  return {
    isSubmitting,
    submitStatus,
    errorMessage,
    submitContactForm,
    resetForm
  }
}
