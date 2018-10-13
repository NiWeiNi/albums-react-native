// Import library 
import React from 'react';
import { View, Text } from 'react-native';

const AlbumDetail = (props) => {
    return (
        <View>
            <Text>{props.album.title}</Text>
        </View>
    )
};

// Export component
export default AlbumDetail;