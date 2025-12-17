import { LoginForm } from '@/features/auth/components/login-form';
import { requireAuth } from '@/lib/auth-utils';


export const Page = async () => {
    await requireAuth();

    return (
        <LoginForm />
    )
};

export default Page;
