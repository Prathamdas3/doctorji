import { View } from "react-native";
import { Text, TextInput } from "react-native-paper";
type InputFieldProps = {
    label: string;
    value: string;
    placeholder: string;
    onChange: (text: string) => void;
    keyboardType?: 'default' | 'numeric';
};


export default function InputField({ label, value, placeholder, onChange, keyboardType = 'default' }: InputFieldProps) {
    return <View>
        <Text variant="titleMedium">{label}</Text>
        <TextInput
            mode="outlined"
            placeholder={placeholder}
            value={value}
            onChangeText={onChange}
            keyboardType={keyboardType}
        />
    </View>
} 