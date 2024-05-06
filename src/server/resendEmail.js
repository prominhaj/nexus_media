import EmailTemplate from '@/components/Shared/EmailTemplate/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const resendEmail = async (toEmail, name) => {
    try {
        const data = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: [toEmail],
            subject: 'Nexus Media Registered Successfully',
            react: EmailTemplate(name)
        });

        return data;
    } catch (error) {
        return { error };
    }
};
