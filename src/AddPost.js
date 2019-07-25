import React, { Component } from 'react';
import PropTypes from "prop-types";
import firebase from 'firebase';
import {
    View, Text, StyleSheet, ScrollView, Alert,
    Image, TouchableOpacity, Dimensions
} from 'react-native';
import Realm from 'realm';
import ImagePicker from 'react-native-image-crop-picker';
import { TextInput } from 'react-native-gesture-handler';
import { v4 as uuid } from "uuid";
import { One_Image, Comment, Post, Clothes, Closet, User, Tag } from '../schemas';
import { storage, db } from "./config";

var base64js = require('base64-js');

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
// var realm;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        backgroundColor: '#000000',
        marginBottom: 10
    },
    text: {
        color: 'white',
        fontSize: 17,
        textAlign: 'center'
    },
    input: {
        color: '#000000',
        fontSize: 13
    }
});

export default class AddPost extends Component {

    // static propTypes = {
    //     user: PropTypes.object,
    //     // realm: PropTypes.object,
    // };

    constructor() {
        super();
        this.state = {
            image: null,
            images: [],
            description: "",
            hashtag: "",
            hashtagList: [],
            new_images: [],
            images_uri: [],
            data: []
        }
        this.pickMultiple();
    }

    pickSingleWithCamera(cropping, mediaType = 'photo') {
        ImagePicker.openCamera({
            cropping: cropping,
            width: 500,
            height: 500,
            includeExif: true,
            mediaType,
        }).then(image => {
            console.log('received image', image);
            this.setState({
                image: { uri: image.path, width: image.width, height: image.height, mime: image.mime },
                images: null
            });
        }).catch(e => alert(e));
    }

    pickSingle(cropit, circular = false, mediaType) {
        ImagePicker.openPicker({
            width: 500,
            height: 500,
            cropping: cropit,
            cropperCircleOverlay: circular,
            compressImageMaxWidth: 1000,
            compressImageMaxHeight: 1000,
            compressImageQuality: 1,
            includeExif: true,
        }).then(image => {
            console.log('received image', image);
            this.setState({
                image: { uri: image.path, width: image.width, height: image.height, mime: image.mime },
                images: null
            });
        }).catch(e => {
            console.log(e);
            Alert.alert(e.message ? e.message : e);
        });
    }

    pickMultiple() {
        ImagePicker.openPicker({
            multiple: true,
            waitAnimationEnd: false,
            includeBase64: true,
            includeExif: true,
            forceJpg: true,
        }).then(images => {
            this.setState({
                images: images.map(i => {
                    //var URI = this._base64ToArrayBuffer(i.data)
                    console.log('received image', i);
                    return { uri: i.path, width: i.width, height: i.height, mime: i.mime };
                }),
                image: images[0]
            });
        }).catch(e => alert(e));
    }

    async asyncForEach(array, callback) {
        var new_images_uri = [];
        var p_new_images = [];
        const { navigation } = this.props;

        for (let index = 0; index < array.length; index++) {
            // Alert.alert(JSON.stringify(array[index].uri));
            const ext = array[index].uri.split('.').pop();
            const filename = `${uuid()}.${ext}`;
            const storageRef = storage.ref(`/${filename}`);
            await storageRef.putFile(array[index].uri);
            const photoUri = await storageRef.getDownloadURL();
            new_images_uri.push(photoUri);
        }
        const user = Realm.Sync.User.current;
        const config = user.createConfiguration({
            sync: { url: 'realms://fashion.us1.cloud.realm.io/hello' },
            fullSynchronization: true,
        });
        config.schema = [One_Image, Comment, Post, Clothes, Closet, User, Tag];
        nowRealm = Realm.open(config).then((realm) => {
            realm.write(() => {
                //upload Post
                const newPostId = uuid();
                let newPost = realm.create("Post", {
                    userId: user.identity,
                    postId: newPostId,
                    description: this.state.description,
                    mainPostHeight: (this.state.image.height / this.state.image.width),
                    images: [],
                    tag: this.state.hashtagList
                });
                //upload Image
                for (let index = 0; index < array.length; index++) {
                    var image = this.state.images[index];
                    const user = Realm.Sync.User.current;
                    const newImageId = uuid();
                    newPost.images.push(newImageId);
                    realm.create("One_Image", {
                        userId: user.identity,
                        imageId: newImageId,
                        imageUri: new_images_uri[index],
                        imageWidth: image.width,
                        imageRatio: (image.height / image.width),
                        imageMime: image.mime
                    });
                }
                //update User
                // let updateUser = realm.create("User", {
                //     userId: user.identity,
                // }, true);
                // updateUser.posts.push(newPostId);
                //update Tag
                // for(let index = 0; index < this.state.hashtagList.length ; index++){
                //     var query = 'tagName == ';
                //     query += `'${this.state.hashtagList[index]}'`;
                //     let originTag = realm.objects("Tag");
                //     Alert.alert(JSON.stringify(originTag.length));
                //     let updateTag = realm.create("Tag", {tagName:this.state.hashtagList[index]}, true);
                //     if(originTag.length){
                //         let originList = updateTag[0].postIdList;
                //         originList.push(newPostId);
                //         updateTag.postIdList.push(originList);
                //         updateTag.postIdList.push(updateTag[0].clothesIdList);
                //     }
                //     else{
                //         updateTag.postIdList.push(newPostId);
                //     }
                // }
            });
        });
    }

    async uploadImageandPost() {
        this.asyncForEach(this.state.images, async (i) => {
            await waitFor(15);
        });
    }

    async post() {
        // const { user, realm } = this.props;
        if (!this.state.hashtag) {
            Alert.alert("", "tag is empty!");
            return;
        }
        this.hashtagFormat(this.state.hashtag)
        this.uploadImageandPost();
    }

    scaledHeight(oldW, oldH, newW) {
        return (oldH / oldW) * newW;
    }

    renderImage(image) {
        return <Image style={{ width: 300, height: 300, resizeMode: 'contain' }} source={image} />
    }

    renderAsset(image) {
        return this.renderImage(image);
    }
    hashtagFormat(hashtag){
        var ridComma = hashtag.replace(","," ")
        var modHash = ridComma.split(" ")
        var newHash = ""
        for(var i=0; i< modHash.length;i++){
            if(modHash[i].charAt(0) != "#"){
                newHash = ("#"+ modHash[i]);
                modHash[i] = newHash;
            } 
        }
        this.setState({hashtagList: modHash});
    }

    render() {

        return (<View style={styles.container}>
            <TouchableOpacity onPress={this.pickMultiple.bind(this)} style={styles.button}>
                <Text style={styles.text}>Re-Select</Text>
            </TouchableOpacity>
            <ScrollView horizontal={true}>
                {this.state.images ? this.state.images.map(i => <View key={i.uri}>{this.renderAsset(i)}</View>) : null}
            </ScrollView>
            <Text>HashTag</Text>
            <TextInput
                style={styles.input}
                placeholder="#HashTag"
                autoCapitalize="none"
                underlineColorAndroid='transparent'
                onChangeText={(hashtag) => this.setState({ hashtag })}
                value={this.state.hashtag}
            />
            <Text>Description</Text>
            <TextInput
                style={styles.input}
                placeholder="Description(Optional)"
                autoCapitalize="none"
                underlineColorAndroid='transparent'
                onChangeText={(description) => this.setState({ description })}
            />
            <TouchableOpacity onPress={this.post.bind(this)} style={styles.button}>
                <Text style={styles.text}>Post</Text>
            </TouchableOpacity>
        </View>);
    }
}