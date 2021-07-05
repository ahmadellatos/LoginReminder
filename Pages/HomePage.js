import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, Text, SafeAreaView, View, Button, FlatList, Image, TouchableOpacity } from 'react-native'
import auth from '@react-native-firebase/auth';
import { AuthContext } from '../Authentication/AuthProvider';
import firestore from '@react-native-firebase/firestore'
import { Card } from 'react-native-shadow-cards'
import database from '@react-native-firebase/database'


const HomePage = () => {


    const [data, setData] = useState()

    const getDataCatalog = () => {
        firestore()
            .collection('Catalog')
            .get()
            .then(querySnapshot => {
                const catalogData = []
                console.log('Total Barang ', querySnapshot.size);

                querySnapshot.forEach(documentSnapshot => {
                    catalogData.push(documentSnapshot.data())
                    // console.log(catalogData)
                });
                setData(catalogData)
            });
    }

    const pushDataCatalog = (item) => {
        database()
            .ref('dariReactNative/')
            .set({
                NamaBarang: item.namabarang,
                Jumlah: item.stok
            })
            .then(() => console.log('Data set.'));
    }

    useEffect(() => {
        getDataCatalog()
    }, [])

    console.log(data)

    const catalogFlatList = ({ item }) => (
        <TouchableOpacity onPress={() => pushDataCatalog(item)}>
            <Card style={styles.catalog}>
                <Image
                    style={styles.image}
                    source={{ uri: `${item.image}` }} />
                <View style={styles.textflatlist}>
                    <Text>{item.namabarang}</Text>
                    <Text>Stok : {item.stok}</Text>
                </View>
            </Card>
        </TouchableOpacity>
    )

    const { logout } = useContext(AuthContext)


    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={data}
                renderItem={catalogFlatList}
                keyExtractor={data => data.id}
            />
            <Button title='Sign Out' onPress={() => logout()} />
        </SafeAreaView>
    )
}

export default HomePage

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
