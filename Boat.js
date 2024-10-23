import { View, Text, Image, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome6";

const boats = [
    {
        name: 'Sea Ray 500 Sundancer',
        description: 'Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away.',
        picture: require('./assets/img/sea_ray.jpg'), // Corrected path
    },
    {
        name: 'Four Winns Horizon 180',
        description: 'A sporty look and refined details truly set the Horizon 180 above all others.',
        picture: require('./assets/img/four_winns.jpg'), // Corrected path
    },
    {
        name: 'Flipper 640 ST',
        description: 'A modern take on the classic, traditional hardtop and perfect for a family picnic.',
        picture: require('./assets/img/flipper.jpg'), // Corrected path
    },
    {
        name: 'Princess V48',
        description: 'There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model, available with the option of a climate controlled interior.',
        picture: require('./assets/img/princess.jpg'), // Corrected path
    },
    {
        name: 'Bayliner 175 Bowrider',
        description: 'Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance.',
        picture: require('./assets/img/bayliner.jpg'), // Corrected path
    },
    {
        name: 'Fairline Targa 47',
        description: 'Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit.',
        picture: require('./assets/img/fairline.jpg'), // Corrected path
    },
];

// Boat component definition
const Boat = () => {
    return (
        <View>
            {boats.map((boat, index) => (
                <View key={index} style={styles.boatContainer}>
                    <Image source={boat.picture} style={styles.image} /> {/* Use the picture from the boat object */}
                    <Text style={styles.name}>
                        <Icon name="sailboat" size={20} /> {boat.name}
                    </Text>
                    <Text style={styles.description}>{boat.description}</Text>
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    boatContainer: {
        marginBottom: 20,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        backgroundColor: '#f9f9f9',
    },
    image: {
        width: '100%', // Full width for the image
        height: 200, // Set a fixed height
        borderRadius: 8,
    },
    name: {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 10,
    },
    description: {
        fontSize: 14,
        color: '#555',
    },
});

export default Boat;
