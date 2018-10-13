// Import library to make a component
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

// Component AlbumList
class AlbumList extends Component {
    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => console.log(response))
    }

    render() {
        return (
            <View>
                <Text>Album List!!</Text>
            </View>
        );
    }
}

// Export component
export default AlbumList;
