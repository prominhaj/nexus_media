"use client";
import { Button, Spinner } from "@radix-ui/themes";
import { useFormStatus } from 'react-dom';

const SubmitButton = ({ loading, className, children }) => {
    const { pending } = useFormStatus();

    return (
        <Button type="submit" className={`${className} !cursor-pointer`} disabled={loading || pending} variant="solid">
            {loading || pending && <Spinner loading />}
            {children ? children : "Submit"}
        </Button>
    );
};

export default SubmitButton;