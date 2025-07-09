import { images } from '@/constants';
import { Slot } from 'expo-router';
import {
    Dimensions,
    Image,
    ImageBackground,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    View,
} from 'react-native';
import CustomButton from '@/components/CustomButton';
import CustomInput from '@/components/CustomInput';

const _Layout = () => {
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <ScrollView
                className="bg-white h-full"
                keyboardShouldPersistTaps="handled"
            >
                <View
                    className="w-full relative"
                    style={{ height: Dimensions.get('screen').height / 2.25 }}
                >
                    <ImageBackground
                        source={images.loginGraphic}
                        className="size-full rounded-b-lg"
                        resizeMode="stretch"
                    />
                    <Image
                        source={images.logo}
                        className="self-center size-48 absolute -bottom-16 z-10"
                    />
                </View>
                <CustomInput
                    placeholder="Enter Your Email"
                    value={''}
                    onChangeText={() => {}}
                    label="Email"
                    secureTextEntry={false}
                    keyboardType="email-address"
                />
                <CustomButton />
            </ScrollView>
            <Slot />
        </KeyboardAvoidingView>
    );
};

export default _Layout;
