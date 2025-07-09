import React, { useState } from 'react';
import { Alert, Text, View } from 'react-native';
import CustomInput from '@/components/CustomInput';
import CustomButton from '@/components/CustomButton';
import { Link, router } from 'expo-router';

const SignUp = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [form, setForm] = useState({ name: '', email: '', password: '' });

    const submit = async () => {
        if (!form.name || !form.email || !form.password)
            Alert.alert(
                'Error',
                'Please fill all valid name, email and password'
            );
        setIsSubmitting(true);

        try {
            // call appwrite signup fn
            Alert.alert('Success', 'You have successfully signed in');
            router.replace('/');
        } catch (error: any) {
            Alert.alert('Error', error.message);
        } finally {
            setIsSubmitting(false);
        }
    };
    return (
        <View className="gap-10 bg-white rounded-lg p-5 mt-5">
            <CustomInput
                placeholder="Enter Your Full Name"
                value={form.name}
                onChangeText={(text) =>
                    setForm((prev) => ({ ...prev, name: text }))
                }
                label="Full Name"
            />
            <CustomInput
                placeholder="Enter Your Email"
                value={form.email}
                onChangeText={(text) =>
                    setForm((prev) => ({ ...prev, email: text }))
                }
                label="Email"
                secureTextEntry={false}
                keyboardType="email-address"
            />
            <CustomInput
                placeholder="Enter Your Password"
                value={form.password}
                onChangeText={(text) =>
                    setForm((prev) => ({ ...prev, password: text }))
                }
                label="Password"
                secureTextEntry={true}
            />
            <CustomButton
                title="Sign In"
                isLoading={isSubmitting}
                onPress={submit}
            />
            <View className="flex justify-center flex-row gap-2">
                <Text className="base-regular text-dark-100">
                    {`Don't have an account? `}
                </Text>
                <Link href="/sign-in" className="base-bold text-primary">
                    Sign In
                </Link>
            </View>
        </View>
    );
};

export default SignUp;
