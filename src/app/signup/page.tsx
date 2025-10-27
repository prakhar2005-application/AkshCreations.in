'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/icons';
import { useAuth, useFirestore } from '@/firebase';
import { initiateEmailSignUp } from '@/firebase/non-blocking-login';
import { setDocumentNonBlocking } from '@/firebase/non-blocking-updates';
import { doc } from 'firebase/firestore';

export default function SignupPage() {
    const auth = useAuth();
    const firestore = useFirestore();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = async () => {
        if (!auth || !firestore) {
            console.error("Firebase services not available.");
            return;
        }
        
        try {
            initiateEmailSignUp(auth, email, password);
            
            // This is not ideal as we don't have the user object yet.
            // A better approach would be to use onAuthStateChanged to get the user
            // and then create the document. For this example, we will assume
            // we can get the user shortly after sign up is initiated.
            
            // A listener should be set up to capture the user and then save to firestore.
            const unsubscribe = auth.onAuthStateChanged(user => {
                if (user) {
                    const userRef = doc(firestore, 'users', user.uid);
                    setDocumentNonBlocking(userRef, {
                        id: user.uid,
                        firstName: name.split(' ')[0] || '',
                        lastName: name.split(' ').slice(1).join(' ') || '',
                        email: user.email,
                        phoneNumber: user.phoneNumber || ''
                    }, { merge: true });
                    unsubscribe(); // Unsubscribe after we have the user
                }
            });


        } catch (error) {
            console.error("Error signing up:", error);
        }
    };

    return (
        <div className="container flex min-h-[80vh] items-center justify-center py-12">
            <Card className="w-full max-w-sm">
                <CardHeader className="text-center">
                    <Link href="/" className="mb-4 inline-block mx-auto">
                        <Logo />
                    </Link>
                    <CardTitle className="font-headline text-2xl">Create an Account</CardTitle>
                    <CardDescription>Join AkshCreations to save your designs and track orders.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="grid gap-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" placeholder="John Doe" required value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="m@example.com" required value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                </CardContent>
                <CardFooter className="flex flex-col gap-4">
                    <Button className="w-full" onClick={handleSignUp}>Sign Up</Button>
                    <div className="text-center text-sm">
                        Already have an account?{' '}
                        <Link href="/login" className="underline">
                            Sign in
                        </Link>
                    </div>
                </CardFooter>
            </Card>
        </div>
    );
}
