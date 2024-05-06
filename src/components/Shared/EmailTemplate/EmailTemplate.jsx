

const EmailTemplate = (name) => {
    return (
        <div className="container p-4 mx-auto">
            <div className="mb-8 text-center">
                <h1 className="text-2xl font-bold">Welcome to Nexus Media</h1>
            </div>
            <p>Hello {name},</p>
            <p>You are a SuccessFul Register From Nexus Media</p>
            <p>Best regards,<br />Acme Team</p>
            <div className="mt-8 text-center">
                <p>&copy; 2024 Nexus Media. All rights reserved.</p>
            </div>
        </div>
    );
};

export default EmailTemplate;