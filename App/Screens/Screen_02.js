import {View, Text, TextInput, Image, TouchableOpacity, FlatList} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Icon from 'react-native-vector-icons/FontAwesome'

const DATA = [
    {
        id: 'product_01',
        // img: '../Images/product_01.png',
        img: require('../Images/product_01.png'),
        title: 'Ca nấu lẩu, nấu mì mini',
        cost: '69.900 đ',
        discount: '-35%'
    },
    {
        id: 'product_02',
        // img: '../Images/product_02.png',
        img: require('../Images/product_02.png'),
        title: '1KG khô gà bơ tỏi',
        cost: '69.900 đ',
        discount: '-35%'
    },
    {
        id: 'product_03',
        // img: '../Images/product_03.png',
        img: require('../Images/product_03.png'),
        title: 'Xe cần cẩu đa năng',
        cost: '69.900 đ',
        discount: '-35%'
    },
    {
        id: 'product_04',
        // img: '../Images/product_04.png',
        img: require('../Images/product_04.png'),
        title: 'Đồ chơi dạng mô hình xe',
        cost: '69.900 đ',
        discount: '-35%'
    },
    {
        id: 'product_05',
        // img: '../Images/product_05.png',
        img: require('../Images/product_05.png'),
        title: 'Lãnh đạo đơn giản',
        cost: '69.900 đ',
        discount: '-35%'
    },
    {
        id: 'product_06',
        // img: '../Images/product_06.png',
        img: require('../Images/product_06.png'),
        title: 'Hiểu lòng trẻ con',
        cost: '69.900 đ',
        discount: '-35%'
    }

]

type ItemProps = {
    img: {default: any};
    title: string;
    cost: string;
    discount: string;
}

const Item = ({img, title, cost, discount}: ItemProps) =>(
    <View style={{flex: 1, width: '100%', height: 200, marginVertical:5, marginHorizontal: 10}}>
        <View style={{flex: 5, alignItems:'center'}}>
            <Image source={img} style={{width: 150, height: 100}}></Image>
        </View>
        <View style={{flex: 2}}>
            <Text>{title}</Text>
        </View>
        <View style={{flex: 1, flexDirection:'row' , alignItems:'center'}}>
            <View style={{flex: 2, flexDirection:'row', justifyContent:'space-around'}}>
                <Icon name="star" color='yellow'size={15}></Icon>
                <Icon name="star" color='yellow'size={15}></Icon>
                <Icon name="star" color='yellow'size={15}></Icon>
                <Icon name="star" color='yellow'size={15}></Icon>
                <Icon name="star" color='yellow'size={15}></Icon>
            </View>
            <View style={{flex:2}}>
                <Text>(15)</Text>
            </View>
        </View>
        <View style={{flex: 1, flexDirection:'row'}}>
            <Text style={{fontWeight: 'bold'}}>{cost}</Text>
            <Text style={{color:'silver'}}>{discount}</Text>
        </View>
    </View>
);




function HomeScreen() {
    return (
        <View style={{ flex: 1, paddingVertical: 10}}>
            <FlatList
                data={DATA}
                renderItem={({item}) => <Item img={item.img} title={item.title} cost={item.cost} discount={item.discount}/>}
                keyExtractor={item => item.id}
                numColumns={2}
            />
        </View>
    );
}

function Header(){
    return(
        <View style={{flex: 1, flexDirection:'row', width: 370, height: 100, justifyContent:'space-around'}}>
            <View style={{flex: 1, justifyContent:'center', alignItems:'center'}}>
                <Icon name="arrow-left" size={20} color='white'/>
            </View>
            <View style={{flex: 4, flexDirection:'row', marginVertical: 10, marginHorizontal: 10, backgroundColor: 'white', alignItems:'center'}}>
                <Icon name='search' size={30}></Icon>
                <TextInput placeholder="Search" placeholderTextColor='silver' style={{outlineStyle:'none'}}></TextInput>
            </View>
            <View style={{flex: 1, justifyContent:'center', alignItems:'center'}}>
                <Icon name="shopping-cart" size={30} color='white'/>
            </View>
            <View style={{flex: 1, justifyContent:'center', alignItems:'center'}}>
                <Icon name="ellipsis-h" size={30} color='white'/>
            </View>
        </View>
    )
}


const Stack = createNativeStackNavigator();

function Screen_02() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerStyle:{backgroundColor:'#82CAFF'}}}>
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        headerTitle:()=><Header/>
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Screen_02;


