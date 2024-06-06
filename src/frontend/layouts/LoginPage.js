import React, { useState } from 'react';
import { Input, Button, Card, CardBody, Typography } from '@material-tailwind/react';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        // Handle login logic here
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <Card className="w-96">
                <CardBody>
                    <Typography variant="h4" color="blue-gray" className="mb-6 text-center">
                        Login
                    </Typography>
                    <form onSubmit={handleLogin}>
                        <div className="mb-4">
                            <Input
                                type="email"
                                color="blue"
                                size="lg"
                                label="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <Input
                                type="password"
                                color="blue"
                                size="lg"
                                label="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <Button type="submit" color="blue" size="lg" fullWidth>
                            Login
                        </Button>
                    </form>
                </CardBody>
            </Card>
        </div>
    );
};

export default LoginPage;
