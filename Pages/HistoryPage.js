import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, Text, SafeAreaView, View, Button, FlatList, Image, TouchableOpacity } from 'react-native'
import auth from '@react-native-firebase/auth';
import { AuthContext } from '../Authentication/AuthProvider';
import firestore from '@react-native-firebase/firestore'
import { Card } from 'react-native-shadow-cards'
import database from '@react-native-firebase/database'


const HistoryPage = () => {


    const [data, setData] = useState({})
    const [dataDummy, setDataDummy] = useState({
        key1: {
            NamaBarang: 'jeruk nipis',
            Jumlah: 21
        },
        key2: {
            NamaBarang: 'jeruk nipis',
            Jumlah: 21
        }
    })

    const getDataHistory = () => {
        database()
            .ref('coba/')
            .on('value', snapshot => {
                // let data = snapshot.val() ? snapshot.val() : {};
                // let todoItems = { ...data };
                // setData(data)
                // console.log(data);

                let values = [];
                snapshot.forEach((child) => {
                    values.push(child.val());
                });
                console.log(values);
                setData(values)

                // let keys = [],
                //     values = [];
                // snapshot.forEach((child) => {
                //     keys.push(child.key);
                //     values.push(child.val());
                // });
                // console.log(keys, values);
            });
    }



    useEffect(() => {
        getDataHistory()
    }, [])


    const catalogFlatList = ({ item }) => (
        <Card style={styles.catalog}>
            {/* <Image
                style={styles.image}
                source={{ uri: `${item.image}` }} /> */}
            <View style={styles.textflatlist}>
                <Text>{item.NamaBarang}</Text>
                <Text>Jumlah : {item.Jumlah}</Text>
            </View>
        </Card>
    )

    const { logout } = useContext(AuthContext)


    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={data}
                renderItem={catalogFlatList}
                keyExtractor={data => data.ID}
            />
            <Button title='Sign Out' onPress={() => logout()} />
        </SafeAreaView>
    )
}

export default HistoryPage

const styles = StyleSheet.create({
    catalog: {
        // borderColor: '#d0d0d0',
        // borderWidth: 1,
        margin: 13,
        flexDirection: 'row',
        borderRadius: 10,
        elevation: 4
    },
    image: {
        width: 100,
        height: 100,
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10
    },
    textflatlist: {
        justifyContent: 'space-evenly',
        marginLeft: 10
    },
    container: {
        flex: 1
    }
})
