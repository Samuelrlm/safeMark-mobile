import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackHome from './StackHome';

const Tab = createBottomTabNavigator();

export default function Routes() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: '#000000',
                    borderTopColor: 'rgba(255, 255, 255, 0.3)',
                    height: 64,
                },
            }}
        >
            <Tab.Screen name="Home" component={StackHome} 
                options={{
                    headerShown: false,
                }}
            />
        </Tab.Navigator>
    );
    }
