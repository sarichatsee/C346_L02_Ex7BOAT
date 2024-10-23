import { Text, ScrollView } from 'react-native';
import Boat from './Boat'; // Import the Boat component

const App = () => {
    return (
        <ScrollView>
            <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center', margin: 20 }}>GetABoat - For Sale</Text>
            <Boat /> {/* Render the Boat component which contains the boat data */}
        </ScrollView>
    );
};

export default App;