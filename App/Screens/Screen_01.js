import { FlatList, TouchableOpacity, StyleSheet, Text, View , Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const DATA = [
    {
        id: 'product_01',
        // img: '../Images/product_01.png',
        img: require('../Images/product_01.png'),
        title: 'Ca nấu lẩu, nấu mì mini',
        shop:'Devang'
    },
    {
        id: 'product_02',
        // img: '../Images/product_02.png',
        img: require('../Images/product_02.png'),
        title: '1KG khô gà bơ tỏi',
        shop:'LTD Food'
    },
    {
        id: 'product_03',
        // img: '../Images/product_03.png',
        img: require('../Images/product_03.png'),
        title: 'Xe cần cẩu đa năng',
        shop:'Thế giới đồ chơi'
    },
    {
        id: 'product_04',
        // img: '../Images/product_04.png',
        img: require('../Images/product_04.png'),
        title: 'Đồ chơi dạng mô hình xe',
        shop:'Thế giới đồ chơi'
    },
    {
        id: 'product_05',
        // img: '../Images/product_05.png',
        img: require('../Images/product_05.png'),
        title: 'Lãnh đạo đơn giản',
        shop:'Minh Long Book'
    },
    {
        id: 'product_06',
        // img: '../Images/product_06.png',
        img: require('../Images/product_06.png'),
        title: 'Hiểu lòng trẻ con',
        shop:'Minh Long Book'
    }

]

type ItemProps = {
    img: {default: any};
    title: string;
    shop: string;
}

const Item = ({img, title, shop}: ItemProps) =>(
    <View style={{flexDirection: 'row'}}>
        <View style={{flex: 2, alignItems:'center'}}>
            <Image source={img} style={{width: 100, height:100}}/>
        </View>
        <View style={{flex: 3,}}>
            <Text style={{fontWeight: 'bold', fontSize: 15}}>{title}</Text>
            <Text style={{color: 'red', fontWeight: 'bold'}}>Shop {shop}</Text>
        </View>
        <View style={{flex: 2.5, justifyContent:'center', alignItems:'center'}}>
            <TouchableOpacity style={{backgroundColor: 'red', width: 80, height: 50, justifyContent:'center', alignItems:'center'}}>
                <Text style={{color:'white', fontSize: 20}}>Chat</Text>
            </TouchableOpacity>
        </View>
    </View>
);

function Screen_01(){
    return(
        <View style={{flex:1, width: '100%', backgroundColor: 'silver'}}>
            <View style={{flex:1, backgroundColor: '#82CAFF', flexDirection:'row'}}>
                <View style={{flex: 1, justifyContent:'center', alignItems:'center'}}>
                    <Icon name='arrow-left' size={20} style={{color:'white'}}></Icon>
                </View>
                <View style={{flex: 4, justifyContent:'center', alignItems:'center',}}><Text style={{color:'white', fontSize: 19}}>Chat</Text></View>
                <View style={{flex: 1, justifyContent:'center', alignItems:'center'}}>
                    <Icon name='shopping-cart' size={20} style={{color:'white'}}></Icon>
                </View>
            </View>
            <View style={{flex:1, justifyContent:'center', alignItems:'center', paddingHorizontal: 30}}>
                <Text>Bạn có thắc mắc với sản phẩm vừa xem.Đừng ngại chat với shop!</Text>
            </View>
            <View style={{flex: 10}}>
                <FlatList
                    data={DATA}
                    renderItem={({item}) => <Item img={item.img} title={item.title} shop={item.shop}/>}
                    keyExtractor={item => item.id}
                    // numColumns={2}
                />
            </View>
            <View style={{flex:1, backgroundColor: '#82CAFF', flexDirection:'row'}}>
                <View style={{flex: 1, justifyContent:'center', alignItems:'center'}}>
                    <Icon name='ellipsis-v' size={20} style={{color:'white'}}></Icon>
                </View>
                <View style={{flex: 4, justifyContent:'center', alignItems:'center'}}>
                    <Icon name='home' size={20} style={{color:'white'}}></Icon>
                </View>
                <View style={{flex: 1, justifyContent:'center', alignItems:'center'}}>
                    <Icon name='arrow-circle-o-left' size={20} style={{color:'white'}}></Icon>
                </View>
            </View>
        </View>
    )
}




export default Screen_01;