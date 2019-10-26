import React, {Component} from "react";
import {
    View,
    Modal,
    ActivityIndicator,
    StyleSheet,
    Text,
    TouchableOpacity,
    FlatList
} from 'react-native';
import styles from './styles';

const numColumns = 4;

import IconIonicons from 'react-native-vector-icons/Ionicons';

const familyMap = {
    Ionicons: IconIonicons
};

class IconPicker extends Component {


    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
    }



    formatData = (data, numColumns) => {
        const numberOfFullRows = Math.floor(data.length / numColumns);

        let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
        while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
            data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
            numberOfElementsLastRow++;
        }

        return data;
    };

    renderItem = ({ item, index }) => {
        if (item.empty === true) {
            return <View style={[styles.item, styles.itemInvisible]} />;
        }

        const Icon = familyMap[item.family];

        if (!Icon) return <View style={[styles.item, styles.itemInvisible]} />;

        return (
            <TouchableOpacity
                style={styles.item}
                onPress={() => {
                    this.setState({visible: false});
                    this.props.onSelect(item);
                }}
            >
                <Icon name={item.icon} size={30} color="#000"/>
            </TouchableOpacity>
        );

    };

    render() {

        const {visible} = this.state;
        const {icons} = this.props;
        const title = this.props.title ? this.props.title : 'Choose icon...';
        const loaderColor = this.props.loaderColor ? this.props.loaderColor : '#0d0';
        const labelStyle = this.props.labelStyle ? this.props.labelStyle : {};

        const data = [];
        icons.map( i => {
            const family = i.family;
            i.icons.map( j => {
                const icon = {};
                icon.family = family;
                icon.icon = j;
                data.push(icon);
            })
        });

        console.log({data});
        /*const data = [
            { key: 'A' }, { key: 'B' }, { key: 'C' }, { key: 'D' }, { key: 'E' }, { key: 'F' }, { key: 'G' }, { key: 'H' }, { key: 'I' }, { key: 'J' },
            { key: 'K' },
            // { key: 'L' },
        ];*/

        return (
            <View>
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={visible}
                    onRequestClose={() => {
                        this.setState({visible: false})
                    }}>
                    <View style={styles.wrapper}>
                        <View style={styles.content}>
                            <Text style={styles.title}>{title}</Text>
                            <View>
                                <FlatList
                                    data={this.formatData(data, numColumns)}
                                    // style={styles.listContainer}
                                    renderItem={this.renderItem}
                                    numColumns={numColumns}
                                />
                            </View>
                        </View>
                    </View>
                </Modal>
                <TouchableOpacity onPress={() => this.setState({visible: true})}>
                    <Text>Open picker</Text>
                </TouchableOpacity>
            </View>
        );
    }
}



export default IconPicker;
