"use client";
import { Button, Spinner } from "@radix-ui/themes";
import { useFormStatus } from 'react-dom';

const SubmitButton = ({ className, children }) => {
    const { pending } = useFormStatus()
    return (
        <Button className={`${className} !cursor-pointer`} disabled={pending} variant="solid">
            {pending && <Spinner loading />}
            {children ? children : "Submit"}
        </Button>
    );
};

export default SubmitButton;