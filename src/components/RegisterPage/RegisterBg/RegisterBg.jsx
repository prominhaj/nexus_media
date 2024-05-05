import { Card, Heading } from '@radix-ui/themes';

const RegisterBg = ({ children }) => {
    return (
        <div
            className='px-3 py-10 bg-white dark:bg-[#111113]'
        >
            <Heading weight="medium" align="center" size="8">Nexus Media</Heading>
            <div className='max-w-[35rem] mx-auto mt-8'>
                <Card>
                    <div className='sm:p-3'>
                        {children}
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default RegisterBg;