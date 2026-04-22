import { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useDebouncedLocalStorage } from '../hooks/useLocalStorage';
import { STORAGE_KEYS } from '../utils/storage';
import { submitContactFormWithRetry, getRateLimitResetTime } from '../utils/formSubmit';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Mail, Linkedin, Github, Loader2 } from 'lucide-react';
import { motion } from 'motion/react';
import { toast } from 'sonner';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export function Contact() {
  const { t } = useLanguage();
  
  // Use debounced localStorage for auto-save (500ms delay)
  const [savedDraft, setSavedDraft, clearDraft, isSaving] = useDebouncedLocalStorage<FormData>(
    STORAGE_KEYS.CONTACT_FORM_DRAFT,
    { name: '', email: '', message: '' },
    500
  );
  
  const [formData, setFormData] = useState<FormData>(savedDraft);
  const [showRestoreDialog, setShowRestoreDialog] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Check if there's a saved draft on mount
  useEffect(() => {
    const hasDraft = savedDraft.name || savedDraft.email || savedDraft.message;
    if (hasDraft && !formData.name && !formData.email && !formData.message) {
      setShowRestoreDialog(true);
    }
  }, []);

  // Sync formData to savedDraft for auto-save
  useEffect(() => {
    setSavedDraft(formData);
  }, [formData, setSavedDraft]);

  const handleRestoreDraft = () => {
    setFormData(savedDraft);
    setShowRestoreDialog(false);
    toast.info('Draft restored');
  };

  const handleDiscardDraft = () => {
    clearDraft();
    setShowRestoreDialog(false);
    toast.info('Draft discarded');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Prevent double submission
    if (isSubmitting) return;
    
    setIsSubmitting(true);
    
    // Show loading toast
    const loadingToastId = toast.loading('Sending your message...');
    
    try {
      // Submit with retry logic (up to 2 retries)
      const result = await submitContactFormWithRetry(formData);
      
      // Dismiss loading toast
      toast.dismiss(loadingToastId);
      
      if (result.success) {
        // Success!
        toast.success(result.message || 'Message sent successfully!');
        
        // Clear form and draft
        setFormData({ name: '', email: '', message: '' });
        clearDraft();
      } else {
        // Handle different error types
        if (result.error === 'RATE_LIMITED') {
          const resetTime = getRateLimitResetTime();
          toast.error(`Too many submissions. Please wait ${Math.ceil(resetTime / 60)} minutes.`);
        } else if (result.error === 'VALIDATION_ERROR') {
          toast.error(result.message);
        } else if (result.error === 'MISSING_ACCESS_KEY') {
          toast.error('Form not configured. Please contact the site administrator.');
          console.error('Web3Forms access key not configured in formSubmit.ts');
        } else {
          toast.error(result.message || 'Failed to send message. Please try again.');
        }
      }
    } catch (error) {
      // Dismiss loading toast
      toast.dismiss(loadingToastId);
      
      // Unexpected error
      console.error('Form submission error:', error);
      toast.error('An unexpected error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Restore Draft Dialog */}
        {showRestoreDialog && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 p-4 bg-blue-50 border-2 border-blue-200 rounded-lg flex items-center justify-between"
          >
            <p className="text-blue-900">
              You have a saved draft. Would you like to restore it?
            </p>
            <div className="flex gap-2">
              <Button
                size="sm"
                variant="outline"
                onClick={handleDiscardDraft}
                className="border-blue-300 text-blue-700 hover:bg-blue-100"
              >
                Discard
              </Button>
              <Button
                size="sm"
                onClick={handleRestoreDraft}
                className="bg-blue-600 hover:bg-blue-700"
              >
                Restore
              </Button>
            </div>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              {t('contact.title')}
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-2">
            {t('contact.subtitle')}
          </p>
          <p className="text-gray-500">
            {t('contact.description')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6" aria-label="Contact form">
              {/* Auto-save indicator */}
              {isSaving && (
                <div className="flex items-center gap-2 text-sm text-gray-500" role="status" aria-live="polite">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  <span>Saving draft...</span>
                </div>
              )}
              
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">
                  {t('contact.name')} <span className="text-red-500" aria-label="required">*</span>
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  aria-required="true"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  {t('contact.email')} <span className="text-red-500" aria-label="required">*</span>
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  aria-required="true"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  {t('contact.message')} <span className="text-red-500" aria-label="required">*</span>
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  aria-required="true"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full min-h-[150px]"
                  placeholder="Tell me about your project..."
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label={isSubmitting ? "Sending message" : "Send message"}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  t('contact.send')
                )}
              </Button>

              {/* Rate limit info */}
              <p className="text-xs text-gray-500 text-center">
                Protected by rate limiting. Maximum 3 submissions per 5 minutes.
              </p>
            </form>
          </motion.div>

          {/* Right Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl">
              <h3 className="text-xl mb-6 text-gray-900">
                {t('footer.connect')}
              </h3>
              
              <div className="space-y-4">
                <a
                  href="mailto:chunghienkhang@gmail.com"
                  className="flex items-center gap-4 p-4 bg-white rounded-xl hover:shadow-md transition-shadow group"
                >
                  <div className="p-3 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                    <Mail className="size-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Email</div>
                    <div className="text-gray-900">chunghienkhang@gmail.com</div>
                  </div>
                </a>

                <a
                  href="https://wa.me/84386190663"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white rounded-xl hover:shadow-md transition-shadow group"
                >
                  <div className="p-3 bg-green-100 rounded-lg group-hover:bg-green-200 transition-colors">
                    <svg className="size-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">WhatsApp</div>
                    <div className="text-gray-900">+84 386 190 663</div>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/hien-khang-chung-677105284/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white rounded-xl hover:shadow-md transition-shadow group"
                >
                  <div className="p-3 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                    <Linkedin className="size-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">LinkedIn</div>
                    <div className="text-gray-900">Chung Hiến Khang</div>
                  </div>
                </a>

                <a
                  href="https://www.datacamp.com/portfolio/chunghienkhang"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white rounded-xl hover:shadow-md transition-shadow group"
                >
                  <div className="p-3 bg-cyan-100 rounded-lg group-hover:bg-cyan-200 transition-colors">
                    <svg className="size-6 text-cyan-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.18L19.82 8 12 11.82 4.18 8 12 4.18zM4 9.5l7 3.5v7l-7-3.5v-7zm9 10.5v-7l7-3.5v7l-7 3.5z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">{t('contact.datacamp')}</div>
                    <div className="text-gray-900">View Portfolio</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl">
              <h3 className="text-xl mb-4 text-gray-900">💡 Quick Note</h3>
              <p className="text-gray-700 leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}