import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"

import Login from '../pages/Login'
//import Logado from '../pages/Home'
import Bemvindo from "../pages/Bemvindo";
import register from "../pages/Register";
import home from "../pages/Home";
import brochure from "../pages/Catalago";
import CadastroProduct from "../pages/CadastroProduto";


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs() {
return(
    <Tab.Navigator>
        <Tab.Screen name="home" component={home} options={{headerShown: false}}/>
        <Tab.Screen name="catalago" component={brochure} options={{headerShown: false}}/>
    </Tab.Navigator>
    );
}

export default function Routes(){
    return(
                <Stack.Navigator>
                    <Stack.Screen
                    name="Bem-vindo"
                    component={Bemvindo}
                    options={{headerShown: false}}/>
                    
                    <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{ headerShown: false}}/>
                    
                    <Stack.Screen
                    name="register"
                    component={register}
                    options={{ headerShown: false}}/>
        
                    <Stack.Screen
                    name="home"
                    component={Tabs}
                    options={{ headerShown: false}}
                    />
                    <Stack.Screen
                    name="catalago"
                    component={brochure}
                    options={{headerShown: false}}
                    />
                    <Stack.Screen
                    name="CadastroProduct"
                    component={CadastroProduct}
                    options={{headerShown: false}}/>
                
                </Stack.Navigator>
        );
        }
    
