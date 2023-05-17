import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../pages/Home';
import DetalhesCirurgia from '../pages/StackPages/DetalhesCirurgia';

const Stack = createNativeStackNavigator()

export default function StackHome() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="HomeScreen" component={Home} options={{ headerShown: false }} />
            <Stack.Screen name="DetalhesCirurgia" component={DetalhesCirurgia} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}