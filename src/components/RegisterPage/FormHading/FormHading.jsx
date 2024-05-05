import { Heading } from '@radix-ui/themes';

const FormHading = ({ children }) => {
    return (
        <>
            <Heading as='h4' weight="medium" align="center" size="5">{children}</Heading>
        </>
    );
};

export default FormHading;